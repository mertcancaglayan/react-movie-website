import React from "react";
import Tooltip from "./Tooltip";
import "./GalleryCard.css";

const GalleryCard = React.memo(({ category }) => {
	return (
		<>
			{category.map((element, index) => (
				<div className="galleryCard" key={element.id || index}>
					<div className="imgContainer">
						<img loading="lazy" src={element.img} alt={`${element.title} img`} />
					</div>
					<div className="galleryCardContent">
						<p>{`Year: ${element.releaseYear}`}</p>
						<p>{`Imdb: ${element.rating}`}</p>
						<h4>{element.title}</h4>
					</div>
					<Tooltip element={element} />
				</div>
			))}
		</>
	);
});

export default GalleryCard;
