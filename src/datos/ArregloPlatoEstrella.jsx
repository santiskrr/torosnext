import React from "react";
import { motion } from "framer-motion";
import Button from "../componentes/Botonpedido";
const ArregloPlatoEstrella = () => {

  return (
    <div className="p-2 max-w-screen">
      {platosEstrella.map((plato, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() =>
            addToCart({ name: plato.comida, price: plato.precio })
          }
        >
          <motion.div
            className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            <img
              src={plato.imagen}
              alt={plato.comida}
              className="rounded-xl shadow-lg w-full md:w-1/2 object-cover h-64"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#FFD700]">
                Plato Estrella: {plato.comida}
              </h3>
              <p className="mt-2 text-[#F2D8A7]">{plato.descripcion}</p>
              <p className="mt-2 text-[#C9A227] font-semibold text-lg">
                Precio: {plato.precio}
              </p>
              <div className='m-5'>
                <Button  comida ={plato}/>
                </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ArregloPlatoEstrella;
