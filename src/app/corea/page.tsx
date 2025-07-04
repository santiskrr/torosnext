 "use client"
import './Corea.css';
import { motion } from 'framer-motion';
import Listcorea from "@/datos/arregloCorea";

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
                  음식, 음료 및 지원 강
                </p>
              </div>
            </div>
          </motion.div>

          <Listcorea />

        </div>

        {/* Mini video */}
        <div className="m-20">
          <video
            src="/Video.mp4"
            autoPlay
            muted
            loop
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          ></video>
        </div>

        <motion.div
          className="mt-20 flex flex-col md:flex-row items-center gap-10 px-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/4264.png"
            className="m-5 w-full md:w-1/2 h-114 object-cover rounded-xl shadow-md"
            alt="Korean culture"
          />
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 Do Hyeon">
              Sabores de Corea
            </h3>
            <p className="text-blue-400 Do Hyeon">
              Nuestros chefs combinan técnicas tradicionales coreanas con ingredientes frescos, creando platos llenos de sabor y pasión. ¡Una experiencia única!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Corea;