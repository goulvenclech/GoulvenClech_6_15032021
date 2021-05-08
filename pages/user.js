/**
 * A page displaying an user's profile, need to be called with an ID attribute
 */
export class UserPage extends HTMLElement {
    constructor() {
        // an ID attribute is needed
        super();
        // get the user Data
        this.data = this.getUserData(this.id);
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="max-w-screen-xl w-full h-10 lg:h-20 mx-auto mb-8">
            <fisheye-logo></fisheye-logo>
        </div>
        <main id="content" class="max-w-screen-xl w-full mx-auto">
            <photographer-profile></photographer-profile>
            <medias-select></medias-select>
            <photographer-medias></photographer-medias>
            <photographer-infos></photographer-infos>
        </main>
        <contact-modal></contact-modal>
        <media-lightbox></media-lightbox>
    `;
        this.appendChild(template.content);
        this.render();
        // change the page title
        document.title = this.data.name + " - Fisheye";
    }
    
    /**
     * display an error if the user ID is invalid
     */
    render() {
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

