import React from "react";

import "./FilterButton.scss";

const FilterButton = ({ title, query, clickFilter, selector }) => {
	return (
		<button
			className={selector}
			onClick={() => clickFilter(query)}
		>
			{title}
		</button>
	);
};

export default FilterButton;
