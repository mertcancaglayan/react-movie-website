import React from "react";

function GalleryCard({ category }) {
	return (
		<>
			{category.map((element, index) => {
				return (
					<div className="galleryCard" key={index}>
						<div className="imgContainer">
							<img src={element.img} alt="gallery card img" />
						</div>
						<div className="galleryCardContent">
							<p>{`Year: ${element.releaseYear}`}</p>
							<p>{`Imdb: ${element.rating}`}</p>
							<h4>{element.title}</h4>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default GalleryCard;
