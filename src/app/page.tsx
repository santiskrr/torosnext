// pages/index.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import PlatosList from "@/componentes/PlatosList";
import ArregloComboInicio from "@/datos/ArregloComboInicio";

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

export default function Inicio() {
  return (
    <div
      className="bg-black bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//fondo.jpg')` }}
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
              src="https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//logotipotorored.png"
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

        <PlatosList
          category="estrella"
          isFeatured={true}
          className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform"
          imageClassName="rounded-xl shadow-lg w-full md:w-1/2 object-cover h-64"
          titleClassName="text-2xl font-bold text-[#FFD700]"
          descriptionClassName="mt-2 text-[#F2D8A7]"
          priceClassName="mt-2 text-[#C9A227] font-semibold text-lg"
          showImageZoom={false}
          motionItem={{
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        />

        <ArregloComboInicio />

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
            <PlatosList
              category="Home"
              className="bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform text-center"
              imageClassName="imagen rounded-xl w-full h-40 object-cover mb-3 cursor-pointer"
              titleClassName="text-xl font-semibold text-[#FFD700]"
              descriptionClassName="text-sm text-[#F2D8A7] mt-1"
              priceClassName="mt-2 text-[#C9A227] font-bold"
              showImageZoom={true}
              motionContainer={container}
              motionItem={item}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}