/**
 * A component that will display all the photographer's medias on his page
 */
export class photographerMedias extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
        // get the photographer Data
        this.medias = this.getMedias(this.id);
    }
 
    /**
     * Insert an template, then call render() & listenSort
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <section class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        </section>
        `;
        this.appendChild(template.content);
        this.render();
        this.listenSort();
    }

    /**
     * 
     */
    render() {
        this.medias.forEach(media => {
            this.querySelector("section").insertAdjacentHTML('beforeEnd', 
            '<media-card id="' + media.id + '"></media-card>');
        });
    }

    listenSort() {}

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