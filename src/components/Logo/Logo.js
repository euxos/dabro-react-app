import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";
import "./Logo.scss"

const Logo = () => {
	return (
		<NavLink 
			to={HOME_ROUTE}>
			<img
				className="Logo"
				src={process.env.PUBLIC_URL + "logo.jpg"}
				alt="logo"
			/>
		</NavLink>
	);
};

export default Logo;
