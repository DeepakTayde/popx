# React + Vite

Deployment Link[https://popx-three.vercel.app/]

# PopX – React Authentication Interface

PopX is a sleek, responsive React application that provides a complete user onboarding experience. It includes a welcome screen, signup and login forms with validation, and a personalized account dashboard. Built with TailwindCSS and React Router, PopX is ideal for modern web platforms requiring user authentication and contextual state management.

## ✨ Features

- 👋 Welcome screen with navigation to signup/login
- 🔐 Signup & Login forms with floating labels
- 📱 Phone number validation (10-digit format)
- 🧠 Context API for global user state
- 🎨 TailwindCSS for clean, responsive design
- 🔁 React Router for smooth page transitions
- 🧾 Account dashboard with user info and logout

## 🧱 Tech Stack

| Technology       | Purpose                          |
|------------------|----------------------------------|
| React            | UI and component logic           |
| TailwindCSS      | Styling and layout               |
| React Router     | Routing between pages            |
| Context API      | Global user state management     |

## 📁 Project Structure

src/ 
├── assets/ 
│ └── ProfilePhoto.jpg 
├── context/ 
│ └── userContext.jsx 
├── pages/ │ 
├── Welcome.jsx 
│ ├── Login.jsx 
│ ├── SignUp.jsx 
│ └── Account.jsx 
├── App.jsx 
├── index.js 
└── index.css



## 🧪 Validation Rules

- **Email**: Required, must be a valid format
- **Password**: Required
- **Phone Number**: Required, must be exactly 10 digits (`pattern="[0-9]{10}"`)
- **Full Name, Company**: Required
- **Agency**: Radio selection (Yes/No)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DeepakTayde/popx.git
cd popx


Install dependencies
npm install


Start the development server
npm start


🧭 Usage
Visit / to see the welcome screen

Navigate to /signup to create a new account

Navigate to /login to sign in

After login/signup, user is redirected to /account

Logout clears context and redirects to /

🧑‍💻 Author
Deepak Tayde