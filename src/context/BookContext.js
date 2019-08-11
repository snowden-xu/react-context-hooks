import React, { useState, createContext } from 'react';

export const BookContext = createContext();

export function BookProvider(props) {
  const [books, setBooks] = useState([
    {
      name: '盗墓笔记',
      price: '￥50',
      id: 1
    },
    {
      name: '鬼吹灯',
      price: '￥80',
      id: 2
    },
    {
      name: '诛仙',
      price: '￥100',
      id: 3
    }
  ]);

  return (
    <div>
      <BookContext.Provider value={{ books, setBooks }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
}
