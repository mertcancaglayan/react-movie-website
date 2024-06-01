import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import movies from "./data/fetchMovieData";

function App() {
	return (
		<>
			<Header />
			<Banner />
			<>{console.log(movies)}</>
		</>
	);
}

export default App;
