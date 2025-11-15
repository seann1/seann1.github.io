export default class SkillItem extends HTMLElement {
    constructor() {
        super(); // Always call super() in the constructor
        const name = this.getAttribute('name');
        const image = this.getAttribute('image');
        const imageAlt = this.getAttribute('imageAlt');

        const template = document.createElement('template');
        template.innerHTML = `
            <li class="transition4">
                <img
                    src="${image}"
                    alt="${imageAlt}"
                />
<!--                <p class="skill-title">${name}</p>-->
            </li>
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

customElements.define('skill-item', SkillItem);
