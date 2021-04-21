export class Lightbox extends HTMLElement {
    constructor() {
        super();
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <div 
                id="img"
                class="lightbox bg-gray-400 rounded-md h-24 w-24 my-4 mr-2 inline-block
                    cursor-pointer shadow-lg"
            >
                Photo
            </div>
            <div 
                id="vid"
                class="lightbox bg-gray-400 rounded-md h-24 w-24 my-4 inline-block
                    cursor-pointer shadow-lg"
                >
                Vidéo
            </div>

            <!-- Modal -->
            <div 
                class="modal bg-gray-400 rounded-md h-96 w-96 m-4 absolute top-5 hidden
                    cursor-pointer shadow-lg"
            >
                <span class="type">
                    inconnu
                </span>
            </div>

        `;
        this.appendChild(template.content);
        this.querySelectorAll(".lightbox").forEach(card => {
            card.addEventListener("click", event => {
                this.querySelector(".modal").style.display = "block";
                this.render(event.target.id)
            })
        });
        this.querySelector(".modal").addEventListener("click", () => {
                this.querySelector(".modal").style.display = "none";
        });
    }
    
    render(id) {
        this.querySelector(".modal span").innerHTML = id;
    }
}