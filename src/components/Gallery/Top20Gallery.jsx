import React, { useState } from "react";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import topRatedMoviesData from "../../data/topRatedMovies";
import topRatedTvShowsData from "../../data/topRatedTvShows";
import GalleryCard from "./GalleryCard";
import GalleryHeader from "./GalleryHeader";

const Top20Gallery = () => {
    const top20Movies = topRatedMoviesData.slice(0, 20);
    const top20TvShows = topRatedTvShowsData.slice(0, 20);
    const [top20Category, setTop20Category] = useState(top20Movies);

    const handleNavigation = (section, category) => {
        setTop20Category(category === "movies" ? top20Movies : top20TvShows);
    };

    return (
        <div className="gallery">
            <GalleryHeader title="Top 20" icon={faTrophy} onNavigate={handleNavigation} />
            <GalleryCard category={top20Category} />
        </div>
    );
};

export default Top20Gallery;
