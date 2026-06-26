'use client';
import { useState } from 'react';
import {  useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BookStore() {
  const [books, setBooks] = useState([]);

  const [bookName, setBookName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookName || !author || !price) return alert('Please fill in Name, Author, and Price!');

    if (editingId) {
      setBooks(books.map(book =>
        book.id === editingId
          ? { ...book, name: bookName, image: imageUrl || 'https://via.placeholder.com/150', author, category, price }
          : book
      ));
      setEditingId(null);
    } else {
      const newBook = {
        id: Date.now(),
        name: bookName,
        image: imageUrl || 'https://via.placeholder.com/150',
        author,
        category,
        price
      };
      setBooks([...books, newBook]);
    }

    clearForm();
  };

  useEffect(() => {
    const savedBooks = localStorage.getItem('bookstore_books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  }, []);

  useEffect(() => {
    if (books.length > 0 || localStorage.getItem('bookstore_books')) {
      localStorage.setItem('bookstore_books', JSON.stringify(books));
    }
  }, [books]);

  const handleEditClick = (book) => {
    setEditingId(book.id);
    setBookName(book.name);
    setImageUrl(book.image);
    setAuthor(book.author);
    setCategory(book.category);
    setPrice(book.price);
  };

  const handleDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id));
      if (editingId === id) clearForm();
    }
  };

  const clearForm = () => {
    setBookName('');
    setImageUrl('');
    setAuthor('');
    setCategory('');
    setPrice('');
    setEditingId(null);
  };

  return (
    <div className="container my-5" style={{ maxWidth: '900px' }}>
      <h1 className="text-center mb-4 fw-bold">Online Book Store</h1>
      <div className="card p-4 shadow-sm mb-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Enter Book Name</label>
            <input
              type="text"
              className="form-control"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Image URL</label>
            <input
              type="url"
              className="form-control"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Author</label>
            <input
              type="text"
              className="form-control"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Category</label>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Price</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="d-flex gap-2 mt-2">
            <button type="submit" className={`btn ${editingId ? 'btn-success' : 'btn-primary'} w-100`}>
              {editingId ? 'Save Changes' : 'Add Book'}
            </button>
            {editingId && (
              <button type="button" className="btn btn-secondary" onClick={clearForm}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
      <h3 className="mb-3 fw-bold">Available Books</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100 shadow-sm d-flex flex-row align-items-center p-3">
              <img
                src={book.image}
                alt={book.name}
                className="rounded me-3 object-fit-cover"
                style={{ width: '100px', height: '140px' }}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
              />
              <div className="card-body p-0 d-flex flex-column justify-content-between h-100">
                <div>
                  <h5 className="card-title mb-1 fw-bold text-dark">{book.name}</h5>
                  <p className="text-muted mb-1 small">By: <span className="fw-medium">{book.author}</span></p>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge bg-secondary">{book.category || 'General'}</span>
                    <span className="text-success fw-bold">₹{book.price}</span>
                  </div>
                </div>
                <div className="d-flex gap-2 mt-2">
                  <button
                    className="btn btn-sm btn-outline-warning text-dark flex-grow-1"
                    onClick={() => handleEditClick(book)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger flex-grow-1"
                    onClick={() => handleDeleteClick(book.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
}