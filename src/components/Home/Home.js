import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { pages } from "../../utils/consts";
import "../Page/Page.scss";
import "../FilterButton/FilterButton.scss";

import "./Home.scss";

const Home = () => {
	const {title, phone, note, description, postscriptum} = useSelector((store) => store.note);

	return (
		<>
			<nav className="sidebar">
				<ul className="sidebar-navigation">
					<li className="sidebar-item">
						<h3 className="sidebar-heading active">Пам'ятка</h3></li>
					{pages.map((page) => {
						const { id, title, link } = page;
						return (
							<li className="sidebar-item" key={id + title}>
								<NavLink className="sidebar-button" to={link}>{title}</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>

			<main className="main-page-content">
				<div className="home-description">
					<h3 className="home-h3">{title}</h3>
					<p className="home-note">
						{note}
						<a className="home-phone"  href={`tel:${phone}`}>
						{phone}
						</a>
					
					</p>
					<p className="home-note">{description}</p>
					<h2>{postscriptum}</h2>
				</div>
			</main>
		</>
	);
};

export default Home;
