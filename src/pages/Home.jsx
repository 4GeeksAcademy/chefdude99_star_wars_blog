import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import CardNaves from "../components/CardNaves.jsx";
import CardPersonajes from "../components/CardPersonajes.jsx";
import CardPlanetas from "../components/CardPlanetas.jsx";

export const Home = () => {

	return (
		<div className="principal container mt-3">
			<h1>Personajes</h1>
			<br />
			<CardPersonajes />
			<br />
			<h1>Planetas</h1>
			<br />
			<CardPlanetas />
			<br />
			<h1>Planetas</h1>
			<br />
			<CardNaves />
		</div>
	);
}; 
