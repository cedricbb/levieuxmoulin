# Le Vieux Moulin

![Expo](https://img.shields.io/badge/Expo-53.0.0-purple)
![React Native](https://img.shields.io/badge/React%20Native-0.79.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Plateform](https://img.shields.io/badge/Plateform-Android%20%26%20iOS-grey)
![License](https://img.shields.io/badge/License-MIT-green)

#### Application mobile développée avec React Native et Expo

---

### 🚀 fonctionnalités principales

- Application mobile cross-plateform (iOS et Android)
- Développement rapide avec Expo Go (pas besoin d'Android Studio/XCode pour commencer)
- Hot Reloading pour un développement fluide
- Facile à partager et à tester sur différents appareils

---

### 📦 Prérequis

Avant de commencer, assurez-vous d'avoir :
- **Node.js** (version LTS recommandée) : [Télécharger Node.js](https://nodejs.org/)
- **npm** (inclus avec Node.js) ou **yarn**
- **Expo CLI** : 
installez-le globalement si tu ne l'as pas déjà :
```bash
npm install -g expo-cli
```
- **Expo Go** sur votre smartphone :
  - [Expo Go pour iOS](https://apps.apple.com/us/app/expo-go/id982107779)
  - [Expo Go pour Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
- (Optionnel) Un émulateur Android/iOS si vous voulez tester sur ordinateur

---

### 🛠️ Installation

#### 1. **Cloner le dépôt**
```bash
git clone https://github.com/valority/levieuxmoulin.git
cd levieuxmoulin
```

#### 2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

Cette commande va installer toutes les dépendances nécessaires pour le projet.

---
### ▶️ Démarrage du projet

#### 1. **Lancer le serveur de développement Expo**
```bash
npm run dev
# ou
yarn dev
```
Cela ouvrira une page web (Metro Bundler) et affichera un QR code dans le terminal.

#### 2. **Scanner le QR code avec Expo Go**

- Ouvrez l'application Expo Go sur votre smartphone.
- Scannez le QR code affiché dans le terminal ou sur la page web.
- L'application se lance automatiquement sur votre smartphone.

> **Astuce** : *Assure-toi que ton smartphone et ton ordinateur sont sur la même réseau.*

---

### 🧹 Dépannage & commandes utiles

- **Vider le cache Expo** (en cas de bug ou comportement inattendu) :
```bash
expo start -c
```
- **Mettre à jour Expo CLI** :
```bash
npm install -g expo-cli
# ou
yarn global add expo-cli
```
- **Afficher la liste des appareils connectés** :
```bash
expo whoami
```

---

### 📚 Ressources utiles

- [Documentation officielle Expo](https://docs.expo.dev/)
- [Documentation React Native](https://reactnative.dev/docs/getting-started)
- [Expo Go sur l'App Store  ](https://apps.apple.com/us/app/expo-go/id982107779)
- [Expo Go sur Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

### 👥 Équipe

- [Cédric Billard](https://github.com/cbillard)

### 📝 License

Ce projet est sous license MIT.