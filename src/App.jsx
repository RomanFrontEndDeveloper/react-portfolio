import {
	Header,
	Footer,
	Home,
	About,
	//Clients,
	Portfolio,
	Services,
	SkillsInfo,
	//Contacts,
	GetInTouch,
	OurClients,
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
			</main>
			<Footer />
		</>
	);
}

export default App;
