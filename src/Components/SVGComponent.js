export default class SVGComponent extends HTMLElement {
    constructor() {
        super(); // Always call super() in the constructor
        // Initialize component state or attach Shadow DOM here
        // const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hero-design"
                width="686"
                height="688"
                viewBox="0 0 686 688"
                style="transform: translate(0px, 0px); opacity: 1"
            >
                <g id="blockdesign" transform="translate(-935 -289)">
                    <rect
                        class="square-anim"
                        data-name="Rectangle 2"
                        width="172"
                        height="172"
                        rx="19"
                        transform="matrix(1,0,0,1,1277,289)"
                        fill="#6e00ff"
                        data-svg-origin="0 0"
                        style="transform-origin: 0px 0px"
                    ></rect>
                    <rect
                        class="square-anim"
                        data-name="Rectangle 10"
                        width="172"
                        height="172"
                        rx="86"
                        transform="matrix(1,0,0,1,1277,461)"
                        fill="#cacaca"
                        data-svg-origin="0 0"
                        style="transform-origin: 0px 0px"
                    ></rect>
                    <rect
                        class="square-anim"
                        data-name="Rectangle 8"
                        width="172"
                        height="172"
                        rx="19"
                        transform="matrix(1,0,0,1,1449,461)"
                        fill="#e5d5fa"
                        data-svg-origin="0 0"
                        style="transform-origin: 0px 0px"
                    ></rect>
                    <rect
                        class="square-anim"
                        data-name="Rectangle 5"
                        width="172"
                        height="172"
                        rx="19"
                        transform="matrix(1,0,0,1,1277,633)"
                        fill="#6e00ff"
                        data-svg-origin="0 0"
                        style="transform-origin: 0px 0px"
                    ></rect>
                    <rect
                        class="square-anim"
                        data-name="Rectangle 3"
                        width="172"
                        height="172"
                        rx="19"
                        transform="matrix(1,0,0,1,1107,461)"
                        fill="#fff"
                        data-svg-origin="0 0"
                        style="transform-origin: 0px 0px"
                    ></rect>
                    <rect
                        class="square-anim"
                        data-name="Rectangle 9"
                        width="172"
                        height="172"
                        rx="86"
                        transform="matrix(1,0,0,1,1107,633)"
                        fill="#00f7ff"
                        data-svg-origin="0 0"
                        style="transform-origin: 0px 0px"
                    ></rect>
                    <rect
                        class="square-anim"
                        data-name="Rectangle 7"
                        width="172"
                        height="172"
                        rx="19"
                        transform="matrix(1,0,0,1,935,633)"
                        fill="#fff"
                        opacity="0.17"
                        data-svg-origin="0 0"
                        style="transform-origin: 0px 0px"
                    ></rect>
                    <rect
                        class="square-anim"
                        data-name="Rectangle 4"
                        width="172"
                        height="172"
                        rx="19"
                        transform="matrix(1,0,0,1,1107,805)"
                        fill="#fff"
                        data-svg-origin="0 0"
                        style="transform-origin: 0px 0px"
                    ></rect>
                </g>
            </svg>
            `;
        this.appendChild(template.content.cloneNode(true));
    }

    // Lifecycle callbacks (optional)
    connectedCallback() {
        // Called when the element is added to the document's DOM
    }

    disconnectedCallback() {
        // Called when the element is removed from the document's DOM
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // Called when an observed attribute changes
    }

    static get observedAttributes() {
        // Define attributes to observe for changes
        return [];
    }
}

customElements.define('svg-component', SVGComponent);
