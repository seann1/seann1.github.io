export default class ComfyUIItem extends HTMLElement {
    constructor() {
        super();
        const title = this.getAttribute('title') || '';
        const model = this.getAttribute('model') || '';
        const tags = this.getAttribute('tags') || '';
        const description = this.getAttribute('description') || '';

        // --- mode A: comparison results (clean-plate style) ---
        const before = this.getAttribute('before') || '';
        let results = [];
        try { results = JSON.parse(this.getAttribute('results') || '[]'); } catch (_) {}

        // --- mode B: workflows + gallery (lora-controlnet style) ---
        let workflows = [];
        try { workflows = JSON.parse(this.getAttribute('workflows') || '[]'); } catch (_) {}
        let gallery = [];
        try { gallery = JSON.parse(this.getAttribute('gallery') || '[]'); } catch (_) {}

        const shadow = this.attachShadow({ mode: 'open' });

        // Build flat allMedia list for lightbox navigation
        const allMedia = [];

        let bodyHTML = '';

        if (results.length) {
            // Mode A — per-result Before/Workflow/After rows
            results.forEach(r => {
                if (before) allMedia.push({ src: before, label: 'Before' });
                if (r.workflow) allMedia.push({ src: r.workflow, label: 'Workflow' });
                if (r.after) allMedia.push({ src: r.after, label: 'After' });
            });

            bodyHTML = results.map((r, ri) => {
                const base = ri * 3;
                const noteHTML = r.note ? `<p class="result-note">${r.note}</p>` : '';
                return `
                <div class="result">
                    <div class="result-header">
                        <span class="result-label">${r.label || ''}</span>
                        ${noteHTML}
                    </div>
                    <div class="result-row">
                        ${before ? `<div class="media-item" data-index="${base}">
                            <img src="${before}" alt="Before" />
                            <span class="media-label">Before</span>
                        </div>` : ''}
                        ${r.workflow ? `<div class="media-item" data-index="${base + 1}">
                            <img src="${r.workflow}" alt="Workflow" />
                            <span class="media-label">Workflow</span>
                        </div>` : ''}
                        ${r.after ? `<div class="media-item" data-index="${base + 2}">
                            <img src="${r.after}" alt="After" />
                            <span class="media-label">After</span>
                        </div>` : ''}
                    </div>
                </div>`;
            }).join('');

        } else if (workflows.length || gallery.length) {
            // Mode B — workflow strip + results grid
            workflows.forEach((src, i) => allMedia.push({ src, label: `Workflow ${i + 1}` }));
            gallery.forEach((src, i) => allMedia.push({ src, label: `Result ${i + 1}` }));

            const workflowHTML = workflows.length ? `
                <div class="section-label">Workflows</div>
                <div class="workflow-row">
                    ${workflows.map((src, i) => `
                        <div class="media-item" data-index="${i}">
                            <img src="${src}" alt="Workflow ${i + 1}" />
                            <span class="media-label">Workflow ${i + 1}</span>
                        </div>`).join('')}
                </div>` : '';

            const galleryHTML = gallery.length ? `
                <div class="section-label">Results</div>
                <div class="results-grid">
                    ${gallery.map((src, i) => `
                        <div class="media-item" data-index="${workflows.length + i}">
                            <img src="${src}" alt="Result ${i + 1}" />
                            <span class="media-label">Result ${i + 1}</span>
                        </div>`).join('')}
                </div>` : '';

            bodyHTML = workflowHTML + galleryHTML;
        }

        const modelHTML = model ? `<p class="model-tag">Model: ${model}</p>` : '';
        const tagsHTML = tags ? `<p class="tags">${tags}</p>` : '';

        shadow.innerHTML = `
            <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }

            .item {
                border-top: 2px solid var(--secondary-color, #a6034f);
                padding: 2.5em 0;
            }

            .info {
                display: flex;
                flex-direction: column;
                gap: 0.8em;
                margin-bottom: 2em;
            }

            h2 {
                font-family: 'Bebas Neue', 'Poppins', sans-serif;
                font-size: 2.2em;
                color: var(--secondary-color, #a6034f);
                letter-spacing: 0.05em;
                line-height: 1;
            }

            .model-tag {
                font-family: 'Poppins', sans-serif;
                font-size: 0.75em;
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: var(--tertiary-color, #b7ff00);
            }

            .tags {
                font-family: 'Poppins', sans-serif;
                font-size: 0.75em;
                color: var(--secondary-color, #a6034f);
                opacity: 0.7;
                font-style: italic;
            }

            p.description {
                font-family: 'Poppins', sans-serif;
                font-size: 0.92em;
                line-height: 1.75;
                color: inherit;
                max-width: 70ch;
            }

            /* Mode A */
            .result { margin-bottom: 2em; }

            .result-header {
                display: flex;
                align-items: baseline;
                gap: 1.5em;
                margin-bottom: 0.6em;
                flex-wrap: wrap;
            }

            .result-label {
                font-family: 'Bebas Neue', 'Poppins', sans-serif;
                font-size: 1.1em;
                letter-spacing: 0.08em;
                color: var(--secondary-color, #a6034f);
            }

            .result-note {
                font-family: 'Poppins', sans-serif;
                font-size: 0.78em;
                color: inherit;
                opacity: 0.65;
                font-style: italic;
            }

            .result-row {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0.6em;
            }

            @media (max-width: 600px) {
                .result-row { grid-template-columns: 1fr; }
            }

            .result-row .media-item img {
                height: 180px;
                object-fit: cover;
            }

            /* Mode B */
            .section-label {
                font-family: 'Bebas Neue', 'Poppins', sans-serif;
                font-size: 1.1em;
                letter-spacing: 0.08em;
                color: var(--secondary-color, #a6034f);
                margin-bottom: 0.6em;
            }

            .workflow-row {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 0.6em;
                margin-bottom: 2em;
            }

            @media (max-width: 600px) {
                .workflow-row { grid-template-columns: 1fr; }
            }

            .workflow-row .media-item img {
                height: auto;
                object-fit: contain;
            }

            .results-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0.6em;
            }

            @media (max-width: 700px) {
                .results-grid { grid-template-columns: repeat(2, 1fr); }
            }

            @media (max-width: 400px) {
                .results-grid { grid-template-columns: 1fr; }
            }

            .results-grid .media-item img {
                height: 220px;
                object-fit: cover;
            }

            /* Shared */
            .media-item {
                position: relative;
                cursor: pointer;
                overflow: hidden;
            }

            .media-item img {
                width: 100%;
                display: block;
                transition: transform 0.35s ease;
            }

            .media-item:hover img { transform: scale(1.04); }

            .media-label {
                position: absolute;
                bottom: 0;
                left: 0;
                background: var(--secondary-color, #a6034f);
                color: var(--main-color, #bfbdbd);
                font-family: 'Bebas Neue', 'Poppins', sans-serif;
                font-size: 0.8em;
                letter-spacing: 0.1em;
                padding: 2px 10px;
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
            }

            .lightbox-inner img {
                max-width: 90vw;
                max-height: 85vh;
                object-fit: contain;
                display: block;
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

            <div class="item">
                <div class="info">
                    <h2>${title}</h2>
                    ${modelHTML}
                    ${tagsHTML}
                    <p class="description">${description}</p>
                </div>
                ${bodyHTML}
            </div>

            <div class="lightbox" id="lightbox">
                <span class="lightbox-close" id="lb-close">&times;</span>
                <span class="lightbox-arrow prev" id="lb-prev">&#8592;</span>
                <div class="lightbox-inner" id="lb-inner"></div>
                <span class="lightbox-arrow next" id="lb-next">&#8594;</span>
            </div>`;

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
            const img = document.createElement('img');
            img.src = allMedia[current].src;
            img.alt = allMedia[current].label;
            lbInner.appendChild(img);
            lbPrev.classList.toggle('hidden', current === 0);
            lbNext.classList.toggle('hidden', current === allMedia.length - 1);
        };

        const onKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft' && current > 0) { current--; render(); }
            if (e.key === 'ArrowRight' && current < allMedia.length - 1) { current++; render(); }
        };

        shadow.querySelectorAll('.media-item').forEach((el) => {
            el.addEventListener('click', () => open(Number(el.dataset.index)));
        });

        lbClose.addEventListener('click', close);
        lbPrev.addEventListener('click', () => { current--; render(); });
        lbNext.addEventListener('click', () => { current++; render(); });
        lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    }
}

customElements.define('comfyui-item', ComfyUIItem);
