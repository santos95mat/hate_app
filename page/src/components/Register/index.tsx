import { useState } from "react";
import { api } from "../../services";
import { StyledButton } from "../../styles";
import { RegisterSection } from "./styles";
import showPasswordImg from "../../assets/mostrar-senha.png";

interface RegisterData {
  name: string;
  email: string;
  gender: string;
  password: string;
}

const Register = ({ setRegister }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("masculino");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const handleRegister = ({ name, email, gender, password }: RegisterData) => {
    const data: RegisterData = {
      name: name,
      email: email,
      gender: gender,
      password: password,
    };

    api
      .post("/user", data)
      .then((res) => {
        setRegister(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <RegisterSection>
        <div>
          <h2>Cadastre-se</h2>
          <form action="" method="post">
            <input
              type="text"
              name="rName"
              id="rName"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="rEmail"
              id="rEmail"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              onChange={(e) => {
                setGender(e.target.value);
                console.log(gender);
              }}
              name="gender"
              id="gender"
            >
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
            <div>
              <input
                type={type}
                name="rPassword"
                id="rPassword"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                onClick={() =>
                  type === "text" ? setType("password") : setType("text")
                }
                src={showPasswordImg}
                alt="showPassword"
              />
            </div>
          </form>
          <div>
            <StyledButton
              onClick={(e) => {
                handleRegister({ name, email, password, gender });
                e.stopPropagation();
                e.preventDefault();
              }}
              green
            >
              Cadastrar
            </StyledButton>
            <StyledButton black>Google</StyledButton>
            <a
              href="##"
              onClick={(e) => {
                setRegister(false);
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              Voltar ao login
            </a>
          </div>
        </div>
      </RegisterSection>
    </>
  );
};

export default Register;
