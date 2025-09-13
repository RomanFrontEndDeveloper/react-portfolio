import React from 'react';
import './Home.css';
import { mainImg } from '../../assets/images';
const Home = () => {
	return (
		<div>
			<h1 className='home'>Home</h1>
			<img src={mainImg} alt='main img' />
		</div>
	);
};

export default Home;
