import React, { useState, useEffect } from 'react';
import PortfolioModal from './PortfolioModal';
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';

const PortfolioItem = ({ item, index }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
		};
	}, [isModalOpen]);

	return (
		<motion.div
			className='portfolio-img-card'
			custom={index}
			variants={slideInVariants('top', 0.6, 50, true)}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: false, amount: 0.5 }}
		>
			<div className='img-card' onClick={openModal}>
				<div className='overlay'></div>
				<div className='info'>
					<h3>{item.title}</h3>
					<span>{item.category}</span>
				</div>
				<img src={item.imgSrc} alt={item.title} />
			</div>

			{isModalOpen && (
				<PortfolioModal
					item={item}
					isModalOpen={isModalOpen}
					closeModal={closeModal}
				/>
			)}
		</motion.div>
	);
};

export default PortfolioItem;
