# FishEye

[![Netlify Status](https://api.netlify.com/api/v1/badges/533f9fcd-4876-4b48-a98c-ecf4ece58ee0/deploy-status)](https://app.netlify.com/sites/goulvenclech-6-15032021/deploys)

FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Projet 6 de la formation OpenClassrooms "Développeur Front End".

Pour ce projet, je tente de réaliser une [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application) avec Javascript (vanilla) dans un paradigme [Orientée Prototype](https://en.wikipedia.org/wiki/Prototype-based_programming) ( dont je ne suis pas fan, mais cette formation est l'occasion d'expérimenter et d'apprendre).

Tout le site est donc une seule page HTML, Javascript gère complétement la navigation de l'utilisateur en chargeant le contenu à mesure de sa navigation. Je m'appuie pour cela énormément sur les [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) qui vont constituer tout les éléments du site, chacun encapsulant à la fois son template CSS, son style Tailwind CSS et sa logique Javascript (les éléments sont dynamique en fonction des requêtes de l'utilisateur mais aussi de la database représentée par un JSON).

Enfin, un soin particulier a été apporté à l'accesibilité du site (particulièrement la navigation au clavier et aux lecteurs d'écran) ainsi qu'à la documentation du code (inspiré par [JSDoc 3](https://jsdoc.app/)).

Reste à faire : 
-> navigation contact form pas aussi bien que la lightbox 
-> style CSS / JS de <medias-select> pas terrible 
-> aurait pu profiter de lazy-loading pour les images

Adresse du répo : https://github.com/GoulvenC/GoulvenClech_6_15032021

Démo live : https://oc-p6.goulven-clech.dev/

Présentation du projet : https://docs.google.com/presentation/d/18X4CeLMLaiLNN6lhBIScb0UnHPGZ-zymx57MzrwC3pw/

## Installation

Le projet FishEye est une projet d'application web entièrement développé en Javascript Vanilla. J'utilise l'outil de développement Front End [Vite JS](https://vitejs.dev/) ainsi que le gestionnaire de packet [Yarn](https://yarnpkg.com/); pour gérer les styles j'utilise [PostCSS](https://github.com/postcss/postcss) avec les plugins [TailwindCSS](https://tailwindcss.com/) ([JIT](https://tailwindcss.com/docs/just-in-time-mode)), [postcss-nested](https://github.com/postcss/postcss-nested) et [autoprefixer](https://github.com/postcss/autoprefixer) ; la police utilisée est [DM Sans](https://fonts.google.com/specimen/DM+Sans).

1 - Installez [Yarn](https://yarnpkg.com/) sur votre système

2 - Téléchargez ce projet et ouvrez le dossier

3 - Installez les dépendances en tapant dans un terminal `yarn install`

3 - Lancez le live serveur de ViteJS en tapant dans un terminal `yarn dev`

4 - Pour obtenir une version production, utilisez dans un terminal `yarn build`

## Organisation du projet

`assets/` :
* `data/`, contient les données en JSON qui hydrate l'application
* `images/`, contient les images statiques utilisées dans l'application
* `style/`, contient `main.css` où sont définis les styles CSS de bases

`pages/` :
* contient les composants JavaScript qui représente les différentes pages de l'application
* `components/`, contient les différents composants JavaScript utilisés dans les pages

`public/images/`, contient toutes les images et vidéos des utilisateurs, ainsi que leurs photos de profil

`app.js`, point de départ de l'application, importe les dépendances et tout les composants, initialise le router

`controller.js`, contient le router qui va se charger d'imprimer les bons composants en fonction des requêtes de l'utilisateur 

`index.html`, chargé par le navigateur quand l'utilisateur arrive sur le site, appelle `app.js`

`package.json` & `yarn.lock`, fichiers utilisés par Yarn pour gérer les dépendances

`postcss.config.js`, fichier de configuration pour les plugins POSTCSS

`README.md` & `SCHEMA.png`, le fichier que vous lisez actuellement

`tailwin.config.js`, fichier de configuration pour Tailwind, contient notamment les fonts et les couleurs personalisées du projet

## Architectures des classes
![](/SCHEMA.png)
Architecture du projet. Pas très lisible, mais ça m'a aidé à garder l'idée générale en tête.
Chaque élément de la vue est un WebComponent.

## License 

Il s'agit d'un projet dans le cadre de la formation [Développeur Front-End](https://openclassrooms.com/fr/paths/314-developpeur-front-end) d'OpenClassrooms. Le code est librement réutilisable, mais les images / logo et tout les éléments issus de l'énoncé ne m'appartiennent pas.

Si vous êtes aussi étudiant d'OC, vous pouvez librement vous inspirer de mon travail, mais je vous déconseille bien évidémment d'en copier des parties.