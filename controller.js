/**
 * Controller.js contain the router & the factoryPage, brains of our SPA, who will 
 * handle user requests check if there is a page or a corresponding user, if so print 
 * the adapted page, otherwise return to a 404 page
 */
export class Router{
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
        // call the factory that will create the page for the request
        this.pageFactory = new PageFactory();
        // the page create by the Factory
        this.currentPage;
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
     * This function clears the page, make the pageFactory create a new currentPage
     * then print and read it
     * @param {href} url 
     */
    print(url) {
        document.body.innerHTML = '';
        // Update the current Page, then print it
        this.currentPage = this.pageFactory.createPage(url)
        this.currentPage.print();
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
                this.push(link.getAttribute("href"));
            });
        });
    }
}


/**
 * THIS PART OF THE CODE WAS A CONSTRAINT OF THE PROJECT
 * I don't think a factory is useful on the front end, here the factory only 
 * makes my code more complicated and unnecessarily verbose.
 * 
 * However, I can recognize the usefulness of separating the "page" logic from 
 * the router logic. From a scalability perspective, it's easier to add a new 
 * page here than directly in the router.
 * 
 * But I wouldn't have done it with a factory. But making a factory was mandatory
 * in the project. LONG STORY SHORT, it sucks.
 */
 class PageFactory {
    /**
     * here it's all the different pages possible for the PageFactory
     */
    constructor() {
        this.index = function() {
            this.print = function () {
                document.body.insertAdjacentHTML('afterbegin', '<index-page />')
            }
        } 
        this.tag = function() {
            this.print = function () {
                document.body.insertAdjacentHTML('afterbegin', '<tag-page id="' + this.url.slice(5) + '"></tag-page>')
            }
        }
        this.user = function() {
            this.print = function () {
                document.body.insertAdjacentHTML('afterbegin', '<user-page id="' + this.url.slice(5) + '"></user-page>')
            }
        }
        this.console404 = function() {
            this.print = function () {
                document.body.insertAdjacentHTML('afterbegin', '<error404-page></error404-page>')
            }
        }

    }

    /**
     * Take a user request, if it's valid return a page, if it's invalid return the error404 page
     * @param {string} url - the user's request 
     * @returns {object} - a page, will be registered as this.currentPage in the router
     */
    createPage(url) {
        let Page;

        if (url == '/') {
            Page = new this.index();
        } else if(url.startsWith("/tag-")) {
            Page = new this.tag();
        } else if(url.startsWith("/user")) {
            Page = new this.user();
        } else {
            Page = new this.error404();
        }

        Page.url = url;
        
        return Page;
    }
}

