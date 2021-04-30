/**
 * A component that will display a photographer's media on his page
 */
export class mediaCard extends HTMLElement {
    constructor() {
        // an ID attribute is needed
        super();
        // get the media Data
        this.mediaData = this.getMediaData(this.id);
        // get the photographer name from media ID
        this.photographerName = this.getPhotographerName(this.mediaData);
        // 
        this.title = "";
        this.likes = 0;
    }
 
    /**
     * Insert an template, then call render() & listenSort()
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <a href="">
                <div class="flex gap py-2">
                    <p class="text-primary text-xl flex-grow">` + this.mediaData.title + `</p>
                    <button class="text-primary text-xl text-right">`
                         + this.mediaData.likes + 
                    ` ❤️</button>
                </div>
            </a>
        `;
        this.appendChild(template.content);
        this.render();
    }

    /**
     * Work in progress
     */
    render() {
        if(this.mediaData.image) {
            this.querySelector("a").insertAdjacentHTML('afterbegin', 
            '<img class="h-80 w-full object-cover rounded-md" src="./images/' + this.photographerName.split(' ')[0] + '/' + this.mediaData.image.slice(0, -4) + '-min.jpg">');
        }else if(this.mediaData.video) {
            this.querySelector("a").insertAdjacentHTML('afterbegin', 
            '<video class="h-80 w-full object-cover rounded-md none"><source src="./images/' + this.photographerName.split(' ')[0] + '/' + this.mediaData.video + '" type="video/mp4"></video>');
        }
    }

    
    /**
     * From an ID return an object with all the media's data from the JSON
     * @param {integer} id - id of the media
     * @returns {object} - the media's data
     */
     getMediaData(id) {
        // return the media in the JSON whose ID match the requested ID
        return data.media.find(media => media.id == id);
    }

    /**
     * Return a string with the photographer's name from the JSON
     * Require this.mediaData to be correct
     * @returns {string} - the photographer's name
     */
    getPhotographerName(media) {
        // return the photographer in the JSON whose ID match the photographer's ID in the media's data
        return data.photographers.find(photographer => photographer.id == media.photographerId).name;
    }


}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'