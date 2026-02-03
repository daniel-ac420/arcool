/* --- SLICK --- */
$(function(){
	$(".main-banners").slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		fade: false,
		responsive: []
	});
	
	$(".section--bestsellers .bestsellers-items").slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		fade: false, 
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2
				}
			}, 
//			{
//				breakpoint: 769,
//				settings: {
//					slidesToShow: 2
//				}
//			}, 
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	$(".section--sales .bestsellers-items").slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		fade: false, 
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3
				}
			}, 
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2
				}
			}, 
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	$(".partners__items").slick({
		arrows: false,
		dots: false,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		fade: false, 
		responsive: [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 6
				}
			}, 
			{
				breakpoint: 1180,
				settings: {
					slidesToShow: 5
				}
			}, 
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			}, 
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3
				}
			}, 
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 390,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	
	$(".feedback__items").slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		fade: false, 
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3
				}
			}, 
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2
				}
			}, 
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	$(".mobile__menu__bttn").on("click", function(){
		$(".header").find(".menu__list").toggleClass("menu__list--active");
	});
	
	
	/* --- PREV/NEXT BUTTON SLIDER FIX --- */

	let prevButtons = document.querySelectorAll(".slick-prev.slick-arrow");
	let nextButtons = document.querySelectorAll(".slick-next.slick-arrow");

	for (let prevButton of prevButtons) {
		prevButton.textContent = "";
		prevButton.setAttribute("title", `Назад`);
	}

	for (let nextButton of nextButtons) {
		nextButton.textContent = "";
		nextButton.setAttribute("title", `Вперёд`);
	}
	
	window.addEventListener("resize", function() {
		for (let prevButton of prevButtons) {
			prevButton.textContent = "";
		}

		for (let nextButton of nextButtons) {
			nextButton.textContent = "";
		}
	});
	/* */
});



/* --- TIMER TEMPORARY --- */
const timerBox = document.querySelector(".timer-box");

class CountdownTimer {
  constructor(deadline, cbChange, cbComplete) {
	this._deadline = deadline;
	this._cbChange = cbChange;
	this._cbComplete = cbComplete;
	this._timerId = null;
	this._out = {
	  days: '', hours: '', minutes: '', seconds: '',
	  daysTitle: '', hoursTitle: '', minutesTitle: '', secondsTitle: ''
	};
	this._start();
  }
  static declensionNum(num, words) {
	return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  _start() {
	this._calc();
	this._timerId = setInterval(this._calc.bind(this), 1000);
  }
  _calc() {
	const diff = this._deadline - new Date();
	const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
	const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
	const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
	const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
	this._out.days = days < 10 ? '0' + days : days;
	this._out.hours = hours < 10 ? '0' + hours : hours;
	this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
	this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
	this._out.daysTitle = CountdownTimer.declensionNum(days, ['день', 'дня', 'дней']);
	this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['час', 'часа', 'часов']);
	this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['минута', 'минуты', 'минут']);
	this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
	this._cbChange ? this._cbChange(this._out) : null;
	if (diff <= 0) {
	  clearInterval(this._timerId);
	  this._cbComplete ? this._cbComplete() : null;
	}
  }
}


document.addEventListener('DOMContentLoaded', () => {
	if (typeof(timerBox) != "undefined" && timerBox != null) {
	  // (до конца месяца)
	//	const elementDaysDigitTens = document.querySelector(".timer-box__counting .timer-box__days .timer-box__digit_tens");
	//	const elementDaysDigitUnits = document.querySelector(".timer-box__counting .timer-box__days .timer-box__digit_units");

		const elementHoursDigitTens = document.querySelector(".timer-box__counting .timer-box__hours .timer-box__digit_tens");
		const elementHoursDigitUnits = document.querySelector(".timer-box__counting .timer-box__hours .timer-box__digit_units");

		const elementMinutesDigitTens = document.querySelector(".timer-box__counting .timer-box__minutes .timer-box__digit_tens");
		const elementMinutesDigitUnits = document.querySelector(".timer-box__counting .timer-box__minutes .timer-box__digit_units");

		const elementSecondsDigitTens = document.querySelector(".timer-box__counting .timer-box__seconds .timer-box__digit_tens");
		const elementSecondsDigitUnits = document.querySelector(".timer-box__counting .timer-box__seconds .timer-box__digit_units");

		const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);

		new CountdownTimer(deadline, (timer) => {
	//	elDays2.textContent = timer.days;
	//		elementDaysDigitTens.textContent = timer.days.toString()[0];
	//		elementDaysDigitUnits.textContent = timer.days.toString()[1];

	//	elHours2.textContent = timer.hours;
			elementHoursDigitTens.textContent = timer.hours.toString()[0];
			elementHoursDigitUnits.textContent = timer.hours.toString()[1];
	//		console.log(timer.hours.toString() + ` часов`);

	//	elMinutes2.textContent = timer.minutes;
			elementMinutesDigitTens.textContent = timer.minutes.toString()[0]
			elementMinutesDigitUnits.textContent = timer.minutes.toString()[1];
	//	  	console.log(timer.minutes.toString() + ` минут`);

	//	elSeconds2.textContent = timer.seconds;
			elementSecondsDigitTens.textContent = timer.seconds.toString()[0]
			elementSecondsDigitUnits.textContent = timer.seconds.toString()[1];
	//	  	console.log(timer.seconds.toString() + ` секунд`);

	//	elDays2.dataset.title = timer.daysTitle;
	//	elHours2.dataset.title = timer.hoursTitle;
	//	elMinutes2.dataset.title = timer.minutesTitle;
	//	elSeconds2.dataset.title = timer.secondsTitle;
	  }, () => {
	//	document.querySelector('.timer__result').textContent = 'Таймер завершился!';
	  });
	}
});



