import React, { useEffect, useState } from "react";
import Carousel from "../../Carousel";
import recomendedTVShows from "../../../data/recommendedTVShows";
import Genres from "../../Genres/Genres";
import topRatedTvShows from "../../../data/topRatedTvShows";
import GalleryCard from "../../GalleryCard/GalleryCard";
import { popularTvShows } from "../../../data/fetchMovieData";
import PopupOverlay from "../../PopupCard/PopupOverlay";
import PopupCard from "../../PopupCard";

function Tvshows() {
	const [selectedGenre, setSelectedGenre] = useState("all");
	const [filteredTvs, setFilteredTvs] = useState(topRatedTvShows);
	const [selectedShow, setSelectedShow] = useState(null);

	useEffect(() => {
		if (selectedGenre === "new-popular") {
			setFilteredTvs(popularTvShows);
		} else if (selectedGenre) {
			if (selectedGenre === "all") {
				return setFilteredTvs(topRatedTvShows);
			}
			const filtered = topRatedTvShows.filter((movie) =>
				movie.genres.some((genre) => genre.toLowerCase() === selectedGenre),
			);
			setFilteredTvs(filtered);
		} else {
			setFilteredTvs(topRatedTvShows);
		}
	}, [selectedGenre]);

	const capitalize = (str) => {
		if (!str) return "";
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	};

	const handleCardClick = (show) => {
		setSelectedShow(show);
	};

	const handleClosePopup = () => {
		setSelectedShow(null);
	};

	return (
		<main>
			<Carousel data={recomendedTVShows} type="tv"></Carousel>
			<Genres onGenreSelect={setSelectedGenre} />
			<h3 className="pageGenre title">{`${capitalize(selectedGenre)} TV Series`} </h3>
			<section className="displaySection">
				<GalleryCard category={filteredTvs} onCardClick={handleCardClick}></GalleryCard>
			</section>
			<PopupOverlay show={selectedShow} onClose={handleClosePopup}>
				{selectedShow && <PopupCard show={selectedShow} />}
			</PopupOverlay>
		</main>
	);
}

export default Tvshows;
