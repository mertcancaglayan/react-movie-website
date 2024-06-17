import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { popularMovies, popularTvShows } from "../../../data/fetchMovieData";
import topRatedMovies from "../../../data/topRatedMovies";
import topRatedTvShows from "../../../data/topRatedTvShows";
import recommendedMovies from "../../../data/recommendedMovies";
import recommendedTVShows from "../../../data/recommendedTVShows";

function SearchedFilter() {
	const [searchResults, setSearchResults] = useState([]);
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");

	useEffect(() => {
		if (q) {
			const allResults = [
				...popularMovies,
				...popularTvShows,
				...topRatedMovies,
				...topRatedTvShows,
				...recommendedMovies,
				...recommendedTVShows,
			];

			const uniqueResults = Array.from(new Set(allResults.map((item) => item.id))).map((id) => {
				return allResults.find((item) => item.id === id);
			});

			const filteredResults = uniqueResults.filter((item) => item.title.toLowerCase().includes(q.toLowerCase()));

			setSearchResults(filteredResults);
		} else {
			setSearchResults([]);
		}
	}, [q]);

	return searchResults;
}

export default SearchedFilter;
