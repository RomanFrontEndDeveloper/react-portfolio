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
				<div className='container'>
					<h1>React Portfolio</h1>
				</div>
				<About />
			</main>
			<Footer />
		</>
	);
}

export default App;
