# 📝 ToDo Smart Website

A modern, smart **ToDo management web app** built with **Next.js**, **Tailwind CSS**, **NextAuth.js**, **Google OAuth**, and **Gemini AI** integration.  
Easily manage your daily tasks, stay productive, and let AI help you organize better.  

---

## ✨ Features

- ✅ **Authentication with Google** (via NextAuth.js)  
- 🗂️ **Smart ToDo List** – add, edit, delete, and mark tasks as completed  
- ⚡ **Real-time Updates** with auto-save (debounced edit handling)  
- 🎨 **Responsive UI** powered by Tailwind CSS  
- 🔒 **Secure Routes** – tasks linked to user accounts  
- 🤖 **Gemini AI integration** for task suggestions and smart recommendations  
- 📱 **Mobile-friendly design**  

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/)  
- **Authentication:** [NextAuth.js](https://next-auth.js.org/) with Google Provider  
- **Database/API:** REST API endpoints with MongoDB (via Mongoose)  
- **AI Integration:** Google **Gemini API** for smart insights  
- **UI Components:** Tailwind, Lucide Icons  

---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/PavishK/ToDO-SMART
cd todo-smart
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env.local` file in the root and add:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Gemini API
GEMINI_API_KEY=your_gemini_api_key
```

### 4️⃣ Run the app

```bash
npm run dev
```

App runs at 👉 [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshots (Optional)

*Add screenshots or gifs of your app here for better presentation.*

---

## 🔮 Future Improvements

* 🌙 Dark mode support
* 📊 Analytics dashboard for completed tasks
* 🧠 More AI-powered task planning features
* 📱 PWA support for offline usage

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit pull requests.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

Developed with ❤️ by **PavishK**

* GitHub: [@PavishK](https://github.com/PavishK)
* LinkedIn: [Pavish-K](www.linkedin.com/in/pavish-k-12july2005)

```