# Learning Management System (LMS) – Certificate Management Module

## 📌 Project Overview
This project is a **Learning Management System (LMS)** developed as part of the **Naan Mudhalvan program**.  
It focuses on **Module 7: Certification Management**, where learners receive certificates after completing courses.

The system is built using the **MERN Stack**:
- **MongoDB** – Database
- **Express.js** – Backend framework
- **React.js** – Frontend library
- **Node.js** – Runtime environment

This project is designed for **beginners** to understand full-stack development concepts.

---

## 🎯 Objectives
- Manage users (Learners)
- Manage courses
- Automatically generate certificates after course completion
- Display certificates in a dashboard
- Understand backend–frontend communication

---

## 👥 User Roles
| Role        | Description |
|------------|-------------|
| Super Admin | Full system access |
| Admin / HR | User & report management |
| Trainer    | Course management |
| Learner    | Course access & certificates |

---

## 🧩 Module 7: Certification Management
### Features
- Automatic certificate generation
- Certificate includes:
  - Learner Name
  - Course Name
  - Completion Date
- Certificate dashboard for learners

---

## 🏗️ Project Structure
lms project
├── backend
│ ├── models
│ │ ├── user.js
│ │ ├── course.js
│ │ └── certificate.js
│ ├── routes
│ │ └── certificateRoutes.js
│ ├── server.js
│ ├── package.json
│ └── package-lock.json
│
├── frontend
│ ├── src
│ │ ├── CertificateDashboard.js
│ │ ├── App.js
│ │ └── index.js
│ ├── public
│ ├── package.json
│ └── package-lock.json
│
└── .gitignore

---

## ⚙️ Technologies Used
- Node.js
- Express.js
- MongoDB
- React.js
- Mongoose
- Axios
- VS Code

---

## ▶️ How to Run the Project

### 1️⃣ Backend Setup
```bash
cd backend
npm install
node server.js

Backend runs on:
http://localhost:5000
2️⃣ Frontend Setup
cd frontend
npm install
npm start
Frontend runs on:
http://localhost:3000

