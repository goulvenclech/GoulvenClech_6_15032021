/**
 * Alternative version of the index page of the application
 * but just displaying one tag's photographer
 */
export class TagPage extends HTMLElement {
    constructor() {
        super();
        // get the current tag
        this.tag = window.history.state.url.slice(5);
    } 
    
    /**
     * Insert the page template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="flex flex-row flex-wrap max-w-screen-xl w-full h-20 mx-auto align-middle mb-12">
                <fisheye-logo></fisheye-logo>
                <div class="p-2 flex-grow text-center align-middle lg:order-2 order-3">
                    <tags-nav></tags-nav> 
                </div>
                <h1 class="text-3xl text-primary text-right flex-grow lg:w-70 lg:order-3 order-2">
                    #`+ this.tag +`
                </h1>
            </div>
            <main id="content" class="max-w-screen-xl w-full mx-auto">
                <tagged-photographers></tagged-photographers>
            </main>
            
        `;
        this.appendChild(template.content);
        // change the page title
        document.title = "#" + this.tag + " - Fisheye";
    }
}
