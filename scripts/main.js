// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
// https://cloudinary.com/guides/bulk-image-resize/bulk-image-resize-in-css-javascript-python-java-node-js-and-other-languages

/** namespace. */
var rhit = rhit || {};

rhit.main = function() {
	console.log("Ready");
	const images = document.querySelectorAll(".portfolio-image");
	for (const image of images) {
		image.onmouseenter = (event) => {
			console.log("Hover");
			image.style.width = (image.clientWidth - 100) + "px";
		};
		image.onmouseleave = (event) => {
			console.log("Unhover");
			image.style.width = (image.clientWidth + 100) + "px";
		};
	}
};

rhit.main();
