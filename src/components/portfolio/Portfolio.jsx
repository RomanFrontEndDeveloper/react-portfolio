import './Portfolio.css';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../sectionTitle/SectionTitle';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => (
	<section className='portfolio section' id='portfolio'>
		<div className='container flex-center'>
			<SectionTitle title='Portfolio' subtitle='Portfolio' />
			<div className='portfolio-wrapper'>
				{portfolioData.map((item, index) => {
					return (
						<PortfolioItem
							key={item.id}
							item={item}
							index={index}
						/>
					);
				})}
			</div>
		</div>
	</section>
);

export default Portfolio;
