const catalogSection = document.querySelector(".section--catalog");

const changeCatalogViewButtons = document.querySelectorAll(".catalog-changer_view-item");

const changeCatalogViewButtonTable = document.querySelector(".catalog-changer_view-table");
const changeCatalogViewButtonCards = document.querySelector(".catalog-changer_view-cards");

for (let changeCatalogViewButton of changeCatalogViewButtons) {
	changeCatalogViewButton.addEventListener("click", function() {
		for (let changeCatalogViewButton of changeCatalogViewButtons) {
				changeCatalogViewButton.classList.remove("active");
		}
		
		this.classList.toggle("active");
		
		if (changeCatalogViewButtonTable.classList.contains("active")) {
			console.log(`table list`);
			catalogSection.classList.add("section--catalog_table");
			catalogSection.classList.remove("section--catalog_cards");
		}
		
		if (changeCatalogViewButtonCards.classList.contains("active")) {
			console.log(`cards`);
			catalogSection.classList.add("section--catalog_cards");
			catalogSection.classList.remove("section--catalog_table");
		}
	})
}