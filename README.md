# 🌌 Horizon AI — Three.js Experience

Horizon AI est une expérience web immersive combinant 
**Three.js**, **GSAP**, **WebGL**, et une interface animée moderne.
Le projet utilise un bundler Webpack entièrement configuré avec Babel, loaders CSS/HTML.
---

## 🎯 Introduction

**Horizon AI** est une landing page immersive mêlant animations fluides (GSAP), interface moderne (HTML/CSS) et rendu 3D en temps réel grâce à **Three.js**.
L’objectif est de proposer une expérience visuelle futuriste autour d'une plateforme dédiée à l’analyse, l’exploitation et la sécurisation de données avancées.

Le projet est entièrement construit autour d’un environnement de développement modulaire :

* ✔ Webpack — bundling & optimisation
* ✔ Babel — compatibilité navigateurs
* ✔ Three.js — rendu 3D
* ✔ GSAP — animations fluides
* ✔ Dev server (HMR) — rechargement automatique

---

## 📦 Structure du projet

```
root
│── bundler/
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
│
│── src/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
│── package.json
│── package-lock.json
│── readme.md
```
---

## 🛠️ Installation

### 1️⃣ Installer Node.js

Télécharge Node.js (version recommandée : LTS) :
🔗 [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### 2️⃣ Installer les dépendances

Dans le dossier du projet, exécute :

```bash
npm install
```
---

## 📁 Création du dossier `static` (obligatoire avant de lancer le projet)

Le projet utilise Webpack et CopyWebpackPlugin pour gérer les fichiers statiques.
Vous devez donc créer un dossier `static` à la racine du projet avant d’exécuter le serveur.

Créez-le via le terminal :

```bash
mkdir static
touch static/.gitkeep
```

Votre structure doit être :

```
static/
   .gitkeep
```

Ce dossier accueillera vos fichiers :

* textures
* modèles 3D
* shaders
* images
* assets divers

---

## ▶️ Lancer le projet en local

Le serveur de développement est fourni par `webpack-dev-server`.
Il gère le rechargement automatique, la compilation en temps réel et un serveur local sécurisé.

Pour démarrer :

```bash
npm run dev
```

Ensuite, ouvre :
👉 **[http://localhost:8080]**
ou 
👉 **[http://172.20.10.5:8080]**

---

## 🚀 Technologies utilisées

| Technologie            | Rôle                       |
| ---------------------- | -------------------------- |
| **Three.js**           | Rendu 3D                   |
| **Webpack**            | Bundling et optimisation   |
| **Babel**              | Compatibilité ES6+         |
| **GSAP**               | Animations                 |
| **HTML / CSS**         | Interface                  |
| **Webpack Dev Server** | Hot Reload & serveur local |

---

## 🔮 Améliorations possibles

* Ajouter une scène 3D complexe (particules, shaders, caméras animées)
* Intégrer une navigation dynamique
* Ajouter un mode sombre / clair
* Créer une API ou un backend pour en faire une plateforme SaaS complète

---

## 📄 Licence

Projet non licencié — libre d’utilisation personnelle ou d’amélioration.


