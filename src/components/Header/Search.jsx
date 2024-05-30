import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
	return (
		<div className="search">
			<input type="text" placeholder="Search" />
			<FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
		</div>
	);
}

export default Search;
