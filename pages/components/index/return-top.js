/**
 * 
 */
export class ReturnTop extends HTMLElement {
    constructor() {
        super();
    } 
    
    /**
     * Insert an empty template, then call render()
     */
    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="hidden fixed top-8 left-0 w-screen">
                <button class="block mx-auto text-xl bg-tertiary rounded-md py-1 px-2">
                    Passer au contenu
                </button>
            <div>
        `;
        this.appendChild(template.content);
        this.render();
        this.listenClick();
    }
    
    /**
     * 
     */
    render() {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                this.querySelector("div").style.display = "block";
            }else {
                this.querySelector("div").style.display = "none";
            }
        })
    }

    /**
     * 
     */
    listenClick() {
        this.querySelector("button").addEventListener('click', () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        })
    }
}
