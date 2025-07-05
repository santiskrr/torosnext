 "use client"
import './Japon.css';
import { motion } from 'framer-motion';
import List from "@/datos/arreglo";
import Image from "next/image";


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
                       className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-red-600 via-red-400 p-6 rounded-xl shadow-[0_4px_12px_#6E1B14]"
                       initial={{ opacity: 0, y: -20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8 }}
                     >
                       <div className="md:w-[220px] md:h-[320px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
                         <Image
                           src="https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//4117.png"
                           alt="Chef Lián Fuentes"
                           width={220}
                           height={320}
                           className="w-full h-full object-cover"
                         />
                       </div>
                   <h3 className="text-2xl font-bold text-white mb-2 Do Hyeon">
                     Sabores de Japon
                   </h3>
                   <p className="text-black Do Hyeon">
                     Nuestros chefs combinan técnicas tradicionales coreanas con ingredientes frescos, creando platos llenos de sabor y pasión. ¡Una experiencia única!
                   </p>
                   </motion.div>
                 </div>
      </div>
    </div>
    </>
  );
}

export default Japon;