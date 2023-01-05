import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PokemonList from "./PokemonList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
type Data = { [key: string]: {} };
const PokemonFetch = () => {
  const [value, setValue] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<any>([]);
  const [dataPokemon, setDataPokemon] = useState<any>([]);

  // NEVER FORGET THE IMPORTANCE OF PROMISE ALL IN SCENARIOS LIKE THIS !!!

  useEffect(() => {
    const fetchPokes = async () => {
      try {
        const initialResults = await axios.get(
          `https://pokeapi.co/api/v2/pokemon`,
        );
        const results = await Promise.all(
          initialResults.data.results.map(async (newData: { url: string }) => {
            const pokeMans = await axios
              .get(newData.url)
              .then((data) => data.data);
            return pokeMans;
          }),
        );
        setPokemonData(results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPokes();
  }, []);

  useEffect(() => {
    pokemonData.length > 0 && console.log(pokemonData);
  }, [pokemonData]);

  return (
    <Wrapper>
      {pokemonData.length > 0 ? (
        pokemonData.map((result: any, index: number) => (
          <PokemonList key={index} result={result} />
        ))
      ) : (
        <h1>Nothing Here</h1>
      )}
    </Wrapper>
  );
};

export default PokemonFetch;
