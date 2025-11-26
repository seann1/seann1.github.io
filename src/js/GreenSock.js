import gsap, { Power4, Back, TweenMax } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';

// video overlay setup
let overlay = document.querySelector('.fullscreen-overlay');
if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    document.body.appendChild(overlay);
}
gsap.set(overlay, { autoAlpha: 0 });

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

const navLinks = document.querySelectorAll('nav ul li div');

navLinks.forEach((link) => {
    let hoverTween = null;
    const letters = link.querySelectorAll('.nav-link span');
    link.addEventListener('mouseenter', () => {
        if (hoverTween) hoverTween.kill();
        hoverTween = gsap.to(letters, {
            y: -26,
            duration: 0.3,
            stagger: 0.05,
            ease: 'back.out(1.7)',
            overwrite: 'auto',
        });
    });

    link.addEventListener('mouseleave', () => {
        if (hoverTween) hoverTween.kill();
        hoverTween = gsap.to(letters, {
            y: 0,
            duration: 0.3,
            stagger: -0.05,
            ease: 'back.out(1.7)',
            overwrite: 'auto',
        });
    });
});

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to('#hero', {
    yPercent: 50, // move hero up 20% over the scroll range
    scale: 0.9, // shrink as you scroll
    ease: 'none',
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top', // adjust as needed
        scrub: true, // link directly to scroll position
    },
});

//name animation
gsap.from('.transition5', {
    y: 50,
    x: 50,
    opacity: 0,
    duration: 3.0,
    stagger: 0.1,
    ease: 'elastic.out(5, 1)',
});

let tl = gsap.timeline();
// name animation parent and resume link
tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
});
// fullstack developer
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

// Horizontal "stacking cards" section
const cards = gsap.utils.toArray('.cards-wrapper .card');
// video background
ScrollTrigger.create({
    trigger: '.horizontal-section',
    start: 'top top',
    end: () => `+=${cards.length * 600}`, // reuse your cards length calculation
    onEnter: () => {
        overlay.style.pointerEvents = 'auto';
        gsap.to(overlay, { autoAlpha: 1, duration: 0.35, ease: 'power1.out' });
    },
    onLeave: () => {
        overlay.style.pointerEvents = 'none';
        gsap.to(overlay, { autoAlpha: 0, duration: 0.25, ease: 'power1.in' });
    },
    onEnterBack: () => {
        overlay.style.pointerEvents = 'auto';
        gsap.to(overlay, { autoAlpha: 1, duration: 0.35, ease: 'power1.out' });
    },
    onLeaveBack: () => {
        overlay.style.pointerEvents = 'none';
        gsap.to(overlay, { autoAlpha: 0, duration: 0.25, ease: 'power1.in' });
    },
    // markers: true, // enable to debug positions
});

if (cards.length > 0) {
    // Make sure stacking order is correct: later cards above earlier ones
    cards.forEach((card, i) => {
        card.style.zIndex = i + 1;
    });

    // Duration per card segment (in scroll "units")
    const segment = 1; // you can tweak this

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.horizontal-section',
            start: 'top top',
            end: () => `+=${cards.length * 600}`, // tweak scroll length
            scrub: true,
            pin: true,
            anticipatePin: 1,
        },
    });

    cards.forEach((card, i) => {
        // start each card off to the right (100% of its width)
        gsap.set(card, {
            xPercent: 100,
            scale: 2,
        });

        // animate it onto the stack
        tl.to(
            card,
            {
                xPercent: -50,
                skewY: 0,
                scale: 1,
                ease: 'none',
                duration: segment,
            },
            i * segment // stagger segments in time
        );
    });
}

const experimentItems = document.querySelectorAll('experiment-item');

gsap.from(experimentItems, {
    scrollTrigger: {
        trigger: '.experimentContainer',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out',
});
// skill items
gsap.from('.transition4', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top bottom',
        toggleActions: 'play none none reverse',
    },
    y: 50,
    x: 2,
    opacity: 0,
    skewY: '10deg',
    duration: 1.0,
    stagger: 0.2,
    ease: 'back.out(1.7)',
});
// portfolio items
// gsap.from('.transition3', {
//     scrollTrigger: {
//         trigger: '.portfolio',
//         start: 'top bottom',
//     },
//     y: 50,
//     opacity: 0,
//     duration: 1.2,
//     stagger: 0.3,
// });

const portfolioItems = document.querySelectorAll('portfolio-item');

portfolioItems.forEach((item) => {
    // The actual visible content is inside the shadow DOM or appended children
    // Since your component appends directly to 'this', we can animate 'item' or its children.
    // Animating 'item' directly works well for visibility/position.

    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%', // Animate when top of item hits 80% of viewport height
            toggleActions: 'play none none reverse', // Optional: play on enter, reverse on leave
        },
        y: 50,
        // skewY: '10deg',
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out', // smoother ease for entry
    });
});

ScrollTrigger.sort();
ScrollTrigger.refresh();
