// Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true, // Enables navigation arrows
    dots: true, // Enables dots pagination
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000, // Speed of autoplay
    smartSpeed: 1000, // Transition speed
    items: 1,
    navText: [
      "<i class='fas fa-chevron-left'></i>", // Left arrow icon (Font Awesome)
      "<i class='fas fa-chevron-right'></i>", // Right arrow icon (Font Awesome)
    ],
  });
});

// Typing
var i = 0;
var txt = "help you with"; // Your text
var speed = 50;
var isDeleting = false;
var delayAfterComplete = 2000; // Pause after full typing/deleting

function typeWriter(id) {
  var element = document.getElementById(id);

  if (!isDeleting && i < txt.length) {
    element.innerHTML = txt.substring(0, i + 1); // Typing forward
    i++;
    speed = Math.random() * (100 - 30) + 30; // Randomize typing speed for more natural effect
    setTimeout(function () {
      typeWriter(id);
    }, speed);
  } else if (isDeleting && i > 0) {
    element.innerHTML = txt.substring(0, i - 1); // Deleting
    i--;
    speed = Math.random() * (100 - 50) + 50; // Randomize deleting speed
    setTimeout(function () {
      typeWriter(id);
    }, speed);
  } else {
    // Switch between typing and deleting, with a pause
    isDeleting = !isDeleting;
    setTimeout(function () {
      typeWriter(id);
    }, delayAfterComplete);
  }
}

// Start the effect on page load
window.onload = function () {
  typeWriter("typewriter");
};

// Animate Cards
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cs-hobble");

  // Function to animate cards with a staggered delay
  function animateCards() {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 200); // Delay increases with the index (200ms per card)
    });

    // Remove animation classes after the animation completes
    setTimeout(() => {
      cards.forEach((card) => card.classList.remove("animate"));
    }, 1500); // Time should match the CSS animation duration
  }

  // Trigger the animation on load
  animateCards();

  // Repeat the animation every 3 seconds
  setInterval(animateCards, 3000);

  // Add hover event listeners for zoom-in effect
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered"); // Add zoom effect on hover
      card.classList.remove("animate"); // Stop animation during hover
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered"); // Remove zoom effect after hover
      card.classList.add("animate"); // Resume animation after hover
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#service",
    { scale: 0 }, // Start at 0% scale
    {
      scale: 1, // End at 100% scale
      duration: 1,
      scrollTrigger: {
        trigger: "#service",
        start: "top 100%", // Start scaling up when the top of the section is at 80% of the viewport
        end: "top 50%",   // Complete scaling up when the top of the section is at 20% of the viewport
        scrub: true,      // Smooth scaling based on scroll
        toggleActions: "play none none reverse", // Reverse the effect when scrolling back up
      },
    }
  );
});


