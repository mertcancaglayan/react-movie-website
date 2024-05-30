import React from "react";
import NavListItem from "./NavListItem";
import navListData from "../../data/navListData";
import Search from "./Search";
import './header.css';


function Header() {
	return (
		<header>
			<a href="/" className="logo">
				MovieS
			</a>
			<ul className="nav">
				{navListData.map((e) => {
					return <NavListItem key={e._id} data={e} />;
				})}
			</ul>
            <Search/>
		</header>
	);
}

export default Header;
