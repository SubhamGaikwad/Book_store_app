import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router";
import { BOOK_DETAILS_URLS } from "../API";
import axios from "axios";
function BookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URLS}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="book-details">
      <div className="book-img">
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="#" />
      </div>
      <div className="book-description">
        <h2>description</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
}

export default BookDetails;
