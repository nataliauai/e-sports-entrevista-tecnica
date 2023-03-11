import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Forms } from "../../components/Forms";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Div } from "./style";
import { schema } from "./schema";
import api from "../../services/api";
import { toast } from "react-toastify";

export const Jogador = ({setCardJogador, cardJogador}) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data)
    api.post("/jogadores", data).then((res)=>{
      setCardJogador([...cardJogador])
      toast.success("Jogador cadastrado com sucesso!")
    })
    .catch((err) => toast(err))
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
            <h1 className="title1">Cadastro de jogadores</h1>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" placeholder="Digite o nome do jogador..."
            {...register("name")} />
            <p className="error">{errors.name?.message}</p>

            <label htmlFor="age">Idade</label>
            <input
              id="age"
              type="text"
              placeholder="Digite a idade do jogador"
              {...register("age")}
            />
            <p className="error">{errors.age?.message}</p>

            <label htmlFor="time_id">ID do seu Time</label>
            <input
              id="time_id"
              type="text"
              placeholder="Digite a idade do jogador"
              {...register("time_id")}
            />
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
