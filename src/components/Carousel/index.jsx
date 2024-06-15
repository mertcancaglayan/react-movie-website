import React, { useState } from "react";
import NavigationButtons from "./NavigationButtons";
import CarouselItem from "./CarouselItem";
import CarouselTitle from "./CarouselTitle";
import "./carousel.css";

function Carousel({ data, type }) {
	const dataType = type === "movies" ? "Movies" : "Tv Shows";

	const [translateX, setTranslateX] = useState(0);

	const onClickPrev = () => {
		const itemWidth = document.querySelector(".carousel-item").offsetWidth;
		if (translateX >= 0) {
			return;
		}
		setTranslateX(translateX + itemWidth + 10);
	};

	const onClickNext = () => {
		const containerWidth = document.querySelector(".carousel-wrapper").offsetWidth;
		const itemsContainerWidth = document.querySelector(".carousel").offsetWidth;
		if (containerWidth >= itemsContainerWidth + translateX) {
			return;
		}
		const itemWidth = document.querySelector(".carousel-item").offsetWidth;
		setTranslateX(translateX - itemWidth - 10);
	};

	return (
		<section className="a">
			<CarouselTitle dataType={dataType} />
			<div className="carousel-container">
				<NavigationButtons onClickPrev={onClickPrev} onClickNext={onClickNext} />
				<div className="carousel-wrapper">
					<div className="carousel" style={{ transform: `translateX(${translateX}px)` }}>
						<CarouselItem data={data} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Carousel;
