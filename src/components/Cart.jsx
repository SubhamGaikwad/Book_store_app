import React from "react";
import "../App.css";
import { useAppContext } from "./context/appContext";
const Cart = () => {
  const { cart, addToCart, removeFromCart } = useAppContext();

  console.log("cart", cart);

  const cartChecker = (id) => {
    const boolean = cart.some((book) => book.id === id);
    return boolean;
  };
  return (
    <div className="cart">
      {cart.length > 0 ? (
        cart.map((book) => {
          return (
            <div key={book.id} className="book">
              <div>
                <h3>{book.title}</h3>
              </div>
              <div className="book-image">
                <img src={book.image_url} alt="#" />
              </div>
              <div>
                {cartChecker(book.id) ? (
                  <button
                    className="cart-button"
                    onClick={() => removeFromCart(book.id)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button onClick={() => addToCart(book)}>Add to Cart</button>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="cart-text">You dont have any books Yet!</h1>
      )}
    </div>
  );
};

export default Cart;
