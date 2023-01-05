import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10rem;
  padding: 1rem;
  border: 1px solid gray;
`;
const PokemonList = ({ result }: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    //console.log(result);
  }, [result]);

  return (
    <Wrapper>
      {/* <div>
        <img src={result?.sprites?.front_default} alt="pokemon" />
      </div>
      <div>
        <h4>Name</h4>
        <h3>{result?.name}</h3>
      </div>
      <div>
        <h4>Abilities</h4>
        <div>
          {result?.abilities.map((ability: any) => (
            <h3>ability.name</h3>
          ))}
        </div>
      </div> */}
      <h1>{result.name}</h1>
    </Wrapper>
  );
};

export default PokemonList;
