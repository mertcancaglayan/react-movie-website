import React from "react";
import "./banner.css";

function NavigationButtons({ handleNext, handlePrev }) {
	return (
		<div className="bannerNavButtons">
			<button onClick={handlePrev} className="prevBtn">
				{"<"}
			</button>
			<button onClick={handleNext} className="nextBtn">
				{">"}
			</button>
		</div>
	);
}

export default NavigationButtons;
