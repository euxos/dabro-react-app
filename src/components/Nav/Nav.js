import React from "react";
import { NavLink } from "react-router-dom";

import { pages } from "../../utils/consts";
import "./Nav.scss";

const Nav = () => {
	return (
		<nav className="Nav">
			<ul className="Nav__list">
				{pages.map((page) => {
					const { id, title, link } = page;
					return (
						<li className="Nav__item" key={title + id}>
							<NavLink
								className="Nav__link"
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

export default Nav;
