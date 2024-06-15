import React from "react";
import "./NavigationButtons.css"; 

function NavigationButtons({ onClickPrev, onClickNext }) {
	return (
		<div className="navigation-buttons">
			<button className="prev-button" onClick={onClickPrev}>
				{"<"}
			</button>
			<button className="next-button" onClick={onClickNext}>
				{">"}
			</button>
		</div>
	);
}

export default NavigationButtons;
