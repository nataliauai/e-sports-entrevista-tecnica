import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Forms } from "../../components/Forms";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Div } from "./style";
import { schema } from "./schema";

export const Jogador = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Div>
        <div className="contentCadastro">
          <header>
            <h2>E-SPORTS</h2>
            <Link to="/">
              <span className="goback">Voltar</span>
            </Link>
          </header>

          <Forms onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" placeholder="Digite o nome do jogador..."{...register("name")} />
            <p className="error">{errors.name?.message}</p>

            <label htmlFor="age">Idade</label>
            <input
              id="age"
              type="text"
              placeholder="Digite a idade do jogador"
              {...register("age")}
            />
            <p className="error">{errors.age?.message}</p>

            <label htmlFor="team">Selecionar Time</label>
            <select id="team" {...register("team")}>
              <option value="">Opção 1 </option>
            </select>
            <p className="error">{errors.team?.message}</p>

            <button className="btnregister" type="submit">
              Cadastrar
            </button>
          </Forms>
        </div>
      </Div>
    </>
  );
};
