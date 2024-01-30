document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
