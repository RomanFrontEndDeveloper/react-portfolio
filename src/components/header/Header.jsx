import React, { useState, useEffect } from 'react';
import './Header.css';
import Nav from '../nav/Nav';
import { FaXing } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { RemoveScroll } from 'react-remove-scroll';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleMenuClick = () => {
		setIsMenuOpen(false);
	};

	const handleScroll = () => {
		setIsSticky(window.scrollY > 0);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={isSticky ? 'header sticky' : 'header'}>
			<div className='container'>
				<div className='header-wrapper'>
					<a href='' className='logo'>
						Roman
					</a>
					<RemoveScroll enabled={isMenuOpen}>
						<Nav
							isMenuOpen={isMenuOpen}
							handleMenuClick={handleMenuClick}
						/>
					</RemoveScroll>
					<div className='nav-menu-btn' onClick={toggleMenu}>
						{isMenuOpen ? <FaXing /> : <FaBarsStaggered />}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
