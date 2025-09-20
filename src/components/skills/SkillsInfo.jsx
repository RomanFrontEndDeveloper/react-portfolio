import { motion } from 'motion/react';
import SectionTitle from '../sectionTitle/SectionTitle';
import Education from './Education';
import Skills from './Skills';
import './Skills.css';
import WorkExperience from './WorkExperience';
import { slideInVariants } from '../../utils/animation';

const SkillsInfo = () => {
	return (
		<section className='skills section' id='skills'>
			<div className='container flex-center'>
				<SectionTitle title='Skills' subtitle='Skills' />
				<div className='inner-content'>
					<motion.div
						className='skills-description'
						custom={0}
						variants={slideInVariants('top', 0.6, 50, true)}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false, amount: 0.5 }}
					>
						<h3>Edukation & Skills</h3>
						<p>
							For more than 2 years our I have been accomplishing
							enough with modern Web Development, new generation
							web and app programming language.
						</p>
					</motion.div>
					<div className='skills-info education-all'>
						<motion.div
							custom={1}
							variants={slideInVariants('top', 0.7, 50, true)}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: false, amount: 0.5 }}
						>
							<Education />
						</motion.div>
						<motion.div
							custom={2}
							variants={slideInVariants('top', 0.6, 50, true)}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: false, amount: 0.5 }}
						>
							<Skills />
						</motion.div>
					</div>
					<WorkExperience />
				</div>
			</div>
		</section>
	);
};

export default SkillsInfo;
