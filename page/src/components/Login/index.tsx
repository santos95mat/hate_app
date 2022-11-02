import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { api } from "../../services";
import { StyledButton } from "../../styles";
import { LoginSection } from "./styles";

interface LoginData {
  email: string;
  password: string;
}

const Login = ({ setRegister }: any) => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = ({ email, password }: LoginData) => {
    const data: LoginData = {
      email,
      password,
    };

    api
      .post("/auth/login", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <LoginSection>
        <div>
          <h2>Login</h2>
          <form action="" method="post">
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledButton
              black
              onClick={(e) => {
                handleLogin({ email, password });
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              Entrar
            </StyledButton>
          </form>
          <p>Não tem uma conta?</p>
          <a
            href="##"
            onClick={(e) => {
              setRegister(true);
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            Cadastre-se
          </a>
        </div>
      </LoginSection>
    </>
  );
};

export default Login;
