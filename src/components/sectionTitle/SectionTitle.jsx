import './SectionTitle.css';
import { titleVariants, subTitleVariants } from '../../utils/animation';
import { motion as Motion } from 'motion/react';

const SectionTitle = ({ title, subtitle }) => {
	return (
		<>
			<motion.h2
				className='inner-title'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
				variants={titleVariants}
			>
				{title}
			</motion.h2>
			<motion.h3
				className='inner-second-title'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
				variants={subTitleVariants}
			>
				{subtitle}
			</motion.h3>
		</>
	);
};

export default SectionTitle;
