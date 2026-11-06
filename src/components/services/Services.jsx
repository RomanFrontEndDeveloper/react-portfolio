import './Services.css';
import SectionTitle from '../sectionTitle/SectionTitle';
import ServiceItem from './ServiceItem';
import { services } from '../../data/services';
import { motion as Motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';

const Services = () => {
    return (
        <section className='services section' id='services'>
            <div className='container flex-center'>
                <SectionTitle title='Services' subtitle='Services' />

                <div className='serwices-wrapper'>
                    <Motion.h3
                        className='services-description'
                        custom={1}
                        variants={slideInVariants('top', 0.6, 50, true)}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        My Experience
                    </Motion.h3>

                    <ul className='services-list'>
                        <ServiceItem services={services} />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;