import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import "./GalleryCard.css";

const GalleryCard = React.memo(({ category, onCardClick }) => {
	return (
		<>
			{category.map((element, index) => (
				<div className="galleryCard" key={element.id || index} onClick={() => onCardClick(element)}>
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
