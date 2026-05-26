export default class ProjectItem extends HTMLElement {
    constructor() {
        super();
        const title = this.getAttribute('title') || '';
        const subtitle = this.getAttribute('subtitle') || '';
        const tags = this.getAttribute('tags') || '';
        const description = this.getAttribute('description') || '';
        let media = [];
        try {
            media = JSON.parse(this.getAttribute('pictures') || '[]');
        } catch (_) {}

        const shadow = this.attachShadow({ mode: 'open' });

        const galleryHTML = media
            .map((item, i) => {
                if (typeof item === 'string') {
                    return `<img src="${item}" alt="${title}" data-index="${i}" class="gallery-thumb" />`;
                }
                if (item.type === 'youtube') {
                    return `
                        <div class="gallery-thumb vimeo-thumb" data-index="${i}">
                            <img src="https://img.youtube.com/vi/${item.id}/hqdefault.jpg" alt="${title}" />
                            <div class="play-icon">▶</div>
                        </div>`;
                }
                if (item.type === 'short') {
                    return `
                        <div class="gallery-thumb vimeo-thumb short-thumb" data-index="${i}">
                            <img src="https://img.youtube.com/vi/${item.id}/hqdefault.jpg" alt="${title}" />
                            <div class="play-icon">▶</div>
                        </div>`;
                }
                return '';
            })
            .join('');

        const subtitleHTML = subtitle
            ? `<span class="project-subtitle">${subtitle}</span>`
            : '';

        const tagsHTML = tags
            ? `<p class="project-tags">${tags}</p>`
            : '';

        shadow.innerHTML = `
            <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }

            .project-card {
                border-top: 2px solid var(--secondary-color, #a6034f);
                padding: 2em 0;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2em;
                align-items: start;
            }

            @media (max-width: 700px) {
                .project-card { grid-template-columns: 1fr; }
            }

            .project-gallery {
                display: flex;
                gap: 0.5em;
                overflow-x: auto;
                scrollbar-width: thin;
                scrollbar-color: var(--secondary-color, #a6034f) transparent;
            }

            .project-gallery::-webkit-scrollbar { height: 4px; }
            .project-gallery::-webkit-scrollbar-thumb {
                background: var(--secondary-color, #a6034f);
                border-radius: 2px;
            }

            .gallery-thumb {
                height: 220px;
                width: auto;
                flex-shrink: 0;
                cursor: pointer;
                position: relative;
                display: block;
            }

            .gallery-thumb img {
                height: 220px;
                width: auto;
                object-fit: cover;
                display: block;
            }

            img.gallery-thumb {
                object-fit: cover;
            }

            .vimeo-thumb {
                position: relative;
            }

            .play-icon {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5em;
                color: #fff;
                background: rgba(0,0,0,0.35);
                pointer-events: none;
            }

            .project-info {
                display: flex;
                flex-direction: column;
                gap: 0.75em;
            }

            .project-title-group {
                display: flex;
                flex-direction: column;
                gap: 0.15em;
            }

            h2 {
                font-family: 'Bebas Neue', 'Poppins', sans-serif;
                font-size: 2em;
                color: var(--secondary-color, #a6034f);
                letter-spacing: 0.05em;
                line-height: 1;
            }

            .project-subtitle {
                font-family: 'Poppins', sans-serif;
                font-size: 0.8em;
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: var(--tertiary-color, #b7ff00);
            }

            .project-tags {
                font-family: 'Poppins', sans-serif;
                font-size: 0.75em;
                color: var(--secondary-color, #a6034f);
                opacity: 0.7;
                font-style: italic;
            }

            p {
                font-family: 'Poppins', sans-serif;
                font-size: 0.95em;
                line-height: 1.7;
                color: inherit;
            }

            /* Lightbox */
            .lightbox {
                display: none;
                position: fixed;
                inset: 0;
                z-index: 9999;
                background: rgba(0,0,0,0.92);
                align-items: center;
                justify-content: center;
            }

            .lightbox.open { display: flex; }

            .lightbox-inner {
                position: relative;
                max-width: 90vw;
                max-height: 90vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .lightbox-inner img {
                max-width: 90vw;
                max-height: 85vh;
                object-fit: contain;
                display: block;
            }

            .lightbox-inner iframe {
                width: 80vw;
                height: 45vw;
                max-height: 85vh;
                border: none;
                display: block;
            }

            .lightbox-inner.portrait iframe {
                width: min(45vh, 90vw);
                height: calc(min(45vh, 90vw) * 16 / 9);
                max-height: 85vh;
            }

            .short-thumb img {
                width: 124px;
                height: 220px;
                object-fit: cover;
            }

            .lightbox-close {
                position: fixed;
                top: 1.2em;
                right: 1.5em;
                font-size: 2em;
                color: var(--tertiary-color, #b7ff00);
                cursor: pointer;
                line-height: 1;
                user-select: none;
                z-index: 10000;
                transition: color 0.2s;
            }

            .lightbox-close:hover { color: var(--secondary-color, #a6034f); }

            .lightbox-arrow {
                position: fixed;
                top: 50%;
                transform: translateY(-50%);
                font-size: 2.5em;
                color: var(--tertiary-color, #b7ff00);
                cursor: pointer;
                user-select: none;
                padding: 0.2em 0.5em;
                z-index: 10000;
                transition: color 0.2s;
            }

            .lightbox-arrow:hover { color: var(--secondary-color, #a6034f); }
            .lightbox-arrow.prev { left: 0.5em; }
            .lightbox-arrow.next { right: 0.5em; }
            .lightbox-arrow.hidden { display: none; }
            </style>

            <div class="project-card">
                <div class="project-gallery">${galleryHTML}</div>
                <div class="project-info">
                    <div class="project-title-group">
                        <h2>${title}</h2>
                        ${subtitleHTML}
                    </div>
                    ${tagsHTML}
                    <p>${description}</p>
                </div>
            </div>

            <div class="lightbox" id="lightbox">
                <span class="lightbox-close" id="lb-close">&times;</span>
                <span class="lightbox-arrow prev" id="lb-prev">&#8592;</span>
                <div class="lightbox-inner" id="lb-inner"></div>
                <span class="lightbox-arrow next" id="lb-next">&#8594;</span>
            </div>`;

        // Wire up lightbox
        const lightbox = shadow.getElementById('lightbox');
        const lbInner = shadow.getElementById('lb-inner');
        const lbClose = shadow.getElementById('lb-close');
        const lbPrev = shadow.getElementById('lb-prev');
        const lbNext = shadow.getElementById('lb-next');
        let current = 0;

        const open = (index) => {
            current = index;
            render();
            lightbox.classList.add('open');
            document.addEventListener('keydown', onKey);
        };

        const close = () => {
            lightbox.classList.remove('open');
            lbInner.innerHTML = '';
            document.removeEventListener('keydown', onKey);
        };

        const render = () => {
            lbInner.innerHTML = '';
            const item = media[current];
            const isShort = typeof item === 'object' && item.type === 'short';
            lbInner.classList.toggle('portrait', isShort);

            if (typeof item === 'string') {
                const img = document.createElement('img');
                img.src = item;
                img.alt = title;
                lbInner.appendChild(img);
            } else if (item.type === 'youtube' || item.type === 'short') {
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${item.id}?autoplay=1`;
                iframe.allow = 'autoplay; fullscreen; picture-in-picture';
                lbInner.appendChild(iframe);
            }
            lbPrev.classList.toggle('hidden', current === 0);
            lbNext.classList.toggle('hidden', current === media.length - 1);
        };

        const onKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft' && current > 0) { current--; render(); }
            if (e.key === 'ArrowRight' && current < media.length - 1) { current++; render(); }
        };

        shadow.querySelectorAll('.gallery-thumb').forEach((el) => {
            el.addEventListener('click', () => open(Number(el.dataset.index)));
        });

        lbClose.addEventListener('click', close);
        lbPrev.addEventListener('click', () => { current--; render(); });
        lbNext.addEventListener('click', () => { current++; render(); });
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) close();
        });
    }
}

customElements.define('project-item', ProjectItem);
