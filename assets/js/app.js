const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".list-link");

navBtn.addEventListener("click", () => {
	let active = navBtn.classList.contains("active");
	if (active) {
		navBtn.classList.remove("active");
		navList.classList.remove("show-nav");
		document.body.classList.remove("no-scroll");
	} else {
		navBtn.classList.add("active");
		navList.classList.add("show-nav");
		document.body.classList.add("no-scroll");
	}
});

navLinks.forEach((i) => {
	i.addEventListener("click", () => {
		navBtn.classList.remove("active");
		navList.classList.remove("show-nav");
		document.body.classList.remove("no-scroll");
	});
});
