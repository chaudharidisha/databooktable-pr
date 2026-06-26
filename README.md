A simple **Online Book Store** web application built with **Next.js**, **React**, and **Bootstrap**. This application allows users to add, edit, delete, and manage books with data stored in the browser using **Local Storage**.

---

## 🚀 Features

- Add new books
- Edit existing books
- Delete books
- Display books in responsive Bootstrap cards
- Store book data using Local Storage
- Default placeholder image for missing URLs
- Image fallback for invalid image links
- Responsive and user-friendly interface

---

## 🛠️ Technologies Used

- Next.js
- React.js
- Bootstrap 5
- JavaScript (ES6)
- HTML5
- CSS3
- Local Storage API

---

## 📁 Project Structure

```
project-folder/
│
├── app/
│   └── page.js
│
├── public/
│
├── package.json
├── README.md
└── ...
```

---

## 📦 Installation

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Navigate to the project folder.

```bash
cd project-folder
```

3. Install dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm run dev
```

5. Open your browser and visit:

```
http://localhost:3000
```

---

## 📖 How to Use

### Add a Book

1. Enter the book name.
2. Enter an image URL (optional).
3. Enter the author's name.
4. Enter the category.
5. Enter the price.
6. Click **Add Book**.

---

### Edit a Book

1. Click the **Edit** button.
2. Modify the details.
3. Click **Save Changes**.

---

### Delete a Book

1. Click the **Delete** button.
2. Confirm the deletion.

---

## 💾 Data Storage

The application stores all book information in the browser using **Local Storage**.

Stored key:

```
bookstore_books
```

This allows the book list to remain available after refreshing the page.

---

## 📚 Book Object Structure

```javascript
{
  id: 1723456789012,
  name: "Atomic Habits",
  image: "https://example.com/book.jpg",
  author: "James Clear",
  category: "Self Help",
  price: "499"
}
```

---

## 🖥️ User Interface

The application contains:

- Book entry form
- Book image
- Book details
- Category badge
- Price display
- Edit button
- Delete button

---

## 📌 Validation

The application requires the following fields before adding a book:

- Book Name
- Author
- Price

If any required field is empty, an alert message is displayed.

---

## 🔄 CRUD Operations

### Create

- Add a new book.

### Read

- Display all books.

### Update

- Edit existing book details.

### Delete

- Remove books from the list.

---

## 🎯 Future Improvements

- Search books
- Filter by category
- Sort books by price or name
- Book description
- ISBN number
- Rating system
- Shopping cart
- User authentication
- Database integration (MongoDB/Firebase/MySQL)
- Dark mode
- Responsive animations

---

## 👨‍💻 Author

Developed as a React & Next.js CRUD project using Bootstrap and Local Storage.

---


Run the Project
npm install
npm run dev

Open http://localhost:3000 in your browser.


For Video : https://drive.google.com/file/d/192in5CqVrLtOc51Z1c5fuWvWzJNikjD2/view?usp=sharing
