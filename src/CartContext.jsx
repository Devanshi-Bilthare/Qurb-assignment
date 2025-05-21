import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);

      if (existingProduct) {
        if (existingProduct.quantity < product.available) {
          return prevCart.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          );
        } else {
          alert("Cannot add more, stock limit reached.");
          return prevCart;
        }
      }

      if (product.available > 0) {
        return [...prevCart, { ...product, quantity: 1 }];
      } else {
        alert("Product is out of stock.");
        return prevCart;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === productId);
      if (!existingProduct) return prevCart;

      if (existingProduct.quantity === 1) {
        return prevCart.filter((p) => p.id !== productId);
      } else {
        return prevCart.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        );
      }
    });
  };

  const removeProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
