'use client'
import { useState } from "react"

const Page = () => {
  const [nombre, setNombre] = useState('Julio Adrian Meza Gomez');
  const [contador, setContador] = useState(0);

  function contar() {
    setContador(contador + 1);
  }

  function reset(){
    setContador(0);
  }

  return (
    <div>
        <h1>Proyecto Final</h1>
        <h2>Estructura de datos</h2>
        <h3>{nombre}</h3>
        <div>
          <button
          onClick={contar}
          >
          contar
          </button>
          <button 
          onClick={reset}
          >
            reset
          </button>
        </div>
        <p>{contador} número de clicks</p>
    </div>
  )

}

export default Page;
