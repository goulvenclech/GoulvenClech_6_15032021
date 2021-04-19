/**
 * Import all JavaScript dependencies and components
 * Initialize the PWA by creating a new session
 */

import "tailwindcss/tailwind.css"
import data from './assets/data/FishEyeDataFR.json'
import "@fontsource/dm-sans"
import "./assets/style/main.css"

// import the router
import {router} from './controller.js'
// Import Pages
import {Usercard} from './pages/user.js'
window.customElements.define('user-card', Usercard);
import {Indexpage} from './pages/index.js'
window.customElements.define('index-page', Indexpage);
// Import Pages/components
import {Navbar} from './pages/components/navbar.js'
window.customElements.define('nav-bar', Navbar);
import {ProfilePicture} from './pages/components/profile-picture.js'
window.customElements.define('profile-picture', ProfilePicture);


// create a new session onload
window.onload = function() {
    let session = new router();
    session.push(window.location.pathname);
}
