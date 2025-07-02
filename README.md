# ChamaPay

ChamaPay is a modern web application for managing Chama (group savings) activities, including member management, contributions, loans, expenses, notifications, and admin approvals. It features a secure authentication system, role-based access, and a beautiful, responsive UI.

## Features
- User registration and login (member & admin roles)
- Admin approval workflow for new admins
- Member and Chama (group) management
- Contribution tracking
- Loan management
- Expense tracking
- Transaction history
- Notifications
- Role-based dashboard and quick actions
- Theme toggle (light/dark mode)
- Responsive design

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Axios, Lucide React Icons
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, Nodemailer

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- MongoDB instance (local or cloud)

### 1. Clone the Repository
```bash
git clone https://github.com/Jakababa94/ChamaPay.git
cd ChamaPay
```

### 2. Backend Setup
```bash
cd server
pnpm install # or npm install
```

#### Create a `.env` file in `server/` with:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chamapay
JWT_SECRET=your_jwt_secret
ADMIN_INVITE_CODE=your_admin_invite_code
NOTIFY_EMAIL_USER=your_email@gmail.com
NOTIFY_EMAIL_PASS=your_email_password_or_app_password
SUPER_ADMIN_EMAIL=superadmin@example.com
```
- `ADMIN_INVITE_CODE`: Required for admin registration.
- `NOTIFY_EMAIL_USER`/`PASS`: Used for sending admin approval emails.
- `SUPER_ADMIN_EMAIL`: Where admin approval requests are sent.

#### Start the backend server:
```bash
pnpm dev # or npm run dev
```

---

### 3. Frontend Setup
```bash
cd ../client
pnpm install # or npm install
```

#### Start the frontend dev server:
```bash
pnpm dev # or npm run dev
```
- The frontend will proxy API requests to the backend at `http://localhost:5000`.

---

## Usage
- Visit `http://localhost:5173` to access the app.
- Register as a member or admin (admin requires invite code and approval).
- Admins can manage members, contributions, loans, expenses, and approve new admins.
- Use the theme toggle in the navbar to switch between light and dark mode.

## Project Structure
```
ChamaPay/
  client/      # React frontend
  server/      # Node.js/Express backend
```

## Scripts
- **Backend:**
  - `pnpm dev` — Start backend with nodemon
- **Frontend:**
  - `pnpm dev` — Start frontend dev server
  - `pnpm build` — Build frontend for production

## Security & Roles
- Only admins can access the dashboard and admin approval pages.
- Admin registration requires an invite code and super admin approval.
- All sensitive routes are protected by JWT and role-based middleware.

## Customization
- Update Tailwind theme in `client/tailwind.config.js`.
- Update backend email logic in `server/controllers/authController.js`.

## License
MIT

---

**Karibu saving with ChamaPay!** 