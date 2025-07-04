import PlatosList from "@/componentes/PlatosList";

export default function China() {
  return (
    <PlatosList
      category="china"
      className="bg-black/80 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-red-600 transition-transform text-center min-h-[340px] flex flex-col justify-between overflow-hidden"
      imageClassName="imagen rounded-xl mb-3 w-full h-full object-cover cursor-pointer"
      titleClassName="text-xl font-semibold text-red-600"
      descriptionClassName="text-sm text-white mt-1"
      priceClassName="mt-2 text-yellow-300 font-bold"
      showImageZoom={true}
    />
  );
}