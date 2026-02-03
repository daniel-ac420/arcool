const moreBrandsButton = document.querySelector("#more-brands");

let brandsListItems = document.querySelectorAll(".brands-list__item");

moreBrandsButton.addEventListener("click", function() {
	if (!this.classList.contains("expanded")) {
		this.classList.toggle("expanded");
		
		this.textContent = "Скрыть бренды";
		
		for (let element of brandsListItems) {
			if (element.classList.contains("visually-hidden")) {
				element.classList.toggle("visually-hidden");
			}
		}
	} else {
		this.classList.toggle("expanded");
		
		this.textContent = "Все бренды";
		
		for (let element of brandsListItems) {
			if (!element.classList.contains("default")) {
				element.classList.toggle("visually-hidden");
			}
		}
	}
})



/* title кнопки показа брендов */
moreBrandsButton.addEventListener("mouseenter", function() {
	moreBrandsButton.title = moreBrandsButton.textContent;
})