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
import {Error404Page} from './pages/404.js'
window.customElements.define('error404-page', Error404Page);
// Import all the pages/components
import {FisheyeLogo} from './pages/components/logo.js'
window.customElements.define('fisheye-logo', FisheyeLogo);
import {tagsNav} from './pages/components/tags-nav.js'
window.customElements.define('tags-nav', tagsNav);
import {photographerTags} from './pages/components/photographer-tags.js'
window.customElements.define('photographer-tags', photographerTags);
// Import all the pages/components/index components
import {featuredPhotographers} from './pages/components/index/featured-photographers.js'
window.customElements.define('featured-photographers', featuredPhotographers);
import {photographerCard} from './pages/components/index/photographer-card.js'
window.customElements.define('photographer-card', photographerCard);
// Import all the pages/components/user components
import {photographerProfile} from './pages/components/user/photographer-profile.js'
window.customElements.define('photographer-profile', photographerProfile);

// create a new session
window.onload = function() {
    let session = new router();
    session.push(window.location.pathname);
}
