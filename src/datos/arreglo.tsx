import PlatosList from "@/componentes/PlatosList";

export default function Japon() {
  return (
    <PlatosList
      category="japon"
      className="plato p-4 rounded-xl shadow-md hover:shadow-blue-400 hover:scale-105 transition-transform duration-300"
      imageClassName="imagen rounded-xl w-full h-40 object-cover mb-3"
      titleClassName="text-xl font-semibold text-white orbitron"
      descriptionClassName="text-sm text-zinc-300 mt-1 orbitron line-clamp-3"
      priceClassName="mt-2 text-green-500 orbitron"
    />
  );
}