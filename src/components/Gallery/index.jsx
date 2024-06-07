import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { faThumbsUp, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { popularMovies, popularTvShows } from "../../data/fetchMovieData";
import recommendedMovies from "../../data/recommendedMovies";
import recommendedTVShows from "../../data/recommendedTVShows";
import topRatedMoviesData from "../../data/topRatedMovies";
import topRatedTvShowsData from "../../data/topRatedTvShows";
import "./gallery.css";
import GalleryCard from "./GalleryCard";
import GalleryHeader from "./GalleryHeader";


function Gallery() {
	const top20Movies = topRatedMoviesData.slice(0, 20);
	const top20TvShows = topRatedTvShowsData.slice(0, 20);

	const [categories, setCategories] = useState({
		popular: popularMovies,
		recommended: recommendedMovies,
		top20: top20Movies,
	});

	const handleNavigation = (section, category) => {
		setCategories((prev) => {
			if (section === "top20") {
				return {
					...prev,
					top20: category === "movies" ? top20Movies : top20TvShows,
				};
			} else if (section === "recommended") {
				return {
					...prev,
					recommended: category === "movies" ? recommendedMovies : recommendedTVShows,
				};
			}
			return {
				...prev,
				[section]: category === "movies" ? popularMovies : popularTvShows,
			};
		});
	};

	return (
		<Router>
			<div>
				<div className="gallery">
					<GalleryHeader title="Popular" icon={faStar} onNavigate={handleNavigation} />
					<GalleryCard category={categories.popular} />
				</div>
				<div className="gallery">
					<GalleryHeader title="Recommended" icon={faThumbsUp} onNavigate={handleNavigation} />
					<GalleryCard category={categories.recommended} />
				</div>
				<div className="gallery">
					<GalleryHeader title="Top 20" icon={faTrophy} onNavigate={handleNavigation} />
					<GalleryCard category={categories.top20} />
				</div>
			</div>
		</Router>
	);
}

export default Gallery;
