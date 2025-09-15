import {
	Header,
	Footer,
	Home,
	About,
	Clients,
	Portfolio,
	Services,
	Skills,
	Contacts,
} from './components/index';

function App() {
	return (
		<>
			<Header />
			<main>
				<Home />
				<About />
			</main>
			<Footer />
		</>
	);
}

export default App;
