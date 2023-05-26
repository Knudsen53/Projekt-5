document.addEventListener("DOMContentLoaded", function() {
    const scrollDown = document.querySelector(".scroll-down");
  
    scrollDown.addEventListener("click", function() {
      const section = document.getElementById("next-section2");
      section.scrollIntoView({ behavior: "smooth" });
    });
  });