const progress_bar = document.querySelectorAll(".progress-bar");
const skillsSection = document.getElementById("skills");

  // if (window.scrollY >= skillsSection.offsetTop) {
    progress_bar.forEach((el) => {
      el.style.width = el.attributes.data_width.value;
    });
  // } else {
  //   progress_bar.forEach((el) => {
  //     el.style.width = 0;
  //   });
  // }

