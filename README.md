# FishEye

## Installation

Le projet FishEye est une projet d'application web entièrement développé en Javascript Vanilla. Nous utilisons l'outil de développement Front End [Vite JS](https://vitejs.dev/) ainsi que le gestionnaire de packet [Yarn](https://yarnpkg.com/); pour le style nous utilisons [PostCSS](https://github.com/postcss/postcss) avec comme plugin [TailwindCSS](https://tailwindcss.com/) ([JIT](https://tailwindcss.com/docs/just-in-time-mode)), [postcss-nested](https://github.com/postcss/postcss-nested) et [autoprefixer](https://github.com/postcss/autoprefixer) ; la police utilisée est [DM Sans](https://fonts.google.com/specimen/DM+Sans).

1 - Installez [Yarn](https://yarnpkg.com/) sur votre système

2 - Téléchargez ce projet et ouvrez le dossier

3 - Installez les dépendances en tapant dans un terminal `yarn install`

3 - Lancez le live serveur en tapant dans un terminal `yarn dev`

## Organisation du projet

`assets/` :
* `data/`, contient les données en JSON qui hydrate l'application
* `images/`, contient toutes les images utilisées dans l'application
* `style/`, contient `main.css` où sont définis les styles CSS de bases

`Pages/` :
* contient les composants JavaScript qui représente les différentes pages de l'application
* `components/`, contient les différents composants JavaScript utilisés dans les pages

`app.js`, point de départ de l'application, importe les dépendances et tout les composants, initialise le router

`controller.js`, contient le router qui va se charger d'imprimer les bons composants en fonction des requêtes de l'utilisateur 

`index.html`, chargé par le navigateur quand l'utilisateur arrive sur le site, appelle `app.js`

`package.json` & `yarn.lock`, fichiers utilisés par Yarn pour gérer les dépendances

`postcss.config.js`, fichier de configuration pour les plugins POSTCSS

`README.md` & `SCHEMA.png`, le fichier que vous lisez actuellement

`tailwin.config.js`, fichier de configuration pour Tailwind, contient notamment les fonts et les couleurs personalisées du projet

## Architectures des classes
![](/SCHEMA.png)
Légende