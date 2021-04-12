export class Likectr extends HTMLElement {
    constructor() {
        super();
        this.totallikes = 0;
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `

            <div>
                <span class="totallikes"></span>
                likes totaux
            </div>
        `;
        this.appendChild(template.content);
        document.querySelectorAll(".likes").forEach(likeBtn => {
            this.totallikes = this.totallikes + parseInt(likeBtn.innerHTML);
            likeBtn.parentElement.addEventListener("click", event => {
                console.log("clic");
                this.render();
            });
        });
        this.querySelector(".totallikes").innerHTML = this.totallikes;
    }

    render() {
        this.totallikes = 0;
        document.querySelectorAll(".likes").forEach(likeBtn => {
            this.totallikes = this.totallikes + parseInt(likeBtn.innerHTML);
        });
        this.querySelector(".totallikes").innerHTML = this.totallikes;
    }
}