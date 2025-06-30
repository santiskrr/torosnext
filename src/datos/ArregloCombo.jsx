"use client"
import React from "react";
import { combos } from "./dataCombo";
import { useState, useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { motion } from "framer-motion";


const ArregloCombo = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="p-2 max-w-screen">
            {combos.map((combo, index) => (
                <div 
                    key={index} 
                    className="cursor-pointer"
                    onClick={() => addToCart({ name: combo.titulo, price: combo.precio })}
                >
                    <motion.div
                        className="mt-16 relative text-black rounded-xl text-center shadow-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* FONDOS GIF superpuestos */}
                        <div className="absolute inset-0 z-0 flex">
                            {combo.gifs.map((gif, index) => (
                                <img
                                    key={index}
                                    src={gif.src}
                                    alt={gif.alt}
                                    className="w-1/2 h-full object-cover"
                                />
                            ))}
                        </div>
                        <div className="absolute inset-0 bg-red-600/80 backdrop-blur"></div>

                        {/* CONTENIDO */}
                        <div className="relative z-10 p-6">
                            <h3 className="text-2xl font-bold text-white">{combo.titulo}</h3>
                            <p className="mt-2 text-white">{combo.descripcion}</p>
                            <p className="mt-1 font-semibold text-lg text-yellow-300">{combo.precio}</p>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default ArregloCombo;
