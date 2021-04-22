/**
 * Error 404 display page
 */
 export class Error404Page extends HTMLElement {
    constructor() {
        super();
    } 
    
    /**
     * Insert the page template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="flex flex-row flex-wrap max-w-screen-2xl h-20 mx-auto align-middle mb-12">
                <img alt="Fisheye logo" class="h-12"
                  src="` + logo +  `" ></img>
            </div>
            <main id="content" class="text-center">
                <h3>
                    Erreur 404 😭
                </h3>
                <p>
                    La page que vous recherchez n'existe pas ou n'est plus disponible !
                </p>
                <a href="/" class="button my-4 mx-auto">
                    Revenir à l'accueil
                </a>
            </main>
        `;
        this.appendChild(template.content);
        // change the page title
        document.title = "Erreur 404 - Fisheye";
    }
}

// Import logo from assets
import logo from '../assets/images/logo.png'