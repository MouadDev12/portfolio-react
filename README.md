# Portfolio React - Mouad Mekrech

Un portfolio moderne et professionnel développé avec React, Vite et Framer Motion.

## 🚀 Fonctionnalités

- **Design Responsive** : Optimisé pour tous les appareils
- **Animations Fluides** : Utilisation de Framer Motion pour des transitions élégantes
- **Thèmes Multiples** : 3 thèmes (Clair, Sombre, Bleu ciel)
- **Navigation Smooth** : Défilement fluide entre les sections
- **Génération PDF** : Téléchargement automatique du CV en PDF
- **Formulaire de Contact** : Interface interactive pour les messages
- **Performance Optimisée** : Chargement rapide et expérience utilisateur fluide

## 🛠️ Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **Vite** - Outil de build ultra-rapide
- **Framer Motion** - Animations et transitions
- **React Intersection Observer** - Détection de visibilité des éléments
- **HTML2PDF.js** - Génération de PDF
- **Font Awesome** - Icônes vectorielles
- **CSS3** - Styles modernes avec variables CSS

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Navigation/
│   │   └── Navigation.jsx
│   ├── Hero/
│   │   └── Hero.jsx
│   ├── Education/
│   │   └── Education.jsx
│   ├── Skills/
│   │   ├── Skills.jsx
│   │   └── SkillCard.jsx
│   ├── Projects/
│   │   └── Projects.jsx
│   ├── Contact/
│   │   └── Contact.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   └── CVContent/
│       └── CVContent.jsx
├── contexts/
│   └── ThemeContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Installation et Démarrage

1. **Cloner le repository**
```bash
git clone [url-du-repo]
cd portfolio-react
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer le serveur de développement**
```bash
npm run dev
```

4. **Build pour la production**
```bash
npm run build
```

## 🎨 Personnalisation

### Thèmes
Le système de thèmes utilise des variables CSS définies dans `src/index.css`. Trois thèmes sont disponibles :
- `theme-light` (par défaut)
- `theme-dark`
- `theme-skyblue`

### Contenu
Pour personnaliser le contenu :
1. Modifiez les données dans chaque composant
2. Remplacez les images dans le dossier `public/IMAGES/`
3. Ajustez les informations de contact dans `Contact.jsx`

### Animations
Les animations sont configurées avec Framer Motion. Vous pouvez ajuster :
- Les durées dans les propriétés `transition`
- Les effets dans les propriétés `initial` et `animate`
- Les délais avec la propriété `delay`

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints :
- **Desktop** : > 992px
- **Tablet** : 768px - 992px
- **Mobile** : < 768px

## 🔧 Scripts Disponibles

- `npm run dev` - Démarrage du serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation du build
- `npm run lint` - Vérification du code avec ESLint

## 📄 Fonctionnalité PDF

Le CV peut être téléchargé en PDF grâce à la librairie html2pdf.js. Le contenu du PDF est défini dans le composant `CVContent.jsx`.

## 🌐 Déploiement

Le projet peut être déployé sur :
- **Vercel** : `vercel --prod`
- **Netlify** : Glisser-déposer le dossier `dist`
- **GitHub Pages** : Utiliser GitHub Actions

## 📞 Contact

- **Email** : mouadmekrech12@gmail.com
- **LinkedIn** : [Mouad Mekrech](https://www.linkedin.com/in/mouad-mekrech-5b1057330/)
- **GitHub** : [MouadDev12](https://github.com/MouadDev12)

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.# portfolio-react
# portfolio-react
