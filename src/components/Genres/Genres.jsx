import React from "react";
import genresData from "../../data/genresListData";
import "./Genres.css";

function Genres({ onGenreSelect }) {
	return (
		<div className="genresContainer">
			<ul>
				{genresData.map((data, index) => (
					<li key={data._id}>
						<button
							className={`genreBtn ${data.link}`}
							onClick={() => onGenreSelect(data.link)}
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
