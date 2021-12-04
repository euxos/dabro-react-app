import React from "react";
import "./MobileNav.scss";
import { pageTitles } from "../../utils/consts";
import { NavLink } from "react-router-dom";

const MobileNav = ({ isMobile }) => {
	return (
		<nav className={isMobile ? "MobileNav" : "MobileNav MobileNav--hidden"}>
			<ul className="MobileNav__list">
				{pageTitles.map((page) => {
					const { id, title, link } = page;
					return (
						<li className="MobileNav__item" key={title + id}>
							<NavLink
								className="MobileNav__link"
								exact
								to={link}
							>
								{title}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default MobileNav;
