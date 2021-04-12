export class Listmenu extends HTMLElement {
    constructor() {
        super();
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
        <select name="list">
            <option value="date">Date</option>
            <option value="likes">Likes</option>
            <option value="name">Name</option>
        </select>
        `;
        this.appendChild(template.content);
    }
    
    render() {
    }
}