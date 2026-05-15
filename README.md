# Subscription Tracker Backend

A production-ready backend API for tracking and managing user subscriptions. This project provides secure authentication, subscription CRUD operations, and automated workflow support for monitoring renewal dates and payment status.

## Features

- User registration and login
- JWT-based authentication and authorization
- Create, read, update, and delete subscriptions
- Track renewal dates and billing cycles
- Monitor subscription status and payment details
- Input validation and centralized error handling
- RESTful API architecture
- Environment-based configuration

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv

## Project Structure

```text
src/
├── config/         # Database and application configuration
├── controllers/    # Route handlers
├── middleware/     # Authentication and error middleware
├── models/         # Mongoose schemas
├── routes/         # API routes
├── utils/          # Utility functions
└── app.js          # Express app setup