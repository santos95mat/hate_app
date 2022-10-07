import { useUsers } from "../../contexts/users";
import { StyledChasing } from "./styles";

const Chasing = () => {
	const { chasing } = useUsers();

  return (
    <StyledChasing>
      <div id="container">
        {chasing().map((e: any, i: any) => {
          return (
            <article key={i}>
              <div className="foto"></div>
              <div className="chasingDados">
                <p>{e.chasingName}</p>
                <span>({e.chasingId})</span>
              </div>
            </article>
          );
        })}
      </div>
    </StyledChasing>
  );
};

export default Chasing;
