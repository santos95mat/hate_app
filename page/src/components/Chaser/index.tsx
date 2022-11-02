import { useUsers } from "../../contexts/users";
import { StyledChaser } from "./styles";

const Chaser = () => {
	const { chasers } = useUsers();

	return (
		<StyledChaser>
			<div id="container">
				{chasers().map((e: any, i: any) => {
					return (
						<article key={i}>
							<div className="foto"></div>
							<div className="chaserDados">
								<p>{e.chaserName}</p>
								<span>({e.chaserId})</span>
							</div>
						</article>
					);
				})}
			</div>
		</StyledChaser>
	);
};

export default Chaser;
