const popularsData = {
	data: {
		movies: {
			__typename: "TitleSearchConnection",
			edges: [
				{
					node: {
						__typename: "Title",
						id: "tt20215968",
						titleText: { text: "Hit Man", isOriginalTitle: true },
						originalTitleText: { text: "Hit Man", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2023, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 7,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm3720182017",
							url: "https://m.media-amazon.com/images/M/MV5BYTJmMDM4YWItMGM2YS00MzQ0LTliM2ItZDE1NzVlMjNjNDVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
							height: 1350,
							width: 1080,
						},
						metacritic: { metascore: { score: 82 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm1412974",
											nameText: { text: "Glen Powell" },
											primaryImage: {
												__typename: "Image",
												id: "rm2024083457",
												url: "https://m.media-amazon.com/images/M/MV5BMGEzMTIwM2UtYjc5MC00ZGI4LWJiOTAtYzAwZmU0OTYzYWIxXkEyXkFqcGdeQXVyNDg0MzQyNA@@._V1_.jpg",
												height: 1920,
												width: 1280,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm5245722",
											nameText: { text: "Adria Arjona" },
											primaryImage: {
												__typename: "Image",
												id: "rm3725141505",
												url: "https://m.media-amazon.com/images/M/MV5BZWIzMDVkYWUtYTA3My00MzIwLWJhY2MtNWNlODA3NWQyYmI4XkEyXkFqcGdeQXVyMTI2Nzk2ODk3._V1_.jpg",
												height: 1582,
												width: 1452,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3994184",
											nameText: { text: "Austin Amelio" },
											primaryImage: {
												__typename: "Image",
												id: "rm3516209408",
												url: "https://m.media-amazon.com/images/M/MV5BMTkxMDU3NTY2NV5BMl5BanBnXkFtZTgwNzI5MjEzODE@._V1_.jpg",
												height: 1365,
												width: 2048,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0802876",
											nameText: { text: "Retta" },
											primaryImage: {
												__typename: "Image",
												id: "rm4158382592",
												url: "https://m.media-amazon.com/images/M/MV5BMjQyMTQ2MjQ5Ml5BMl5BanBnXkFtZTgwNzY3MDAxNzE@._V1_.jpg",
												height: 640,
												width: 426,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5351802",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated R for language throughout, sexual content and some violence.",
							rating: "R",
						},
						plot: {
							id: "po6571054",
							plotText: {
								plainText:
									"A professor moonlighting as a hit man of sorts for his city police department, descends into dangerous, dubious territory when he finds himself attracted to a woman who enlists his services.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Crime", text: "Crime" } },
								{ genre: { genreId: "Romance", text: "Romance" } },
							],
						},
						ratingsSummary: { aggregateRating: 7 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt4919268",
						titleText: { text: "Bad Boys: Ride or Die", isOriginalTitle: true },
						originalTitleText: { text: "Bad Boys: Ride or Die", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 7,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1436515585",
							url: "https://m.media-amazon.com/images/M/MV5BY2U5YmQ3YjgtM2I2OC00YmM5LTkyM2MtN2I5Zjg2MDE0ODkwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
							height: 3000,
							width: 2000,
						},
						metacritic: { metascore: { score: 54 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0000226",
											nameText: { text: "Will Smith" },
											primaryImage: {
												__typename: "Image",
												id: "rm1002342912",
												url: "https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_.jpg",
												height: 400,
												width: 276,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0001454",
											nameText: { text: "Martin Lawrence" },
											primaryImage: {
												__typename: "Image",
												id: "rm1938855424",
												url: "https://m.media-amazon.com/images/M/MV5BMTQ4NzIzMDAxMF5BMl5BanBnXkFtZTcwMDIyMTI2MQ@@._V1_.jpg",
												height: 675,
												width: 450,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1227814",
											nameText: { text: "Vanessa Hudgens" },
											primaryImage: {
												__typename: "Image",
												id: "rm623499009",
												url: "https://m.media-amazon.com/images/M/MV5BZGY4NGU0NjgtNjc0Mi00OTk3LWFmMzktNjY4M2JlMDkzOTFkXkEyXkFqcGdeQXVyMTExNzQ3MzAw._V1_.jpg",
												height: 1563,
												width: 1172,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1573253",
											nameText: { text: "Alexander Ludwig" },
											primaryImage: {
												__typename: "Image",
												id: "rm4128536577",
												url: "https://m.media-amazon.com/images/M/MV5BOGQ5NjYyNzktNWFlZC00N2ZhLWJlYmQtMDFiMzUzMTZkMTExXkEyXkFqcGdeQXVyMTQyOTM4MzU@._V1_.jpg",
												height: 3743,
												width: 2994,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5854522",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated R for strong violence, language throughout and some sexual references",
							rating: "R",
						},
						plot: {
							id: "po7960143",
							plotText: {
								plainText:
									"This Summer, the world's favorite Bad Boys are back with their iconic mix of edge-of-your seat action and outrageous comedy but this time with a twist: Miami's finest are now on the run.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Crime", text: "Crime" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 7 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt22022452",
						titleText: { text: "Inside Out 2", isOriginalTitle: true },
						originalTitleText: { text: "Inside Out 2", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 14,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1568556801",
							url: "https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWUtNjQ0OWJkMzI3MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
							height: 6000,
							width: 4050,
						},
						metacritic: { metascore: { score: 74 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0688132",
											nameText: { text: "Amy Poehler" },
											primaryImage: {
												__typename: "Image",
												id: "rm2798412032",
												url: "https://m.media-amazon.com/images/M/MV5BYjIzMDA0NmUtMTlhZi00ZDU3LTkzYWMtZDhkYTU1ZDJlMGRkXkEyXkFqcGdeQXVyNzcwODE0OTk@._V1_.jpg",
												height: 2141,
												width: 1877,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1638321",
											nameText: { text: "Maya Hawke" },
											primaryImage: {
												__typename: "Image",
												id: "rm2722504960",
												url: "https://m.media-amazon.com/images/M/MV5BOGYzNjE2MDYtMjhhNi00MGE4LTk1ZDUtM2ZmODZlMmQ2ZjE3XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg",
												height: 960,
												width: 1440,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm10143485",
											nameText: { text: "Kensington Tallman" },
											primaryImage: {
												__typename: "Image",
												id: "rm3101445889",
												url: "https://m.media-amazon.com/images/M/MV5BMmQzNmZiZTAtNWNhNC00NTc1LWFjZjMtNDgxOTAxNzczM2Y2XkEyXkFqcGdeQXVyOTMxMDE3MDQ@._V1_.jpg",
												height: 1536,
												width: 1024,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0487594",
											nameText: { text: "Liza Lapira" },
											primaryImage: {
												__typename: "Image",
												id: "rm2985790720",
												url: "https://m.media-amazon.com/images/M/MV5BNTRlMmZmNzktZWRiMi00YWU3LWIxMmItMmNhOTRiOWEwZjNlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 395,
												width: 466,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5841731",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated PG for some thematic elements.",
							rating: "PG",
						},
						plot: {
							id: "po6808995",
							plotText: { plainText: "Follows Riley, in her teenage years, encountering new emotions." },
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Animation", text: "Animation" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Family", text: "Family" } },
								{ genre: { genreId: "Fantasy", text: "Fantasy" } },
							],
						},
						ratingsSummary: { aggregateRating: 8 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt12037194",
						titleText: { text: "Furiosa: A Mad Max Saga", isOriginalTitle: true },
						originalTitleText: { text: "Furiosa: A Mad Max Saga", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 5,
							day: 24,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm2850781185",
							url: "https://m.media-amazon.com/images/M/MV5BNmYzMWVjNmQtNjJjNy00M2Y4LTkzZjQtZWQ5NmYzMjRjMDIzXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
							height: 1350,
							width: 1080,
						},
						metacritic: { metascore: { score: 79 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm5896355",
											nameText: { text: "Anya Taylor-Joy" },
											primaryImage: {
												__typename: "Image",
												id: "rm4152883713",
												url: "https://m.media-amazon.com/images/M/MV5BMTllYmE5YTYtZGZmYy00ZTBlLWJlODEtYWQ0ZmU1YTJkMjJlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
												height: 2048,
												width: 1365,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1165110",
											nameText: { text: "Chris Hemsworth" },
											primaryImage: {
												__typename: "Image",
												id: "rm3936529408",
												url: "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_.jpg",
												height: 576,
												width: 384,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0121895",
											nameText: { text: "Tom Burke" },
											primaryImage: {
												__typename: "Image",
												id: "rm2251074304",
												url: "https://m.media-amazon.com/images/M/MV5BMjAxMjk4MjgyMl5BMl5BanBnXkFtZTcwODk1MjgxOA@@._V1_.jpg",
												height: 2048,
												width: 1365,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm10752061",
											nameText: { text: "Alyla Browne" },
											primaryImage: {
												__typename: "Image",
												id: "rm607812097",
												url: "https://m.media-amazon.com/images/M/MV5BMGEyODM3ODQtNTAxMC00Zjc4LTg3YTQtOWM4Zjc1OGIxNmFkXkEyXkFqcGdeQXVyOTY3ODUxMzM@._V1_.jpg",
												height: 3840,
												width: 3072,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5793586",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "- Rated R for sequences of strong violence, and grisly images.",
							rating: "R",
						},
						plot: {
							id: "po5364909",
							plotText: {
								plainText:
									"The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.8 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt13964390",
						titleText: { text: "Under Paris", isOriginalTitle: false },
						originalTitleText: { text: "Sous la Seine", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 5,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm2091414273",
							url: "https://m.media-amazon.com/images/M/MV5BMDM5ODBiN2ItOTk4Yi00NzgyLWE2YTktYzhjYTc2ODE4ZTE4XkEyXkFqcGc@._V1_.jpg",
							height: 3000,
							width: 2025,
						},
						metacritic: { metascore: { score: 57 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0067367",
											nameText: { text: "Bérénice Bejo" },
											primaryImage: {
												__typename: "Image",
												id: "rm2505748480",
												url: "https://m.media-amazon.com/images/M/MV5BMjE4ODY3OTQ2MV5BMl5BanBnXkFtZTcwMTY2ODQyNw@@._V1_.jpg",
												height: 2048,
												width: 1529,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm4051466",
											nameText: { text: "Nassim Lyes" },
											primaryImage: {
												__typename: "Image",
												id: "rm2613533441",
												url: "https://m.media-amazon.com/images/M/MV5BODYwNmRmNDQtMTMxYi00NzM0LThmMDUtMzk5M2EzMDc2YTg2XkEyXkFqcGdeQXVyMTY4NDc5NzUw._V1_.jpg",
												height: 640,
												width: 480,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm6434640",
											nameText: { text: "Léa Léviant" },
											primaryImage: null,
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm7942430",
											nameText: { text: "Sandra Parfait" },
											primaryImage: null,
										},
									},
								],
							},
						],
						certificate: { id: "ce5858947", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po7267656",
							plotText: {
								plainText:
									"To save Paris from a bloodbath, a grieving scientist is forced to face her tragic past when a giant shark appears in the Seine.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Horror", text: "Horror" } },
								{ genre: { genreId: "Sport", text: "Sport" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 5.2 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt26736843",
						titleText: { text: "The Watchers", isOriginalTitle: true },
						originalTitleText: { text: "The Watchers", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 7,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1510702081",
							url: "https://m.media-amazon.com/images/M/MV5BZjNlYjg5YzYtMmU4ZC00MzA4LWE5YWYtNTJlOTkyZmQ0YzdkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
							height: 4096,
							width: 2764,
						},
						metacritic: { metascore: { score: 46 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0266824",
											nameText: { text: "Dakota Fanning" },
											primaryImage: {
												__typename: "Image",
												id: "rm2065211904",
												url: "https://m.media-amazon.com/images/M/MV5BMjAwNjM3NjY5MF5BMl5BanBnXkFtZTcwMjM4NTYwOQ@@._V1_.jpg",
												height: 3000,
												width: 2020,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3569284",
											nameText: { text: "Georgina Campbell" },
											primaryImage: {
												__typename: "Image",
												id: "rm3614117889",
												url: "https://m.media-amazon.com/images/M/MV5BNWFjZDhjMmQtM2Y1Ny00OTA2LWFkNmQtMGVhODQ1NzQ0NmU3XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 1800,
												width: 1440,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0288260",
											nameText: { text: "Olwen Fouéré" },
											primaryImage: {
												__typename: "Image",
												id: "rm3107461633",
												url: "https://m.media-amazon.com/images/M/MV5BOTdjZTZhODgtZTUwOC00MTU4LTg1MWMtZGZjZjE3Yzk0OTQwXkEyXkFqcGdeQXVyMjM3MTk5OTA@._V1_.jpg",
												height: 3000,
												width: 3000,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm9148177",
											nameText: { text: "Oliver Finnegan" },
											primaryImage: {
												__typename: "Image",
												id: "rm1464877313",
												url: "https://m.media-amazon.com/images/M/MV5BOGI4NjNjZDYtOWVlYi00MzA4LTg3MjQtYmVjMDliZDhmNGZkXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 6096,
												width: 4064,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5827441",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated PG-13 for violence, terror and some thematic elements.",
							rating: "PG-13",
						},
						plot: {
							id: "po7100488",
							plotText: {
								plainText:
									"A young artist gets stranded in an extensive, immaculate forest in western Ireland, where, after finding shelter, she becomes trapped alongside three strangers, stalked by mysterious creatures each night.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Fantasy", text: "Fantasy" } },
								{ genre: { genreId: "Horror", text: "Horror" } },
								{ genre: { genreId: "Mystery", text: "Mystery" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 5.8 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt1684562",
						titleText: { text: "The Fall Guy", isOriginalTitle: true },
						originalTitleText: { text: "The Fall Guy", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 5,
							day: 3,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1083211265",
							url: "https://m.media-amazon.com/images/M/MV5BMjA5ZjA3ZjMtMzg2ZC00ZDc4LTk3MTctYTE1ZTUzZDIzMjQyXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
							height: 2500,
							width: 1579,
						},
						metacritic: { metascore: { score: 73 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0331516",
											nameText: { text: "Ryan Gosling" },
											primaryImage: {
												__typename: "Image",
												id: "rm618450688",
												url: "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
												height: 2048,
												width: 1619,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1289434",
											nameText: { text: "Emily Blunt" },
											primaryImage: {
												__typename: "Image",
												id: "rm3068181760",
												url: "https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_.jpg",
												height: 2048,
												width: 1272,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1093951",
											nameText: { text: "Aaron Taylor-Johnson" },
											primaryImage: {
												__typename: "Image",
												id: "rm642633472",
												url: "https://m.media-amazon.com/images/M/MV5BMzE5MzI0MzY2OF5BMl5BanBnXkFtZTgwODE3MTk4MTE@._V1_.jpg",
												height: 1805,
												width: 1375,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1821446",
											nameText: { text: "Hannah Waddingham" },
											primaryImage: {
												__typename: "Image",
												id: "rm3597922304",
												url: "https://m.media-amazon.com/images/M/MV5BNjk5ODc5MTU3MF5BMl5BanBnXkFtZTgwOTk2MjI5NDE@._V1_.jpg",
												height: 2048,
												width: 1365,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5196640",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated PG-13 for action and violence, drug content and some strong language.",
							rating: "PG-13",
						},
						plot: {
							id: "po6751318",
							plotText: {
								plainText:
									"A down-and-out stuntman must find the missing star of his ex-girlfriend's blockbuster film.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
							],
						},
						ratingsSummary: { aggregateRating: 7 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt23289160",
						titleText: { text: "Godzilla Minus One", isOriginalTitle: false },
						originalTitleText: { text: "Gojira -1.0", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2023, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 12,
							day: 1,
							year: 2023,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm71257089",
							url: "https://m.media-amazon.com/images/M/MV5BOTI5MjNjMTMtN2NiNC00YjBlLTgzMWQtMGRhZDZkYmY1NGU2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
							height: 1731,
							width: 1168,
						},
						metacritic: { metascore: { score: 81 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm4947538",
											nameText: { text: "Minami Hamabe" },
											primaryImage: {
												__typename: "Image",
												id: "rm2511748609",
												url: "https://m.media-amazon.com/images/M/MV5BOWFiYjFkNjAtYjdhMy00NWQwLWFmOWMtMDFkZGUyMDE5NjQ4XkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_.jpg",
												height: 1080,
												width: 900,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1126340",
											nameText: { text: "Ryunosuke Kamiki" },
											primaryImage: {
												__typename: "Image",
												id: "rm1981491200",
												url: "https://m.media-amazon.com/images/M/MV5BNzlkYzdjYWEtOTkyNC00NDNhLWIyNTItZmFjNWQxZDZmNzFlXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg",
												height: 800,
												width: 1200,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1328568",
											nameText: { text: "Munetaka Aoki" },
											primaryImage: {
												__typename: "Image",
												id: "rm1133605377",
												url: "https://m.media-amazon.com/images/M/MV5BZjQyMDIzZmItODYwZC00NjhkLTlmMDQtNzcxZDVmYWViOWZjXkEyXkFqcGc@._V1_.jpg",
												height: 3613,
												width: 2413,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm2747232",
											nameText: { text: "Sakura Andô" },
											primaryImage: {
												__typename: "Image",
												id: "rm3228791808",
												url: "https://m.media-amazon.com/images/M/MV5BMDhkZWIwN2EtOWZhMC00NDIwLWEwMmYtYTNmYjg4N2FmMTQyXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
												height: 1024,
												width: 759,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5319074",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated PG-13 for creature violence and action.",
							rating: "PG-13",
						},
						plot: {
							id: "po7344131",
							plotText: {
								plainText:
									"Post-war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Horror", text: "Horror" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.8 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt17279496",
						titleText: { text: "Civil War", isOriginalTitle: true },
						originalTitleText: { text: "Civil War", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 4,
							day: 12,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1657225473",
							url: "https://m.media-amazon.com/images/M/MV5BYTYyODhlODktYjUzNC00NjUyLWI1MzYtNmI0MTY3YTUxYjY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
							height: 12000,
							width: 8100,
						},
						metacritic: { metascore: { score: 75 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0000379",
											nameText: { text: "Kirsten Dunst" },
											primaryImage: {
												__typename: "Image",
												id: "rm3769549824",
												url: "https://m.media-amazon.com/images/M/MV5BMTQ3NzkwNzM1MV5BMl5BanBnXkFtZTgwMzE2MTQ3MjE@._V1_.jpg",
												height: 2048,
												width: 1540,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0609944",
											nameText: { text: "Wagner Moura" },
											primaryImage: {
												__typename: "Image",
												id: "rm2213001217",
												url: "https://m.media-amazon.com/images/M/MV5BN2Q3YTg3MjYtNmM0ZS00OTgzLTg1YTAtMWIyMDMxZDg1MDk0XkEyXkFqcGdeQXVyMTEzNjM0NTQw._V1_.jpg",
												height: 2000,
												width: 1600,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm8314228",
											nameText: { text: "Cailee Spaeny" },
											primaryImage: {
												__typename: "Image",
												id: "rm265256704",
												url: "https://m.media-amazon.com/images/M/MV5BMTU1NzA0MjEwNV5BMl5BanBnXkFtZTgwNTE5ODczNjM@._V1_.jpg",
												height: 651,
												width: 503,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0644406",
											nameText: { text: "Nick Offerman" },
											primaryImage: {
												__typename: "Image",
												id: "rm878497536",
												url: "https://m.media-amazon.com/images/M/MV5BMTYzMjY2ODkxMV5BMl5BanBnXkFtZTgwMjQxMDA5MTE@._V1_.jpg",
												height: 1590,
												width: 1060,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5130443",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason:
								"Rated R for strong violent content, bloody/disturbing images, and language throughout",
							rating: "R",
						},
						plot: {
							id: "po6404028",
							plotText: {
								plainText:
									"A journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.2 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt2096673",
						titleText: { text: "Inside Out", isOriginalTitle: true },
						originalTitleText: { text: "Inside Out", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2015, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 19,
							year: 2015,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm3662344960",
							url: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
							height: 1609,
							width: 1086,
						},
						metacritic: { metascore: { score: 94 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0688132",
											nameText: { text: "Amy Poehler" },
											primaryImage: {
												__typename: "Image",
												id: "rm2798412032",
												url: "https://m.media-amazon.com/images/M/MV5BYjIzMDA0NmUtMTlhZi00ZDU3LTkzYWMtZDhkYTU1ZDJlMGRkXkEyXkFqcGdeQXVyNzcwODE0OTk@._V1_.jpg",
												height: 2141,
												width: 1877,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0352778",
											nameText: { text: "Bill Hader" },
											primaryImage: {
												__typename: "Image",
												id: "rm2341518080",
												url: "https://m.media-amazon.com/images/M/MV5BNTY3MzgwMjE3N15BMl5BanBnXkFtZTcwNjc2MjE3NA@@._V1_.jpg",
												height: 2048,
												width: 1342,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0085400",
											nameText: { text: "Lewis Black" },
											primaryImage: {
												__typename: "Image",
												id: "rm1199670784",
												url: "https://m.media-amazon.com/images/M/MV5BMTgwMzYyNzQwMV5BMl5BanBnXkFtZTcwOTI5NDY5Mw@@._V1_.jpg",
												height: 400,
												width: 287,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1411676",
											nameText: { text: "Mindy Kaling" },
											primaryImage: {
												__typename: "Image",
												id: "rm3810897920",
												url: "https://m.media-amazon.com/images/M/MV5BNzQ2OTUzNDU1MF5BMl5BanBnXkFtZTcwODQ2MTYyNw@@._V1_.jpg",
												height: 2048,
												width: 1363,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce0759095",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated PG for mild thematic elements and some action",
							rating: "PG",
						},
						plot: {
							id: "po2268835",
							plotText: {
								plainText:
									"After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Animation", text: "Animation" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Family", text: "Family" } },
								{ genre: { genreId: "Fantasy", text: "Fantasy" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.1 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt15239678",
						titleText: { text: "Dune: Part Two", isOriginalTitle: true },
						originalTitleText: { text: "Dune: Part Two", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 3,
							day: 1,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1391346433",
							url: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
							height: 4096,
							width: 2764,
						},
						metacritic: { metascore: { score: 79 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm3154303",
											nameText: { text: "Timothée Chalamet" },
											primaryImage: {
												__typename: "Image",
												id: "rm4082101761",
												url: "https://m.media-amazon.com/images/M/MV5BNThiOTM4NTAtMDczNy00YzlkLWJhNTEtZTZhNDVmYzlkZWI0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
												height: 2265,
												width: 3000,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3918035",
											nameText: { text: "Zendaya" },
											primaryImage: {
												__typename: "Image",
												id: "rm1855008256",
												url: "https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_.jpg",
												height: 1040,
												width: 780,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0272581",
											nameText: { text: "Rebecca Ferguson" },
											primaryImage: {
												__typename: "Image",
												id: "rm4289232641",
												url: "https://m.media-amazon.com/images/M/MV5BYWUxMjExODktMTVjNy00ZDAwLThiYmMtYmNjYTEwOWIxZmQzXkEyXkFqcGdeQXVyMTI2Nzk2ODk3._V1_.jpg",
												height: 464,
												width: 406,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0000849",
											nameText: { text: "Javier Bardem" },
											primaryImage: {
												__typename: "Image",
												id: "rm335591936",
												url: "https://m.media-amazon.com/images/M/MV5BMTY1NTc4NTYzMF5BMl5BanBnXkFtZTcwNDIwOTY1NA@@._V1_.jpg",
												height: 2048,
												width: 1370,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5298166",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason:
								"Rated PG-13 for sequences of strong violence, some suggestive material and brief strong language.",
							rating: "PG-13",
						},
						plot: {
							id: "po7013293",
							plotText: {
								plainText:
									"Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.6 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt11389872",
						titleText: { text: "Kingdom of the Planet of the Apes", isOriginalTitle: true },
						originalTitleText: { text: "Kingdom of the Planet of the Apes", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 5,
							day: 10,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm404060929",
							url: "https://m.media-amazon.com/images/M/MV5BZGI4NTEwNTAtZDcwMi00MDkxLTg1OGYtNTZmMzE3ZDljNzVlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
							height: 3000,
							width: 2025,
						},
						metacritic: { metascore: { score: 66 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm4977122",
											nameText: { text: "Owen Teague" },
											primaryImage: {
												__typename: "Image",
												id: "rm4170514945",
												url: "https://m.media-amazon.com/images/M/MV5BNmExOWFmNWUtZjRkMi00ZGMyLWIyMjMtODdiY2E3NDExYTEzXkEyXkFqcGdeQXVyMzMzMDMzODQ@._V1_.jpg",
												height: 1837,
												width: 1224,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm8463347",
											nameText: { text: "Freya Allan" },
											primaryImage: {
												__typename: "Image",
												id: "rm2784436481",
												url: "https://m.media-amazon.com/images/M/MV5BOGM5YmViNDctNTY1MC00ZjJhLThjYmEtMGRhYTJhZDIzN2NhXkEyXkFqcGdeQXVyMTI5Njc2ODg3._V1_.jpg",
												height: 913,
												width: 683,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0243806",
											nameText: { text: "Kevin Durand" },
											primaryImage: {
												__typename: "Image",
												id: "rm30067968",
												url: "https://m.media-amazon.com/images/M/MV5BMTYzNTA3Mzg3Nl5BMl5BanBnXkFtZTgwNDk1NTUwMjE@._V1_.jpg",
												height: 480,
												width: 319,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0534167",
											nameText: { text: "Peter Macon" },
											primaryImage: {
												__typename: "Image",
												id: "rm1791299073",
												url: "https://m.media-amazon.com/images/M/MV5BOWE1YjAxYWYtNjI4Yi00MDJlLWEzZWYtYWVlYzcwZWE5MzI4XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 2217,
												width: 1773,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5711047",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated PG-13 for intense sequences of sci-fi violence/action",
							rating: "PG-13",
						},
						plot: {
							id: "po4869695",
							plotText: {
								plainText:
									"Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make choices that will define a future for apes and humans alike.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.2 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt22050754",
						titleText: { text: "The Strangers: Chapter 1", isOriginalTitle: true },
						originalTitleText: { text: "The Strangers: Chapter 1", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 5,
							day: 17,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1330202113",
							url: "https://m.media-amazon.com/images/M/MV5BNDVkZTM0NDAtNTQxMS00NWIyLTgyM2ItNjAxOTllYTAzNTVjXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
							height: 6000,
							width: 4050,
						},
						metacritic: { metascore: { score: 43 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm6663708",
											nameText: { text: "Madelaine Petsch" },
											primaryImage: {
												__typename: "Image",
												id: "rm4261575937",
												url: "https://m.media-amazon.com/images/M/MV5BMWEzNzRlMzItN2E4NC00ZGY5LTllN2YtNGIwMzBiNDU0ODc1XkEyXkFqcGdeQXVyMjczNjk3NzY@._V1_.jpg",
												height: 1800,
												width: 1200,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm7635170",
											nameText: { text: "Ryan Bown" },
											primaryImage: {
												__typename: "Image",
												id: "rm3306822401",
												url: "https://m.media-amazon.com/images/M/MV5BODgwYmQ4MTYtNDJiNy00Nzg3LTliZjctN2Y0MDMzOWRkZGM2XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 9728,
												width: 7783,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm8598157",
											nameText: { text: "Matus Lajcak" },
											primaryImage: {
												__typename: "Image",
												id: "rm2235912961",
												url: "https://m.media-amazon.com/images/M/MV5BMjEyMDVjNGEtMmU2Yi00YWNmLWI3NGItMGUzNzgyMTExMDY1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
												height: 2400,
												width: 3600,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm14316067",
											nameText: { text: "Olivia Kreutzova" },
											primaryImage: null,
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5793761",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated R for horror violence, language and brief drug use",
							rating: "R",
						},
						plot: {
							id: "po6814170",
							plotText: {
								plainText:
									"After their car breaks down in an eerie small town, a young couple is forced to spend the night in a remote cabin. Panic ensues as they are terrorized by three masked strangers who strike with no mercy and seemingly no motive.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [{ genre: { genreId: "Horror", text: "Horror" } }],
						},
						ratingsSummary: { aggregateRating: 4.7 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt27995594",
						titleText: { text: "Munjya", isOriginalTitle: true },
						originalTitleText: { text: "Munjya", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 7,
							year: 2024,
							country: { id: "IN" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm304706049",
							url: "https://m.media-amazon.com/images/M/MV5BYTNjZDY2ODEtZTk2Yy00MjAyLWJlNWQtODM2NzdmYmE0ODJjXkEyXkFqcGc@._V1_.jpg",
							height: 1440,
							width: 1080,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm10806242",
											nameText: { text: "Sharvari Wagh" },
											primaryImage: {
												__typename: "Image",
												id: "rm3600563969",
												url: "https://m.media-amazon.com/images/M/MV5BZWQ2NDgzMzItNTQ5MS00NWYwLWJjMzEtOTQ1ODViN2NlYWY2XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
												height: 1024,
												width: 683,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm16077483",
											nameText: { text: "Samarth Kaimliya" },
											primaryImage: null,
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm11147724",
											nameText: { text: "Abhay Verma" },
											primaryImage: {
												__typename: "Image",
												id: "rm1329448449",
												url: "https://m.media-amazon.com/images/M/MV5BMTY0ZWRlNDctNDdhOS00YzRjLWEwZDMtMDA3MzkwYmQyOTg3XkEyXkFqcGdeQXVyMzQ0NTk5NzU@._V1_.jpg",
												height: 1148,
												width: 754,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1587175",
											nameText: { text: "Mona Singh" },
											primaryImage: {
												__typename: "Image",
												id: "rm2036534784",
												url: "https://m.media-amazon.com/images/M/MV5BMzg5NzRiM2QtM2NiNS00MjFmLWI0Y2MtNmIyMDllMjhhMWM5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
												height: 1024,
												width: 729,
											},
										},
									},
								],
							},
						],
						certificate: null,
						plot: {
							id: "po7924560",
							plotText: {
								plainText:
									"A young man's visit to his native village unveils a family secret and a vengeful spirit, the Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya's clutches.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Horror", text: "Horror" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.5 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt16426418",
						titleText: { text: "Challengers", isOriginalTitle: true },
						originalTitleText: { text: "Challengers", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 4,
							day: 26,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1337609729",
							url: "https://m.media-amazon.com/images/M/MV5BNTk1MTdmYzctNzlkOS00ZTNmLWI4ZTMtMzc3OWFkMDI0MTJkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
							height: 4096,
							width: 2765,
						},
						metacritic: { metascore: { score: 82 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm4576311",
											nameText: { text: "Mike Faist" },
											primaryImage: {
												__typename: "Image",
												id: "rm1480673537",
												url: "https://m.media-amazon.com/images/M/MV5BMWQ4NTNmYTktODMyYy00NjExLThjZjItM2FhOTYyYzc0OTJhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
												height: 4358,
												width: 2901,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm4853066",
											nameText: { text: "Josh O'Connor" },
											primaryImage: {
												__typename: "Image",
												id: "rm913199616",
												url: "https://m.media-amazon.com/images/M/MV5BMjExNDkwMDIzNF5BMl5BanBnXkFtZTgwMzk0MjA1NDM@._V1_.jpg",
												height: 2048,
												width: 1387,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3918035",
											nameText: { text: "Zendaya" },
											primaryImage: {
												__typename: "Image",
												id: "rm1855008256",
												url: "https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_.jpg",
												height: 1040,
												width: 780,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm5534173",
											nameText: { text: "Darnell Appling" },
											primaryImage: null,
										},
									},
								],
							},
						],
						certificate: {
							id: "ce4949330",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated R for language throughout, some sexual content and graphic nudity",
							rating: "R",
						},
						plot: {
							id: "po6346124",
							plotText: {
								plainText:
									"Tashi, a former tennis prodigy turned coach, turned her husband into a champion. But to overcome a losing streak, he needs to face his ex-best friend and Tashi's ex-boyfriend.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Romance", text: "Romance" } },
								{ genre: { genreId: "Sport", text: "Sport" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.3 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt6263850",
						titleText: { text: "Deadpool & Wolverine", isOriginalTitle: true },
						originalTitleText: { text: "Deadpool & Wolverine", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 7,
							day: 26,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm2308862465",
							url: "https://m.media-amazon.com/images/M/MV5BNDA3MmYzOWEtYWZhNS00ZmU3LWJkYmUtODBjMzQyNzMxYmZhXkEyXkFqcGc@._V1_.jpg",
							height: 3037,
							width: 2050,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0005351",
											nameText: { text: "Ryan Reynolds" },
											primaryImage: {
												__typename: "Image",
												id: "rm1172232961",
												url: "https://m.media-amazon.com/images/M/MV5BODFmN2VmZmEtYTRjZi00ZjY1LTgxYjQtODMyNDI3ZDk4ZTJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
												height: 3000,
												width: 2034,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0413168",
											nameText: { text: "Hugh Jackman" },
											primaryImage: {
												__typename: "Image",
												id: "rm772779264",
												url: "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_.jpg",
												height: 2048,
												width: 1363,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm10128408",
											nameText: { text: "Emma Corrin" },
											primaryImage: {
												__typename: "Image",
												id: "rm2441376513",
												url: "https://m.media-amazon.com/images/M/MV5BNWRlNDA3YzUtYjhiZi00NTI5LThmMjUtYWRiMTg1ZmM2YTg3XkEyXkFqcGc@._V1_.jpg",
												height: 4000,
												width: 2667,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1072555",
											nameText: { text: "Morena Baccarin" },
											primaryImage: {
												__typename: "Image",
												id: "rm371736832",
												url: "https://m.media-amazon.com/images/M/MV5BNmU5Yjk4OTItMjMzZS00MTYzLWI1ZDktYWM4YWM2NTM2YzMzXkEyXkFqcGdeQXVyMzY2OTA2MzM@._V1_.jpg",
												height: 1280,
												width: 960,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5858385",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason:
								"Rated R for strong bloody violence and language throughout, gore and sexual references.",
							rating: "R",
						},
						plot: {
							id: "po7762561",
							plotText: {
								plainText:
									"Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
							],
						},
						ratingsSummary: { aggregateRating: null },
						canRate: { isRatable: false },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt21454134",
						titleText: { text: "The Bikeriders", isOriginalTitle: true },
						originalTitleText: { text: "The Bikeriders", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2023, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 21,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm2558754561",
							url: "https://m.media-amazon.com/images/M/MV5BYzE2N2MyMTgtMzFhOC00M2ZkLWI3ODgtNTVjNzBiYzBmOGE2XkEyXkFqcGdeQXVyMjI0NjI0Nw@@._V1_.jpg",
							height: 5630,
							width: 3800,
						},
						metacritic: { metascore: { score: 72 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm3069650",
											nameText: { text: "Jodie Comer" },
											primaryImage: {
												__typename: "Image",
												id: "rm1030132993",
												url: "https://m.media-amazon.com/images/M/MV5BZmViMjQxYTUtZDExNy00NjU1LWI4MmEtY2RhODRkMzNkODM1XkEyXkFqcGdeQXVyNjkwNzEwMzY@._V1_.jpg",
												height: 387,
												width: 399,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm2581521",
											nameText: { text: "Austin Butler" },
											primaryImage: {
												__typename: "Image",
												id: "rm2491888897",
												url: "https://m.media-amazon.com/images/M/MV5BZTNjZjMwMDAtNjliNy00NGNiLTgyNmQtOTA5NDRjNGU4YjRhXkEyXkFqcGdeQXVyNjY4MDI3NQ@@._V1_.jpg",
												height: 1464,
												width: 1170,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0362766",
											nameText: { text: "Tom Hardy" },
											primaryImage: {
												__typename: "Image",
												id: "rm370524672",
												url: "https://m.media-amazon.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_.jpg",
												height: 2048,
												width: 1366,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0788335",
											nameText: { text: "Michael Shannon" },
											primaryImage: {
												__typename: "Image",
												id: "rm0858880",
												url: "https://m.media-amazon.com/images/M/MV5BMjE0NzM5MTc5OF5BMl5BanBnXkFtZTgwMjc3ODYxODE@._V1_.jpg",
												height: 2048,
												width: 1363,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5150007",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason:
								"Rated R for language throughout, violence, some drug use and brief sexuality.",
							rating: "R",
						},
						plot: {
							id: "po6753738",
							plotText: {
								plainText:
									"After a chance encounter, headstrong Kathy is drawn to Benny, member of Midwestern motorcycle club the Vandals. As the club transforms into a dangerous underworld of violence, Benny must choose between Kathy and his loyalty to the club.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Crime", text: "Crime" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.3 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt1392190",
						titleText: { text: "Mad Max: Fury Road", isOriginalTitle: true },
						originalTitleText: { text: "Mad Max: Fury Road", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2015, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 5,
							day: 15,
							year: 2015,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm3064749568",
							url: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
							height: 1000,
							width: 675,
						},
						metacritic: { metascore: { score: 90 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0362766",
											nameText: { text: "Tom Hardy" },
											primaryImage: {
												__typename: "Image",
												id: "rm370524672",
												url: "https://m.media-amazon.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_.jpg",
												height: 2048,
												width: 1366,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0000234",
											nameText: { text: "Charlize Theron" },
											primaryImage: {
												__typename: "Image",
												id: "rm2942012672",
												url: "https://m.media-amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_.jpg",
												height: 400,
												width: 300,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0396558",
											nameText: { text: "Nicholas Hoult" },
											primaryImage: {
												__typename: "Image",
												id: "rm3892486912",
												url: "https://m.media-amazon.com/images/M/MV5BMTUxMTYxNzMzNF5BMl5BanBnXkFtZTcwMTU0NTcxOQ@@._V1_.jpg",
												height: 2048,
												width: 1427,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm2368789",
											nameText: { text: "Zoë Kravitz" },
											primaryImage: {
												__typename: "Image",
												id: "rm1413574913",
												url: "https://m.media-amazon.com/images/M/MV5BODdmYzg3NDktOGEwZS00YzJlLWIzM2UtMmZkODFmMDczNDQ3XkEyXkFqcGc@._V1_.jpg",
												height: 11648,
												width: 8736,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce0757727",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason:
								"Rated R for intense sequences of violence throughout, and for disturbing images",
							rating: "R",
						},
						plot: {
							id: "po2425185",
							plotText: {
								plainText:
									"In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper and a drifter named Max.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.1 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt26047818",
						titleText: { text: "Anyone But You", isOriginalTitle: true },
						originalTitleText: { text: "Anyone But You", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2023, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 12,
							day: 22,
							year: 2023,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1019363329",
							url: "https://m.media-amazon.com/images/M/MV5BOTVhZGU2OWQtNDM1Ni00MzM3LTgzYjgtOTEwYzQzOWZjNTIyXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_.jpg",
							height: 3000,
							width: 2024,
						},
						metacritic: { metascore: { score: 52 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm2858875",
											nameText: { text: "Sydney Sweeney" },
											primaryImage: {
												__typename: "Image",
												id: "rm674689025",
												url: "https://m.media-amazon.com/images/M/MV5BOTVjOTkxNjMtNDJiYS00YzEzLThmZTItZjJhM2E4NWQyM2Q2XkEyXkFqcGdeQXVyNzM1NTU0NA@@._V1_.jpg",
												height: 2667,
												width: 2000,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1412974",
											nameText: { text: "Glen Powell" },
											primaryImage: {
												__typename: "Image",
												id: "rm2024083457",
												url: "https://m.media-amazon.com/images/M/MV5BMGEzMTIwM2UtYjc5MC00ZGI4LWJiOTAtYzAwZmU0OTYzYWIxXkEyXkFqcGdeQXVyNDg0MzQyNA@@._V1_.jpg",
												height: 1920,
												width: 1280,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3381295",
											nameText: { text: "Alexandra Shipp" },
											primaryImage: {
												__typename: "Image",
												id: "rm2400307201",
												url: "https://m.media-amazon.com/images/M/MV5BYzUxOWUwYWItMzIzNS00YTQ3LWJhZGYtYTJkNGZlZjEzMmIwXkEyXkFqcGdeQXVyMTI4MDM5MzYw._V1_.jpg",
												height: 6048,
												width: 4838,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm12454706",
											nameText: { text: "Mia Artemis" },
											primaryImage: null,
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5381959",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason: "Rated R for language throughout, sexual content and brief graphic nudity.",
							rating: "R",
						},
						plot: {
							id: "po7264899",
							plotText: {
								plainText:
									"After an amazing first date, Bea and Ben's fiery attraction turns ice-cold--until they find themselves unexpectedly reunited at a wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Romance", text: "Romance" } },
							],
						},
						ratingsSummary: { aggregateRating: 6.1 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt5672290",
						titleText: { text: "The First Omen", isOriginalTitle: true },
						originalTitleText: { text: "The First Omen", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 4,
							day: 5,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "movie",
							text: "Movie",
							categories: [{ id: "movie", text: "Movie", value: "movie" }],
							canHaveEpisodes: false,
							isEpisode: false,
							isSeries: false,
							displayableProperty: { value: { plainText: "" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm955597825",
							url: "https://m.media-amazon.com/images/M/MV5BMzI2YmYwZWYtNzgzNi00ODU2LWE1NWMtZmY4NTJjYzIyNTIxXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
							height: 1574,
							width: 1056,
						},
						metacritic: { metascore: { score: 65 } },
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm4836100",
											nameText: { text: "Nell Tiger Free" },
											primaryImage: {
												__typename: "Image",
												id: "rm339210497",
												url: "https://m.media-amazon.com/images/M/MV5BOTE2OGFkODgtMjI2NS00YTAzLTk5ZGQtZGFhNjMyOTNhYmIwXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg",
												height: 1310,
												width: 873,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0408591",
											nameText: { text: "Ralph Ineson" },
											primaryImage: {
												__typename: "Image",
												id: "rm3119227649",
												url: "https://m.media-amazon.com/images/M/MV5BNjc1YWU0ODktYTNlYy00YmZmLWI5ZTgtMWU3MGNmMWU5N2E1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 1200,
												width: 1200,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0000968",
											nameText: { text: "Sonia Braga" },
											primaryImage: {
												__typename: "Image",
												id: "rm3090123776",
												url: "https://m.media-amazon.com/images/M/MV5BMTRiNDQyMWQtMzFjZi00ZGYyLWFjYjctOTVjYTZhNmJiZDMxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 604,
												width: 488,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm5601350",
											nameText: { text: "Tawfeek Barhom" },
											primaryImage: {
												__typename: "Image",
												id: "rm2956795905",
												url: "https://m.media-amazon.com/images/M/MV5BMDVlOTIyOTMtMjZiYi00ZjgyLWEzMTItYWYwMjI3Yzk3MTc5XkEyXkFqcGdeQXVyMzUyNjMyNzE@._V1_.jpg",
												height: 8000,
												width: 6400,
											},
										},
									},
								],
							},
						],
						certificate: {
							id: "ce5522299",
							ratingsBody: { id: "MPAA", text: "MPAA" },
							ratingReason:
								"Rated R for violent content, grisly/disturbing images, and brief graphic nudity.",
							rating: "R",
						},
						plot: {
							id: "po7303850",
							plotText: {
								plainText:
									"A young American woman is sent to Rome to begin a life of service to the church, but encounters a darkness that causes her to question her faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [{ genre: { genreId: "Horror", text: "Horror" } }],
						},
						ratingsSummary: { aggregateRating: 6.5 },
						canRate: { isRatable: true },
					},
				},
			],
			pageInfo: {
				__typename: "PageInfo",
				hasNextPage: true,
				hasPreviousPage: false,
				startCursor: "eyJlc1Rva2VuIjpbIjMiXSwiZmlsdGVyIjoie1widG9wTWV0ZXJUaXRsZXNUeXBlXCI6XCJNT1ZJRVwifSJ9",
				endCursor: "eyJlc1Rva2VuIjpbIjQ2Il0sImZpbHRlciI6IntcInRvcE1ldGVyVGl0bGVzVHlwZVwiOlwiTU9WSUVcIn0ifQ==",
			},
		},
		tv: {
			__typename: "TitleSearchConnection",
			edges: [
				{
					node: {
						__typename: "Title",
						id: "tt1190634",
						titleText: { text: "The Boys", isOriginalTitle: true },
						originalTitleText: { text: "The Boys", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2019, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 7,
							day: 26,
							year: 2019,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm4040589057",
							url: "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_.jpg",
							height: 1350,
							width: 1080,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0881631",
											nameText: { text: "Karl Urban" },
											primaryImage: {
												__typename: "Image",
												id: "rm1140263424",
												url: "https://m.media-amazon.com/images/M/MV5BMjA1MTMwMjMxN15BMl5BanBnXkFtZTgwNjA1MTA1OTE@._V1_.jpg",
												height: 2048,
												width: 1364,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm4425051",
											nameText: { text: "Jack Quaid" },
											primaryImage: {
												__typename: "Image",
												id: "rm2747495424",
												url: "https://m.media-amazon.com/images/M/MV5BY2Y2MmIzOGEtNTgyYi00OWUyLTljNzEtYmFlOWU2MzFkZTg1XkEyXkFqcGdeQXVyMjYyNDg5NzY@._V1_.jpg",
												height: 822,
												width: 552,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1102278",
											nameText: { text: "Antony Starr" },
											primaryImage: {
												__typename: "Image",
												id: "rm3992957184",
												url: "https://m.media-amazon.com/images/M/MV5BMTQxMDg1Nzc0OV5BMl5BanBnXkFtZTcwODc4NTkyNw@@._V1_.jpg",
												height: 2048,
												width: 1465,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3929195",
											nameText: { text: "Erin Moriarty" },
											primaryImage: {
												__typename: "Image",
												id: "rm4186887681",
												url: "https://m.media-amazon.com/images/M/MV5BZTgwMzZiYTctMzEwMi00OTk0LTlmZTItM2JhMDIwY2Q2OWNlXkEyXkFqcGdeQXVyMjMzNDc5NTg@._V1_.jpg",
												height: 1797,
												width: 1350,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce2108759", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po1232844",
							plotText: {
								plainText:
									"A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Crime", text: "Crime" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.7 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt12262202",
						titleText: { text: "The Acolyte", isOriginalTitle: true },
						originalTitleText: { text: "The Acolyte", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 4,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm4134108929",
							url: "https://m.media-amazon.com/images/M/MV5BY2RlMmMyNzktNmE1Zi00MWMzLWFkMGEtMzU5OWFhMGMzMzhkXkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_.jpg",
							height: 2048,
							width: 1383,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm3964350",
											nameText: { text: "Amandla Stenberg" },
											primaryImage: {
												__typename: "Image",
												id: "rm457712897",
												url: "https://m.media-amazon.com/images/M/MV5BYTAyYmViNTctNjlmOS00ZTI0LWI0NzUtNDQyM2Q0N2ExYTMzXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg",
												height: 1025,
												width: 828,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm6748436",
											nameText: { text: "Dafne Keen" },
											primaryImage: {
												__typename: "Image",
												id: "rm3942660353",
												url: "https://m.media-amazon.com/images/M/MV5BMzk1YTFkNmItZGUzOC00YzVlLTkwOGUtMDY0YTAyYmEwYWZlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
												height: 3500,
												width: 2671,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3853652",
											nameText: { text: "Jodie Turner-Smith" },
											primaryImage: {
												__typename: "Image",
												id: "rm1796553729",
												url: "https://m.media-amazon.com/images/M/MV5BZTAxYTdkN2MtYjllMy00MTRjLWFkN2YtOWRhNGFlYjIxYmYzXkEyXkFqcGdeQXVyMjU4NTE0MzY@._V1_.jpg",
												height: 1080,
												width: 720,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0497631",
											nameText: { text: "Lee Jung-jae" },
											primaryImage: {
												__typename: "Image",
												id: "rm676459521",
												url: "https://m.media-amazon.com/images/M/MV5BN2M2OTkwYWEtYWFjYy00OGRmLTk5MDgtNzEyZTk4MDFkM2VlXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
												height: 3000,
												width: 2259,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce5843579", ratingsBody: null, ratingReason: null, rating: "TV-14" },
						plot: {
							id: "po7956360",
							plotText: {
								plainText:
									"An investigation into a shocking crime spree pits a respected Jedi Master against a dangerous warrior from his past. As more clues emerge, they travel down a dark path where sinister forces reveal all is not what it seems…",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Fantasy", text: "Fantasy" } },
								{ genre: { genreId: "Mystery", text: "Mystery" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 3.4 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt8740790",
						titleText: { text: "Bridgerton", isOriginalTitle: true },
						originalTitleText: { text: "Bridgerton", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2020, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 12,
							day: 25,
							year: 2020,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm3083501057",
							url: "https://m.media-amazon.com/images/M/MV5BY2ZiODA2MGYtMmMxMi00YjlmLWFmYjktMWYyOTMwNWFkNWNkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
							height: 2222,
							width: 1500,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm1965552",
											nameText: { text: "Nicola Coughlan" },
											primaryImage: {
												__typename: "Image",
												id: "rm4147657217",
												url: "https://m.media-amazon.com/images/M/MV5BZDI0ZmVhMDctN2Q3OS00NmJiLTg2MzktOWM2NTIyNGExNThkXkEyXkFqcGdeQXVyMTE5MTQ1OTQ2._V1_.jpg",
												height: 4498,
												width: 3000,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm5104710",
											nameText: { text: "Claudia Jessie" },
											primaryImage: {
												__typename: "Image",
												id: "rm3287339265",
												url: "https://m.media-amazon.com/images/M/MV5BYTI0NDM2NTMtN2M0Ni00MWIzLWJmMTQtNzk2NGNkMDk5ZmM1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
												height: 3728,
												width: 2735,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3451086",
											nameText: { text: "Luke Thompson" },
											primaryImage: {
												__typename: "Image",
												id: "rm1213471233",
												url: "https://m.media-amazon.com/images/M/MV5BZTg0NWRjYjMtYjliMi00MTk0LTg4ZGUtZWI0MmU1NDEwZTAwXkEyXkFqcGdeQXVyMTI4MDIyOTc2._V1_.jpg",
												height: 5760,
												width: 3840,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0908116",
											nameText: { text: "Polly Walker" },
											primaryImage: {
												__typename: "Image",
												id: "rm2662647296",
												url: "https://m.media-amazon.com/images/M/MV5BMTU0NzIxOTA1N15BMl5BanBnXkFtZTgwODc5NDU1MjE@._V1_.jpg",
												height: 375,
												width: 500,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce3149055", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po4015721",
							plotText: {
								plainText:
									"The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Romance", text: "Romance" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.4 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt11198330",
						titleText: { text: "House of the Dragon", isOriginalTitle: true },
						originalTitleText: { text: "House of the Dragon", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2022, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 8,
							day: 21,
							year: 2022,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm3614667265",
							url: "https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_.jpg",
							height: 1920,
							width: 1296,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm1741002",
											nameText: { text: "Matt Smith" },
											primaryImage: {
												__typename: "Image",
												id: "rm2913527040",
												url: "https://m.media-amazon.com/images/M/MV5BMjE0NzExMTg0MV5BMl5BanBnXkFtZTgwOTIyNTI5NzE@._V1_.jpg",
												height: 2048,
												width: 1719,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm8458664",
											nameText: { text: "Emma D'Arcy" },
											primaryImage: {
												__typename: "Image",
												id: "rm540662273",
												url: "https://m.media-amazon.com/images/M/MV5BOTJiOGExNWUtZjM0ZS00Mzc2LTg4YjQtNzEzNjE0NzNmYzA5XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_.jpg",
												height: 1920,
												width: 1280,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm4972453",
											nameText: { text: "Olivia Cooke" },
											primaryImage: {
												__typename: "Image",
												id: "rm3001396225",
												url: "https://m.media-amazon.com/images/M/MV5BOTVkNzI2ZDEtZGEzNy00ZGI0LTkxNDktYTFjZWUyODgyODQ1XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg",
												height: 3600,
												width: 2745,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0406975",
											nameText: { text: "Rhys Ifans" },
											primaryImage: {
												__typename: "Image",
												id: "rm2679613952",
												url: "https://m.media-amazon.com/images/M/MV5BMTkyMzU0NDM4Ml5BMl5BanBnXkFtZTcwMDkzMDg5Nw@@._V1_.jpg",
												height: 2048,
												width: 1450,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce3957267", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po6789597",
							plotText: {
								plainText:
									"An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Fantasy", text: "Fantasy" } },
								{ genre: { genreId: "Romance", text: "Romance" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.4 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt16283824",
						titleText: { text: "Eric", isOriginalTitle: true },
						originalTitleText: { text: "Eric", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: 2024 },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 5,
							day: 30,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvMiniSeries",
							text: "TV Mini Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Mini Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm3074573569",
							url: "https://m.media-amazon.com/images/M/MV5BODY2ZTAwYjQtYzgyZC00NGE1LThhYTUtNGU0NDk0YzBjNGE4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
							height: 2222,
							width: 1500,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm1212722",
											nameText: { text: "Benedict Cumberbatch" },
											primaryImage: {
												__typename: "Image",
												id: "rm893516032",
												url: "https://m.media-amazon.com/images/M/MV5BMjE0MDkzMDQwOF5BMl5BanBnXkFtZTgwOTE1Mjg1MzE@._V1_.jpg",
												height: 2048,
												width: 1414,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0000451",
											nameText: { text: "Gaby Hoffmann" },
											primaryImage: {
												__typename: "Image",
												id: "rm1834421248",
												url: "https://m.media-amazon.com/images/M/MV5BMTg1NDcyMjAzMF5BMl5BanBnXkFtZTgwMTIyMzcwMDI@._V1_.jpg",
												height: 2048,
												width: 1447,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0283945",
											nameText: { text: "Dan Fogler" },
											primaryImage: {
												__typename: "Image",
												id: "rm2482473729",
												url: "https://m.media-amazon.com/images/M/MV5BODcyOWZlNzEtZmRkMy00NTljLTg0NDctNmI4ZTJlMmVkOTZlXkEyXkFqcGdeQXVyMTE4NTMxNjI@._V1_.jpg",
												height: 1274,
												width: 1382,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm4163356",
											nameText: { text: "McKinley Belcher III" },
											primaryImage: {
												__typename: "Image",
												id: "rm3759182593",
												url: "https://m.media-amazon.com/images/M/MV5BNDgyYWE2MjUtZDY3OC00MTNlLThjZDYtYmM4YzY2MzcwZjZmXkEyXkFqcGdeQXVyMjQyMTMzOTk@._V1_.jpg",
												height: 6000,
												width: 4000,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce5839796", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po6325336",
							plotText: {
								plainText:
									"Vincent, a grief-stricken father whose son goes missing, finds solace through his friendship with Eric, the monster that lives under Edgar's bed.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Crime", text: "Crime" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 7 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt17677860",
						titleText: { text: "Presumed Innocent", isOriginalTitle: true },
						originalTitleText: { text: "Presumed Innocent", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: 2024 },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 12,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvMiniSeries",
							text: "TV Mini Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Mini Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1120498177",
							url: "https://m.media-amazon.com/images/M/MV5BNDk1MWM3NmItZmNjZS00ZmZkLTk1ZDAtZjFiN2FiZjczNmZhXkEyXkFqcGc@._V1_.jpg",
							height: 3000,
							width: 2000,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0350453",
											nameText: { text: "Jake Gyllenhaal" },
											primaryImage: {
												__typename: "Image",
												id: "rm3787192320",
												url: "https://m.media-amazon.com/images/M/MV5BNjA0MTU2NDY3MF5BMl5BanBnXkFtZTgwNDU4ODkzMzE@._V1_.jpg",
												height: 2048,
												width: 1368,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1550948",
											nameText: { text: "Ruth Negga" },
											primaryImage: {
												__typename: "Image",
												id: "rm3619753984",
												url: "https://m.media-amazon.com/images/M/MV5BMTUxMjMyMTEzN15BMl5BanBnXkFtZTgwMTI1OTI5ODE@._V1_.jpg",
												height: 1365,
												width: 2048,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0131966",
											nameText: { text: "Bill Camp" },
											primaryImage: {
												__typename: "Image",
												id: "rm2410762240",
												url: "https://m.media-amazon.com/images/M/MV5BMTU0MTI1NTMxN15BMl5BanBnXkFtZTgwNTkxMjI2NDM@._V1_.jpg",
												height: 2048,
												width: 1685,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1282966",
											nameText: { text: "O-T Fagbenle" },
											primaryImage: {
												__typename: "Image",
												id: "rm2340169216",
												url: "https://m.media-amazon.com/images/M/MV5BMTA5Njc5MTI5NTJeQTJeQWpwZ15BbWU4MDczNzg3NTMy._V1_.jpg",
												height: 2048,
												width: 1563,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce5863104", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po6423279",
							plotText: {
								plainText:
									"It tells the story of a horrific murder that upends the Chicago Prosecuting Attorneys' office when one of its own is suspected of the crime.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Crime", text: "Crime" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Mystery", text: "Mystery" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.6 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt0944947",
						titleText: { text: "Game of Thrones", isOriginalTitle: true },
						originalTitleText: { text: "Game of Thrones", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2011, endYear: 2019 },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 4,
							day: 17,
							year: 2011,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm3885121281",
							url: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
							height: 1500,
							width: 1000,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm3592338",
											nameText: { text: "Emilia Clarke" },
											primaryImage: {
												__typename: "Image",
												id: "rm699918848",
												url: "https://m.media-amazon.com/images/M/MV5BNjg3OTg4MDczMl5BMl5BanBnXkFtZTgwODc0NzUwNjE@._V1_.jpg",
												height: 1394,
												width: 929,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0227759",
											nameText: { text: "Peter Dinklage" },
											primaryImage: {
												__typename: "Image",
												id: "rm307862016",
												url: "https://m.media-amazon.com/images/M/MV5BMTM1MTI5Mzc0MF5BMl5BanBnXkFtZTYwNzgzOTQz._V1_.jpg",
												height: 400,
												width: 321,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3229685",
											nameText: { text: "Kit Harington" },
											primaryImage: {
												__typename: "Image",
												id: "rm94420224",
												url: "https://m.media-amazon.com/images/M/MV5BMTA2NTI0NjYxMTBeQTJeQWpwZ15BbWU3MDIxMjgyNzY@._V1_.jpg",
												height: 2048,
												width: 1363,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0372176",
											nameText: { text: "Lena Headey" },
											primaryImage: {
												__typename: "Image",
												id: "rm126344960",
												url: "https://m.media-amazon.com/images/M/MV5BMzIwMjIwNjg0M15BMl5BanBnXkFtZTgwOTI3MDEzMDE@._V1_.jpg",
												height: 2048,
												width: 1568,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce0603264", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po2596634",
							plotText: {
								plainText:
									"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Fantasy", text: "Fantasy" } },
							],
						},
						ratingsSummary: { aggregateRating: 9.2 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt19231492",
						titleText: { text: "Dark Matter", isOriginalTitle: true },
						originalTitleText: { text: "Dark Matter", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 5,
							day: 8,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm2459662337",
							url: "https://m.media-amazon.com/images/M/MV5BZTYzNGIzNDItMjQ5Yy00NmNiLWI4YTQtNzVjYzBjZDEzNDdjXkEyXkFqcGdeQXVyMjQ4ODcxNTM@._V1_.jpg",
							height: 3000,
							width: 2000,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0249291",
											nameText: { text: "Joel Edgerton" },
											primaryImage: {
												__typename: "Image",
												id: "rm127971840",
												url: "https://m.media-amazon.com/images/M/MV5BMTA0ODI1ODk4NzdeQTJeQWpwZ15BbWU3MDkwNjkzOTY@._V1_.jpg",
												height: 768,
												width: 512,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0000124",
											nameText: { text: "Jennifer Connelly" },
											primaryImage: {
												__typename: "Image",
												id: "rm3761484289",
												url: "https://m.media-amazon.com/images/M/MV5BNWM0OTlhYmQtZWI0NS00NzM0LWE5YjItMWZmYzkzY2FmNTc2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
												height: 2723,
												width: 1814,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0103797",
											nameText: { text: "Alice Braga" },
											primaryImage: {
												__typename: "Image",
												id: "rm487402497",
												url: "https://m.media-amazon.com/images/M/MV5BYWM0ZTAzNjktNjMxMi00ZWMyLWEzNjMtZjQxNzkwMmQ5NDEwXkEyXkFqcGdeQXVyNjkzMzc5NjI@._V1_.jpg",
												height: 2968,
												width: 3110,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0801051",
											nameText: { text: "Jimmi Simpson" },
											primaryImage: {
												__typename: "Image",
												id: "rm1828736768",
												url: "https://m.media-amazon.com/images/M/MV5BMDVlMTExNWYtY2JkNC00OGRhLTkwMDMtMjI2ZmVlYmQ1ZTRkXkEyXkFqcGdeQXVyMzYyMjUwMzE@._V1_.jpg",
												height: 1437,
												width: 1094,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce5868512", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po6506749",
							plotText: {
								plainText:
									"A man is abducted into an alternate version of his life. Amid the mind-bending landscape of lives he could've lived, he embarks on a harrowing journey to get back to his true family and save them from a most terrifying foe: himself.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.7 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt12809988",
						titleText: { text: "Sweet Tooth", isOriginalTitle: true },
						originalTitleText: { text: "Sweet Tooth", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2021, endYear: 2024 },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 4,
							year: 2021,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1880521985",
							url: "https://m.media-amazon.com/images/M/MV5BN2FlZWY1MWQtNTlkNy00ZjYxLTk0MmMtMGI4ZWIxNzhmODM5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
							height: 2222,
							width: 1500,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm1996829",
											nameText: { text: "Nonso Anozie" },
											primaryImage: {
												__typename: "Image",
												id: "rm2324153857",
												url: "https://m.media-amazon.com/images/M/MV5BNzQzODQwNmYtMjFmMS00YzIwLTg4NjEtMWY1YjE4NGE2NGQ0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
												height: 2400,
												width: 3600,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm8087548",
											nameText: { text: "Christian Convery" },
											primaryImage: {
												__typename: "Image",
												id: "rm2319533313",
												url: "https://m.media-amazon.com/images/M/MV5BNzNjYmJkNzctMGUwZC00NDdmLWE5NDYtNzFiOTQ3N2Y5MzlmXkEyXkFqcGdeQXVyNjU5MjQxNDE@._V1_.jpg",
												height: 2975,
												width: 2593,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm2901344",
											nameText: { text: "Stefania LaVie Owen" },
											primaryImage: {
												__typename: "Image",
												id: "rm1405426944",
												url: "https://m.media-amazon.com/images/M/MV5BNzQzNjQwMTg4M15BMl5BanBnXkFtZTgwMzI5MjQ2ODE@._V1_.jpg",
												height: 2048,
												width: 1361,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm2253821",
											nameText: { text: "Adeel Akhtar" },
											primaryImage: {
												__typename: "Image",
												id: "rm2805080320",
												url: "https://m.media-amazon.com/images/M/MV5BMTk2NTMwMjE2Ml5BMl5BanBnXkFtZTgwNDI5MDA1MzI@._V1_.jpg",
												height: 2048,
												width: 1444,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce3249265", ratingsBody: null, ratingReason: null, rating: "TV-14" },
						plot: {
							id: "po5241379",
							plotText: {
								plainText:
									"A boy who is half human and half deer survives in a post-apocalyptic world with other hybrids.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Fantasy", text: "Fantasy" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.7 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt12637874",
						titleText: { text: "Fallout", isOriginalTitle: true },
						originalTitleText: { text: "Fallout", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 4,
							day: 10,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm2121877249",
							url: "https://m.media-amazon.com/images/M/MV5BZjQ0YjAyNWQtMjRjMC00NzMxLTlkNjEtYWQzNmQwNGRlMGJkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
							height: 2880,
							width: 1944,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm3480246",
											nameText: { text: "Ella Purnell" },
											primaryImage: {
												__typename: "Image",
												id: "rm4124472065",
												url: "https://m.media-amazon.com/images/M/MV5BZGNkMWI4ZmItN2Y2Mi00Mzc1LWExYTctMjMzMjhmMDE0NWVkXkEyXkFqcGc@._V1_.jpg",
												height: 11608,
												width: 8708,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm2343418",
											nameText: { text: "Aaron Moten" },
											primaryImage: {
												__typename: "Image",
												id: "rm597903105",
												url: "https://m.media-amazon.com/images/M/MV5BZDgwZmEzNDUtMjhmZC00Yjk1LTgxMjAtN2RlMzAzMDMyNGYxXkEyXkFqcGdeQXVyMjU2MDcyNjI@._V1_.jpg",
												height: 2583,
												width: 2045,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0324658",
											nameText: { text: "Walton Goggins" },
											primaryImage: {
												__typename: "Image",
												id: "rm1114441217",
												url: "https://m.media-amazon.com/images/M/MV5BMzcxNjJiMWUtMDgwYS00MDg0LWJmZGQtMWNlMTIwNDhhODQ0XkEyXkFqcGdeQXVyNDg4OTQzNjg@._V1_.jpg",
												height: 1653,
												width: 1170,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm2030779",
											nameText: { text: "Moises Arias" },
											primaryImage: {
												__typename: "Image",
												id: "rm1955092736",
												url: "https://m.media-amazon.com/images/M/MV5BMTA0MjU1MzA5MzZeQTJeQWpwZ15BbWU4MDMyMTU2MTQz._V1_.jpg",
												height: 1437,
												width: 2048,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce5738302", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po5205482",
							plotText: {
								plainText:
									"In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Action", text: "Action" } },
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
								{ genre: { genreId: "War", text: "War" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.4 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt7440726",
						titleText: { text: "Your Honor", isOriginalTitle: true },
						originalTitleText: { text: "Your Honor", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2020, endYear: 2023 },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 12,
							day: 6,
							year: 2020,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm2397518337",
							url: "https://m.media-amazon.com/images/M/MV5BNTIxMmJlNzAtZTQ3NC00MjIyLTk4YTUtNmNlNzNjMzYzZWFiXkEyXkFqcGdeQXVyMTUyMTU1MDg1._V1_.jpg",
							height: 2880,
							width: 1920,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0186505",
											nameText: { text: "Bryan Cranston" },
											primaryImage: {
												__typename: "Image",
												id: "rm1640347136",
												url: "https://m.media-amazon.com/images/M/MV5BMTA2NjEyMTY4MTVeQTJeQWpwZ15BbWU3MDQ5NDAzNDc@._V1_.jpg",
												height: 2048,
												width: 1369,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0204706",
											nameText: { text: "Hope Davis" },
											primaryImage: {
												__typename: "Image",
												id: "rm2480242944",
												url: "https://m.media-amazon.com/images/M/MV5BOTM4Mjk5MjAwNF5BMl5BanBnXkFtZTcwNzQ3MTk3Mw@@._V1_.jpg",
												height: 2048,
												width: 1352,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0836121",
											nameText: { text: "Michael Stuhlbarg" },
											primaryImage: {
												__typename: "Image",
												id: "rm77302016",
												url: "https://m.media-amazon.com/images/M/MV5BNjdjNTlhZjUtODA0MC00Mjc3LWExNmMtZDc5ZmI0ZmNlZWZmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 1023,
												width: 682,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3188162",
											nameText: { text: "Lilli Kay" },
											primaryImage: {
												__typename: "Image",
												id: "rm3167845633",
												url: "https://m.media-amazon.com/images/M/MV5BNDMwMGViODItNGU5NS00YTFhLWE4MzEtM2UzOTgxNTY1MGE4XkEyXkFqcGdeQXVyNzIwMDc2NjE@._V1_CR163,17,267,401_.jpg",
												height: 401,
												width: 267,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce3146728", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po3605411",
							plotText: {
								plainText:
									"A judge confronts his convictions when his son is involved in a hit-and-run that embroils an organized-crime family.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Crime", text: "Crime" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.6 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt31433814",
						titleText: { text: "Doctor Who", isOriginalTitle: true },
						originalTitleText: { text: "Doctor Who", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2023, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 12,
							day: 25,
							year: 2023,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1920760833",
							url: "https://m.media-amazon.com/images/M/MV5BZjVlNTkyZWItZjE0My00OGExLTkzYzAtMDg1NDAzY2UwMGUxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
							height: 1000,
							width: 675,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm6967441",
											nameText: { text: "Ncuti Gatwa" },
											primaryImage: {
												__typename: "Image",
												id: "rm1119776000",
												url: "https://m.media-amazon.com/images/M/MV5BNDAyNWRlOGItMGE2Mi00YjU3LWJhMWMtNmZlODNkMThmOWRjXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
												height: 3200,
												width: 2256,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm8908771",
											nameText: { text: "Millie Gibson" },
											primaryImage: {
												__typename: "Image",
												id: "rm3758063361",
												url: "https://m.media-amazon.com/images/M/MV5BNzcxYTA3YTAtYjFkYi00NTM0LThkNTEtM2VlZGRjYWYwN2I3XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 6720,
												width: 4480,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0878610",
											nameText: { text: "Susan Twist" },
											primaryImage: {
												__typename: "Image",
												id: "rm2642243585",
												url: "https://m.media-amazon.com/images/M/MV5BNjAwZmMzMGMtMzY0Zi00MzE1LWI0Y2QtOGQ0ZjBmMDRmZTdiXkEyXkFqcGc@._V1_.jpg",
												height: 1905,
												width: 1690,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3382412",
											nameText: { text: "Michelle Greenidge" },
											primaryImage: {
												__typename: "Image",
												id: "rm1028908545",
												url: "https://m.media-amazon.com/images/M/MV5BMGE5MzBlOTktMTNkYy00YTMyLWJmNGEtOWIxZTZiMGU5Y2I2XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
												height: 667,
												width: 1000,
											},
										},
									},
								],
							},
						],
						certificate: null,
						plot: {
							id: "po7746959",
							plotText: {
								plainText:
									"The Time Lord known as the Doctor travels through space and time with his companions, having incredible adventures and facing dangerous enemies.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
							],
						},
						ratingsSummary: { aggregateRating: 6.1 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt0452046",
						titleText: { text: "Criminal Minds", isOriginalTitle: true },
						originalTitleText: { text: "Criminal Minds", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2005, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 9,
							day: 22,
							year: 2005,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1756462337",
							url: "https://m.media-amazon.com/images/M/MV5BMTJjN2IxNTUtMWE3Ni00MTYzLTg0MTQtNzRhMTVjMzY2ZWI1XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
							height: 828,
							width: 560,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm1494536",
											nameText: { text: "Kirsten Vangsness" },
											primaryImage: {
												__typename: "Image",
												id: "rm672413441",
												url: "https://m.media-amazon.com/images/M/MV5BN2Q3ODZkNjAtNWNlNC00OGUxLWE0OWMtN2EyYTg1NmM5MDdlXkEyXkFqcGdeQXVyNDIzNTM2Ng@@._V1_.jpg",
												height: 3598,
												width: 2400,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1131557",
											nameText: { text: "Matthew Gray Gubler" },
											primaryImage: {
												__typename: "Image",
												id: "rm3013023744",
												url: "https://m.media-amazon.com/images/M/MV5BOTAwNzE4NzAyMV5BMl5BanBnXkFtZTgwNzUzMTIyODE@._V1_.jpg",
												height: 3000,
												width: 2400,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0176882",
											nameText: { text: "A.J. Cook" },
											primaryImage: {
												__typename: "Image",
												id: "rm2667200257",
												url: "https://m.media-amazon.com/images/M/MV5BODA1OTc5MjQtNjU5YS00NjIzLTgyMzQtNmUzY2I2ODViNDNhXkEyXkFqcGdeQXVyMTQzNzIxMDI@._V1_.jpg",
												height: 1292,
												width: 1125,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0001505",
											nameText: { text: "Joe Mantegna" },
											primaryImage: {
												__typename: "Image",
												id: "rm595596545",
												url: "https://m.media-amazon.com/images/M/MV5BZDU3MTQyMDUtMmMyOC00NzMzLTg3OTEtY2Q5ZWQ1MWE0Y2JjXkEyXkFqcGdeQXVyMTU0MTk2ODEz._V1_.jpg",
												height: 1281,
												width: 855,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce0480218", ratingsBody: null, ratingReason: null, rating: "TV-14" },
						plot: {
							id: "po6970811",
							plotText: {
								plainText:
									"A group of criminal profilers who work for the FBI as members of its Behavioral Analysis Unit (BAU) using behavioral analysis and profiling to help investigate crimes and find the suspect known as the unsub.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Crime", text: "Crime" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Mystery", text: "Mystery" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.1 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt11712058",
						titleText: { text: "Mayor of Kingstown", isOriginalTitle: true },
						originalTitleText: { text: "Mayor of Kingstown", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2021, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 11,
							day: 14,
							year: 2021,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1067941377",
							url: "https://m.media-amazon.com/images/M/MV5BY2YxNDc1MjAtMzMxNy00ZjkyLWIwMDMtYmE2NDk3YWIyNmY1XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
							height: 2048,
							width: 1382,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0719637",
											nameText: { text: "Jeremy Renner" },
											primaryImage: {
												__typename: "Image",
												id: "rm3197809920",
												url: "https://m.media-amazon.com/images/M/MV5BOTk2NDc2ODgzMF5BMl5BanBnXkFtZTcwMTMzOTQ4Nw@@._V1_.jpg",
												height: 600,
												width: 363,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0227003",
											nameText: { text: "Hugh Dillon" },
											primaryImage: {
												__typename: "Image",
												id: "rm415602433",
												url: "https://m.media-amazon.com/images/M/MV5BNzI2NWFhMDItMjYzMy00MDMxLTk4NGUtOGIzMDU2OTAwMTUxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 1000,
												width: 667,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm8633614",
											nameText: { text: "Tobi Bamtefa" },
											primaryImage: {
												__typename: "Image",
												id: "rm1567052545",
												url: "https://m.media-amazon.com/images/M/MV5BN2Q3MzYwOWMtMDFkNi00ZWE1LTk4NTMtZWE1MDMxMzA4Y2RjXkEyXkFqcGdeQXVyMTcwOTM1MTc1._V1_.jpg",
												height: 1599,
												width: 1066,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0359623",
											nameText: { text: "Taylor Handley" },
											primaryImage: {
												__typename: "Image",
												id: "rm628177921",
												url: "https://m.media-amazon.com/images/M/MV5BN2U5OTNmNWUtODBmMy00OWJkLWEwOWEtMWI2YmQ5MGRjNWFhXkEyXkFqcGdeQXVyNjE4NTQ5NA@@._V1_.jpg",
												height: 2048,
												width: 1363,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce3364286", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po5794025",
							plotText: {
								plainText:
									"The McLusky family are power brokers tackling themes of systemic racism, corruption and inequality in Kingstown, Michigan, where the business of incarceration is the only thriving industry.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Crime", text: "Crime" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.2 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt2788316",
						titleText: { text: "Shōgun", isOriginalTitle: false },
						originalTitleText: { text: "Shôgun", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2024, endYear: 2026 },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 2,
							day: 27,
							year: 2024,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm1455376897",
							url: "https://m.media-amazon.com/images/M/MV5BMzhkNzVkNDYtNmE2Zi00ZTk1LTk2OWYtOTU5NWM5OWQ2Zjc0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
							height: 1500,
							width: 1200,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm4008605",
											nameText: { text: "Cosmo Jarvis" },
											primaryImage: {
												__typename: "Image",
												id: "rm689586433",
												url: "https://m.media-amazon.com/images/M/MV5BYjdhYTllYmQtOGRkMy00ZWEwLWE3MzgtMzIxYmJiNTcxNDlhXkEyXkFqcGdeQXVyNTc3OTc1NzA@._V1_.jpg",
												height: 1597,
												width: 1290,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm3660091",
											nameText: { text: "Anna Sawai" },
											primaryImage: {
												__typename: "Image",
												id: "rm730600705",
												url: "https://m.media-amazon.com/images/M/MV5BMTdjMzdlYTAtNTFjOC00NTdkLTkwOTEtMWNhZGU1MmE5OGRjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
												height: 790,
												width: 644,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0038355",
											nameText: { text: "Tadanobu Asano" },
											primaryImage: {
												__typename: "Image",
												id: "rm2026164736",
												url: "https://m.media-amazon.com/images/M/MV5BMTY5MzM5MTk5OV5BMl5BanBnXkFtZTgwMTcxMTY1MDE@._V1_.jpg",
												height: 2048,
												width: 1425,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0760796",
											nameText: { text: "Hiroyuki Sanada" },
											primaryImage: {
												__typename: "Image",
												id: "rm4110913280",
												url: "https://m.media-amazon.com/images/M/MV5BMjE2MzY0NTM1Ml5BMl5BanBnXkFtZTcwNzQzNzMyMw@@._V1_.jpg",
												height: 995,
												width: 960,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce3148640", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po7393264",
							plotText: {
								plainText:
									"When a mysterious European ship is found marooned in a nearby fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power and devastate his enemies.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Adventure", text: "Adventure" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "History", text: "History" } },
								{ genre: { genreId: "War", text: "War" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.7 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt0413573",
						titleText: { text: "Grey's Anatomy", isOriginalTitle: true },
						originalTitleText: { text: "Grey's Anatomy", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2005, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 3,
							day: 27,
							year: 2005,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm2855858177",
							url: "https://m.media-amazon.com/images/M/MV5BODA2Mjk0N2MtNGY0Mi00ZWFjLTkxODEtZDFjNDg4ZDliMGVmXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_.jpg",
							height: 4000,
							width: 2700,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0690186",
											nameText: { text: "Ellen Pompeo" },
											primaryImage: {
												__typename: "Image",
												id: "rm3237975552",
												url: "https://m.media-amazon.com/images/M/MV5BMTI4NDc2NjA0OV5BMl5BanBnXkFtZTcwNTI1NDg1MQ@@._V1_.jpg",
												height: 400,
												width: 296,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0933156",
											nameText: { text: "Chandra Wilson" },
											primaryImage: {
												__typename: "Image",
												id: "rm601200640",
												url: "https://m.media-amazon.com/images/M/MV5BMTYzODA0MDIxOF5BMl5BanBnXkFtZTYwMTA4MDk1._V1_.jpg",
												height: 400,
												width: 272,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0681782",
											nameText: { text: "James Pickens Jr." },
											primaryImage: {
												__typename: "Image",
												id: "rm824546304",
												url: "https://m.media-amazon.com/images/M/MV5BMjA4NDAyNjkwOF5BMl5BanBnXkFtZTcwODg4Mzk5MQ@@._V1_.jpg",
												height: 640,
												width: 512,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0150362",
											nameText: { text: "Justin Chambers" },
											primaryImage: {
												__typename: "Image",
												id: "rm3274004225",
												url: "https://m.media-amazon.com/images/M/MV5BMDU4MjlhZjEtNzg0Ny00Y2Q3LTlkZWMtYWQ4OGM4NTRjZGMwXkEyXkFqcGdeQXVyMTM0MDM4OTg5._V1_.jpg",
												height: 360,
												width: 244,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce0313010", ratingsBody: null, ratingReason: null, rating: "TV-14" },
						plot: {
							id: "po1029589",
							plotText: {
								plainText:
									"A drama centered on the personal and professional lives of five surgical interns and their supervisors.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Romance", text: "Romance" } },
							],
						},
						ratingsSummary: { aggregateRating: 7.6 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt0903747",
						titleText: { text: "Breaking Bad", isOriginalTitle: true },
						originalTitleText: { text: "Breaking Bad", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2008, endYear: 2013 },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 1,
							day: 20,
							year: 2008,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm3116305665",
							url: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
							height: 3000,
							width: 2000,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0186505",
											nameText: { text: "Bryan Cranston" },
											primaryImage: {
												__typename: "Image",
												id: "rm1640347136",
												url: "https://m.media-amazon.com/images/M/MV5BMTA2NjEyMTY4MTVeQTJeQWpwZ15BbWU3MDQ5NDAzNDc@._V1_.jpg",
												height: 2048,
												width: 1369,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0666739",
											nameText: { text: "Aaron Paul" },
											primaryImage: {
												__typename: "Image",
												id: "rm1237559552",
												url: "https://m.media-amazon.com/images/M/MV5BMTY1OTY5NjI5NV5BMl5BanBnXkFtZTcwODA4MjM0OA@@._V1_.jpg",
												height: 1024,
												width: 681,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0348152",
											nameText: { text: "Anna Gunn" },
											primaryImage: {
												__typename: "Image",
												id: "rm927500544",
												url: "https://m.media-amazon.com/images/M/MV5BMTU0NTk3MDQ3OV5BMl5BanBnXkFtZTcwNDY3NzQ4Mg@@._V1_.jpg",
												height: 400,
												width: 280,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1336827",
											nameText: { text: "Betsy Brandt" },
											primaryImage: {
												__typename: "Image",
												id: "rm2799010048",
												url: "https://m.media-amazon.com/images/M/MV5BMTU2OTQ3MzcxMV5BMl5BanBnXkFtZTcwMTk2MTk3Mw@@._V1_.jpg",
												height: 2048,
												width: 1354,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce4211060", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po6890587",
							plotText: {
								plainText:
									"A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Crime", text: "Crime" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 9.5 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt14452776",
						titleText: { text: "The Bear", isOriginalTitle: true },
						originalTitleText: { text: "The Bear", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2022, endYear: null },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 23,
							year: 2022,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm4090916865",
							url: "https://m.media-amazon.com/images/M/MV5BZjE0MjBkNWMtOGUzZS00MzMyLTgwYjgtNTBkZWQ5YWRlMmM1XkEyXkFqcGc@._V1_.jpg",
							height: 1000,
							width: 675,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm2087739",
											nameText: { text: "Jeremy Allen White" },
											primaryImage: {
												__typename: "Image",
												id: "rm4164957953",
												url: "https://m.media-amazon.com/images/M/MV5BNmZhMTdkNjgtMjAwNS00MjJjLWE4OGEtYjhiNTZkYmQxMmU3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
												height: 2305,
												width: 2942,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0609114",
											nameText: { text: "Ebon Moss-Bachrach" },
											primaryImage: {
												__typename: "Image",
												id: "rm2151167489",
												url: "https://m.media-amazon.com/images/M/MV5BODJiNzIyMDktZDc5MC00ZDVmLTg1NWUtNzgyNzNhNGY3ZTJjXkEyXkFqcGdeQXVyMTI2Nzk3NzI4._V1_.jpg",
												height: 2000,
												width: 3000,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm8731249",
											nameText: { text: "Ayo Edebiri" },
											primaryImage: {
												__typename: "Image",
												id: "rm3917362433",
												url: "https://m.media-amazon.com/images/M/MV5BYTYzNzRkM2QtYmE1OS00OGJkLWFkYWYtMzZhMjQzY2IyYzhjXkEyXkFqcGdeQXVyMTYyNjg2MzUz._V1_.jpg",
												height: 5120,
												width: 3415,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1154919",
											nameText: { text: "Liza Colón-Zayas" },
											primaryImage: {
												__typename: "Image",
												id: "rm2739133953",
												url: "https://m.media-amazon.com/images/M/MV5BNDgwZTBiMGEtOWI1NS00MGE3LWFkMDQtMGE5MjQ4NTlkMGEyXkEyXkFqcGdeQXVyNjQ5MDYyODc@._V1_.jpg",
												height: 1282,
												width: 952,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce3618258", ratingsBody: null, ratingReason: null, rating: "TV-MA" },
						plot: {
							id: "po5830228",
							plotText: {
								plainText:
									"A young chef from the fine dining world returns to Chicago to run his family's sandwich shop.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.6 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt1632701",
						titleText: { text: "Suits", isOriginalTitle: true },
						originalTitleText: { text: "Suits", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2011, endYear: 2019 },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 6,
							day: 23,
							year: 2011,
							country: { id: "US" },
							restriction: null,
							attributes: [],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm2076613889",
							url: "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
							height: 1000,
							width: 680,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm0532683",
											nameText: { text: "Gabriel Macht" },
											primaryImage: {
												__typename: "Image",
												id: "rm2274920192",
												url: "https://m.media-amazon.com/images/M/MV5BNzA2ODkwMjc3MV5BMl5BanBnXkFtZTcwOTc4ODYwNA@@._V1_.jpg",
												height: 400,
												width: 256,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1140666",
											nameText: { text: "Patrick J. Adams" },
											primaryImage: {
												__typename: "Image",
												id: "rm2844180736",
												url: "https://m.media-amazon.com/images/M/MV5BMjEwNDUyNjM5NF5BMl5BanBnXkFtZTgwMzA3NjY0MjE@._V1_.jpg",
												height: 2048,
												width: 1366,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1620783",
											nameText: { text: "Meghan Markle" },
											primaryImage: {
												__typename: "Image",
												id: "rm2193926400",
												url: "https://m.media-amazon.com/images/M/MV5BMjExNzU3ODY3NF5BMl5BanBnXkFtZTcwMjI0MzM0OA@@._V1_.jpg",
												height: 588,
												width: 571,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1423048",
											nameText: { text: "Sarah Rafferty" },
											primaryImage: {
												__typename: "Image",
												id: "rm3577093633",
												url: "https://m.media-amazon.com/images/M/MV5BZDA2NTdjMGMtOTBlNi00YzUyLWJjNDEtNDEyODJiZDcyMjA5XkEyXkFqcGdeQXVyNzk5NTU3OA@@._V1_.jpg",
												height: 1631,
												width: 1042,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce0557457", ratingsBody: null, ratingReason: null, rating: "TV-14" },
						plot: {
							id: "po1453252",
							plotText: {
								plainText:
									"On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Comedy", text: "Comedy" } },
								{ genre: { genreId: "Drama", text: "Drama" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.4 },
						canRate: { isRatable: true },
					},
				},
				{
					node: {
						__typename: "Title",
						id: "tt4574334",
						titleText: { text: "Stranger Things", isOriginalTitle: true },
						originalTitleText: { text: "Stranger Things", isOriginalTitle: true },
						releaseYear: { __typename: "YearRange", year: 2016, endYear: 2025 },
						releaseDate: {
							__typename: "ReleaseDate",
							month: 7,
							day: 15,
							year: 2016,
							country: { id: "US" },
							restriction: null,
							attributes: [{ id: "internet", text: "internet" }],
							displayableProperty: { qualifiersInMarkdownList: null },
						},
						titleType: {
							__typename: "TitleType",
							id: "tvSeries",
							text: "TV Series",
							categories: [{ id: "tv", text: "TV", value: "tv" }],
							canHaveEpisodes: true,
							isEpisode: false,
							isSeries: true,
							displayableProperty: { value: { plainText: "TV Series" } },
						},
						primaryImage: {
							__typename: "Image",
							id: "rm3336115457",
							url: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
							height: 1350,
							width: 1080,
						},
						metacritic: null,
						principalCredits: [
							{
								credits: [
									{
										name: {
											__typename: "Name",
											id: "nm5611121",
											nameText: { text: "Millie Bobby Brown" },
											primaryImage: {
												__typename: "Image",
												id: "rm354844160",
												url: "https://m.media-amazon.com/images/M/MV5BMjA5NzA0NzQzMF5BMl5BanBnXkFtZTgwMTQxNjUzNjM@._V1_.jpg",
												height: 2048,
												width: 1365,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm6016511",
											nameText: { text: "Finn Wolfhard" },
											primaryImage: {
												__typename: "Image",
												id: "rm3499148545",
												url: "https://m.media-amazon.com/images/M/MV5BYjlkNTdhNjYtYTFhNy00MTUxLWIwNTgtMTE5NTY5Y2I3MDc0XkEyXkFqcGdeQXVyNjY5NDgzNjQ@._V1_.jpg",
												height: 7967,
												width: 5312,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm0000213",
											nameText: { text: "Winona Ryder" },
											primaryImage: {
												__typename: "Image",
												id: "rm2885846272",
												url: "https://m.media-amazon.com/images/M/MV5BMTQ3NzM3MTc2NF5BMl5BanBnXkFtZTcwODMxNjA0NA@@._V1_.jpg",
												height: 2048,
												width: 1505,
											},
										},
									},
									{
										name: {
											__typename: "Name",
											id: "nm1092086",
											nameText: { text: "David Harbour" },
											primaryImage: {
												__typename: "Image",
												id: "rm1731938816",
												url: "https://m.media-amazon.com/images/M/MV5BZTc5ODUzMDAtZGFhZS00NmExLTlhYWYtZDY0NGI2MGMwYTIzXkEyXkFqcGdeQXVyODY0MzQyODc@._V1_.jpg",
												height: 2593,
												width: 2087,
											},
										},
									},
								],
							},
						],
						certificate: { id: "ce0889268", ratingsBody: null, ratingReason: null, rating: "TV-14" },
						plot: {
							id: "po2383221",
							plotText: {
								plainText:
									"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
							},
						},
						titleGenres: {
							__typename: "TitleGenres",
							genres: [
								{ genre: { genreId: "Drama", text: "Drama" } },
								{ genre: { genreId: "Fantasy", text: "Fantasy" } },
								{ genre: { genreId: "Horror", text: "Horror" } },
								{ genre: { genreId: "Mystery", text: "Mystery" } },
								{ genre: { genreId: "Sci-Fi", text: "Sci-Fi" } },
								{ genre: { genreId: "Thriller", text: "Thriller" } },
							],
						},
						ratingsSummary: { aggregateRating: 8.7 },
						canRate: { isRatable: true },
					},
				},
			],
			pageInfo: {
				__typename: "PageInfo",
				hasNextPage: true,
				hasPreviousPage: false,
				startCursor: "eyJlc1Rva2VuIjpbIjEiXSwiZmlsdGVyIjoie1widG9wTWV0ZXJUaXRsZXNUeXBlXCI6XCJUVlwifSJ9",
				endCursor: "eyJlc1Rva2VuIjpbIjMzIl0sImZpbHRlciI6IntcInRvcE1ldGVyVGl0bGVzVHlwZVwiOlwiVFZcIn0ifQ==",
			},
		},
	},
};

export default popularsData;
