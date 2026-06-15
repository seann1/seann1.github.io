import"./modulepreload-polyfill-3cfb730f.js";/* empty css                 */import"./reel-c517e403.js";class z extends HTMLElement{constructor(){super();const y=this.getAttribute("title")||"",b=this.getAttribute("model")||"",u=this.getAttribute("tags")||"",k=this.getAttribute("description")||"",d=this.getAttribute("before")||"";let c=[];try{c=JSON.parse(this.getAttribute("results")||"[]")}catch{}let l=[];try{l=JSON.parse(this.getAttribute("workflows")||"[]")}catch{}let r=[];try{r=JSON.parse(this.getAttribute("gallery")||"[]")}catch{}const a=this.attachShadow({mode:"open"}),s=[];let p="";if(c.length)c.forEach(e=>{d&&s.push({src:d,label:"Before"}),e.workflow&&s.push({src:e.workflow,label:"Workflow"}),e.after&&s.push({src:e.after,label:"After"})}),p=c.map((e,h)=>{const o=h*3,t=e.note?`<p class="result-note">${e.note}</p>`:"";return`
                <div class="result">
                    <div class="result-header">
                        <span class="result-label">${e.label||""}</span>
                        ${t}
                    </div>
                    <div class="result-row">
                        ${d?`<div class="media-item" data-index="${o}">
                            <img src="${d}" alt="Before" />
                            <span class="media-label">Before</span>
                        </div>`:""}
                        ${e.workflow?`<div class="media-item" data-index="${o+1}">
                            <img src="${e.workflow}" alt="Workflow" />
                            <span class="media-label">Workflow</span>
                        </div>`:""}
                        ${e.after?`<div class="media-item" data-index="${o+2}">
                            <img src="${e.after}" alt="After" />
                            <span class="media-label">After</span>
                        </div>`:""}
                    </div>
                </div>`}).join("");else if(l.length||r.length){l.forEach((o,t)=>s.push({src:o,label:`Workflow ${t+1}`})),r.forEach((o,t)=>s.push({src:o,label:`Result ${t+1}`}));const e=l.length?`
                <div class="section-label">Workflows</div>
                <div class="workflow-row">
                    ${l.map((o,t)=>`
                        <div class="media-item" data-index="${t}">
                            <img src="${o}" alt="Workflow ${t+1}" />
                            <span class="media-label">Workflow ${t+1}</span>
                        </div>`).join("")}
                </div>`:"",h=r.length?`
                <div class="section-label">Results</div>
                <div class="results-grid">
                    ${r.map((o,t)=>`
                        <div class="media-item" data-index="${l.length+t}">
                            <img src="${o}" alt="Result ${t+1}" />
                            <span class="media-label">Result ${t+1}</span>
                        </div>`).join("")}
                </div>`:"";p=e+h}const $=b?`<p class="model-tag">Model: ${b}</p>`:"",L=u?`<p class="tags">${u}</p>`:"";a.innerHTML=`
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
                    <h2>${y}</h2>
                    ${$}
                    ${L}
                    <p class="description">${k}</p>
                </div>
                ${p}
            </div>

            <div class="lightbox" id="lightbox">
                <span class="lightbox-close" id="lb-close">&times;</span>
                <span class="lightbox-arrow prev" id="lb-prev">&#8592;</span>
                <div class="lightbox-inner" id="lb-inner"></div>
                <span class="lightbox-arrow next" id="lb-next">&#8594;</span>
            </div>`;const m=a.getElementById("lightbox"),f=a.getElementById("lb-inner"),E=a.getElementById("lb-close"),v=a.getElementById("lb-prev"),w=a.getElementById("lb-next");let i=0;const A=e=>{i=e,n(),m.classList.add("open"),document.addEventListener("keydown",x)},g=()=>{m.classList.remove("open"),f.innerHTML="",document.removeEventListener("keydown",x)},n=()=>{f.innerHTML="";const e=document.createElement("img");e.src=s[i].src,e.alt=s[i].label,f.appendChild(e),v.classList.toggle("hidden",i===0),w.classList.toggle("hidden",i===s.length-1)},x=e=>{e.key==="Escape"&&g(),e.key==="ArrowLeft"&&i>0&&(i--,n()),e.key==="ArrowRight"&&i<s.length-1&&(i++,n())};a.querySelectorAll(".media-item").forEach(e=>{e.addEventListener("click",()=>A(Number(e.dataset.index)))}),E.addEventListener("click",g),v.addEventListener("click",()=>{i--,n()}),w.addEventListener("click",()=>{i++,n()}),m.addEventListener("click",e=>{e.target===m&&g()})}}customElements.define("comfyui-item",z);
