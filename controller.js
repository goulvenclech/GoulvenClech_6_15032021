/**
 * Controller.js contain the router, brain of our SPA, who will handle user requests
 * check if there is a page or a corresponding user, if so print the adapted page, 
 * otherwise return to a 404 page
 */
export class router{
    /**
     * The router need all the internal links of a page and the user navigation history
     */
    constructor() {
        // Popstate make the browser back and forward buttons work
        this.popstate = window.addEventListener("popstate", event => {
            // Grab the history state id
            let stateUrl = event.state.url;
            this.print(stateUrl);
        });
        // Query all internals links
        this.internalLinks = [];
    }
    /**
     * This function push the url to the address bar and in the navigation history
     * then call the print() function on this url.
     * @param {href} url 
     */
    push(url) {
        // Push state change to the address bar and in the navigation history
        window.history.pushState({url}, `${url}`, `${url}`);
        // Load content for this tab/page
        this.print(url);
    }
    /**
     * This function clears the page, and prints the page element corresponding to the 
     * request. If the request is invalid, print the 404 page.
     * @param {href} url 
     */
    print(url) {
        document.body.innerHTML = '';
        // WORK IN PROGRESS //
        if (url == '/') {
            document.title = "Bienvenue";
            document.body.insertAdjacentHTML('afterbegin', '<index-page />')
        } else if(url.startsWith("/user")) {
            document.title = url;
            document.body.insertAdjacentHTML('afterbegin', '<user-page user="' + url + '"></photographer-card>')

        } else {
            document.title = "Erreur 404";
            document.body.insertAdjacentHTML('afterbegin', '<p>Erreur 404</p>')
        }
        // Update internalLinks
        this.readlinks();
    }
    /**
     * This function is called after every print(), reads the new page looking for 
     * internals links. Those links will call push() when clicked.
     */
    readlinks() {
        // Query all internals links
        this.internalLinks = document.querySelectorAll("a[href^='/']").forEach(link => {
            // Eventlistener waiting for a click
            link.addEventListener("click", event => {
                // prevent the link for reloading the page
                event.preventDefault();
                // push() the href as a request for the router
                this.push(event.target.getAttribute("href"));
            });
        });
    }
}
