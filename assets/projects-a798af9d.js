import"./modulepreload-polyfill-3cfb730f.js";/* empty css                 */import"./reel-c517e403.js";class j extends HTMLElement{constructor(){super();const r=this.getAttribute("title")||"",p=this.getAttribute("subtitle")||"",h=this.getAttribute("tags")||"",f=this.getAttribute("description")||"";let s=[];try{s=JSON.parse(this.getAttribute("pictures")||"[]")}catch{}const i=this.attachShadow({mode:"open"}),u=s.map((t,a)=>typeof t=="string"?`<img src="${t}" alt="${r}" data-index="${a}" class="gallery-thumb" />`:t.type==="youtube"?`
                        <div class="gallery-thumb vimeo-thumb" data-index="${a}">
                            <img src="https://img.youtube.com/vi/${t.id}/hqdefault.jpg" alt="${r}" />
                            <div class="play-icon">▶</div>
                        </div>`:t.type==="short"?`
                        <div class="gallery-thumb vimeo-thumb short-thumb" data-index="${a}">
                            <img src="https://img.youtube.com/vi/${t.id}/hqdefault.jpg" alt="${r}" />
                            <div class="play-icon">▶</div>
                        </div>`:"").join(""),y=p?`<span class="project-subtitle">${p}</span>`:"",v=h?`<p class="project-tags">${h}</p>`:"";i.innerHTML=`
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
                <div class="project-gallery">${u}</div>
                <div class="project-info">
                    <div class="project-title-group">
                        <h2>${r}</h2>
                        ${y}
                    </div>
                    ${v}
                    <p>${f}</p>
                </div>
            </div>

            <div class="lightbox" id="lightbox">
                <span class="lightbox-close" id="lb-close">&times;</span>
                <span class="lightbox-arrow prev" id="lb-prev">&#8592;</span>
                <div class="lightbox-inner" id="lb-inner"></div>
                <span class="lightbox-arrow next" id="lb-next">&#8594;</span>
            </div>`;const c=i.getElementById("lightbox"),n=i.getElementById("lb-inner"),x=i.getElementById("lb-close"),g=i.getElementById("lb-prev"),m=i.getElementById("lb-next");let e=0;const w=t=>{e=t,l(),c.classList.add("open"),document.addEventListener("keydown",b)},d=()=>{c.classList.remove("open"),n.innerHTML="",document.removeEventListener("keydown",b)},l=()=>{n.innerHTML="";const t=s[e],a=typeof t=="object"&&t.type==="short";if(n.classList.toggle("portrait",a),typeof t=="string"){const o=document.createElement("img");o.src=t,o.alt=r,n.appendChild(o)}else if(t.type==="youtube"||t.type==="short"){const o=document.createElement("iframe");o.src=`https://www.youtube.com/embed/${t.id}?autoplay=1`,o.allow="autoplay; fullscreen; picture-in-picture",n.appendChild(o)}g.classList.toggle("hidden",e===0),m.classList.toggle("hidden",e===s.length-1)},b=t=>{t.key==="Escape"&&d(),t.key==="ArrowLeft"&&e>0&&(e--,l()),t.key==="ArrowRight"&&e<s.length-1&&(e++,l())};i.querySelectorAll(".gallery-thumb").forEach(t=>{t.addEventListener("click",()=>w(Number(t.dataset.index)))}),x.addEventListener("click",d),g.addEventListener("click",()=>{e--,l()}),m.addEventListener("click",()=>{e++,l()}),c.addEventListener("click",t=>{t.target===c&&d()})}}customElements.define("project-item",j);
