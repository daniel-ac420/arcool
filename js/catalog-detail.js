/* ANCHOR */
const catalogDetailAnchor = document.querySelector(".tabs-anchor");

if (typeof(catalogDetailAnchor) != "undefined" && catalogDetailAnchor != null) {
	catalogDetailAnchor.addEventListener("click", function() {
		document.querySelector("#tab1").checked = true;
	})
}



/* STICKY PLATE */
document.addEventListener("DOMContentLoaded", () => {
	let catalogDetailPlate = document.querySelector(".price-box_desktop");
	let catalogDetailSubtitle = document.querySelector(".subtitle");

	if (typeof(catalogDetailPlate) != "undefined" && catalogDetailPlate != null) {
		if (typeof(catalogDetailSubtitle) != "undefined" && catalogDetailSubtitle != null) {
			let rect = catalogDetailSubtitle.getBoundingClientRect();

			let targetHeight = rect.top;
//			console.log(targetHeight);

			window.onscroll = function() {
//				console.log(window.scrollY);

				if (targetHeight <= window.scrollY) {
					catalogDetailPlate.classList.add("sticky");
				} else {
					catalogDetailPlate.classList.remove("sticky");
				}
			}
		}
	}
});



/* ADD TO FAVORS */
function productDetailAddToFavors() {
//	console.log("catalogAdd is launch");
	let prodAddToFavPlate = document.querySelector(".aside-catalog-add_favors");
	
	var timer = setTimeout(function() {
		$(".aside-catalog-add_favors").fadeIn("fast");
		prodAddToFavPlate.classList.add("active");
	}, 50);
	
	setTimeout(function() {
		if (prodAddToFavPlate.classList.contains("active")) {
			prodAddToFavPlate.classList.add("fade-out");
		}
	}, 6000);
	
	setTimeout(function() {
		prodAddToFavPlate.classList.remove("active");
		prodAddToFavPlate.classList.remove("fade-out");
		prodAddToFavPlate.style.display = "none";
	}, 10000);
}



/* ASIDE PLATES (COMPARISON & FAVORS) CLOSE BUTTON */
let closeButtons = document.querySelectorAll(".aside-catalog-add__button-close");

for (let closeButton of closeButtons) {
//	console.log($(closeButton).closest(".aside-catalog-add"));
	
	closeButton.addEventListener("click", function() {
		$(closeButton).closest(".aside-catalog-add").removeClass("active");
		$(closeButton).closest(".aside-catalog-add").removeClass("fade-out");
		$(closeButton).closest(".aside-catalog-add").css("display", "none")
	});
}