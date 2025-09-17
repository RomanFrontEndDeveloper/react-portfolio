import {
	Header,
	Footer,
	Home,
	About,
	Clients,
	Portfolio,
	Services,
	SkillsInfo,
	Contacts,
	GetInTouch,
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
			</main>
			<Footer />
		</>
	);
}

export default App;
