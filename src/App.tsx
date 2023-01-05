import PokemonFetch from "./components/PokemonFetch";
import "./App.css";

const App = () => {
  return <PokemonFetch />;
};

export default App;

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import PokemonList from "./PokemonList";

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 1rem;
// `;
// type Data = { [key: string]: {} };
// const PokemonFetch = () => {
//   const [pokemonData, setPokemonData] = useState<any>([]);

//   useEffect(() => {
//     let initialData: any = [];
//     const fetchPokemonData = async (pokemon: any) => {
//       let url = pokemon.url;
//       const getResults: any = await axios.get(url).then((pokeData) => {
//         //console.log(pokeData.data);
//         return pokeData.data;
//       });
//       return getResults;
//     };
//     const fetchPokes = async () => {
//       let results: any;
//       const getResults: any = await axios
//         .get(`https://pokeapi.co/api/v2/pokemon`)
//         .then((data: any) => {
//           //console.log(data.data.results);
//           data.data.results.forEach((newData: any) => {
//             results = fetchPokemonData(newData);
//             initialData.push(results);
//             //console.log(results);
//           });
//         });

//       return results;
//       //return initialData;
//     };
//     const pokeRes: any = fetchPokes();
//     //const resultPokeman = pokeRes.map((data: any) => data);
//     console.log(pokeRes);
//     setPokemonData(["dare", "tola", "sidi"]);
//   }, []);

//   useEffect(() => {
//     pokemonData && console.log(pokemonData);
//     //pokemonData && console.log(pokemonData[0]);
//   }, [pokemonData]);

//   return (
//     <Wrapper>
//       {pokemonData?.map((result: any, index: number) => (
//         <PokemonList result={result} key={index} />
//       ))}
//     </Wrapper>
//   );
// };

// export default PokemonFetch;
