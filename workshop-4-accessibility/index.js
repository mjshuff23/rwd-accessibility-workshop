document.addEventListener('DOMContentLoaded', (event) => {
	let currentItem;

	//Listen for any click event on the window
	document.addEventListener('click', (e) => {
		// If our event target is an input of type 'text'
		if (e.target.type === 'text') {
			// Make our currentItem the activeElement (What we clicked)
			currentItem = document.activeElement;
		}

		console.log(`clicked`, e.target, `currentItem:`, currentItem);

		// If there is a currentItem, when we click, change focus to this
		currentItem ? currentItem.focus() : '';
	});
});
