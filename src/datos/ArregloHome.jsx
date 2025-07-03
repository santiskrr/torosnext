import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { nuevosPlatos } from "@/datos/dataHome.js";
import Button from "@/componentes/Botonpedido.tsx";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const ArregloHome = () => {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [esEscritorio, setEsEscritorio] = useState(true);

  useEffect(() => {
    const actualizar = () => setEsEscritorio(window.innerWidth >= 768);
    actualizar();
    window.addEventListener("resize", actualizar);
    return () => window.removeEventListener("resize", actualizar);
  }, []);

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {nuevosPlatos.map((plato, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform text-center"
          >
            <img
              src={plato.imagen}
              alt={plato.nombre}
              onClick={() => esEscritorio && setImagenAmpliada(plato.imagen)}
              className="imagen rounded-xl w-full h-40 object-cover mb-3 cursor-pointer"
            />
            <h3 className="text-xl font-semibold text-[#FFD700]">
              {plato.nombre}
            </h3>
            <p className="text-sm text-[#F2D8A7] mt-1">{plato.descripcion}</p>
            <p className="mt-2 text-[#C9A227] font-bold">{plato.precio}</p>
            <div className="m-5">
              <Button comida={plato} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {imagenAmpliada && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={imagenAmpliada}
              alt="Vista ampliada"
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
            <button
              onClick={() => setImagenAmpliada(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ArregloHome;
