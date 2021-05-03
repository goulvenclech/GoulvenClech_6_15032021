/**
 * A component that will create one <photographer-card> for each photographer
 * in order to feature them on the index page
 */
export class FeaturedPhotographers extends HTMLElement {
    constructor() {
        super();
        // get all the photographers from the data
        this.photographers = data.photographers;
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
     */
    render() {
        this.photographers.forEach(FeaturedUsers => {
            this.querySelector("div").insertAdjacentHTML('beforeend',
            "<photographer-card id=" + FeaturedUsers.id + "></photographer-card>");
        })
    }
}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'
