import React from 'react';

function Image({ imageNumber, description }) {
	return (
		<figure className={`image-${imageNumber}`}>
			<a
				href={`images/main-${imageNumber}.jpg`}
				target="_blank"
				rel="noreferrer"
			>
				<img
					src={`images/main-${imageNumber}.jpg`}
					alt={description}
					title={description}
				/>
			</a>
		</figure>
	);
}

export default Image;
