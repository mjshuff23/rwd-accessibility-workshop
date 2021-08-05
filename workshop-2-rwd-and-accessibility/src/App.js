import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

function App() {
	return (
		<>
			<NavBar />
			<Header />
			<main>
				<SectionOne />
				<SectionTwo />
			</main>
		</>
	);
}

export default App;
