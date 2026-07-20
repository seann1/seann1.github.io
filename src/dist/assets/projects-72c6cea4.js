import"./modulepreload-polyfill-3cfb730f.js";/* empty css                 */import"./reel-c517e403.js";class z extends HTMLElement{constructor(){super();const l=this.getAttribute("title")||"",f=this.getAttribute("subtitle")||"",b=this.getAttribute("tags")||"",w=this.getAttribute("description")||"",o=this.attachShadow({mode:"open"}),p=e=>{try{return JSON.parse(this.getAttribute(e)||"[]")}catch{return[]}},a=p("pictures-before"),g=p("pictures-after"),u=a.length>0||g.length>0,c=u?[...a,...g]:p("pictures"),h=(e,t)=>typeof e=="string"?`<img src="${e}" alt="${l}" data-index="${t}" class="gallery-thumb" />`:e.type==="youtube"?`
                    <div class="gallery-thumb vimeo-thumb" data-index="${t}">
                        <img src="https://img.youtube.com/vi/${e.id}/hqdefault.jpg" alt="${l}" />
                        <div class="play-icon">▶</div>
                    </div>`:e.type==="short"?`
                    <div class="gallery-thumb vimeo-thumb short-thumb" data-index="${t}">
                        <img src="https://img.youtube.com/vi/${e.id}/hqdefault.jpg" alt="${l}" />
                        <div class="play-icon">▶</div>
                    </div>`:"",j=u?`
                <div class="gallery-group">
                    <span class="gallery-group-label">Before</span>
                    <div class="project-gallery">${a.map((e,t)=>h(e,t)).join("")}</div>
                </div>
                <div class="gallery-group">
                    <span class="gallery-group-label">After</span>
                    <div class="project-gallery">${g.map((e,t)=>h(e,t+a.length)).join("")}</div>
                </div>`:`<div class="project-gallery">${c.map((e,t)=>h(e,t)).join("")}</div>`,L=f?`<span class="project-subtitle">${f}</span>`:"",k=b?`<p class="project-tags">${b}</p>`:"";o.innerHTML=`
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

            .project-media {
                display: flex;
                flex-direction: column;
                gap: 1em;
                /* grid items default to min-width: auto, which sizes to
                   their content's max-content width — without this, the
                   wide flex galleries below blow out the grid column
                   (and the page) instead of scrolling internally. */
                min-width: 0;
            }

            .gallery-group {
                display: flex;
                flex-direction: column;
                gap: 0.4em;
                min-width: 0;
            }

            .gallery-group-label {
                font-family: 'Poppins', sans-serif;
                font-size: 0.75em;
                font-weight: 700;
                letter-spacing: 0.15em;
                text-transform: uppercase;
                color: var(--secondary-color, #a6034f);
                opacity: 0.7;
            }

            .project-gallery {
                display: flex;
                gap: 0.5em;
                overflow-x: auto;
                min-width: 0;
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
                <div class="project-media">${j}</div>
                <div class="project-info">
                    <div class="project-title-group">
                        <h2>${l}</h2>
                        ${L}
                    </div>
                    ${k}
                    <p>${w}</p>
                </div>
            </div>

            <div class="lightbox" id="lightbox">
                <span class="lightbox-close" id="lb-close">&times;</span>
                <span class="lightbox-arrow prev" id="lb-prev">&#8592;</span>
                <div class="lightbox-inner" id="lb-inner"></div>
                <span class="lightbox-arrow next" id="lb-next">&#8594;</span>
            </div>`;const d=o.getElementById("lightbox"),s=o.getElementById("lb-inner"),$=o.getElementById("lb-close"),y=o.getElementById("lb-prev"),v=o.getElementById("lb-next");let i=0;const E=e=>{i=e,n(),d.classList.add("open"),document.addEventListener("keydown",x)},m=()=>{d.classList.remove("open"),s.innerHTML="",document.removeEventListener("keydown",x)},n=()=>{s.innerHTML="";const e=c[i],t=typeof e=="object"&&e.type==="short";if(s.classList.toggle("portrait",t),typeof e=="string"){const r=document.createElement("img");r.src=e,r.alt=l,s.appendChild(r)}else if(e.type==="youtube"||e.type==="short"){const r=document.createElement("iframe");r.src=`https://www.youtube.com/embed/${e.id}?autoplay=1`,r.allow="autoplay; fullscreen; picture-in-picture",s.appendChild(r)}y.classList.toggle("hidden",i===0),v.classList.toggle("hidden",i===c.length-1)},x=e=>{e.key==="Escape"&&m(),e.key==="ArrowLeft"&&i>0&&(i--,n()),e.key==="ArrowRight"&&i<c.length-1&&(i++,n())};o.querySelectorAll(".gallery-thumb").forEach(e=>{e.addEventListener("click",()=>E(Number(e.dataset.index)))}),$.addEventListener("click",m),y.addEventListener("click",()=>{i--,n()}),v.addEventListener("click",()=>{i++,n()}),d.addEventListener("click",e=>{e.target===d&&m()})}}customElements.define("project-item",z);
