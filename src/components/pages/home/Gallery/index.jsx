import React, { useState } from "react";
import PopularGallery from "./PopularGallery";
import RecommendedGallery from "./RecommendedGallery";
import Top20Gallery from "./Top20Gallery";
import PopupCard from "../../../PopupCard";
import PopupOverlay from "../../../PopupCard/PopupOverlay";
import "./gallery.css";

function Gallery() {
	const [selectedShow, setSelectedShow] = useState(null);

	const handleCardClick = (show) => {
		setSelectedShow(show);
	};

	const handleClosePopup = () => {
		setSelectedShow(null);
	};

	return (
		<section>
			<PopularGallery onCardClick={handleCardClick} />
			<RecommendedGallery onCardClick={handleCardClick} />
			<Top20Gallery onCardClick={handleCardClick} />
			<PopupOverlay show={selectedShow} onClose={handleClosePopup}>
				{selectedShow && <PopupCard show={selectedShow} />}
			</PopupOverlay>
		</section>
	);
}

export default Gallery;
