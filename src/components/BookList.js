import React, { useContext } from "react";
import Book from "./Book";
import { BookContext } from "../context/BookContext";

function BookList() {
  const { books } = useContext(BookContext)

  return books.map(book => (
    <Book name={book.name} price={book.price} key={book.id} />
  ));
}

export default BookList;
