export class Usercard extends HTMLElement {
    constructor() {
        super();
        // take information
        this.user = "Error";
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <main id = "content">Profil de : <span></span></main>
        `;
        this.appendChild(template.content);
        this.render();
    }
    
    render() {
        const array = ["user1","user2"];
        this.user = this.getAttribute('user').slice(1);
        if (array.includes(this.user)) {
            this.querySelector('span').innerHTML = this.user
        } else {
            this.querySelector('main').innerHTML = "Cet utilisateur n'existe pas"
        }
    }
}


