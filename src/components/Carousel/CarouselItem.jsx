import React, { Fragment } from "react";

function CarouselItem({ data }) {
	if (!Array.isArray(data)) {
		return <div>No data available</div>;
	}

	return (
		<Fragment>
			{data.map((movie, index) => (
				<div className="carousel-item" key={movie.id || index}>
					<img src={movie.img} alt={movie.title} className="carousel-image" />
					<div className="carousel-details">
						<h3 className="carousel-title">{movie.title}</h3>
						<div className="carousel-genres">
							{movie.genres.map((genre, index) => {
								return (
									<p className={`carousel-genre ${genre}`} key={genre + "_" + index}>
										{genre}
									</p>
								);
							})}
						</div>
						<p className="carousel-description">{movie.description}</p>
					</div>
				</div>
			))}
		</Fragment>
	);
}

export default CarouselItem;
