import {
	Header,
	Footer,
	Home,
	About,
	Portfolio,
	Services,
	SkillsInfo,
	GetInTouch,
	OurClients,
	Contacts,
} from './components/index';

function App() {
	return (
		<>
			<Header />
			<main>
				<Home />
				<About />
				<SkillsInfo />
				<Services />
				<Portfolio />
				<GetInTouch />
				<OurClients />
				<Contacts />
			</main>
			<Footer />
		</>
	);
}

export default App;
