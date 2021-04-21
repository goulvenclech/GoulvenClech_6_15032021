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
            <main id = "content">Profil de : <span></span></main>
        `;
        this.appendChild(template.content);
        this.render();
    }
    
    render() {
        console.log(this.data);
        console.log(this.id);
        if (this.data) {
            this.querySelector('span').innerHTML = this.data.name
        } else {
            this.querySelector('main').innerHTML = "Cet utilisateur n'existe pas"
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

