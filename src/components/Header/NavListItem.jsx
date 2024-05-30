import React, { Fragment } from "react";

function NavListItem({ data }) {
	return (
		<Fragment>
			<li>
				<a href={data.link}>{data.name}</a>
			</li>
		</Fragment>
	);
}

export default NavListItem;
