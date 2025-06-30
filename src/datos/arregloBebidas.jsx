import React from 'react';
import { bebidas } from './dataBebidas.js';
import Button from '../componentes/Botonpedido.jsx';
export default function ListBebidas() {

  const listItems = bebidas.map(plato => (
    <div key={plato.id} className="flex justify-center ">
      <div className="platoBebidas p-4 rounded-xl shadow-md hover:shadow-green-400 hover:scale-105 transition-transform duration-300">
        <img
          className="imagenbebida hover:scale-105 rounded-xl w-full h-60 object-cover mb-3"
          src={plato.imagen}
          alt={plato.comida}
        />
        <h3 className="text-5xl font-semibold text-white estonia-regular">{plato.comida}</h3>
        <p className="text-sm mt-1 Do Hyeon line-clamp-3 ">{plato.descripcion}</p>
        <p className="precio text-xl mt-2  font-bold">{plato.precio}</p>
          <div className='m-5'>
              <Button  comida ={plato}/>
          </div>
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