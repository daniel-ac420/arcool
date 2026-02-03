/* Скрытие/показ вариантов запросов */
const moreThemesButton = document.querySelector("#more-options");

let themesListItems = document.querySelectorAll(".themes-list__item");

moreThemesButton.addEventListener("click", function() {
	if (!this.classList.contains("expanded")) {
		this.classList.toggle("expanded");
		
		this.textContent = "Скрыть варианты";
		
		for (let element of themesListItems) {
			if (element.classList.contains("visually-hidden")) {
				element.classList.toggle("visually-hidden");
			}
		}
	} else {
		this.classList.toggle("expanded");
		
		this.textContent = "Показать больше вариантов";
		
		for (let element of themesListItems) {
			if (!element.classList.contains("default")) {
				element.classList.toggle("visually-hidden");
			}
		}
	}
})



/* title кнопки показа вариантов запросов */
moreThemesButton.addEventListener("mouseenter", function() {
	moreThemesButton.title = moreThemesButton.textContent;
})