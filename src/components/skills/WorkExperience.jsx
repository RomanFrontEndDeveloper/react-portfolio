import { workexperience } from '../../data/workexperience';
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';

const WorkExperience = () => {
	return (
		<div className='education work-exp'>
			<motion.h3
				className='work-exp-title'
				custom={4}
				variants={slideInVariants('top', 0.6, 50, true)}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
			>
				Work & Experiens
			</motion.h3>
			<div className='skills-info'>
				{workexperience.map((item, index) => (
					<motion.div
						className='experiens-card'
						custom={index}
						variants={slideInVariants('top', 0.6, 50, true)}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false, amount: 0.5 }}
						key={index}
					>
						<div className='uper'>
							<h3>{item.title}</h3>
							<h5>{item.employmentType}</h5>
							<span>{item.period}</span>
						</div>
						<div className='hr'></div>
						<h4 className='label'>{item.company}</h4>
						<p>{item.description}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default WorkExperience;
