/**
 * A component that will present a photographer on his user page
 */
export class PhotographerInfos extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
        // get the photographer Data
        this.photographerData = this.getPhotographerData(this.id);
    }
 
    /**
     * Insert an template, hydrated by photographerData
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <section class="bg-gray-100 rounded-md py-8 px-10 mt-10 flex">
                <div class="mr-6">
                    <h2>`
                        + this.photographerData.name +
                    `</h2>
                    <h3>`
                        + this.photographerData.city + `, ` + this.photographerData.country +
                    `</h3>
                    <p>`
                        + this.photographerData.tagline +
                    `</p>
                    <photographer-tags id="` + this.id +`"><photographers-tags>
                </div>
                <div class="mr-6 lg:relative lg:bottom-0 lg:left-0 lg:ml-0 left-1/2 -ml-24 fixed">
                    <a class="button my-4 mx-auto">
                        Contactez-moi
                    </a>
                </div>
                <div class="flex-grow text-right">
                    <img class="h-48 w-48 rounded-full object-cover inline-block"
                    src="./images/portraits/` + this.photographerData.portrait + `"></img>
                </div
            </section>
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
import data from '../../../assets/data/FishEyeDataFR.json'