import React, { FunctionComponent } from 'react';
import Pokemonlist from './pages/pokemon-list';


/*
règles : 
 ->  appeler les hooks uniquement au niveau racine, 
 ->  appeler les hooks uniquement depuis des composants de fonctions,
 ->   modifier un état par remplacement 
*/
const App: FunctionComponent = () => {
    
 return (
  <Pokemonlist />
 )
}
  
export default App;