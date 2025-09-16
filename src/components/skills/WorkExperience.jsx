import { workexperience } from '../../data/workexperience';

const WorkExperience = () => {
	return (
		<div className='education work-exp'>
			<h3 className='work-exp-title'>Work & Experiens</h3>
			<div className='skills-info'>
				{workexperience.map((item, index) => (
					<div className='experiens-card' key={index}>
						<div className='uper'>
							<h3>{item.title}</h3>
							<h5>{item.employmentType}</h5>
							<span>{item.period}</span>
						</div>
						<div className='hr'></div>
						<h4 className='label'>{item.company}</h4>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default WorkExperience;
