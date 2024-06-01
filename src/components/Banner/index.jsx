import React, { useEffect, useRef, useState } from "react";
import BannerItemList from "./BannerItemList";
import NavigationButtons from "./NavigationButtons";
import "./banner.css";

function Banner() {
	const sliderContainerRef = useRef(null);
	const [translateX, setTranslateX] = useState(0);

	const handlePrev = () => {
		if (translateX >= -2) {
			return;
		}
		setTranslateX(translateX + 33.33333);
	};

	const handleNext = () => {
		if (translateX < -100) {
			return;
		}
		setTranslateX(translateX - 33.33333);
	};

  useEffect(()=> {
    console.log(translateX);
  },[translateX])

	return (
		<div className="banner">
			<div className="bannerSlider" style={{ transform: `translateX(${translateX}%)` }} ref={sliderContainerRef}>
				<BannerItemList />
			</div>
			<NavigationButtons handlePrev={handlePrev} handleNext={handleNext} />
		</div>
	);
}

export default Banner;
