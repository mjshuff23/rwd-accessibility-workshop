import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import Main from './components/Main';
import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
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
