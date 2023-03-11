import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Jogador } from "../pages/Jogador";
import { Time } from "../pages/Time";


const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/jogadores" element={<Jogador />} />
    <Route path="/times" element={<Time />} />
  </Routes>
);

export default RoutesMain;