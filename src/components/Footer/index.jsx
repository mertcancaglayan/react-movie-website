import React from "react";
import FooterIcons from "./FooterIcons";
import CopyRight from "./CopyRight";
import FooterNav from "./FooterNav";
import "./index.css";

function Footer() {
	return (
		<footer id="footer" className="footer">
			<FooterIcons />
			<FooterNav />
			<CopyRight />
		</footer>
	);
}

export default Footer;
