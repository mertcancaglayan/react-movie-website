import React from "react";
import movies from "../../data/fetchMovieData";

function GalleryCard() {
	return (
		<>
			{movies.map((movie, index) => {
				return (
					<div className="galleryCard">
						<div className="imgContainer">
							<img src={movie.img} alt="gallery card img" />
						</div>
						<div className="galleryCardContent">
							<p>{`Year: ${movie.releaseYear}`}</p>
							<p>{`Imdb: ${movie.rating}`}</p>
							<h4>{movie.title}</h4>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default GalleryCard;
