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
	}, []);

	useEffect(() => {
		const tooltip = tooltipRef.current;
		const card = tooltip.parentElement;
		const rect = card.getBoundingClientRect();

		if (windowWidth - rect.right < tooltip.offsetWidth) {
			tooltip.style.left = -105 + "%";
		} else {
			tooltip.style.left = 105 + "%";
		}
	}, [windowWidth]);

	return (
		<div className="tooltip" ref={tooltipRef}>
			<h4 className="tooltipText title">{element.title || "Title Not Found"}</h4>
			<p className="tooltipText description">{element.description || "Description Not Found"}</p>
			<ul className="tooltipText actors">
				<span>{"Actors:"}</span>

				{element.actors && element.actors.length > 0 ? (
					element.actors.map((actor, i) => (
						<li className="actor" key={i}>
							{actor}
						</li>
					))
				) : (
					<li>N/A</li>
				)}
			</ul>
			<ul className="tooltipText genres">
				<span>{"Genres:"}</span>
				{element.genres && element.genres.length > 0 ? (
					element.genres.map((genre, i) => (
						<li className="genre" key={i}>
							{genre}
						</li>
					))
				) : (
					<li>N/A</li>
				)}
			</ul>
			<div className="tooltipText details">
				<div className="tooltipText imdb">
					<h5>Imbd Rating:</h5>
					<p>{element.rating || "N/A"}</p>
					<FontAwesomeIcon className="starIcon" icon={faStar} />
				</div>
				<p className="tooltipText year">{`Release Year: ${element.releaseYear || "N/A"}`}</p>
			</div>
		</div>
	);
}

export default Tooltip;
