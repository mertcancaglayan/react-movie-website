import React, { useState, useEffect } from "react";
import Genres from "../../Genres/Genres";
import Carousel from "../../Carousel";
import recommendedMovies from "../../../data/recommendedMovies";
import "./index.css";
import GalleryCard from "../../GalleryCard/GalleryCard";
import topRatedMovies from "../../../data/topRatedMovies";
import { popularMovies } from "../../../data/fetchMovieData";
import PopupOverlay from "../../PopupCard/PopupOverlay";
import PopupCard from "../../PopupCard";

function Movies() {
	const [selectedGenre, setSelectedGenre] = useState("all");
	const [filteredMovies, setFilteredMovies] = useState(topRatedMovies);
	const [selectedMovie, setSelectedMovie] = useState(null);

	useEffect(() => {
		if (selectedGenre === "new-popular") {
			setFilteredMovies(popularMovies);
		} else if (selectedGenre) {
			if (selectedGenre === "all") {
				return setFilteredMovies(topRatedMovies);
			}
			const filtered = topRatedMovies.filter((movie) =>
				movie.genres.some((genre) => genre.toLowerCase() === selectedGenre.toLowerCase()),
			);
			setFilteredMovies(filtered);
		} else {
			setFilteredMovies(topRatedMovies);
		}
	}, [selectedGenre]);

	const capitalize = (str) => {
		if (!str) return "";
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	};

	const handleCardClick = (movie) => {
		setSelectedMovie(movie);
	};

	const handleClosePopup = () => {
		setSelectedMovie(null);
	};

	return (
		<main>
			<Carousel data={recommendedMovies} type="movies" />
			<Genres onGenreSelect={setSelectedGenre} />
			<h3 className="pageGenre title">{`${capitalize(selectedGenre)} Movies`}</h3>
			<section className="displaySection">
				<GalleryCard category={filteredMovies} onCardClick={handleCardClick} />
			</section>
			<PopupOverlay show={selectedMovie} onClose={handleClosePopup}>
				{selectedMovie && <PopupCard show={selectedMovie} />}
			</PopupOverlay>
		</main>
	);
}

export default Movies;
