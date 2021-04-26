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
         <fisheye-logo></fisheye-logo>
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
