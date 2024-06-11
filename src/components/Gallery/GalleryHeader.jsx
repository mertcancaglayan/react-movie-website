import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GalleryHeader.css";

function GalleryHeader({ title, icon, onNavigate }) {
	const handleNavigation = (category) => {
		const section = title.toLowerCase().replace(" ", "");
		onNavigate(section, category);
	};

	return (
		<div className="galleryHeader">
			<FontAwesomeIcon className="recommendedIcon" icon={icon} />
			<h3>{title}</h3>
			<div className="categoryBtns">
				<button className="btn movies" onClick={() => handleNavigation("movies")}>
					Movies
				</button>
				<button className="btn tvshows" onClick={() => handleNavigation("tvshows")}>
					TV Shows
				</button>
			</div>
		</div>
	);
}

export default GalleryHeader;
