import React, { Fragment } from "react";
import { popularMovies } from "../../../../data/fetchMovieData";
import imdblogo from "../../../../images/logos/imdblogo.png";
import metalogo from "../../../../images/logos/metalogo.png";
import emptyPoster from "../../../../images/emptyPoster.jpg";
import "./banner.css";

function BannerItemList() {
	return (
		<Fragment>
			{popularMovies.slice(0, 7).map((movie, index) => (
				<div className="card" key={index}>
					<div className="cardContent">
						<h3 className="cardTitle">{movie.title || "Title Not Found"}</h3>
						<p className="cardDescription">{movie.description || "Description Not Found"}</p>

						<div className="cardGenres">
							{movie.genres && movie.genres.length > 0 ? (
								movie.genres.map((genre, index) => (
									<p className={`genre ${genre}`} key={index}>
										{genre}
									</p>
								))
							) : (
								<p className="genre">N/A</p>
							)}
						</div>
						<div className="ratings">
							<div className="metaCritics">
								<img src={metalogo} alt="metacritics logo" />
								<p className="metacriticsRating">{`MetaCritics: ${movie.metaScore || "N/A"}`}</p>
							</div>
							<div className="imdb">
								<img src={imdblogo} alt="metacritics logo" />
								<p className="imdbRating">{`IMDB: ${movie.rating || "N/A"}`}</p>
							</div>
						</div>
						<p className="cardRealseYear">{`RealseYear: ${movie.releaseYear || "N/A"}`}</p>
					</div>
					<img key={index} src={movie.img || emptyPoster} alt={movie.title} className="bannerSliderImg" />
				</div>
			))}
		</Fragment>
	);
}

export default BannerItemList;
