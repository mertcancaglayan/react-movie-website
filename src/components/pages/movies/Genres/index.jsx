import React from "react";
import genresData from "../../../../data/genresListData";

function Genres() {
	return (
		<aside>
			<ul>
				{genresData.map((data) => {
					return <li>{data.name}</li>;
				})}
			</ul>
		</aside>
	);
}

export default Genres;
