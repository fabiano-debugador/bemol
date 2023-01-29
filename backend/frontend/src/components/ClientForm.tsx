import { useForm, SubmitHandler } from "react-hook-form";
import { Api } from "../services/api";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
`;

const Form = styled.form`
  padding: 0 20px;
  background-color: #7d7b7b;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  height: 30px;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
`;

const CepContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputCep = styled.input`
  height: 30px;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  flex-grow: 1;
  margin-right: 20px;
`;

const Button = styled.button`
  background: #969dff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  height: 40px;
  background: #969dff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

type Inputs = {
  login: string;
  password: string;
  name: string;
  cpf: string;
  zipCode: string;
  address: string;
  complement: string;
  city: string;
  uf: string;
};

const ClientForm: React.FC = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const zipCodeSearch = async (zipCode: string): Promise<any> => {
    try {
      const result = await Api.get(`https://viacep.com.br/ws/${zipCode}/json/`);

      if (result.data) {
        const { logradouro, localidade, uf } = result.data;
        setValue("address", logradouro);
        setValue("city", localidade);
        setValue("uf", uf);
      }
    } catch (e) {
      alert("Opps CEP incorreto!");
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const {
      login,
      password,
      name,
      zipCode,
      cpf,
      address,
      city,
      uf,
      complement,
    } = data;
    try {
      await Api.post("/users", {
        login,
        password,
        name,
        zipCode,
        cpf,
        address,
        city,
        uf,
        complement,
      });
      setValue("login", "");
      setValue("password", "");
      setValue("name", "");
      setValue("zipCode", "");
      setValue("cpf", "");
      setValue("address", "");
      setValue("city", "");
      setValue("uf", "");
      setValue("complement", "");
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <h1>Cadastro de Usuários</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input
            placeholder="Login"
            {...register("login", { required: true })}
          />
          {errors.login && <span>Login é obrigatório</span>}

          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Password é obrigatório</span>}
          <Input placeholder="Name" {...register("name")} />
          <Input placeholder="CPF" {...register("cpf")} />
          <CepContainer>
            <InputCep
              placeholder="CEP"
              {...register("zipCode", { minLength: 8, maxLength: 8 })}
            />
            {errors.zipCode && (
              <span>Cep deve conter 8 dígitos sem espaço e (-)</span>
            )}

            <Button
              type="button"
              onClick={() => {
                const singleValue = getValues("zipCode");
                zipCodeSearch(singleValue);
              }}
            >
              Consultar CEP
            </Button>
          </CepContainer>
          <Input placeholder="Endereço" {...register("address")} />
          <Input placeholder="Complemento" {...register("complement")} />
          <Input placeholder="Cidade" {...register("city")} />
          <Input placeholder="UF" {...register("uf")} />
          <SubmitButton type="submit">Cadastrar</SubmitButton>
        </InputContainer>
      </Form>
    </>
  );
};

export default ClientForm;
