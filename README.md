# 📝 ToDo Smart – AI-Powered Task Manager 🤖

A modern **AI-powered ToDo management web application** built using **Next.js**, **Tailwind CSS**, **NextAuth.js**, **Google OAuth**, **MongoDB**, and **Gemini AI**.

Stay productive, manage tasks smartly, and let **AI assist you** in planning your day efficiently.

🌐 **Live Demo**  
👉 https://to-do-smart.vercel.app/

📦 **GitHub Repository**  
👉 https://github.com/PavishK/ToDO-SMART.git

---

## ✨ Highlights

- 🔐 Secure **Google Authentication** (NextAuth.js)
- 🗂️ Smart ToDo management (CRUD)
- ⚡ Real-time task updates with auto-save
- 🤖 **Gemini AI** for task suggestions & productivity help
- 🎨 Clean, responsive UI with Tailwind CSS
- 📱 Fully mobile-friendly
- 🔒 User-specific secure routes & data

---

## 🚀 Tech Stack

### 🖥️ Frontend
- ⚛️ **Next.js**
- 🎨 **Tailwind CSS**
- 🎯 Lucide Icons

### 🔐 Authentication
- **NextAuth.js**
- Google OAuth Provider

### 🗄️ Backend / Database
- **MongoDB Atlas**
- **Mongoose**
- REST API Routes

### 🤖 AI Integration
- **Google Gemini API**

---

## 🌍 Live Application

- **Hosted on:** Vercel
- **Database:** MongoDB Atlas
- **Authentication:** Google OAuth

⚠️ *Note: Initial login may take a few seconds due to free-tier services.*

---

## 📸 Screenshots

### 🏠 Home / Login (Google Authentication)
![Home](https://github.com/user-attachments/assets/281123b8-0d05-4f17-9a98-f378d0649376)

---

### ✅ ToDo Dashboard – Manage Tasks
![Todos](https://github.com/user-attachments/assets/9ea5ff0f-de02-4ee1-b592-5f274e1c2228)

---

### 🤖 Ask AI – Gemini Assistant
![Ask AI](https://github.com/user-attachments/assets/b58b18e8-43cb-4ec7-b248-7ef89d9ecca9)

---

### 👤 Profile & Logout
![Profile](https://github.com/user-attachments/assets/594aa738-10fb-4db0-85d5-9bc5efdc0325)

---

## 📂 Project Structure

```

ToDO-SMART/
│── app/               # Next.js App Router
│── components/        # Reusable UI components
│── models/            # Mongoose schemas
│── lib/               # DB & auth configs
│── api/               # API routes
│── public/            # Static assets
│── README.md          # Documentation

````

---

## ⚙️ Getting Started (Local Setup)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/PavishK/ToDO-SMART.git
cd ToDO-SMART
````

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env.local` file in the root directory:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# MongoDB
MONGODB_URL=your_mongodb_connection_string

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key
```

🔐 **Security Note**
All sensitive keys shown in screenshots are **hidden, regenerated, or restricted**.
Never commit real credentials to GitHub.

---

### 4️⃣ Run the development server

```bash
npm run dev
```

🔗 Open in browser:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧠 Features Breakdown

* ✅ Create, update, delete ToDos
* ✏️ Auto-save while editing (debounced)
* 🔍 User-specific task isolation
* 🤖 Ask Gemini AI for task ideas & planning
* 🔐 Secure authentication with Google
* 🚪 Easy logout & profile access

---

## 🔮 Future Enhancements

* 🌙 Dark Mode
* 📊 Productivity analytics dashboard
* 🧠 Advanced AI task scheduling
* 📱 PWA support for offline usage
* 🔔 Reminders & notifications

---

## 🛠️ Build for Production

```bash
npm run build
npm start
```

---

## 🤝 Contributing

Contributions are welcome! 🚀

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push to your fork
5. Open a Pull Request

---

## 📜 License

This project is licensed under **MY License**.

---

## 👨‍💻 Author

Developed with ❤️ by **Pavish K**

* 🐙 GitHub: [@PavishK](https://github.com/PavishK)
* 💼 LinkedIn: [Pavish K](https://www.linkedin.com/in/pavish-k-12july2005)

⭐ If you like this project, don’t forget to **star the repository!**
