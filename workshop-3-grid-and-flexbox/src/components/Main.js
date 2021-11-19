import React from 'react';
import Image from './Image';
import './styles/Main.css';

function Main() {
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
		<main className="Main">
			<div className="gallery-container">
				{images.map(({ imageNumber, description }, index) => (
						<Image
							imageNumber={imageNumber}
							description={description}
							key={`image-${index}`}
						/>
				))}
			</div>
		</main>
	);
}

export default Main;
