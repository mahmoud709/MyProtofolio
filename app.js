const progress_bar = document.querySelectorAll(".progress-bar");
// const skillsSection = document.getElementById("skillsSection");

progress_bar.forEach((el) => {
  el.style.width = el.attributes.data_width.value;
});


