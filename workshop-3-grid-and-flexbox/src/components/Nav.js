import React from 'react';
import './styles/Nav.css';

function Nav() {
	return (
		<nav className="Nav">
			<a
				href="https://en.wikipedia.org/wiki/Dragon_Ball_Z"
				title="Dragon Ball Z WikiPedia Page"
				target="_blank"
				rel="noreferrer"
			>
				Wikipedia
			</a>
			<a
				href="https://twitter.com/dragonballz"
				title="Dragon Ball Z Twitter"
				target="_blank"
				rel="noreferrer"
			>
				Twitter
			</a>
			<a
				href="http://www.dragonballz.com/"
				title="Dragon Ball Z Official Site"
				target="_blank"
				rel="noreferrer"
			>
				Official Site
			</a>
		</nav>
	);
}

export default Nav;
