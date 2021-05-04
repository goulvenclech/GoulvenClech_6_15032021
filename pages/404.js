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
            <div class="max-w-screen-xl w-full h-20 mx-auto mb-8">
                <fisheye-logo></fisheye-logo>
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
