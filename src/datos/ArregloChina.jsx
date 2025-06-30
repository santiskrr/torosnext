"use client"
import React from "react";
import { platosChina } from "@/datos/dataChina.js";
import Button from '@/componentes/Botonpedido.jsx';



const ArregloChina = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
            
            {platosChina.map((plato, index) => (
                <div key={index} className="bg-black/80 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-red-500 transition-transform text-center">
    <div 
                className="relative overflow-hidden rounded-md group w-full h-40 cursor-grab"
                onMouseDown={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    img.style.transform = "scale(2)";
                    img.style.cursor = "grabbing";
                    img.style.position = "absolute";
                    img.style.left = "0";
                    img.style.top = "0";
                    
                    e.currentTarget.onmousemove = (event) => {
                        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                        const x = event.clientX - left - (width / 2);
                        const y = event.clientY - top - (height / 2);
                        img.style.transform = `scale(2) translate(${x}px, ${y}px)`;
                    };
                }}
                onMouseUp={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    img.style.transform = "scale(1)";
                    img.style.cursor = "grab";
                    img.style.position = "relative";
                    e.currentTarget.onmousemove = null;
                }}
            >
                <img 
                    src={plato.imagen} 
                    alt={plato.comida} 
                    className="w-full h-full object-cover rounded-md mb-3 transition-transform duration-300 ease-out"
                    draggable="false"
                />
            </div>
    <h3 className="text-xl font-semibold text-red-400">{plato.comida}</h3>
    <p className="text-sm text-white mt-1">{plato.descripcion}</p>
    <p className="mt-2 text-yellow-300 font-bold">{plato.precio}</p>
    <div className='m-5'>
              <Button  comida ={plato}/>
          </div>
</div>

            ))}
        </div>
    );
};

export default ArregloChina;
