import React from 'react';
import './About.css';
import { aboutImg } from '../../assets/images';
import { FaDownload } from 'react-icons/fa';
import SectionTitle from '../sectionTitle/SectionTitle';

const About = () => {
	return (
		<section className='about section' id='about'>
			<div className='container flex-center'>
				<SectionTitle title='About me' subtitle='About me' />
				<div className='about-wrapper'>
					<div className='about-img'>
						<img src={aboutImg} alt='aboutImg' />
					</div>
					<div className='about-info'>
						<div className='description'>
							<h3>I'm Roman</h3>
							<h4>
								A Lead <span> Front-End Developer </span>
								<span id='dark-span'> based in </span>
								<span> Ukraine </span>
							</h4>
							<p>
								I design and develop services for customers
								specializing in creating stylish, modern
								websites, web services, and online stores. My
								passion is to design digital user experiences
								through meaningful interactions. Check out my
								Portfolio.
							</p>
						</div>
						<ul className='proffesional-list'>
							<li className='list-item'>
								<span className='number'>2+</span>
								<span className='text'>Years of experiens</span>
							</li>
							<li className='list-item'>
								<span className='number'>100+</span>
								<span className='text'>Happy Customers</span>
							</li>
							<li className='list-item'>
								<span className='number'>5+</span>
								<span className='text'>Success Progect</span>
							</li>
						</ul>
						<a href='' className='inner-info-link'>
							Download
							<FaDownload />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
