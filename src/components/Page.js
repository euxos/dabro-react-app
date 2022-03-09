import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard/PostCard";
import "../components/Main/Main.scss";

const Page = ({title}) => {
	const dataBase = useSelector((store) => store.dataBase);
	const items = dataBase.filter((item) => item.category === title);

	return (
		<div className="Main__wrapper">
			<ul className="Main__list">
				{items.map((item) => (
					<PostCard
						title={item.title}
						worktime={item.worktime}
						adress={item.adress}
						phone={item.phone}
						description={item.description}
						key={item.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default Page;
