"use client";
import React, { useState, useEffect } from 'react';
import { getPlatos } from '@/datos/selectdatabase';
import Button from '@/componentes/Botonpedido';

interface Plato {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function List() {
  const [platos, setPlatos] = useState<Plato[]>([]);

  useEffect(() => {
    async function fetchPlatos() {
      const data = await getPlatos();
      setPlatos(data);
    }
    fetchPlatos();
  }, []);

  return (
    <article>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {platos.map((plato) => (
          <li key={plato.id} className="flex justify-center">
            <div className="plato p-4 rounded-xl shadow-md hover:shadow-blue-400 hover:scale-105 transition-transform duration-300">
              <img
                className="imagen rounded-xl w-full h-40 object-cover mb-3"
                src={plato.image}
                alt={plato.name}
              />
              <h3 className="text-xl font-semibold text-white orbitron">{plato.name}</h3>
              <p className="text-sm text-zinc-300 mt-1 orbitron line-clamp-3">{plato.description}</p>
              <p className="mt-2 text-green-500 orbitron">
                {plato.price.toLocaleString("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </p>
              <div className="m-5">
                <Button comida={plato} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}