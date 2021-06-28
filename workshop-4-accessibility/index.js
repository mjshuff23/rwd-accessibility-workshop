document.addEventListener('DOMContentLoaded', (event) => {
	// A modal is about to be opened
	// Store the current news item
	// Open the modal
	// On modal close, refocus on the news item they had open
	let currentItem;
	document.addEventListener('click', (e) => {
		if (e.target.type === 'text') {
			currentItem = document.activeElement;
		}
		console.log(`clicked`, e.target, `currentItem:`, currentItem);
		currentItem ? currentItem.focus() : '';
	});
});
