/**
 * A component that will create one <photographer-card> for each 
 * photographer tagged with a specific tag
 */
export class TaggedPhotographers extends HTMLElement {
    constructor() {
        super();
        // get the current tag
        this.tag = window.history.state.url.slice(5);
        // get all the photographers tagged with this tag, from the data
        this.photographers = this.getTaggedPhotographers(this.tag);
    } 
    
    /**
     * Insert an empty template, then call render()
     */
    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
            </div>
        `;
        this.appendChild(template.content);
        this.render();
    }
    
    /**
     * Add to the template an <photographer-card> for each photographer
     * If there is not photographer, display an error
     */
    render() {
        if(this.photographers.length > 0) {
            this.photographers.forEach(FeaturedUsers => {
                this.querySelector("div").insertAdjacentHTML('beforeend',
                "<photographer-card id=" + FeaturedUsers.id + "></photographer-card>");
            })
        } else {
            this.querySelector("div").insertAdjacentHTML('beforebegin',
                `<h3>Le tag #` + this.tag + ` ne correspond a aucun photographe 😔</h3>`);
                this.querySelector("div").insertAdjacentHTML('beforebegin',
                `<a href="/" class="button my-4 mx-auto">Revenir à l'accueil</a>`);
        }
    }

    /**
     * From a tag return all the tagged photographers from the JSON
     * @param {string} tag - a tag
     * @returns {array} - all the photographers tagged
     */
     getTaggedPhotographers(tag) {
        // return all the photographers from the JSON whose tags include the looked tag
        return data.photographers.filter(photographer => photographer.tags.includes(tag));
    }
}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'
