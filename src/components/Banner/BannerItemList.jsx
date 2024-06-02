import React, { Fragment } from "react";
import movies from "../../data/fetchMovieData";
import "./banner.css";

function BannerItemList() {
	return (
		<Fragment>
			{movies.slice(0, 7).map((movie, index) => (
				<div className="card">
					<div className="cardContent">
						<h3 className="cardTitle">{movie.title}</h3>
						<p className="cardDescription">{movie.description}</p>

						<div className="cardGenres">
							{movie.genres.map((genre) => {
								return <p>{genre}</p>;
							})}
						</div>
						<div className="ratings">
							<p className="metacriticsRating">{`MetaCritics: ${movie.metaScore}`}</p>
							<p className="rating">{`IMDB: ${movie.rating}`}</p>
						</div>
						<p className="cardRealseYear">{movie.releaseYear}</p>
					</div>
					<img key={index} src={movie.img} alt={movie.title} className="bannerSliderImg" />
				</div>
			))}
		</Fragment>
	);
}

export default BannerItemList;
