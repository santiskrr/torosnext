 "use client"
import './Japon.css';
import { motion } from 'framer-motion';
import List from "@/datos/arreglo.jsx";

function Japon() {
  return (<>
    <div className='bg-red-400'>
      <div className="">
        <div className="text-center mb-12 text-white p-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="relative ml-40 mr-40 h-60 rounded-2xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url(https://th.bing.com/th/id/R.3ec05aebbde8ed6ff516d36456821cc8?rik=MrqPooaxMv4nog&pid=ImgRaw&r=0)`,
              }}
              
            >
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-red-600 orbitron">
                  Made in Japan
                </h2>
                <p className="text-lg text-slate-200 mt-2 orbitron">
                  Desde <span className="text-orange-500">Naruto</span> Hasta{" "}
                  <span className="text-gray-400">Hideo Kojima</span>
                </p>
              </div>
            </div>
          </motion.div>
          <List />
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

        {/* Sección extra con imagen y descripción */}
        <motion.div
          className="mt-20 flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/4117.png"
            className="m-5 w-full md:w-1/2 h-114 object-cover rounded-xl shadow-md"
          />
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2 orbitron">
              Hecho por manos expertas
            </h3>
            <p className="text-zinc-300 orbitron">
              Nuestros chefs traen técnicas auténticas de la cocina japonesa, fusionando tradición con ingredientes frescos para una experiencia única. ¡Cada plato es una obra maestra!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}

export default Japon;