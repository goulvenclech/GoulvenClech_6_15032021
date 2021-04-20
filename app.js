/**
 * Import all JavaScript dependencies and components
 * Initialize the PWA by creating a new session
 */

// import dependencies
import "tailwindcss/tailwind.css"
import "@fontsource/dm-sans"
import "./assets/style/main.css"
import data from './assets/data/FishEyeDataFR.json'

// import the router
import {router} from './controller.js'
// Import all the pages
import {UserPage} from './pages/user.js'
window.customElements.define('user-page', UserPage);
import {IndexPage} from './pages/index.js'
window.customElements.define('index-page', IndexPage);
// Import all the pages/components
import {Navbar} from './pages/components/navbar.js'
window.customElements.define('nav-bar', Navbar);
import {ProfilePicture} from './pages/components/profile-picture.js'
window.customElements.define('profile-picture', ProfilePicture);
// Import all the pages/components/index components
import {featuredPhotographers} from './pages/components/index/featured-photographers.js'
window.customElements.define('featured-photographers', featuredPhotographers);
import {photographerCard} from './pages/components/index/photographer-card.js'
window.customElements.define('photographer-card', photographerCard);

// create a new session
window.onload = function() {
    let session = new router();
    session.push(window.location.pathname);
}
