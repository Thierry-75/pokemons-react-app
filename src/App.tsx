import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

/*
règles : 
 ->  appeler les hooks uniquement au niveau racine, 
 ->  appeler les hooks uniquement depuis des composants de fonctions,
 ->  modifier un état par remplacement 
*/
const App: FunctionComponent = () => {
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 useEffect(()=> {
    setPokemons(POKEMONS);

 },[]);

    
 return (
  <div>
    <h1>Pokédex</h1>
    <p>Il y a {pokemons.length} pokémons dans le Pokédex.</p>
  </div>
 )
}
  
export default App;