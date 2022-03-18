import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import PostCard from "./../PostCard/PostCard";
import FilterButton from "./../FilterButton/FilterButton";
import "./Page.scss";

const Page = ({ pageKey, pageQuery }) => {
	const [items, setItems] = useState([]);
	const [visibleItems, setVisibleItems] = useState([]);
	const [filters, setFilters] = useState([]);
	const [filterQuery, setFilterQuery] = useState("");

	const dataBase = useSelector((store) => store.data);

	const filterData = (data, key, query) => {
		return data.filter((item) => item[key] === query);
	};

	const getTypes = (array, query) => {
		const types = array.map((item) => item[query]);
		return [...new Set(types)];
	};

	const clickFilter = useCallback((query) => setFilterQuery(query), []);

	useMemo(() => {
		const pageItems = filterData(dataBase, pageKey, pageQuery);
		setItems(pageItems);
		setFilterQuery("");

		const types = getTypes(pageItems, "type");
		setFilters(types);
	}, [dataBase, pageKey, pageQuery]);

	useEffect(() => {
		if (filterQuery === "") {
			setVisibleItems(items);
		} else {
			const filteredItems = filterData(items, "type", filterQuery);

			setVisibleItems(filteredItems);
		}
	}, [filterQuery, items]);

	return (
		<>
			<nav className="sidebar">
				<ul className="sidebar-navigation">
					<li className="sidebar-item">
						<FilterButton
							selector={
								filterQuery === ""
									? "sidebar-heading active"
									: "sidebar-heading"
							}
							title={pageQuery}
							query={""}
							clickFilter={clickFilter}
						/>
					</li>
					{filters.length > 1 &&
						filters.map((item, index) => (
							<li className="sidebar-item">
								<FilterButton
									selector={
										filterQuery === item
											? "sidebar-button active"
											: "sidebar-button"
									}
									title={item}
									query={item}
									clickFilter={clickFilter}
									key={"b" + index}
								/>
							</li>
						))}
				</ul>
			</nav>

			<main className="main-content">
				<ul className="main-page-content">
					{visibleItems.map((item) => (
						<PostCard
							title={item.title}
							worktime={item.worktime}
							adress={item.adress}
							phone={item.phone}
							description={item.description}
							key={"i" + item.id}
						/>
					))}
				</ul>
			</main>
		</>
	);
};

export default Page;
