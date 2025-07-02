const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");
const User = require ("../models/User");
const nodemailer = require('nodemailer');

// Helper: send email
async function sendAdminApprovalEmail(newAdmin) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email provider
    auth: {
      user: process.env.NOTIFY_EMAIL_USER,
      pass: process.env.NOTIFY_EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.NOTIFY_EMAIL_USER,
    to: process.env.SUPER_ADMIN_EMAIL,
    subject: 'New Admin Registration Pending Approval',
    text: `A new admin has registered and is pending approval.\n\nName: ${newAdmin.name}\nEmail: ${newAdmin.email}\nPhone: ${newAdmin.phone}`,
  };
  await transporter.sendMail(mailOptions);
}

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, phone, password, role = 'member', inviteCode } = req.body;
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    let status = 'approved';
    if (role === 'admin') {
      if (!inviteCode || inviteCode !== process.env.ADMIN_INVITE_CODE) {
        return res.status(403).json({ error: 'Invalid or missing admin invite code' });
      }
      status = 'pending';
    }
    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email or phone already exists' });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    // Create user
    const user = new User({ name, email, phone, passwordHash, role, status });
    await user.save();
    if (role === 'admin') {
      await sendAdminApprovalEmail(user);
      return res.status(201).json({ message: 'Admin registration submitted. Awaiting approval.' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login user (by email or phone)
exports.login = async (req, res) => {
  try {
    const { identifier, password } = req.body; // identifier can be email or phone
    if (!identifier || !password) {
      return res.status(400).json({ error: 'Identifier and password are required' });
    }
    // Find user by email or phone
    const user = await User.findOne({ $or: [{ email: identifier }, { phone: identifier }] });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    if (user.status !== 'approved') {
      return res.status(403).json({ error: 'Account not approved. Please contact support.' });
    }
    // Check password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    // Create JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email, phone: user.phone, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, phone: user.phone, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

