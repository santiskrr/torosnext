'use client'
import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import ArregloHome from "@/datos/ArregloHome.jsx";
import ArregloComboInicio from "@/datos/ArregloComboInicio.jsx";
import ArregloPlatoEstrella from "@/datos/ArregloPlatoEstrella.jsx";
import { createClient } from '@/utils/supabase/client'


interface plato{
  id:number, plato:string, precio:number, descripcion:string, imagen:string, categoria:string}



export default function Inicio() {
  const [platos, setPlatos]=useState<plato[]>([])
 
  
 useEffect(() => {
    getPlato();
  }, []);
  async function getPlato() {
   const supabase = createClient()
    const { data } = await supabase.from("comidas").select().eq('categoria', 'China');
    setPlatos(data);
  }


  return (
    <>

    
    <ul>
      {platos?.map((plato) => (
        <li>{plato.plato}{plato.precio}{plato.categoria}</li>
      ))}
    </ul>

    <div
      className="bg-black bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${'https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//fondo.jpg'})` }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 rounded-2xl bg-cover bg-center shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center gap-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-600">
              Bienvenidos a
            </h1>

            <motion.img
              src={'https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//logotipotorored.png'}
              alt="Toro's Wok"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain"
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <p className="text-base sm:text-lg md:text-xl text-white bg-black/60 px-6 py-2 rounded-lg shadow-md tracking-wide">
              Explora los sabores intensos y exóticos de Asia
            </p>
          </div>
        </motion.div>

        <div>
          <ArregloPlatoEstrella />
        </div>

        <div>
          <ArregloComboInicio />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C9A227] text-center bg-[#121212] p-3 rounded-md shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Platos Nuevos
          </motion.h2>
          <div className="mt-4">
            <ArregloHome />
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

