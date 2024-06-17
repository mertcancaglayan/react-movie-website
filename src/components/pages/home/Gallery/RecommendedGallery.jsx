import React, { useState } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import recommendedMovies from "../../../../data/recommendedMovies";
import recommendedTVShows from "../../../../data/recommendedTVShows";
import GalleryCard from "../../../GalleryCard/GalleryCard";
import GalleryHeader from "./GalleryHeader";

const RecommendedGallery = ({ onCardClick }) => {
    const [recommendedCategory, setRecommendedCategory] = useState(recommendedMovies);

    const handleNavigation = (section, category) => {
        setRecommendedCategory(category === "movies" ? recommendedMovies : recommendedTVShows);
    };

    return (
        <section className="gallery">
            <GalleryHeader title="Recommended" icon={faThumbsUp} onNavigate={handleNavigation} />
            <GalleryCard category={recommendedCategory} onCardClick={onCardClick}/>
        </section>
    );
};

export default RecommendedGallery;
