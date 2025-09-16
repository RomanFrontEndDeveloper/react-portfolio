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
} from './components/index';

function App() {
	return (
		<>
			<Header />
			<main>
				<Home />
				<About />
				<SkillsInfo />
			</main>
			<Footer />
		</>
	);
}

export default App;
