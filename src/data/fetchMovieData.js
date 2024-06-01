import axios from "axios";

const fetchMovieData = async () => {
	let movieData;

	const options = {
		method: "GET",
		url: "https://online-movie-database.p.rapidapi.com/title/v2/get-popular",
		params: {
			first: "20",
			country: "US",
			language: "en-US",
		},
		headers: {
			"X-RapidAPI-Key": "6a0dfd145amsh7ed63ab08d61076p170067jsne5d4c0a7dc9e",
			"X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		movieData = response.data;
	} catch (error) {
		console.error(error);
		return [];
	}

	function dataFilter(movieData) {
		const filteredMovies = movieData.data.movies.edges.map((element, index) => {
			const id = index + 1;
			const metaScore = element.node.metacritic?.metascore?.score || "N/A";
			const rating = element.node.ratingsSummary?.aggregateRating || "N/A";
			const title = element.node.originalTitleText.text;
			const description = element.node.plot.plotText.plainText;
			const img = element.node.primaryImage.url;
			const releaseYear = element.node.releaseYear.year;
			const actors = element.node.principalCredits[0].credits.map((credit) => credit.name.nameText.text);
			const genres = element.node.titleGenres.genres.map((genre) => genre.genre.text);

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
			};
		});

		return filteredMovies;
	}

	return dataFilter(movieData);
};

const movies = await fetchMovieData();

export default movies;
