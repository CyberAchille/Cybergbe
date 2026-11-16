# CyberGbe : arnaque ou pas ?

Site gratuit pour apprendre à reconnaître les arnaques du téléphone et d'internet, **en français et en ewe** (Eʋegbe), avec des exemples du Togo : Mobile Money (Mixx by Yas, Flooz), WhatsApp, faux recrutements, faux profils.

> « Gbe » veut dire « la langue » : la cybersécurité dans la langue de tous les jours.

## Ce que contient le site

- **5 thèmes, 15 leçons courtes** : codes secrets, Mobile Money, WhatsApp, fausses offres d'emploi, réseaux sociaux.
- **Un quiz par thème** (4 questions avec explications).
- **Une salle de jeux** avec 6 jeux courts, chacun avec son record :
  - **Arnaque ou pas ?** : 48 messages réalistes (SMS, WhatsApp, appel, Facebook, e-mail) en 3 niveaux (facile, moyen, expert), dont 14 messages normaux pour ne pas apprendre à se méfier de tout. Parties de 10 messages tirés au hasard.
  - **Chasse aux pièges** : on touche chaque passage suspect d'un message (expéditeur, urgence, lien, demande de code…). 7 messages, 26 pièges, 3 erreurs permises par message.
  - **Lien piégé ?** : 16 adresses à classer d'un glissement (vrai site ou faux site), avec le vrai domaine surligné pour apprendre à le lire.
  - **Casse-mot de passe** : un testeur qui estime en combien de temps un pirate trouverait un mot de passe (calcul fait dans le téléphone, rien n'est envoyé), puis 6 duels « lequel est le plus solide ? ».
  - **La journée d'Afi** : une histoire à choix. Afi, vendeuse au marché, reçoit 7 messages piégés dans la journée ; chaque mauvais choix lui coûte de l'argent.
  - **Mémo des réflexes** : un jeu de mémoire où l'on associe chaque piège au bon réflexe.
- **Vérifie un message** : on colle un SMS ou un message WhatsApp reçu, et les signaux d'alerte s'allument dans le texte (demande de code, faux transfert, frais à payer, lien trompeur, urgence, chantage…), chacun avec son explication et la leçon à revoir. On peut aussi **ajouter une ou plusieurs captures d'écran** : le texte est lu dans le téléphone et les passages suspects sont encadrés directement sur l'image. Une discussion WhatsApp exportée (.txt) est acceptée aussi. Rien n'est envoyé ni enregistré.
- **Raconte ta situation** : un assistant en forme de discussion pour les arnaques qui se déroulent sur plusieurs messages ou au téléphone. Il pose quelques questions (qui, par quel moyen, ce qu'on te demande, ce que tu as déjà fait), vérifie le message ou la capture si on en a, puis donne un verdict, le type d'arnaque et un plan d'action, avec les gestes d'urgence si la personne a déjà payé ou donné un code.
- **Une attestation de parcours** à son nom, créée dans le téléphone une fois les 5 thèmes terminés : image aux couleurs du Togo avec les badges obtenus et un QR code, à télécharger ou partager directement sur WhatsApp.
- **Un mode animateur** pour les séances en groupe (école, association, église, quartier) : les messages s'affichent en grand sur un vidéoprojecteur, la salle vote à main levée, puis la réponse et les indices apparaissent. Bilan final avec un QR code à scanner. Se pilote aussi au clavier.
- **Des affiches à imprimer** : une affiche A4 et 8 petites cartes par page, avec les réflexes essentiels et un QR code vers le site.
- **Partage sur WhatsApp** du site ou de son score, avec une image d'aperçu soignée.
- **Un petit dictionnaire** de 25 mots, avec une colonne ewe.
- **Une page « En cas d'arnaque »** : les 6 bons réflexes et les contacts du CERT.tg.
- **Une page « Mentions et confidentialité »** : projet indépendant, aucune donnée collectée.
- **Une bande de progression tissée** façon kente : chaque leçon et chaque quiz terminés ajoutent un fil.
- **Aux couleurs du Togo** (vert, jaune, rouge), avec une navigation en bas de l'écran sur mobile, comme une application.
- **Vivant et ludique** : messages qui arrivent en direct sur un faux téléphone, confettis, séries de bonnes réponses, étoiles, badges à gagner par thème, bandeau défilant des phrases d'escrocs. Les animations se coupent automatiquement si le téléphone demande de réduire les mouvements.

## Pensé pour son public

- Fonctionne sur les petits téléphones, **hors connexion** une fois ouvert (service worker).
- **Aucune inscription, aucune donnée envoyée** : la progression reste dans le téléphone.
- Polices **Unbounded** (titres) et **Onest** (texte), choisies parce qu'elles affichent toutes les lettres ewe (ɖ ƒ ɣ ŋ ɔ ɛ ʋ).
- Icônes **Phosphor**, embarquées dans le site (aucune requête externe).
- **Lecture à voix haute** des leçons en français ; emplacements prévus pour l'**audio en ewe**.
- Tout texte pas encore traduit en ewe s'affiche en français, avec une petite étiquette « FR ».

## Lancer le site sur son ordinateur

Aucune installation : c'est un site statique sans framework.

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mettre en ligne avec GitHub Pages

1. Dans le dépôt : **Settings › Pages**.
2. **Source** : *Deploy from a branch*, branche `main`, dossier `/ (root)`.
3. Le site est disponible à `https://cyberachille.github.io/Cybergbe/` après une minute.

À chaque mise à jour, change `VERSION` dans `sw.js` pour que les téléphones récupèrent les nouveaux fichiers.

Si tu passes à un nom de domaine, change l'adresse dans `js/config.js` (`siteUrl`), dans les balises `og:` de `index.html`, et ajoute un fichier `CNAME` contenant le domaine.

## Organisation

| Fichier | Rôle |
|---|---|
| `js/config.js` | Nom du site, liens, couleurs des thèmes, coordonnées du CERT.tg |
| `js/content/fr.js` | Tout le contenu en français (référence) |
| `js/content/ee.js` | Le contenu en ewe, même structure |
| `js/app.js` | Navigation, quiz, salle de jeux, progression, records, badges, animations, langues |
| `js/icones.js` | Icônes Phosphor utilisées par le site (généré par `scripts/icones.js`) |
| `js/qrcode.js` | Génération des QR codes (chargé seulement par les pages qui en affichent) |
| `vendor/tesseract/` | Lecture du texte des captures d'écran, dans le navigateur (chargé seulement quand on ajoute une image) |
| `scripts/modele-ewe.js` | Outil de traduction (mise à jour de `ee.js`, export/import CSV) |
| `docs/PLAN.md` | Arborescence, contenu, feuille de route, partenaires |
| `docs/TRADUCTION.md` | Guide pour les traducteurs et les voix ewe |

## Contribuer

- **Tu parles ewe ?** Lis [docs/TRADUCTION.md](docs/TRADUCTION.md) : le plus simple est de remplir le tableau `docs/traduction-ewe.csv`.
- **Tu as vu une nouvelle arnaque ?** Ouvre une *Issue* pour qu'on l'ajoute au jeu.
- **Modifier le contenu français** : `js/content/fr.js`, puis `node scripts/modele-ewe.js` pour mettre l'ewe à jour.

## Sources

- CERT.tg, avis et alertes publiés sur [cert.tg](https://cert.tg/) (fausses offres d'emploi, fausses plateformes d'investissement, phishing Mobile Money).
- ANCy, Stratégie nationale de cybersécurité 2024-2028.

## Licences

- Code : MIT (voir `LICENSE`).
- Polices Unbounded et Onest : SIL Open Font License 1.1 (voir `fonts/OFL-unbounded.txt` et `fonts/OFL-onest.txt`).
- Icônes Phosphor : MIT (voir `js/LICENCE-phosphor.txt`).
- QR Code Generator de Kazuhiko Arase : MIT (voir `js/LICENCE-qrcode.txt`).
- Tesseract.js et ses données pour le français : Apache 2.0 (voir `vendor/tesseract/`).
