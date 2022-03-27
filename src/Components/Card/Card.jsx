import React, { useEffect } from 'react'

export const Card = ({ arregloPokemon }) => {
  useEffect(() => {
    console.log(arregloPokemon)
  }, [arregloPokemon])

  return (
    <>
      <div className="container">
        {arregloPokemon.map((x) => {
          return (
            <div className="card" style={{ width: '30rem' }}>
              <img src={x.imagen} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{x.nombre}</h5>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
