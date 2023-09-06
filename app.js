const progress_bar = document.querySelectorAll(".progress-bar");
const skillsSection = document.getElementById("skills");
    progress_bar.forEach((el) => {
      el.style.width = el.getAttribute("data_width");
    });
// window.onscroll = () => {
//   if (window.scrollY >= skillsSection.offsetTop) {
//     progress_bar.forEach((el) => {
//       el.style.width = el.getAttribute("data_width");
//     });
//   } else {
//     progress_bar.forEach((el) => {
//       el.style.width = 0;
//     });
//   }
// };
