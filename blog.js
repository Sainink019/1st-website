document.addEventListener("DOMContentLoaded", function () {
	let articles = document.querySelectorAll("article");
	let popup = document.getElementById("popup");
	let overlay = document.getElementById("overlay");
	let popupImage = document.getElementById("popup-image");
	let popupCaption = document.getElementById("popup-caption");

	articles.forEach(function (article) {
		article.addEventListener("click", function (event) {
			let img = article.querySelector("img");
			let imgSrc = img ? img.getAttribute("src") : ""; // get image source

			let figcaption = article.querySelector("figcaption");
			let figcaptionText = figcaption ? figcaption.innerHTML : ""; // get figcaption content

			popupImage.innerHTML = `<img src="${imgSrc}" alt="Popup Image">`; // display the image
			popupCaption.innerHTML = figcaptionText; // display the figcaption content

			overlay.style.display = "block";
			popup.style.display = "block";

			// Center the popup
			setTimeout(() => {
				popup.style.top = "50%";
				popup.style.left = "50%";
			}, 10);
		});
	});

	overlay.addEventListener("click", function () {
		popup.style.display = "none";
		overlay.style.display = "none";
	});

	// Close button functionality
	document.getElementById("close-btn").addEventListener("click", function () {
		popup.style.display = "none";
		overlay.style.display = "none";
	});
});
