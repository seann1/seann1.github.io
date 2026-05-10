const startMarquee = (element, repeatCount = 32, step = 0.5) => {
    const animateMarquee = () => {
        position = position < width ? position + step : 1;
        element.style.marginLeft = `${-position}px`;
        requestAnimationFrame(animateMarquee);
    };

    let position = 0;
    const content = element.innerHTML;
    element.innerHTML = Array(repeatCount).fill(content).join('');
    element.style.overflow = 'hidden';
    element.style.whiteSpace = 'nowrap';
    element.style.position = 'absolute';
    const width = element.clientWidth + 1;
    element.style.position = '';

    animateMarquee();
};

window.addEventListener('load', () => {
    startMarquee(document.getElementById('marquee'), 32, 0.5);
});
