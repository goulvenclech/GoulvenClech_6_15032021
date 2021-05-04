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
        // 
        this.totalLikes = 0;
    }
 
    /**
     * Insert an template, hydrated by photographerData
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <aside class="bg-secondary hidden lg:block fixed bottom-0 right-12 p-4">
                <p class="text-white"></p>
            </section>
        `;
        this.appendChild(template.content);
        this.render();
        this.listenNewLikes();
    }

    /**
     * 
     */
    render() {
        this.totalLikes = 0;
        document.querySelectorAll("article button").forEach(likeBtn => {
            console.log(likeBtn.innerHTML.split(" ")[0]);
            this.totalLikes = this.totalLikes + parseInt(likeBtn.innerHTML.split(" ")[0]);
        })
        this.querySelector("aside p").innerHTML = this.totalLikes + " ❤️";
    }

    /**
     * 
     */
    listenNewLikes() {
        document.querySelectorAll("article button").forEach(likeBtn => {
            likeBtn.addEventListener('click', () => {
                this.totalLikes++;
                this.querySelector("aside p").innerHTML = this.totalLikes + " ❤️";
            })
        })
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