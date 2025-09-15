import React from 'react';
import './Nav.css';
import { Link } from 'react-scroll';

const Nav = ({ isMenuOpen }) => {
	const items = [
		'home',
		'about',
		'skills',
		'services',
		'portfolio',
		'clients',
		'contact',
	];

	return (
		<nav className={isMenuOpen ? 'nav active' : 'nav'}>
			<div className={isMenuOpen ? 'nav-ul-menu active' : 'nav-ul-menu'}>
				{items.map((item, index) => (
					<Link to={item} key={index} className='nav-link'>
						{item}
					</Link>
				))}
			</div>

			{/* <ul className='nav-ul-menu'>
				<li className='nav_li-item'>
					<a href='#home' className='nav-link active'>
						Home
					</a>
				</li>
				<li className='nav_li-item'>
					<a href='#about' className='nav-link'>
						About
					</a>
				</li>
				<li className='nav_li-item'>
					<a href='#skills' className='nav-link'>
						Skills
					</a>
				</li>
				<li className='nav_li-item'>
					<a href='#services' className='nav-link'>
						Services
					</a>
				</li>
				<li className='nav_li-item'>
					<a href='#portfolio' className='nav-link'>
						Portfolio
					</a>
				</li>
				<li className='nav_li-item'>
					<a href='#contact' className='nav-link'>
						Contact
					</a>
				</li>
			</ul> */}
		</nav>
	);
};

export default Nav;
