import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Components/Card/Card";
import "./App.css";
import { Typography } from "@mui/material";
interface Pokemon {
  url: string;
  name: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokeemon] = useState<any>({});

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => {
        throw new Error(err.message);
      });
  }, []);

  const handleChange = (url: string) => {
    axios.get(url).then((res) => setSelectedPokeemon(res.data));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography variant="h2">A simple Pokemon Api</Typography>
      <select
        style={{
          width: "300px",
          height: "40px",
          outline: "none",
          fontSize: "20px",
          textAlign: "center",
          marginTop: "40px",
        }}
        className="w-80"
        onChange={(e) => handleChange(e.target.value)}
      >
        {pokemons.map((item, idx) => (
          <option
            key={idx}
            onClick={() => handleChange(item.url)}
            value={item.url}
          >
            {item.name}
          </option>
        ))}
      </select>

      <Card selectedPokemon={selectedPokemon} />
    </div>
  );
};

export default App;
