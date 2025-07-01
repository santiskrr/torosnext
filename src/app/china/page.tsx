"use client"

import React from "react";
import { motion } from "framer-motion";
import ArregloChina from "@/datos/ArregloChina";
import ArregloPostres from "@/datos/postresChina.jsx";
import ArregloCombo from "@/datos/ArregloCombo.jsx";
import chineseBanner from "@/assets/chinese.jpg";
import videoPromocional from "@/assets/Video.mp4.gif";
import chefImage from "@/assets/3975.png";
import Image from "next/image";

export default function China() {
  return (
    <>
      <div
        className="p-8 space-y-16 bg-black bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${'https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//bgchina.jpg'})` }}
      >
        {/* Título principal con fondo oscuro */}
        <div className="text-center mb-12 text-white p-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="relative mx-10 md:mx-30 h-40 rounded-2xl bg-cover bg-center overflow-hidden bg-black/50"
              style={{ backgroundImage: `url(${chineseBanner})` }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-red-600 Do Hyeon">
                  COMIDA TRADICIONAL CHINA
                </h2>
                <p className="text-lg shadow-xl bg-black/60 text-white mt-2">
                  你好
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-screen">
          <motion.h2
            className="text-2xl font-bold text-yellow-300 text-center bg-red-600 p-3 rounded-md shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Platos Tradicionales
          </motion.h2>
          <p className="text-sm text-white text-center mt-2">
            Descubre sabores auténticos y recetas clásicas con ingredientes frescos.
          </p>
          <ArregloChina />
        </div>

        <div className="max-w-screen">
          <motion.h2
            className="text-2xl font-bold text-yellow-300 text-center bg-red-600 p-3 rounded-md shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Postres Fusión
          </motion.h2>
          <p className="text-sm text-white text-center mt-2">
            Fusión chino-argentino combinando lo más icónico de ambas culturas.
          </p>
          <ArregloPostres />
        </div>

        <div className="max-w-screen">
          <ArregloCombo />
        </div>

        {/* 🎥 Video promocional (GIF animado) */}
<div className="mt-12">
  <Image
    src={videoPromocional}
    alt="GIF promocional"
    className="imagen rounded-xl w-full h-60 object-cover mb-3"
  />
</div>


        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-black via-red-600 to-black p-6 rounded-xl shadow-[0_4px_12px_#6E1B14] scale-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Imagen del chef */}
          <div className="max-w-[180px] md:max-w-[220px] h-auto">
            <Image
              src={chefImage}
              alt="Chef Lián Fuentes"
              className="w-full h-auto object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Información del chef */}
          <div className="text-left md:w-1/2">
            <h3 className="text-4xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
              👨‍🍳 Chef Lián Fuentes
            </h3>
            <hr className="border-[#FFD700] border-t-2 mb-3" />
            <p className="text-lg text-[#F2D8A7] leading-relaxed">
              Maestro de la cocina china-argentina, perfeccionó su técnica en Guangzhou y Buenos Aires. Su especialidad es la fusión equilibrada de sabores intensos y sutiles.
              Actualmente dirige <span className="text-[#FFD700] font-semibold">Toro’s Wok</span>, ofreciendo platos auténticos con un toque personal.
            </p>
          </div>

          {/* Frase e íconos */}
          <div className="text-center md:w-1/3 space-y-4">
            <p className="text-lg text-[#F2D8A7] italic">
              “La cocina es el arte donde cada ingrediente cuenta su historia.”
            </p>
            <div className="flex justify-center gap-4 text-[#FFD700] text-2xl">
              🥟 🍜 🍣
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
