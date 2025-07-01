import React, { useState, useEffect } from "react";
import { postresChina } from "@/datos/postresChina.js";
import Button from "@/componentes/Botonpedido.jsx";

const ArregloPostres = () => {
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
        {postresChina.map((postre, index) => (
          <div
            key={index}
            className="bg-black/80 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-red-600 transition-transform text-center min-h-[340px] flex flex-col justify-between overflow-hidden"
          >
            <img
              className="imagen rounded-xl w-full h-full object-cover mb-3 cursor-pointer"
              src={postre.imagen}
              alt={postre.comida}
              onClick={() => esEscritorio && setImagenAmpliada(postre.imagen)}
            />

            <h3 className="text-xl font-semibold text-red-600">{postre.comida}</h3>
            <p className="text-sm text-white mt-1">{postre.descripcion}</p>
            <p className="mt-2 text-yellow-300 font-bold">{postre.precio}</p>
            <div className="m-5">
              <Button comida={postre} />
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

export default ArregloPostres;
