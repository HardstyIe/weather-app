# 🌦️ Weather App

Une application météo simple et moderne développée à des fins éducatives.
Elle affiche en temps réel les conditions météorologiques d’une ville à l’aide de l’API **OpenWeatherMap**.

---

## 🚀 Fonctionnalités

- Température actuelle et ressentie
- Taux d’humidité et vitesse du vent
- Type de météo et icônes dynamiques selon les conditions
- Actualisation automatique toutes les 10 minutes
- Interface responsive avec **Poppins** et **Boxicons**
- Données affichées en **français**
- Configuration rapide via un fichier JSON

---

## 🧩 Stack technique

| Technologie                | Utilisation                                      |
| -------------------------- | ------------------------------------------------ |
| **HTML5 / CSS3**           | Structure et design                              |
| **JavaScript (ESNext)**    | Logique et appels API                            |
| **Bun**                    | Gestionnaire de paquets et exécution des scripts |
| **OpenWeatherMap API**     | Source des données météo                         |
| **Biome**                  | Linter et formatter                              |
| **Vercel Edge Middleware** | Sécurisation des en-têtes HTTP                   |

---

## ⚙️ Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/HardstyIe/weather-app.git
cd weather-app
```

### 2. Installer les dépendances

```bash
bun install
```

---

## 🏗️ Scripts disponibles

| Commande         | Description                     |
| ---------------- | ------------------------------- |
| `bun run build`  | Compile le projet               |
| `bun run lint`   | Vérifie la qualité du code      |
| `bun run format` | Formate automatiquement le code |
| `bun run check`  | Exécute lint + format ensemble  |

---

## 🔧 Configuration

Le fichier `src/utils/conf.json` contient la localisation utilisée :

```json
{
  "localization": "Valenciennes"
}
```

Modifie cette valeur pour changer la ville (exemple : `"Paris"`, `"Tokyo"`, etc.).

La clé API est définie dans `src/meteo.js` :

```js
const api_key = "ta_clé_api_openweathermap";
```

💡 Astuce : pour éviter de versionner ta clé, tu peux la placer dans une variable d’environnement.

---

## 📁 Structure du projet

```
weather-app/
├── index.html
├── src/
│   ├── assets/ → icônes météo
│   ├── utils/conf.json → configuration (ville)
│   ├── meteo.js → logique principale
│   └── index.css → style global
├── middleware.js → sécurisation Vercel
├── package.json
├── biome.jsonc → configuration du linter/formatter
└── jsconfig.json → options de compilation
```

---

## 🔒 Sécurité

Le fichier `middleware.js` applique plusieurs protections :

- `X-Frame-Options: DENY` → empêche l’intégration dans un iframe
- `X-Content-Type-Options: nosniff` → bloque les types MIME suspects
- `Strict-Transport-Security` → force HTTPS
- `Referrer-Policy` et `DNS-Prefetch-Control` activés

---

## 🌐 Déploiement

Ce projet est compatible avec **Vercel** (utilisation du middleware Edge).
Tu peux le déployer directement depuis ton dépôt GitHub avec :

- build automatique via `bun run build`
- configuration automatique des headers via `middleware.js`

---

## 🧠 Auteur

**HardstyIe**
Contact: <span>[hardstyle.dd@gmail.com](mailto:du%63%68e%6dindy%6ca%6e%359@g%6da%69l%2ecom)</span>
🔗 [GitHub – HardstyIe](https://github.com/HardstyIe)

---

## 📜 Licence

Projet non licencié (**UNLICENSED**) — usage à but éducatif uniquement.
