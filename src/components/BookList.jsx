// import React, { useEffect, useState } from "react";
// import "../App.css";
// import { API_URL } from "../API";
// import axios from "axios";
// import { useAppContext } from "./context/appContext";
// import { useNavigate } from "react-router";

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   const { cart, addToCart, removeFromCart } = useAppContext();

//   const navigate = useNavigate();

//   const cartChecker = (id) => {
//     const boolean = cart.some((book) => book.id === id);
//     return boolean;
//   };

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((res) => {
//         console.log(res.data);
//         setBooks(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="book-list">
//       {books.map((book) => {
//         return (
//           <div key={book.id} className="book">
//             <div>
//               <h3>{book.title}</h3>
//             </div>
//             <div>
//               <img
//                 src={book.image_url}
//                 alt="#"
//                 onClick={() => navigate(`/books/${book.id}`)}
//               />
//             </div>
//             <div>
//               {cartChecker(book.id) ? (
//                 <button onClick={() => removeFromCart(book.id)}>
//                   Remove from Cart
//                 </button>
//               ) : (
//                 <button onClick={() => addToCart(book)}>Add to Cart</button>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default BookList;

import React, { useEffect, useState } from "react";
import "../App.css";
import { API_URL } from "../API";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const { cart, addToCart, removeFromCart } = useAppContext();
  const navigate = useNavigate();

  const cartChecker = (id) => {
    const boolean = cart.some((book) => book.id === id);
    return boolean;
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm)
    );
    setFilteredBooks(filteredBooks);
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
        setFilteredBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="book-search">
        <input
          type="text"
          placeholder="Search for a book"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="book-list">
        {(filteredBooks.length > 0 ? filteredBooks : books).map((book) => (
          <div key={book.id} className="book">
            <div>
              <h3>{book.title}</h3>
            </div>
            <div>
              <img
                src={book.image_url}
                alt="#"
                onClick={() => navigate(`/books/${book.id}`)}
              />
            </div>
            <div>
              {cartChecker(book.id) ? (
                <button onClick={() => removeFromCart(book.id)}>
                  Remove from Cart
                </button>
              ) : (
                <div>
                  <button onClick={() => addToCart(book)}>Add to Cart</button>
                  <button>place order</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;

//
