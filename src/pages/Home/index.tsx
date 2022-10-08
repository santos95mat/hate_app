import {
  StyledBody,
  StyledHeader,
  StyledMenu,
  StyledNav,
  StyledPosts,
} from "./styles";
import imgLogout from "../../assets/logout.png";
import imgBack from "../../assets/back.png";
import Chasing from "../../components/Chasing";
import Profile from "../../components/Profile";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import Chaser from "../../components/Chaser";
import { useState } from "react";
import { useUsers } from "../../contexts/users";

declare type TypedSection = "profile" | "chaser" | "chasing";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();

  const {
    getAllUsers,
    getUserById,
    updateUserProfile,
    deleteUserProfile,
    follow,
    unfollow,
    chasers,
    chasing,
  } = useUsers();

  const [section, setSection] = useState<TypedSection>("profile");
  const [search, setSearch] = useState(false);
  const [users, setUsers] = useState<any>([]);
  const [chasings, setChasings] = useState<any>([]);
  const [text, setText] = useState<any>("");

  const getAll = async () => {
    const index: any = await getAllUsers();
    setUsers(index);
  };

  const getChasing = async () => {
    const index: any = await chasing();
    const data = index.map((e: any) => e.chasingId);
    setChasings(data);
  };

  return (
    <>
      <StyledBody>
        <StyledMenu>
          <StyledHeader>
            <h1
              onClick={() => {
                navigate("/home");
              }}
            >
              H.
            </h1>

            <article>
              {search ? (
                <img
                  onClick={() => {
                    setSearch(!search);
                  }}
                  src={imgBack}
                  alt="back"
                />
              ) : (
                <></>
              )}

              <input
                onClick={() => {
                  setSearch(true);
                  getAll();
                  getChasing();
                }}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                type="text"
                name="search"
                id="search"
                placeholder="Pesquisar pessoas no hate u."
              />
            </article>

            {search ? (
              <div id="search">
                {users
                  .filter((e: any) =>
                    e.name.toLowerCase().includes(text.toLowerCase())
                  )
                  .map((e: any, i: any) => {
                    if (e.id !== currentUser.id)
                      return (
                        <div className="users" key={i}>
                          <p>{e.name}</p>

                          {chasings.includes(e.id) ? (
                            <span
                              onClick={() => {
                                unfollow(e.id).then(() => {
                                  const res = chasings.filter(
                                    (f: any) => f !== e.id
                                  );
                                  setChasings(res);
                                });
                              }}
                            >
                              Unfollow
                            </span>
                          ) : (
                            <span
                              onClick={() => {
                                follow(e.id).then(() =>
                                  setChasings([...chasings, e.id])
                                );
                              }}
                            >
                              Follow
                            </span>
                          )}
                        </div>
                      );
                  })}
              </div>
            ) : (
              <></>
            )}

            <img onClick={() => logout()} src={imgLogout} alt="menu" />
          </StyledHeader>

          <StyledNav active={section}>
            <p id="profile" onClick={() => setSection("profile")}>
              Perfil
            </p>
            <p id="chaser" onClick={() => setSection("chaser")}>
              Seguidores
            </p>
            <p id="chasing" onClick={() => setSection("chasing")}>
              Seguindo
            </p>
          </StyledNav>

          {section === "profile" ? (
            <Profile></Profile>
          ) : section === "chaser" ? (
            <Chaser></Chaser>
          ) : (
            <Chasing></Chasing>
          )}
        </StyledMenu>
        <StyledPosts>
          <h1> UNDER BUILDING</h1>
        </StyledPosts>
      </StyledBody>
    </>
  );
};

export default Home;
