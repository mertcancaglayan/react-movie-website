import React, { Fragment } from "react";
import movies from "../../data/fetchMovieData";
import "./banner.css";

function BannerItemList() {
	return (
		<Fragment>
			{movies.slice(0, 7).map((movie, index) => (
				<img key={index} src={movie.img} alt={movie.title} className="bannerSliderImg" />
			))}
		</Fragment>
	);
}

export default BannerItemList;
