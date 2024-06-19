import axios from "axios";

const fetchCineData = async () => {
	let cineData;

	const options = {
		method: "GET",
		url: "https://online-movie-database.p.rapidapi.com/title/v2/get-popular",
		params: {
			first: "20",
			country: "US",
			language: "en-US",
		},
		headers: {
			"x-rapidapi-key": "0a41c8a7f0msh9e94d624b13e7cfp1dc07fjsn6c14f058c263",
			"x-rapidapi-host": "online-movie-database.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		cineData = response.data;
	} catch (error) {
		console.error(error);
		return { movies: [], tvShows: [] };
	}

	function dataFilter(cineData) {
		const filteredMovies = cineData.data.movies.edges.map((element) => {
			const id = element.node.id;
			const metaScore = element.node.metacritic?.metascore?.score || "N/A";
			const rating = element.node.ratingsSummary?.aggregateRating || "N/A";
			const title = element.node.originalTitleText?.text || "N/A";
			const description = element.node.plot?.plotText?.plainText || "No description available";
			const img = element.node.primaryImage?.url || "";
			const releaseYear = element.node.releaseYear?.year || "N/A";
			const actors = element.node.principalCredits[0]?.credits.map((credit) => credit.name?.nameText?.text) || [];
			const genres = element.node.titleGenres?.genres.map((genre) => genre.genre?.text) || [];
			const trailer = "https://www.youtube.com/results?search_query=" + element.node.id;

			return {
				id: id,
				title: title,
				description: description,
				img: img,
				releaseYear: releaseYear,
				metaScore: metaScore,
				rating: rating,
				actors: actors.slice(0, 2),
				genres: genres,
				trailer: trailer,
			};
		});

		const filteredTvShows = cineData.data.tv.edges.map((element) => {
			const id = element.node.id;
			const metaScore = element.node.metacritic?.metascore?.score || "N/A";
			const rating = element.node.ratingsSummary?.aggregateRating || "N/A";
			const title = element.node.originalTitleText?.text || "N/A";
			const description = element.node.plot?.plotText?.plainText || "No description available";
			const img = element.node.primaryImage?.url || "";
			const releaseYear = element.node.releaseYear?.year || "N/A";
			const actors = element.node.principalCredits[0]?.credits.map((credit) => credit.name?.nameText?.text) || [];
			const genres = element.node.titleGenres?.genres.map((genre) => genre.genre?.text) || [];
			const trailer = "https://www.youtube.com/results?search_query=" + element.node.id;

			return {
				id: id,
				title: title,
				description: description,
				img: img,
				releaseYear: releaseYear,
				metaScore: metaScore,
				rating: rating,
				actors: actors.slice(0, 2),
				genres: genres,
				trailer: trailer,
			};
		});
		return { filteredMovies, filteredTvShows };
	}
	return dataFilter(cineData);
};

const { filteredMovies: popularMovies, filteredTvShows: popularTvShows } = await fetchCineData();
export { popularMovies, popularTvShows };
