import React from "react";

import "./FilterButton.scss";

const FilterButton = ({ title, query, clickFilter, selector }) => {
	return (
		<div
			className={selector}
			onClick={() => clickFilter(query)}
		>
			{title}
		</div>
	);
};

export default FilterButton;
