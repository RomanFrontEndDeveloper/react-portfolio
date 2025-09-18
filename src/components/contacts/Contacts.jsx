import React from 'react';
import './Contacts.css';
import SectionTitle from '../sectionTitle/SectionTitle';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const Contacts = () => {
	return (
		<section className='contact margin-top-contact section' id='contact'>
			<div className='container flex-center'>
				<SectionTitle title='Contact me' subtitle='Contact me' />
				<div className='contact-wrapper'>
					<ContactLeft />
					<ContactRight />
				</div>
			</div>
		</section>
	);
};

export default Contacts;
