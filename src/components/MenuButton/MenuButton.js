import React from "react";
import "./MenuButton.scss";

const MenuButton = ({ isOpened, controlMobNav }) => {
	return (
		<button
			className={
				isOpened ? "toggle__btn toggle__btn--opened" : "toggle__btn"
			}
			onClick={controlMobNav}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};
export default MenuButton;
