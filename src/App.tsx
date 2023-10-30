import React, { FunctionComponent } from 'react';
import Pokemonlist from './pages/pokemon-list';




/*
règles : 
 ->  appeler les hooks uniquement au niveau racine, 
 ->  appeler les hooks uniquement depuis des composants de fonctions,
 ->   modifier un état par remplacement 
*/
const App: FunctionComponent = () => {


 // cette constante est en fait notre gestionnaire d'évènement. exemple sur onClick
 //const showPokemonsCount = () => {
 //   console.log("il y a " + pokemons.length + " pokemons dans le Pokédex" );

 //};
    
 return (
  <Pokemonlist />
 )
}
  
export default App;