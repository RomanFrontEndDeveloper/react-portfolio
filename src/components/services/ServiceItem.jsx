import React, { useState } from 'react';
import ServiceModal from './ServiceModal';
import { FaLongArrowAltRight } from 'react-icons/fa';

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
				<li className='services-container' key={index}>
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
				</li>
			))}
		</>
	);
};

export default ServiceItem;
