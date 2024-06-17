import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = React.memo(() => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = useCallback(
		(event) => {
			event.preventDefault();

			if (!searchTerm.trim()) return;

			navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
		},
		[navigate, searchTerm],
	);

	const handleChange = useCallback((e) => {
		setSearchTerm(e.target.value);
	}, []);

	return (
		<div className="search">
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
				<button className="searchBtn" type="submit">
					<FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
				</button>
			</form>
		</div>
	);
});

export default Search;
