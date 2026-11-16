#!/usr/bin/env node
/*
 * Génère js/icones.js à partir de la bibliothèque Phosphor Icons (licence MIT).
 *
 *   npm pack @phosphor-icons/core && tar xzf phosphor-icons-core-*.tgz
 *   node scripts/icones.js chemin/vers/package/assets
 *
 * Seules les icônes listées ci-dessous sont embarquées, pour garder le site léger.
 */
const fs = require("fs");
const path = require("path");

const source = process.argv[2];
if (!source) { console.error("Indique le dossier assets de @phosphor-icons/core."); process.exit(1); }

// nom utilisé dans le site : nom Phosphor
const ICONES = {
  maison: "house", livre: "book-open-text", jeu: "game-controller", mots: "text-aa", bouee: "lifebuoy",
  alerte: "warning", valide: "check-circle", coche: "check", croix: "x", gauche: "caret-left", droite: "caret-right",
  fleche: "arrow-right", volume: "speaker-high", stop: "stop-circle", recherche: "magnifying-glass",
  telephone: "phone", appel: "phone-incoming", sms: "chat-text", message: "chat-circle-dots", courriel: "envelope-simple",
  globe: "globe-simple", ampoule: "lightbulb", eclair: "lightning", langue: "translate", info: "info",
  signal: "cell-signal-full", wifi: "wifi-high", batterie: "battery-full", rejouer: "arrow-counter-clockwise",
  bouclier: "shield-check", feu: "fire", trophee: "trophy", medaille: "medal", etoile: "star", etincelle: "sparkle",
  cadenas: "lock-simple", profil: "user-circle", cadeau: "gift", code: "code", cle: "lock-key",
  argent: "hand-coins", mallette: "briefcase", personnes: "users-three", oeil: "eye", sceau: "seal-check",
  cible: "crosshair", lecture: "play", livre2: "book-bookmark",
  partager: "share-network", copier: "copy", lien: "link", balance: "scales", envoyer: "paper-plane-tilt",
  pousse: "plant", jauge: "gauge", crane: "skull", melange: "shuffle",
  memo: "cards", coeur: "heart", oeilbarre: "eye-slash", glisser: "hand-swipe-right", chrono: "timer",
  portemonnaie: "wallet", horloge: "clock", navigateur: "browser", ouvert: "lock-open", cible2: "target", puzzle: "puzzle-piece",
  loupe: "detective", coller: "clipboard-text", attestation: "certificate", animer: "projector-screen", imprimer: "printer",
  qr: "qr-code", telecharger: "download-simple", pleinecran: "arrows-out", main: "hand-palm", fermer: "x-circle",
  megaphone: "megaphone", identite: "identification-card", lienbrise: "link-break", billet: "money", changement: "user-switch",
  codepin: "password", sablier: "hourglass-high", stop2: "warning-octagon", tableau: "chalkboard-teacher", effacer: "trash", crayon: "pencil-simple"
};
const STYLES = ["bold", "duotone", "fill"];

const sortie = {};
for (const style of STYLES) {
  sortie[style] = {};
  for (const [nom, ph] of Object.entries(ICONES)) {
    const fichier = path.join(source, style, `${ph}-${style}.svg`);
    if (!fs.existsSync(fichier)) { console.warn("absente :", style, ph); continue; }
    const svg = fs.readFileSync(fichier, "utf8");
    sortie[style][nom] = svg.replace(/^.*?<svg[^>]*>/s, "").replace(/<\/svg>\s*$/s, "").trim();
  }
}

const js = `/*
 * Icônes : Phosphor Icons (https://phosphoricons.com), licence MIT, © 2023 Phosphor Icons.
 * Fichier généré par  node scripts/icones.js  : ne pas modifier à la main.
 */
window.CG_ICONES = ${JSON.stringify(sortie)};
`;
fs.writeFileSync(path.join(__dirname, "..", "js", "icones.js"), js, "utf8");
console.log("js/icones.js :", Object.keys(ICONES).length, "icônes x", STYLES.length, "styles,", Math.round(js.length / 1024), "Ko");
