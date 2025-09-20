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
		href: 'https://www.facebook.com/romario.trend?mibextid=wwXIfr&rdid=pEcr34F4BAM3ZHxw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KYdhrgyPa%2F%3Fmibextid%3DwwXIfr#',
		icon: <FaFacebookF />,
	},
	{
		id: 2,
		href: 'https://www.instagram.com/romario_traveler_sport/?igsh=MWhmMmV0YndheTZ4Yg%3D%3D&utm_source=qr#',
		icon: <FaInstagram />,
	},
	{
		id: 3,
		href: 'https://github.com/RomanFrontEndDeveloper',
		icon: <FaGithub />,
	},
	{
		id: 4,
		href: 'https://www.tiktok.com/@travelerromario234?_t=ZM-8zQAnaSeJUr&_r=1',
		icon: <FaTiktok />,
	},
	{
		id: 5,
		href: 'https://www.linkedin.com/feed/?legoTrackingToken=c34ZpnFFkTBxr71PqmgCc2UMfmlOrSdjtOoZsC5gr6litOoZp6Zdr6litOoVejAVejRApnhPpnlNpl9JtmUCjAZ9l4BjjR0Zuk9OpmhOjThBpShFtOpQrClQrCBvsClHpmlPnS9LqBYOtChxs6xzrDlxr3RAinhBpShFtOoMfmVLqnhFsSZgt6lDp6BT9z0Kc3RBsCZzkT9D9zROol1Ipl9OpOoZp6Zdr6lisCsCc3RKrSBQqndLk71RrT9D9zAVejAVfmhBt7dBtn5BkCRRjD1RrT9D9DhItm5CpmgZp4BMtmZOpOpejQBkildfk3RVgD9Bp79L9DhItm5CpmgZp4BQrClJpSlP9DhKpnhKqjRAinhLr7cCt6NRompBp3RAinhRrTBxr2oOtChxs6xzrDlxr3RBrm5epmtxs2pEt7tLsCsZp4BMs64CcPATejAOfmh9rCZFsT9BtyoOdPcQe3oPcPkNfmh9tioUcmoTd3xCcC4Ooj8Je6gMoyQVpCcQbjcSc34JdzcNoz4Ue30Zp4BQu6lQrCZz',
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
							target='_blank'
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
