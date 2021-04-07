export class Indexpage extends HTMLElement {
    constructor() {
        super();
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <nav-bar></nav-bar>
            <main id="content">Content loading...</main>
        `;
        this.appendChild(template.content);
    }
    
    render() {
    }
}
