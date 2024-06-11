import React, { Fragment } from "react";
import PopularGallery from "./PopularGallery";
import RecommendedGallery from "./RecommendedGallery";
import Top20Gallery from "./Top20Gallery";
import "./gallery.css";

function Gallery() {
	return (
		<Fragment>
			<PopularGallery />
			<RecommendedGallery />
			<Top20Gallery />
		</Fragment>
	);
}

export default Gallery;
