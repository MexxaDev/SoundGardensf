// HERO ANIMATION
gsap.from("#hero-title", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero-buttons button", {
  opacity: 0,
  y: 30,
  delay: 0.5,
  stagger: 0.2
});

// PARALLAX HERO
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  document.getElementById("hero-img").style.transform =
    `translateY(${scroll * 0.3}px)`;
});

// FADE IN SCROLL
const faders = document.querySelectorAll(".fade-up");

const appear = () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.8s ease";
    }
  });
};

window.addEventListener("scroll", appear);