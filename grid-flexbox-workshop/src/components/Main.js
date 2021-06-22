import React from 'react';
import Image from './Image';

function Main() {
	const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<div className="Main">
			<div className="gallery-container">
				{images.map((imageNumber, index) => (
					<Image imageNumber={imageNumber} key={index} />
				))}
			</div>
		</div>
	);
}

export default Main;
