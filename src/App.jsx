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
	ScrollToTop,
	ThemeToggle,
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
				<ScrollToTop />
				<ThemeToggle />
			</main>
			<Footer />
		</>
	);
}

export default App;
