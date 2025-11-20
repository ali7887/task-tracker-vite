# Task Tracker - React + Vite + JSON Server

A modern and lightweight **Task Tracker** app built with **React** and **Vite**, featuring real-time CRUD operations with a **fake REST API** using **JSON Server**.  
Inspired by Google Keep and designed for learning real-world React concepts with backend integration.

---

## 🔥 Features

- **CRUD Operations with API**: Add, update, toggle, and delete tasks with backend persistence.
- **Filter Tasks**: View **All**, **Active**, or **Completed** tasks.
- **LocalStorage Sync**: Your tasks are saved in LocalStorage to prevent data loss.
- **Double Click to Edit**: Easily edit a task by double-clicking on it.
- **Responsive UI**: Clean and modern interface using minimal TailwindCSS styling.
- **Component-based Architecture**: Scalable React components for easy maintenance.

---

## 🛠 Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** JSON Server (Fake REST API)
- **Language:** JavaScript (ES6+)
- **Package Manager:** npm

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/task-tracker-vite.git
cd task-tracker-vite
npm install
npm install -g json-server
npm run dev
Open http://localhost:5173 in your browser.

task-tracker-vite/
 ├─ public/
 ├─ src/
 │   ├─ api/
 │   │   └─ tasksApi.js        # API calls
 │   ├─ components/
 │   │   ├─ Header.jsx
 │   │   ├─ AddTask.jsx
 │   │   ├─ TaskList.jsx
 │   │   └─ TaskItem.jsx
 │   ├─ App.jsx
 │   └─ main.jsx
 ├─ db.json                    # JSON Server database
 ├─ package.json
 └─ vite.config.js


✅ Usage

Add a task using the input field and "Add" button.

Toggle completion by clicking on a task.

Edit a task by double-clicking it.

Delete a task using the red "Delete" button.

Filter tasks with the All / Active / Completed buttons.

Changes are synced with JSON Server and LocalStorage.

🎯 Learning Outcomes

This project helps you learn:

React component-based architecture

Managing state and props

Using fetch API for real backend integration

Handling async/await in React

Implementing CRUD operations

Using LocalStorage for persistence

Building a modern UI with TailwindCSS

📌 Future Improvements

Add user authentication with JWT

Integrate React Query for smarter data fetching

Add drag-and-drop tasks reordering

Add notifications for completed tasks

🔗 Live Preview

Currently, this project is running locally using Vite and JSON Server.

👨‍💻 Author

ALI KANI – GitHub
