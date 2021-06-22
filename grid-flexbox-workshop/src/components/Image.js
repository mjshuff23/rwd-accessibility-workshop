import React from 'react';

function Image({ imageNumber }) {
	return (
		<div>
			<div className={`image-${imageNumber}`}>
				<a
					href={`images/main-${imageNumber}.jpg`}
					target="_blank"
					rel="noreferrer"
				>
					<img src={`images/main-${imageNumber}.jpg`} alt="" />
				</a>
			</div>
		</div>
	);
}

export default Image;
