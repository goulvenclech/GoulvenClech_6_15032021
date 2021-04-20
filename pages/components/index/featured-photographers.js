/**
 * A component that will create one <photographer-card> for each photographer
 * in order to feature them on the index page
 */
export class featuredPhotographers extends HTMLElement {
    constructor() {
        super();
        // get all the photographers from the data
        this.photographers = data.photographers;
    } 
    
    /**
     * Insert an flex template, then call render()
     */
    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="grid">
            </div>
        `;
        this.appendChild(template.content);
        this.render();
    }
    
    /**
     * Add the to the template an <photographer-card> for each photographer
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
