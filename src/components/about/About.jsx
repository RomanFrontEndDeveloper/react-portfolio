import React from 'react';
import './About.css';
import { aboutImg } from '../../assets/images';
import { FaDownload } from 'react-icons/fa';
import SectionTitle from '../sectionTitle/SectionTitle';
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';
import { profList } from '../../data/profList';

const About = () => {
	return (
		<section className='about section' id='about'>
			<div className='container flex-center'>
				<SectionTitle title='About me' subtitle='About me' />
				<div className='about-wrapper'>
					<motion.div
						variants={slideInVariants('left', 0.9, 100, true)}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false, amount: 0.5 }}
					>
						<img src={aboutImg} alt='aboutImg' />
					</motion.div>
					<div className='about-info'>
						<div className='description'>
							<motion.h3
								custom={0}
								variants={slideInVariants(
									'right',
									0.5,
									50,
									true
								)}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: false, amount: 0.5 }}
							>
								I'm Roman
							</motion.h3>
							<motion.h4
								custom={0}
								variants={slideInVariants(
									'left',
									0.5,
									100,
									true
								)}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: false, amount: 0.5 }}
							>
								A Lead <span> Front-End Developer </span>
								<span id='dark-span'> based in </span>
								<span> Ukraine </span>
							</motion.h4>
							<motion.p
								custom={0}
								variants={slideInVariants(
									'right',
									0.5,
									100,
									true
								)}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: false, amount: 0.5 }}
							>
								I design and develop services for customers
								specializing in creating stylish, modern
								websites, web services, and online stores. My
								passion is to design digital user experiences
								through meaningful interactions. Check out my
								Portfolio.
							</motion.p>
						</div>
						<ul className='proffesional-list'>
							{profList.map((item, index) => (
								<motion.li
									className='list-item'
									key={item.id}
									custom={index}
									variants={slideInVariants(
										'right',
										0.5,
										50,
										true
									)}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: false, amount: 0.5 }}
								>
									<span className='number'>
										{item.number}
									</span>
									<span className='text'>{item.text}</span>
								</motion.li>
							))}
						</ul>
						<motion.a
							href=''
							className='inner-info-link'
							custom={3}
							variants={slideInVariants('bottom', 0.7, 70, false)}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: false, amount: 0.5 }}
						>
							Download
							<FaDownload />
						</motion.a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
