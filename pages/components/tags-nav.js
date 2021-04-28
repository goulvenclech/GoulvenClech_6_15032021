/**
 * A component with all the tags, displayed on the index and on the tag pages 
 */
export class tagsNav extends HTMLElement {
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
                #portrait
            </a>
            <a class="tag" href="/tag-art">
                #art
            </a>
            <a class="tag" href="/tag-fashion">
                #fashion
            </a>
            <a class="tag" href="/tag-architecture">
                #architecture
            </a>
            <a class="tag" href="/tag-travel">
                #travel
            </a>
            <a class="tag" href="/tag-sport">
                #sport
            </a>
            <a class="tag" href="/tag-animals">
                #animals
            </a>
            <a class="tag" href="/tag-events">
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