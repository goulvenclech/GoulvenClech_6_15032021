/**
 * A custom <select> component for sorting photographer's media
 */
export class mediasSelect extends HTMLElement {
    constructor() {
        super();
    }
 
    /**
     * Insert a <select> template
     * SEE main.css FOR THE STYLE
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <select>
            <option value="date">Date</option>
            <option value="likes">Popularité</option>
            <option value="title">Titre</option>
        </select>
        `;
        this.appendChild(template.content);
    }


}