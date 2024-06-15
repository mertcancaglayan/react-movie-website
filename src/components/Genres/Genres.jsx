import React from "react";
import genresData from "../../data/genresListData";
import "./Genres.css";

function Genres() {
	return (
		<aside className="genresContainer">
			<ul>
				{genresData.map((data, index) => {
					return (
						<li className={`genreBtn ${data.name.toLocaleLowerCase()}`} key={index}>
							{data.name}
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

export default Genres;
