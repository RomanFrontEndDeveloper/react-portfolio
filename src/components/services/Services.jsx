import './Services.css';
import SectionTitle from '../sectionTitle/sectionTitle';
import ServiceItem from './ServiceItem';
import { services } from '../../data/services';
const Services = () => {
	return (
		<section className='services section' id='services'>
			<div className='container flex-center'>
				<SectionTitle title='Services' subtitle='Services' />
				<div className='serwices-wrapper'>
					<h3 className='services-description'>My Experience</h3>
					<ul className='services-list'>
						<ServiceItem services={services} />
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Services;
