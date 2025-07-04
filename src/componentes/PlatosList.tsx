// components/PlatosList.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getPlatos } from "@/datos/selectdatabase";
import Button from "@/componentes/Botonpedido";

interface Plato {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  comida?: string;
  precio?: number;
}

interface PlatosListProps {
  category: string;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  priceClassName?: string;
  showImageZoom?: boolean;
  motionContainer?: any;
  motionItem?: any;
  isFeatured?: boolean;
}

export default function PlatosList({
  category,
  className = "plato p-4 rounded-xl shadow-md hover:shadow-blue-400 hover:scale-105 transition-transform duration-300",
  imageClassName = "imagen rounded-xl w-full h-40 object-cover mb-3",
  titleClassName = "text-xl font-semibold text-white orbitron",
  descriptionClassName = "text-sm text-zinc-300 mt-1 orbitron line-clamp-3",
  priceClassName = "mt-2 text-green-500 orbitron",
  showImageZoom = false,
  motionContainer = null,
  motionItem = null,
  isFeatured = false,
}: PlatosListProps) {
  const [platos, setPlatos] = useState<Plato[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imagenAmpliada, setImagenAmpliada] = useState<string | null>(null);
  const [esEscritorio, setEsEscritorio] = useState(true);

  useEffect(() => {
    async function fetchPlatos() {
      setLoading(true);
      setError(null);
      try {
        const data = await getPlatos(category, isFeatured ? 1 : undefined);
        if (data.length === 0) {
          setError(`No se encontraron platos para la categoría ${category}`);
        }
        setPlatos(data);
      } catch (err) {
        setError("Error al cargar los platos. Por favor, intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    }
    fetchPlatos();
  }, [category, isFeatured]);

  useEffect(() => {
    if (showImageZoom) {
      const actualizar = () => setEsEscritorio(window.innerWidth >= 768);
      actualizar();
      window.addEventListener("resize", actualizar);
      return () => window.removeEventListener("resize", actualizar);
    }
  }, [showImageZoom]);

  const formatPrice = (price: number) => {
    return Math.floor(price).toLocaleString("es-AR", { maximumFractionDigits: 0 });
  };

  if (loading) {
    return <div className="text-white text-center">Cargando...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (platos.length === 0) {
    return <div className="text-gray-400 text-center">No hay platos disponibles.</div>;
  }

  const GridComponent = motionContainer ? motion.div : 'div';
  const ItemComponent = motionItem ? motion.div : 'div';

  return (
    <>
      <GridComponent
        className={isFeatured ? "p-2 max-w-screen" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10"}
        variants={motionContainer}
        initial={motionContainer ? "hidden" : undefined}
        whileInView={motionContainer ? "visible" : undefined}
        viewport={motionContainer ? { once: false, amount: 0.3 } : undefined}
      >
        {platos.map((plato, index) => (
          <ItemComponent
            key={plato.id}
            variants={motionItem}
            className={isFeatured ? "mt-16 flex flex-col md:flex-row items-center gap-8 bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform" : className}
          >
            <img
              className={isFeatured ? "rounded-xl shadow-lg w-full md:w-1/2 object-cover h-64" : imageClassName}
              src={plato.image}
              alt={plato.name}
              onClick={() => showImageZoom && esEscritorio && setImagenAmpliada(plato.image)}
            />
            <div className={isFeatured ? "text-center md:text-left" : ""}>
              <h3 className={isFeatured ? "text-2xl font-bold text-[#FFD700]" : titleClassName}>
                {isFeatured ? `Plato Estrella: ${plato.name}` : plato.name}
              </h3>
              <p className={isFeatured ? "mt-2 text-[#F2D8A7]" : descriptionClassName}>{plato.description}</p>
              <p className={isFeatured ? "mt-2 text-[#C9A227] font-semibold text-lg" : priceClassName}>
                {isFeatured ? `Precio: ${formatPrice(plato.price)}` : formatPrice(plato.price)}
              </p>
              <div className="m-5">
                <Button comida={plato} />
              </div>
            </div>
          </ItemComponent>
        ))}
      </GridComponent>

      {showImageZoom && imagenAmpliada && (
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
}