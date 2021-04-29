/**
 * A component that will display all the photographer's medias on his page
 */
export class photographerMedias extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
        // get the photographer name from ID
        this.photographerName = this.getPhotographerData(this.id).name;
        // get the photographer Data
        this.photographerMedias = data.media.filter(media => media.photographerId == this.id);

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
        this.photographerMedias.forEach(media => {
            if(media.image) {
                this.querySelector("section").insertAdjacentHTML('beforeEnd', 
                '<img class="h-80 w-full object-cover rounded-md" src="./images/' + this.photographerName.split(' ')[0] + '/' + media.image.slice(0, -4) + '-min.jpg">');
            }else if(media.video) {
                this.querySelector("section").insertAdjacentHTML('beforeEnd', 
                '<div class="bg-gray-200 h-80 w-full object-cover rounded-md"></div>');
            }
            
        });
    }

    /**
     * From an ID return a JS object with all the photographer's data from the JSON
     * @param {integer} id - id of the photographer
     * @returns {object} - all the photographer data
     */
    getPhotographerData(id) {
        // return the photographer in the JSON whose ID match the requested ID
        return data.photographers.find(photographer => photographer.id == id);
    }

}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'