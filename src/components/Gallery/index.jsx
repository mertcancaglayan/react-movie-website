import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { faThumbsUp, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { movies, tvShows } from "../../data/fetchMovieData";
import "./gallery.css";
import GalleryCard from "./GalleryCard";
import GalleryHeader from "./GalleryHeader";

function Gallery() {
	const [categories, setCategories] = useState({
		popular: movies,
		recommended: movies,
		top20: movies,
	});

	const handleNavigation = (section, category) => {
		setCategories((prev) => ({
			...prev,
			[section]: category === "movies" ? movies : tvShows,
		}));
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
