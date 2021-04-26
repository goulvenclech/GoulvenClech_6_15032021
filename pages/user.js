/**
 * A page displaying an user's profile
 */
export class UserPage extends HTMLElement {
    constructor() {
        super();
        // get the user ID
        this.id = this.getAttribute('user');
        // get the user Data
        this.data = this.getUserData(this.id);
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <fisheye-logo></fisheye-logo>
        <main id="content" class="max-w-screen-xl mx-auto">
            <photographer-profile></photographer-profile>
            <a href="/" class="button my-4 mx-auto">
                Revenir à l'accueil
            </a>
        </main>
    `;
        this.appendChild(template.content);
        this.render();
    }
    
    render() {
        // display an error if the user ID is invalid
        if (!this.data) {
            this.querySelector('photographer-profile').remove();
            this.querySelector("main").insertAdjacentHTML('afterBegin',
            "<p>L'ID que vous recherchez est invalide ou le compte a été supprimé.</p>");
            this.querySelector("main").insertAdjacentHTML('afterBegin',
            "<h3>Cet utilisateur n'existe pas 🕵️</h3>");
        }
    }

    /**
     * From an ID return a JS object with all the user's data from the JSON
     * @param {integer} id - id of the user
     * @returns {object} - all the user data
     */
    getUserData(id) {
        // return the photograpbeel Bradfordher in the JSON whose ID match the requested ID
        return data.photographers.find(user => user.id == id);
    }
}

// Import data from the JSON
import data from '../assets/data/FishEyeDataFR.json'

