import { useEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import { DivLand } from "./style";
import "./Landing.css";

export const Dashboard = ({ getOut }) => {
  const [cardTime, setCardTime] = useState([]);
  const [cardJogador, setCardJogador] = useState([]);

  useEffect(() => {
    api.get("/jogadores").then((res) => {
      setCardJogador(res.data);
    });
  }, []);

  useEffect(() => {
    api.get("/times").then((res) => {
      setCardTime(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <h1 className="titleDash">
        <span className="colorBrand">E- </span>
        Sports - Cadastre seu time e jogadores de forma rápida
      </h1>
    <div className="landDash">
      <DivLand>
        <h2>Times Cadastrados:</h2>

        {cardTime.map((time) => {
          return (
            <li key={time.id}>
              <h4>id:{time.id}</h4>
              <h4 className="name">Nome:{time.name}</h4>
            </li>
          );
        })}
      </DivLand>

      <DivLand>
        <h2>Jogadores Cadastrados:</h2>

        {cardJogador.map((jogador) => {
          return (
            <li key={jogador.id}>
              <h4 className="name">Nome:{jogador.name}</h4>
              <h4 className="age">Idade:{jogador.age}</h4>
              <h4 className="time_id">Time:{jogador.time_id}</h4>
            </li>
          );
        })}
      </DivLand>
      </div>
    </>
  );
};
