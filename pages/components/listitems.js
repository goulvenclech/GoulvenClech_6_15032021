export class Listitems extends HTMLElement {
    constructor() {
        super();
        this.array = [
            {
                name: "Sublime photo",
                date: new Date('July 20, 17 00:20:18'),
                likes: 50,
            },
            {
                name: "Majestueuse photo",
                date: new Date('July 20, 21 00:20:18'),
                likes: 60,
            },
            {
                name: "Photo hideuse",
                date: new Date('July 20, 19 00:20:18'),
                likes: 40,
            },
        ];
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <ul class="list-disc pl-5">      
            </ul>
        `;
        this.appendChild(template.content);
        this.array.sort((p1, p2) => p1.date.getFullYear() - p2.date.getFullYear()).forEach(picture => {
            this.querySelector("ul").insertAdjacentHTML('beforeend', 
                '<li>' + picture.name + '(' + picture.likes + '❤️ / ' + picture.date.getFullYear() + ')</li>'
            );
        });
        document.querySelector("select").addEventListener("change", selector => {
            this.render(selector)
        });
    }
    
    render(selector) {
        this.querySelector("ul").innerHTML = "";
        switch (selector.target.value) {
            case "date":
                this.array.sort((p1, p2) => p1.date.getFullYear() - p2.date.getFullYear()).forEach(picture => {
                    this.querySelector("ul").insertAdjacentHTML('beforeend', 
                        '<li>' + picture.name + '(' + picture.likes + '❤️ / ' + picture.date.getFullYear() + ')</li>'
                    );
                });
                break;

            case "likes":
                this.array.sort((p1, p2) => p2.likes - p1.likes).forEach(picture => {
                    this.querySelector("ul").insertAdjacentHTML('beforeend', 
                        '<li>' + picture.name + '(' + picture.likes + '❤️ / ' + picture.date.getFullYear() + ')</li>'
                    );
                });
                break;

            case "name":
                this.array.sort((p1, p2) => p1.name.toLowerCase().localeCompare(p2.name.toLowerCase())).forEach(picture => {
                    this.querySelector("ul").insertAdjacentHTML('beforeend', 
                        '<li>' + picture.name + '(' + picture.likes + '❤️ / ' + picture.date.getFullYear() + ')</li>'
                    );
                });
                break;

            default:
                console.log("Oops")
                break;
        }
    }
}