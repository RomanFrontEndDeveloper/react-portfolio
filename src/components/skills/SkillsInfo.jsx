import SectionTitle from '../sectionTitle/sectionTitle';
import Education from './Education';
import Skills from './Skills';
import './Skills.css';
import WorkExperience from './WorkExperience';

const SkillsInfo = () => {
	return (
		<section className='skills section' id='skills'>
			<div className='container flex-center'>
				<SectionTitle title='Skills' subtitle='Skills' />
				<div className='inner-content'>
					<div className='skills-description'>
						<h3>Edukation & Skills</h3>
						<p>
							For more than 2 years our I have been accomplishing
							enough with modern Web Development, new generation
							web and app programming language.
						</p>
					</div>
					<div className='skills-info education-all'>
						<Education />
						<Skills />
					</div>
					<WorkExperience />
				</div>
			</div>
		</section>
	);
};

export default SkillsInfo;
