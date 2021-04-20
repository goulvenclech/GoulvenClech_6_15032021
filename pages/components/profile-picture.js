export class ProfilePicture extends HTMLElement {
    constructor() {
        super();
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <img 
                src="../assets/images/portraits/TracyGalindo.jpg"
                alt="Photo de profil de Tracy Galindo"
                class="h-32 rounded-full shadow-2xl"
                >
            </img>
        `;
        this.appendChild(template.content);
    }
    
    render() {
    }
}