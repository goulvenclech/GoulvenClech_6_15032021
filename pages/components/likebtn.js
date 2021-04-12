export class Likebtn extends HTMLElement {
    constructor() {
        super();
        this.likes = 1;
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `

            <button>
                <span class="likes"></span>
                <span>❤️</span>
            </button>
        `;
        this.appendChild(template.content);
        this.querySelector(".likes").innerHTML = this.likes;
        this.querySelector("button").addEventListener("click", event => {
            this.render();
        });
    }
    
    getLikes() {
        // 
    }

    render() {
        this.likes++;
        this.querySelector(".likes").innerHTML = this.likes;
    }
}