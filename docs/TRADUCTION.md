# Guide de traduction et d'enregistrement en ewe

Merci de nous aider à rendre CyberGbe accessible en ewe.

## Deux façons de traduire

### A. Avec le tableau (le plus simple)

1. Ouvre `docs/traduction-ewe.csv` dans Excel, LibreOffice ou Google Sheets.
2. Remplis la colonne **ewe**. Ne touche pas aux colonnes **chemin** et **français**.
3. Enregistre au format CSV et renvoie le fichier à l'équipe.

L'équipe l'importe ensuite avec :

```bash
node scripts/modele-ewe.js --importer docs/traduction-ewe.csv
```

### B. Directement dans `js/content/ee.js`

Chaque ligne a la forme :

```js
"titre": "",  // FR : Ton code PIN, c'est la clé de ton argent
```

Écris la traduction entre les guillemets. Le texte français est rappelé en commentaire.

## Dans quel ordre

1. **Le dictionnaire** (`dictionnaire`) : il fixe les mots ewe de la cybersécurité. Mettez-vous d'accord sur ces mots avant tout le reste.
2. **L'interface** (`ui`) : menus, boutons, messages courts.
3. **Les leçons**, thème par thème.
4. **Les messages du jeu** (`scenarios`) et les pages « En cas d'arnaque » et « À propos ».

Une chaîne laissée vide s'affiche en français sur le site, en attendant. On peut donc publier au fur et à mesure.

## Règles de traduction

- **Simple avant tout.** Le public lit peu, ou pas du tout. Des phrases courtes, des mots de tous les jours.
- **Pas de traduction automatique.** Elle ne connaît pas le vocabulaire technique en ewe et fait des contresens.
- **Une seule variante d'ewe**, la même partout. Notez votre choix ici : _________________.
- **Garder tels quels :** Mixx by Yas, Flooz, Mobile Money, WhatsApp, Facebook, CERT.tg, ANCy, ArnaKO, les montants (25 000 F), les numéros masqués (+228 9• •• •• 17) et les liens désamorcés (`mixx-cadeau-tg[.]xyz`).
- **Garder les marques `{n}`, `{total}`, `{score}`, `{site}`** : le site les remplace par des chiffres ou par le nom du site.
- **Relecture par une deuxième personne** native avant publication.

## Les lettres ewe

Copie-colle si ton clavier ne les propose pas :

```
ɖ Ɖ   ƒ Ƒ   ɣ Ɣ   ŋ Ŋ   ɔ Ɔ   ɛ Ɛ   ʋ Ʋ
```

Sur Android, un clavier qui gère l'ewe (Gboard, si la langue y est disponible) rend la saisie plus rapide. Les polices du site (Unbounded et Onest) affichent toutes ces lettres.

## Enregistrer l'audio d'une leçon

1. Endroit calme, téléphone à 20 cm de la bouche.
2. Lis lentement, comme si tu expliquais à un parent : le titre, le texte, puis « À retenir ».
3. Format : **MP3 mono**, 64 à 96 kbit/s (fichier léger pour les petits forfaits).
4. Nom du fichier : `audio/ee/<thème>-<numéro>.mp3`, par exemple `audio/ee/mobile-money-2.mp3`.
   Thèmes : `codes`, `mobile-money`, `whatsapp`, `emploi`, `reseaux`.
5. Dans `js/content/ee.js`, remplis le champ `"audio"` de la leçon :
   ```js
   "audio": "audio/ee/mobile-money-2.mp3"
   ```

## Vérifier sur son ordinateur

```bash
python3 -m http.server 8000
```

Ouvre http://localhost:8000, puis choisis **Eʋegbe** en haut à droite.

## Après une modification du contenu français

Si une leçon, une question ou un message est ajouté en français, lance :

```bash
node scripts/modele-ewe.js              # met à jour ee.js sans perdre les traductions
node scripts/modele-ewe.js --exporter   # régénère le tableau CSV
```
