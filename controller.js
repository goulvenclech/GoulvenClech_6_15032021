export class router{
    constructor() {
        // Popstate make the browser back and forward buttons work
        this.popstate = window.addEventListener("popstate", event => {
            // Grab the history state id
            let stateId = event.state.id;
            this.print(stateId);
        });
        // Query all internals links
        this.internalLinks = [];
    }
    push(id) {
        // Load content for this tab/page
        this.print(id);
        // Finally push state change to the address bar
        window.history.pushState({id}, `${id}`, `${id}`);
    }
    print(id) {
        console.log("Valeur envoyée" + id)
        const array = ['/user1','/user2','/user3'];
        document.body.innerHTML = '';
        if (id == '/') {
            document.title = "Bienvenue";
            document.body.insertAdjacentHTML('afterbegin', '<index-page />')
        } else if(array.includes(id)) {
            document.title = id;
            document.body.insertAdjacentHTML('afterbegin', '<user-card user="' + id + '"></user-card>')

        } else {
            document.title = "Erreur 404";
            document.body.insertAdjacentHTML('afterbegin', '<p>Erreur 404</p>')
        }
        // Update internalLinks
        this.readlinks();
    }
    readlinks() {
        // Query all internatls links
        this.internalLinks = document.querySelectorAll("a[href^='/']").forEach(link => {
            // and make them internal link, ID used for the adress
            link.addEventListener("click", event => {
                event.preventDefault();
                this.push(event.target.getAttribute("href"));
            });
        });
    }
}
