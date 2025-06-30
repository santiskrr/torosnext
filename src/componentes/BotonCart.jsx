"use client"
import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";
import Buttonadd from "./botonadd";
import Link from 'next/link';



export default function BotonCart(){const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
       const [BotonCart, setShowCart] = useState(false);
        
    return(
        <>
    
    {/* Ícono flotante del carrito */}
            <div className="fixed bottom-4 right-5 z-50 hover:scale-105 transition-transform duration-300">
                <button
                    className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition flex items-center"
                    onClick={() => setShowCart(!BotonCart)}
                >
                    🛒
                    <span className="ml-2 bg-white text-red-600 text-xs font-bold rounded-full px-2">
                        {cart.length}
                    </span>
                </button>

                {/* 🛍 Carrito flotante */}
                {BotonCart && (
                    <div className="absolute bottom-12 right-0 bg-black p-4 rounded-xl shadow-lg w-72 z-50">
                        <h3 className="text-lg font-bold text-white">Tu pedido 🛒</h3>
                        {cart.length === 0 ? (
                            <p className="text-gray-400">El carrito está vacío.</p>
                        ) : (
                            <ul className="text-white">
                                {cart.map((item) => (
                                    <li key={item.name} className="flex justify-between items-center py-1">

                                        <span>{item.name} - {item.price} x {item.quantity}</span>
                                        <div className="flex">
                                            <button className="" onClick={() => decreaseQuantity(item.name)}><Buttonadd suma={false}/>
                                            </button>
                                            <button className="" onClick={() => increaseQuantity(item.name)}><Buttonadd suma={true}/></button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <Link href="/carrito" className="mt-2 block text-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition">
                            Ir al carrito
                        </Link>
                    </div>
                )}
            </div> 
            </>
            
        )}
                
                