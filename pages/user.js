export class Usercard extends HTMLElement {
    constructor() {
        super();
        // take information
        this.user = "Error";
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <nav-bar></nav-bar>
            <main id = "content">
                Profil de : <span></span><br>
                <like-btn></like-btn><br>
                <like-btn></like-btn><br>
                <like-btn></like-btn>
                <like-ctr></like-ctr>
            </main>
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


