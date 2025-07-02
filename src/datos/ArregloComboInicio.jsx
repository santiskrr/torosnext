import React from "react";
import { motion } from "framer-motion";
import { comboInicio } from "./dataComboInicio";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ArregloComboInicio = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="p-8 max-w-screen">
            {comboInicio.map((combo, index) => (
                <div 
                    key={index} 
                    className="cursor-pointer"
                    onClick={() => addToCart({ name: combo.oferta, price: combo.precioreal })}
                >
                    <motion.div
                        className="relative bg-[#6E1B14] p-6 rounded-xl text-center shadow-md hover:shadow-[#B96F1C] overflow-hidden transition-transform"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${"https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//bg.gif"})` }}></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-[#FFD700]">{combo.titulo}</h3>
                            <p className="mt-2 text-[#F2D8A7]">{combo.descripcion}</p>
                            <p className="text-sm text-[#C9A227]">{combo.precio}</p>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default ArregloComboInicio;
