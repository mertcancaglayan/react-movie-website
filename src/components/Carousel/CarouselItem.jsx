import React, { Fragment } from "react";
import emptyPoster from "../../images/emptyPoster.jpg";

function CarouselItem({ data }) {
	if (!Array.isArray(data) || data.length === 0) {
		return <div>No data available</div>;
	}

	return (
		<Fragment>
			{data.map((movie, index) => (
				<div className="carousel-item" key={movie.id || index}>
					<img src={movie.img || emptyPoster} alt={movie.title} className="carousel-image" />
					<div className="carousel-details">
						<h3 className="carousel-title">{movie.title || "Title Not Found"}</h3>
						<div className="carousel-genres">
							{movie.genres && movie.genres.length > 0 ? (
								movie.genres.map((genre, index) => (
									<p className={`carousel-genre ${genre}`} key={`${genre}_${index}`}>
										{genre}
									</p>
								))
							) : (
								<p className="carousel-genre">N/A</p>
							)}
						</div>
						<p className="carousel-description">{movie.description || "Description Not Found"}</p>
					</div>
				</div>
			))}
		</Fragment>
	);
}

export default CarouselItem;
