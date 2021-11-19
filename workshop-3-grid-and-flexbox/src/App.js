import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import Main from './components/Main';
import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
	const images = [
		{ imageNumber: 1, description: 'Super Saiyan Goku instant transmission' },
		{ imageNumber: 2, description: 'Z Force' },
		{ imageNumber: 3, description: 'Super Saiyan Goku powering up' },
		{ imageNumber: 4, description: 'Super Saiyan Vegito' },
		{ imageNumber: 5, description: 'Goku with Arale' },
		{
			imageNumber: 6,
			description: 'Goku and Vegeta, with Yamcha and Tien in the background',
		},
		{ imageNumber: 7, description: 'Omega Shenron realistic' },
		{ imageNumber: 8, description: 'Perfect Cell realistic' },
		{ imageNumber: 9, description: 'Good Majin Buu realistic' },
		{ imageNumber: 10, description: 'Imperfect Cell realistic' },
		{ imageNumber: 11, description: 'Frieza Final Form Realistic' },
		{ imageNumber: 12, description: 'Evil Adult Buu realistic' },
	];

	return (
		<div className="container">
			<Logo />
			<Header />
			<Profile />
			<Nav />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
