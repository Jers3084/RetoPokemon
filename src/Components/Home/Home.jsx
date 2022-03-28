import React, { useState } from 'react'
import styles from './Home.module.css'

export const Home = () => {
  const [flag, setFlag] = useState(false)
  const [pokemon, setPokemon] = useState([])
  const arregloPokemon = []

  const obtenerPokemon = async (x) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${x}`
    const response = await fetch(url)
    const data = await response.json()
    /* Objeto creado con el nombre y la imagen del Pokemon*/
    const pokemon = {
      nombre: data.name,
      imagen: data.sprites.front_default,
    }
    /* Se ingresa el objeto Pokemon al arregloPokemon */
    arregloPokemon.push(pokemon)
  }

  const peticiones = async () => {
    for (let i = 1; i <= 20; i++) {
      await obtenerPokemon(i)
    }
    setFlag(true)
    setPokemon(arregloPokemon)
  }

  const borrar = () => {
    setFlag(!flag)
  }

  return (
    <>
      <div className={styles.contenedor}>
        <h1>Pokemons</h1>
        <p>Pulse el boton para obtener o borrar Pokemones</p>
        {flag ? (
          <button className={styles.boton} onClick={borrar}>
            Borrar
          </button>
        ) : (
          <button className={styles.boton} onClick={peticiones}>
            Obtener
          </button>
        )}
      </div>

      <div>
        {flag ? (
          <div className={styles.contenido}>
            {pokemon.map((x, index) => {
              return (
                <div key={index} className={styles.card}>
                  <div className={styles.imagen_card}>
                    <img src={x.imagen} alt="" />
                  </div>
                  <div className={styles.title_card}>
                    <h3>{x.nombre}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <p>-</p>
        )}
      </div>
    </>
  )
}
