import { platos } from './data.js';
import Button from '../componentes/Botonpedido.jsx';


export default function List() {

  return (
    <article>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {platos.map((plato) => (
          <div key={plato.id} className="flex justify-center">
            <div className="plato p-4 rounded-xl shadow-md hover:shadow-blue-400 hover:scale-105 transition-transform duration-300">
              <img
                className="imagen rounded-xl w-full h-40 object-cover mb-3"
                src={plato.imagen}
                alt={plato.comida}
              />
              <h3 className="text-xl font-semibold text-white orbitron">{plato.comida}</h3>
              <p className="text-sm text-zinc-300 mt-1 orbitron line-clamp-3">{plato.descripcion}</p>
              <p className="mt-2 text-green-500 orbitron">{plato.precio}</p>
                <div className='m-5'>
                <Button  comida ={plato}/>
                </div>
            </div>
          </div>
        ))}
      </ul>
    </article>
  );
}