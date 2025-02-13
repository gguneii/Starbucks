import { createContext, useState, useEffect } from "react";

export const BASKET = createContext();
function BasketContext({ children }) {
  const [basket, setBasket] = useState(() => {
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (name, image, id, temp, size) => {
    const productExists = basket.find(
      (item) => item.id === id && item.temp === temp && item.size === size
    );
  
    if (productExists) {
      setBasket((prevBasket) =>
        prevBasket.map((item) =>
          item.id === id && item.temp === temp && item.size === size
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      const newProduct = {
        name,
        image,
        id,
        temp,
        size,
        count: 1,
      };
  
      setBasket((prevBasket) => [...prevBasket, newProduct]);
    }
  };
  

  return (
    <BASKET.Provider value={{ addToBasket, basket, setBasket }}>
      {children}
    </BASKET.Provider>
  );
}

export default BasketContext;