/* --- ACCORDION --- */
let accordion = document.getElementsByClassName("accordion-dispatcher");

for (let i = 0; i < accordion.length; i++) {
	let currentAccordion = accordion[i];
	
	currentAccordion.addEventListener("click", function() {
		this.classList.toggle("active");

		var panel = this.nextElementSibling;

		if (currentAccordion.classList.contains("active")) {
//			console.log(true);
//			console.log(panel.scrollHeight);
			panel.style.maxHeight = panel.scrollHeight + "px";
		} else {
//			console.log(false);
//			console.log(panel.scrollHeight);
			panel.style.maxHeight = null;
		}
	});
}



/* --- SEARCH FIELD --- */

const headerMenuSearchBox = document.querySelector(".header__search-container_desktop");
//const headerMenuSearch = headerMenuSearchBox.querySelector(".header__search");
//const seacrhResults = headerMenuSearchBox.querySelector(".header__search-result-box");

const headerMenuSearch = document.querySelector(".header__search-container_desktop .header__search");
const seacrhResults = document.querySelector(".header__search-container_desktop .header__search-result-box");

headerMenuSearch.addEventListener("focus", function() {
	headerMenuSearchBox.classList.toggle("focus");
});

headerMenuSearch.addEventListener("keypress", function() {
	seacrhResults.classList.add("active");	
});

headerMenuSearch.addEventListener("blur", function() {
	headerMenuSearchBox.classList.toggle("focus");
	seacrhResults.classList.remove("active");
});



/* --- MOBILE SEARCH --- */
const openMobileSearchButton = document.querySelector(".header__search_mobile");
const mobileSearchWrapper = document.querySelector(".aside_search");
const closeMobileSearchButton = document.querySelector(".aside_search .button_close");

if (typeof(openMobileSearchButton) != "undefined" && openMobileSearchButton != null) {
	openMobileSearchButton.addEventListener("click", function() {
		mobileSearchWrapper.classList.add("active");
	});
}

if (typeof(closeMobileSearchButton) != "undefined" && closeMobileSearchButton != null) {
	closeMobileSearchButton.addEventListener("click", function() {
		mobileSearchWrapper.classList.remove("active");
	});
}


const mobileSearchBox = document.querySelector(".aside_search .header__search-container");
const mobileSearch = mobileSearchBox.querySelector(".aside_search .header__search");
const mobileSeacrhResults = mobileSearchBox.querySelector(".aside_search .header__search-result-box");

if (typeof(mobileSearch) != "undefined" && mobileSearch != null) {
	mobileSearch.addEventListener("focus", function() {
	//	console.log(true);
		mobileSearchBox.classList.toggle("focus");
	});

	mobileSearch.addEventListener("keypress", function() {
		mobileSeacrhResults.classList.add("active");	
	});

	mobileSearch.addEventListener("blur", function() {
		mobileSearchBox.classList.toggle("focus");
		mobileSeacrhResults.classList.remove("active");
	});
}


/* --- PRODUCTS --- */

const addCartButtons = document.querySelectorAll(".button_cart-add");

for (let addCartButton of addCartButtons) {
	addCartButton.addEventListener("click", function() {
		addCartButton.classList.toggle("active");
		
		if (addCartButton.classList.contains("active")) {
			addCartButton.querySelector("span").textContent = "В корзине";
		} else {
			addCartButton.querySelector("span").textContent = "В корзину";
		}
	});
}

/* PRODUCTS ON MAIN PAGE */
const bestProductControlElements = document.querySelectorAll(".bestsellers-item__controls");

for (let bestProductControlElement of bestProductControlElements) {
	bestProductControlElement.addEventListener("click", function() {
		bestProductControlElement.classList.toggle("active");
		
		if (bestProductControlElement.classList.contains("bestsellers-item__controls_favor")) {
			if (bestProductControlElement.classList.contains("active")) {
				bestProductControlElement.setAttribute("title", `Убрать из избранного`);
			} else {
				bestProductControlElement.setAttribute("title", `Добавить в избранное`);
			}
		} else if (bestProductControlElement.classList.contains("bestsellers-item__controls_comparison")) {
			if (bestProductControlElement.classList.contains("active")) {
				bestProductControlElement.setAttribute("title", `Убрать из сравнения`);
			} else {
				bestProductControlElement.setAttribute("title", `Добавить в сравнение`);
			}
		}
	});
}

/* PRODUCTS ON CATALOG */
const productControlElements = document.querySelectorAll(".products-item__controls");

for (let productControlElement of productControlElements) {
	productControlElement.addEventListener("click", function() {
		productControlElement.classList.toggle("active");
		
		if (productControlElement.classList.contains("active")) {
			productDetailAddToFavors(); /* function in catalog-detail.js */
		}
		
		if (productControlElement.classList.contains("products-item__controls_favor")) {
			if (productControlElement.classList.contains("active")) {
				productControlElement.setAttribute("title", `Убрать из избранного`);
			} else {
				productControlElement.setAttribute("title", `Добавить в избранное`);
			}
		} else if (productControlElement.classList.contains("products-item__controls_comparison")) {
			if (productControlElement.classList.contains("active")) {
				productControlElement.setAttribute("title", `Убрать из сравнения`);
			} else {
				productControlElement.setAttribute("title", `Добавить в сравнение`);
			}
		}
	});
}



