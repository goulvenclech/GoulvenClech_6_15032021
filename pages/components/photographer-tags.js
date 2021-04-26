/**
 * A component with all the tags, displayed on the index and on the tag pages 
 * Must be call with the photographer's ID as an ID atribute
 */
export class photographerTags extends HTMLElement {
    constructor() {
        // an ID attribute is needed
        super();
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
            '<a class="tag" href="/tag-' + tag + '">#' + tag +'</a>');
        });
        this.activeCurrent();
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

    /**
     * If the session is in a tag page, active the current tag
     */
    activeCurrent() {
        this.querySelectorAll(".tag").forEach(tag => {
            if (window.history.state.url.slice(5) == tag.href.split('tag-')[1]) {
                tag.classList.add("current");
            }
        });
    }
}

// Import data from the JSON
import data from '../../assets/data/FishEyeDataFR.json'