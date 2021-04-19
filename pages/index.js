export class Indexpage extends HTMLElement {
    constructor() {
        super();
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <main id="content">
                <profile-picture></profile-picture>
                <h2>
                    Kold Barkley
                </h2>
                <h3>Auckland, New Zealand</h3>
                <p>Photographe et réalisateur <3</p>
                <button>
                    Popularité
                </button>
            </main>
            
        `;
        this.appendChild(template.content);
    }
    
    render() {
    }
}
