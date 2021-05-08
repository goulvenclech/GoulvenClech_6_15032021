/**
 * 
 */
export class MediaLightbox extends HTMLElement {
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
        <div class="top-0 left-0 hidden fixed bg-white h-screen w-screen">
            <section class="lightbox flex">

                <div class="flex-grow flex flex-row-reverse">
                    <button class="previousMediaLightbox w-14 text-5xl text-bold text-primary"><</button>
                </div>

                <div class="flex-shrink">
                    <lightbox-content></lightbox-content>
                    <p class="titleMediaLightbox text-primary text-xl my-2"></p>
                </div>

                <div class="flex-grow flex flex-row">
                    <button class="closeLightbox absolute w-14 text-bold text-5xl text-primary">x</button>
                    <button class="nextMediaLightbox w-14 text-5xl text-bold text-primary">></button>
                </div>

            
            </section>
        </div>
        `;
        this.appendChild(template.content);
        this.listenOpenLightbox();
        this.listenCloseLightbox();
        this.listenSort()
    }

    /**
     *  
     */
    render() {
        this.querySelector("div").style.display = "block";
        document.querySelector("main").inert = true;
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
            media.addEventListener('click', () => {this.render()})
        })
        document.querySelectorAll("article img, article video").forEach(media => {
            media.addEventListener('keydown', event => {
                if(event.key === 'Enter') {
                    this.render()
                }
            })
        })
    }

    /**
     * 
     */
    listenCloseLightbox() {
        this.querySelector(".closeLightbox").addEventListener('click', () => {
            this.querySelector("div").style.display = "none";
            document.querySelector("main").inert = false;
        })
        document.addEventListener('keydown', event => {
            if( event.key === 'Escape') {
                this.querySelector("div").style.display = "none";
                document.querySelector("main").inert = false;
            }
        })
    }
}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'
