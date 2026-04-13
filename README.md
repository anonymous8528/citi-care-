# 🌆 CitiCare – Smart Civic Issue Reporting System

🚀 A full-stack **MERN-based civic complaint management platform** that empowers citizens, officers, and administrators to collaborate for faster and more transparent issue resolution.

---

## 🌐 Live Demo

👉 https://anonymous8528.github.io/citi-care-/

---

## 📌 Overview

CitiCare is a modern web application designed to digitize and streamline municipal issue reporting. Citizens can report problems like garbage, road damage, or water leakage, while officers manage and resolve them efficiently under admin supervision.

---

## 🧠 Key Features

### 👤 Citizen

* 📝 Report issues with **description, photo, and live location**
* 📍 Automatic **geolocation tracking**
* 📊 Track issue **status and progress**
* 🧾 View personal issue history

### 🛠️ Officer

* 📋 View **assigned issues**
* 🔄 Update **status & progress**
* ✅ Mark issues as resolved

### 🧑‍💼 Admin

* 👥 Manage users (Citizen ↔ Officer)
* 📌 Assign officers to issues
* 📊 Monitor all reports

---

## 🏗️ Tech Stack

### Frontend

* ⚛️ React.js
* 🎨 Custom CSS (Modern UI)
* 🔁 React Router DOM

### Backend

* 🟢 Node.js
* 🚀 Express.js

### Database

* 🍃 MongoDB Atlas

### Other Integrations

* 🔐 JWT Authentication
* ☁️ Cloudinary (Image Upload)
* 📍 Geolocation API

---

## 📂 Project Structure

```
citi-care-/
│
├── client/          # React Frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── api/
│
├── backend/         # Node + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/anonymous8528/citi-care-.git
cd citi-care-
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm start
```

---

## 🚀 Deployment

### GitHub Pages (Frontend)

```bash
npm run deploy
```

---

## 🔐 Authentication Flow

* User registers/login
* JWT token generated
* Token stored in localStorage
* Protected routes via middleware
---

## 🧩 Role-Based Access

| Role    | Permissions                  |
| ------- | ---------------------------- |
| Citizen | Report & track issues        |
| Officer | Manage assigned issues       |
| Admin   | Manage users & assign issues |

---

## 💡 Future Improvements

* 🔔 Real-time notifications
* 📱 Mobile app version
* 🗺️ Map-based issue visualization
* 📊 Analytics dashboard for admins

---

## 🤝 Contributing

Contributions are welcome!

```bash
fork → clone → create branch → commit → push → PR
```

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Anuj Chaudhary**

* GitHub: https://github.com/anonymous8528

---

## ⭐ Show Your Support

If you like this project:

👉 Give it a ⭐ on GitHub
👉 Share it with others

---

💙 *Built with passion to improve smart city systems*
