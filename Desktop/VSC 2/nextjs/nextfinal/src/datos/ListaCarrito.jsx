import React from 'react';
import { useState } from 'react';
import { platosCarrito } from './dataCarrito.js';
import "../index.css"


export default function Listcarrito() {
  const [history, setHistory] = useState([]);
  const pedido=[];
  setHistory(pedido)
  const listItems = platosCarrito.map(plato => (
    <div key={plato.id} className="flex justify-center">
      <div className=" p-4 rounded-xl ">
        <img
          className=" rounded-xl w-full h-40  mb-3"
          src={plato.imagen}
          alt={plato.comida}
        />
        <h3 className="text-3xl  text-black cormorant-sc-regular">{plato.comida}</h3>
        <p className="mt-2 text-3xl text-green-500 cormorant-sc-regular">{plato.precio}</p>
        <button>AGREGAR</button>
      </div>
    </div>
  ));

  return (
    <article>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {listItems}
      </ul>
    </article>
  );
}