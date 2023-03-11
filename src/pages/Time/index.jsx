import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Forms } from "../../components/Forms";
import { Link } from "react-router-dom";
import { DivTeam } from "./style";
import { schema } from "./schema";
import api from "../../services/api";
import { toast } from "react-toastify";

export const Time = ({setCardTime, cardTime}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmitFunc(data) {
    console.log(data)
    api.post("/times", data).then((res)=>{
      setCardTime([...cardTime])
      toast.success("Time cadastrado com sucesso!")
    })
    .catch((err) => toast(err))
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

          <Link to="/jogadores">
            <p className="btnregister1" type="submit">Deseja cadastrar jogadores?</p>
          </Link>
        </Forms>
      </div>
    </DivTeam>
  );
};