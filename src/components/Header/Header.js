import React, { useCallback, useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import MenuButton from "../MenuButton/MenuButton";
import MobileNav from "../MobileNav/MobileNav";
import "./Header.scss";

const Header = () => {
	const [isMobNavOpen, setMobNavOpen] = useState(false);

	const controlMobNav = useCallback(
		() => setMobNavOpen(!isMobNavOpen),
		[isMobNavOpen]
	);

	return (
		<header className="Header">
			<div className="Header__wrapper">
				<Logo
					isMobNavOpen={isMobNavOpen}
					controlMobNav={controlMobNav}
				/>
				<Nav />

				<MenuButton
					isOpened={isMobNavOpen}
					controlMobNav={controlMobNav}
				/>
				<MobileNav
					isVisible={isMobNavOpen}
					controlMobNav={controlMobNav}
				/>
			</div>
		</header>
	);
};

export default Header;
