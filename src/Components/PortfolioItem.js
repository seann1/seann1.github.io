export default class PortfolioItem extends HTMLElement {
    constructor() {
        super(); // Always call super() in the constructor
        const name = this.getAttribute('name');
        const link = this.getAttribute('link');
        const image = this.getAttribute('image');
        const imageAlt = this.getAttribute('imageAlt');
        const description = this.getAttribute('description');
        const githubLink = this.getAttribute('githubLink');

        const text = this.innerHTML;
        this.innerHTML = '';

        const template = document.createElement('template');
        template.innerHTML = `
            <div class="portfolio-container transition3">
                <div class="portfolio-left">
                    <div class="inner">
                        <p class="subtitle">
                            <a
                                href="${link}"
                                target="_blank"
                                >${name}</a
                            >
                        </p>
                        <div class="featured-title">
                            <a
                                href=${link}
                                target="_blank"
                            >${description}</a>
                        </div>
                        <div class="featured-desc-bottom">
                            ${text}
                        </div>
                        <div class="github-repo-container">
                            <a
                                href="${githubLink}"
                                target="_blank"
                                class="github-link"
                                ><img
                                    src="./images/github.svg"
                                    class="github-repo"
                                    alt="Github"
                                /><span class="view-on-github"
                                    >View On Github</span
                                ></a
                            >
                        </div>
                    </div>
                </div>
                <a href="${link}" target="_blank"
                    ><img
                        src="${image}"
                        alt=${imageAlt}
                /></a>
            </div>
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

customElements.define('portfolio-item', PortfolioItem);
