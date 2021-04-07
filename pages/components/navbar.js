export class Navbar extends HTMLElement {
    constructor() {
        super();
    } 
 
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <section id = "root">
                <section class="route">
                    <a href="/">home</a>
                </section>
                <section class="route">
                    <a href="/about">about</a>
                </section>
                <section class="route">
                    <a href="/user1">User 1</a>
                </section>
                <section class="route">
                    <a href="/user2">User 2</a>
                </section>
                <section class="route">
                    <a href="/user3">User 3</a>
                </section>
            </section>
        `;
        this.appendChild(template.content);
    }
    
    render() {
    }
}