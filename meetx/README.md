# MeetX Project

MeetX is a backend application that provides functionalities for managing activities, user authentication, and bookings. This project is built using Node.js and Express.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd meetx
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your environment variables.

## Usage

To start the server, run:
```
npm start
```
The server will run on the specified port (default is 4000).

## API Endpoints

### Authentication
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in an existing user.
- `GET /auth/verify`: Verify user token.

### Activities
- `POST /api/activities`: Create a new activity.
- `GET /api/activities`: Retrieve all activities.
- `GET /api/activities/:id`: Retrieve a specific activity by ID.
- `PUT /api/activities/:id`: Update an activity by ID.
- `DELETE /api/activities/:id`: Delete an activity by ID.

### Bookings
- `POST /api/bookings`: Create a new booking.
- `GET /api/bookings`: Retrieve all bookings.
- `GET /api/bookings/:id`: Retrieve a specific booking by ID.
- `PUT /api/bookings/:id`: Update a booking by ID.
- `DELETE /api/bookings/:id`: Delete a booking by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.