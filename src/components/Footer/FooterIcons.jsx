import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import footerSocialIcons from "../../data/footerIconData";
import "./FooterIcons.css";

function FooterIcons() {
	return (
		<div className="socialIcons">
			{footerSocialIcons.map((e) => {
				return (
					<a href={e.link} key={e._id}>
						<FontAwesomeIcon className="icons" icon={e.icon} />
					</a>
				);
			})}
		</div>
	);
}

export default FooterIcons;
