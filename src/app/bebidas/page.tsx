 "use client"
import { motion } from 'framer-motion';
import ListBebidas from "@/datos/arregloBebidas";
import './bebidas.css'



function Bebidas() {
  return (

    <>
    <div className=' bg-[url(https://i.pinimg.com/originals/67/b0/6e/67b06edc0d6a17b06e1ad701c09e9732.jpg)]'>
      <div className="">
        <div className="text-center mb-12 text-black p-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="p-40 relative ml-40 mr-40 h-60 rounded-2xl bg-cover bg-no-repeat bg-bottom"
              style={{
                backgroundImage: `url(https://i.pinimg.com/originals/b3/18/4d/b3184d6c4aea0ad4e595e699bf392b56.jpg)`,
              }}

            >
            </div>
          </motion.div>
          <ListBebidas />
        </div>

        

      </div>
    </div>
    </>
  );
}

export default Bebidas;