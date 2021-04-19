# FishEye

## Installation

Le projet FishEye est une projet d'application web entièrement développé en Javascript Vanilla. Nous utilisons l'outil de développement Front End [Vite JS](https://vitejs.dev/) ainsi que le gestionnaire de packet [Yarn](); pour le style nous utilisons [PostCSS]() avec comme plugin [TailwindCSS]() ([JIT]()), [postcss-nested]() et [autoprefixer]() ; la police utilisée est [DM Sans]().

1 - Installez [Yarn]() sur votre système

2 - Téléchargez ce projet et ouvrez le dossier

3 - Installez les dépendances en tapant dans un terminal `yarn install`

3 - Lancez le live serveur en tapant dans un terminal `yarn dev`

## Organisation du projet

`assets/` :
* `data/`, contient les données en JSON qui hydrate l'application
* `images/`, contient toutes les images utilisées dans l'application
* `style/`, contient `main.css` où sont définis les styles CSS de bases

`Pages/` :
* contient les éléments JavaScript qui représente les différentes pages de l'application
* `components/`, contient les différents éléments JavaScript utilisés dans les pages

`app.js`, starting point of our app, import all JavaScript dependencies and components

`controller.js`, contain the PWA router 

... etc.



## Architectures des classes
![](/SCHEMA.png)
Légende