import PlatosList from "@/componentes/PlatosList";
import { Do_Hyeon } from 'next/font/google';

const dohyeon = Do_Hyeon({
  weight:["400"],
  subsets: ['latin'],
})
export default function Corea() {
  return (
    <>
    <div className= {dohyeon.className}>
    <PlatosList
      category="corea"
      className="platoCorea p-4 rounded-xl shadow-md hover:shadow-green-400 hover:scale-105 transition-transform duration-300"
      imageClassName="imagen rounded-xl w-full h-40 object-cover mb-3"
      titleClassName="text-xl font-semibold text-white Do Hyeon"
      descriptionClassName="text-sm mt-1 Do Hyeon line-clamp-3"
      priceClassName="mt-2 text-green-500 font-bold Do Hyeon"
    />
    </div>
    </>
  );
}