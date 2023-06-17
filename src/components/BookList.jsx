import React, { useEffect, useState } from "react";
import "../App.css";
import { API_URL } from "../API";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <div key={book.id} className="book">
            <div>
              <h2>{book.title}</h2>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
