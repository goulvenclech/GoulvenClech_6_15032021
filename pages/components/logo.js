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
            <a href="/" class="inlineblock">
                <img alt="Fisheye page d'accueil" class="h-12 lg:mr-12"
                src="` + logo +  `" ></img>
            </a>
        `;
        this.appendChild(template.content);
    }
}

// Import logo from assets
import logo from '../../assets/images/logo.png'