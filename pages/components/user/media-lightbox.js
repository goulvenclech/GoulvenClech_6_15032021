/**
 * 
 */
export class MediaLightbox extends HTMLElement {
    constructor() {
        super();
        // get the photographer ID from url
        this.id = window.history.state.url.slice(5);
        // get the photographer medias
        this.medias = this.getMedias(this.id);
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
                    <button class="w-14 text-5xl text-bold text-primary"><</button>
                </div>

                <div class="flex-shrink">
                    <img class="self-center" src=""></img>
                    <p class="text-primary text-xl my-2"></p>
                </div>

                <div class="flex-grow flex flex-row">
                    <button class="closeLightbox absolute w-10 text-bold text-5xl text-primary">x</button>
                    <button class="w-14 text-5xl text-bold text-primary">></button>
                </div>

            
            </section>
        </div>
        `;
        this.appendChild(template.content);
        this.sort("date");
        this.listenSort();
        this.listenOpenLightbox();
        this.listenCloseLightbox();
    }

    /**
     *  
     */
    render(media) {
        this.querySelector("div").style.display = "block";
        this.querySelector("img").src = media.src.slice(0,-8) + '.jpg';
        this.querySelector("p").innerHTML = media.alt;
    }

    /**
     * Sort the medias in terms of date, likes or title
     * @param {sting} value - parameters of sorting
     */
    sort(value) {
        switch (value) {
            case "date":
                this.medias.sort((m1, m2) => {
                    let d1 = new Date(m1.date);
                    let d2 = new Date(m2.date);
                    return d2 - d1;
                })
                break;
        
            case "likes":
                this.medias.sort((m1, m2) => m2.likes - m1.likes);
                break;
        
            case "title":
                this.medias.sort((m1, m2) => m1.title.toLowerCase().localeCompare(m2.title.toLowerCase()));
                break;
        
            default:
                console.log("Oops")
                break;
        }
        this.listenOpenLightbox();
    }

    /**
     * Listen to the <medias-select> component, and sort() when a sorting parameter is selected
     */
     listenSort() {
        document.getElementById("sortMedias").addEventListener('change', select => {
            this.sort(select.target.value);
        })
    }

    /**
     * 
     */
    listenOpenLightbox() {
        document.querySelectorAll("article img").forEach(media => {
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

    /**
     * From an ID return an array with all the photographer's medias from the JSON
     * @param {integer} id - id of the photographer
     * @returns {array} - the photographer's medias
     */
    getMedias(id) {
        // return the photographer in the JSON whose ID match the requested ID
        return data.media.filter(media => media.photographerId == id);
    }

}

// Import data from the JSON
import data from '../../../assets/data/FishEyeDataFR.json'
