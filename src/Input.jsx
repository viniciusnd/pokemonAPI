import React from "react";

const Input = ({ pokemonName, pokemonNumber, setPokemonName, setPokemonNumber }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <input
        className="w-full border border-gray-400 p-2 rounded-lg"
        type="text"
        value={pokemonName || pokemonNumber}
        onChange={(event) => setPokemonName(event.target.value.toLowerCase()) || setPokemonNumber(event.target.value)}
        placeholder="Enter a Pokémon name or number"
      />
    </div>
  );
};

export default Input;
