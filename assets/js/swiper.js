var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
	speed: 1000,
	loop: true,
	slidesPerView: 1,
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
});
