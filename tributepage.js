document.addEventListener("DOMContentLoaded", function () {
  const elementsToFade = document.querySelectorAll(".fade-in");

  elementsToFade.forEach((element) => {
      element.style.opacity = 0;
      element.style.transition = "opacity 1s ease-in-out";
  });

  const fadeInOnScroll = () => {
      elementsToFade.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top <= windowHeight) {
              element.style.opacity = 1;
          }
      });
  };

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Initial check on page load
});
