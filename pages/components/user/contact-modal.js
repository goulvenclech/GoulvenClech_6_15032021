/**
 * 
 */
export class ContactModal extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
    }
 
    /**
     * Insert an template, then call short() & render() & listenSort
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <section class="top-0 left-0 hidden fixed bg-white">
            Bonjour
        </section>
        `;
        this.appendChild(template.content);
        this.listenOpenLightbox();
        this.listenCloseLightbox();
        this.listenSort()
    }

    /**
     *  
     */
    render(media) {
        this.querySelector("div").style.display = "block";
    }


    /**
     * 
     */
    listenSort() {
        document.getElementById("sortMedias").addEventListener('change', () => {
            this.listenOpenLightbox();
        })
    }
    
    /**
     * 
     */
    listenOpenLightbox() {
        document.querySelectorAll("article img, article video").forEach(media => {
            media.addEventListener('click', () => {this.render(media)})
        })
    }

    /**
     * 
     */
    listenCloseLightbox() {
        this.querySelector(".closeLightbox").addEventListener('click', () => {
            this.querySelector("div").style.display = "none";
        })
    }
}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'
