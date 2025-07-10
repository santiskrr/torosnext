import PlatosList from "@/componentes/PlatosList";
import { Estonia } from 'next/font/google';

const estonia = Estonia({
  weight:["400"],
  subsets: ['latin'],
})

export default function Bebidas() {
  return (
    <>
    <div className={estonia.className}>
      <PlatosList
        category="bebidas"
        className="platoBebidas p-4 rounded-xl shadow-md hover:shadow-green-400 hover:scale-105 transition-transform duration-300"
        imageClassName="imagenbebida hover:scale-105 rounded-xl w-full h-60 object-cover mb-3"
        titleClassName="text-5xl font-semibold text-white"
        descriptionClassName="text-4xl font-bold mt-1 line-clamp-3"
        priceClassName="precio text-xl mt-2 font-bold"
      />
    </div>
    </>
  );
}