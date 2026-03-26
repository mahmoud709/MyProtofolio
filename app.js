const progress_bar = document.querySelectorAll(".progress-bar");
// const skillsSection = document.getElementById("skillsSection");

progress_bar.forEach((el) => {
  el.style.width = el.attributes.data_width.value;
});


document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {  // When the screen width is 0px or larger
        slidesPerView: 1,  // Show 1 slide on small screens
        spaceBetween: 10,  // Adjust space between slides for small screens
      },
      768: {  // When the screen width is 768px or larger
        slidesPerView: 2,  // Show 2 slides on medium screens
        spaceBetween: 20,
      },
      1024: {  // When the screen width is 1024px or larger
        slidesPerView: 3,  // Show 3 slides on large screens
        spaceBetween: 30,
      },
    },
  });
});
