import React, { Fragment } from "react";
import {popularMovies} from "../../data/fetchMovieData";
import imdblogo from "../../images/logos/imdblogo.png";
import metalogo from "../../images/logos/metalogo.png";
import "./banner.css";

function BannerItemList() {
	return (
		<Fragment>
			{popularMovies.slice(0, 7).map((movie, index) => (
				<div className="card" key={index}>
					<div className="cardContent">
						<h3 className="cardTitle">{movie.title}</h3>
						<p className="cardDescription">{movie.description}</p>

						<div className="cardGenres">
							{movie.genres.map((genre, index) => {
								return <p className={`genre ${genre}`} key={index}>{genre}</p>;
							})}
						</div>
						<div className="ratings">
							<div className="metaCritics">
								<img src={metalogo} alt="metacritics logo" />
								<p className="metacriticsRating">{`MetaCritics: ${movie.metaScore}`}</p>
							</div>
							<div className="imdb">
								<img src={imdblogo} alt="metacritics logo" />
								<p className="imdbRating">{`IMDB: ${movie.rating}`}</p>
							</div>
						</div>
						<p className="cardRealseYear">{`RealseYear: ${movie.releaseYear}`}</p>
					</div>
					<img key={index} src={movie.img} alt={movie.title} className="bannerSliderImg" />
				</div>
			))}
		</Fragment>
	);
}

export default BannerItemList;
