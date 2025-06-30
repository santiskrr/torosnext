
import GradientText from "@/componentes/GradientText.jsx";
import logo from "@/assets/ArrozFrito.jpg"
import Link from 'next/link';
import "./index.css"


import { Spectral_SC } from 'next/font/google'
 
const spectral = Spectral_SC({
  weight:["200"],
  subsets: ['static'],
})

const Navbar = () => {
 

    return (
        <nav className="navegacion relative object-cover rounded-2xl bg-black bg-[url('/public/banner2.jpg')] bg-cover bg-center p-4 items-center shadow-[0_0_5px_#ff0000]">

             <div className="flex justify-center">
                <Link href="/"><img src={logo}  className="max-h-[100px] h-auto max-w-[100px] w-auto" /></Link>
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
