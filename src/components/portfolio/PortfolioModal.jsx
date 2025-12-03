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
					<div className='buttonsInModal'>
						<a
							href={item.description}
							target='_blank'
							className='goToProgect'
						>
							Go to Progect
						</a>
						<a
							href={item.github1}
							target='_blank'
							className='goToProgect'
						>
							Go to GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioModal;
