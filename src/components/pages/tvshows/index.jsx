import React from "react";
import Carousel from "../../Carousel";
import recomendedTVShows from "../../../data/recommendedTVShows";

function Tvshows() {
	return (
		<main>
			<Carousel data={recomendedTVShows} type="tv"></Carousel>
		</main>
	);
}

export default Tvshows;
