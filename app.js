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
import {Router} from './controller.js'

// Import all the pages
import {IndexPage} from './pages/index.js'
window.customElements.define('index-page', IndexPage);
import {TagPage} from './pages/tag.js'
window.customElements.define('tag-page', TagPage);
import {UserPage} from './pages/user.js'
window.customElements.define('user-page', UserPage);
import {Error404Page} from './pages/404.js'
window.customElements.define('error404-page', Error404Page);

// Import all the pages/components
import {FisheyeLogo} from './pages/components/logo.js'
window.customElements.define('fisheye-logo', FisheyeLogo);
import {TagsNav} from './pages/components/tags-nav.js'
window.customElements.define('tags-nav', TagsNav);
import {PhotographerTags} from './pages/components/photographer-tags.js'
window.customElements.define('photographer-tags', PhotographerTags);
import {PhotographerCard} from './pages/components/photographer-card.js'
window.customElements.define('photographer-card', PhotographerCard);

// Import all the pages/components/index components
import {FeaturedPhotographers} from './pages/components/index/featured-photographers.js'
window.customElements.define('featured-photographers', FeaturedPhotographers);

// Import all the pages/components/tag components
import {TaggedPhotographers} from './pages/components/tag/tagged-photographers.js'
window.customElements.define('tagged-photographers', TaggedPhotographers);

// Import all the pages/components/user components
import {ContactModal} from './pages/components/user/contact-modal.js'
window.customElements.define('contact-modal', ContactModal);
import {LightboxContent} from './pages/components/user/lightbox-content.js'
window.customElements.define('lightbox-content', LightboxContent);
import {MediaCard} from './pages/components/user/media-card.js'
window.customElements.define('media-card', MediaCard);
import {MediaLightbox} from './pages/components/user/media-lightbox.js'
window.customElements.define('media-lightbox', MediaLightbox);
import {MediasSelect} from './pages/components/user/medias-select.js'
window.customElements.define('medias-select', MediasSelect);
import {PhotographerInfos} from './pages/components/user/photographer-infos.js'
window.customElements.define('photographer-infos', PhotographerInfos);
import {PhotographerMedias} from './pages/components/user/photographer-medias.js'
window.customElements.define('photographer-medias', PhotographerMedias);
import {PhotographerProfile} from './pages/components/user/photographer-profile.js'
window.customElements.define('photographer-profile', PhotographerProfile);

// create a new session
window.onload = function() {
    let session = new Router();
    session.push(window.location.pathname);
}
