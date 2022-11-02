import { useState } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import { AuthDiv } from "./styles";

const Auth = (): JSX.Element => {
  const [register, setRegister] = useState(false);

  return (
    <>
      <AuthDiv>
        <h1>hate u.</h1>
        {register ? (
          <Register setRegister={setRegister} />
        ) : (
          <Login setRegister={setRegister} />
        )}
        <p>
          Todos os direitos reservados à{" "}
          <a
            href="https://www.github.com/santos95mat"
            target={"_blank"}
            rel="noreferrer"
          >
            Matheus Rodrigues Santos
          </a>
        </p>
      </AuthDiv>
    </>
  );
};

export default Auth;
