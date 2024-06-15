import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./CarouselTitle.css";

function CarouselTitle({ dataType }) {
	return (
		<div className="titleContainer">
			<FontAwesomeIcon className="recommendedIcon" icon={faThumbsUp} />
			<h4>{`Recommended ${dataType}`}</h4>
		</div>
	);
}

export default CarouselTitle;
