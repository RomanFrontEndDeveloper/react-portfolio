import React from 'react';
import './GetInTouch.css';
import { FaPaperPlane } from 'react-icons/fa';
import { motion as Motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';

const GetInTouch = () => {
    return (
        <section className='get-in-touch sub-section'>
            <div className='container flex-center'>
                <div className='contact-card'>
                    <Motion.div
                        className='title'
                        variants={slideInVariants('left', 0.6, 90, false)}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <h4>LET'S TALK</h4>
                        <h3>ABOUT YOUR</h3>
                        <h2>NEXT PROJECT</h2>
                    </Motion.div>

                    <Motion.a
                        href='#contact'
                        className='get-in-touch-link inner-info-link'
                        variants={slideInVariants('right', 0.6, 90, false)}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        Contact me
                        <FaPaperPlane />
                    </Motion.a>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;