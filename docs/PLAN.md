# CyberGbe : plan du projet

## 1. Objectif

Aider le **grand public togolais** à reconnaître les arnaques du téléphone et d'internet, **en français et en ewe**, avec des exemples d'ici.

| | |
|---|---|
| **Public** | Commerçants, parents, étudiants, chercheurs d'emploi, utilisateurs de Mobile Money. Souvent sur un petit téléphone Android avec peu de données. |
| **Ce qui nous distingue** | Le contenu en ewe (texte et audio) et des cas 100 % locaux : Mixx by Yas, Flooz, WhatsApp, faux recrutements « officiels ». |
| **Contexte** | La Stratégie nationale de cybersécurité 2024-2028 du Togo fait de la sensibilisation de la population un axe prioritaire. L'ANCy indique plus de 333 000 incidents traités entre 2021 et 2024. |

**Principes :** leçons courtes (3 à 5 min), phrases simples, l'audio avant le texte pour l'ewe, aucune inscription, aucune donnée envoyée, fonctionne hors connexion.

## 2. Arborescence du site

```
Accueil (#accueil)
├── Message à juger « Arnaque ou pas ? »
├── Liste des 5 thèmes
├── « Un message bizarre ? Vérifie-le » : démonstration de l'outil
├── « Joue et apprends » : accès rapide aux jeux
├── « Tu animes un groupe ? » : mode animateur et affiches
├── Bande de progression tissée
└── Lien « Tu t'es fait avoir ? »

Leçons (#lecons)
└── Thème (#theme-<id>)
    ├── Leçon 1, 2, 3 (#lecon-<id>-<n>)
    ├── Quiz du thème, 4 questions (#quiz-<id>)
    └── Entraînement ciblé (#jeu-<id>)

Salle de jeux (#jeux)                6 jeux, record enregistré pour chacun
├── Arnaque ou pas ? (#jeu)          48 messages en 3 niveaux, dont 14 normaux
├── Chasse aux pièges (#pieges)      7 messages, 26 passages suspects à toucher
├── Lien piégé ? (#liens)            16 adresses à classer d'un glissement
├── Casse-mot de passe (#mot-de-passe)  Testeur de solidité + 6 duels
├── La journée d'Afi (#histoire)     Histoire à choix, 7 scènes, 60 000 F à protéger
└── Mémo des réflexes (#memo)        Associer chaque piège au bon réflexe
Vérifie un message (#verifier)       Analyse d'un SMS collé, signaux surlignés et expliqués
Ton attestation (#attestation)       Image à son nom après les 5 thèmes, avec QR code
Mode animateur (#animer)             Séance en groupe : vote à main levée, bilan et QR code
Affiches (#affiche)                  Affiche A4 et 8 cartes par page, à imprimer
Mentions (#mentions)                 Indépendance, données, licences
Petit dictionnaire (#dictionnaire)   25 mots, colonne ewe à remplir
En cas d'arnaque (#signaler)         6 étapes + contacts CERT.tg
À propos (#a-propos)                 Projet, appel aux traducteurs et voix
```

## 3. Contenu des 5 thèmes

| Thème | Leçons | Messages du jeu |
|---|---|---|
| **Tes codes secrets** | Le code PIN · Un bon mot de passe · Les codes reçus par SMS | Code « envoyé par erreur » |
| **Mobile Money** | Le faux transfert par erreur · Le faux service client · L'argent facile | Faux transfert, retrait normal, faux service client, faux cadeau |
| **WhatsApp** | Le code à 6 chiffres · La vérification en deux étapes · « J'ai changé de numéro » | Code normal, faux proche, vrai changement de numéro |
| **Fausses offres d'emploi** | Les signaux d'alerte · Les faux recrutements « officiels » · Vérifier (avec ArnaKO) | Faux recrutement, vrai entretien, faux concours |
| **Réseaux sociaux** | Faux profils · Le chantage aux images · Ce que tu publies | Faux concours de star, chantage |

## 4. Structure du dépôt

```
index.html               Page unique (application sans framework)
css/style.css            Styles et animations : couleurs du drapeau togolais
js/config.js             Nom du site, liens, couleurs, coordonnées CERT.tg
js/content/fr.js         Tout le contenu en français (langue de référence)
js/content/ee.js         Le même contenu en ewe (à remplir)
js/app.js                Navigation, quiz, salle de jeux, progression, records, badges, animations
js/icones.js             Icônes Phosphor (licence MIT)
js/qrcode.js             Génération des QR codes (licence MIT)
sw.js                    Mode hors connexion
fonts/                   Unbounded et Onest (licence OFL), avec les lettres ewe
audio/ee/                Enregistrements des leçons en ewe
scripts/modele-ewe.js    Outil de traduction (mise à jour de ee.js, export/import CSV)
docs/                    Ce plan, le guide de traduction, le tableau CSV
```

## 5. Feuille de route

**V1 : maintenant**
- 5 thèmes, 15 leçons, 20 questions de quiz, 48 messages à juger en 3 niveaux, dictionnaire, page d'aide, badges, partage WhatsApp.
- Lecture à voix haute du français (voix du téléphone).
- Site prêt pour l'ewe : la structure est là, chaque texte non traduit s'affiche en français.

**V1.1 : l'ewe**
1. Recruter 1 traducteur et 1 relecteur natifs (par ex. via le département de linguistique de l'Université de Lomé).
2. Traduire d'abord le dictionnaire (fixe le vocabulaire), puis l'interface, puis les leçons.
3. Enregistrer les 15 leçons en audio (voix locale, calme, lente).
4. Vérifier que l'audio est compris aussi par les locuteurs du mina.

**V1.2 : tester sur le terrain**
- 10 à 20 personnes réelles (famille, marché, voisinage, camarades) avant d'ajouter du contenu.
- Observer : où bloquent-elles ? quels mots ne comprennent-elles pas ? quels messages du jeu les piègent ?

**V2 : diffuser et grandir**
- Fait : mode animateur pour les séances en groupe, affiche A4 et cartes à imprimer avec QR code, attestation de fin de parcours, outil « Vérifie un message ».
- Fiches imprimables par thème pour les animateurs (radios communautaires, associations, groupements de femmes, églises).
- Nouveaux messages du jeu à partir des alertes du CERT.tg et des arnaques signalées par les utilisateurs.
- Enrichir « Vérifie un message » avec les tournures ewe et mina des escrocs, dès que la traduction avance.
- Autres langues gbe (mina) si la demande existe.

## 6. Partenaires à contacter

| Qui | Pourquoi |
|---|---|
| ANCy / CERT.tg | Valider le contenu, relayer le site (axe « sensibilisation » de leur stratégie) |
| Radios communautaires en ewe | Diffuser les audios, toucher ceux qui lisent peu |
| Clubs cyber d'IPNET et des universités | Relecture technique, ambassadeurs |
| Associations, groupements, églises | Ateliers en présentiel avec le site |

## 7. Comment mesurer

Sans collecter de données personnelles :
- nombre de personnes testées sur le terrain et ce qu'elles ont retenu ;
- avancement de la traduction (affiché en tête de `ee.js`) ;
- retours reçus via les « Issues » GitHub ou les partenaires.
