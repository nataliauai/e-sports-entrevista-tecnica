import { Routes, Route } from "react-router-dom";
import { Jogador } from "../pages/Jogador";
import { LandingPage } from "../pages/LandingPage";
import { Time } from "../pages/Time";


const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/jogadores" element={<Jogador />} />
    <Route path="/times" element={<Time />} />
  </Routes>
);

export default RoutesMain;