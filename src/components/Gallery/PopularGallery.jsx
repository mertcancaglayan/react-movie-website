import React, { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { popularMovies, popularTvShows } from "../../data/fetchMovieData";
import GalleryCard from "./GalleryCard";
import GalleryHeader from "./GalleryHeader";

const PopularGallery = () => {
	const [popularCategory, setPopularCategory] = useState(popularMovies);

	const handleNavigation = (section, category) => {
		setPopularCategory(category === "movies" ? popularMovies : popularTvShows);
	};

	return (
		<div className="gallery">
			<GalleryHeader title="Popular" icon={faStar} onNavigate={handleNavigation} />
			<GalleryCard category={popularCategory} />
		</div>
	);
};

export default PopularGallery;
