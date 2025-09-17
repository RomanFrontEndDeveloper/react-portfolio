import React from 'react';
import { FaXmark } from 'react-icons/fa6';

const PortfolioModal = ({ item, isModalOpen, closeModal }) => {
	return (
		<div>
			<div className={`portfolio-modal ${isModalOpen ? 'active' : ''}`}>
				<div className='portfolio-modal-body'>
					<FaXmark
						className='portfolio-clise-btn'
						onClick={closeModal}
					/>
					<h3>{item.title}</h3>
					<img src={item.imgSrc} alt={item.title} />
					<p>{item.description}</p>
				</div>
			</div>
		</div>
	);
};

export default PortfolioModal;
