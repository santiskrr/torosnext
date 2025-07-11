"use client";
import styled from 'styled-components';
import { CartContext } from '@/context/CartContext';
import React, { useContext } from 'react';
import ShinyText from './ShinyText';
import { Silkscreen } from 'next/font/google';


const silkscreen = Silkscreen({
  weight:["400"],
  subsets: ['latin'],
})

interface Comida {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const Button = ({ comida }: { comida: Comida }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <StyledWrapper>
      <button
        className="button"
        onClick={() => {
          addToCart({
            id: comida.id,
            name: comida.name,
            price: comida.price,
            description: comida.description,
            image: comida.image,
            category: comida.category,
            quantity: 1, // Initialize quantity to 1 when adding to cart
          });
        }}
      >
        <span className="shadow" />
        <span className="edge" />
        <div className="front silkscreen-regular">
          <div className= {silkscreen.className}>
          <ShinyText text="Añadir al Carrito" disabled={false} speed={2}/>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    outline: none;
    cursor: pointer;
    font-family: sans-serif;
  }

  .button .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(8, 8, 8, 0.33);
    border-radius: 8px;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .button .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(
      to left,
      hsl(217, 33%, 16%) 0%,
      hsl(216, 100%, 2.9%) 8%,
      hsl(217, 91.3%, 4.5%) 92%,
      hsl(217, 33%, 16%) 100%
    );
  }

  .button .front {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 28px;
    font-size: 1.25rem;
    color: white;
    background: hsla(135, 66.7%, 40%, 0.83);
    border-radius: 8px;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .button:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  .button:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  .button:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  .button:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  .button .front span {
    user-select: none;
  }
`;

export default Button;