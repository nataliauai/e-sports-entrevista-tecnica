import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Forms } from "../../components/Forms";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { DivTeam } from "./style";
import { schema } from "./schema";

export const Time = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunc = (data) => {
    console.log(data)
  }

  return (
    <DivTeam>
      <div className="contentLogin">
        <h1>E-SPORTS</h1>

        <Forms onSubmit={handleSubmit(onSubmitFunc)}>
          <h3>Cadastro de times</h3>

          <label htmlFor="name">Nome</label>
          <input
            type="name"
            placeholder="Insira o nome do seu time"
            {...register("name")}
          />
          <p className="error">{errors.name?.message}</p>

          <button className="btnregister" type="submit">
              Cadastrar
            </button>

          <Link to="/jogador">
            <p className="button2">Deseja cadastrar jogadores?</p>
          </Link>
        </Forms>
      </div>
    </DivTeam>
  );
};