import './Home.css';
import {
	FaFacebookF,
	FaInstagram,
	FaGithub,
	FaTiktok,
	FaLinkedin,
	FaArrowCircleRight,
} from 'react-icons/fa';
import { mainImg } from '../../assets/images';
import { FaArrowDownLong } from 'react-icons/fa6';
import { motion } from 'motion/react';
import {
	iconVariants,
	motionVariants,
	imgVariants,
	slideInVariants,
} from '../../utils/animation';

const icons = [
	{
		id: 1,
		href: '',
		icon: <FaFacebookF />,
	},
	{
		id: 2,
		href: '',
		icon: <FaInstagram />,
	},
	{
		id: 3,
		href: '',
		icon: <FaGithub />,
	},
	{
		id: 4,
		href: '',
		icon: <FaTiktok />,
	},
	{
		id: 5,
		href: '',
		icon: <FaLinkedin />,
	},
];

const Home = () => {
	return (
		// home section
		<section className='home' id='home'>
			<div className='container home-wrapper'>
				<div className='media-icons'>
					{icons.map((item, index) => (
						<motion.a
							href={item.href}
							key={item.id}
							custom={index}
							variants={iconVariants}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: false, amount: 0.5 }}
						>
							{item.icon}
						</motion.a>
					))}
				</div>
				<div className='home-info'>
					<motion.h1
						custom={0}
						variants={slideInVariants('left', 0.5, 100, true)}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false, amount: 0.5 }}
					>
						Hello I'm Roman
					</motion.h1>
					<motion.h3
						custom={1}
						variants={slideInVariants('left', 0.7, 140, true)}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false, amount: 0.5 }}
					>
						I'm Front-end Developer
					</motion.h3>
					<motion.p
						custom={2}
						variants={slideInVariants('left', 0.9, -100, true)}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false, amount: 0.5 }}
					>
						I create stunning websites for your business, with high
						expertise in web design and development.
					</motion.p>
					<motion.a
						href=''
						className='home-info-link inner-info-link'
						custom={4}
						variants={slideInVariants('left', 0.6, 160, true)}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false, amount: 0.5 }}
					>
						Contact me
						<FaArrowCircleRight />
					</motion.a>
				</div>
				<motion.div
					className='home-img'
					variants={slideInVariants('left', 0.6, -160, true)}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false, amount: 0.5 }}
				>
					<img src={mainImg} alt='mainImg' />
				</motion.div>
			</div>
			<a href='#about' className='scroll-down'>
				Scroll down
				<FaArrowDownLong />
			</a>
		</section>
		// end home section
	);
};

export default Home;
