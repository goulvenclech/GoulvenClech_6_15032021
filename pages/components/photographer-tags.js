/**
 * A component with all the tags, displayed on the index and on the tag pages 
 */
export class photographerTags extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID
        this.id = this.getAttribute("id");
        // get the photographer Data
        this.tags = this.getPhotographerData(this.id).tags;
    }
 
    /**
     * Insert an empty template, then call render()
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="py-2">
            </div>
        `;
        this.appendChild(template.content);
        this.render();
    }

    render() {
        this.tags.forEach(tag => {
            this.querySelector("div").insertAdjacentHTML('beforeEnd',
            '<a class="tag">#' + tag +'</a>');
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
import data from '../../assets/data/FishEyeDataFR.json'