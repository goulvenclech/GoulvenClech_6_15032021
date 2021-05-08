/**
 * A component with all the tags, displayed on the index and on the tag pages 
 */
export class TagsNav extends HTMLElement {
    constructor() {
        super();
    }
 
    /**
     * Insert an template
     */
    connectedCallback () {
        const template = document.createElement('template');
        template.innerHTML = `
            <a class="tag" href="/tag-portrait">
                <span class="sr-only">Portrait</span>
                #portrait
            </a>
            <a class="tag" href="/tag-art">
                <span class="sr-only">Art</span>
                #art
            </a>
            <a class="tag" href="/tag-fashion">
                <span class="sr-only">Fashion</span>
                #fashion
            </a>
            <a class="tag" href="/tag-architecture">
                <span class="sr-only">Architectue</span>
                #architecture
            </a>
            <a class="tag" href="/tag-travel">
                <span class="sr-only">Travel</span>
                #travel
            </a>
            <a class="tag" href="/tag-sport">
                <span class="sr-only">Sport</span>
                #sport
            </a>
            <a class="tag" href="/tag-animals">
                <span class="sr-only">Animals</span>
                #animals
            </a>
            <a class="tag" href="/tag-events">
                <span class="sr-only">Events</span>
                #events
            </a>
        `;
        this.appendChild(template.content);
        this.activeCurrent();
    }

    /**
     * If the session is in a tag page, active the current tag
    */
         activeCurrent() {
            this.querySelectorAll(".tag").forEach(tag => {
                if (window.history.state.url.slice(5) == tag.href.split('tag-')[1]) {
                    tag.classList.add("current");
                    tag.href = "/";
                }
            });
        }
}