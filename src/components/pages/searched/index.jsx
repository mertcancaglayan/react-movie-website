import React, { useState } from "react";
import GalleryCard from "../../GalleryCard/GalleryCard";
import SearchedFilter from "./SearchFilter";
import PopupOverlay from "../../PopupCard/PopupOverlay";
import PopupCard from "../../PopupCard";
import Search from "../../Header/Search";
import "./index.css";
import { useSearchParams } from "react-router-dom";

function Searched() {
	const searchResults = SearchedFilter();
	const [selected, setSelected] = useState(null);

	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");

	const handleCardClick = (movie) => {
		setSelected(movie);
	};

	const handleClosePopup = () => {
		setSelected(null);
	};

	return (
		<main className="searchPage">
			<div className="searchArea">
				<Search />
			</div>
			<section className="searchResults">
				<h3 className="searchResults title">{`Search Results For: ${q}`}</h3>
				{searchResults.length > 0 ? (
					<GalleryCard category={searchResults} onCardClick={handleCardClick} />
				) : (
					<p>No result found.</p>
				)}
				<PopupOverlay show={selected} onClose={handleClosePopup}>
					{selected && <PopupCard show={selected} onClose={handleClosePopup} />}
				</PopupOverlay>
			</section>
		</main>
	);
}

export default Searched;
