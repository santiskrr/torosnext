 "use client"
import './Corea.css';
import { motion } from 'framer-motion';
import Listcorea from "@/datos/arregloCorea";
import Image from "next/image";


function Corea() {
  return (
    <div className="">
      <div className="bg-gradient-to-b from-red-700 via-gray-900 to-blue-900">
        <div className="text-center mb-12 text-white p-10">
          {/* Introducción */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="relative mx-10 md:mx-30 h-40 rounded-2xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/441/413/205/the-game-neon-fangs-face-wallpaper-preview.jpg)`,
              }}
            >
              <div className="absolute  inset-0 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-red-500 bg-black/70 Do Hyeon">
                  Made in Korea
                </h2>
                <p className="text-lg shadow-xl shadow-md hover:shadow-violet-500 bg-black/60 text-violet-400 mt-2 Do Hyeon ">
                  한국 전통 음식
                </p>
              </div>
            </div>
          </motion.div>

          <Listcorea />

        </div>

        {/* 🎞️ GIF decorativo tipo banner */}
        <div className="max-w-screen overflow-hidden shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src="https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes/Video.mp4.gif"
              alt="Banner animado"
              className="w-full h-[200px] object-cover"
            />
            </motion.div>
            </div>
        
            <div>
              {/* Sección del chef */}
              <motion.div
                className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-black via-blue-600 to-black p-6 rounded-xl shadow-[0_4px_12px_#6E1B14]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="md:w-[220px] md:h-[320px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//4264.png"
                    alt="Chef Lián Fuentes"
                    width={220}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
            <h3 className="text-2xl font-bold text-white mb-2 Do Hyeon">
              Sabores de Corea
            </h3>
            <p className="text-blue-400 Do Hyeon">
              Nuestros chefs combinan técnicas tradicionales coreanas con ingredientes frescos, creando platos llenos de sabor y pasión. ¡Una experiencia única!
            </p>
            </motion.div>
          </div>
        
      </div>
    </div>
  );
}

export default Corea;