import React, { Fragment } from "react";
import Tooltip from "../Tooltip/Tooltip";
import "./GalleryCard.css";
import emptyPoster from "../../images/emptyPoster.jpg";

const GalleryCard = React.memo(({ category, onCardClick }) => {
	return (
		<Fragment>
			{category.map((element, index) => (
				<div className="galleryCard" key={element.id || index} onClick={() => onCardClick(element)}>
					<div className="imgContainer">
						<img loading="lazy" src={element.img || emptyPoster} alt={`${element.title} img`} />
					</div>
					<div className="galleryCardContent">
						<p>{`Year: ${element.releaseYear || "N/A"}`}</p>
						<p>{`Imdb: ${element.rating || "N/A"}`}</p>
						<h4>{element.title || "No Title"}</h4>
					</div>
					<Tooltip element={element} />
				</div>
			))}
		</Fragment>
	);
});

export default GalleryCard;
