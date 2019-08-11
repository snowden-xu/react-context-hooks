import React from 'react';
import Nav from './components/Nav';
import BookList from './components/BookList';
import { BookProvider } from './context/BookContext';
import AddBook from './components/AddBook';

function App() {
  return (
    <div>
      <BookProvider>
        <Nav />
        <AddBook />
        <BookList />
      </BookProvider>
    </div>
  );
}

export default App;
