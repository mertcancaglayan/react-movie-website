import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/home";
import Favorites from "./components/pages/favorites";
import Movies from "./components/pages/movies";
import Tvshows from "./components/pages/tvshows";

function App() {
	return (
		<Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/movies" element={<Movies />}></Route>about
				<Route path="/tvshows" element={<Tvshows />}></Route>
				<Route path="/favorites" element={<Favorites />}></Route>
			</Routes>
		</Fragment>
	);
}

export default App;
