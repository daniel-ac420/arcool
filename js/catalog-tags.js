const catalogTagsWrapper = document.querySelector(".section--catalog .tags");
const tagsListItems = document.querySelectorAll(".tags-list__item");
const clearAllTagsButton = document.querySelector("#clear-all-tags");

clearAllTagsButton.addEventListener("click", function() {
	for (let tagsListItem of tagsListItems) {
		tagsListItem.remove();
		clearAllTagsButton.remove();
		catalogTagsWrapper.classList.add("disabled");
	}
});



for (let tagsListItem of tagsListItems)  {
	tagItemButtonClose = tagsListItem.querySelector(".tags-list__item-close");
	tagItemButtonClose.addEventListener("click", function() {
		tagsListItem.remove();
		
		let tagsListItemsNew = document.querySelectorAll(".tags-list__item");
		if (tagsListItemsNew.length === 0) {
			clearAllTagsButton.remove();
			catalogTagsWrapper.classList.add("disabled");
		}
	});
}