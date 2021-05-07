/**
 * Home page of the application
 */
export class IndexPage extends HTMLElement {
    constructor() {
        super();
    } 
    
    /**
     * Insert the page template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="flex flex-row flex-wrap max-w-screen-xl w-full lg:h-20 mx-auto mb-8">
                <fisheye-logo class=""></fisheye-logo>
                <div class="p-2 text-center align-middle lg:order-2 order-3">
                    <tags-nav></tags-nav> 
                </div>
                <h1 class="text-xl md:text-3xl text-primary text-right flex-grow lg:order-3 order-2">
                    Nos photographes
                </h1>
            </div>
            <main id="content" class="max-w-screen-xl w-full mx-auto">
                <featured-photographers></featured-photographers>
                <return-top></return-top>
            </main>
            
        `;
        this.appendChild(template.content);
        // change the page title
        document.title = "Fisheye";
    }
}
