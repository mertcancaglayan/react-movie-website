import React, { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { popularMovies, popularTvShows } from "../../../../data/fetchMovieData";
import GalleryCard from "../../../GalleryCard/GalleryCard";
import GalleryHeader from "./GalleryHeader";

const PopularGallery = ({ onCardClick }) => {
	const [popularCategory, setPopularCategory] = useState(popularMovies);

	const handleNavigation = (section, category) => {
		setPopularCategory(category === "movies" ? popularMovies : popularTvShows);
	};


	return (
		<article className="gallery">
			<GalleryHeader title="Popular" icon={faStar} onNavigate={handleNavigation} />
			<GalleryCard category={popularCategory} onCardClick={onCardClick}/>
		</article>
	);
};

export default PopularGallery;
