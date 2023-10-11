gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Set a variable for our button element.
const scrollToTopButton = document.getElementById("go-to-top");

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 300) {
    scrollToTopButton.classList.remove("invisible", "opacity-0");
    scrollToTopButton.classList.add("visible", "opacity-100");
  } else {
    scrollToTopButton.classList.remove("visible", "opacity-100");
    scrollToTopButton.classList.add("invisible", "opacity-0");
  }
};

window.addEventListener("scroll", scrollFunc);
scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  gsap.to(window, {
    duration: 2,
    ease: "power3.inOut",
    scrollTo: {
      y: 0
      // autoKill: true,
    }
  });
};

// style="shape-outside: url(img/White_Paper/Tanker_400.png);"
window.onload = function () {
  setTimeout(() => {
    const imageShapes = document.querySelectorAll(".shape-outside");
    imageShapes.forEach(function (item) {
      item.style.shapeOutside = `url(${item.getAttribute("src")})`;
    });
  }, 1000);
};

function scrollEntranceAnimate(elements, animationProps = { opacity: 0, duration: 1.5, ease: "power2.out" }, triggerStart) {
  animateEls = gsap.utils.toArray(elements);

  animateEls.forEach(el => {
    const anim = gsap.from(el, animationProps);
    ScrollTrigger.create({
      trigger: el,
      animation: anim,
      start: triggerStart || "50% bottom"
    });
  });
}

gsap.to(".logo-svg .rainbow .ray", {
  keyframes: {
    "0%": { scale: 1, filter: "brightness(100%) saturate(100%)" },
    "50%": { scale: 1.3, filter: "brightness(120%) saturate(120%)" },
    "100%": { scale: 1, filter: "brightness(100%) saturate(100%)" }
  },
  ease: "power1.out",
  transformOrigin: "center",
  duration: 0.7,
  stagger: -0.08,
  repeat: -1,
  repeatDelay: 20,
  delay: 20
});
gsap.to(".logo-svg .rainbow .ray", {
  keyframes: {
    "0%": { filter: "brightness(100%) saturate(100%)" },
    "50%": { filter: "brightness(130%) saturate(110%)" },
    "100%": { filter: "brightness(100%) saturate(100%)" }
  },
  ease: "circ.out",
  transformOrigin: "center",
  duration: 0.5,
  stagger: 0.05,
  repeat: -1,
  repeatDelay: 10,
  delay: 30
});

const logoText = document.querySelector(".logo-svg .text");
if (logoText) {
  const logoTextTl = gsap.timeline();
  logoTextTl
    .to(".logo-svg .text", {
      opacity: 1,
      duration: 7,
      delay: 10
    })
    .fromTo(
      ".logo-svg .text .letter",
      {
        transformOrigin: "center",
        opacity: 0,
        scale: 0.5,
        x: -15
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        ease: "expo.out",
        duration: 2,
        stagger: 0.1
      },
      "<50%"
    );
}

// BLurred Preview image Lazy Loading
if (document.querySelectorAll(".blur-load").length) {
  const blurDivs = document.querySelectorAll(".blur-load");
  blurDivs.forEach(div => {
    const img = document.querySelector("img");
    function loaded() {
      div.classList.add("loaded");
    }

    if (img.complete) {
      loaded();
    } else {
      img.addEventListener("load", loaded);
    }
  });
}
