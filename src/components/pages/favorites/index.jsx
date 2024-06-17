import React, { useEffect, useState } from "react";
import GalleryCard from "../../GalleryCard/GalleryCard";
import PopupOverlay from "../../PopupCard/PopupOverlay";
import PopupCard from "../../PopupCard";
import "./index.css";

function Favorites() {
	const [likedShows, setLikedShows] = useState(JSON.parse(localStorage.getItem("likedShows")) || []);
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		localStorage.setItem("likedShows", JSON.stringify(likedShows));
	}, [likedShows]);

	const handleCardClick = (movie) => {
		setSelected(movie);
	};

	const handleClosePopup = () => {
		setSelected(null);
	};

	return (
		<section className="favoriteSection">
			<h3 className="favTitle">Favorites</h3>
			<GalleryCard category={likedShows} onCardClick={handleCardClick} />
			<PopupOverlay show={selected} onClose={handleClosePopup}>
				{selected && <PopupCard show={selected} onClose={handleClosePopup} />}
			</PopupOverlay>
		</section>
	);
}

export default Favorites;
