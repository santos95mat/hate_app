import { StyledBody, StyledHeader, StyledMenu, StyledNav, StyledPosts } from "./styles";
import imgLogout from "../../assets/logout.png";
// import { useUsers } from "../../contexts/users";
import Chasing from "../../components/Chasing";
import Profile from "../../components/Profile";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import Chaser from "../../components/Chaser";
import { useState } from "react";

declare type TypedSection = "profile" | "chaser" | "chasing";

const Home = (): JSX.Element => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	// const { getAllUsers, getUserById, updateUserProfile, deleteUserProfile, follow, unfollow, chasers, chasing } = useUsers();

	// getAllUsers().then(res => console.log(res));
	// console.log();
	// getUserById("90f19469-ab03-4023-b639-5e78db7e1929").then(res => console.log(res));
	// console.log();
	// console.log(chasers());
	// console.log();
	// console.log(chasing());
	// console.log();

	const [section, setSection] = useState<TypedSection>("profile");

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

						<input
							type="text"
							name="search"
							id="search"
							placeholder="Pesquisar pessoas no hate u."
						/>

						<img
							onClick={() => logout()}
							src={imgLogout}
							alt="menu"
						/>
					</StyledHeader>

					<StyledNav active={section}>
						<p
							id="profile"
							onClick={() => setSection("profile")}
						>
							Perfil
						</p>
						<p
							id="chaser"
							onClick={() => setSection("chaser")}
						>
							Seguidores
						</p>
						<p
							id="chasing"
							onClick={() => setSection("chasing")}
						>
							Seguindo
						</p>
					</StyledNav>

					{section === "profile" ? <Profile></Profile> : section === "chaser" ? <Chaser></Chaser> : <Chasing></Chasing>}
				</StyledMenu>
				<StyledPosts>
					<h1> UNDER BUILDING</h1>
				</StyledPosts>
			</StyledBody>
		</>
	);
};

export default Home;
