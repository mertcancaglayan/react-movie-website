import React, { useState } from "react";
import genresData from "../../data/genresListData";
import "./Genres.css";

function Genres({ onGenreSelect }) {
	const [currentGenre, setCurrentGenre] = useState("all");

	const handleGenreSelect = (genre) => {
		let newGenre;
		if (currentGenre === genre) {
			newGenre = "all";
		} else {
			newGenre = genre;
		}
		setCurrentGenre(newGenre);
		onGenreSelect(newGenre);
	};

	return (
		<div className="genresContainer">
			<ul>
				{genresData.map((data, index) => (
					<li key={data._id}>
						<button
							className={`genreBtn ${data.link} ${currentGenre === data.link ? "selected" : ""}`}
							onClick={() => handleGenreSelect(data.link)}
						>
							{data.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Genres;
