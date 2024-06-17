import React, { useRef, useEffect, useState } from "react";
import "./Tooltip.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function Tooltip({ element }) {
	const tooltipRef = useRef(null);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const updateWindowWidth = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", updateWindowWidth);

		return () => {
			window.removeEventListener("resize", updateWindowWidth);
		};
	}, [windowWidth]);

	useEffect(() => {
		const tooltip = tooltipRef.current;
		const card = tooltip.parentElement;
		const rect = card.getBoundingClientRect();

		if (windowWidth - rect.right < tooltip.offsetWidth) {
			tooltip.style.left = -105 + "%";
		} else {
			tooltip.style.left = 105 + "%";
		}
	}, [tooltipRef, windowWidth]);

	return (
		<div className="tooltip" ref={tooltipRef}>
			<h4 className="tooltipText title">{element.title}</h4>
			<p className="tooltipText description">{element.description}</p>
			<ul className="tooltipText actors">
				<span>{"Actors:"}</span>
				{element.actors.map((actor, i) => (
					<li className="actor" key={i}>
						{actor}
					</li>
				))}
			</ul>
			<ul className="tooltipText genres">
				<span>{"Genres:"}</span>
				{element.genres.map((genre, i) => (
					<li className="genre" key={i}>
						{genre}
					</li>
				))}
			</ul>
			<div className="tooltipText details">
				<div className="tooltipText imdb">
					<h5>Imbd Rating:</h5>
					<p>{element.rating}</p>
					<FontAwesomeIcon className="starIcon" icon={faStar} />
				</div>
				<p className="tooltipText year">{`Release Year: ${element.releaseYear}`}</p>
			</div>
		</div>
	);
}

export default Tooltip;
