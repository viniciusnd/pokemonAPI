export default function ConnectingToPokeAPI() {


    const fetchPokemon = async (pokemon) => {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (APIResponse.status === 200) {
            const data = await APIResponse.json();
            return data;
        }
    }

    const renderPokemon = async (pokemon) => {

        pokemonName.innerHTML = 'Loading...';
        pokemonNumber.innerHTML = '';
      
        const data = await fetchPokemon(pokemon);
      
        if (data) {
          pokemonImage.style.display = 'block';
          pokemonName.innerHTML = data.name;
          pokemonNumber.innerHTML = data.id;
          pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
          input.value = '';
          searchPokemon = data.id;
        } else {
          pokemonImage.style.display = 'none';
          pokemonName.innerHTML = 'Not found :c';
          pokemonNumber.innerHTML = '';
        }
      
      }
    return (
        <div>
        </div>
    )
}