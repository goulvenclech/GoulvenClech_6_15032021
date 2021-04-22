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
        <div class="flex flex-row flex-wrap max-w-screen-2xl h-20 mx-auto align-middle mb-12">
            <img alt="Fisheye logo" class="h-12"
              src="` + logo +  `" ></img>
        </div>
        <main id="content" class="text-center">
            <h3>
                Bienvenue sur le profil de
            </h3>
            <h2>
            </h2>
            <a href="/" class="button my-4 mx-auto">
                Revenir à l'accueil
            </a>
        </main>
    `;
        this.appendChild(template.content);
        this.render();
    }
    
    render() {
        if (this.data) {
            this.querySelector('h2').innerHTML = this.data.name
        } else {
            this.querySelector('h3').innerHTML = "Cet utilisateur n'existe pas"
        }
    }

    /**
     * From an ID return a JS object with all the user's data from the JSON
     * @param {integer} id - id of the user
     * @returns {object} - all the user data
     */
    getUserData(id) {
        // return the photographer in the JSON whose ID match the requested ID
        return data.photographers.find(user => user.id == id);
    }
}

// Import data from the JSON
import data from '../assets/data/FishEyeDataFR.json'
// Import logo from assets
import logo from '../assets/images/logo.png'

