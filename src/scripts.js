const banner = document.querySelector(".banner");
const dayNight = document.querySelector(".day-night");

const themeMode = () => {
  banner.classList.toggle("night");
};

dayNight.addEventListener("click", themeMode);

// Typed js //

const typingTextEffect = new Typed("#text", {
  strings: ["John", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});
