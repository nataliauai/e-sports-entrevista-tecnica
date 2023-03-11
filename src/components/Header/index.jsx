import { Link } from "react-router-dom";
import HeaderSty from "./style";

const Header = () => {
  return (
    <HeaderSty>
      <Link to="/times">
        <span>Cadastrar times</span>
      </Link>
      <Link to="/jogadores">
        <span>Cadastrar jogadores</span>
      </Link>
      <Link to="/">
        <span>Consultar times e jogadores cadastrados</span>
      </Link>
    </HeaderSty>
  );
};

export default Header;
