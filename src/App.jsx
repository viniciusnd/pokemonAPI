import React, { useState, useEffect } from "react"
import anime from "animejs"

export default function App() {
  const [pokemon, setPokemon] = useState({})
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonNumber, setPokemonNumber] = useState("")
  const [pokeball, setpokeball] = useState(true)

  useEffect(() => {
    const connectToAPI = async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}` || `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
      )
      const convertedData = await data.json()
      setPokemon(convertedData)
    };

    if (pokemonName || pokemonNumber) {
      connectToAPI()
    }
  }, [pokemonName, pokemonNumber])

  const pressingEnter = (event) => {
    if (event.key === "Enter") {
      const inputValue = event.target.value;
      setPokemonName(inputValue.toLowerCase())
      setPokemonNumber(inputValue)
    }
  }

  const verifyInput = (event) => {
    if (event.target.value === "" || event.target.value === undefined || event.target.value === null) {
      setPokemon({})
    }
  }

  useEffect(() => {
    if (pokeball) {
      anime({
        targets: '.pokeball-jump',
        translateY: '-=20',
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad',
        duration: 1000
      })
    }
  }, [pokeball])

  return (
    <div className="bg-gradient-to-b from-red-600 to-yellow-300 via-gray-300 h-screen w-screen p-10">
      <div className="mx-auto max-w-xl">
        <div className="mt-10 relative">
          {pokemon.name || pokemon.id ? (
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-32 h-32 mb-10"
                src={pokemon.sprites.versions['generation-v']['black-white']['animated']['front_default']}
              />
              <div className="text-center mt-2 mb-2 uppercase font-extrabold">
                {pokemonNumber} - {pokemon.name} <br />
                Height: {pokemon.height * 10} cm | Weight: {pokemon.weight / 10} kg <br />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <img
                className="pokeball-jump w-32 h-32 mb-10"
                src="/imgs/Pokeball.png"
              />
              <div className="text-center mt-2 mb-2 uppercase font-extrabold">
                Choose your Pokémon
              </div>
            </div>

          )}
        </div>

        <div className="flex h-fit items-center justify-center">
          <input
            className="w-screen md:w-1/2 px-4 py-3 rounded-full border-2 border-gray-300 outline-none focus:border-yellow-400 placeholder-red-400 text-sm text-center bg-gray-200 text-gray-900 font-extrabold shadow-md"
            type="text"
            onChange={verifyInput}
            onKeyDown={pressingEnter}
            placeholder="Enter a Pokémon name or number"
          />
        </div>
      </div>
    </div>
  )
}


