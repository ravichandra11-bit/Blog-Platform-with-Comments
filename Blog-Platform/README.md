# 📝 Blog Platform with Comments

A full-stack blogging application that allows users to create, manage, and interact with blog posts through comments. This project demonstrates authentication, CRUD operations, REST API development, and database integration.

---

## 🚀 Project Overview

The **Blog Platform with Comments** is a web-based content management system where users can:

* Create an account and securely login
* Write and publish blog posts
* Edit and delete their own posts
* View posts created by other users
* Add comments and interact with the community
* Manage content through secure APIs

The application follows a modern full-stack architecture with a React frontend and Node.js backend.

---

## ✨ Features

### 👤 User Authentication

* User registration
* User login/logout
* Password encryption
* JWT-based authentication
* Protected routes and APIs

### 📰 Blog Management

* Create new blog posts
* View all available blogs
* View individual blog details
* Update existing posts
* Delete posts
* Store blog creation date and author details

### 💬 Comment System

* Add comments on blog posts
* Display comments under posts
* User interaction through discussions
* Manage comments securely

### 🔐 Security

* Authentication middleware
* Token-based authorization
* Secure password handling

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios
* React Router

### Backend

* Node.js
* Express.js
* RESTful APIs
* JSON Web Token (JWT)
* bcrypt.js

### Database

* MongoDB
* Mongoose ODM

---

## 📂 Project Structure

```
Blog-Platform/

├── backend/
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   ├── Post.js
│   └── Comment.js
│
├── routes/
│   ├── authRoutes.js
│   ├── postRoutes.js
│   └── commentRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
└── frontend/
    └── src/
        ├── components/
        ├── pages/
        └── App.jsx
```

---

## ⚙️ Installation and Setup

### Clone Repository

```bash
git clone <repository-url>
```

Move into project folder:

```bash
cd Blog-Platform
```

---

# Backend Setup

Go to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run React application:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔌 API Endpoints

### Authentication

Register User:

```
POST /api/auth/register
```

Login User:

```
POST /api/auth/login
```

---

### Blog APIs

Get All Posts:

```
GET /api/posts
```

Create Post:

```
POST /api/posts
```

Update Post:

```
PUT /api/posts/:id
```

Delete Post:

```
DELETE /api/posts/:id
```

---

### Comment APIs

Add Comment:

```
POST /api/comments/:postId
```

Get Comments:

```
GET /api/comments/:postId
```

Delete Comment:

```
DELETE /api/comments/:id
```

---

## 🖥️ Application Flow

```
User
 |
Register/Login
 |
JWT Authentication
 |
Create Blog Post
 |
Database Storage
 |
Other Users View Posts
 |
Comment & Interaction
```

---

## 🎯 Learning Outcomes

By completing this project, you will learn:

* Full-stack web application development
* Frontend and backend communication
* REST API creation
* Database CRUD operations
* Authentication implementation
* Secure user management
* React component development
* Real-world project structure

---

## 🔮 Future Improvements

Possible enhancements:

* Image upload for blog posts
* Like and share functionality
* Rich text editor
* Admin dashboard
* Search and filtering
* Email verification
* Deployment using cloud services

---

## 👨‍💻 Author

**G Ravi Chandra**

Full Stack Development Project

---

## 📄 License

This project is created for educational and learning purposes.
