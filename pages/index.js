/**
 * Home page of the application
 */
export class IndexPage extends HTMLElement {
    constructor() {
        super();
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <main id="content">
                <featured-photographers></featured-photographers>
            </main>
            
        `;
        this.appendChild(template.content);
    }
    
    render() {}
}
