import React from "react";
import "./MobileNav.scss";
import { pages } from "../../utils/consts";
import { NavLink } from "react-router-dom";

const MobileNav = ({ isVisible }) => {


	return (
		<nav className={isVisible ? "MobileNav" : "MobileNav MobileNav--hidden"}>
			<ul className="MobileNav__list">
				{pages.map((page) => {
					const { id, title, link } = page;
					return (
						<li className="MobileNav__item" key={title + id}>
							<NavLink
								className="MobileNav__link"
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
