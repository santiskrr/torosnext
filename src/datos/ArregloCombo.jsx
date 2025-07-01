"use client"
import React from "react";
import { combos } from "@/datos/dataCombo";
import { CartContext } from "@/context/CartContext";
import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ArregloCombo = () => {
    const { addToCart } = useContext(CartContext);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 3000); // Aparece 3 segundos después de montar
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = (combo) => {
        addToCart({ name: combo.titulo, price: combo.precio });
        setVisible(false);
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible &&
                combos.map((combo, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 100, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        className="fixed bottom-5 right-5 z-50 w-full max-w-sm sm:max-w-md"
                    >
                        <div className="relative text-white rounded-xl overflow-hidden shadow-2xl bg-black/80">
                            {/* FONDOS GIF */}
                            <div className="absolute inset-0 z-0 flex">
                                {combo.gifs.map((gif, idx) => (
                                    <Image
                                        key={idx}
                                        src={gif.src}
                                        alt={gif.alt}
                                        className="w-1/2 h-full object-cover"
                                    />
                                ))}
                            </div>
                            <div className="absolute inset-0 bg-red-800/80 backdrop-blur-[2px]" />

                            {/* CONTENIDO */}
                            <div className="relative z-10 p-5 text-center">
                                <h3 className="text-2xl font-bold">{combo.titulo}</h3>
                                <p className="mt-1 text-sm">{combo.descripcion}</p>
                                <p className="mt-2 font-semibold text-yellow-300">{combo.precio}</p>

                                {/* Botones */}
                                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
                                    <button
                                        onClick={() => handleAccept(combo)}
                                        className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded text-black font-semibold transition"
                                    >
                                        ¡Aprovechar combo!
                                    </button>
                                    <button
                                        onClick={handleClose}
                                        className="px-4 py-2 bg-black/50 hover:bg-black/70 rounded text-white text-sm transition"
                                    >
                                        No, gracias
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
        </AnimatePresence>
    );
};

export default ArregloCombo;
