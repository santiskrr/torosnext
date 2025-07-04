import PlatosList from "@/componentes/PlatosList";

export default function Bebidas() {
  return (
    <PlatosList
      category="bebidas"
      className="platoBebidas p-4 rounded-xl shadow-md hover:shadow-green-400 hover:scale-105 transition-transform duration-300"
      imageClassName="imagenbebida hover:scale-105 rounded-xl w-full h-60 object-cover mb-3"
      titleClassName="text-5xl font-semibold text-white estonia-regular"
      descriptionClassName="text-sm mt-1 Do Hyeon line-clamp-3"
      priceClassName="precio text-xl mt-2 font-bold"
    />
  );
}