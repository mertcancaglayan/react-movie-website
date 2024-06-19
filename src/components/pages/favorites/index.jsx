import React, { useEffect, useState } from "react";
import GalleryCard from "../../GalleryCard/GalleryCard";
import PopupOverlay from "../../PopupCard/PopupOverlay";
import PopupCard from "../../PopupCard";
import "./index.css";

function Favorites() {
	const [likedShows, setLikedShows] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem("likedShows")) || [];
		} catch (e) {
			console.error("Could not parse likedShows from localStorage", e);
			return [];
		}
	});

	const [selected, setSelected] = useState(null);

	useEffect(() => {
		try {
			localStorage.setItem("likedShows", JSON.stringify(likedShows));
		} catch (e) {
			console.error("Could not set likedShows in localStorage", e);
		}
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
			{selected && (
				<PopupOverlay show={selected} onClose={handleClosePopup}>
					<PopupCard show={selected} onClose={handleClosePopup} />
				</PopupOverlay>
			)}
		</section>
	);
}

export default Favorites;
