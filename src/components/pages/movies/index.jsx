import React from "react";
import Genres from "../../Genres/Genres"
import Carousel from "../../Carousel";
import recommendedMovies from "../../../data/recommendedMovies";
import "./index.css"

function Movies() {
	return (
		<main>
			<Carousel data={recommendedMovies} type="movies"></Carousel>
			<Genres></Genres>
		</main>
	);
}

export default Movies;
