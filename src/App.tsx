import React, { FunctionComponent } from 'react';
import Pokemonlist from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

/*
règles : 
 ->  appeler les hooks uniquement au niveau racine, 
 ->  appeler les hooks uniquement depuis des composants de fonctions,
 ->   modifier un état par remplacement 
*/
const App: FunctionComponent = () => {
    
 return (
  <Router>
    <div>
        {/* barre de navigation commune à toutes les pages */}
        <nav>
            <div className='nav-wrapper teal'>
                <Link to="/" className='brand-logo center'>Pokédex</Link>
            </div>
        </nav>
        {/* le systeme de gestion des routes de notre application */}
    </div>
    <Switch>
        {/* l'ordre des routes est tres important ! */}
        <Route exact path="/" component={Pokemonlist} />
        <Route exact path="/pokemons" component={Pokemonlist} />
        <Route path="/pokemons/edit/:id" component={PokemonEdit} />
        <Route path="/pokemons/:id" component={PokemonsDetail} />
        <Route component={PageNotFound} /> {/* a declarer en dernier */}
    </Switch>
  </Router>
 )
}
  
export default App;