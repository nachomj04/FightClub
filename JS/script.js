document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".animated-section");
  var posicionSections = [];

  function storeSectionPositions() {
    posicionSections = [];

    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      posicionSections.push({
        start: rect.top + window.scrollY,
        end: rect.bottom + window.scrollY,
      });
    });
  }

  function animateSections() {
    var windowHeight = window.innerHeight;
    var scroll = window.scrollY;

    posicionSections.forEach(function (position, index) {
      if (scroll + windowHeight > position.start && scroll < position.end) {
        sections[index].classList.add("show");
      } else {
        sections[index].classList.remove("show");
      }
    });
  }

  window.addEventListener("resize", function () {
    storeSectionPositions();
  });

  window.addEventListener("scroll", animateSections);

  storeSectionPositions();
  animateSections();
});
