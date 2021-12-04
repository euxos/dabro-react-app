import React from "react";
import { pageTitles } from "../../utils/consts";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import Logo from '../Logo/Logo';

const Nav = () => {
	return (
		<nav className="Nav">
			<ul className="Nav__list">
				<li className="Nav__item">
				<Logo />
				</li>
				{pageTitles.map((page) => {
					const { id, title, link } = page;
					return (
						<li className="Nav__item" key={title + id}>
							<NavLink className="Nav__link" exact to={link}>
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
