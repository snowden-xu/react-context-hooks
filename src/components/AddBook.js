import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';

function AddBook() {
  const { books, setBooks } = useContext(BookContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addBook = e => {
    e.preventDefault();
    setBooks(prevBooks => {
      return [...prevBooks, { name: name, price: price, id: books.length + 1 }];
    });
  };

  return (
    <form onSubmit={addBook}>
      <div>
        <input type="text" name="name" value={name} onChange={updateName} />
      </div>
      <div>
        <input type="text" name="price" value={price} onChange={updatePrice} />
      </div>
      <div>
        <button>提交测试</button>
      </div>
    </form>
  );
}

export default AddBook;
