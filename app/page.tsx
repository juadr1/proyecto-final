'use client'
import { useState } from "react"

const Page = () => {
  const [nombre, setNombre] = useState('Julio Adrian Meza Gomez');
  const [contador, setContador] = useState(0);
  const [edad, setEdad] = useState(0);
  const [linea1, setLinea1] = useState('')

  function contar() {
    setContador(contador + 1);
  }

  function reset(){
    setContador(0);
  }

  function manejadorFormulario(e: any){
    e.preventDefault();
    console.log('se hizo click');
    if (edad >= 18){
      setLinea1('Es mayor de edad');
    }else{
      setLinea1('Es menor de edad')
    }
  }



  return (
    <div>
      <center>
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

          <form
            onSubmit={manejadorFormulario}
          >
            <input type="text" 
              placeholder="Nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              />

            <input type="text" 
              placeholder="Edad"
              value={edad}
              onChange={(event) => setEdad(parseInt(event.target.value))}
              />
            <input type="submit" />
          </form>

        <p>{linea1}</p>

      </center>
    </div>
  )

}

export default Page;
