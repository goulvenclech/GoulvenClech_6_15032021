/**
 * A component that will present a photographer on the index page
 * Must be call with the photographer's ID as an ID atribute
 */
export class photographerCard extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID
        this.id = this.getAttribute("id");
        // get the photographer Data
        this.photographerData = this.getPhotographerData(this.id);
    }
 
    /**
     * Insert an empty template, then call render()
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="p-4 m-4">
                <img class="h-48 w-48 rounded-full object-cover"
                     src=""></img>
                <h2 class="text-4xl"></h2>
            </div>
            <p class="m-4 text-4xl"></p>
        `;
        this.appendChild(template.content);
        this.render();
    }
    
    /**
     * Hydrate the template with the the photographer's Data
     */
    render() {
        this.querySelector("img").src = "../../../assets/images/portraits/" + this.photographerData.portrait;
        this.querySelector("h2").innerHTML = this.photographerData.name;
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