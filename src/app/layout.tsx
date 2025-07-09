import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componentes/navbar"
import BotonCart from '@/componentes/BotonCart.jsx';
import { CartProvider } from "@/context/CartContext";
import Footer from '@/componentes/Footer.jsx';

export const metadata: Metadata = {
  title: "Toro's Wok"
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <CartProvider>
            <Navbar/>
            {children}
            <BotonCart />
            <Footer/>
        </CartProvider>
        
      </body>
    </html>
  );
}
