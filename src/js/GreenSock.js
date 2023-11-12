import gsap, {Power4, Back, TweenMax} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

function proTheme() {
  const element = document.getElementById("hero");
  const element2 = document.getElementById("content");
  element.classList.add("pro-gradient");
  element.classList.remove("color-gradient");
  element2.classList.add("pro-gradient");
  element2.classList.remove("color-gradient");
  document.body.style.background = "linear-gradient(-45deg, #a7a7a7, #636363, #96adb5, #b0b6b5);";
}

function colorTheme() {
  const element = document.getElementById("hero");
  const element2 = document.getElementById("content");
  element.classList.remove("pro-gradient");
  element.classList.add("color-gradient");
  element2.classList.remove("pro-gradient");
  element2.classList.add("color-gradient");
  const percentage1 = 50;
  const color1 = "#C00";
  const percentage2 = 100;
  const color2 = "#000";
  //document.body.backgroundSize = "background-size: 400% 400%";
  //document.body.style.background = "linear-gradient(-45deg, #a7a7a7, #636363, #96adb5, #b0b6b5)"
  //document.body.style.background = `linear-gradient(to left, ${color1} ${percentage1}%, ${color2} ${percentage2}%)`;
  //document.body.style.animation = "gradient 15s ease infinite";
  //document.body.style.background = "linear-gradient(-45deg, #a7a7a7, #636363, #96adb5, #b0b6b5);"
  
}

// Define selector for selecting
// anchor links with the hash
let anchorSelector = 'a[href^="#"]';

// Collect all such anchor links
let anchorList = document.querySelectorAll(anchorSelector);

// Iterate through each of the links
anchorList.forEach((link) => {
  link.onclick = function (e) {
    // Prevent scrolling if the
    // hash value is blank
    e.preventDefault();
    
    // Get the destination to scroll to
    // using the hash property
    let destination = document.querySelector(this.hash);
    
    // Scroll to the destination using
    // scrollIntoView method
    destination.scrollIntoView({
      behavior: "smooth",
    });
  };
});

gsap.registerPlugin(ScrollTrigger, TextPlugin);

let tl = gsap.timeline();
const tl2 = gsap.timeline({
  repeat: 1,
  repeatDelay: 1,
  yoyo: true,
  delay: 1,
});

gsap.to(".dev-title", {
  duration: 12,
  text: {
    value: "Frontend Web Developer",
    newClass: "dev-title2",
    oldClass: "dev-title1",
  },
  ease: "power4",
  padSpace: true,
  type: "diff",
});

tl2
    .to(".dev-title", 0.5, {
      rotationX: -90,
      rotationY: -45,
    })
    .set(".dev-title", {
      text: {
        value: "Frontend Web Developer",
        newClass: "dev-title2",
        oldClass: "dev-title1",
      },
    })
    .fromTo(
        ".dev-title",
        1,
        { rotationX: 90 },
        { rotationX: 0, immediateRender: false }
    );

tl.from(".content", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});
tl.from(
    ".stagger1",
    {
      opacity: 0,
      y: -50,
      stagger: 0.3,
      ease: Power4.easeOut,
      duration: 2,
    },
    "-=1.5"
);
tl.from(
    ".hero-design",
    {
      opacity: 0,
      y: 50,
      ease: Power4.easeOut,
      duration: 1,
    },
    "-=2"
);
gsap.from(".square-anim", {
  stagger: 0.2,
  scale: 0.4,
  fill: "rgb(150,0,150)",
  attr: { x: 500 },
  rotate: "360deg",
  transformOrigin: "center",
  duration: 2,
  ease: Back.easeOut.config(0.5),
});
gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 50,
  x: 50,
  opacity: 0,
  skewY: "10deg",
  duration: 2.0,
  stagger: 0.2,
  //ease: "elastic.out(5, 1)"
});
gsap.from(".transition4", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 50,
  x: 50,
  opacity: 0,
  skewY: "10deg",
  duration: 2.0,
  stagger: 0.2,
  ease: "elastic.out(5, 1)"
});

gsap.from(".transition5", {
  y: 50,
  x: 50,
  opacity: 0,
  duration: 1.0,
  stagger: 0.05,
  ease: "elastic.out(5, 1)"
});

gsap.from(".transition2-right", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 50,
  x: -50,
  opacity: 0,
  skewY: "-10deg",
  duration: 1.5,
  stagger: 0.2,
});
gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});
gsap.from(".box-1", {
  scrollTrigger: {
    trigger: ".box-1",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});
gsap.from(".box-2", {
  scrollTrigger: {
    trigger: ".box-2",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});
gsap.from(".box-3", {
  scrollTrigger: {
    trigger: ".box-3",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

function hex(c) {
  const s = "0123456789abcdef";
  let i = parseInt(c);
  if (i === 0 || isNaN(c)) return "00";
  i = Math.round(Math.min(Math.max(0, i), 255));
  return s.charAt((i - (i % 16)) / 16) + s.charAt(i % 16);
}

/* Convert an RGB triplet to a hex string */
function convertToHex(rgb) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}

/* Remove '#' in color hex string */
function trim(s) {
  return s.charAt(0) === "#" ? s.substring(1, 7) : s;
}

/* Convert a hex string to an RGB triplet */
function convertToRGB(hex) {
  const color = [];
  color[0] = parseInt(trim(hex).substring(0, 2), 16);
  color[1] = parseInt(trim(hex).substring(2, 4), 16);
  color[2] = parseInt(trim(hex).substring(4, 6), 16);
  return color;
}

let i;

function generateColor(colorStart, colorEnd, colorCount) {
  // The beginning of your gradient
  const start = convertToRGB(colorStart);
  
  // The end of your gradient
  const end = convertToRGB(colorEnd);
  
  // The number of colors to compute
  const len = colorCount;
  
  //Alpha blending amount
  let alpha = 0.1;
  
  const array = [];
  
  for (i = 0; i < len; i++) {
    const c = [];
    alpha += 1.0 / len;
    
    c[0] = start[0] * alpha + (1 - alpha) * end[0];
    c[1] = start[1] * alpha + (1 - alpha) * end[1];
    c[2] = start[2] * alpha + (1 - alpha) * end[2];
    
    array.push(convertToHex(c));
  }
  
  return array;
}

const tmp = generateColor("#ffffff", "#E5E5E5", 144);

for (let j = 1; j < 8; j++) {
  for (let i = 0; i < 37; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", `grid-item-${i}`);
    div.classList.add("box");
    div.style.backgroundImage = `linear-gradient(45deg, white, #${tmp[i]}), linear-gradient(45deg, black, #${tmp[i]})`;
    div.style.backgroundSize = "100% 100%, 2000% 100%";
    div.style.animation = "move 5s infinite";
    div.style.animationDirection = "alternate";
    const gridContainer = document.getElementById(`grid-container${j}`);
    gridContainer.append(div);
  }
}

const gridTween = TweenMax.from(".box", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top bottom",
  },
  duration: 2,
  x: 20,
  y: 20,
  stagger: 0.008,
  ease: "elastic",
  rotation: 20,
});
const skillGrids = document.getElementsByClassName("grid-container");
[...skillGrids].forEach((el) => {
  el.addEventListener("mouseenter", () => gridTween.play());
});
