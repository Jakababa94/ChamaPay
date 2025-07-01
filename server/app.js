require("dotenv").config();
const express = require('express');
const cors = require ("cors");
const connectDB = require("./config/db");

// Connect mongoDB
const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/chamas', require('./routes/chamaRoutes'));
app.use('/api/memberships', require('./routes/membershipRoutes'));
app.use('/api/contributions', require('./routes/contributionRoutes'));
app.use('/api/loans', require('./routes/loanRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/expenses', require('./routes/expenseRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost${PORT}`);
}); 