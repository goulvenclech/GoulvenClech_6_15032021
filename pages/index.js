/**
 * Home page of the application
 */
export class IndexPage extends HTMLElement {
    constructor() {
        super();
    } 
    
    /**
     * Insert the page template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="flex flex-row flex-wrap max-w-screen-xl h-20 mx-auto align-middle mb-12">
                <img alt="Fisheye logo" class="h-12"
                  src="` + logo +  `" ></img>
                <div class="flex-grow"></div>
                <h1 class="text-4xl text-primary">
                    Nos photographes
                </h1>
            </div>
            <main id="content" class="max-w-screen-xl mx-auto">
                <featured-photographers></featured-photographers>
            </main>
            
        `;
        this.appendChild(template.content);
        // change the page title
        document.title = "Fisheye";
    }
}

// Import logo from assets
import logo from '../assets/images/logo.png'