import React from "react";
import "./MenuButton.scss";

const MenuButton = ({isOpened, openMobNav}) => {

// 	useEffect(() => {
// 		const f = () => {
// 			if (isOpened) {
// 				dispatch(openMobNav(false));
// 			}
// 		};
//     console.log(isOpened)
//     document.addEventListener("click", f);
// 
// 		return () => {
// 			document.removeEventListener("click", f);
// 		};
// 	}, [isOpened]);

	return (
		<button
			className={
				isOpened ? "toggle__btn toggle__btn--opened" : "toggle__btn"
			}
			onClick={openMobNav}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};
export default MenuButton;
