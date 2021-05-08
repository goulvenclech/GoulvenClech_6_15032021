/**
 * A component with all the tags, displayed on the index and on the tag pages 
 * Must be call with the photographer's ID as an ID atribute
 */
export class PhotographerTags extends HTMLElement {
    constructor() {
        // an ID attribute is needed
        super();
        // get the photographer tags
        this.tags = this.getPhotographerTags(this.id);
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
            `<a class="tag" href="/tag-` + tag + `">
                <span class="sr-only">`
                    + tag +
                `</span>
                #` + tag +`</a>`);
        });
        this.activeCurrent();
    }

    /**
     * If the session is in a tag page, active the current tag
     */
    activeCurrent() {
        this.querySelectorAll(".tag").forEach(tag => {
            if (window.history.state.url.slice(5) == tag.href.split('tag-')[1]) {
                tag.classList.add("current");
                tag.href = "/";
            }
        });
    }

    /**
     * From an ID return an array with all the photographer's tags from the JSON
     * @param {integer} id - id of the photographer
     * @returns {array} - all the photographer tags
     */
     getPhotographerTags(id) {
        // return the photographer's tags, from the photographer whose ID match the requested ID
        return data.photographers.find(photographer => photographer.id == id).tags;
    }
}

// Import data from the JSON
import data from '../../assets/data/FishEyeDataFR.json'