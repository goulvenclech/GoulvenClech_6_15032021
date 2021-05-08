/**
 * A component that will present a photographer on the index page
 * Must be call with the photographer's ID as an ID atribute
 */
export class PhotographerCard extends HTMLElement {
    constructor() {
        // an ID attribute is needed
        super();
        // get the photographer Data
        this.photographerData = this.getPhotographerData(this.id);
    }
 
    /**
     * Insert an template, hydrated by photographerData
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <a href="/user` + this.id + `"
              class="block mx-auto max-w-md z-10"
              title="` + this.photographerData.name + `">
                <img class="h-48 w-48 mx-auto rounded-full object-cover"
                  src="./images/portraits/` + this.photographerData.portrait + `"
                  alt="` + this.photographerData.name + `"></img>
                <h2 class="text-4xl leading-snug text-center mb-0">`
                    + this.photographerData.name +
                `</h2>
            </a>
            <p class="text-sm leading-5 text-primary text-center">`
                + this.photographerData.city + `, ` + this.photographerData.country +
            `</p>
            <p class="text-xs leading-5 text-center">`
                + this.photographerData.tagline +
            `</p>
            <p class="text-xs leading-5 text-center">`
                + this.photographerData.price + `€/jour
            </p>
            <photographer-tags class="text-center" id="` + this.id + `"></photographer-tags>
        `;
        this.appendChild(template.content);
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
import data from '../../assets/data/FishEyeDataFR.json'