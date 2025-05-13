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
Copy
Edit

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
Copy
Edit
npm install
3. Setup .env file
Create a .env file in the root directory:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
4. Seed sample activities (optional)
If you have a seeding script like seedActivities.js, run:

bash
Copy
Edit
node seedActivities.js
5. Run the server
bash
Copy
Edit
npm run dev    # if using nodemon
# OR
node server.js
🧪 API Endpoints
Auth Routes
✅ Register
http
Copy
Edit
POST /api/auth/register
json
Copy
Edit
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456"
}
✅ Login
http
Copy
Edit
POST /api/auth/login
json
Copy
Edit
{
  "email": "john@example.com",
  "password": "123456"
}
Returns:

json
Copy
Edit
{
  "token": "JWT_TOKEN_HERE"
}
Public Routes
📋 Get All Activities
http
Copy
Edit
GET /api/activities
Protected Routes (Require Bearer Token)
🎟️ Book an Activity
http
Copy
Edit
POST /api/bookings
Headers: Authorization: Bearer <token>
json
Copy
Edit
{
  "activityId": "64c123456789abcd"
}
🧾 Get My Bookings
http
Copy
Edit
GET /api/bookings
Headers: Authorization: Bearer <token>
🔐 JWT Token Format
Send the token in the Authorization header:

http
Copy
Edit
Authorization: Bearer YOUR_JWT_TOKEN
📬 Postman Collection
The Postman collection file is included in the repo:
📁 postman_collection.json

You can import it into Postman and test all routes easily.

