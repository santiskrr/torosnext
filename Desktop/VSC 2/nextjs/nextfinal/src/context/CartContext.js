
"use client"
import { createContext, useState } from "react";
import React from 'react';

export const CartContext = createContext([]);


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex((cartItem) => cartItem.name === item.name);
            if (itemIndex !== -1) {
                prevCart[itemIndex].quantity += 1;
                return [...prevCart];
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };


    const increaseQuantity = (name) => {
        setCart(cart.map(item => item.name === name ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decreaseQuantity = (name) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item =>
                item.name === name ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0); // Elimina si cantidad es 0
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, increaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};