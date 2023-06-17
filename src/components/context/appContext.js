import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Appcontext must be within appContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (book) => {
    const oldCart = [...cart];

    const newCart = oldCart.concat(book);

    setCart(newCart);
  };
  const removeFromCart = (id) => {
    const oldCart = [...cart];

    const newCart = oldCart.filter((book) => book.id !== id);

    setCart(newCart);
  };
  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
