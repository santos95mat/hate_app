import { useAuth } from "../../contexts/auth";
import { StyledProfile } from "./styles";
import editImg from "../../assets/edit.png";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <StyledProfile>
      <div id="capa"></div>
      <div id="foto"></div>
      <img src={editImg} alt="" />
      <div id="user">
        <h1>{currentUser.name}</h1>
        <p>({currentUser.id})</p>
      </div>

      <article id="details">
        <h3>Detalhes</h3>
        <div>
          <p>Gênero: {currentUser.gender}</p>
          <p>E-mail: {currentUser.email}</p>
          <p>
            Usuário desde {currentUser.createdAt.substring(8, 10)}/
            {currentUser.createdAt.substring(5, 7)}/
            {currentUser.createdAt.substring(0, 4)}
          </p>
        </div>
      </article>

      <article id="publications">
        <h3>Publicações</h3>
        <p>UNDER BUILDING</p>
      </article>
    </StyledProfile>
  );
};

export default Profile;
