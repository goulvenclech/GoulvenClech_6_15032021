/**
 * A component with all the tags, displayed on the index and on the tag pages 
 */
export class tagsNav extends HTMLElement {
    constructor() {
        super();
    }
 
    /**
     * Insert an template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <a class="tag">
                #Portrait
            </a>
            <a class="tag">
                #Art
            </a>
            <a class="tag">
                #Fashion
            </a>
            <a class="tag">
                #Architecture
            </a>
            <a class="tag">
                #Travel
            </a>
            <a class="tag">
                #Sport
            </a>
            <a class="tag">
                #Animals
            </a>
            <a class="tag">
                #Events
            </a>
        `;
        this.appendChild(template.content);
    }
}