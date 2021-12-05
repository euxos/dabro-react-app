import React from "react";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";
import "./Logo.scss";

const Logo = () => {
	return (
		<label className="Logo">
			<NavLink to={HOME_ROUTE}>

				{/* <svg className="Logo__img">
					<use href={process.env.PUBLIC_URL + "L0.svg"}></use>
				</svg>  */}


				<img
					className="Logo__img"
					src={process.env.PUBLIC_URL + "logo.svg"}
					alt="logo"
				/>
			</NavLink>
		</label>
	);
};

export default Logo;
