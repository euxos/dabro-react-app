import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";
import "./Logo.scss";

const Logo = ({ controlMobNav }) => {
	return (
		<label className="Logo">
			<NavLink to={HOME_ROUTE} onClick={controlMobNav}>
				<img
					className="Logo__img"
					src={process.env.PUBLIC_URL + "trident.png"}
					alt="logo"
				/>
			</NavLink>
		</label>
	);
};

export default Logo;
