/**
 * A component that will display all the photographer's medias on his page
 */
export class PhotographerMedias extends HTMLElement {
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
        <section class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">

        </section>
        `;
        this.appendChild(template.content);
        this.sort("date");
        this.render();
        this.listenSort();
    }

    /**
     *  Clear the section, then create a <media-card> for each media
     */
    render() {
        this.querySelector("section").innerHTML = "";
        this.medias.forEach(media => {
            this.querySelector("section").insertAdjacentHTML('beforeEnd', 
            '<media-card id="' + media.id + '"></media-card>');
        });
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
    }

    /**
     * Listen to the <medias-select> component, and sort() when a sorting parameter is selected
     */
     listenSort() {
        document.getElementById("sortMedias").addEventListener('change', select => {
            this.sort(select.target.value)
            this.render();
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
