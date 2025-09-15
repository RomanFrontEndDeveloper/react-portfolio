import './Home.css';
import {
	FaFacebookF,
	FaInstagram,
	FaGithub,
	FaTiktok,
	FaLinkedin,
	FaArrowCircleRight,
} from 'react-icons/fa';
import { mainImg } from '../../assets/images';
import { FaArrowDownLong } from 'react-icons/fa6';

const Home = () => {
	return (
		// home section
		<section className='home' id='home'>
			<div className='container home-wrapper'>
				<div className='media-icons'>
					<a
						href='https://www.facebook.com/romario.trend?mibextid=wwXIfr&rdid=pEcr34F4BAM3ZHxw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KYdhrgyPa%2F%3Fmibextid%3DwwXIfr#'
						target='_blank'
					>
						<FaFacebookF />
					</a>
					<a
						href='https://www.instagram.com/romario_traveler_sport/?igsh=MWhmMmV0YndheTZ4Yg%3D%3D&utm_source=qr#'
						target='_blank'
					>
						<FaInstagram />
					</a>
					<a
						href='https://github.com/RomanFrontEndDeveloper'
						target='_blank'
					>
						<FaGithub />
					</a>
					<a
						href='https://www.tiktok.com/@travelerromario234?_t=ZM-8zQAnaSeJUr&_r=1'
						target='_blank'
					>
						<FaTiktok />
					</a>
					<a
						href='https://www.linkedin.com/feed/?legoTrackingToken=c34ZpnFFkTBxr71PqmgCc2UMfmlOrSdjtOoZsC5gr6litOoZp6Zdr6litOoVejAVejRApnhPpnlNpl9JtmUCjAZ9l4BjjR0Zuk9OpmhOjThBpShFtOpQrClQrCBvsClHpmlPnS9LqBYOtChxs6xzrDlxr3RAinhBpShFtOoMfmVLqnhFsSZgt6lDp6BT9z0Kc3RBsCZzkT9D9zROol1Ipl9OpOoZp6Zdr6lisCsCc3RKrSBQqndLk71RrT9D9zAVejAVfmhBt7dBtn5BkCRRjD1RrT9D9DhItm5CpmgZp4BMtmZOpOpejQBkildfk3RVgD9Bp79L9DhItm5CpmgZp4BQrClJpSlP9DhKpnhKqjRAinhLr7cCt6NRompBp3RAinhRrTBxr2oOtChxs6xzrDlxr3RBrm5epmtxs2pEt7tLsCsZp4BMs64CcPATejAOfmh9rCZFsT9BtyoOdPcQe3oPcPkNfmh9tioUcmoTd3xCcC4Ooj8Je6gMoyQVpCcQbjcSc34JdzcNoz4Ue30Zp4BQu6lQrCZz'
						target='_blank'
					>
						<FaLinkedin />
					</a>
				</div>
				<div className='home-info'>
					<h1>Hello I'm Roman</h1>
					<h3>I'm Front-end Developer</h3>
					<p>
						I create stunning websites for your business, with high
						expertise in web design and development.
					</p>
					<a href='' className='home-info-link inner-info-link'>
						Contact me
						<FaArrowCircleRight />
					</a>
				</div>
				<div className='home-img'>
					<img src={mainImg} alt='mainImg' />
				</div>
			</div>
			<a href='#about' className='scroll-down'>
				Scroll down
				<FaArrowDownLong />
			</a>
		</section>
		// end home section
	);
};

export default Home;
