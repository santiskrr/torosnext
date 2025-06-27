 import React from "react"
 import { SiInstagram } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";


 export default function Footer(){

    return(<footer className="bg-zinc-800 text-white mt-1 p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h5 className="text-red-600 font-bold mb-2">Toro's Wok</h5>
            <p className="text-sm">Auténtica cocina asiática con ingredientes frescos y recetas tradicionales.</p>
          </div>
          <div>
            <h5 className="text-red-600 font-bold mb-2">Contacto</h5>
            <p className="text-sm"> contacto@toros.com</p>
            <p className="text-sm"> +54 2945-656339</p>
            <p className="text-sm"> Urquiza 583</p>
            <div className="rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.302140350585!2d-71.31536832414503!3d-42.908668442028016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dac3e487ef08f%3A0x40a0bb71c672badb!2sUrquiza%20583%2C%20U9200%20Esquel%2C%20Chubut!5e0!3m2!1ses!2sar!4v1750372157950!5m2!1ses!2sar"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
          </div>
          <div className="" >
            <h5 className="text-red-600 font-bold mb-2">Síguenos</h5>
            
            <div className="  flex justify-center md:block">

            <a href="https://www.instagram.com/toroswok.sushi/p/ChX2jerprcS/" target="_blank" rel="noopener noreferrer"><SiInstagram className="h-15 w-15 p-2 rounded-2xl bg-gradient-to-t from-[#fcba03] via-[#f21167] to-[#870af5] m-2.5" /></a>
                         
            <a href="https://www.facebook.com/toroswok/" target="_blank" rel="noopener noreferrer"><IoLogoFacebook  className="h-20 w-20 text-blue-500 bg-blue"/></a>

             </div>
            
          </div>
        </div>
        <div className="text-center text-xs text-zinc-400 mt-4">© 2025 Toro's Wok. Todos los derechos reservados.</div>
      </footer>
      )}
 