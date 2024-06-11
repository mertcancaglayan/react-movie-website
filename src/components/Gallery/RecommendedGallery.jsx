import React, { useState } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import recommendedMovies from "../../data/recommendedMovies";
import recommendedTVShows from "../../data/recommendedTVShows";
import GalleryCard from "./GalleryCard";
import GalleryHeader from "./GalleryHeader";

const RecommendedGallery = () => {
    const [recommendedCategory, setRecommendedCategory] = useState(recommendedMovies);

    const handleNavigation = (section, category) => {
        setRecommendedCategory(category === "movies" ? recommendedMovies : recommendedTVShows);
    };

    return (
        <div className="gallery">
            <GalleryHeader title="Recommended" icon={faThumbsUp} onNavigate={handleNavigation} />
            <GalleryCard category={recommendedCategory} />
        </div>
    );
};

export default RecommendedGallery;
