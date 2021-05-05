/**
 * A component that will display a photographer's media on his page
 */
export class MediaCard extends HTMLElement {
    constructor() {
        // an ID attribute is needed
        super();
        // get the media Data
        this.mediaData = this.getMediaData(this.id);
        // get the photographer name from media ID
        this.photographerName = this.getPhotographerName(this.mediaData);
        // 
        this.likes = this.mediaData.likes;
    }
 
    /**
     * Insert an template, then call render() & listenSort()
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <article>
                <div class="flex gap py-2">
                    <p class="text-primary text-xl flex-grow">` + this.mediaData.title + `</p>
                    <button class="text-primary text-xl text-right">`
                         + this.likes + 
                    ` ❤️</button>
                </div>
            </article>
        `;
        this.appendChild(template.content);
        this.render();
        this.likeButton();
    }

    /**
     * Work in progress
     */
    render() {
        if(this.mediaData.image) {
            this.querySelector("article").insertAdjacentHTML('afterbegin', 
            `<img class="h-80 w-full object-cover rounded-md cursor-pointer" 
                alt="` + this.mediaData.title + `" 
                src="./images/` + this.photographerName.split(' ')[0] + `/` + this.mediaData.image.slice(0, -4) + `-min.jpg" 
                id=` + this.mediaData.id + ` tabindex="0">`);
        }else if(this.mediaData.video) {
            this.querySelector("article").insertAdjacentHTML('afterbegin', 
            `<video class="h-80 w-full object-cover rounded-md none cursor-pointer"
                id="` + this.mediaData.id + `"
                tabindex="0"><source alt="` + this.mediaData.title + `" 
                src="./images/` + this.photographerName.split(' ')[0] + `/` + this.mediaData.video + `" 
                type="video/mp4"></video>`);
        }
    }

    likeButton() {
        this.querySelector("button").addEventListener('click', () => {
            this.likes++;
            this.querySelector("button").innerHTML = this.likes + " ❤️";
        })
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