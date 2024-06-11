import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";

function BannerTitle() {
	return (
		<div className="bannerTitleArea">
			<FontAwesomeIcon icon={faFireFlameCurved} />
			<h3>Trending Now</h3>
			<FontAwesomeIcon icon={faFireFlameCurved} />
		</div>
	);
}

export default BannerTitle;
