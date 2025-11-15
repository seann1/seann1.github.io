import gsap, { Power4, Back, TweenMax } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';

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
            behavior: 'smooth',
        });
    };
});

gsap.registerPlugin(ScrollTrigger, TextPlugin);

let tl = gsap.timeline();

tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
});
tl.from(
    '.stagger1',
    {
        opacity: 0,
        y: -50,
        stagger: 0.3,
        ease: Power4.easeOut,
        duration: 2,
    },
    '-=1.5'
);

gsap.from('.transition4', {
    scrollTrigger: {
        trigger: '.transition2',
        start: 'top bottom',
    },
    y: 50,
    x: 50,
    opacity: 0,
    skewY: '10deg',
    duration: 2.0,
    stagger: 0.2,
    ease: 'elastic.out(5, 1)',
});

gsap.from('.transition5', {
    y: 50,
    x: 50,
    opacity: 0,
    duration: 3.0,
    stagger: 0.1,
    ease: 'elastic.out(5, 1)',
});

gsap.from('.transition3', {
    scrollTrigger: {
        trigger: '.transition3',
        start: 'top bottom',
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
});

const navLinks = document.querySelectorAll('nav ul li div');

navLinks.forEach((link) => {
    const letters = link.querySelectorAll('.nav-link span');
    link.addEventListener('mouseenter', () => {
        gsap.to(letters, {
            y: -26,
            duration: 0.3,
            stagger: 0.05,
            ease: 'back.out(1.7)',
        });
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(letters, {
            y: 0,
            duration: 0.3,
            stagger: -0.05,
            ease: 'back.out(1.7)',
        });
    });
});

const experimentItems = document.querySelectorAll('experiment-item');

gsap.from(experimentItems, {
    scrollTrigger: {
        trigger: '.experimentContainer',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out',
});
