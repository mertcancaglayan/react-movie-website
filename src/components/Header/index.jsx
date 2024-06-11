import React from "react";
import NavListItem from "./NavListItem";
import navListData from "../../data/navListData";
import Search from "./Search";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<Link to="/" className="logo">
				MovieS
			</Link>
			<nav>
				<ul className="nav">
					{navListData.map((e) => {
						return <NavListItem key={e._id} data={e} />;
					})}
				</ul>
			</nav>

			<Search />
		</header>
	);
}

export default Header;
