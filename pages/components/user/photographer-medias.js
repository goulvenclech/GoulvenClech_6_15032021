/**
 * A component that will display all the photographer's medias on his page
 */
export class photographerMedias extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
        // get the photographer name from ID
        this.photographerName = this.getPhotographerName(this.id);
        // get the photographer Data
        this.medias = this.getMedias(this.id);
    }
 
    /**
     * Insert an template, hydrated by photographerData
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <section class="mt-10 grid grid-cols-3 gap-12">

        </section>
        `;
        this.appendChild(template.content);
        this.render();
    }

    /**
     * 
     */
    render() {
        this.medias.forEach(media => {
            if(media.image) {
                this.querySelector("section").insertAdjacentHTML('beforeEnd', 
                '<img class="h-80 w-full object-cover rounded-md" src="./images/' + this.photographerName.split(' ')[0] + '/' + media.image.slice(0, -4) + '-min.jpg">');
            }else if(media.video) {
                this.querySelector("section").insertAdjacentHTML('beforeEnd', 
                '<video class="h-80 w-full object-cover rounded-md none"><source src="./images/' + this.photographerName.split(' ')[0] + '/' + media.video + '" type="video/mp4"></video>');
            }
            
        });
    }

    /**
     * From an ID return a string with the photographer's name from the JSON
     * @param {integer} id - id of the photographer
     * @returns {string} - the photographer's name
     */
    getPhotographerName(id) {
        // return the photographer in the JSON whose ID match the requested ID
        return data.photographers.find(photographer => photographer.id == id).name;
    }

    /**
     * From an ID return an array with all the photographer's medias from the JSON
     * @param {integer} id - id of the photographer
     * @returns {array} - the photographer's medias
     */
    getMedias(id) {
        // return the photographer in the JSON whose ID match the requested ID
        return data.media.filter(media => media.photographerId == id);
    }

}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'