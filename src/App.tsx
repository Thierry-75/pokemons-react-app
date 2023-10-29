import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';



/*
règles : 
 ->  appeler les hooks uniquement au niveau racine, 
 ->  appeler les hooks uniquement depuis des composants de fonctions,
 ->   modifier un état par remplacement 
*/
const App: FunctionComponent = () => {
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 useEffect(()=> {
    setPokemons(POKEMONS);

 },[]);

 // cette constante est en fait notre gestionnaire d'évènement. exemple sur onClick
 //const showPokemonsCount = () => {
 //   console.log("il y a " + pokemons.length + " pokemons dans le Pokédex" );

 //};
    
 return (
  
  <div>
    <h1 className="center">Pokédex</h1>
    <div className="container">
      <div className="row">
        {pokemons.map(({ id, name, picture, created })=>(
          <div className="col s6 m4" key={id}>
            <div className="card horizontal">
              <div className="card-image">
                <img src={picture} alt={name} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{name}</p>
                  <p><small>{created.toString()}</small></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

 );
}
  
export default App;