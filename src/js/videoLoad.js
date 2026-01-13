// Lazy-load videos: move data-src -> src when near viewport
const isMobile =
    /Mobi|Android/i.test(navigator.userAgent) || screen.width < 768;

// If mobile, avoid autoplay heavy videos: keep only poster or low-res load
// if (isMobile) {
//     document.querySelectorAll('video[autoplay]').forEach((v) => {
//         v.removeAttribute('autoplay'); // prevents automatic downloads/plays on many phones
//     });
// }

const videos = Array.from(document.querySelectorAll('video'));

// Immediately load priority/high video (hero) first but still from venv'd sources
const priority = videos.find((v) => v.dataset.priority === 'high');
if (priority) {
    loadVideoSources(priority, true);
}

// IntersectionObserver for the rest
const io = new IntersectionObserver(
    (entries, obs) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const vid = entry.target;
                loadVideoSources(vid, vid.hasAttribute('autoplay'));
                obs.unobserve(vid);
            }
        }
    },
    { root: null, rootMargin: '200px', threshold: 0.1 }
);

videos.forEach((v) => {
    if (v.dataset.priority === 'high') return; // already loaded
    io.observe(v);
});

function loadVideoSources(videoEl, playAfterLoad = false) {
    // set each source.src from data-src
    const sources = videoEl.querySelectorAll('source[data-src]');
    let changed = false;
    sources.forEach((s) => {
        if (s.dataset.src && !s.getAttribute('src')) {
            s.setAttribute('src', s.dataset.src);
            changed = true;
        }
    });
    if (changed) {
        // trigger browser to fetch the media
        videoEl.load();
        if (playAfterLoad) {
            // play may require user gesture on some browsers; ignore errors
            videoEl.play().catch(() => {});
        }
    }
}

// Optional: small debounce to prioritize initial page paint
window.addEventListener('load', () => {
    // in case some videos still need loading after page load
    videos.forEach((v) => {
        if (
            !v.querySelector('source').getAttribute('src') &&
            v.dataset.priority === 'high'
        ) {
            loadVideoSources(v, true);
        }
    });
});
