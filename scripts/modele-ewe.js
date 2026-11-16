#!/usr/bin/env node
/*
 * Outil de traduction ewe.
 *
 *   node scripts/modele-ewe.js
 *       Met à jour js/content/ee.js à partir de js/content/fr.js.
 *       Chaque texte à traduire est suivi d'un commentaire avec le texte français.
 *       Les traductions déjà présentes sont conservées.
 *
 *   node scripts/modele-ewe.js --exporter
 *       Crée docs/traduction-ewe.csv (à ouvrir dans Excel, LibreOffice ou Google Sheets).
 *       Colonnes : chemin ; français ; ewe.
 *
 *   node scripts/modele-ewe.js --importer docs/traduction-ewe.csv
 *       Recopie la colonne « ewe » du tableau dans js/content/ee.js.
 *
 * Les champs techniques (id, module, canal, verdict, bonne réponse…) ne se traduisent pas :
 * le site les lit toujours dans fr.js.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const racine = path.join(__dirname, "..");
const fichierFr = path.join(racine, "js/content/fr.js");
const fichierEe = path.join(racine, "js/content/ee.js");
const fichierCsv = path.join(racine, "docs/traduction-ewe.csv");

const TECHNIQUES = new Set(["id", "module", "lecon", "canal", "verdict", "bonne", "scenario_accueil", "url", "niveau", "domaine", "duels"]);

function charger(fichier) {
  const bac = { window: {} };
  vm.createContext(bac);
  vm.runInContext(fs.readFileSync(fichier, "utf8"), bac, { filename: fichier });
  return bac.window.CG_CONTENU || {};
}

/* Construit l'objet ewe avec la structure du français, en gardant l'existant */
function modele(fr, ee) {
  if (Array.isArray(fr)) return fr.map((el, i) => modele(el, Array.isArray(ee) ? ee[i] : undefined));
  if (fr && typeof fr === "object") {
    const sortie = {};
    for (const cle of Object.keys(fr)) {
      if (TECHNIQUES.has(cle)) continue;
      const v = modele(fr[cle], ee && typeof ee === "object" ? ee[cle] : undefined);
      if (v !== undefined) sortie[cle] = v; // les nombres et vrai/faux restent dans fr.js
    }
    return sortie;
  }
  if (typeof fr === "string") return typeof ee === "string" ? ee : "";
  return undefined;
}

/* Liste [chemin, français, ewe] de tous les textes à traduire */
function lignes(fr, ee, chemin = [], acc = []) {
  if (Array.isArray(fr)) fr.forEach((el, i) => lignes(el, ee && ee[i], chemin.concat(i), acc));
  else if (fr && typeof fr === "object") {
    for (const cle of Object.keys(fr)) {
      if (TECHNIQUES.has(cle)) continue;
      lignes(fr[cle], ee && ee[cle], chemin.concat(cle), acc);
    }
  } else if (typeof fr === "string") acc.push([chemin.join("."), fr, typeof ee === "string" ? ee : ""]);
  return acc;
}

/* Écrit ee.js en JavaScript lisible, avec le français en commentaire */
function serialiser(fr, ee, indent) {
  const pad = "  ".repeat(indent);
  const pad2 = "  ".repeat(indent + 1);
  const commentaire = (t) => "  // FR : " + t.replace(/\s+/g, " ");
  if (Array.isArray(ee)) {
    const items = ee.map((el, i) => {
      const fin = i < ee.length - 1 ? "," : "";
      if (typeof el === "string") return pad2 + JSON.stringify(el) + fin + commentaire(fr[i]);
      return pad2 + serialiser(fr[i], el, indent + 1) + fin;
    });
    return "[\n" + items.join("\n") + "\n" + pad + "]";
  }
  const cles = Object.keys(ee);
  const items = cles.map((cle, i) => {
    const fin = i < cles.length - 1 ? "," : "";
    const val = ee[cle];
    if (typeof val === "string") return pad2 + JSON.stringify(cle) + ": " + JSON.stringify(val) + fin + commentaire(fr[cle]);
    return pad2 + JSON.stringify(cle) + ": " + serialiser(fr[cle], val, indent + 1) + fin;
  });
  return "{\n" + items.join("\n") + "\n" + pad + "}";
}

