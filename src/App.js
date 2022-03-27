import React from "react";
import Navbar from "./components/navbar/Navbar";
import {Card} from "./components/card/Card";

function App() {

  const arregloPokemon = [];

  const x = 1;

  const obtenerImagenPokemon = async (x) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${x}`;
    const response = await fetch(
      url
    );
    const data = await response.json();

    const pokemon = {
      nombre: data.name,
      imagen: data.sprites.front_default
    }
    arregloPokemon.push(pokemon);
  };

  for (let i = x; i <= 20; i++) {
    obtenerImagenPokemon(i);
  }

  return (
    <>
      <Navbar />
      <Card arregloPokemon={arregloPokemon} />

    </>
  );
}

export default App;
