export class Usercard extends HTMLElement {
    constructor() {
        super();
        // take information
        this.user = this.getAttribute('user');
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <nav-bar></nav-bar>
            <main id = "content">Profile de : <span></span></main>
        `;
        this.appendChild(template.content);
        this.render();
    }
    
    render() {
        this.element.querySelector('span').innerHTML = this.user
    }
}


