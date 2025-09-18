import React from 'react';
import './OurClients.css';
import { clientData } from '../../data/clientsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionTitle from '../sectionTitle/SectionTitle';

const OurClients = () => {
	return (
		<section className='section our-clients' id='clients'>
			<div className='container flex-center'>
				<SectionTitle title='Our Clients' subtitle='Our Clients' />

				<div className='our-clients-wrapper'>
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={30}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						loop={true}
						className='client-swiper'
					>
						{clientData.map((client) => (
							<SwiperSlide key={client.id}>
								<div className='swiper-slide swiper-client-block'>
									<div className='client-img'>
										<img
											src={client.imgSrc}
											alt={`Photo of ${client.name}`}
										/>
									</div>
									<div className='client-details'>
										<p>{client.description}</p>
										<h3>{client.name}</h3>
										<span>{client.position}</span>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default OurClients;
