import PlatosList from "@/componentes/PlatosList";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <PlatosList
      category="home"
      className="bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform text-center"
      imageClassName="imagen rounded-xl w-full h-40 object-cover mb-3 cursor-pointer"
      titleClassName="text-xl font-semibold text-[#FFD700]"
      descriptionClassName="text-sm text-[#F2D8A7] mt-1"
      priceClassName="mt-2 text-[#C9A227] font-bold"
      showImageZoom={true}
      motionContainer={container}
      motionItem={item}
    />
  );
}