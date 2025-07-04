"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/CartContext";

interface Plato {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
}

export default function Carrito() {
  const { cart, decreaseQuantity, increaseQuantity } = useContext(CartContext);

  // Formatear precios como enteros con separadores de miles
  const formatPrice = (price: number) => {
    return Math.floor(price).toLocaleString("es-AR", { maximumFractionDigits: 0 });
  };

  const totalPrecio = formatPrice(
    cart.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  const enviarPedido = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    const mensaje = cart
      .map((item) => {
        const subtotal = formatPrice(item.price * item.quantity);
        return `- ${item.name}: ${formatPrice(item.price)} x ${item.quantity} = ${subtotal}`;
      })
      .join("\n");
    const whatsappMensaje = `Hola, quiero hacer un pedido:\n${mensaje}\n\nTotal: ${totalPrecio}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(whatsappMensaje)}`, "_blank");
  };

  return (
    <div className="p-8 bg-black rounded-xl text-white text-center">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">🛒 Tu Pedido</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="text-lg flex justify-between items-center">
                {item.name} - {formatPrice(item.price)} x {item.quantity}
                <div>
                  <button
                    className="ml-2 px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                    onClick={() => decreaseQuantity(item.name)}
                  >
                    ➖
                  </button>
                  <button
                    className="ml-4 px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
                    onClick={() => increaseQuantity(item.name)}
                  >
                    ➕
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold text-green-400">Total: {totalPrecio}</p>
        </>
      )}

      <button
        onClick={enviarPedido}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        📲 Enviar pedido por WhatsApp
      </button>
    </div>
  );
}