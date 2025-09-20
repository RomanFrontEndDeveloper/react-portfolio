import React, { useState } from 'react';
import ServiceModal from './ServiceModal';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';

const ServiceItem = ({ services }) => {
	const [activeIndex, setactiveIndex] = useState(null);

	const openModal = (index) => {
		setactiveIndex(index);
	};

	const closeModal = () => {
		setactiveIndex(null);
	};

	return (
		<>
			{services.map((item, index) => (
				<motion.li
					className='services-container'
					key={index}
					custom={index}
					variants={slideInVariants('top', 0.6, 50, true)}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false, amount: 0.5 }}
				>
					<div className='service-card'>
						<item.icon className='services-icon' />
						<h3>{item.title}</h3>
						<div
							className='learn-more-btn'
							onClick={() => openModal(index)}
						>
							Learn More
							<FaLongArrowAltRight className='learn-more-icon' />
						</div>
					</div>
					<ServiceModal
						item={item}
						closeModal={closeModal}
						isActive={activeIndex === index}
					/>
				</motion.li>
			))}
		</>
	);
};

export default ServiceItem;
