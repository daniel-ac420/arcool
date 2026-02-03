const showFiltersButton = document.querySelector("#more-filters");
const filtersWrapper = document.querySelector("#catalog-filters");

if (typeof(showFiltersButton) != "undefined" && showFiltersButton != null) {
	showFiltersButton.addEventListener("click", function() {
		filtersWrapper.classList.toggle("active");
	})
}



const filtersButttonClose = document.querySelector(".catalog-filters .button_close");

filtersButttonClose.addEventListener("click", function() {
	filtersWrapper.classList.toggle("active");
})



let catalogSubcategoriesElements = document.querySelectorAll(".categories_level-3");
let catalogMainCategory = document.querySelector(".categories_level-1");

for (let catalogSubcategoriesElement of catalogSubcategoriesElements) {
	if (catalogSubcategoriesElement.classList.contains("active")) {
		let parentElement = catalogSubcategoriesElement.parentElement.previousElementSibling;
//		parentElement.style.color = "#FF6C6C" ;
//		catalogMainCategory.style.color = "#FF6C6C" ;
		
		parentElement.classList.add("active");
		catalogMainCategory.classList.add("active");
	}
}