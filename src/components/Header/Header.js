import React, { useCallback, useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import MenuButton from "../MenuButton/MenuButton";
import MobileNav from "../MobileNav/MobileNav";
import "./Header.scss";

const Header = () => {
	const [isMobNavOpen, setMobNavOpen] = useState(false);

  console.log(isMobNavOpen);

	const openMobNav = useCallback(
		() => setMobNavOpen(!isMobNavOpen),
		[isMobNavOpen]
	);

	//   useEffect(() => {
	//     const f = () => {
	//       if (mobNavOpened) {
	//         setMobNavOpened(false);
	//       };
	//     };
	//     document.addEventListener("click", f)
	//
	//     return () => { document.removeEventListener('click', f) }
	//
	//   }, [mobNavOpened])

	return (
		<header className="Header">
			<div className="Header__wrapper">
				<Logo />
				<Nav />

				<MenuButton isOpened={isMobNavOpen} openMobNav={openMobNav} />
				<MobileNav isVisible={isMobNavOpen} />
			</div>
		</header>
	);
};

export default Header;
