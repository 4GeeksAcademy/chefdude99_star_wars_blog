import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import CardPersonajes from "../components/CardPersonajes.jsx";
import CardPlanetas from "../components/CardPlanetas.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="principal container mt-5">
			<h1>Personajes</h1>
			<br />
			<CardPersonajes />
			<br />
			<h1>Planetas</h1>
			<br />
			<CardPlanetas />
		</div>
	);
}; 