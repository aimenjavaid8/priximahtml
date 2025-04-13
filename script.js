//home carousel start//
$(".hero-slider").owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  dots: false,
  navText: ["<", ">"],
  smartSpeed: 500,
  autoplay: true,
  responsive: {
    0: {
      nav: false,
    },
    768: {
      nav: true,
    },
  },
});
//home carousel end//

//counter up start//
$(".counter").counterUp({
  delay: 10,
  time: 1200,
});
//counter up end//

//portfolio carousel start//
$(".project-sliders").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 600,
  items: 2,
  margin: 10,
  center: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  },
});
//portfolio carousel end//

//review carousel start//
$(".reviews-slider").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 900,
  items: 2,
  margin: 24,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  },
});
//review carousel end

//scroll to top start//
const scrollBtn = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
//scroll to top end//
