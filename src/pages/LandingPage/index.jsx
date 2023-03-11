import { useEffect, useState } from "react";
import api from "../../services/api";
import { DivLand } from "./style";

export const LandingPage = () => {
  const [cardTime, setCardTime] = useState([]);
  const [cardJogador, setCardJogador] = useState([]);

  useEffect(() => {
    api.get("/jogadores").then((res) => {
      setCardJogador(res.data)
    });
  }, []);

  useEffect(() => {
    api.get("/times").then((res) => {
      setCardTime(res.data)
    });
  }, []);

  return (
    <>
      <DivLand>
        <h1>Times Cadastrados:</h1>
        
          {cardTime.map((time) => {
            return (
              <li key={time.id}
              cardTime={cardTime}
              setCardTime = {setCardTime}>
                <h4>id:{time.id}</h4>
                <h4 className="name">Nome:{time.name}</h4>
              </li>
            );
          })}
        
      </DivLand>

      <DivLand>
        <h1>Jogadores Cadastrados</h1>
        
          {cardJogador.map((jogador) => {
            return (
              <li key={jogador.id}
              cardJogador = {cardJogador}
              setCardJogador = {setCardJogador}>
                <h4 className="name">Nome:{jogador.name}</h4>
                <h4 className="age">Idade:{jogador.age}</h4>
                <h4 className="time_id">Time:{jogador.time_id}</h4>
              </li>
            );
          })}
        
      </DivLand>
    </>
  );
};
