import { Paper, Typography } from "@mui/material";

export interface Pokemon {
  selectedPokemon: {
    id: number;
    name: string;
    weight: number;
    sprites: {
      back_default: string;
    };
  };
}
const Card = (props: Pokemon) => {
  return (
    <div>
      {props.selectedPokemon.name && (
        <Paper
          style={{
            width: "300px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
          }}
          elevation={3}
        >
          {props.selectedPokemon.name && (
            <div className=" h-3/6 w-full rounded-full bg-black">
              <img
                height={150}
                width={150}
                style={{
                  objectFit: "contain",
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
                alt=""
                src={props.selectedPokemon.sprites.back_default}
              />
            </div>
          )}
          <div>
            <Typography>name : {props.selectedPokemon.name}</Typography>
            <Typography>weight: {props.selectedPokemon.weight}</Typography>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default Card;
