"use client";
import { createContext, useState } from "react";

interface Plato {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
}

export const CartContext = createContext<{
  cart: Plato[];
  addToCart: (item: Plato) => void;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
}>({
  cart: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Plato[]>([]);

  const addToCart = (item: Plato) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cartItem) => cartItem.name === item.name);
      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (name: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (name: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};