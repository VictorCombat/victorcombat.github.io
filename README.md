# Victor Combat — Portfolio

Site portfolio statique (HTML, CSS, JavaScript), bilingue FR/EN, déployable sur GitHub Pages.

## Structure

```
index.html          # Page unique
css/
  variables.css     # Couleurs, polices, espacements (thème)
  base.css
  components.css
  sections.css
js/
  main.js           # Bootstrap
  i18n.js           # Langue + localStorage
  render.js         # Rendu des sections depuis le JSON
  modal.js          # Pop-up des réalisations
data/
  content.json      # Tout le contenu bilingue
assets/
  cv/               # CV PDF
  images/           # Photo + captures projets
  icons/            # Icônes SVG
```

## Modifier le contenu

Éditez uniquement [`data/content.json`](data/content.json).

- Textes bilingues : `{ "fr": "...", "en": "..." }`
- Ajouter une expérience / formation / projet : dupliquez un objet dans le tableau concerné
- Médias projets : placez les fichiers dans `assets/images/...` puis référencez-les dans `banner` / `media`
- Vidéos : `{ "type": "video", "src": "assets/images/.../demo.mp4" }`
- CV anglais : remplacez `profile.cvEn` (aujourd’hui il pointe vers le PDF FR)

## Modifier le design

Éditez [`css/variables.css`](css/variables.css) :

- couleurs (`--color-*`)
- polices (`--font-display`, `--font-body`)
- tailles, rayons, animations

Les polices Google Fonts sont chargées dans `index.html` — changez le lien `<link>` si vous changez de famille.

## Lancer en local

Le chargement de `data/content.json` via `fetch` nécessite un serveur HTTP local (ne pas ouvrir `index.html` en `file://`).

```bash
python -m http.server 8080
```

Puis ouvrez `http://localhost:8080`.

Les scripts JS sont chargés en mode classique (pas de modules ES), pour éviter les erreurs MIME `text/plain` de `http.server` sous Windows.

## Déploiement GitHub Pages

Publiez la branche contenant ces fichiers à la racine (ex. `master` ou `website-plain` selon votre configuration Pages). Aucun build n’est requis.
