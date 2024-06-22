import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import emptyPoster from "../../images/emptyPoster.jpg";

const PopupCard = ({ show, onClose }) => {
	const [likedShows, setLikedShows] = useState(JSON.parse(localStorage.getItem("likedShows")) || []);

	const isLiked = likedShows.some((likedShow) => likedShow.title === show.title);

	const favoriteShow = () => {
		if (!isLiked) {
			const updatedLikedShows = [...likedShows, show];
			setLikedShows(updatedLikedShows);
			localStorage.setItem("likedShows", JSON.stringify(updatedLikedShows));
		} else {
			const updatedLikedShows = likedShows.filter((likedShow) => likedShow.title !== show.title);
			setLikedShows(updatedLikedShows);
			localStorage.setItem("likedShows", JSON.stringify(updatedLikedShows));
		}
	};

	const handleWatchTrailer = () => {
		if (show.trailer) {
			window.open(show.trailer);
		} else {
			alert("No trailer available");
		}
	};

	return (
		<div className="popupContainer">
			<div className="movie">
				<div className="moviePoster">
					<img src={show.img || emptyPoster} alt={show.title} />
				</div>
				<FontAwesomeIcon className="closeBtn" icon={faRectangleXmark} onClick={onClose} />

				<div className="movieDetails">
					<h2 className="movieTitle">{show.title || "Title Not Found"}</h2>
					<div className="movieDescription">
						<p className="movieDescription">{show.description || "Description Not Found"}</p>
					</div>
					<div>
						<ul className="movieActors">
							<h5>Actors:</h5>
							{show.actors && show.actors.length > 0 ? (
								show.actors.map((actor, i) => (
									<li className="actor" key={i}>
										{actor}
									</li>
								))
							) : (
								<li>N/A</li>
							)}
						</ul>
						<ul className="movieGenres">
							<h5>Genres:</h5>
							{show.genres && show.genres.length > 0 ? (
								show.genres.map((genre, i) => (
									<li className="genre" key={i}>
										{genre}
									</li>
								))
							) : (
								<li className="genre">N/A</li>
							)}
						</ul>
					</div>
					<div style={{ display: "flex" }}>
						<div className="movieYear">Release Year: {show.releaseYear || "N/A"}</div>
						<div className="movieRating">IMDb: {show.rating || "N/A"}</div>
					</div>
					<div className="uti">
						<FontAwesomeIcon
							icon={faHeart}
							className={`heartIcon ${isLiked ? "liked" : ""}`}
							onClick={favoriteShow}
						/>
						<button onClick={handleWatchTrailer} className="trailerBtn">
							Watch Trailer
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopupCard;
