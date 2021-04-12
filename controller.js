export class router{
    constructor() {
        // Popstate make the browser back and forward buttons work
        this.popstate = window.addEventListener("popstate", event => {
            // Grab the history state id
            let stateId = event.state.url;
            console.log(event.state);
            this.print(stateId);
        });
        // Query all internals links
        this.internalLinks = [];
    }
    push(url) {
        // Load content for this tab/page
        this.print(url);
        // Finally push state change to the address bar
        window.history.pushState({url}, `${url}`, `${url}`);
    }
    print(url) {
        document.body.innerHTML = '';
        if (url == '/') {
            document.title = "Bienvenue";
            document.body.insertAdjacentHTML('afterbegin', '<index-page />')
        } else if(url.startsWith("/user")) {
            document.title = url;
            document.body.insertAdjacentHTML('afterbegin', '<user-card user="' + url + '"></user-card>')

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
