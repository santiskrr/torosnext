 "use client"
import { motion } from "framer-motion";
import ArregloHome from "@/datos/ArregloHome.jsx";
import ArregloComboInicio from "@/datos/ArregloComboInicio.jsx";
import ArregloPlatoEstrella from "@/datos/ArregloPlatoEstrella.jsx";
import logotipoToro from "../assets/logotipotorored.png";
import fondoImage from "../assets/fondo.jpg";

const Inicio = () => {
  return (
    <div
      className="p-8 space-y-16 bg-black bg-cover bg-center bg-fixed max-w-screen"
      style={{ backgroundImage: `url(${fondoImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative mx-6 md:mx-20 h-60 rounded-2xl bg-cover bg-center shadow-2xl overflow-hidden flex flex-col items-center text-center gap-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-600">
            Bienvenidos a
          </h1>

          

          <p className="text-lg md:text-xl text-white px-6 py-2 rounded-lg shadow-md tracking-wide">
            Explora los sabores intensos y exóticos de Asia
          </p>
        </div>
      </motion.div>

      <div className="p-1 max-w-screen">
        <ArregloPlatoEstrella />
      </div>

      <div className="p-8 max-w-screen">
        <ArregloComboInicio />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-8 max-w-screen">
          <motion.h2
            className="text-2xl font-bold text-[#C9A227] text-center bg-[#121212] p-3 rounded-md shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Platos Nuevos
          </motion.h2>
          <ArregloHome />
        </div>
      </motion.div>
    </div>
  );
};

export default Inicio;
