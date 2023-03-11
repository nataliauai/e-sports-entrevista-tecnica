import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Nome é obrigatório."),
  age: yup.number().positive().integer().required("Bio é obrigatória."),
  team: yup.string(),
});
