# Todo App

A simple, modular Todo application built using JavaScript, HTML, CSS, and Web Storage (localStorage). This project focuses on reinforcing core JavaScript concepts, modular architecture, and efficient DOM manipulation.

## 🚀 **Live Demo**

[View the App Here](https://ephraim-9.github.io/todo-app/)

## 📋 **Features**

- Add new tasks with a name, due date, and description.
- Persist tasks in localStorage, so they remain after page reloads.
- Dynamic rendering of tasks on the page.
- Clean and minimal UI with responsive design.

---

## 🧠 **Key Concepts Reinforced**

### 1. **Modular JavaScript with ES6 Modules**

- **Import/Export:** Organized code into modules (`dom.js`, `todo.js`, `storage.js`), improving readability and maintainability.
- **Separation of Concerns:** Clear division of functionality—DOM manipulation, data handling, and logic are neatly separated.

### 2. **Event Handling & Dynamic DOM Manipulation**

- **Event Listeners:** Managed form submissions and user interactions using `addEventListener`.
- **Dynamic Rendering:** Created elements with `createElement`, modified content using `innerHTML`, and efficiently updated the DOM.

### 3. **localStorage for Data Persistence**

- **Storing Data:** Utilized `localStorage` to keep tasks saved between sessions.
- **JSON Methods:** Reinforced `JSON.stringify` and `JSON.parse` for data serialization and retrieval.

### 4. **Webpack & Deployment with GitHub Pages**

- **Webpack:** Practiced bundling JavaScript modules efficiently.
- **Deployment:** Gained experience deploying projects on GitHub Pages, managing branches, and handling deployment-related issues.

---

## 🗂️ **File Structure**

```
├── index.html
├── index.js
├── dom.js
├── todo.js
├── storage.js
├── styles.css
└── README.md
```

---

## ⚡ **How to Run Locally**

1. Clone the repository:
   ```bash
   git clone https://github.com/Ephraim-9/todo-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run start
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

## 💭 **Reflection**

Working on this Todo App helped me solidify important JavaScript concepts like modular programming, dynamic DOM manipulation, and data persistence using localStorage. Debugging and handling deployment also sharpened my problem-solving skills, making me more confident in structuring future projects effectively.
