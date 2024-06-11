import React from "react";
import PopularGallery from "./PopularGallery";
import RecommendedGallery from "./RecommendedGallery";
import Top20Gallery from "./Top20Gallery";
import "./gallery.css";

function Gallery() {
	return (
		<main>
			<PopularGallery />
			<RecommendedGallery />
			<Top20Gallery />
		</main>
	);
}

export default Gallery;
