import React, { useEffect, useState } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';

const usePokemons = () => {
    const [Pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    },[]);


    return Pokemons;
}

    export default usePokemons;