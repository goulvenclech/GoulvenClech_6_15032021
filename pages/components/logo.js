/**
 * A component that display the website logo 
 */
export class FisheyeLogo extends HTMLElement {
    constructor() {
        super();
    }
 
    /**
     * Insert an template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <a href="/">
                <div class="flex flex-row flex-wrap max-w-screen-2xl h-20 mx-auto align-middle mb-12">
                    <img alt="Fisheye logo" class="h-12"
                    src="` + logo +  `" ></img>
                </div>
            </a>
        `;
        this.appendChild(template.content);
    }
}

// Import logo from assets
import logo from '../../assets/images/logo.png'