import React, { useEffect } from 'react'

export const Card = ({ arregloPokemon }) => {
  useEffect(() => {
    console.log(arregloPokemon)
  }, [])
  return (
    <>
      <div>
        {arregloPokemon.map((x) => {
           <div>
              
                <h5> {x.nombre}</h5>
            </div>
        })}
      </div>
    </>
  )
}
