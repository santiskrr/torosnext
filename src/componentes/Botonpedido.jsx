 "use client"
import styled from 'styled-components';
import { CartContext } from '@/context/CartContext.js';
import React, { useState, useContext } from 'react';
import ShinyText from './ShinyText.jsx';
  


const Button = (props) => {
    
const { addToCart,cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  return (
    <StyledWrapper>
      <button className="button"
    
                onClick={() => {
                  addToCart({ name: props.comida.comida, price: props.comida.precio });
                }}>
        
        <span className="shadow" />
        <span className="edge" />
        <div className="front">
          
          <ShinyText text="Añadir al Carrito" disabled={false} speed={2} className='silkscreen-regular' />
        </div>
        
      </button>
      
    </StyledWrapper>
  );
}

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

  /* Shadow layer */
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

  /* Edge layer */
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
      hsl(216, 100.00%, 2.90%) 8%,
      hsl(217, 91.30%, 4.50%) 92%,
      hsl(217, 33%, 16%) 100%
    );
  }

  /* Front layer */
  .button .front {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 28px;
    font-size: 1.25rem;
    color: white;
    background: hsla(135, 66.70%, 40.00%, 0.83);
    border-radius: 8px;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  /* Hover and active states */
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

  /* Disable text selection */
  .button .front span {
    user-select: none;
  }`;

export default Button;
