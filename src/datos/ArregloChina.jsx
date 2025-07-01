"use client"
import React from "react";
import { platosChina } from "@/datos/dataChina.js";
import Button from '@/componentes/Botonpedido.jsx';
import { useState, useEffect } from "react";



const ArregloChina = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        {platosChina.map((plato, index) => (
          <div
            key={index}
            className="bg-black/80 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-red-600 transition-transform text-center min-h-[340px] flex flex-col justify-between overflow-hidden"
          >
            <img
              src={plato.imagen}
              alt={plato.comida}
              className="imagen rounded-xl mb-3 w-full h-full object-cover cursor-pointer"
              onClick={() => esEscritorio && setImagenAmpliada(plato.imagen)}
            />

            <h3 className="text-xl font-semibold text-red-600">{plato.comida}</h3>
            <p className="text-sm text-white mt-1">{plato.descripcion}</p>
            <p className="mt-2 text-yellow-300 font-bold">{plato.precio}</p>
            <div className="m-5">
              <Button comida={plato} />
            </div>
          </div>
        ))}
      </div>

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

export default ArregloChina;