function ecrireEe(fr, ee) {
  const tout = lignes(fr, ee);
  const faits = tout.filter((l) => l[2].trim()).length;
  const entete = `/*
 * Contenu en ewe (Eʋegbe).
 *
 * Même structure que fr.js. Remplace chaque "" par la traduction ewe :
 * le texte français à traduire est rappelé en commentaire au bout de la ligne.
 * Une chaîne laissée vide s'affiche en français sur le site, en attendant.
 *
 * Avant de traduire, lis docs/TRADUCTION.md (glossaire, règles, enregistrement audio).
 * Pour ajouter l'audio d'une leçon, remplis son champ « audio »,
 * par exemple : "audio": "audio/ee/codes-1.mp3"
 *
 * Fichier généré par  node scripts/modele-ewe.js  (les traductions existantes sont conservées).
 * Avancement : ${faits} textes traduits sur ${tout.length}.
 */
`;
  const corps = "window.CG_CONTENU = window.CG_CONTENU || {};\nwindow.CG_CONTENU.ee = " + serialiser(fr, ee, 0) + ";\n";
  fs.writeFileSync(fichierEe, entete + corps, "utf8");
  console.log(`ee.js mis à jour : ${faits} textes traduits sur ${tout.length}.`);
}

/* --- CSV (séparateur « ; », encodage UTF-8 avec BOM pour Excel) --- */
function csvChamp(t) { return '"' + String(t).replace(/"/g, '""') + '"'; }

function lireCsv(texte) {
  texte = texte.replace(/^\uFEFF/, "");
  // Excel en français sépare par « ; », Google Sheets par « , » : on regarde la 1re ligne
  const sep = texte.split(/\r?\n/)[0].includes(";") ? ";" : ",";
  const lignesCsv = [];
  let ligne = [], champ = "", guillemets = false;
  for (let i = 0; i < texte.length; i++) {
    const c = texte[i];
    if (guillemets) {
      if (c === '"' && texte[i + 1] === '"') { champ += '"'; i++; }
      else if (c === '"') guillemets = false;
      else champ += c;
    } else if (c === '"') guillemets = true;
    else if (c === sep) {
      ligne.push(champ); champ = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && texte[i + 1] === "\n") i++;
      ligne.push(champ); champ = "";
      if (ligne.some((x) => x !== "")) lignesCsv.push(ligne);
      ligne = [];
    } else champ += c;
  }
  if (champ !== "" || ligne.length) { ligne.push(champ); lignesCsv.push(ligne); }
  return lignesCsv;
}

function placer(obj, chemin, valeur) {
  const parts = chemin.split(".");
  let o = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (o == null) return false;
    o = o[parts[i]];
  }
  const der = parts[parts.length - 1];
  if (o == null || typeof o[der] !== "string") return false;
  o[der] = valeur;
  return true;
}

/* --- Programme principal --- */
const fr = charger(fichierFr).fr;
const eeExistant = fs.existsSync(fichierEe) ? (charger(fichierEe).ee || {}) : {};
const ee = modele(fr, eeExistant);
if (!ee.ui.langue) ee.ui.langue = "Eʋegbe";

const args = process.argv.slice(2);

if (args[0] === "--exporter") {
  const contenu = "\uFEFF" + [["chemin", "français", "ewe"]].concat(lignes(fr, ee))
    .map((l) => l.map(csvChamp).join(";")).join("\r\n") + "\r\n";
  fs.writeFileSync(fichierCsv, contenu, "utf8");
  console.log("Tableau créé : docs/traduction-ewe.csv");
} else if (args[0] === "--importer") {
  const source = args[1] ? path.resolve(args[1]) : fichierCsv;
  const tableau = lireCsv(fs.readFileSync(source, "utf8"));
  let ok = 0, ignores = 0;
  tableau.slice(1).forEach(([chemin, , traduction]) => {
    if (!chemin) return;
    if (placer(ee, chemin, (traduction || "").trim())) ok++; else ignores++;
  });
  console.log(`${ok} lignes importées${ignores ? `, ${ignores} lignes ignorées (chemin inconnu)` : ""}.`);
  ecrireEe(fr, ee);
} else {
  ecrireEe(fr, ee);
}
