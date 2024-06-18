import React from "react";
import footerListData from "../../data/footerListData";
import "./FooterNav.css";

function FooterNav() {
	return (
		<div className="footerNav">
			<ul>
				{footerListData.map((e) => {
					return (
						<li key={e._id}>
							<a href="/">{e.name}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default FooterNav;
