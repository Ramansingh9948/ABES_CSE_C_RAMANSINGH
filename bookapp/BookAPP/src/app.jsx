import React from 'react'
import Book from './Component/Book.jsx'
import Nav from './Component/navBar.jsx'
import './app.css';

function app() {
  return (
    <>
    <Nav/>

      <Book
        img="https://m.media-amazon.com/images/I/81zbtTVKFEL._AC_UF350,350_QL80_.jpg"
        title="Mathematics X"
        price="$20"
      />
      <Book
        img="https://img.bookchor.com/images/cover/bc/9789387535626_16717863990.jpeg"
        title="Mathematics 10th"
        price="$20"
      />
      <Book
        img="https://m.media-amazon.com/images/I/71PdteUUeCL.jpg"
        title="Calculas"
        price="$20"
        />
    </>
  

  )
}

export default app