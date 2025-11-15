export default class ExperimentItem extends HTMLElement {
    constructor() {
        super(); // Always call super() in the constructor
        const name = this.getAttribute('name');
        const link = this.getAttribute('link');
        const image = this.getAttribute('image');
        const imageAlt = this.getAttribute('imageAlt');
        const shadow = this.attachShadow({ mode: 'open' });

        const text = this.innerHTML;
        shadow.innerHTML = `
            <style>
            a,
            a:hover,
            a:visited,
            a:active {
                color: inherit;
                text-decoration: none;
            }
            
            .experiment {
                background-position: center;
                background-repeat: no-repeat;
                background-image: url(${image});
                font-weight: bold;
                margin: 0.2rem;
                width: 300px;
                height: 300px;
                z-index: 10;
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                div {
                    background-color: var(--secondary-color);
                    padding: 2px;
                    color: var(--main-color);
                }
            }
            </style>
            <a
                href="${link}"
                target="_blank"
            >
                <div class="experiment">
                    <div>
                        ${name}
                        >
                    </div>
                </div>
            </a>`;

        // shadow.innerHTML = `<div>test</div>`;

        // const template = document.createElement('template');
        // template.innerHTML = ``;
        // this.appendChild(template.content.cloneNode(true));
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

customElements.define('experiment-item', ExperimentItem);
