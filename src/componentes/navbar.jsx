import "@/componentes/index.css"
import GradientText from "@/componentes/GradientText.jsx";
import Link from 'next/link';

import { Spectral_SC } from 'next/font/google'
 
const spectral = Spectral_SC({
  weight:["200"],
  subsets: ['latin'],
})

const Navbar = () => {
 

    return (
<nav className="relative object-cover bg-black bg-[url(https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//bannerfinal.jpg)] bg-cover bg-center p-4 items-center overflow-hidden shadow-[0_4px_10px_rgba(255,50,50,0.2),_inset_0_0_6px_rgba(255,0,0,0.15)]
 ring-1 ring-white/10">

      {/* GIF de humo */}
      <img
        src="https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//smoke.gif"
        alt="Humo decorativo"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 mix-blend-lighten pointer-events-none z-0"
      />

      {/* GIF de chispas */}
      <img
        src="https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//212830_small.gif"
        alt="Chispas decorativas"
        className="absolute top-0 left-0 w-full h-full object-cover mix-blend-screen pointer-events-none z-10"
      />

           {/* Contenido principal */}
      <div className="relative z-20 flex justify-center">
        <Link href="/">
          <img src={'https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//logo_toroswok.svg'} className="max-h-[100px] h-auto max-w-[100px] w-auto" />
        </Link>
      </div>


            <div className="relative flex items-center gap-4 p-2 rounded-lg trade-winds-regular">
                <GradientText colors={["#40ffaa", "#40ffaa", "#ff0000", "#40ffaa", "#40ffaa"]} animationSpeed={5} showBorder={false}>
                <Link href="/"><h1 className="flex text-2xl ">Comida Tradicional Asiática</h1></Link>
                </GradientText>
            </div>
            
            <div className="relative flex flex-grow justify-center">
                <div className= {spectral.className}>
                    <ul  className="flex gap-7">
                        <li><Link href="/china" className="text-white shadow-md hover:shadow-yellow-400 hover:text-yellow-400">China</Link></li>
                        <li><Link href="/corea" className="text-white shadow-md hover:shadow-blue-400 hover:text-blue-400">Corea</Link></li>
                        <li><Link href="/japon" className="text-white shadow-md hover:shadow-red-400 hover:text-red-400">Japón</Link></li>
                        <li><Link href="/bebidas" className="text-white shadow-md hover:shadow-blue-200 hover:text-blue-200">Bebidas</Link></li>
                        <li><Link href="/devs" className="text-white shadow-md hover:shadow-blue-200 hover:text-blue-200">Devs</Link></li>
                    </ul>
                </div>
            </div>
           
            
        </nav>
    );
};


export default Navbar;
