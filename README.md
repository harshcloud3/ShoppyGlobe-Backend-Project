# ShoppyGlobe Backend API

## Project Description
ShoppyGlobe Backend API is an e-commerce backend application built using Node.js, Express.js, and MongoDB. It provides authentication, product management, and cart management APIs.

---

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- cors

---

## Features
- User Registration
- User Login
- JWT Authentication
- Product APIs
- Cart APIs
- Protected Routes
- CRUD Operations
- Error Handling

---

## Installation Steps

### Clone Repository
git clone YOUR_GITHUB_LINK

### Install Dependencies
npm install

### Create .env File

PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=shoppysecret

### Run Server
npm run dev

---

## API Endpoints

### Auth Routes
POST /api/auth/register
POST /api/auth/login

### Product Routes
GET /api/products
GET /api/products/:id

### Cart Routes
POST /api/cart
PUT /api/cart/:id
DELETE /api/cart/:id

---

## Author
Harsh Tiwari