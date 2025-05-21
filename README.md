
# 📚 Book Management App

A simple and stylish React application for adding, browsing, and viewing details of books. Built using **React**, **Redux**, **React Router**, and **Tailwind CSS**.

## 🚀 Features

- 🔍 View all books  
- ➕ Add new books with validation  
- 🖼 View book details including image, author, title, description, and rating  
- ⚙️ State management using Redux  
- 💅 Responsive design using Tailwind CSS  
- 🔄 Dynamic routing using React Router  

---

## 📁 Project Structure

```

src/
│
├── components/
│   └── BookCard.jsx
│
├── pages/
│   ├── AddBookPage.jsx
│   ├── BrowseBooksPage.jsx
│   └── BookDetailsPage.jsx
│
├── redux/
│   ├── store.js
│   └── booksSlice.js
│
├── utils/
│   └── addBook.js
│
├── App.jsx
└── main.jsx

````

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/book-app.git
   cd book-app
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

---

## 📦 Technologies Used

* [React](https://reactjs.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [React Router](https://reactrouter.com/)
* [Tailwind CSS](https://tailwindcss.com/)

---

## 📌 Notes

* Currently, books are stored only in Redux state, meaning **they will reset on page reload**.
* To persist data across sessions, consider integrating **localStorage** or a **backend API**.

---

## 🎨 UI Highlights

* Clean, responsive form layout with Tailwind
* Gradient background and modern typography
* Interactive hover transitions and focus styles

---

## ✨ Future Improvements

* ✅ Persist books using localStorage or a backend (Firebase / Express)
* 🖼 Image preview when adding a book
* 📝 Add category/genre filtering
* 🔒 Form validation enhancements
* 🔎 Search functionality

---



## 🙌 Acknowledgements

* [Tailwind CSS Docs](https://tailwindcss.com/docs)
* [Redux Toolkit Docs](https://redux-toolkit.js.org/)
* [React Router Docs](https://reactrouter.com/en/main)

---

Made with ❤️ by \ Vadiraj Betageri

```


