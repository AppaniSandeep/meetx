# 🏃‍♂️ MeetX - Activity Booking App (Backend API)

This is a simple RESTful API for an **Activity Booking App**, built as part of a backend development assignment. It supports user registration, login, listing public activities, booking activities, and retrieving user-specific bookings.

---

## 🚀 Features

- 🔐 **JWT Authentication** (Login + Protected Routes)
- 🧍‍♂️ User Registration and Login with Hashed Passwords (using `bcrypt`)
- 🎟️ Book an Activity
- 📋 View All My Bookings
- ⚽ Public Endpoint for Listing Available Activities
- ✅ Validations with Joi
- 🧪 Tested with Postman (collection included)
- ☁️ Ready for deployment (Render/Cyclic compatible)

---

## 📁 Project Structure

meetx/
├── Controllers/
├── Models/
├── Routes/
├── Middlewares/
├── server.js
├── .env
├── package.json
└── README.md

yaml

---

## 🛠️ Tech Stack

- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Joi
- **Password Security:** bcrypt

---

## 📦 Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/meetx-backend.git
cd meetx-backend
2. Install dependencies
bash
npm install
3. Setup .env file
Create a .env file in the root directory:

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
4. Seed sample activities (optional)
If you have a seeding script like seedActivities.js, run:

bash
node seedActivities.js
5. Run the server
bash
npm run dev    # if using nodemon
# OR
node server.js


