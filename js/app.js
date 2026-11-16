/*
 * CyberGbe : application (site statique, sans dépendance).
 *
 * Routes (ancres simples, compatibles partout) :
 *   #accueil  #lecons  #theme-<id>  #lecon-<id>-<n>  #quiz-<id>
 *   #jeux  #jeu  #jeu-<id>  #pieges  #liens  #mot-de-passe  #histoire  #memo
 *   #verifier  #assistant  #attestation  #animer  #affiche  #dictionnaire  #signaler  #a-propos  #mentions
 */
(function () {
  "use strict";

  var CFG = window.CG_CONFIG;
  var BRUT = window.CG_CONTENU;
  var ICONES = window.CG_ICONES || { bold: {}, duotone: {}, fill: {} };
  var CHAMPS_TECHNIQUES = { id: 1, module: 1, lecon: 1, canal: 1, verdict: 1, bonne: 1, scenario_accueil: 1, url: 1, niveau: 1, domaine: 1, duels: 1 };
  var TAILLE_PARTIE = 10;
  var CALME = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  if (!CALME) document.documentElement.classList.add("js-anime");

  /* ================================================================== */
  /* Stockage local : peut être indisponible, le site ne plante jamais  */
  /* ================================================================== */
  var stock = {
    lire: function (cle, defaut) {
      try { var v = window.localStorage.getItem(cle); return v ? JSON.parse(v) : defaut; }
      catch (e) { return defaut; }
    },
    ecrire: function (cle, val) {
      try { window.localStorage.setItem(cle, JSON.stringify(val)); } catch (e) { /* rien */ }
    }
  };
  var CLE_PROG = "cybergbe.progression.v1";
  var CLE_LANGUE = "cybergbe.langue";

  var etat = {
    langue: stock.lire(CLE_LANGUE, "fr"),
    prog: stock.lire(CLE_PROG, null),
    nouveauFil: null,
    jeu: null,
    quiz: null,
    premierRendu: true,
    accueilAnime: false,
    route: ""
  };
  if (!etat.prog || typeof etat.prog !== "object") etat.prog = {};
  etat.prog.lecons = etat.prog.lecons || {};
  etat.prog.quiz = etat.prog.quiz || {};
  if (!BRUT[etat.langue]) etat.langue = "fr";

  function sauverProg() { stock.ecrire(CLE_PROG, etat.prog); }

  /* ================================================================== */
  /* Langues : le français sert de repli pour tout texte non traduit    */
  /* ================================================================== */
  function fusion(fr, autre) {
    if (Array.isArray(fr)) {
      return fr.map(function (el, i) { return fusion(el, Array.isArray(autre) ? autre[i] : undefined); });
    }
    if (fr && typeof fr === "object") {
      var o = {};
      Object.keys(fr).forEach(function (k) {
        o[k] = CHAMPS_TECHNIQUES[k] ? fr[k] : fusion(fr[k], autre && typeof autre === "object" ? autre[k] : undefined);
      });
      return o;
    }
    if (typeof fr === "string") return (typeof autre === "string" && autre.trim()) ? autre : fr;
    return fr;
  }

  function compterTextes(fr, autre) {
    var r = { total: 0, faits: 0 };
    (function parcourir(a, b) {
      if (Array.isArray(a)) return a.forEach(function (el, i) { parcourir(el, Array.isArray(b) ? b[i] : undefined); });
      if (a && typeof a === "object") {
        return Object.keys(a).forEach(function (k) {
          if (!CHAMPS_TECHNIQUES[k] && k !== "audio") parcourir(a[k], b && typeof b === "object" ? b[k] : undefined);
        });
      }
      if (typeof a === "string") { r.total++; if (typeof b === "string" && b.trim()) r.faits++; }
    })(fr, autre);
    return r;
  }

  var C;
  function chargerLangue() {
    C = etat.langue === "fr" ? BRUT.fr : fusion(BRUT.fr, BRUT[etat.langue] || {});
    document.documentElement.lang = etat.langue;
  }

  function brut() {
    var o = BRUT[etat.langue] || {};
    for (var i = 0; i < arguments.length; i++) {
      if (o == null) return undefined;
      o = o[arguments[i]];
    }
    return o;
  }
  function estTraduit() {
    if (etat.langue === "fr") return true;
    var v = brut.apply(null, arguments);
    return typeof v === "string" && v.trim() !== "";
  }

  function t(cle, vars) {
    var s = (C.ui && C.ui[cle] != null) ? C.ui[cle] : BRUT.fr.ui[cle];
    if (s == null) s = cle;
    if (typeof s === "string" && vars) {
      Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
    }
    return s;
  }

  /* Accord : « 0 ou 1 étape », « 2 étapes » (clé « _un » pour le singulier) */
  function tp(cle, n, vars) {
    var un = cle + "_un";
    var existe = (C.ui && C.ui[un] != null) || BRUT.fr.ui[un] != null;
    return t(n <= 1 && existe ? un : cle, vars);
  }

  /* ================================================================== */
  /* Outils                                                             */
  /* ================================================================== */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  /* Typographie française : apostrophe courbe, espaces insécables */
  function typo(s) {
    return s.replace(/'/g, "’").replace(/ ([?!:;»])/g, " $1").replace(/« /g, "« ");
  }
  function h(s) { return typo(esc(s)); }

  function etiquetteFr() {
    return '<span class="etiquette-fr"><span aria-hidden="true">FR</span><span class="visuellement-cache"> (' +
      esc(t("langue_pas_traduit")) + ")</span></span>";
  }
  function attrLangFr(traduit) { return (!traduit && etat.langue !== "fr") ? ' lang="fr"' : ""; }

  /* Texte lisible (blanc ou vert nuit) selon la clarté de la couleur de fond */
  function texteSur(hex) {
    var n = parseInt(String(hex).replace("#", ""), 16);
    var lum = [n >> 16 & 255, n >> 8 & 255, n & 255].map(function (v) {
      v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    var L = 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    return (1.05 / (L + 0.05)) >= 4.5 ? "#FFFFFF" : "#00261C";
  }
  function couleurs(id) {
    var c = CFG.couleurs[id] || "#006A4E";
    return "--c:" + c + ";--ct:" + ((CFG.couleursTexte || {})[id] || "#006A4E") + ";--sc:" + texteSur(c);
  }

  function minutes(l) {
    var mots = [l.titre].concat(l.corps, l.etapes || [], l.retenir).join(" ").split(/\s+/).length;
    return Math.max(1, Math.round(mots / 160));
  }
  function lienUrl(url) { return String(url || "").replace("{arnako}", CFG.arnako).replace("{depot}", CFG.depot); }
  function milliers(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " "); }
  function revele(i, pas) { return ' data-revele style="--d:' + Math.min(i * (pas || 70), 560) + 'ms"'; }

  /* --- Icônes Phosphor ------------------------------------------------- */
  function ic(nom, style) {
    var jeu = ICONES[style || "bold"] || ICONES.bold;
    return '<svg viewBox="0 0 256 256" width="1.25em" height="1.25em" fill="currentColor" aria-hidden="true" focusable="false">' +
      (jeu[nom] || ICONES.bold[nom] || "") + "</svg>";
  }
  var ICONE_THEME = { "codes": "cle", "mobile-money": "argent", "whatsapp": "message", "emploi": "mallette", "reseaux": "personnes" };
  var ICONE_CANAL = { sms: "sms", whatsapp: "message", appel: "appel", facebook: "profil", email: "courriel" };

  /* ================================================================== */
  /* Progression et badges                                              */
  /* ================================================================== */
  function cleLecon(mid, n) { return mid + "/" + n; }
  function leconFaite(mid, n) { return !!etat.prog.lecons[cleLecon(mid, n)]; }
  function quizFait(mid) { return !!etat.prog.quiz[mid]; }

  function avancement() {
    var total = 0, faits = 0;
    C.modules.forEach(function (m) {
      m.lecons.forEach(function (l, i) { total++; if (leconFaite(m.id, i + 1)) faits++; });
      total++; if (quizFait(m.id)) faits++;
    });
    return { total: total, faits: faits };
  }
  function etatModule(m) {
    var etapes = m.lecons.map(function (l, i) { return leconFaite(m.id, i + 1); });
    etapes.push(quizFait(m.id));
    var n = etapes.filter(Boolean).length;
    return { etapes: etapes, faits: n, total: etapes.length };
  }
  function modulesComplets() {
    return C.modules.filter(function (m) { var e = etatModule(m); return e.faits === e.total; }).map(function (m) { return m.id; });
  }
  function feterNouveauxBadges(avant) {
    var complets = modulesComplets();
    if (complets.length === C.modules.length && avant.length < C.modules.length) {
      setTimeout(function () { annoncer(O().attestation.annonce, { titre: O().attestation.bloc_titre + " : ", icone: "attestation", duree: 6000 }); }, 5600);
    }
    complets.forEach(function (id) {
      if (avant.indexOf(id) !== -1) return;
      var m = trouverModule(id).m;
      setTimeout(function () {
        annoncer(t("badge_message", { badge: m.badge }), { titre: t("badge_nouveau"), icone: "medaille", duree: 5000 });
        confettis(window.innerWidth / 2, window.innerHeight * 0.35, 160);
      }, 500);
    });
  }

  function prochaineEtape() {
    for (var k = 0; k < C.modules.length; k++) {
      var m = C.modules[k];
      for (var i = 0; i < m.lecons.length; i++) {
        if (!leconFaite(m.id, i + 1)) return { href: "#lecon-" + m.id + "-" + (i + 1), titre: m.lecons[i].titre };
      }
      if (!quizFait(m.id)) return { href: "#quiz-" + m.id, titre: t("module_quiz") + " : " + m.titre };
    }
    return null;
  }

  function bandeHTML(classe) {
    var groupes = C.modules.map(function (m) {
      var fils = m.lecons.map(function (l, i) {
        var cle = cleLecon(m.id, i + 1);
        return '<span class="fil' + (leconFaite(m.id, i + 1) ? " fait" : "") + (etat.nouveauFil === cle ? " tisse" : "") + '"></span>';
      }).join("");
      fils += '<span class="fil quiz' + (quizFait(m.id) ? " fait" : "") + (etat.nouveauFil === m.id + "/quiz" ? " tisse" : "") + '"></span>';
      return '<span class="bande-groupe" style="' + couleurs(m.id) + '">' + fils + "</span>";
    }).join("");
    var a = avancement();
    return '<div class="bande ' + (classe || "") + '" role="img" aria-label="' +
      esc(typo(t("progression") + " : " + tp("progression_texte", a.faits, { n: a.faits, total: a.total }))) + '">' + groupes + "</div>";
  }
  function majBande() {
    var el = document.querySelector("[data-bande-entete]");
    if (el) el.innerHTML = bandeHTML("bande-entete");
  }
  function miniBarre(etapes) {
    return '<span class="mini-barre" aria-hidden="true">' +
      etapes.map(function (f) { return '<span class="' + (f ? "fait" : "") + '"></span>'; }).join("") + "</span>";
  }
  function etoilesHTML(n) {
    var html = '<div class="etoiles" role="img" aria-label="' + esc(typo(tp("etoiles", n, { n: n }))) + '">';
    for (var i = 0; i < 3; i++) html += ic("etoile", "fill").replace("<svg ", '<svg class="' + (i < n ? "allumee" : "") + '" style="--i:' + i + '" ');
    return html + "</div>";
  }
  function nbEtoiles(score, total) {
    var r = total ? score / total : 0;
    return r >= 1 ? 3 : r >= 0.75 ? 2 : r >= 0.5 ? 1 : 0;
  }

  /* ================================================================== */
  /* Composants                                                         */
  /* ================================================================== */
  function trouverModule(id) {
    for (var i = 0; i < C.modules.length; i++) if (C.modules[i].id === id) return { m: C.modules[i], i: i };
    return null;
  }
  function trouverScenario(id) {
    for (var i = 0; i < C.scenarios.length; i++) if (C.scenarios[i].id === id) return { s: C.scenarios[i], i: i };
    return null;
  }

  function tuilesThemes() {
    var ordre = C.modules.slice();
    var v = ordre.filter(function (m) { return m.id === CFG.themeVedette; })[0];
    if (v) ordre = [v].concat(ordre.filter(function (m) { return m !== v; }));
    return '<ul class="tuiles">' + ordre.map(function (m, k) {
      var mi = trouverModule(m.id).i;
      var e = etatModule(m);
      var etatTexte = e.faits === e.total ? t("module_termine") : (e.faits > 0 ? tp("module_etapes", e.faits, { n: e.faits, total: e.total }) : t("module_lecons_quiz", { n: m.lecons.length }));
      var traduit = estTraduit("modules", mi, "titre");
      var vedette = m.id === CFG.themeVedette;
      return '<li class="tuile' + (vedette ? " tuile-vedette" : "") + '"' + revele(k, 80).replace('style="', 'style="' + couleurs(m.id) + ";") + ">" +
        '<a href="#theme-' + m.id + '"' + attrLangFr(traduit) + ">" +
        (vedette ? '<span class="tuile-badge">' + ic("feu", "fill") + h(t("theme_populaire")) + "</span>" : "") +
        '<span class="tuile-icone">' + ic(ICONE_THEME[m.id], "duotone") + "</span>" +
        '<span class="tuile-titre">' + h(m.titre) + (traduit ? "" : etiquetteFr()) + "</span>" +
        '<span class="tuile-resume">' + h(m.resume) + "</span>" +
        '<span class="tuile-pied">' + miniBarre(e.etapes) + '<span class="tuile-etat">' + h(etatTexte) + "</span></span>" +
        "</a></li>";
    }).join("") + "</ul>";
  }

  function badgesHTML() {
    return '<div class="badges-zone"><h3' + revele(0) + ">" + h(t("badges_titre")) + "</h3><p" + revele(1) + ">" + h(t("badges_intro")) + "</p>" +
      '<ul class="badges">' + C.modules.map(function (m, k) {
        var e = etatModule(m), gagne = e.faits === e.total;
        return '<li class="badge' + (gagne ? "" : " verrouille") + '"' + revele(k, 80).replace('style="', 'style="' + couleurs(m.id) + ";") + ">" +
          '<span class="medaille">' + ic(gagne ? ICONE_THEME[m.id] : "cadenas", gagne ? "fill" : "bold") + "</span>" +
          '<span class="badge-nom">' + h(m.badge) + "</span>" +
          '<span class="badge-etat">' + ic(gagne ? "sceau" : "cadenas", "fill") + h(t(gagne ? "badge_gagne" : "badge_verrouille")) + "</span></li>";
      }).join("") + "</ul></div>";
  }

  function heure() {
    var d = new Date();
    return (d.getHours() < 10 ? "0" : "") + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  }

  function scenarioHTML(sc, mode, anime) {
    var idx = trouverScenario(sc.id).i;
    var traduit = estTraduit("scenarios", idx, "messages", 0);
    var html = '<div class="scenario' + (anime ? " anime" : "") + '" data-scenario="' + sc.id + '" data-mode="' + mode + '"' + attrLangFr(traduit) + ">";
    if (mode === "accueil") html += '<p class="consigne">' + h(t("accueil_jeu_consigne")) + "</p>";
    if (sc.contexte) html += '<p class="situation">' + ic("info", "fill") + "<span><strong>" + h(t("jeu_contexte")) + " :</strong> " + h(sc.contexte) + "</span></p>";
    html += '<div class="telephone-inclinaison"><div class="telephone-bercer"><div class="telephone" data-canal="' + sc.canal + '"><div class="telephone-ecran">' +
      '<div class="statut" aria-hidden="true"><span>' + heure() + '</span><span class="statut-icones">' + ic("signal", "fill") + ic("wifi") + ic("batterie", "fill") + "</span></div>" +
      '<div class="conv-entete"><span class="avatar">' + ic(ICONE_CANAL[sc.canal] || "sms", "fill") + "</span>" +
      '<span><span class="conv-nom">' + h(sc.expediteur) + '</span><span class="conv-canal">' + h(t("canal_" + sc.canal)) + "</span></span></div>" +
      '<div class="conv-fil">' + sc.messages.map(function (msg, i) {
        return '<p class="bulle" style="--i:' + i + '">' + h(msg) + "</p>";
      }).join("") + '<span class="ecrit" aria-hidden="true" style="--n:' + sc.messages.length + '"><i></i><i></i><i></i></span></div>' +
      "</div></div></div></div>" +
      '<div class="choix" role="group" aria-label="' + esc(typo(t("accueil_jeu_consigne"))) + '" style="--n:' + sc.messages.length + '">' +
      '<button type="button" data-choix="arnaque">' + ic("alerte", "fill") + "<span>" + h(t("bouton_arnaque")) + "</span></button>" +
      '<button type="button" data-choix="normal">' + ic("valide", "fill") + "<span>" + h(t("bouton_normal")) + "</span></button>" +
      "</div><div data-retour></div></div>";
    return html;
  }

  function retourHTML(sc, choix, mode) {
    var juste = choix === sc.verdict;
    var lienLecon = "#lecon-" + sc.module + "-" + sc.lecon;
    var actions = mode === "accueil"
      ? '<a class="bouton" href="#jeu">' + h(t("jeu_continuer")) + ic("fleche") + "</a>" +
        '<a class="bouton bouton-second" href="' + lienLecon + '">' + h(t("jeu_voir_lecon")) + "</a>"
      : '<button type="button" class="bouton" data-suivant>' + h(t("jeu_suivant")) + ic("fleche") + "</button>" +
        '<a class="bouton bouton-second" href="' + lienLecon + '">' + h(t("jeu_voir_lecon")) + "</a>";
    return '<div class="retour ' + sc.verdict + (juste ? " juste" : " rate") + '" tabindex="-1">' +
      '<div class="retour-tete">' + ic(juste ? "valide" : "alerte", "fill") +
      '<p class="retour-titre">' + h(t(juste ? "jeu_bien_vu" : "jeu_attention")) + "</p></div>" +
      '<p class="retour-verdict">' + h(t(sc.verdict === "arnaque" ? "jeu_verdict_arnaque" : "jeu_verdict_normal")) + "</p>" +
      "<p>" + h(sc.explication) + "</p>" +
      "<h3>" + h(t(sc.verdict === "arnaque" ? "jeu_indices_arnaque" : "jeu_indices_normal")) + "</h3>" +
      '<ul class="indices">' + sc.indices.map(function (x, i) { return '<li style="--i:' + i + '">' + ic(sc.verdict === "arnaque" ? "alerte" : "valide", "fill") + "<span>" + h(x) + "</span></li>"; }).join("") + "</ul>" +
      '<div class="actions">' + actions + "</div></div>";
  }

  function pageTete(contenu, classe, style) {
    return '<header class="page-tete' + (classe ? " " + classe : "") + '"' + (style ? ' style="' + style + '"' : "") +
      '><div class="conteneur">' + contenu + "</div></header>";
  }
  function ariane(href, texte) { return '<a class="ariane" href="' + href + '">' + ic("gauche") + "<span>" + h(texte) + "</span></a>"; }

  /* Boutons de partage : lien WhatsApp (marche partout) + copie du lien */
  function partageHTML(texte) {
    var message = typo(texte.split("{url}").join(CFG.siteUrl).split("{site}").join(CFG.nomSite));
    return '<div class="partage">' +
      '<a class="bouton bouton-whatsapp" href="https://wa.me/?text=' + encodeURIComponent(message) + '" target="_blank" rel="noopener">' + ic("partager", "fill") + h(t("partage_whatsapp")) + "</a>" +
      '<button type="button" class="bouton bouton-second" data-copier>' + ic("lien") + h(t("partage_copier")) + "</button></div>";
  }
  function copierLien() {
    var echec = function () { annoncer(t("partage_copie_echec", { url: CFG.siteUrl }), { icone: "lien", duree: 6000 }); };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CFG.siteUrl).then(function () { annoncer(t("partage_copie_ok"), { icone: "copier" }); }, echec);
      } else { echec(); }
    } catch (e) { echec(); }
  }
  function niveauPuce(n) {
    return '<span class="niveau-puce niveau-' + n + '">' + h(t("niveau_" + n)) + "</span>";
  }

  function parcours(m, courant) {
    var items = m.lecons.map(function (l, i) {
      var cls = [leconFaite(m.id, i + 1) ? "faite" : "", courant === i + 1 ? "courante" : ""].join(" ").trim();
      return '<li class="' + cls + '"><a href="#lecon-' + m.id + "-" + (i + 1) + '" aria-label="' + esc(typo(t("lecon_n", { n: i + 1, total: m.lecons.length }))) + '"' +
        (courant === i + 1 ? ' aria-current="step"' : "") + ">" + (leconFaite(m.id, i + 1) && courant !== i + 1 ? ic("coche") : (i + 1)) + "</a></li>";
    });
    var clsQ = [quizFait(m.id) ? "faite" : "", courant === "quiz" ? "courante" : ""].join(" ").trim();
    items.push('<li class="' + clsQ + '"><a href="#quiz-' + m.id + '"' + (courant === "quiz" ? ' aria-current="step"' : "") + ">" + h(t("parcours_quiz")) + "</a></li>");
    return '<ol class="parcours">' + items.join("") + "</ol>";
  }

  /* ================================================================== */
  /* Pages                                                              */
  /* ================================================================== */
  var pages = {};

  pages.accueil = function () {
    var sc = trouverScenario(C.scenario_accueil).s;
    var a = avancement();
    var suite = prochaineEtape();
    var anime = !etat.accueilAnime && !CALME;
    etat.accueilAnime = true;
    var atouts = t("accueil_atouts"); if (!Array.isArray(atouts)) atouts = [];
    var phrases = t("bandeau_phrases"); if (!Array.isArray(phrases)) phrases = [];
    var puces = t("puces_deco"); if (!Array.isArray(puces)) puces = [];
    var icAtouts = ["langue", "eclair", "bouclier"];
    var placePuces = ["left:45%;top:7%", "right:1.5%;top:9%;animation-delay:-3s", "left:8%;bottom:6%;animation-delay:-6s"];

    // Titre découpé en mots qui arrivent l'un après l'autre ; le dernier mot est surligné en jaune
    var mots = typo(t("accueil_titre")).split(/ (?=[^ ])/);
    var titre = mots.map(function (m, i) {
      var cls = i === mots.length - 1 ? "mot surligne" : "mot";
      return '<span class="' + cls + '" style="--i:' + i + '">' + esc(m) + "</span>";
    }).join(" ");

    var listeDefile = phrases.map(function (p) { return "<li>" + ic("alerte", "fill") + h(p) + "</li>"; }).join("");

    return '<section class="une">' +
      '<div class="une-deco" aria-hidden="true"><span class="tache tache-1"></span><span class="tache tache-2"></span><span class="tache tache-3"></span>' +
      puces.map(function (p, i) { return '<span class="puce-deco" style="' + placePuces[i % 3] + '">' + ic("alerte", "fill") + h(p) + "</span>"; }).join("") + "</div>" +
      '<div class="conteneur une-grille">' +
      '<div class="une-texte"><h1 tabindex="-1">' + titre + "</h1>" +
      '<p class="une-intro">' + h(t("accueil_intro")) + "</p>" +
      '<div class="une-actions"><a class="bouton bouton-jaune" href="#lecons">' + h(t("accueil_cta_lecons")) + ic("fleche") + "</a>" +
      '<a class="bouton bouton-clair" href="#jeux">' + ic("jeu", "fill") + h(t("accueil_cta_jeu")) + "</a></div>" +
      '<ul class="atouts-ligne">' + atouts.map(function (x) { return "<li>" + ic("valide", "fill") + h(x) + "</li>"; }).join("") + "</ul>" +
      "</div>" +
      '<div class="une-jeu" data-inclinaison>' + scenarioHTML(sc, "accueil", anime) + "</div>" +
      "</div></section>" +

      '<div class="defile-zone"><div class="defile" role="region" aria-label="' + esc(typo(t("bandeau_label"))) + '"><div class="defile-piste">' +
      '<ul class="defile-liste">' + listeDefile + '</ul><ul class="defile-liste" aria-hidden="true">' + listeDefile + "</ul>" +
      "</div></div></div>" +

      apercuVerifHTML() +

      '<section class="chiffre"><div class="conteneur chiffre-grille"' + revele(0) + ">" +
      '<p class="chiffre-nombre" data-compteur="' + esc(t("chiffre_nombre").replace(/\D/g, "")) + '">' + h(t("chiffre_nombre")) + "</p>" +
      '<p class="chiffre-texte">' + h(t("chiffre_texte")) + '<span class="chiffre-source">' + h(t("chiffre_source")) + "</span></p>" +
      "</div></section>" +

      '<section class="section"><div class="conteneur">' +
      '<div class="section-tete"' + revele(0) + "><h2>" + h(t("accueil_lecons_titre")) + "</h2><p>" + h(t("accueil_lecons_intro")) + "</p></div>" +
      tuilesThemes() + "</div></section>" +

      '<section class="section section-jeux"><div class="conteneur">' +
      '<div class="section-tete"' + revele(0) + "><h2>" + h(t("accueil_jeux_titre")) + "</h2><p>" + h(t("accueil_jeux_intro")) + "</p></div>" +
      cartesJeuxHTML(true) +
      '<p class="voir-tout"><a class="bouton bouton-second" href="#jeux">' + h(t("accueil_jeux_tout")) + ic("fleche") + "</a></p></div></section>" +

      '<section class="section section-blanche"><div class="conteneur">' +
      '<div class="progression-grille"' + revele(0) + ">" +
      "<div><h2>" + h(t("progression")) + "</h2>" +
      '<p class="progression-chiffre">' + h(tp("progression_texte", a.faits, { n: a.faits, total: a.total })) + "</p>" +
      '<p class="discret">' + h(suite ? t("progression_aide") : t("progression_bravo")) + "</p></div>" +
      '<div class="progression-action">' + bandeHTML("bande-grande") +
      (suite
        ? '<a class="bouton" href="' + suite.href + '">' + h(a.faits ? t("progression_reprendre") : t("module_commencer")) + " : " + h(suite.titre) + ic("fleche") + "</a>"
        : '<a class="bouton" href="#jeu">' + ic("rejouer") + h(t("progression_rejouer")) + "</a>") +
      "</div></div>" + badgesHTML() + blocAttestationHTML() + "</div></section>" +

      '<section class="section"><div class="conteneur">' +
      '<div class="section-tete"' + revele(0) + "><h2>" + h(t("pourquoi_titre")) + "</h2></div>" +
      '<ul class="atouts">' + C.pourquoi.map(function (p, i) {
        return "<li" + revele(i, 110) + '><span class="atout-icone">' + ic(icAtouts[i] || "bouclier", "duotone") + "</span><div><h3>" + h(p.titre) + "</h3><p>" + h(p.texte) + "</p></div></li>";
      }).join("") + "</ul>" +
      "</div></section>" +

      blocAnimerHTML() +

      '<section class="section" style="padding-top:0"><div class="conteneur"><div class="bloc-partage"' + revele(0) + ">" +
      '<span class="bloc-partage-icone">' + ic("envoyer", "duotone") + "</span>" +
      "<div><h2>" + h(t("partage_titre")) + "</h2><p>" + h(t("partage_texte").split("{site}").join(CFG.nomSite)) + "</p></div>" +
      partageHTML(t("partage_site")) + "</div></div></section>" +

      '<section class="section" style="padding-top:0"><div class="conteneur"><div class="aide"' + revele(0) + ">" +
      '<div class="aide-texte">' + ic("bouee", "duotone") + "<div><h2>" + h(t("accueil_aide_titre")) + "</h2><p>" + h(t("accueil_aide_texte")) + "</p></div></div>" +
      '<a class="bouton bouton-blanc" href="#signaler">' + h(t("accueil_aide_bouton")) + ic("fleche") + "</a>" +
      "</div></div></section>";
  };

  pages.lecons = function () {
    return pageTete('<h1 tabindex="-1">' + h(t("accueil_lecons_titre")) + "</h1><p>" + h(t("accueil_lecons_intro")) + "</p>") +
      '<div class="page"><div class="conteneur">' + tuilesThemes() + badgesHTML() + blocAttestationHTML() +
      '<div class="bloc-dico"' + revele(0) + '><span class="bloc-dico-icone">' + ic("mots", "duotone") + "</span><div><h3>" + h(t("lecons_dico_titre")) + "</h3><p>" + h(t("lecons_dico_texte")) + "</p></div>" +
      '<a class="bouton bouton-second" href="#dictionnaire">' + h(t("lecons_dico_bouton")) + ic("fleche") + "</a></div>" +
      "</div></div>";
  };

  pages.theme = function (id) {
    var r = trouverModule(id);
    if (!r) return pages.introuvable();
    var m = r.m, e = etatModule(m);
    var traduit = estTraduit("modules", r.i, "titre");
    var quiz = etat.prog.quiz[m.id];
    var tete = ariane("#lecons", t("accueil_lecons_titre")) +
      '<div class="page-tete-ligne"' + attrLangFr(traduit) + '><span class="pastille">' + ic(ICONE_THEME[m.id], "duotone") + "</span><div>" +
      '<h1 tabindex="-1">' + h(m.titre) + (traduit ? "" : etiquetteFr()) + "</h1><p>" + h(m.resume) + "</p></div></div>" +
      '<div class="page-tete-progres">' + miniBarre(e.etapes) + "<span>" + h(tp("module_etapes", e.faits, { n: e.faits, total: e.total })) + "</span></div>";

    return pageTete(tete, "", couleurs(m.id)) +
      '<div class="page"><div class="conteneur grille-theme" style="' + couleurs(m.id) + '">' +
      '<ol class="lecons">' + m.lecons.map(function (l, i) {
        var fait = leconFaite(m.id, i + 1);
        var lt = estTraduit("modules", r.i, "lecons", i, "titre");
        return '<li class="' + (fait ? "faite" : "") + '"' + revele(i, 90) + '><a href="#lecon-' + m.id + "-" + (i + 1) + '"' + attrLangFr(lt) + ">" +
          '<span class="lecon-num">' + (fait ? ic("coche") : (i + 1)) + "</span>" +
          '<span><span class="lecon-titre">' + h(l.titre) + (lt ? "" : etiquetteFr()) + "</span>" +
          '<span class="lecon-duree">' + h(fait ? t("module_termine") : t("lecon_duree", { n: minutes(l) })) + "</span></span>" +
          '<span class="chevron">' + ic("droite") + "</span></a></li>";
      }).join("") + "</ol>" +
      '<aside class="bloc-quiz"' + revele(3, 90) + '><span class="bloc-quiz-icone">' + ic("trophee", "duotone") + "</span><h2>" + h(t("module_quiz")) + "</h2>" +
      "<p>" + h(t("module_quiz_texte")) + "</p>" +
      (quiz ? '<p><span class="score-pastille">' + h(t("module_quiz_score", { score: quiz.score, total: quiz.total })) + "</span></p>" : "") +
      '<div class="actions"><a class="bouton" href="#quiz-' + m.id + '">' + h(t("module_quiz_bouton")) + ic("fleche") + "</a>" +
      '<a class="bouton bouton-second" href="#jeu-' + m.id + '">' + ic("jeu", "fill") + h(t("module_entrainer")) + "</a></div>" +
      "</aside></div></div>";
  };

  pages.lecon = function (id, n) {
    var r = trouverModule(id);
    if (!r) return pages.introuvable();
    var m = r.m, i = parseInt(n, 10) - 1, l = m.lecons[i];
    if (!l) return pages.introuvable();
    var traduit = estTraduit("modules", r.i, "lecons", i, "titre");
    var suivant = i + 1 < m.lecons.length;

    var html = pageTete(ariane("#theme-" + m.id, m.titre) + parcours(m, i + 1), "", couleurs(m.id)) +
      '<div class="page"><div class="conteneur"><article class="lecon" style="' + couleurs(m.id) + '"' + attrLangFr(traduit) + ">" +
      '<p class="surtitre">' + h(t("lecon_n", { n: i + 1, total: m.lecons.length })) + "</p>" +
      '<h1 tabindex="-1">' + h(l.titre) + (traduit ? "" : etiquetteFr()) + "</h1>" +
      ecouteHTML(r.i, i, l) +
      '<div class="lecon-corps">' + l.corps.map(function (p) { return "<p>" + h(p) + "</p>"; }).join("") + "</div>";
    if (l.etapes && l.etapes.length) {
      html += "<h2>" + h(t("lecon_etapes")) + '</h2><ol class="etapes">' +
        l.etapes.map(function (e, k) { return "<li" + revele(k, 80) + ">" + h(e) + "</li>"; }).join("") + "</ol>";
    }
    if (l.lien && l.lien.url) {
      html += '<p><a class="bouton bouton-second" href="' + esc(lienUrl(l.lien.url)) + '" target="_blank" rel="noopener">' + ic("recherche") + h(l.lien.texte) + "</a></p>";
    }
    html += '<aside class="retenir"' + revele(0) + "><h2>" + ic("ampoule", "duotone") + h(t("lecon_retenir")) + "</h2><ul>" +
      l.retenir.map(function (x) { return "<li>" + ic("valide", "fill") + "<span>" + h(x) + "</span></li>"; }).join("") + "</ul></aside>";
    html += '<div class="lecon-nav">' +
      (i > 0
        ? '<a class="lien-discret" href="#lecon-' + m.id + "-" + i + '">' + ic("gauche") + h(t("lecon_precedente")) + "</a>"
        : '<a class="lien-discret" href="#theme-' + m.id + '">' + ic("gauche") + h(t("lecon_retour")) + "</a>") +
      '<div class="actions">' +
      '<a class="bouton bouton-second" href="' + (suivant ? "#lecon-" + m.id + "-" + (i + 2) : "#quiz-" + m.id) + '">' + h(t(suivant ? "lecon_suivante" : "lecon_vers_quiz")) + "</a>" +
      '<button type="button" class="bouton" data-compris="' + m.id + "/" + (i + 1) + '">' + ic("valide", "fill") + h(t("lecon_compris")) + "</button>" +
      "</div></div></article></div></div>";
    return html;
  };

  function ecouteHTML(mi, li, l) {
    if (etat.langue !== "fr") {
      var audio = brut("modules", mi, "lecons", li, "audio");
      if (audio) {
        return '<div class="ecoute"><span class="ecoute-note">' + ic("volume", "fill") + h(t("lecon_audio")) + "</span>" +
          '<audio controls preload="none" src="' + esc(audio) + '"></audio></div>';
      }
      return '<div class="ecoute"><p class="ecoute-note">' + ic("volume", "fill") + h(t("lecon_audio_bientot")) + "</p></div>";
    }
    if (l.audio) return '<div class="ecoute"><audio controls preload="none" src="' + esc(l.audio) + '"></audio></div>';
    if ("speechSynthesis" in window) {
      return '<div class="ecoute"><button type="button" class="bouton bouton-second" data-ecouter aria-pressed="false">' +
        ic("volume", "fill") + "<span>" + h(t("lecon_ecouter")) + "</span></button></div>";
    }
    return "";
  }

  pages.quiz = function (id) {
    var r = trouverModule(id);
    if (!r) return pages.introuvable();
    if (!etat.quiz || etat.quiz.mid !== id) etat.quiz = { mid: id, i: 0, score: 0, repondu: false };
    return pageTete(ariane("#theme-" + r.m.id, r.m.titre) + parcours(r.m, "quiz"), "", couleurs(id)) +
      '<div class="page"><div class="conteneur"><div class="quiz" data-quiz style="' + couleurs(id) + '">' + quizCorps(r) + "</div></div></div>";
  };

  function quizCorps(r) {
    var m = r.m, q = etat.quiz, total = m.quiz.length;
    if (q.i >= total) {
      var bravo = q.score >= total - 1;
      return '<div class="resultat"><h1 tabindex="-1">' + h(t("module_quiz")) + "</h1>" +
        etoilesHTML(nbEtoiles(q.score, total)) +
        '<p class="score">' + q.score + " / " + total + "</p>" +
        "<p><strong>" + h(tp("quiz_fin", q.score, { score: q.score, total: total })) + "</strong><br>" + h(t(bravo ? "quiz_fin_bravo" : "quiz_fin_revoir")) + "</p>" +
        '<div class="actions"><button type="button" class="bouton bouton-second" data-recommencer>' + ic("rejouer") + h(t("quiz_recommencer")) + "</button>" +
        '<a class="bouton" href="#lecons">' + h(t("quiz_autre_theme")) + ic("fleche") + "</a></div>" +
        partageHTML(t("partage_quiz", { score: q.score, total: total, theme: m.titre })) + "</div>";
    }
    var item = m.quiz[q.i];
    var traduit = estTraduit("modules", r.i, "quiz", q.i, "question");
    return '<div class="barre-progres" aria-hidden="true"><span style="width:' + Math.round(q.i / total * 100) + '%"></span></div>' +
      '<p class="surtitre">' + h(t("quiz_question", { n: q.i + 1, total: total })) + "</p>" +
      "<div" + attrLangFr(traduit) + '><h1 class="quiz-question" tabindex="-1">' + h(item.question) + (traduit ? "" : etiquetteFr()) + "</h1>" +
      '<ul class="options">' + item.options.map(function (o, k) {
        return '<li style="--i:' + k + '"><button type="button" data-option="' + k + '"><span class="lettre" aria-hidden="true">' + "ABCDE".charAt(k) + "</span><span>" + h(o) + "</span></button></li>";
      }).join("") + "</ul></div>" +
      '<div data-quiz-retour aria-live="polite"></div>';
  }

  function nouvellePartie(filtre, niveau) {
    var liste = C.scenarios.filter(function (s) {
      return (!filtre || s.module === filtre) && (!niveau || niveau === "tout" || s.niveau === niveau);
    }).map(function (s) { return s.id; });
    etat.jeu = { filtre: filtre || null, niveau: niveau || null, ordre: melanger(liste).slice(0, TAILLE_PARTIE), i: 0, score: 0, serie: 0, termine: false };
  }

  pages.jeu = function (filtre) {
    if (filtre && !trouverModule(filtre)) return pages.introuvable();
    var f = filtre || null;
    var aChoisir = !f && (!etat.jeu || etat.jeu.filtre || etat.jeu.termine || etat.jeu.choix);
    if (f && (!etat.jeu || etat.jeu.filtre !== f || etat.jeu.termine)) nouvellePartie(f, null);
    if (aChoisir) {
      return pageTete('<h1 tabindex="-1">' + h(t("jeu_titre")) + "</h1><p>" + h(t("jeu_intro")) + "</p>") +
        '<div class="page"><div class="conteneur"><div class="choix-niveau"><h2>' + h(t("jeu_choisir")) + "</h2>" +
        '<p class="discret">' + h(t("jeu_choisir_texte")) + '</p><ul class="niveaux">' +
        [["facile", "pousse"], ["moyen", "jauge"], ["expert", "crane"], ["tout", "melange"]].map(function (n, k) {
          var nb = C.scenarios.filter(function (s) { return n[0] === "tout" || s.niveau === n[0]; }).length;
          return "<li" + revele(k, 80) + '><button type="button" class="niveau niveau-' + n[0] + '" data-niveau="' + n[0] + '">' +
            '<span class="niveau-icone">' + ic(n[1], "duotone") + "</span>" +
            '<span class="niveau-nom">' + h(t("niveau_" + n[0])) + "</span>" +
            '<span class="niveau-texte">' + h(t("niveau_" + n[0] + "_texte")) + "</span>" +
            '<span class="niveau-nb">' + h(t("niveau_messages", { n: Math.min(nb, TAILLE_PARTIE) })) + "</span></button></li>";
        }).join("") + "</ul></div></div></div>";
    }
    var tete = (f ? ariane("#theme-" + f, trouverModule(f).m.titre) : "") +
      '<h1 tabindex="-1">' + h(t("jeu_titre")) + "</h1><p>" + h(t("jeu_intro")) + "</p>";
    return pageTete(tete) + '<div class="page"><div class="conteneur"><div class="jeu" data-jeu>' + jeuCorps() + "</div></div></div>";
  };

  function jetonsJeu() {
    var j = etat.jeu;
    return '<span class="jeu-jetons">' +
      (j.serie >= 2 ? '<span class="jeton jeton-serie">' + ic("feu", "fill") + h(t("jeu_serie", { n: j.serie })) + "</span>" : "") +
      '<span class="jeton jeton-score" title="' + esc(typo(tp("jeu_score", j.score, { score: j.score }))) + '">' + ic("etoile", "fill") + "<span aria-hidden=\"true\">" + j.score + '</span><span class="visuellement-cache">' + h(tp("jeu_score", j.score, { score: j.score })) + "</span></span></span>";
  }

  function jeuCorps() {
    var j = etat.jeu;
    if (j.termine) {
      var ratio = j.score / j.ordre.length;
      var rangs = t("jeu_rangs"); if (!Array.isArray(rangs)) rangs = [];
      var rang = rangs[ratio >= 0.9 ? 3 : ratio >= 0.7 ? 2 : ratio >= 0.4 ? 1 : 0] || "";
      return '<div class="resultat"><p class="surtitre">' + h(t("jeu_fin_titre")) + "</p>" +
        etoilesHTML(nbEtoiles(j.score, j.ordre.length)) +
        '<p class="score">' + j.score + " / " + j.ordre.length + "</p>" +
        (rang ? '<p><span class="rang">' + h(rang) + "</span></p>" : "") +
        "<p>" + h(tp("jeu_fin_score", j.score, { score: j.score, total: j.ordre.length })) + "</p>" +
        '<div class="actions"><button type="button" class="bouton" data-rejouer>' + ic("rejouer") + h(t("jeu_rejouer")) + "</button>" +
        (j.filtre ? '<a class="bouton bouton-second" href="#theme-' + j.filtre + '">' + h(trouverModule(j.filtre).m.titre) + "</a>"
                  : '<button type="button" class="bouton bouton-second" data-changer-niveau>' + h(t("jeu_changer_niveau")) + "</button>") + "</div>" +
        partageHTML(t("partage_jeu", { score: j.score, total: j.ordre.length, rang: rang })) + "</div>";
    }
    var sc = trouverScenario(j.ordre[j.i]).s;
    return '<div class="jeu-tete"><span class="compteur" tabindex="-1">' + h(t("jeu_compteur", { n: j.i + 1, total: j.ordre.length })) + "</span>" + niveauPuce(sc.niveau) +
      '<span data-jetons>' + jetonsJeu() + "</span></div>" +
      '<div class="barre-progres" aria-hidden="true"><span style="width:' + Math.round(j.i / j.ordre.length * 100) + '%"></span></div>' +
      scenarioHTML(sc, "jeu", false);
  }

  function melanger(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var k = Math.floor(Math.random() * (i + 1));
      var x = a[i]; a[i] = a[k]; a[k] = x;
    }
    return a;
  }

  pages.dictionnaire = function () {
    var eeDico = BRUT.ee && BRUT.ee.dictionnaire;
    var html = pageTete('<h1 tabindex="-1">' + h(t("dico_titre")) + "</h1><p>" + h(t("dico_intro")) + "</p>") +
      '<div class="page"><div class="conteneur">' +
      '<div class="recherche"><label for="dico-q">' + h(t("dico_chercher")) + "</label>" +
      '<input id="dico-q" type="search" autocomplete="off" data-dico-q>' + ic("recherche") + "</div>" +
      '<dl class="dico" data-dico>';
    C.dictionnaire.forEach(function (e, i) {
      var fr = BRUT.fr.dictionnaire[i];
      var termeEe = eeDico && eeDico[i] && eeDico[i].terme && eeDico[i].terme.trim();
      var cherche = (fr.terme + " " + fr.definition + " " + (termeEe || "")).toLowerCase();
      html += '<div class="dico-entree" data-cherche="' + esc(sansAccents(cherche)) + '"' + revele(i % 8, 50) + ">";
      if (etat.langue === "fr") {
        html += "<dt>" + h(fr.terme) + "</dt><dd>" + h(fr.definition) + "</dd>" +
          '<dd class="dico-ewe">' + ic("langue") + "<span>" + h(t("dico_ewe")) + " : " +
          (termeEe ? '<span lang="ee">' + h(termeEe) + "</span>" : "<em>" + h(t("dico_ewe_vide")) + "</em>") + "</span></dd>";
      } else {
        var defTraduite = estTraduit("dictionnaire", i, "definition");
        html += "<dt" + attrLangFr(!!termeEe) + ">" + h(termeEe || fr.terme) + (termeEe ? "" : etiquetteFr()) + "</dt>" +
          "<dd" + attrLangFr(defTraduite) + ">" + h(e.definition) + "</dd>" +
          '<dd class="dico-ewe" lang="fr">' + ic("langue") + "<span>" + h(t("dico_francais")) + " : " + h(fr.terme) + "</span></dd>";
      }
      html += "</div>";
    });
    html += '</dl><p class="discret" data-dico-vide hidden>' + h(t("dico_aucun")) + "</p></div></div>";
    return html;
  };

  function sansAccents(s) { return s.normalize ? s.normalize("NFD").replace(/[̀-ͯ]/g, "") : s; }

  pages.signaler = function () {
    var s = C.signaler, cert = CFG.cert;
    var tel = cert.telephone.replace(/\s/g, "");
    return pageTete('<h1 tabindex="-1" style="max-width:var(--lecture)">' + h(s.titre) + "</h1><p>" + h(s.intro) + "</p>", "alerte") +
      '<div class="page"><div class="conteneur"><a class="lien-assistant" href="#assistant"><span class="lien-assistant-icone">' + ic("discussion", "duotone") + "</span><span><strong>" + h(O().verifier.situation_titre) + "</strong> " + h(O().verifier.situation_texte) + "</span>" + ic("fleche") + "</a></div>" +
      '<div class="conteneur grille-aide">' +
      '<ol class="etapes-aide">' + s.etapes.map(function (e, i) {
        return "<li" + revele(i, 90) + "><h2>" + h(e.titre) + "</h2><p>" + h(e.texte) + "</p></li>";
      }).join("") + "</ol>" +
      '<aside class="contact-cert"' + revele(2) + "><h2>" + h(s.cert_titre) + "</h2>" +
      '<a class="bouton bouton-jaune" href="tel:' + tel + '">' + ic("telephone", "fill") + h(s.cert_appeler) + "</a>" +
      "<dl>" +
      "<div><dt>" + h(s.cert_tel_label) + "</dt><dd>" + esc(cert.telephone).replace(/ /g, " ") + "</dd></div>" +
      "<div><dt>" + h(s.cert_mail_label) + '</dt><dd><a href="mailto:' + esc(cert.email) + '">' + esc(cert.email) + "</a></dd></div>" +
      "<div><dt>" + h(s.cert_site_label) + '</dt><dd><a href="' + esc(cert.site) + '" target="_blank" rel="noopener">' + esc(cert.site.replace(/^https?:\/\//, "").replace(/\/$/, "")) + "</a></dd></div>" +
      '</dl><p class="note">' + h(s.cert_verifie) + "</p></aside>" +
      "</div></div>";
  };

  pages.apropos = function () {
    var a = C.apropos;
    return pageTete('<h1 tabindex="-1">' + h(a.titre) + "</h1>") +
      '<div class="page"><div class="conteneur"><div class="apropos">' +
      a.paragraphes.map(function (p, i) { return "<p" + revele(i, 80) + ">" + h(p.split("{site}").join(CFG.nomSite)) + "</p>"; }).join("") +
      "<h2>" + h(a.aider_titre) + "</h2>" +
      '<ul class="liste-coches">' + a.aider.map(function (x) { return "<li>" + ic("valide", "fill") + "<span>" + h(x) + "</span></li>"; }).join("") + "</ul>" +
      "<p>" + h(a.contact) + ' <a href="' + esc(CFG.depot) + '/issues" target="_blank" rel="noopener">' + h(t("pied_contact")) + "</a></p>" +
      "</div></div></div>";
  };

  pages.mentions = function () {
    var mt = C.mentions;
    var remplir = function (x) { return x.split("{site}").join(CFG.nomSite).split("{auteur}").join(CFG.auteur || ""); };
    return pageTete('<h1 tabindex="-1">' + h(mt.titre) + "</h1>") +
      '<div class="page"><div class="conteneur"><div class="apropos mentions">' +
      mt.sections.map(function (sec, i) {
        return "<section" + revele(i, 60) + "><h2>" + h(sec.titre) + "</h2>" +
          sec.paragraphes.map(function (p) { return "<p>" + h(remplir(p)) + "</p>"; }).join("") + "</section>";
      }).join("") +
      "<p>" + h(mt.contact) + ' <a href="' + esc(CFG.depot) + '/issues" target="_blank" rel="noopener">' + h(t("pied_contact")) + "</a></p>" +
      "</div></div></div>";
  };

  pages.introuvable = function () {
    return pageTete('<h1 tabindex="-1">' + h(t("page_introuvable")) + "</h1>") +
      '<div class="page"><div class="conteneur"><a class="bouton" href="#accueil">' + ic("maison", "fill") + h(t("retour_accueil")) + "</a></div></div>";
  };

  /* ================================================================== */
  /* Salle de jeux                                                      */
  /* ================================================================== */
  var JEUX = [
    { id: "arnaque", ancre: "#jeu", icone: "jeu", couleur: "#D21034" },
    { id: "pieges", ancre: "#pieges", icone: "cible2", couleur: "#E2621B" },
    { id: "liens", ancre: "#liens", icone: "navigateur", couleur: "#006A4E" },
    { id: "motdepasse", ancre: "#mot-de-passe", icone: "cle", couleur: "#E0A800" },
    { id: "histoire", ancre: "#histoire", icone: "portemonnaie", couleur: "#14946A" },
    { id: "memo", ancre: "#memo", icone: "memo", couleur: "#7B3F8C" }
  ];
  function J() { return C.jeux; }
  function remplir(s, vars) {
    s = String(s == null ? "" : s);
    Object.keys(vars || {}).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  }
  function infoJeu(id) { return JEUX.filter(function (x) { return x.id === id; })[0]; }
  function carteJeu(id) { return J().cartes.filter(function (c) { return c.id === id; })[0] || {}; }
  function styleJeu(id) { var c = infoJeu(id).couleur; return "--c:" + c + ";--ct:" + c + ";--sc:" + texteSur(c); }

  /* Records (meilleur score de chaque jeu, gardés dans le navigateur) */
  function records() { etat.prog.jeux = etat.prog.jeux || {}; return etat.prog.jeux; }
  function enregistrerRecord(id, score, total, moinsEstMieux) {
    var r = records(), ancien = r[id];
    var mieux = !ancien || (moinsEstMieux ? score < ancien.score : score / total > ancien.score / ancien.total);
    if (mieux) { r[id] = { score: score, total: total }; sauverProg(); }
    return mieux && !!ancien;
  }
  function texteRecord(id) {
    var r = records()[id];
    if (!r) return "";
    if (id === "memo") return remplir(J().memo.coups, { n: r.score });
    return r.score + "\u00a0/\u00a0" + r.total;
  }

  function cartesJeuxHTML(compact) {
    return '<ul class="salle' + (compact ? " salle-compacte" : "") + '">' + JEUX.map(function (jeu, k) {
      var c = carteJeu(jeu.id), rec = texteRecord(jeu.id);
      return "<li" + revele(k, 70).replace('style="', 'style="' + styleJeu(jeu.id) + ";") + '><a class="carte-jeu" href="' + jeu.ancre + '">' +
        '<span class="carte-jeu-icone">' + ic(jeu.icone, "duotone") + "</span>" +
        '<span class="carte-jeu-titre">' + h(c.titre) + "</span>" +
        (compact ? "" : '<span class="carte-jeu-texte">' + h(c.texte) + "</span>") +
        '<span class="carte-jeu-pied"><span class="carte-jeu-duree">' + ic("chrono") + h(c.duree) + "</span>" +
        (rec ? '<span class="carte-jeu-record">' + ic("trophee", "fill") + h(rec) + "</span>"
             : (jeu.id !== "arnaque" ? '<span class="carte-jeu-nouveau">' + h(J().nouveau) + "</span>" : "")) +
        "</span></a></li>";
    }).join("") + "</ul>";
  }

  pages.jeux = function () {
    return pageTete('<h1 tabindex="-1">' + h(J().salle_titre) + "</h1><p>" + h(J().salle_intro) + "</p>") +
      '<div class="page"><div class="conteneur">' + cartesJeuxHTML(false) + "</div></div>";
  };

  function teteJeu(id, intro) {
    var c = carteJeu(id);
    return pageTete(ariane("#jeux", J().salle_titre) +
      '<div class="page-tete-ligne"><span class="pastille">' + ic(infoJeu(id).icone, "duotone") + "</span><div>" +
      '<h1 tabindex="-1">' + h(c.titre) + "</h1><p>" + h(intro) + "</p></div></div>", "", styleJeu(id));
  }

  function resultatJeu(id, o) {
    var nouveau = o.record;
    return '<div class="resultat" style="' + styleJeu(id) + '"><p class="surtitre">' + h(J().termine) + "</p>" +
      etoilesHTML(o.etoiles) +
      '<p class="score">' + h(o.score) + "</p>" +
      (o.titre ? '<p><span class="rang">' + h(o.titre) + "</span></p>" : "") +
      (nouveau ? '<p class="nouveau-record">' + ic("trophee", "fill") + h(J().nouveau_record) + "</p>" : "") +
      "<p>" + h(o.texte) + "</p>" + (o.lecon ? '<p class="lecon-fin">' + ic("ampoule", "fill") + "<span>" + h(o.lecon) + "</span></p>" : "") +
      '<div class="actions"><button type="button" class="bouton" data-rejouer-jeu="' + id + '">' + ic("rejouer") + h(J().rejouer) + "</button>" +
      '<a class="bouton bouton-second" href="#jeux">' + h(J().retour_salle) + "</a></div>" +
      partageHTML(remplir(J().partage, { score: o.partage || o.score.replace(/\u00a0/g, ""), jeu: carteJeu(id).titre })) + "</div>";
  }

  function finJeuFete(etoiles) {
    if (etoiles >= 2) setTimeout(function () { confettis(window.innerWidth / 2, window.innerHeight * .3, 150); }, 350);
  }

  /* ------------------------------------------------------------------ */
  /* Jeu : Chasse aux pièges                                            */
  /* ------------------------------------------------------------------ */
  function nbPieges(m) { return m.morceaux.filter(function (x) { return x.piege; }).length + (m.piege_expediteur ? 1 : 0); }

  pages.pieges = function () {
    var P = J().pieges;
    if (!etat.pieges) {
      var total = P.messages.reduce(function (a, m) { return a + nbPieges(m); }, 0);
      etat.pieges = { ordre: melanger(P.messages.map(function (m, i) { return i; })), i: 0, vies: 3, trouves: {}, score: 0, total: total, msgFini: false, fini: false };
    }
    return teteJeu("pieges", P.intro) + '<div class="page"><div class="conteneur"><div class="jeu-pieges" data-pieges style="' + styleJeu("pieges") + '">' + piegesCorps() + "</div></div></div>";
  };

  function coeursHTML(vies) {
    var html = '<span class="coeurs" role="img" aria-label="' + esc(typo(remplir(J().pieges.vies, { n: vies }))) + '">';
    for (var k = 0; k < 3; k++) html += '<span class="coeur' + (k < vies ? "" : " perdu") + '">' + ic("coeur", k < vies ? "fill" : "bold") + "</span>";
    return html + "</span>";
  }

  function piegesCorps() {
    var P = J().pieges, s = etat.pieges;
    if (s.fini) {
      var et = nbEtoiles(s.score, s.total);
      return resultatJeu("pieges", { etoiles: et, score: s.score + "\u00a0/\u00a0" + s.total, texte: remplir(P.fin, { score: s.score, total: s.total }), record: s.record });
    }
    var m = P.messages[s.ordre[s.i]];
    var trouves = Object.keys(s.trouves).length;
    return '<p class="consigne-jeu">' + ic("cible2", "fill") + "<span>" + h(P.consigne) + "</span></p>" +
      '<div class="jeu-tete"><span class="compteur" tabindex="-1">' + h(remplir(P.compteur, { n: s.i + 1, total: s.ordre.length })) + "</span>" +
      '<span data-coeurs>' + coeursHTML(s.vies) + "</span></div>" +
      '<div class="barre-progres" aria-hidden="true"><span data-barre-pieges style="width:' + Math.round(trouves / nbPieges(m) * 100) + '%"></span></div>' +
      '<p class="pieges-trouves" data-pieges-trouves aria-live="polite">' + h(remplir(P.trouves, { n: trouves, total: nbPieges(m) })) + "</p>" +
      '<div class="scenario scenario-pieges"><div class="telephone" data-canal="' + m.canal + '"><div class="telephone-ecran">' +
      '<div class="statut" aria-hidden="true"><span>' + heure() + '</span><span class="statut-icones">' + ic("signal", "fill") + ic("wifi") + ic("batterie", "fill") + "</span></div>" +
      '<div class="conv-entete"><span class="avatar">' + ic(ICONE_CANAL[m.canal] || "sms", "fill") + "</span>" +
      '<span><button type="button" class="segment segment-expediteur" data-segment="-1">' + h(m.expediteur) + '</button><span class="conv-canal">' + h(t("canal_" + m.canal)) + "</span></span></div>" +
      '<div class="conv-fil"><p class="bulle">' + m.morceaux.map(function (x, k) {
        return '<button type="button" class="segment" data-segment="' + k + '">' + h(x.texte) + "</button>";
      }).join(" ") + "</p></div></div></div></div>" +
      '<div class="pieges-retour" data-explication aria-live="polite"></div>' +
      '<div data-pieges-fin></div>';
  }

  function toucherSegment(btn) {
    var P = J().pieges, s = etat.pieges;
    if (!s || s.msgFini || btn.classList.contains("trouve")) return;
    var m = P.messages[s.ordre[s.i]], k = parseInt(btn.getAttribute("data-segment"), 10);
    var piege = k === -1 ? m.piege_expediteur : m.morceaux[k].piege;
    var zone = main.querySelector("[data-explication]");
    if (piege) {
      s.trouves[k] = true; s.score++;
      btn.classList.add("trouve");
      btn.setAttribute("aria-pressed", "true");
      zone.innerHTML = '<div class="explication bonne">' + ic("valide", "fill") + "<p><strong>" + h(P.bien) + "</strong> " + h(piege) + "</p></div>";
      confettisDepuis(btn, 28);
    } else {
      s.vies--;
      secouer(btn);
      btn.classList.add("rate");
      setTimeout(function () { btn.classList.remove("rate"); }, 700);
      zone.innerHTML = '<div class="explication mauvaise">' + ic("croix") + "<p>" + h(P.pas_suspect) + "</p></div>";
      main.querySelector("[data-coeurs]").innerHTML = coeursHTML(s.vies);
      secouer(main.querySelector(".coeurs"));
    }
    var n = Object.keys(s.trouves).length, total = nbPieges(m);
    main.querySelector("[data-pieges-trouves]").textContent = typo(remplir(P.trouves, { n: n, total: total }));
    main.querySelector("[data-barre-pieges]").style.width = Math.round(n / total * 100) + "%";
    if (n === total) finMessagePieges(true);
    else if (s.vies <= 0) finMessagePieges(false);
  }

  function finMessagePieges(gagne) {
    var P = J().pieges, s = etat.pieges, m = P.messages[s.ordre[s.i]];
    s.msgFini = true;
    var manques = [];
    if (!gagne) {
      if (m.piege_expediteur && !s.trouves[-1]) { manques.push(m.piege_expediteur); main.querySelector('[data-segment="-1"]').classList.add("manque"); }
      m.morceaux.forEach(function (x, k) {
        if (x.piege && !s.trouves[k]) { manques.push(x.piege); main.querySelector('[data-segment="' + k + '"]').classList.add("manque"); }
      });
    } else {
      confettis(window.innerWidth / 2, window.innerHeight * .4, 70);
    }
    main.querySelectorAll(".segment").forEach(function (b) { b.disabled = true; });
    var derniere = s.i + 1 >= s.ordre.length;
    var zone = main.querySelector("[data-pieges-fin]");
    zone.innerHTML = (gagne
      ? '<div class="explication bonne grande">' + ic("sceau", "fill") + "<p><strong>" + h(P.tous) + "</strong></p></div>"
      : '<div class="explication mauvaise grande">' + ic("alerte", "fill") + "<div><p><strong>" + h(P.perdu) + "</strong></p><ul>" +
        manques.map(function (x) { return "<li>" + h(x) + "</li>"; }).join("") + "</ul></div></div>") +
      '<div class="actions"><button type="button" class="bouton" data-pieges-suivant>' + h(derniere ? t("quiz_resultat") : P.suivant) + ic("fleche") + "</button></div>";
    var b = zone.querySelector("[data-pieges-suivant]");
    b.focus({ preventScroll: true });
    setTimeout(function () { faireDefiler(b); }, 150);
  }

  function piegesSuivant() {
    var s = etat.pieges;
    s.i++; s.vies = 3; s.trouves = {}; s.msgFini = false;
    if (s.i >= s.ordre.length) {
      s.fini = true;
      s.record = enregistrerRecord("pieges", s.score, s.total);
      finJeuFete(nbEtoiles(s.score, s.total));
    }
    main.querySelector("[data-pieges]").innerHTML = piegesCorps();
    window.scrollTo(0, 0);
    var c = main.querySelector(".compteur, .resultat .surtitre");
    if (c) { c.setAttribute("tabindex", "-1"); c.focus({ preventScroll: true }); }
  }

  /* ------------------------------------------------------------------ */
  /* Jeu : Lien piégé ?                                                 */
  /* ------------------------------------------------------------------ */
  pages.liens = function () {
    var L = J().liens;
    if (!etat.liens) etat.liens = { ordre: melanger(L.items.map(function (x, i) { return i; })).slice(0, TAILLE_PARTIE), i: 0, score: 0, reponse: null, fini: false };
    return teteJeu("liens", L.intro) +
      '<div class="page"><div class="conteneur"><div class="jeu-liens" data-liens style="' + styleJeu("liens") + '">' + liensCorps() + "</div></div></div>";
  };

  function urlSurlignee(item) {
    var url = item.url, m = /^(https?:\/\/)([^/]+)(.*)$/.exec(url);
    if (!m) return esc(url);
    var hote = m[2], idx = hote.lastIndexOf(item.domaine);
    if (idx < 0) return esc(url);
    return '<span class="url-gris">' + esc(m[1]) + "</span>" + esc(hote.slice(0, idx)) + '<mark class="domaine">' + esc(item.domaine) + "</mark>" + '<span class="url-gris">' + esc(m[3]) + "</span>";
  }

  function liensCorps() {
    var L = J().liens, s = etat.liens;
    if (s.fini) {
      var et = nbEtoiles(s.score, s.ordre.length);
      return resultatJeu("liens", { etoiles: et, score: s.score + "\u00a0/\u00a0" + s.ordre.length, texte: remplir(L.fin, { score: s.score, total: s.ordre.length }), lecon: L.regle, record: s.record });
    }
    var item = L.items[s.ordre[s.i]], rep = s.reponse;
    var https = /^https:/.test(item.url);
    var html = '<aside class="regle"><span class="regle-icone">' + ic("ampoule", "duotone") + "</span><div><strong>" + h(L.regle_titre) + "</strong><p>" + h(L.regle) + "</p></div></aside>" +
      '<div class="jeu-tete"><span class="compteur" tabindex="-1">' + h(remplir(L.compteur, { n: s.i + 1, total: s.ordre.length })) + "</span>" +
      '<span class="jeton jeton-score">' + ic("etoile", "fill") + s.score + "</span></div>" +
      '<div class="barre-progres" aria-hidden="true"><span style="width:' + Math.round(s.i / s.ordre.length * 100) + '%"></span></div>' +
      '<div class="carte-lien' + (rep ? (rep.juste ? " juste" : " rate") : "") + '" data-carte-lien>' +
      '<div class="navigateur-barre"><span class="navigateur-points" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '<span class="navigateur-url">' + ic(https ? "cadenas" : "ouvert", "fill") + '<span class="url-texte" lang="en">' + (rep ? urlSurlignee(item) : esc(item.url)) + "</span></span></div>" +
      '<div class="navigateur-page" aria-hidden="true"><span></span><span></span><span></span><span class="court"></span></div>' +
      '<span class="tampon tampon-piege" aria-hidden="true">' + h(L.bouton_piege) + '</span><span class="tampon tampon-vrai" aria-hidden="true">' + h(L.bouton_vrai) + "</span>" +
      "</div>";
    if (!rep) {
      html += '<div class="choix-lien"><button type="button" class="bouton-lien-choix piege" data-lien="piege">' + ic("alerte", "fill") + "<span>" + h(L.bouton_piege) + "</span></button>" +
        '<button type="button" class="bouton-lien-choix vrai" data-lien="vrai">' + ic("valide", "fill") + "<span>" + h(L.bouton_vrai) + "</span></button></div>" +
        '<p class="astuce">' + ic("glisser") + "<span>" + h(L.astuce) + "</span></p>";
    } else {
      html += '<div class="retour ' + (item.vrai ? "normal" : "arnaque") + (rep.juste ? " juste" : " rate") + '" tabindex="-1">' +
        '<div class="retour-tete">' + ic(rep.juste ? "valide" : "alerte", "fill") + '<p class="retour-titre">' + h(rep.juste ? L.bien : L.rate) + "</p></div>" +
        '<p class="retour-verdict">' + h(item.vrai ? L.etait_vrai : L.etait_piege) + "</p>" +
        '<p class="vrai-nom">' + h(remplir(L.vrai_nom, { domaine: "" })) + '<strong lang="en">' + esc(item.domaine) + "</strong></p>" +
        "<p>" + h(item.explication) + "</p>" +
        '<div class="actions"><button type="button" class="bouton" data-lien-suivant>' + h(s.i + 1 >= s.ordre.length ? t("quiz_resultat") : L.suivant) + ic("fleche") + "</button></div></div>";
    }
    return html;
  }

  function repondreLien(choixVrai, sortie) {
    var L = J().liens, s = etat.liens;
    if (!s || s.reponse || s.fini) return;
    var item = L.items[s.ordre[s.i]];
    var juste = choixVrai === item.vrai;
    if (juste) s.score++;
    s.reponse = { juste: juste };
    var carte = main.querySelector("[data-carte-lien]");
    var suite = function () {
      main.querySelector("[data-liens]").innerHTML = liensCorps();
      var c = main.querySelector("[data-carte-lien]");
      if (juste) confettisDepuis(c, 50); else secouer(c);
      var r = main.querySelector(".retour");
      if (r) { r.focus({ preventScroll: true }); setTimeout(function () { faireDefiler(r); }, 150); }
    };
    if (sortie && carte && !CALME) {
      carte.classList.add(choixVrai ? "sort-droite" : "sort-gauche");
      setTimeout(suite, 260);
    } else suite();
  }

  function lienSuivant() {
    var s = etat.liens;
    s.i++; s.reponse = null;
    if (s.i >= s.ordre.length) {
      s.fini = true;
      s.record = enregistrerRecord("liens", s.score, s.ordre.length);
      finJeuFete(nbEtoiles(s.score, s.ordre.length));
    }
    main.querySelector("[data-liens]").innerHTML = liensCorps();
    window.scrollTo(0, 0);
    var c = main.querySelector(".compteur, .resultat .surtitre");
    if (c) { c.setAttribute("tabindex", "-1"); c.focus({ preventScroll: true }); }
  }

  /* Glisser la carte du lien (doigt ou souris) */
  var glisse = null;
  document.addEventListener("pointerdown", function (ev) {
    var carte = ev.target.closest && ev.target.closest("[data-carte-lien]");
    if (!carte || !etat.liens || etat.liens.reponse) return;
    glisse = { carte: carte, x0: ev.clientX, dx: 0, id: ev.pointerId };
    try { carte.setPointerCapture(ev.pointerId); } catch (e) { /* rien */ }
    carte.classList.add("glisse");
  });
  document.addEventListener("pointermove", function (ev) {
    if (!glisse || ev.pointerId !== glisse.id) return;
    glisse.dx = ev.clientX - glisse.x0;
    glisse.carte.style.transform = "translateX(" + glisse.dx + "px) rotate(" + (glisse.dx / 18).toFixed(1) + "deg)";
    glisse.carte.style.setProperty("--penche", Math.max(-1, Math.min(1, glisse.dx / 110)).toFixed(2));
    glisse.carte.classList.toggle("vers-gauche", glisse.dx < -30);
    glisse.carte.classList.toggle("vers-droite", glisse.dx > 30);
  });
  function finGlisse(ev) {
    if (!glisse || ev.pointerId !== glisse.id) return;
    var g = glisse; glisse = null;
    g.carte.classList.remove("glisse");
    if (Math.abs(g.dx) > 90) { repondreLien(g.dx > 0, true); return; }
    g.carte.style.transform = "";
    g.carte.classList.remove("vers-gauche", "vers-droite");
  }
  document.addEventListener("pointerup", finGlisse);
  document.addEventListener("pointercancel", finGlisse);

  /* ------------------------------------------------------------------ */
  /* Jeu : Casse-mot de passe                                           */
  /* ------------------------------------------------------------------ */
  var MDP_COURANTS = ["123456", "1234567", "12345678", "123456789", "1234567890", "12345", "password", "motdepasse", "azerty", "azertyuiop", "qwerty", "000000", "111111", "123123", "iloveyou", "jetaime", "soleil", "bonjour", "admin", "abc123", "football", "princesse", "amour", "dieu", "jesus", "jesuschrist", "togo", "togo228", "lome", "lome228", "bienvenue", "chocolat", "doudou", "loulou", "sunshine", "monkey", "dragon"];
  var MOTS_COURANTS = ["password", "motdepasse", "passe", "azerty", "qwerty", "soleil", "bonjour", "amour", "jetaime", "iloveyou", "dieu", "jesus", "togo", "lome", "maman", "papa", "bebe", "princesse", "football", "admin", "kodjo", "koffi", "kofi", "kossi", "komla", "kokou", "yao", "kwami", "kouami", "kodzo", "ama", "afi", "afiwa", "akossiwa", "adjoa", "abla", "akouvi", "ayele", "edem", "sena", "mawuli", "mawuena", "elom", "yawa", "essi", "dela", "delali", "yaovi", "mensah", "kafui", "dzifa", "enyonam", "mawunyo", "nana", "grace", "joseph", "marie", "emmanuel"];
  var SUITES = ["0123456789", "1234567890", "abcdefghijklmnopqrstuvwxyz", "azertyuiop", "qwertyuiop", "qsdfghjklm", "wxcvbn", "9876543210"];
  function sansLeet(s) { return s.replace(/@/g, "a").replace(/0/g, "o").replace(/[1!|]/g, "i").replace(/3/g, "e").replace(/\$/g, "s").replace(/5/g, "s").replace(/7/g, "t"); }

  /* Estimation simple et locale de la solidité : rien ne quitte le téléphone */
  function estimerMdp(m) {
    var r = { bits: 0, courant: false, suite: false, longueur: m.length >= 12,
      mots: /[a-zA-ZÀ-ÿ]{3,}[\s\-_.!@#+*]+[a-zA-ZÀ-ÿ0-9]{2,}/.test(m), variete: /[\d\W_]/.test(m) };
    if (!m) return r;
    var bas = m.toLowerCase(), net = sansLeet(bas), lettres = net.replace(/[^a-z]/g, "");
    var pool = 0;
    if (/[a-z]/.test(m)) pool += 26;
    if (/[A-Z]/.test(m)) pool += 26;
    if (/\d/.test(m)) pool += 10;
    if (/[^a-zA-Z\d]/.test(m)) pool += 33;
    var parCar = Math.log2(Math.max(pool, 10));
    if (MDP_COURANTS.indexOf(bas) !== -1 || MDP_COURANTS.indexOf(net) !== -1 || (MDP_COURANTS.indexOf(lettres) !== -1 && lettres.length >= m.length - 3)) {
      r.courant = true; r.bits = 6; return r;
    }
    var bits = m.length * parCar;
    MOTS_COURANTS.forEach(function (w) {
      if (w.length >= 3 && (bas.indexOf(w) !== -1 || net.indexOf(w) !== -1)) { bits -= Math.max(0, w.length * parCar - 11); r.courant = true; }
    });
    var annees = m.match(/(19|20)\d\d/g);
    if (annees) { bits -= annees.length * Math.max(0, 4 * parCar - 7); r.courant = true; }
    SUITES.forEach(function (s) {
      for (var i = 0; i + 4 <= s.length; i++) {
        if (bas.indexOf(s.substr(i, 4)) !== -1) { bits -= 4 * parCar - 3; r.suite = true; break; }
      }
    });
    var rep = m.match(/(.)\1{2,}/g);
    if (rep) rep.forEach(function (x) { bits -= (x.length - 1) * parCar; r.suite = true; });
    r.bits = Math.max(bits, 4);
    return r;
  }
  function secondesMdp(bits) { return Math.pow(2, bits) / 2 / 1e10; }   // 10 milliards d'essais par seconde
  function niveauMdp(s) { return s < 3600 ? 0 : s < 2592000 ? 1 : s < 3.15576e9 ? 2 : s < 3.15576e13 ? 3 : 4; }
  function dureeTexte(s) {
    var U = J().motdepasse.unites, an = 31557600;
    var f = function (cle, n) { n = Math.round(n); return remplir(U[cle][n <= 1 ? 0 : 1], { n: milliers(n) }); };
    if (s < 1) return U.instant;
    if (s < 60) return f("seconde", s);
    if (s < 3600) return f("minute", s / 60);
    if (s < 86400) return f("heure", s / 3600);
    if (s < 2592000) return f("jour", s / 86400);
    if (s < an) return f("mois", s / 2592000);
    if (s < 100 * an) return f("an", s / an);
    if (s < 1000 * an) return U.siecles;
    if (s < 1e6 * an) return U.milliers;
    if (s < 1e9 * an) return U.millions;
    return U.milliards;
  }

  pages.motdepasse = function () {
    var M = J().motdepasse;
    if (!etat.duel) etat.duel = { ordre: melanger(M.duels.map(function (d, i) { return i; })), sens: M.duels.map(function () { return Math.random() < .5; }), i: 0, score: 0, reponse: null, fini: false };
    return teteJeu("motdepasse", M.intro) + '<div class="page"><div class="conteneur jeu-mdp" style="' + styleJeu("motdepasse") + '">' +
      '<section class="testeur"' + revele(0) + "><h2>" + ic("cle", "duotone") + h(M.testeur_titre) + "</h2>" +
      '<label for="mdp-test">' + h(M.testeur_label) + "</label>" +
      '<div class="champ-mdp"><input id="mdp-test" type="password" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" data-mdp>' +
      '<button type="button" class="bouton-oeil" data-mdp-voir aria-pressed="false">' + ic("oeil") + "<span>" + h(M.afficher) + "</span></button></div>" +
      '<p class="prive">' + ic("bouclier", "fill") + "<span>" + h(M.prive) + "</span></p>" +
      '<div class="jauge niveau-vide" data-jauge aria-live="polite">' +
      '<div class="jauge-barre" aria-hidden="true"><span></span></div>' +
      '<p class="jauge-temps"><span>' + h(M.temps) + '</span> <strong data-jauge-temps>…</strong></p>' +
      '<p class="jauge-niveau" data-jauge-niveau>' + h(M.vide) + "</p></div>" +
      '<ul class="criteres" data-criteres>' + M.criteres.map(function (c, k) {
        return '<li data-critere="' + k + '">' + ic("croix") + "<span>" + h(c) + "</span></li>";
      }).join("") + "</ul></section>" +
      '<section class="duel" data-duel' + revele(1) + ">" + duelCorps() + "</section>" +
      "</div></div>";
  };

  function majJauge(valeur) {
    var M = J().motdepasse, jauge = main.querySelector("[data-jauge]");
    if (!jauge) return;
    var r = estimerMdp(valeur);
    var crit = [r.longueur, r.mots, r.variete, valeur && !r.courant, valeur && !r.suite];
    main.querySelectorAll("[data-critere]").forEach(function (li, k) {
      var ok = !!crit[k];
      if (li.classList.contains("ok") !== ok) {
        li.classList.toggle("ok", ok);
        li.querySelector("svg").outerHTML = ic(ok ? "valide" : "croix", ok ? "fill" : "bold");
      }
    });
    if (!valeur) {
      jauge.className = "jauge niveau-vide";
      main.querySelector("[data-jauge-temps]").textContent = "…";
      main.querySelector("[data-jauge-niveau]").textContent = typo(M.vide);
      return;
    }
    var s = secondesMdp(r.bits), n = niveauMdp(s);
    jauge.className = "jauge niveau-" + n;
    main.querySelector("[data-jauge-temps]").textContent = typo(dureeTexte(s));
    main.querySelector("[data-jauge-niveau]").textContent = typo(M.niveaux[n]);
  }

  function duelCorps() {
    var M = J().motdepasse, s = etat.duel;
    if (s.fini) {
      var et = nbEtoiles(s.score, s.ordre.length);
      return resultatJeu("motdepasse", { etoiles: et, score: s.score + "\u00a0/\u00a0" + s.ordre.length, texte: remplir(M.fin, { score: s.score, total: s.ordre.length }), lecon: M.lecon, record: s.record });
    }
    var d = M.duels[s.ordre[s.i]];
    var paire = s.sens[s.ordre[s.i]] ? [d[1], d[0]] : [d[0], d[1]];
    var forces = paire.map(function (x) { return estimerMdp(x).bits; });
    var gagnant = forces[0] >= forces[1] ? 0 : 1;
    var html = "<h2>" + ic("crane", "duotone") + h(M.defi_titre) + "</h2><p class=\"discret\">" + h(M.defi_intro) + "</p>" +
      '<div class="jeu-tete"><span class="compteur" tabindex="-1">' + h(remplir(M.compteur, { n: s.i + 1, total: s.ordre.length })) + "</span>" +
      '<span class="jeton jeton-score">' + ic("etoile", "fill") + s.score + "</span></div>" +
      '<div class="duel-choix">' + paire.map(function (x, k) {
        var sec = secondesMdp(forces[k]), niv = niveauMdp(sec);
        var cls = s.reponse ? (k === gagnant ? " gagnant" : " perdant") + (k === s.reponse.choix ? " choisi" : "") : "";
        return '<button type="button" class="mdp-carte niveau-' + niv + cls + '" data-duel-choix="' + k + '"' + (s.reponse ? " disabled" : "") + ">" +
          '<code lang="en">' + esc(x) + "</code>" +
          (s.reponse ? '<span class="mdp-verdict">' + (k === gagnant ? '<span class="mdp-badge">' + ic("trophee", "fill") + h(M.plus_solide) + "</span>" : "") +
            '<span class="mdp-temps">' + ic("chrono") + h(dureeTexte(sec)) + "</span><span class=\"mdp-niveau\">" + h(M.niveaux[niv]) + "</span></span>" : "") +
          "</button>";
      }).join('<span class="duel-vs" aria-hidden="true">VS</span>') + "</div>";
    if (s.reponse) {
      html += '<div class="explication ' + (s.reponse.juste ? "bonne" : "mauvaise") + '">' + ic(s.reponse.juste ? "valide" : "alerte", "fill") +
        "<p><strong>" + h(s.reponse.juste ? M.bien : M.rate) + "</strong> " + h(M.lecon) + "</p></div>" +
        '<div class="actions"><button type="button" class="bouton" data-duel-suivant>' + h(s.i + 1 >= s.ordre.length ? t("quiz_resultat") : M.suivant) + ic("fleche") + "</button></div>";
    }
    return html;
  }

  function choisirDuel(k, btn) {
    var M = J().motdepasse, s = etat.duel;
    if (!s || s.reponse || s.fini) return;
    var d = M.duels[s.ordre[s.i]];
    var paire = s.sens[s.ordre[s.i]] ? [d[1], d[0]] : [d[0], d[1]];
    var f = paire.map(function (x) { return estimerMdp(x).bits; });
    var gagnant = f[0] >= f[1] ? 0 : 1;
    var juste = k === gagnant;
    if (juste) { s.score++; confettisDepuis(btn, 50); }
    s.reponse = { choix: k, juste: juste };
    var zone = main.querySelector("[data-duel]");
    zone.innerHTML = duelCorps();
    if (!juste) secouer(zone.querySelector(".mdp-carte.choisi"));
    var b = zone.querySelector("[data-duel-suivant]");
    if (b) { b.focus({ preventScroll: true }); setTimeout(function () { faireDefiler(b); }, 150); }
  }

  function duelSuivant() {
    var s = etat.duel;
    s.i++; s.reponse = null;
    if (s.i >= s.ordre.length) {
      s.fini = true;
      s.record = enregistrerRecord("motdepasse", s.score, s.ordre.length);
      finJeuFete(nbEtoiles(s.score, s.ordre.length));
    }
    var zone = main.querySelector("[data-duel]");
    zone.innerHTML = duelCorps();
    faireDefiler(zone);
  }

  /* ------------------------------------------------------------------ */
  /* Jeu : La journée d'Afi                                             */
  /* ------------------------------------------------------------------ */
  var ARGENT_DEPART = 60000;
  pages.histoire = function () {
    var Hs = J().histoire;
    if (!etat.histoire) etat.histoire = { scene: -1, argent: ARGENT_DEPART, points: 0, choix: null, fini: false };
    return teteJeu("histoire", carteJeu("histoire").texte) +
      '<div class="page"><div class="conteneur"><div class="jeu-histoire" data-histoire style="' + styleJeu("histoire") + '">' + histoireCorps() + "</div></div></div>";
  };

  function pointsMax() { return J().histoire.scenes.reduce(function (a, s) { return a + Math.max.apply(null, s.choix.map(function (c) { return c.points; })); }, 0); }

  function histoireCorps() {
    var Hs = J().histoire, s = etat.histoire, max = pointsMax();
    if (s.scene === -1) {
      return '<div class="histoire-intro"' + revele(0) + '><span class="histoire-avatar">' + ic("portemonnaie", "duotone") + "</span>" +
        "<p>" + h(Hs.intro) + "</p>" +
        '<p class="histoire-solde-depart">' + ic("portemonnaie", "fill") + "<strong>" + milliers(ARGENT_DEPART) + "\u00a0F</strong></p>" +
        '<button type="button" class="bouton bouton-jaune" data-histoire-debut>' + ic("lecture", "fill") + h(Hs.commencer) + "</button></div>";
    }
    if (s.fini) {
      var fin = Hs.fins[s.points >= max - 2 ? 2 : s.points >= max / 2 ? 1 : 0];
      var et = nbEtoiles(s.points, max);
      return resultatJeu("histoire", {
        etoiles: et, score: s.points + "\u00a0/\u00a0" + max, titre: fin.titre,
        texte: fin.texte + " " + remplir(Hs.fin_argent, { argent: milliers(s.argent) }), record: s.record
      });
    }
    var sc = Hs.scenes[s.scene];
    var points = "";
    for (var k = 0; k < Hs.scenes.length; k++) points += '<span class="' + (k < s.scene ? "passee" : k === s.scene ? "actuelle" : "") + '"></span>';
    var html = '<div class="hud">' +
      '<span class="hud-argent" data-argent>' + ic("portemonnaie", "fill") + '<span class="hud-label">' + h(Hs.porte_monnaie) + '</span><strong data-argent-valeur>' + milliers(s.argent) + "\u00a0F</strong></span>" +
      '<span class="hud-vigilance">' + ic("bouclier", "fill") + '<span class="hud-label">' + h(Hs.vigilance) + "</span><strong>" + s.points + "</strong></span>" +
      '<span class="hud-progres" aria-hidden="true">' + points + "</span></div>" +
      '<article class="scene"><p class="scene-heure">' + ic("horloge", "fill") + h(sc.heure) + "</p>" +
      '<p class="scene-texte">' + h(sc.texte) + "</p>" +
      '<p class="scene-question">' + h(Hs.que_faire) + "</p>" +
      '<ul class="options">' + sc.choix.map(function (c, k) {
        var cls = "";
        if (s.choix !== null) cls = (c.points === 2 ? " juste" : c.points === 1 ? " moyen" : " faux") + (k === s.choix ? " choisi" : "");
        return '<li style="--i:' + k + '"><button type="button" class="' + cls.trim() + '" data-histoire-choix="' + k + '"' + (s.choix !== null ? " disabled" : "") + '><span class="lettre" aria-hidden="true">' + "ABC".charAt(k) + "</span><span>" + h(c.texte) + "</span></button></li>";
      }).join("") + "</ul>";
    if (s.choix !== null) {
      var ch = sc.choix[s.choix];
      html += '<div class="consequence ' + (ch.points === 2 ? "bonne" : ch.points === 1 ? "moyenne" : "mauvaise") + '" tabindex="-1">' +
        ic(ch.points === 2 ? "valide" : ch.points === 1 ? "info" : "alerte", "fill") + "<div><p>" + h(ch.consequence) + "</p>" +
        (ch.argent ? '<p class="consequence-argent">' + ic("portemonnaie", "fill") + "−" + milliers(-ch.argent) + "\u00a0F</p>" : "") + "</div></div>" +
        '<div class="actions"><button type="button" class="bouton" data-histoire-suite>' + h(s.scene + 1 >= Hs.scenes.length ? t("quiz_resultat") : Hs.continuer) + ic("fleche") + "</button></div>";
    }
    return html + "</article>";
  }

  function animerArgent(de, a) {
    var el = main.querySelector("[data-argent-valeur]");
    if (!el) return;
    var bloc = main.querySelector("[data-argent]");
    if (a < de) {
      secouer(bloc);
      var perte = document.createElement("span");
      perte.className = "perte";
      perte.textContent = "−" + milliers(de - a) + "\u00a0F";
      bloc.appendChild(perte);
      setTimeout(function () { perte.remove(); }, 1600);
    }
    if (CALME) { el.textContent = milliers(a) + "\u00a0F"; return; }
    var debut = null;
    (function pas(ts) {
      if (!debut) debut = ts;
      var p = Math.min(1, (ts - debut) / 700);
      el.textContent = milliers(Math.round(de + (a - de) * (1 - Math.pow(1 - p, 3)))) + "\u00a0F";
      if (p < 1) requestAnimationFrame(pas);
    })(performance.now());
  }

  function choisirHistoire(k, btn) {
    var s = etat.histoire;
    if (!s || s.choix !== null || s.fini) return;
    var c = J().histoire.scenes[s.scene].choix[k];
    var avant = s.argent;
    s.choix = k;
    s.points += c.points;
    s.argent = Math.max(0, s.argent + (c.argent || 0));
    main.querySelector("[data-histoire]").innerHTML = histoireCorps();
    main.querySelector("[data-argent-valeur]").textContent = milliers(avant) + "\u00a0F";
    animerArgent(avant, s.argent);
    if (c.points === 2) confettisDepuis(main.querySelector('[data-histoire-choix="' + k + '"]'), 50);
    var cons = main.querySelector(".consequence");
    if (cons) { cons.focus({ preventScroll: true }); setTimeout(function () { faireDefiler(main.querySelector("[data-histoire-suite]")); }, 150); }
  }

  function histoireSuite() {
    var s = etat.histoire;
    s.scene++; s.choix = null;
    if (s.scene >= J().histoire.scenes.length) {
      s.fini = true;
      s.record = enregistrerRecord("histoire", s.points, pointsMax());
      finJeuFete(nbEtoiles(s.points, pointsMax()));
    }
    main.querySelector("[data-histoire]").innerHTML = histoireCorps();
    window.scrollTo(0, 0);
    var c = main.querySelector(".scene-heure, .resultat .surtitre");
    if (c) { c.setAttribute("tabindex", "-1"); c.focus({ preventScroll: true }); }
  }

  /* ------------------------------------------------------------------ */
  /* Jeu : Mémo des réflexes                                            */
  /* ------------------------------------------------------------------ */
  var PAIRES_MEMO = 6;
  pages.memo = function () {
    var Mo = J().memo;
    if (!etat.memo) {
      var choisies = melanger(Mo.paires_liste.map(function (p, i) { return i; })).slice(0, PAIRES_MEMO);
      var cartes = [];
      choisies.forEach(function (p) { cartes.push({ p: p, type: "piege" }); cartes.push({ p: p, type: "reflexe" }); });
      etat.memo = { cartes: melanger(cartes), ouvertes: [], trouvees: {}, coups: 0, bloque: false, fini: false };
    }
    return teteJeu("memo", Mo.intro) + '<div class="page"><div class="conteneur"><div class="jeu-memo" data-memo style="' + styleJeu("memo") + '">' + memoCorps() + "</div></div></div>";
  };

  function etoilesMemo(coups) { return coups <= 9 ? 3 : coups <= 13 ? 2 : coups <= 18 ? 1 : 0; }

  function memoCorps() {
    var Mo = J().memo, s = etat.memo;
    if (s.fini) {
      var et = etoilesMemo(s.coups);
      return resultatJeu("memo", { etoiles: et, score: remplir(Mo.coups, { n: s.coups }), partage: remplir(Mo.partage_score, { n: s.coups }), texte: remplir(Mo.fin, { n: s.coups }), record: s.record });
    }
    return '<div class="jeu-tete"><span class="jeton jeton-score" data-memo-coups>' + ic("memo", "fill") + h(remplir(Mo.coups, { n: s.coups })) + "</span>" +
      '<span class="jeton" data-memo-paires>' + h(remplir(Mo.paires, { n: Object.keys(s.trouvees).length, total: PAIRES_MEMO })) + "</span></div>" +
      '<ul class="memo-grille">' + s.cartes.map(function (c, k) {
        var paire = Mo.paires_liste[c.p];
        var visible = s.ouvertes.indexOf(k) !== -1 || s.trouvees[c.p];
        return '<li><button type="button" class="carte-memo ' + c.type + (visible ? " retournee" : "") + (s.trouvees[c.p] ? " trouvee" : "") + '" data-carte="' + k + '"' +
          ' aria-label="' + esc(typo(visible ? (c.type === "piege" ? Mo.piege : Mo.reflexe) + " : " + paire[c.type] : Mo.cachee + " " + (k + 1))) + '">' +
          '<span class="carte-interieur"><span class="carte-dos" aria-hidden="true">' + ic("bouclier", "duotone") + "</span>" +
          '<span class="carte-face" aria-hidden="true"><span class="carte-type">' + ic(c.type === "piege" ? "alerte" : "valide", "fill") + h(c.type === "piege" ? Mo.piege : Mo.reflexe) + "</span>" +
          '<span class="carte-texte">' + h(paire[c.type]) + "</span></span></span></button></li>";
      }).join("") + "</ul>";
  }

  function retournerCarte(k, btn) {
    var Mo = J().memo, s = etat.memo;
    if (!s || s.bloque || s.fini) return;
    var c = s.cartes[k];
    if (s.trouvees[c.p] || s.ouvertes.indexOf(k) !== -1) return;
    var paire = Mo.paires_liste[c.p];
    s.ouvertes.push(k);
    btn.classList.add("retournee");
    btn.setAttribute("aria-label", typo((c.type === "piege" ? Mo.piege : Mo.reflexe) + " : " + paire[c.type]));
    if (s.ouvertes.length < 2) return;
    s.coups++;
    main.querySelector("[data-memo-coups]").innerHTML = ic("memo", "fill") + h(remplir(Mo.coups, { n: s.coups }));
    var a = s.cartes[s.ouvertes[0]], b = s.cartes[s.ouvertes[1]];
    var boutons = s.ouvertes.map(function (i) { return main.querySelector('[data-carte="' + i + '"]'); });
    if (a.p === b.p && a.type !== b.type) {
      s.trouvees[a.p] = true;
      s.ouvertes = [];
      boutons.forEach(function (x) { x.classList.add("trouvee"); });
      confettisDepuis(btn, 35);
      var n = Object.keys(s.trouvees).length;
      main.querySelector("[data-memo-paires]").textContent = typo(remplir(Mo.paires, { n: n, total: PAIRES_MEMO }));
      annoncer(Mo.paires_liste[a.p].reflexe, { titre: Mo.paires_liste[a.p].piege, icone: "valide" });
      if (n === PAIRES_MEMO) {
        s.fini = true;
        s.record = enregistrerRecord("memo", s.coups, PAIRES_MEMO, true);
        setTimeout(function () {
          main.querySelector("[data-memo]").innerHTML = memoCorps();
          finJeuFete(etoilesMemo(s.coups));
          var t0 = main.querySelector(".resultat .surtitre");
          if (t0) { t0.setAttribute("tabindex", "-1"); t0.focus({ preventScroll: true }); faireDefiler(t0); }
        }, 900);
      }
    } else {
      s.bloque = true;
      setTimeout(function () {
        boutons.forEach(function (x) { secouer(x); });
      }, 350);
      setTimeout(function () {
        boutons.forEach(function (x, i) {
          x.classList.remove("retournee");
          x.setAttribute("aria-label", typo(Mo.cachee + " " + (s.ouvertes[i] + 1)));
        });
        s.ouvertes = []; s.bloque = false;
      }, 1100);
    }
  }

  /* ================================================================== */
  /* Outils : vérifier un message, attestation, mode animateur, affiches */
  /* ================================================================== */
  function O() { return C.outils; }
  /* Accord singulier/pluriel pour les textes des outils (clé « _un ») */
  function pl(obj, cle, n, vars) { var un = obj[cle + "_un"]; return remplir(n <= 1 && un != null ? un : obj[cle], vars); }

  /* --- QR code : la bibliothèque n'est chargée que si une page en a besoin --- */
  var qrAttente = null;
  function chargerQR(suite) {
    if (window.qrcode) { suite(); return; }
    if (!qrAttente) {
      qrAttente = [];
      var s = document.createElement("script");
      s.src = "js/qrcode.js";
      s.onload = function () { var a = qrAttente || []; qrAttente = null; a.forEach(function (f) { f(); }); };
      s.onerror = function () { qrAttente = null; };
      document.head.appendChild(s);
    }
    qrAttente.push(suite);
  }
  function matriceQR(texte) {
    var q = window.qrcode(0, "M");
    q.addData(texte); q.make();
    var n = q.getModuleCount(), m = [];
    for (var r = 0; r < n; r++) { m.push([]); for (var c = 0; c < n; c++) m[r].push(q.isDark(r, c)); }
    return m;
  }
  function svgQR(texte) {
    var m = matriceQR(texte), n = m.length, d = "";
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        if (!m[r][c]) continue;
        var l = 1; while (c + l < n && m[r][c + l]) l++;
        d += "M" + (c + 4) + " " + (r + 4) + "h" + l + "v1h-" + l + "z";
        c += l - 1;
      }
    }
    return '<svg class="qr-svg" viewBox="0 0 ' + (n + 8) + " " + (n + 8) + '" shape-rendering="crispEdges" role="img" aria-label="' +
      esc(t("qr_label", { url: texte })) + '"><rect width="100%" height="100%" fill="#fff"/><path d="' + d + '" fill="#00261C"/></svg>';
  }
  function remplirQR() {
    var zones = main.querySelectorAll("[data-qr]");
    if (!zones.length) return;
    chargerQR(function () {
      zones.forEach(function (z) { if (document.body.contains(z)) z.innerHTML = svgQR(z.getAttribute("data-qr")); });
    });
  }
  function adresseCourte() { return CFG.siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, ""); }
  function logoSVG() { var l = document.querySelector(".entete .marque-logo"); return l ? l.outerHTML : ""; }

  /* ------------------------------------------------------------------ */
  /* Vérifie un message : analyse faite dans le navigateur              */
  /* ------------------------------------------------------------------ */
  function rx(s) { return new RegExp(s, "g"); }
  var MONTANT = "\\d[\\d .]*\\s?(?:f|fr|fcfa|f cfa|cfa|francs?|mille)\\b";
  var DEMANDE = "(?:envoie|envoyer|envoyez|renvoie|renvoyer|renvoyez|donne|donner|donnez|redonne|redonnez|transmets?|transmettre|transmettez|communique|communiquer|communiquez|partage|partager|partagez|dicte|dicter|dictez|lis|lisez|tape|taper|tapez|compose|composer|composez|saisis|saisir|saisissez|confirme|confirmer|confirmez|indique|indiquer|indiquez|ecris|ecrivez|valide|valider|validez|entre|entrer|entrez)";
  var REGLES = [
    { id: "code", poids: 3, lecon: "codes-1", motifs: [
      [rx("\\b" + DEMANDE + "(?:[- ]moi|[- ]nous|[- ]le|[- ]la)?(?:\\s+(?:vite|rapidement|vitement|stp|svp|maintenant|juste|seulement|directement))?\\s+(?:le|les|ton|tes|votre|vos|ce|ces|un|une|mon|du|l')\\s*(?:nouveau\\s+|bon\\s+)?(?:code|codes|pin|mot de passe|otp|chiffres)\\b"), { negation: true, poids: 5 }],
      [rx("\\b(?:me|nous)\\s+le\\s+(?:renvoyer|envoyer|transferer|donner|transmettre|dicter)\\b|\\b(?:renvoie|renvoyez|envoie|envoyez|transfere|transferez|donne|donnez)[- ]le[- ]moi\\b"), { si: /\bcode\b/, poids: 5 }],
      [rx("\\bcode (?:pin|secret|de (?:validation|confirmation|verification|retrait|securite|transaction)|a \\d chiffres|recu par sms)\\b"), { mention: true }],
      [rx("\\b(?:pin|otp)\\b"), { mention: true }]
    ] },
    { id: "erreur", poids: 3, lecon: "mobile-money-1", motifs: [
      [rx("\\bpar erreur\\b")],
      [rx("\\b(?:me suis|s'est|t'es|se sont|nous sommes) trompee?s? de (?:numero|personne|destinataire|compte)\\b")],
      [rx("\\b(?:renvoie|renvoyer|renvoyez|retourne|retourner|retournez|rembourse|rembourser|remboursez|reverse|reverser|reversez|restitue|restituer|restituez)(?:[- ]moi|[- ]le|[- ]les|[- ]nous)?\\b(?=[^.!?\\n]{0,30}?(?:" + MONTANT + "|argent|somme|sous\\b|transfert|depot|\\bau \\d|\\bsur (?:ce|mon) numero))"), { poids: 2 }]
    ] },
    { id: "frais", poids: 3, lecon: "emploi-1", motifs: [
      [rx("\\b(?:frais|droits?) d(?:e |')(?:dossier|inscription|formation|visite(?: medicale)?|traitement|deblocage|activation|dedouanement|livraison|enregistrement|validation|candidature|tenue|badge)\\b")],
      [rx("\\b(?:payer|payez|paie|verser|versez|verse|regler|reglez|deposer|deposez)\\b[^.!?\\n]{0,40}?" + MONTANT), { poids: 2 }]
    ] },
    { id: "chantage", poids: 3, lecon: "reseaux-2", motifs: [
      [rx("\\b(?:sinon|ou bien|ou)\\s+(?:je|on|nous)\\s+(?:vais\\s+|va\\s+|allons\\s+)?(?:les\\s+|la\\s+|le\\s+|tout\\s+)?(?:publier|publie|diffuser|diffuse|envoyer|envoie|montrer|montre|partager|partage|balancer|balance|poster|poste)\\b")],
      [rx("\\b(?:je vais|on va|nous allons)\\s+(?:les\\s+|la\\s+|le\\s+|tout\\s+)?(?:publier|diffuser|balancer|poster)\\b")],
      [rx("\\b(?:photos?|videos?|images?|captures?)\\s+(?:\\S+\\s+){0,2}?(?:intimes?|nue?s?|compromettantes?|privees?)\\b")]
    ] },
    { id: "installer", poids: 3, motifs: [
      [rx("\\b(?:installe|installer|installez|telecharge|telecharger|telechargez)\\b[^.!?\\n]{0,25}?\\b(?:application|appli|app|apk|logiciel)\\b")],
      [rx("\\.apk\\b")],
      [rx("\\b(?:anydesk|teamviewer|rustdesk|quicksupport)\\b")]
    ] },
    { id: "urgence", poids: 2, motifs: [
      [rx("\\b(?:urgent|urgente|urgence|urgemment|immediatement|tout de suite|sans tarder|au plus vite|au plus tard|rapidement|vite|derniere chance|dernier delai|dernier rappel|dernier avertissement|expire|expirera|expiration)\\b")],
      [rx("\\b(?:avant|d'ici)\\s+(?:ce soir|demain|minuit|midi|la fin de (?:la )?journee|\\d{1,2}\\s?h(?:\\d{2})?\\b)")],
      [rx("\\b(?:dans|sous)\\s+(?:les\\s+)?\\d+\\s?(?:h|heures?|min|minutes?)\\b")],
      [rx("\\baujourd'hui (?:seulement|uniquement)\\b")]
    ] },
    { id: "blocage", poids: 2, lecon: "mobile-money-2", motifs: [
      [rx("\\b(?:sera|seront|va etre|vont etre|est|a ete)\\s+(?:temporairement\\s+|definitivement\\s+)?(?:bloque|suspendu|desactive|ferme|supprime|coupe|resilie)e?s?\\b")],
      [rx("\\b(?:blocage|suspension|desactivation|fermeture|suppression)\\s+(?:imminente?\\s+)?(?:de|du)\\s+(?:votre\\s+|ton\\s+|ta\\s+|la\\s+)?(?:compte|numero|ligne|puce|carte|sim|whatsapp|portefeuille)\\b")]
    ] },
    { id: "gain", poids: 2, lecon: "mobile-money-3", motifs: [
      [rx("\\b(?:vous avez gagne|tu as gagne|vous etes (?:le |la )?(?:grande? )?gagnante?|heureux gagnant|heureuse gagnante|tirage au sort|loterie|tombola|jackpot)\\b")],
      [rx("\\b(?:doubler|double|tripler|triple|multiplier|multiplie)\\b[^.!?\\n]{0,30}?\\b(?:argent|mise|investissement|capital|somme|gains?)\\b"), { poids: 3 }],
      [rx("\\b(?:argent|mise|investissement|capital)\\b[^.!?\\n]{0,20}?\\b(?:double|triple|multiplie)\\b"), { poids: 3 }],
      [rx("\\d+\\s?%\\s*(?:par|chaque|en|tous les)\\s+(?:jour|jours|semaine|mois|\\d+\\s+jours)\\b"), { poids: 3 }],
      [rx("\\b(?:gagnante?|remporte)\\b"), { poids: 1 }],
      [rx("\\b(?:investis|investir|investissez|placement|trading|crypto|bitcoin|forex)\\b"), { poids: 1 }]
    ] },
    { id: "numero", poids: 2, lecon: "whatsapp-3", motifs: [
      [rx("\\b(?:nouveau numero|change de numero|changer de numero|changement de numero|mon autre numero|ce nouveau numero|ancien numero ne marche|perdu mon telephone|telephone (?:est )?gate|telephone a ete vole)\\b")],
      [rx("\\b(?:ecris|ecrivez|contacte|contactez|ajoute|ajoutez|joins|joignez)[- ](?:moi|nous)\\s+(?:sur|au|via|en prive|directement sur)\\b")]
    ] },
    { id: "argent", poids: 2, lecon: "whatsapp-3", motifs: [
      [rx("\\b(?:envoie|envoyez|envoyer|prete|pretez|preter|depanne|depannez|aide|aidez|fais|faites)(?:[- ](?:moi|nous))?\\s+(?:avec\\s+)?(?:un peu d'argent|de l'argent|l'argent|du credit|des unites|un depot|un transfert|" + MONTANT + ")")],
      [rx("\\b(?:j'ai|jai)\\s+(?:un\\s+)?(?:gros\\s+)?(?:probleme|souci|accident)\\b"), { poids: 1 }]
    ] },
    { id: "secret", poids: 2, motifs: [
      [rx("\\b(?:ne (?:le |la |les |l'|en )?(?:dis|dites|parle|parlez|raconte|racontez|montre|montrez)\\s+(?:rien\\s+|pas\\s+|ca\\s+)?a\\s+(?:personne|papa|maman|ton pere|ta mere|ton mari|ta femme|tes parents|ta famille|la famille)|n'en (?:parle|parlez|dis|dites) (?:rien |pas )?a personne|garde(?:r|z)? (?:le|la|ca|cela) (?:pour toi|pour vous|secret)|reste entre nous|entre nous|confidentiel(?:le)?|en toute discretion)\\b")]
    ] },
    { id: "identite", poids: 2, lecon: "reseaux-3", motifs: [
      [rx("\\b(?:numero de (?:carte|cni|piece|passeport|compte)|carte d'identite|piece d'identite|cni|passeport|date de naissance|photo de (?:ta|votre|la) (?:carte|piece|cni)|selfie avec|mot de passe)\\b")]
    ] },
    { id: "emploi", poids: 2, lecon: "emploi-1", motifs: [
      [rx("\\bsans (?:diplome|experience|entretien|concours|cv|test)\\b")],
      [rx("\\b(?:recrutement|recrute|recrutons|embauche|offre d'emploi|concours direct|integration directe|poste a pourvoir)\\b"), { poids: 1 }]
    ] },
    { id: "officiel", poids: 1, lecon: "mobile-money-2", motifs: [
      [rx("\\b(?:service client(?:ele)?|service technique|support technique|equipe (?:technique|whatsapp|facebook|support|yas|moov|mixx|flooz|togocom)|conseiller|direction generale|ministere|gouvernement|police|gendarmerie|douane|impots|tresor public)\\b")]
    ] },
    { id: "lien", poids: 1, motifs: [
      [rx("\\b(?:clique|cliquez|cliquer|appuie|appuyez)\\s+(?:ici|sur (?:le|ce) lien)\\b")]
    ] }
  ];
  var PROTECTION = rx("\\b(?:ne (?:le |la |les |l')?(?:partage|partagez|communique|communiquez|donne|donnez|transmets|transmettez|divulgue|divulguez|revele|revelez)\\w*\\s+(?:\\S+\\s+){0,3}?(?:jamais|pas|a personne|a quiconque)\\b|ne (?:le |la )?(?:partagez|communiquez|donnez|transmettez) (?:a|avec) personne|personne ne (?:vous|te) (?:le )?demandera|ne (?:vous|te) (?:le )?demander(?:a|ons) jamais)");
  var URL_RE = /(?:https?:\/\/)?(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:com|net|org|info|biz|xyz|top|online|site|click|link|live|tk|ml|ga|cf|gq|ly|me|tg|io|co|cc|ru|cn|shop|store|app|vip|win|bid|loan|work|fr|africa|gl|gd|ws|to|pw|icu|buzz|club|space|website|tech|pro|money|cash|bet|gy|at|id|do|st)\b(?:\/[^\s]*)?/g;
  var RACCOURCIS = ["bit.ly", "tinyurl.com", "cutt.ly", "t.ly", "is.gd", "shorturl.at", "rb.gy", "tiny.cc", "ow.ly", "s.id", "t.co", "goo.gl", "rebrand.ly", "wa.link", "bit.do", "v.gd", "shorte.st"];
  var MARQUES = ["yas", "mixx", "moov", "flooz", "togocom", "tmoney", "whatsapp", "facebook", "meta", "instagram", "tiktok", "google", "gmail", "youtube", "ecobank", "orabank", "uba", "coris", "bceao", "banque", "bank", "gouv", "gouvernement", "ministere", "ancy", "cert", "onu", "unicef", "oms", "paypal", "western", "moneygram", "wave", "orange", "mtn"];
  var APPATS = ["officiel", "officielle", "verification", "verif", "verify", "bonus", "promo", "gratuit", "free", "cadeau", "gift", "gagnant", "winner", "securite", "secure", "login", "connexion", "compte", "account", "support", "recrutement", "emploi", "job", "subvention", "prime", "aide", "update", "remboursement"];
  var LECONS_SIGNAL = {};
  REGLES.forEach(function (r) { LECONS_SIGNAL[r.id] = r.lecon; });

  /* Minuscules sans accents, même longueur que le texte d'origine */
  function normaliser(s) {
    var o = "";
    for (var i = 0; i < s.length; i++) {
      var c = s.charAt(i), n = c;
      try { n = c.normalize("NFD").replace(/[̀-ͯ]/g, ""); } catch (e) { /* rien */ }
      n = n.toLowerCase();
      if (/[’‘`´]/.test(c)) n = "'";
      else if (/\s/.test(c)) n = c === "\n" ? "\n" : " ";
      o += n.length === 1 ? n : (n.charAt(0) || c);
    }
    return o;
  }

  function analyserLien(url) {
    var hote = url.replace(/^https?:\/\//, "").split(/[\/?#]/)[0].replace(/^www\./, "");
    var etiquettes = hote.split(".");
    var nom = etiquettes.length > 1 ? etiquettes[etiquettes.length - 2] : hote;
    var domaine = etiquettes.slice(-2).join(".");
    if (RACCOURCIS.indexOf(hote) !== -1) return { id: "lien_court", poids: 2, domaine: hote };
    var parties = [];
    etiquettes.slice(0, -1).forEach(function (e) { parties = parties.concat(e.split("-")); });
    var marque = parties.some(function (p) {
      return MARQUES.indexOf(p) !== -1 || MARQUES.some(function (m) { return p.length > m.length + 2 && p.indexOf(m) === 0; });
    });
    var appat = parties.some(function (p) { return APPATS.some(function (a) { return p.indexOf(a) !== -1; }); });
    if ((marque && MARQUES.indexOf(nom) === -1) || (appat && nom.indexOf("-") !== -1)) return { id: "lien_imite", poids: 3, domaine: domaine };
    return { id: "lien", poids: 1, domaine: domaine };
  }

  function analyserMessage(texte) {
    var n = normaliser(texte), m;
    var bons = [];
    PROTECTION.lastIndex = 0;
    while ((m = PROTECTION.exec(n))) bons.push({ d: m.index, f: m.index + m[0].length, bon: true });
    var parId = {}, marques = [];
    function dansBon(d) { return bons.some(function (b) { return d >= b.d && d < b.f; }); }
    function noter(id, poids, d, f, domaine) {
      var s = parId[id] || (parId[id] = { id: id, poids: 0, premier: d, domaines: [] });
      s.poids = Math.max(s.poids, poids);
      s.premier = Math.min(s.premier, d);
      if (domaine && s.domaines.indexOf(domaine) === -1) s.domaines.push(domaine);
      marques.push({ d: d, f: f, id: id });
    }
    REGLES.forEach(function (r) {
      r.motifs.forEach(function (mo) {
        var expr = mo[0], opt = mo[1] || {};
        if ((opt.mention && bons.length) || (opt.si && !opt.si.test(n))) return;
        expr.lastIndex = 0;
        var x;
        while ((x = expr.exec(n))) {
          if (!x[0]) { expr.lastIndex++; continue; }
          var d = x.index, f = d + x[0].replace(/\s+$/, "").length;
          if (opt.negation && /(?:\bne\s+(?:\S+\s+)?|\bn')$/.test(n.slice(Math.max(0, d - 16), d))) continue;
          if (dansBon(d)) continue;
          noter(r.id, opt.poids || r.poids, d, f);
        }
      });
    });
    URL_RE.lastIndex = 0;
    while ((m = URL_RE.exec(n))) {
      var debut = m.index, url = m[0].replace(/[.,;:!?)\]»"']+$/, "");
      if (debut > 0 && /[@\w.-]/.test(n.charAt(debut - 1))) continue;
      var lien = analyserLien(url);
      noter(lien.id, lien.poids, debut, debut + url.length, lien.domaine);
    }
    // Un lien trompeur ou raccourci absorbe le simple « lien à vérifier »
    var fort = parId.lien_imite || parId.lien_court;
    if (fort && parId.lien) {
      parId.lien.domaines.forEach(function (dm) { if (fort.domaines.indexOf(dm) === -1) fort.domaines.push(dm); });
      fort.premier = Math.min(fort.premier, parId.lien.premier);
      marques.forEach(function (mk) { if (mk.id === "lien") mk.id = fort.id; });
      delete parId.lien;
    }
    // Surlignages : sans chevauchement, du début à la fin du texte
    var toutes = marques.concat(bons).sort(function (a, b) { return a.d - b.d || (b.f - b.d) - (a.f - a.d); });
    // Un passage peut en contenir un autre (« Envoie-moi vite le code ») : on garde l'imbrication
    var gardees = [], pile = [];
    toutes.forEach(function (mk) {
      while (pile.length && mk.d >= pile[pile.length - 1].f) pile.pop();
      var parent = pile[pile.length - 1];
      if (parent && (mk.f > parent.f || mk.id === parent.id || mk.bon || parent.bon)) return;
      mk.enfants = [];
      (parent ? parent.enfants : gardees).push(mk);
      pile.push(mk);
    });
    var signaux = Object.keys(parId).map(function (k) { return parId[k]; })
      .sort(function (a, b) { return b.poids - a.poids || a.premier - b.premier; });
    var total = signaux.reduce(function (a, s) { return a + s.poids; }, 0);
    return {
      signaux: signaux, marques: gardees, bon: bons.length > 0, total: total,
      niveau: total >= 5 ? 3 : total >= 3 ? 2 : total >= 1 ? 1 : 0
    };
  }

  function texteSurligne(texte, res) {
    var numeros = {};
    res.signaux.forEach(function (s, k) { numeros[s.id] = { n: k + 1, poids: s.poids }; });
    var k = 0;
    function rendu(debut, fin, liste) {
      var html = "", pos = debut;
      liste.forEach(function (mk) {
        html += esc(texte.slice(pos, mk.d));
        var info = mk.bon ? null : numeros[mk.id];
        html += '<mark class="signal ' + (mk.bon ? "signal-bon" : "poids-" + Math.min(3, info.poids)) + '" style="--i:' + (k++) + '">' + rendu(mk.d, mk.f, mk.enfants || []) +
          (info ? '<sup aria-hidden="true">' + info.n + '</sup><span class="visuellement-cache"> (' + info.n + ")</span>" : "") + "</mark>";
        pos = mk.f;
      });
      return html + esc(texte.slice(pos, fin));
    }
    return rendu(0, texte.length, res.marques);
  }

  function infoSignal(id) { return O().verifier.signaux.filter(function (s) { return s.id === id; })[0] || { titre: id, texte: "" }; }
  function lienLecon(cle) {
    if (!cle) return null;
    var p = /^(.+)-(\d+)$/.exec(cle), r = p && trouverModule(p[1]);
    if (!r) return null;
    return { href: "#lecon-" + p[1] + "-" + p[2], titre: r.m.lecons[parseInt(p[2], 10) - 1].titre };
  }

  function resultatVerif(texte, res, images) {
    var V = O().verifier, niv = V.niveaux[res.niveau];
    var ICONES_NIV = ["valide", "info", "alerte", "stop2"];
    var html = '<section class="verif-resultat niveau-v' + res.niveau + '" tabindex="-1" aria-labelledby="verdict-titre">' +
      '<div class="verdict-v"><span class="verdict-icone">' + ic(ICONES_NIV[res.niveau], "fill") + "</span>" +
      '<div class="verdict-texte"><h2 id="verdict-titre">' + h(niv.titre) + "</h2><p>" + h(niv.texte) + "</p></div>" +
      '<div class="thermo" aria-hidden="true">' + [0, 1, 2, 3].map(function (k) { return '<span class="' + (k <= res.niveau ? "allume" : "") + '" style="--i:' + k + '"></span>'; }).join("") + "</div></div>" +
      capturesHTML(images, res) +
      (images && images.length ? '<p class="texte-lu">' + ic("fichier") + "<span>" + h(V.texte_lu) + "</span></p>" : "") +
      '<div class="message-analyse"><p>' + texteSurligne(texte, res) + "</p></div>";
    if (res.bon) {
      html += '<div class="explication grande">' + ic("valide", "fill") + "<p><strong>" + h(V.bon_signe_titre) + ".</strong> " + h(V.bon_signe_texte) + "</p></div>";
    }
    if (res.signaux.length) {
      html += '<h3 class="signaux-titre">' + h(V.signaux_titre) + ' <span class="signaux-nb">' + h(pl(V, "signaux_nb", res.signaux.length, { n: res.signaux.length })) + "</span></h3>" +
        '<ol class="signaux">' + res.signaux.map(function (s, k) {
          var info = infoSignal(s.id), lecon = lienLecon(LECONS_SIGNAL[s.id]);
          var lien = /^lien/.test(s.id)
            ? '<a class="signal-lien" href="#liens">' + ic("navigateur") + h(V.jeu_liens) + "</a>"
            : (lecon ? '<a class="signal-lien" href="' + lecon.href + '">' + ic("livre") + h(V.lecon) + " : " + h(lecon.titre) + "</a>" : "");
          if (s.id === "emploi") lien += '<a class="signal-lien" href="' + esc(CFG.arnako) + '" target="_blank" rel="noopener">' + ic("mallette") + "ArnaKO</a>";
          return '<li class="signal-item poids-' + Math.min(3, s.poids) + '" style="--i:' + k + '"><span class="signal-num" aria-hidden="true">' + (k + 1) + "</span><div>" +
            "<h4>" + h(info.titre) + "</h4><p>" + h(info.texte) + "</p>" +
            s.domaines.map(function (dm) { return '<p class="vrai-nom">' + h(remplir(V.domaine, { domaine: "%%D%%" })).replace("%%D%%", "<strong>" + esc(dm) + "</strong>") + "</p>"; }).join("") +
            (lien ? '<p class="signal-liens">' + lien + "</p>" : "") + "</div></li>";
        }).join("") + "</ol>";
    }
    html += '<div class="reflexes-v"><h3>' + ic("bouclier", "fill") + h(V.reflexes_titre) + "</h3><ul>" +
      V.reflexes.map(function (r) { return "<li>" + ic("coche") + "<span>" + h(r) + "</span></li>"; }).join("") + "</ul></div>" +
      '<p class="limite">' + ic("info") + "<span>" + h(V.limite) + "</span></p>" +
      '<div class="actions"><button type="button" class="bouton" data-verif-nouveau>' + ic("rejouer") + h(V.recommencer) + "</button>" +
      '<a class="bouton bouton-second" href="#signaler">' + ic("bouee") + h(V.signaler) + "</a></div></section>" +
      '<div class="verif-partage"><h3>' + h(V.partage_titre) + "</h3>" + partageHTML(V.partage) + "</div>";
    return html;
  }

  pages.verifier = function () {
    var V = O().verifier, s = etat.verif || (etat.verif = { texte: "", res: null, images: [] });
    var peutColler = !!(navigator.clipboard && navigator.clipboard.readText);
    return pageTete('<div class="page-tete-ligne"><span class="pastille">' + ic("loupe", "duotone") + '</span><div><h1 tabindex="-1">' + h(V.titre) + "</h1><p>" + h(V.intro) + "</p></div></div>", "", "--c:#D21034;--ct:#A30B28") +
      '<div class="page"><div class="conteneur"><div class="verif">' + ongletsVerif("message") +
      '<form class="verif-form" data-verif-form novalidate>' +
      '<div class="verif-label-ligne"><label for="verif-texte">' + h(V.label) + '</label><div class="verif-outils">' +
      (peutColler ? '<button type="button" class="bouton-oeil" data-verif-coller>' + ic("coller") + "<span>" + h(V.coller) + "</span></button>" : "") +
      '<button type="button" class="bouton-oeil" data-verif-effacer>' + ic("gomme") + "<span>" + h(V.effacer) + "</span></button></div></div>" +
      '<textarea id="verif-texte" data-verif-texte rows="6" spellcheck="false" placeholder="' + esc(typo(V.placeholder)) + '">' + esc(s.texte) + "</textarea>" +
      '<p class="prive">' + ic("cadenas", "fill") + h(V.prive) + "</p>" +
      '<p class="verif-erreur" data-verif-erreur role="alert" hidden></p>' +
      '<div class="verif-envoi"><button type="submit" class="bouton bouton-grand">' + ic("recherche") + h(V.analyser) + "</button>" +
      '<label class="bouton bouton-second bouton-grand bouton-fichier">' + ic("image") + "<span>" + h(V.ajouter) + "</span>" +
      '<input type="file" accept="image/*,.txt,text/plain" multiple data-verif-fichier class="visuellement-cache"></label></div>' +
      '<p class="verif-ajouter-aide">' + h(V.ajouter_aide) + "</p></form>" +
      '<div class="exemples"><p>' + h(V.exemples_titre) + '</p><div class="exemples-liste">' +
      V.exemples.map(function (e, k) { return '<button type="button" class="puce-exemple" data-verif-exemple="' + k + '">' + ic("message") + h(e.nom) + "</button>"; }).join("") +
      "</div></div>" +
      '<div data-verif-resultat>' + (s.res ? resultatVerif(s.texte, s.res, s.images) : "") + "</div>" +
      "</div></div></div>";
  };

  function lancerVerif(texte, images) {
    var V = O().verifier, zone = main.querySelector("[data-verif-resultat]"), err = main.querySelector("[data-verif-erreur]");
    var champ = main.querySelector("[data-verif-texte]");
    texte = String(texte || "").slice(0, 12000);
    if (champ && champ.value !== texte) champ.value = texte;
    var avant = etat.verif || {};
    if (images === undefined) images = avant.texte === texte ? (avant.images || []) : [];
    if (avant.images && avant.images !== images) libererImages(avant.images, images);
    if (!texte.trim()) {
      err.textContent = typo(V.vide); err.hidden = false;
      if (champ) champ.focus();
      return;
    }
    err.hidden = true;
    var res = analyserMessage(texte);
    etat.verif = { texte: texte, res: res, images: images };
    zone.innerHTML = resultatVerif(texte, res, images);
    var bloc = zone.querySelector(".verif-resultat");
    if (!CALME) bloc.classList.add("anime");
    bloc.focus({ preventScroll: true });
    setTimeout(function () { if (bloc.scrollIntoView) bloc.scrollIntoView({ block: "start", behavior: CALME ? "auto" : "smooth" }); }, 60);
    if (res.niveau >= 2) setTimeout(function () { secouer(bloc.querySelector(".verdict-icone")); }, 500);
  }

  function collerVerif() {
    var V = O().verifier;
    try {
      navigator.clipboard.readText().then(function (x) {
        if (x && x.trim()) lancerVerif(x);
        else annoncer(V.coller_aide, { icone: "coller", duree: 5000 });
      }, function () { annoncer(V.coller_aide, { icone: "coller", duree: 5000 }); main.querySelector("[data-verif-texte]").focus(); });
    } catch (e) { annoncer(V.coller_aide, { icone: "coller", duree: 5000 }); }
  }

  /* Aperçu sur l'accueil : le vrai résultat de l'analyse sur une phrase d'exemple */
  function apercuVerifHTML() {
    var V = O().verifier, ex = V.accueil_exemple, res = analyserMessage(ex);
    return '<section class="section section-verif"><div class="conteneur"><div class="bloc-verif"' + revele(0) + ">" +
      '<div class="bloc-verif-texte"><span class="bloc-verif-icone">' + ic("loupe", "duotone") + "</span>" +
      "<h2>" + h(V.accueil_titre) + "</h2><p>" + h(V.accueil_texte) + "</p>" +
      '<div class="bloc-verif-actions"><a class="bouton" href="#verifier">' + h(V.accueil_bouton) + ic("fleche") + "</a>" +
      '<a class="bouton bouton-second" href="#assistant">' + ic("discussion") + h(V.accueil_bouton_situation) + "</a></div></div>" +
      '<div class="bloc-verif-demo" aria-hidden="true"><div class="demo-bulle">' + texteSurligne(ex, res) + "</div>" +
      '<div class="demo-verdict niveau-v' + res.niveau + '">' + ic("stop2", "fill") + "<span>" + h(V.niveaux[res.niveau].titre) + "</span>" +
      '<span class="demo-nb">' + h(pl(V, "signaux_nb", res.signaux.length, { n: res.signaux.length })) + "</span></div></div>" +
      "</div></div></section>";
  }

  /* ------------------------------------------------------------------ */
  /* Lecture des captures d'écran (dans le navigateur, rien n'est envoyé) */
  /* ------------------------------------------------------------------ */
  var OCR = { pret: null, suivi: null };
  function chargerOCR() {
    if (OCR.pret) return OCR.pret;
    var base = new URL("vendor/tesseract/", location.href).href;
    OCR.pret = new Promise(function (ok, ko) {
      if (window.Tesseract) { ok(); return; }
      var s = document.createElement("script");
      s.src = base + "tesseract.min.js"; s.onload = ok; s.onerror = ko;
      document.head.appendChild(s);
    }).then(function () {
      return window.Tesseract.createWorker("fra", 1, {
        workerPath: base + "worker.min.js", corePath: base, langPath: base + "lang",
        logger: function (m) { if (OCR.suivi) OCR.suivi(m); }
      });
    });
    OCR.pret.catch(function () { OCR.pret = null; });
    return OCR.pret;
  }

  /* Image agrandie si petite, en niveaux de gris, inversée si fond sombre (mode nuit) */
  function preparerImage(fichier) {
    return new Promise(function (ok, ko) {
      var url = URL.createObjectURL(fichier), img = new Image();
      img.onload = function () {
        var w = img.naturalWidth, hh = img.naturalHeight;
        var e = w < 900 ? 2 : (w > 2400 ? 2400 / w : 1);
        var toile = document.createElement("canvas");
        toile.width = Math.round(w * e); toile.height = Math.round(hh * e);
        var ctx = toile.getContext("2d");
        ctx.drawImage(img, 0, 0, toile.width, toile.height);
        try {
          var donnees = ctx.getImageData(0, 0, toile.width, toile.height), px = donnees.data, somme = 0, i;
          for (i = 0; i < px.length; i += 4) { var g = .299 * px[i] + .587 * px[i + 1] + .114 * px[i + 2]; px[i] = px[i + 1] = px[i + 2] = g; somme += g; }
          if (somme / (px.length / 4) < 120) for (i = 0; i < px.length; i += 4) { px[i] = px[i + 1] = px[i + 2] = 255 - px[i]; }
          ctx.putImageData(donnees, 0, 0);
        } catch (err) { /* image laissée telle quelle */ }
        ok({ url: url, w: w, h: hh, echelle: e, toile: toile });
      };
      img.onerror = function () { URL.revokeObjectURL(url); ko(new Error("image")); };
      img.src = url;
    });
  }

  /* Lit une ou plusieurs images ; renvoie le texte et, pour chaque mot, sa place sur l'image */
  function lireImages(fichiers, progres) {
    var images = [], morceaux = [], decalage = 0;
    return fichiers.reduce(function (p, fichier, k) {
      return p.then(function () {
        progres(k, 0);
        return preparerImage(fichier).then(function (prep) {
          return chargerOCR().then(function (worker) {
            OCR.suivi = function (m) { if (m.status === "recognizing text") progres(k, m.progress || 0); };
            return worker.recognize(prep.toile, {}, { text: true, blocks: true });
          }).then(function (r) {
            var lignes = [], mots = [], pos = 0;
            var paragraphes = [];
            (r.data.blocks || []).forEach(function (b) {
              (b.paragraphs || []).forEach(function (pa) {
                var debutPara = lignes.length;
                (pa.lines || []).forEach(function (li) {
                  var txt = "";
                  (li.words || []).forEach(function (mo) {
                    var t = String(mo.text || "").trim();
                    if (!t) return;
                    if (txt) txt += " ";
                    var d = pos + txt.length;
                    txt += t;
                    mots.push({ d: d, f: d + t.length, ligne: lignes.length, x0: mo.bbox.x0 / prep.echelle, y0: mo.bbox.y0 / prep.echelle, x1: mo.bbox.x1 / prep.echelle, y1: mo.bbox.y1 / prep.echelle });
                  });
                  if (!txt) return;
                  lignes.push(txt);
                  pos += txt.length + 1;
                });
                if (lignes.length > debutPara) paragraphes.push(lignes.length - 1);
              });
            });
            // Lignes d'un même paragraphe reliées par une espace, paragraphes séparés par un retour à la ligne
            var texte = lignes.length ? lignes.map(function (l, i) { return l + (i === lignes.length - 1 ? "" : (paragraphes.indexOf(i) !== -1 ? "\n" : " ")); }).join("") : String(r.data.text || "").trim();
            if (!texte) { URL.revokeObjectURL(prep.url); return; }
            if (morceaux.length) decalage += 2;
            mots.forEach(function (mo) { mo.d += decalage; mo.f += decalage; mo.ligne = k + ":" + mo.ligne; });
            morceaux.push(texte); decalage += texte.length;
            images.push({ url: prep.url, w: prep.w, h: prep.h, mots: mots });
          }, function (err) { URL.revokeObjectURL(prep.url); throw err; });
        });
      });
    }, Promise.resolve()).then(function () {
      OCR.suivi = null;
      return { texte: morceaux.join("\n\n"), images: images };
    }, function (err) { OCR.suivi = null; throw err; });
  }

  function libererImages(anciennes, gardees) {
    (anciennes || []).forEach(function (im) {
      if (!gardees || gardees.indexOf(im) === -1) { try { URL.revokeObjectURL(im.url); } catch (e) { /* rien */ } }
    });
  }

  /* Discussion WhatsApp exportée (.txt) : on retire dates et heures */
  function nettoyerDiscussion(t) {
    return String(t).split(/\r?\n/).map(function (l) {
      return l.replace(/^‎?\[?\d{1,2}[\/.]\d{1,2}[\/.]\d{2,4},?\s+\d{1,2}:\d{2}(?::\d{2})?(?:\s?[AaPp]\.?[Mm]\.?)?\]?\s*(?:-\s*)?/, "");
    }).filter(function (l) {
      return l.trim() && !/(chiffrés de bout en bout|end-to-end encrypted|médias omis|media omitted)/i.test(l);
    }).join("\n");
  }
  function estImage(f) { return /^image\//.test(f.type) || /\.(png|jpe?g|webp|gif|bmp)$/i.test(f.name); }
  function estTexte(f) { return /^text\//.test(f.type) || /\.txt$/i.test(f.name); }
  function lireFichierTexte(f) {
    return new Promise(function (ok, ko) { var r = new FileReader(); r.onload = function () { ok(String(r.result || "")); }; r.onerror = ko; r.readAsText(f); });
  }

  /* Encadrés sur l'image, alignés sur les passages surlignés dans le texte */
  function boitesImage(im, res) {
    var numeros = {}, marques = [], boites = [];
    res.signaux.forEach(function (s, k) { numeros[s.id] = { n: k + 1, poids: Math.min(3, s.poids) }; });
    (function aplatir(l) { l.forEach(function (mk) { marques.push(mk); if (mk.enfants) aplatir(mk.enfants); }); })(res.marques);
    marques.forEach(function (mk) {
      var info = mk.bon ? null : numeros[mk.id], parLigne = {}, ordre = [];
      im.mots.forEach(function (mo) {
        if (mo.d < mk.f && mo.f > mk.d) { if (!parLigne[mo.ligne]) { parLigne[mo.ligne] = []; ordre.push(mo.ligne); } parLigne[mo.ligne].push(mo); }
      });
      ordre.forEach(function (cle, j) {
        var l = parLigne[cle];
        var x0 = Math.min.apply(null, l.map(function (m) { return m.x0; })), y0 = Math.min.apply(null, l.map(function (m) { return m.y0; }));
        var x1 = Math.max.apply(null, l.map(function (m) { return m.x1; })), y1 = Math.max.apply(null, l.map(function (m) { return m.y1; }));
        var marge = Math.max(3, (y1 - y0) * .22);
        boites.push({ x: x0 - marge, y: y0 - marge, w: x1 - x0 + 2 * marge, h: y1 - y0 + 2 * marge, bon: !!mk.bon, poids: info ? info.poids : 0, n: j === 0 && info ? info.n : 0 });
      });
    });
    return boites;
  }

  function imageAnalyseeHTML(im, res) {
    var V = O().verifier, b = boitesImage(im, res), W = im.w, H = im.h, r = Math.max(12, W * .024);
    var svg = b.map(function (x, i) {
      var classe = x.bon ? "boite-bon" : "poids-" + x.poids;
      var html = '<rect class="boite ' + classe + '" style="--i:' + i + '" x="' + x.x.toFixed(1) + '" y="' + x.y.toFixed(1) + '" width="' + x.w.toFixed(1) + '" height="' + x.h.toFixed(1) + '" rx="' + (r * .35).toFixed(1) + '"/>';
      if (x.n) {
        var cx = Math.min(W - r - 2, x.x + x.w), cy = Math.max(r + 2, x.y);
        html += '<g class="boite-num ' + classe + '" style="--i:' + i + '"><circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + r.toFixed(1) + '"/>' +
          '<text x="' + cx.toFixed(1) + '" y="' + cy.toFixed(1) + '" dy=".36em" text-anchor="middle" font-size="' + (r * 1.15).toFixed(1) + '">' + x.n + "</text></g>";
      }
      return html;
    }).join("");
    return '<figure class="capture-analysee"><div class="capture-cadre"><img src="' + im.url + '" alt="' + esc(typo(V.capture_alt)) + '" width="' + W + '" height="' + H + '">' +
      '<svg viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="none" aria-hidden="true">' + svg + "</svg></div></figure>";
  }

  function capturesHTML(images, res) {
    if (!images || !images.length) return "";
    var V = O().verifier;
    return '<div class="captures"><h3>' + ic("image", "fill") + h(V.capture_titre) + '</h3><div class="captures-liste' + (images.length > 1 ? " plusieurs" : "") + '">' +
      images.map(function (im) { return imageAnalyseeHTML(im, res); }).join("") + "</div></div>";
  }

  function lectureHTML(k, total, p) {
    var V = O().verifier;
    return '<div class="ocr-carte" role="status"><span class="ocr-icone">' + ic("image", "duotone") + "</span><div>" +
      '<p class="ocr-titre">' + h(total > 1 ? remplir(V.lecture_n, { n: k + 1, total: total }) : V.lecture) + "</p>" +
      '<div class="ocr-barre"><span style="width:' + Math.round((k + p) / total * 100) + '%"></span></div>' +
      '<p class="ocr-aide">' + h(V.lecture_premiere) + "</p></div></div>";
  }

  function ongletsVerif(actif) {
    var V = O().verifier;
    return '<nav class="onglets-verif" aria-label="' + esc(typo(V.titre)) + '">' +
      '<a href="#verifier"' + (actif === "message" ? ' aria-current="page"' : "") + ">" + ic("message") + h(V.onglet_message) + "</a>" +
      '<a href="#assistant"' + (actif === "situation" ? ' aria-current="page"' : "") + ">" + ic("discussion") + h(V.onglet_situation) + "</a></nav>";
  }

  /* Fichiers ajoutés dans « Vérifie un message » */
  function fichiersVerif(liste) {
    var V = O().verifier, fichiers = [].slice.call(liste || []).slice(0, 4);
    var err = main.querySelector("[data-verif-erreur]"), zone = main.querySelector("[data-verif-resultat]");
    var texte = fichiers.filter(estTexte)[0], images = fichiers.filter(estImage);
    err.hidden = true;
    if (texte) {
      lireFichierTexte(texte).then(function (t) {
        var propre = nettoyerDiscussion(t);
        annoncer(remplir(V.fichier_txt, { n: propre.split("\n").length }), { icone: "fichier" });
        lancerVerif(propre, []);
      });
      return;
    }
    if (!images.length) { err.textContent = typo(V.fichier_inconnu); err.hidden = false; return; }
    zone.innerHTML = lectureHTML(0, images.length, 0);
    faireDefiler(zone.firstChild);
    lireImages(images, function (k, p) {
      var carte = zone.querySelector(".ocr-carte");
      if (carte) carte.outerHTML = lectureHTML(k, images.length, p);
    }).then(function (lu) {
      if (!document.body.contains(zone)) { libererImages(lu.images); return; }
      if (!lu.texte.trim()) { zone.innerHTML = ""; err.textContent = typo(V.lecture_vide); err.hidden = false; return; }
      lancerVerif(lu.texte, lu.images);
    }, function () {
      zone.innerHTML = ""; err.textContent = typo(V.lecture_echec); err.hidden = false;
    });
  }

  /* ------------------------------------------------------------------ */
  /* Assistant « Raconte ta situation »                                 */
  /* ------------------------------------------------------------------ */
  var LECON_TYPE = {
    chantage: "reseaux-2", faux_service: "mobile-money-2", vol_code: "codes-1", faux_emploi: "emploi-1", argent_facile: "mobile-money-3",
    faux_proche: "whatsapp-3", compte_pirate: "whatsapp-3", faux_transfert: "mobile-money-1", faux_profil: "reseaux-1",
    frais_avance: "emploi-1", vol_identite: "reseaux-3", demande_argent: "whatsapp-3"
  };
  function As() { return O().assistant; }

  function nouvelleDiscussion() {
    var A = As();
    etat.assist = { etape: 0, reponses: {}, bulles: [], selection: [], message: null, mode: "", attente: false, vus: 0, reperes: [], fini: false };
    etat.assist.bulles.push({ de: "bot", html: h(A.bonjour) });
    poserQuestion();
  }
  function poserQuestion() {
    var A = As(), s = etat.assist;
    var texte = s.etape < A.questions.length ? A.questions[s.etape].texte : A.message_question;
    s.bulles.push({ de: "bot", html: h(texte) });
    s.reperes[s.etape] = s.bulles.length;
  }

  function bullesHTML() {
    var s = etat.assist;
    var html = s.bulles.map(function (b, i) {
      var nouveau = i >= s.vus ? " nouveau" : "";
      if (b.de === "moi") return '<div class="ligne-moi' + nouveau + '"><div class="bulle-chat de-moi">' + b.html + "</div></div>";
      return '<div class="ligne-bot' + nouveau + (b.large ? " large" : "") + '"><span class="avatar-bot" aria-hidden="true">' + logoSVG() + '</span><div class="bulle-chat de-bot">' +
        '<span class="visuellement-cache">' + esc(As().bot) + " : </span>" + b.html + "</div></div>";
    }).join("");
    if (s.attente) html += '<div class="ligne-bot nouveau"><span class="avatar-bot" aria-hidden="true">' + logoSVG() + '</span><div class="bulle-chat de-bot ecrit-chat" aria-hidden="true"><i></i><i></i><i></i></div></div>';
    return html;
  }

  function saisieHTML() {
    var A = As(), s = etat.assist, V = O().verifier;
    if (s.attente) return "";
    if (s.fini) return '<div class="saisie-actions"><button type="button" class="bouton" data-assist-recommencer>' + ic("rejouer") + h(A.recommencer) + "</button></div>";
    var revenir = s.etape > 0 ? '<button type="button" class="bouton-texte" data-assist-revenir>' + ic("revenir") + h(A.revenir) + "</button>" : "<span></span>";
    if (s.etape < A.questions.length) {
      var q = A.questions[s.etape];
      return '<div class="choix-chat" role="group" aria-label="' + esc(typo(q.texte)) + '">' + q.choix.map(function (c) {
        var actif = s.selection.indexOf(c.id) !== -1;
        return '<button type="button" class="puce-choix" data-assist-choix="' + c.id + '"' + (q.multiple ? ' aria-pressed="' + actif + '"' : "") + ">" +
          (q.multiple ? '<span class="case">' + ic("coche") + "</span>" : "") + h(c.texte) + "</button>";
      }).join("") + "</div>" +
        '<div class="saisie-actions">' + revenir + (q.multiple ? '<button type="button" class="bouton" data-assist-valider' + (s.selection.length ? "" : " disabled") + ">" + h(A.valider) + ic("fleche") + "</button>" : "") + "</div>";
    }
    if (s.mode === "ecrire") {
      var peutColler = !!(navigator.clipboard && navigator.clipboard.readText);
      return '<div class="saisie-message"><label class="visuellement-cache" for="assist-texte">' + h(A.message_placeholder) + "</label>" +
        '<textarea id="assist-texte" data-assist-texte rows="4" placeholder="' + esc(typo(A.message_placeholder)) + '"></textarea>' +
        '<div class="saisie-actions">' + (peutColler ? '<button type="button" class="bouton-oeil" data-assist-coller>' + ic("coller") + "<span>" + h(V.coller) + "</span></button>" : "<span></span>") +
        '<button type="button" class="bouton" data-assist-envoyer>' + ic("envoyer", "fill") + h(A.message_envoyer) + "</button></div></div>";
    }
    return '<div class="choix-chat">' +
      '<button type="button" class="puce-choix" data-assist-ecrire>' + ic("message") + h(A.message_ecrire) + "</button>" +
      '<label class="puce-choix puce-fichier">' + ic("image") + h(A.message_capture) + '<input type="file" accept="image/*" multiple data-assist-fichier class="visuellement-cache"></label>' +
      '<button type="button" class="puce-choix" data-assist-passer>' + h(A.message_passer) + ic("fleche") + "</button></div>" +
      '<div class="saisie-actions">' + revenir + "</div>";
  }

  pages.assistant = function () {
    var A = As();
    if (!etat.assist) nouvelleDiscussion();
    etat.assist.vus = 0;
    var html = pageTete('<div class="page-tete-ligne"><span class="pastille">' + ic("discussion", "duotone") + '</span><div><h1 tabindex="-1">' + h(A.titre) + "</h1><p>" + h(A.intro) + "</p></div></div>", "", "--c:#D21034;--ct:#A30B28") +
      '<div class="page"><div class="conteneur"><div class="verif">' + ongletsVerif("situation") +
      '<div class="chat"><div class="chat-fil" role="log" aria-live="polite" data-chat-fil>' + bullesHTML() + "</div>" +
      '<div class="chat-saisie" data-chat-saisie>' + saisieHTML() + "</div></div>" +
      '<p class="prive">' + ic("cadenas", "fill") + h(A.prive) + "</p></div></div></div>";
    etat.assist.vus = etat.assist.bulles.length;
    return html;
  };

  function majChat(focus) {
    var fil = main.querySelector("[data-chat-fil]"), saisie = main.querySelector("[data-chat-saisie]");
    if (!fil) return;
    fil.innerHTML = bullesHTML();
    saisie.innerHTML = saisieHTML();
    etat.assist.vus = etat.assist.bulles.length;
    var dernier = fil.lastElementChild;
    if (dernier) {
      var haut = dernier.getBoundingClientRect().top, bas = saisie.getBoundingClientRect().bottom;
      var marge = (document.querySelector(".entete") || { offsetHeight: 0 }).offsetHeight + 12;
      if (bas > window.innerHeight - 20 || haut < marge) {
        var cible = Math.min(window.scrollY + haut - marge, window.scrollY + bas - window.innerHeight + 90);
        window.scrollTo({ top: Math.max(0, cible), behavior: CALME ? "auto" : "smooth" });
      }
    }
    if (focus !== false) {
      var premier = saisie.querySelector("textarea, button, label.puce-fichier input");
      if (premier && premier.tagName === "TEXTAREA") premier.focus({ preventScroll: true });
    }
  }

  function botEcrit(html, apres, large) {
    var s = etat.assist;
    s.attente = true; majChat(false);
    setTimeout(function () {
      if (etat.assist !== s) return;
      [].concat(html).forEach(function (x) { s.bulles.push({ de: "bot", html: x, large: large }); });
      s.attente = false;
      if (apres) apres();
      majChat();
    }, CALME ? 0 : 700);
  }

  function texteChoix(q, id) { return (q.choix.filter(function (c) { return c.id === id; })[0] || {}).texte || id; }

  function repondreAssistant(ids) {
    var A = As(), s = etat.assist, q = A.questions[s.etape];
    s.reponses[q.id] = ids;
    s.bulles.push({ de: "moi", html: ids.map(function (id) { return h(texteChoix(q, id)); }).join("<br>") });
    s.etape++; s.selection = [];
    botEcrit([], poserQuestion);
  }

  function choisirAssistant(id) {
    var A = As(), s = etat.assist, q = A.questions[s.etape];
    if (!q) return;
    if (!q.multiple) { repondreAssistant([id]); return; }
    var exclusif = id === "rien" || id === "non";
    var i = s.selection.indexOf(id);
    if (i !== -1) s.selection.splice(i, 1);
    else if (exclusif) s.selection = [id];
    else s.selection = s.selection.filter(function (x) { return x !== "rien" && x !== "non"; }).concat(id);
    var saisie = main.querySelector("[data-chat-saisie]");
    saisie.innerHTML = saisieHTML();
    var b = saisie.querySelector('[data-assist-choix="' + id + '"]');
    if (b) b.focus({ preventScroll: true });
  }

  function revenirAssistant() {
    var A = As(), s = etat.assist;
    if (s.etape <= 0) return;
    var cible = s.etape - 1;
    s.bulles.length = s.reperes[cible];
    A.questions.forEach(function (q, i) { if (i >= cible) delete s.reponses[q.id]; });
    s.etape = cible; s.selection = []; s.message = null; s.mode = ""; s.fini = false;
    s.vus = s.bulles.length;
    majChat();
  }

  function resumeSignaux(res) {
    var A = As();
    if (!res.signaux.length) return h(A.message_rien);
    var liste = res.signaux.map(function (sg) { return infoSignal(sg.id).titre.toLowerCase(); }).join(", ");
    return h(pl(A, "message_signaux", res.signaux.length, { n: res.signaux.length, liste: liste }));
  }

  function messageAssistant(texte, images) {
    var s = etat.assist, res = analyserMessage(texte);
    s.message = { texte: texte, res: res, images: images || [] };
    var reponse = [resumeSignaux(res)];
    if (images && images.length) reponse.push(capturesHTML(images, res));
    else if (res.marques.length) reponse.push('<p class="message-cite">' + texteSurligne(texte, res) + "</p>");
    botEcrit(reponse, conclureAssistant, !!(images && images.length));
  }

  function evaluerSituation() {
    var s = etat.assist, r = s.reponses;
    var qui = (r.qui || [])[0], dem = r.demande || [], pr = r.pression || [], fait = r.fait || [];
    function a(l, x) { return l.indexOf(x) !== -1; }
    var POIDS = { code: 5, chantage: 5, frais: 4, investir: 4, lien: 3, argent: 2, infos: 2 }, score = 0;
    dem.forEach(function (d) { score += POIDS[d] || 0; });
    var demande = dem.length && !a(dem, "rien");
    if (qui === "inconnu" && demande) score += 1;
    if (qui === "proche" && a(dem, "argent")) score += 2;
    if (qui === "service" && demande) score += 2;
    if (qui === "emploi" && (a(dem, "frais") || a(dem, "argent"))) score += 2;
    if (qui === "internet" && (a(dem, "argent") || a(dem, "infos") || a(dem, "investir"))) score += 2;
    if (a(pr, "presse")) score += 1;
    if (a(pr, "secret")) score += 2;
    if (a(pr, "menace")) score += 2;
    if (s.message) score += Math.min(5, s.message.res.total);
    var type = (a(dem, "chantage") || (a(pr, "menace") && a(dem, "infos"))) ? "chantage"
      : (qui === "service" && (a(dem, "code") || a(dem, "lien") || a(dem, "infos"))) ? "faux_service"
      : a(dem, "code") ? "vol_code"
      : (qui === "emploi" && demande) ? "faux_emploi"
      : a(dem, "investir") ? "argent_facile"
      : (qui === "proche" && a(dem, "argent")) ? "faux_proche"
      : (qui === "connu" && a(dem, "argent")) ? "compte_pirate"
      : (qui === "inconnu" && a(dem, "argent")) ? "faux_transfert"
      : (qui === "internet" && (a(dem, "argent") || a(dem, "infos"))) ? "faux_profil"
      : a(dem, "frais") ? "frais_avance"
      : a(dem, "lien") ? "lien_piege"
      : a(dem, "infos") ? "vol_identite"
      : a(dem, "argent") ? "demande_argent"
      : "a_surveiller";
    var lecon = LECON_TYPE[type];
    if (type === "vol_code" && (r.canal || [])[0] === "whatsapp") lecon = "whatsapp-1";
    return { niveau: score >= 5 ? 3 : score >= 3 ? 2 : score >= 1 ? 1 : 0, type: type, lecon: lecon, urgent: ["paye", "code", "lien", "infos"].filter(function (f) { return fait.indexOf(f) !== -1; }) };
  }

  function resultatAssistantHTML(ev) {
    var A = As(), niv = A.niveaux[ev.niveau], typ = A.types.filter(function (x) { return x.id === ev.type; })[0];
    var ICONES_NIV = ["valide", "info", "alerte", "stop2"], lecon = lienLecon(ev.lecon);
    var urgent = [];
    ev.urgent.forEach(function (u) { (A.actions[u] || []).forEach(function (x) { if (urgent.indexOf(x) === -1) urgent.push(x); }); });
    var tel = CFG.cert.telephone.replace(/\s/g, "");
    return '<div class="resultat-chat niveau-v' + ev.niveau + '">' +
      '<div class="verdict-v"><span class="verdict-icone">' + ic(ICONES_NIV[ev.niveau], "fill") + "</span>" +
      '<div class="verdict-texte"><h2>' + h(niv.titre) + "</h2><p>" + h(niv.texte) + "</p></div>" +
      '<div class="thermo" aria-hidden="true">' + [0, 1, 2, 3].map(function (k) { return '<span class="' + (k <= ev.niveau ? "allume" : "") + '" style="--i:' + k + '"></span>'; }).join("") + "</div></div>" +
      '<div class="type-arnaque"><p class="surtitre">' + h(A.type_titre) + "</p><h3>" + h(typ.titre) + "</h3><p>" + h(typ.texte) + "</p>" +
      (ev.type === "lien_piege" ? '<a class="signal-lien" href="#liens">' + ic("navigateur") + h(O().verifier.jeu_liens) + "</a>"
        : (lecon ? '<a class="signal-lien" href="' + lecon.href + '">' + ic("livre") + h(A.lecon) + " : " + h(lecon.titre) + "</a>" : "")) +
      (ev.type === "faux_emploi" ? ' <a class="signal-lien" href="' + esc(CFG.arnako) + '" target="_blank" rel="noopener">' + ic("mallette") + "ArnaKO</a>" : "") + "</div>" +
      (urgent.length ? '<div class="plan plan-urgent"><h3>' + ic("secours", "fill") + h(A.urgent_titre) + "</h3><ol>" + urgent.map(function (x) { return "<li>" + h(x) + "</li>"; }).join("") + "</ol></div>" : "") +
      '<div class="plan"><h3>' + ic("bouclier", "fill") + h(A.plan_titre) + "</h3><ul>" + A.actions.prudence.map(function (x) { return "<li>" + ic("coche") + "<span>" + h(x) + "</span></li>"; }).join("") + "</ul></div>" +
      '<p class="cert-ligne">' + h(remplir(A.cert, { tel: CFG.cert.telephone })) + "</p>" +
      '<div class="actions"><a class="bouton bouton-jaune" href="tel:' + tel + '">' + ic("telephone", "fill") + h(A.appeler) + "</a>" +
      '<a class="bouton bouton-second" href="#signaler">' + ic("bouee") + h(A.aide) + "</a></div></div>";
  }

  function conclureAssistant() {
    var A = As(), s = etat.assist, ev = evaluerSituation();
    s.mode = "";
    botEcrit([h(A.reflexion), resultatAssistantHTML(ev)], function () {
      s.fini = true;
      s.bulles[s.bulles.length - 1].large = true;
    });
  }

  function passerMessage() {
    var A = As(), s = etat.assist;
    s.bulles.push({ de: "moi", html: h(A.message_passer) });
    conclureAssistant();
  }

  function envoyerMessageAssistant() {
    var champ = main.querySelector("[data-assist-texte]");
    var texte = champ ? champ.value.slice(0, 4000) : "";
    if (!texte.trim()) { if (champ) champ.focus(); return; }
    var s = etat.assist;
    s.bulles.push({ de: "moi", html: '<span class="message-envoye">' + esc(texte) + "</span>" });
    s.mode = "";
    messageAssistant(texte);
  }

  function capturesAssistant(liste) {
    var A = As(), V = O().verifier, s = etat.assist, images = [].slice.call(liste || []).filter(estImage).slice(0, 4);
    if (!images.length) return;
    s.bulles.push({ de: "moi", html: h(A.message_capture_moi) + '<span class="miniatures">' + images.map(function () { return ic("image", "fill"); }).join("") + "</span>" });
    s.attente = true; majChat(false);
    var fil = main.querySelector("[data-chat-fil]");
    var bulle = fil.lastElementChild.querySelector(".bulle-chat");
    bulle.classList.remove("ecrit-chat"); bulle.classList.add("bulle-lecture");
    bulle.innerHTML = lectureHTML(0, images.length, 0);
    lireImages(images, function (k, p) {
      var carte = main.querySelector("[data-chat-fil] .ocr-carte");
      if (carte) carte.outerHTML = lectureHTML(k, images.length, p);
    }).then(function (lu) {
      if (etat.assist !== s) { libererImages(lu.images); return; }
      s.attente = false;
      if (!lu.texte.trim()) { s.bulles.push({ de: "bot", html: h(V.lecture_vide) }); majChat(); return; }
      messageAssistant(lu.texte, lu.images);
    }, function () {
      s.attente = false;
      s.bulles.push({ de: "bot", html: h(V.lecture_echec) });
      majChat();
    });
  }

  /* ------------------------------------------------------------------ */
  /* Attestation de fin de parcours                                     */
  /* ------------------------------------------------------------------ */
  function attestationPrete() { return modulesComplets().length === C.modules.length; }
  function dateLongue(iso) {
    var A = O().attestation, p = String(iso).split("-");
    var j = parseInt(p[2], 10);
    return (j === 1 ? A.premier_jour : j) + " " + A.mois[parseInt(p[1], 10) - 1] + " " + p[0];
  }
  function aujourdhui() {
    var d = new Date();
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
  function codeAttestation(nom, date) {
    var x = 2166136261, s = nom + "|" + date;
    for (var i = 0; i < s.length; i++) { x ^= s.charCodeAt(i); x = Math.imul(x, 16777619) >>> 0; }
    return "CG-" + ("000000" + x.toString(36).toUpperCase()).slice(-6);
  }
  function scoreQuiz() {
    var s = 0, tot = 0;
    C.modules.forEach(function (m) { var q = etat.prog.quiz[m.id]; if (q) { s += q.score; tot += q.total; } });
    return { score: s, total: tot };
  }

  function blocAttestationHTML() {
    var A = O().attestation, pret = attestationPrete();
    return '<div class="bloc-attestation' + (pret ? " pret" : "") + '"' + revele(0) + ">" +
      '<span class="bloc-attestation-icone">' + ic(pret ? "attestation" : "cadenas", pret ? "duotone" : "fill") + "</span>" +
      "<div><h3>" + h(A.bloc_titre) + "</h3><p>" + h(pret ? A.bloc_pret : A.bloc_verrou) + "</p></div>" +
      '<a class="bouton' + (pret ? " bouton-jaune" : " bouton-second") + '" href="#attestation">' + h(A.bloc_bouton) + ic("fleche") + "</a></div>";
  }

  pages.attestation = function () {
    var A = O().attestation, a = avancement();
    var tete = pageTete(ariane("#lecons", t("accueil_lecons_titre")) +
      '<div class="page-tete-ligne"><span class="pastille">' + ic("attestation", "duotone") + '</span><div><h1 tabindex="-1">' + h(A.titre) + "</h1><p>" + h(A.intro) + "</p></div></div>", "", "--c:#FFCE00;--ct:#7A5A00");
    var html = tete + '<div class="page"><div class="conteneur"><div class="attestation-page">';
    if (!attestationPrete()) {
      var reste = a.total - a.faits, suite = prochaineEtape();
      return html + '<div class="attestation-verrou"><div class="maquette" aria-hidden="true">' +
        '<span class="maquette-bande"></span><span class="maquette-ligne l1"></span><span class="maquette-ligne l2"></span><span class="maquette-nom"></span>' +
        '<span class="maquette-ligne l3"></span><span class="maquette-ligne l4"></span><span class="maquette-medailles"><i></i><i></i><i></i><i></i><i></i></span></div>' +
        '<div class="verrou-carte"><span class="verrou-icone">' + ic("cadenas", "fill") + "</span>" +
        "<h2>" + h(pl(A, "verrou_titre", reste, { n: reste })) + "</h2>" +
        "<p>" + h(A.verrou_texte) + "</p>" + bandeHTML("bande-grande") +
        '<p class="progression-chiffre">' + h(tp("progression_texte", a.faits, { n: a.faits, total: a.total })) + "</p>" +
        (suite ? '<a class="bouton" href="' + suite.href + '">' + h(A.continuer) + " : " + h(suite.titre) + ic("fleche") + "</a>" : "") +
        "</div></div></div></div></div>";
    }
    var att = etat.prog.attestation || {};
    if (!att.nom || etat.attModif) {
      return html + '<form class="attestation-form" data-attestation-form novalidate><span class="bravo-icone">' + ic("trophee", "duotone") + "</span>" +
        "<h2>" + h(A.pret_titre) + "</h2><p>" + h(A.pret_texte) + "</p>" +
        '<label for="att-nom">' + h(A.nom_label) + "</label>" +
        '<input id="att-nom" data-att-nom type="text" maxlength="48" autocomplete="name" placeholder="' + esc(typo(A.nom_exemple)) + '" value="' + esc(att.nom || "") + '">' +
        '<p class="verif-erreur" data-att-erreur role="alert" hidden></p>' +
        '<button type="submit" class="bouton bouton-grand">' + ic("attestation", "fill") + h(A.creer) + "</button></form></div></div></div>";
    }
    return html + '<figure class="attestation-apercu"><div class="attestation-cadre" data-attestation-zone><span class="chargement" aria-hidden="true"></span></div>' +
      '<figcaption class="visuellement-cache">' + h(A.apercu) + "</figcaption></figure>" +
      '<div class="actions attestation-actions"><a class="bouton bouton-jaune" data-att-telecharger download="attestation-cybergbe.png" href="#attestation" aria-disabled="true">' + ic("telecharger") + h(A.telecharger) + "</a>" +
      '<button type="button" class="bouton" data-att-partager hidden>' + ic("partager", "fill") + h(A.partager) + "</button>" +
      '<button type="button" class="bouton bouton-second" data-att-modifier>' + ic("crayon") + h(A.modifier) + "</button></div>" +
      partageHTML(A.partage_texte) + "</div></div></div>";
  };

  function cheminsIcone(nom, style) {
    var src = (ICONES[style] || ICONES.bold)[nom] || "", r = /\sd="([^"]+)"/g, m, l = [];
    while ((m = r.exec(src))) l.push(m[1]);
    return l;
  }
  function lignes(ctx, texte, largeur) {
    var mots = texte.split(" "), res = [], cur = "";
    mots.forEach(function (w) {
      var essai = cur ? cur + " " + w : w;
      if (ctx.measureText(essai).width > largeur && cur) { res.push(cur); cur = w; } else cur = essai;
    });
    if (cur) res.push(cur);
    return res;
  }

  function dessinerAttestation(nom, date, fini) {
    var A = O().attestation, W = 2000, H = 1414;
    var toile = document.createElement("canvas");
    toile.width = W; toile.height = H;
    var ctx = toile.getContext("2d");
    var titre = typo(A.doc_titre), nomT = nom.trim();
    var polices = document.fonts && document.fonts.load ? Promise.all([
      document.fonts.load('700 100px "Unbounded"', titre + nomT + CFG.nomSite),
      document.fonts.load('600 40px "Unbounded"', nomT),
      document.fonts.load('400 40px "Onest"', nomT),
      document.fonts.load('500 40px "Onest"'),
      document.fonts.load('700 40px "Onest"')
    ]).catch(function () {}) : Promise.resolve();
    polices.then(function () {
      chargerQR(function () {
        var ok = true;
        try { tracerAttestation(ctx, W, H, nomT, date); } catch (e) { ok = false; }
        if (!ok) return;
        if (toile.toBlob) toile.toBlob(function (b) { fini(b, null); }, "image/png");
        else fini(null, toile.toDataURL("image/png"));
      });
    });
  }

  function tracerAttestation(ctx, W, H, nom, date) {
    var A = O().attestation, VERT = "#006A4E", NUIT = "#00261C", GRIS = "#4A5E55", JAUNE = "#FFCE00", ROUGE = "#D21034";
    var TITRE = '"Unbounded", "Onest", sans-serif', TEXTE = '"Onest", "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = "#FFFFFF"; ctx.fillRect(0, 0, W, H);
    // Cadre : bande vert nuit, puis liseré tissé jaune / rouge / vert
    ctx.fillStyle = NUIT; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#FFFFFF"; ctx.fillRect(34, 34, W - 68, H - 68);
    var motif = [JAUNE, VERT, JAUNE, ROUGE];
    for (var x = 34, k = 0; x < W - 34; x += 46, k++) {
      ctx.fillStyle = motif[k % 4];
      ctx.fillRect(x, 34, Math.min(46, W - 34 - x), 12); ctx.fillRect(x, H - 46, Math.min(46, W - 34 - x), 12);
    }
    for (var y = 46, k2 = 0; y < H - 46; y += 46, k2++) {
      ctx.fillStyle = motif[(k2 + 2) % 4];
      ctx.fillRect(34, y, 12, Math.min(46, H - 46 - y)); ctx.fillRect(W - 46, y, 12, Math.min(46, H - 46 - y));
    }
    // Bande tissée verticale : un groupe de fils par thème
    var bx = 120, bw = 92, by = 120, bh = H - 240, ecart = 10, gh = (bh - ecart * (C.modules.length - 1)) / C.modules.length;
    C.modules.forEach(function (m, i) {
      var c = CFG.couleurs[m.id] || VERT, gy = by + i * (gh + ecart), fils = m.lecons.length + 1, fh = (gh - (fils - 1) * 3) / fils;
      for (var f = 0; f < fils; f++) {
        var fy = gy + f * (fh + 3);
        ctx.fillStyle = c; ctx.fillRect(bx, fy, bw, fh);
        ctx.fillStyle = "rgba(0,0,0,.2)";
        if (f === fils - 1) { for (var yy = fy; yy < fy + fh; yy += 7) ctx.fillRect(bx, yy, bw, 2); }
        else { for (var xx = bx; xx < bx + bw; xx += 9) ctx.fillRect(xx, fy, 2, fh); }
        ctx.fillStyle = "rgba(255,255,255,.18)"; ctx.fillRect(bx, fy, bw, Math.min(6, fh));
      }
    });
    // Logo et nom du site
    var gx = 290;
    ctx.save(); ctx.translate(gx, 120); ctx.scale(2.3, 2.3);
    ctx.fillStyle = VERT; ctx.fill(new Path2D("M20 1.5 37 7.6v13.2c0 10.4-7.1 18.6-17 21.7C10.1 39.4 3 31.2 3 20.8V7.6L20 1.5z"));
    ctx.fillStyle = "#00543E"; ctx.fill(new Path2D("M20 1.5 37 7.6v13.2c0 10.4-7.1 18.6-17 21.7V1.5z"));
    ctx.fillStyle = JAUNE; ctx.fill(new Path2D("m20 11.2 2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L20 11.2z"));
    ctx.restore();
    ctx.fillStyle = NUIT; ctx.textBaseline = "middle"; ctx.font = "700 46px " + TITRE;
    ctx.fillText(CFG.nomSite, gx + 112, 172);
    // Drapeau en haut à droite
    [VERT, JAUNE, ROUGE].forEach(function (c, i) { ctx.fillStyle = c; ctx.fillRect(W - 330 + i * 70, 150, 70, 14); });
    ctx.textBaseline = "alphabetic";
    // Titre
    var tTitre = 92;
    ctx.font = "700 " + tTitre + "px " + TITRE;
    while (ctx.measureText(typo(A.doc_titre)).width > W - gx - 130 && tTitre > 50) { tTitre -= 4; ctx.font = "700 " + tTitre + "px " + TITRE; }
    ctx.fillStyle = NUIT;
    ctx.fillText(typo(A.doc_titre), gx, 380);
    ctx.fillStyle = GRIS; ctx.font = "400 40px " + TEXTE;
    ctx.fillText(typo(remplir(A.doc_certifie, { site: CFG.nomSite })), gx, 470);
    // Nom, ajusté à la largeur, souligné de jaune
    var largeurMax = W - gx - 160, taille = 118;
    ctx.font = "700 " + taille + "px " + TITRE;
    while (ctx.measureText(nom).width > largeurMax && taille > 44) { taille -= 4; ctx.font = "700 " + taille + "px " + TITRE; }
    var ln = ctx.measureText(nom).width, yNom = 620;
    ctx.fillStyle = JAUNE; ctx.fillRect(gx - 6, yNom - taille * 0.2, ln + 12, taille * 0.22);
    ctx.fillStyle = VERT; ctx.fillText(nom, gx, yNom);
    // Texte
    ctx.fillStyle = "#0F231A"; ctx.font = "400 40px " + TEXTE;
    lignes(ctx, typo(A.doc_texte), 1380).forEach(function (l, i) { ctx.fillText(l, gx, 720 + i * 56); });
    // Badges
    ctx.fillStyle = GRIS; ctx.font = "700 30px " + TEXTE;
    ctx.fillText(typo(A.doc_badges), gx, 900);
    var pas = 280;
    C.modules.forEach(function (m, i) {
      var c = CFG.couleurs[m.id] || VERT, cx = gx + 95 + i * pas, cy = 1000;
      ctx.beginPath(); ctx.arc(cx, cy, 64, 0, Math.PI * 2); ctx.fillStyle = c; ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy, 64, 0, Math.PI * 2); ctx.lineWidth = 8; ctx.strokeStyle = "rgba(255,255,255,.55)"; ctx.stroke();
      ctx.save(); ctx.translate(cx - 34, cy - 34); ctx.scale(68 / 256, 68 / 256);
      ctx.fillStyle = texteSur(c);
      cheminsIcone(ICONE_THEME[m.id], "fill").forEach(function (d) { ctx.fill(new Path2D(d)); });
      ctx.restore();
      ctx.fillStyle = NUIT; ctx.font = "500 26px " + TEXTE; ctx.textAlign = "center";
      lignes(ctx, typo(m.badge), 250).slice(0, 2).forEach(function (l, j) { ctx.fillText(l, cx, cy + 110 + j * 34); });
      ctx.textAlign = "left";
    });
    // Date, score, numéro
    var q = scoreQuiz();
    ctx.fillStyle = "#0F231A"; ctx.font = "500 30px " + TEXTE;
    ctx.fillText(typo(remplir(A.doc_date, { date: dateLongue(date) })), gx, 1230);
    ctx.fillStyle = GRIS; ctx.font = "400 28px " + TEXTE;
    ctx.fillText(typo(remplir(A.doc_score, { score: q.score, total: q.total })), gx, 1274);
    ctx.fillText(typo(remplir(A.doc_numero, { code: codeAttestation(nom, date) })), gx + 760, 1230);
    ctx.font = "400 22px " + TEXTE; ctx.fillStyle = "#6B7C74";
    ctx.fillText(typo(remplir(A.doc_note, { site: CFG.nomSite })), gx, 1330);
    // QR code vers le site
    if (window.qrcode) {
      var mq = matriceQR(CFG.siteUrl), n = mq.length, cote = 210, mod = cote / (n + 2), qx = W - 120 - cote, qy = 1040;
      ctx.fillStyle = "#FFFFFF"; ctx.fillRect(qx, qy, cote, cote);
      ctx.fillStyle = NUIT;
      for (var r = 0; r < n; r++) for (var c2 = 0; c2 < n; c2++) if (mq[r][c2]) ctx.fillRect(Math.floor(qx + (c2 + 1) * mod), Math.floor(qy + (r + 1) * mod), Math.ceil(mod), Math.ceil(mod));
      ctx.textAlign = "center"; ctx.fillStyle = GRIS; ctx.font = "500 24px " + TEXTE;
      ctx.fillText(typo(A.doc_qr), qx + cote / 2, qy + cote + 36);
      ctx.font = "700 20px " + TEXTE; ctx.fillStyle = VERT;
      ctx.fillText(adresseCourte(), qx + cote / 2, qy + cote + 66);
      ctx.textAlign = "left";
    }
  }

  function afficherAttestation() {
    var zone = main.querySelector("[data-attestation-zone]");
    var att = etat.prog.attestation;
    if (!zone || !att || !att.nom) return;
    dessinerAttestation(att.nom, att.date, function (blob, dataUrl) {
      if (!document.body.contains(zone)) return;
      var url = blob ? URL.createObjectURL(blob) : dataUrl;
      if (etat.attUrl && etat.attUrl.indexOf("blob:") === 0) { try { URL.revokeObjectURL(etat.attUrl); } catch (e) { /* rien */ } }
      etat.attUrl = url;
      zone.innerHTML = '<img src="' + url + '" alt="' + esc(typo(O().attestation.apercu + " : " + att.nom)) + '" width="2000" height="1414">';
      var lien = main.querySelector("[data-att-telecharger]");
      if (lien) { lien.href = url; lien.removeAttribute("aria-disabled"); }
      var bouton = main.querySelector("[data-att-partager]");
      if (blob && bouton && window.File && navigator.canShare) {
        try {
          var f = new File([blob], "attestation-cybergbe.png", { type: "image/png" });
          if (navigator.canShare({ files: [f] })) { etat.attFichier = f; bouton.hidden = false; }
        } catch (e) { /* partage de fichier indisponible */ }
      }
      if (etat.attNouvelle) { etat.attNouvelle = false; confettis(window.innerWidth / 2, window.innerHeight * .35, 170); }
    });
  }

  function partagerAttestation() {
    var A = O().attestation;
    if (!etat.attFichier || !navigator.share) return;
    var texte = typo(remplir(A.partage_texte, { site: CFG.nomSite, url: CFG.siteUrl }));
    navigator.share({ files: [etat.attFichier], text: texte }).catch(function () { /* annulé */ });
  }

  /* ------------------------------------------------------------------ */
  /* Mode animateur                                                     */
  /* ------------------------------------------------------------------ */
  var PLEIN_ECRAN = !!(document.fullscreenEnabled && document.documentElement.requestFullscreen);

  pages.animer = function () {
    var A = O().animer, s = etat.animer;
    if (s && s.actif) return sceneAnimer();
    var reglage = s || { theme: "", nombre: 10 };
    return pageTete('<div class="page-tete-ligne"><span class="pastille">' + ic("animer", "duotone") + '</span><div><h1 tabindex="-1">' + h(A.titre) + "</h1><p>" + h(A.intro) + "</p></div></div>", "", "--c:#14946A;--ct:#0B6B42") +
      '<div class="page"><div class="conteneur"><div class="animer-grille">' +
      '<section class="animer-comment"' + revele(0) + "><h2>" + h(A.comment_titre) + '</h2><ol class="etapes-animer">' +
      A.comment.map(function (c, i) { return "<li" + revele(i + 1, 90) + "><span>" + h(c) + "</span></li>"; }).join("") + "</ol></section>" +
      '<form class="animer-reglages" data-animer-form' + revele(1) + "><h2>" + h(A.reglages) + "</h2>" +
      '<label for="animer-theme">' + h(A.theme_label) + "</label>" +
      '<div class="select"><select id="animer-theme" name="theme"><option value="">' + h(A.theme_tous) + "</option>" +
      C.modules.map(function (m) { return '<option value="' + m.id + '"' + (reglage.theme === m.id ? " selected" : "") + ">" + h(m.titre) + "</option>"; }).join("") + "</select>" + ic("droite") + "</div>" +
      '<fieldset class="choix-nombre"><legend>' + h(A.nombre_label) + "</legend>" +
      [5, 10, 15].map(function (n) {
        return '<label><input type="radio" name="nombre" value="' + n + '"' + (reglage.nombre === n ? " checked" : "") + "><span>" + n + "</span></label>";
      }).join("") + "</fieldset>" +
      '<button type="submit" class="bouton bouton-grand">' + ic("animer", "fill") + h(A.commencer) + "</button>" +
      '<p class="clavier">' + ic("info") + "<span>" + h(A.clavier) + "</span></p></form></div>" +
      '<div class="bloc-partage bloc-affiche"' + revele(0) + '><span class="bloc-partage-icone">' + ic("imprimer", "duotone") + "</span>" +
      "<div><h2>" + h(A.affiche_titre) + "</h2><p>" + h(A.affiche_texte) + "</p></div>" +
      '<a class="bouton" href="#affiche">' + h(A.affiche_bouton) + ic("fleche") + "</a></div>" +
      "</div></div>";
  };

  function demarrerAnimation(theme, nombre) {
    var liste = C.scenarios.filter(function (s) { return !theme || s.module === theme; }).map(function (s) { return s.id; });
    etat.animer = { actif: true, theme: theme, nombre: nombre, ordre: melanger(liste).slice(0, nombre), i: 0, score: 0, phase: "vote", choix: null };
    rendre();
  }

  function sceneAnimer() {
    var A = O().animer, s = etat.animer, total = s.ordre.length;
    var barre = '<div class="scene-barre"><span class="scene-marque">' + logoSVG() + "<span>" + esc(CFG.nomSite) + "</span></span>" +
      (s.phase !== "bilan" ? '<span class="scene-compteur">' + h(remplir(A.compteur, { n: s.i + 1, total: total })) + "</span>" : "<span></span>") +
      '<span class="scene-boutons">' +
      (PLEIN_ECRAN ? '<button type="button" class="scene-outil" data-animer-plein>' + ic("pleinecran") + '<span class="scene-outil-texte">' + h(A.plein_ecran) + "</span></button>" : "") +
      '<button type="button" class="scene-outil" data-animer-quitter>' + ic("fermer") + '<span class="scene-outil-texte">' + h(A.quitter) + "</span></button></span></div>" +
      '<div class="scene-progres" aria-hidden="true"><span style="width:' + Math.round((s.phase === "bilan" ? 1 : s.i / total) * 100) + '%"></span></div>';
    if (s.phase === "bilan") {
      return '<div class="scene-animer"><h1 class="visuellement-cache" tabindex="-1">' + h(A.titre) + "</h1>" + barre +
        '<div class="scene-corps scene-bilan"><div class="bilan-texte">' +
        '<p class="surtitre">' + h(A.bilan_titre) + "</p>" + etoilesHTML(nbEtoiles(s.score, total)) +
        '<p class="scene-score">' + s.score + "<span>/" + total + "</span></p>" +
        '<p class="scene-grand">' + h(pl(A, "bilan_score", s.score, { n: s.score, total: total })) + "</p>" +
        '<div class="scene-reflexes"><h2>' + h(A.reflexes_titre) + "</h2><ol>" + A.reflexes.map(function (r) { return "<li>" + h(r) + "</li>"; }).join("") + "</ol></div>" +
        '<div class="actions"><button type="button" class="bouton bouton-jaune bouton-grand" data-animer-nouvelle>' + ic("rejouer") + h(A.nouvelle) + "</button>" +
        '<button type="button" class="bouton bouton-clair bouton-grand" data-animer-quitter>' + h(A.quitter) + "</button></div></div>" +
        '<div class="bilan-qr"><div class="qr-cadre" data-qr="' + esc(CFG.siteUrl) + '"></div><p>' + h(A.bilan_texte) + '</p><p class="scene-url">' + esc(adresseCourte()) + "</p></div>" +
        "</div></div>";
    }
    var sc = trouverScenario(s.ordre[s.i]).s;
    var message = '<div class="scene-message" data-canal="' + sc.canal + '">' +
      '<div class="scene-expediteur"><span class="avatar">' + ic(ICONE_CANAL[sc.canal] || "sms", "fill") + "</span><span><strong>" + h(sc.expediteur) + "</strong><span>" + h(t("canal_" + sc.canal)) + "</span></span></div>" +
      (sc.contexte ? '<p class="scene-contexte">' + ic("info", "fill") + "<span>" + h(sc.contexte) + "</span></p>" : "") +
      '<div class="scene-bulles">' + sc.messages.map(function (msg, i) { return '<p class="scene-bulle" style="--i:' + i + '">' + h(msg) + "</p>"; }).join("") + "</div></div>";
    var droite;
    if (s.phase === "vote") {
      droite = '<div class="scene-vote"><p class="scene-question">' + ic("main", "fill") + "<span>" + h(A.vote) + "</span></p>" +
        '<p class="scene-salle">' + h(A.salle_dit) + '</p><div class="scene-choix">' +
        '<button type="button" class="scene-bouton arnaque" data-animer-choix="arnaque">' + ic("alerte", "fill") + "<span>" + h(A.arnaque) + '</span><kbd aria-hidden="true">A</kbd></button>' +
        '<button type="button" class="scene-bouton normal" data-animer-choix="normal">' + ic("valide", "fill") + "<span>" + h(A.normal) + '</span><kbd aria-hidden="true">N</kbd></button></div></div>';
    } else {
      var juste = s.choix === sc.verdict, derniere = s.i + 1 >= total;
      droite = '<div class="scene-revele ' + sc.verdict + (juste ? " juste" : " rate") + '" tabindex="-1">' +
        '<p class="scene-verdict">' + ic(juste ? "trophee" : "alerte", "fill") + "<span>" + h(juste ? A.bien_vu : A.piege) + "</span></p>" +
        '<p class="scene-reponse">' + h(t(sc.verdict === "arnaque" ? "jeu_verdict_arnaque" : "jeu_verdict_normal")) + "</p>" +
        "<p>" + h(sc.explication) + "</p>" +
        '<ul class="indices">' + sc.indices.map(function (x, i) { return '<li style="--i:' + i + '">' + ic(sc.verdict === "arnaque" ? "alerte" : "valide", "fill") + "<span>" + h(x) + "</span></li>"; }).join("") + "</ul>" +
        '<p class="scene-discussion">' + ic("message", "fill") + "<span>" + h(sc.verdict === "arnaque" ? A.discussion_arnaque : A.discussion_normal) + "</span></p>" +
        '<button type="button" class="bouton bouton-jaune bouton-grand" data-animer-suivant>' + h(derniere ? A.bilan : A.suivant) + ic("fleche") + "</button></div>";
    }
    return '<div class="scene-animer"><h1 class="visuellement-cache" tabindex="-1">' + h(A.titre) + "</h1>" + barre +
      '<div class="scene-corps">' + message + droite + "</div></div>";
  }

  function choixAnimer(choix) {
    var s = etat.animer;
    if (!s || !s.actif || s.phase !== "vote") return;
    var sc = trouverScenario(s.ordre[s.i]).s;
    s.choix = choix; s.phase = "revele";
    if (choix === sc.verdict) s.score++;
    rendreScene();
    var bloc = main.querySelector(".scene-revele");
    if (bloc) {
      bloc.focus({ preventScroll: true });
      if (choix === sc.verdict) confettisDepuis(bloc.querySelector(".scene-verdict"), 90);
      else secouer(main.querySelector(".scene-message"));
      if (window.innerWidth < 900) setTimeout(function () { faireDefiler(bloc); }, 100);
    }
  }
  function suivantAnimer() {
    var s = etat.animer;
    if (!s || !s.actif || s.phase !== "revele") return;
    s.i++; s.choix = null;
    s.phase = s.i >= s.ordre.length ? "bilan" : "vote";
    if (s.phase === "bilan") s.i = s.ordre.length - 1;
    rendreScene();
    window.scrollTo(0, 0);
    if (s.phase === "bilan" && s.score / s.ordre.length >= .7) setTimeout(function () { confettis(window.innerWidth / 2, window.innerHeight * .3, 200); }, 300);
  }
  function rendreScene() {
    var sc = main.querySelector(".scene-animer");
    if (!sc) { rendre(true); return; }
    sc.outerHTML = sceneAnimer();
    remplirQR();
    var titre = main.querySelector(".scene-animer h1");
    if (titre && etat.animer.phase !== "revele") titre.focus({ preventScroll: true });
  }
  function quitterAnimer() {
    if (etat.animer) etat.animer.actif = false;
    if (document.fullscreenElement && document.exitFullscreen) { try { document.exitFullscreen(); } catch (e) { /* rien */ } }
    rendre();
  }
  function basculerPleinEcran() {
    if (!PLEIN_ECRAN) return;
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen().catch(function () { /* refusé */ });
    } catch (e) { /* rien */ }
  }

  /* ------------------------------------------------------------------ */
  /* Affiches et cartes à imprimer                                      */
  /* ------------------------------------------------------------------ */
  var ICONES_REGLES = ["codepin", "argent", "billet", "changement"];

  function afficheA4() {
    var F = O().affiche;
    var mots = typo(F.titre_affiche).split(/ (?=[^ ])/);
    var titre = mots.map(function (m, i) { return i === mots.length - 1 ? '<span class="surligne">' + esc(m) + "</span>" : esc(m); }).join(" ");
    return '<div class="a4-affiche">' +
      '<div class="a4-tete"><div class="drapeau-ligne"><span></span><span></span><span></span></div>' +
      '<div class="a4-tete-corps"><p class="a4-marque">' + logoSVG() + "<span>" + esc(CFG.nomSite) + "</span></p>" +
      '<h2 class="a4-titre">' + titre + '</h2><p class="a4-sous-titre">' + h(F.sous_titre) + "</p></div></div>" +
      '<ol class="a4-regles">' + F.regles.map(function (r, i) {
        return '<li><span class="a4-icone">' + ic(ICONES_REGLES[i], "duotone") + "</span><div><h3>" + h(r.titre) + "</h3><p>" + h(r.texte) + "</p></div></li>";
      }).join("") + "</ol>" +
      '<div class="a4-pied"><div class="a4-qr" data-qr="' + esc(CFG.siteUrl) + '"></div>' +
      '<div class="a4-pied-texte"><p>' + h(F.qr_texte) + '</p><p class="a4-url">' + esc(adresseCourte()) + "</p></div></div>" +
      '<p class="a4-cert">' + ic("telephone", "fill") + "<span>" + h(remplir(F.cert, { tel: CFG.cert.telephone })) + "</span></p>" +
      "</div>";
  }
  function cartesA4() {
    var F = O().affiche, carte = '<div class="carte-imp"><div class="carte-imp-texte">' +
      '<p class="carte-imp-marque">' + logoSVG() + "<span>" + esc(CFG.nomSite) + "</span></p>" +
      '<p class="carte-imp-titre">' + h(F.titre_affiche) + "</p><ul>" +
      F.carte_regles.map(function (r) { return "<li>" + ic("coche") + "<span>" + h(r) + "</span></li>"; }).join("") + "</ul></div>" +
      '<div class="carte-imp-qr"><div data-qr="' + esc(CFG.siteUrl) + '"></div><p>' + h(F.carte_qr) + "</p></div></div>";
    var html = '<div class="a4-cartes">';
    for (var i = 0; i < 8; i++) html += carte;
    return html + "</div>";
  }

  pages.affiche = function () {
    var F = O().affiche, format = etat.formatAffiche || "affiche";
    return pageTete(ariane("#animer", O().animer.titre) +
      '<div class="page-tete-ligne"><span class="pastille">' + ic("imprimer", "duotone") + '</span><div><h1 tabindex="-1">' + h(F.titre) + "</h1><p>" + h(F.intro) + "</p></div></div>", "", "--c:#14946A;--ct:#0B6B42") +
      '<div class="page"><div class="conteneur"><div class="affiche-page">' +
      '<div class="affiche-outils"><div class="bascule" role="group" aria-label="' + esc(typo(F.titre)) + '">' +
      [["affiche", F.format_affiche], ["cartes", F.format_cartes]].map(function (f) {
        return '<button type="button" data-format="' + f[0] + '" aria-pressed="' + (format === f[0]) + '">' + h(f[1]) + "</button>";
      }).join("") + "</div>" +
      '<button type="button" class="bouton" data-imprimer>' + ic("imprimer", "fill") + h(F.imprimer) + "</button></div>" +
      '<p class="affiche-aide">' + ic("info") + "<span>" + h(F.imprimer_aide) + "</span></p>" +
      '<div class="feuille-zone" data-feuille-zone><div class="feuille">' + (format === "cartes" ? cartesA4() : afficheA4()) + "</div></div>" +
      "</div></div></div>";
  };

  function ajusterFeuille() {
    var zone = main.querySelector("[data-feuille-zone]");
    if (!zone) return;
    var e = Math.min(1, zone.clientWidth / 794);
    zone.style.setProperty("--echelle", e.toFixed(4));
    zone.style.height = Math.ceil(1123 * e) + "px";
  }
  window.addEventListener("resize", ajusterFeuille);

  /* Bloc « Tu animes un groupe ? » de l'accueil */
  function blocAnimerHTML() {
    var A = O().animer;
    return '<section class="section" style="padding-top:0"><div class="conteneur"><div class="bloc-partage bloc-animer"' + revele(0) + ">" +
      '<span class="bloc-partage-icone">' + ic("tableau", "duotone") + "</span>" +
      "<div><h2>" + h(A.accueil_titre) + "</h2><p>" + h(A.accueil_texte) + "</p></div>" +
      '<div class="partage"><a class="bouton" href="#animer">' + ic("animer", "fill") + h(A.titre) + "</a>" +
      '<a class="bouton bouton-second" href="#affiche">' + ic("imprimer") + h(O().affiche.titre) + "</a></div></div></div></section>";
  }

  /* ================================================================== */
  /* Routeur                                                            */
  /* ================================================================== */
  function route() {
    var ancre = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    var r;
    if (!ancre || ancre === "accueil") return { nom: "accueil", html: pages.accueil() };
    if (ancre === "lecons") return { nom: "lecons", html: pages.lecons() };
    if ((r = /^lecon-(.+)-(\d+)$/.exec(ancre))) return { nom: "lecons", type: "lecon", html: pages.lecon(r[1], r[2]) };
    if ((r = /^quiz-(.+)$/.exec(ancre))) return { nom: "lecons", html: pages.quiz(r[1]) };
    if ((r = /^theme-(.+)$/.exec(ancre))) return { nom: "lecons", html: pages.theme(r[1]) };
    if (ancre === "jeux") return { nom: "jeux", html: pages.jeux() };
    if (ancre === "jeu") return { nom: "jeux", html: pages.jeu() };
    if ((r = /^jeu-(.+)$/.exec(ancre))) return { nom: "jeux", html: pages.jeu(r[1]) };
    if (ancre === "pieges") return { nom: "jeux", html: pages.pieges() };
    if (ancre === "liens") return { nom: "jeux", html: pages.liens() };
    if (ancre === "mot-de-passe") return { nom: "jeux", html: pages.motdepasse() };
    if (ancre === "histoire") return { nom: "jeux", html: pages.histoire() };
    if (ancre === "memo") return { nom: "jeux", html: pages.memo() };
    if (ancre === "verifier") return { nom: "verifier", html: pages.verifier() };
    if (ancre === "assistant") return { nom: "verifier", type: "assistant", html: pages.assistant() };
    if (ancre === "attestation") return { nom: "lecons", type: "attestation", html: pages.attestation() };
    if (ancre === "animer") return { nom: "animer", html: pages.animer() };
    if (ancre === "affiche") return { nom: "affiche", html: pages.affiche() };
    if (ancre === "dictionnaire") return { nom: "dictionnaire", html: pages.dictionnaire() };
    if (ancre === "signaler") return { nom: "signaler", html: pages.signaler() };
    if (ancre === "a-propos") return { nom: "apropos", html: pages.apropos() };
    if (ancre === "mentions") return { nom: "mentions", html: pages.mentions() };
    return { nom: "", html: pages.introuvable() };
  }

  var main = document.getElementById("contenu");

  function rendre(garderFocus) {
    arreterLecture();
    if (!/^#quiz-/.test(location.hash)) etat.quiz = null;
    var r = route();
    etat.route = r.type || r.nom;
    main.innerHTML = r.html;
    rendreCadre(r.nom);
    etat.nouveauFil = null;
    if (!etat.premierRendu && !garderFocus) {
      window.scrollTo(0, 0);
      var titre = main.querySelector("h1");
      if (titre) titre.focus({ preventScroll: true });
    }
    etat.premierRendu = false;
    document.body.setAttribute("data-route", r.type || r.nom || "");
    document.body.classList.toggle("en-scene", !!main.querySelector(".scene-animer"));
    remplirQR();
    ajusterFeuille();
    if (r.type === "attestation") afficherAttestation();
    var h1 = main.querySelector("h1");
    document.title = r.nom === "accueil" || !h1
      ? CFG.nomSite + " : " + typo(t("accueil_titre"))
      : h1.textContent.replace(/\s*FR\s*\(.*\)$/, "") + " | " + CFG.nomSite;
    animerPage();
  }

  function rendreCadre(nomRoute) {
    document.querySelectorAll("[data-nom-site]").forEach(function (el) { el.textContent = CFG.nomSite; });

    // Sélecteur de langue avec curseur glissant (construit une seule fois)
    var zone = document.querySelector("[data-langues]");
    if (!zone.querySelector("button")) {
      zone.innerHTML = '<span class="langues-curseur" aria-hidden="true"></span>' + CFG.langues.map(function (l) {
        return '<button type="button" lang="' + l.code + '" data-langue="' + l.code + '" aria-label="' + esc(l.nom) + '">' +
          '<span class="langue-long" aria-hidden="true">' + esc(l.nom) + '</span><span class="langue-court" aria-hidden="true">' + esc(l.court || l.nom) + "</span></button>";
      }).join("");
    }
    zone.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-langue") === etat.langue)); });
    placerCurseurLangue();

    var liens = [
      ["lecons", "#lecons", "menu_lecons"], ["jeux", "#jeux", "menu_jeu"], ["verifier", "#verifier", "nav_verifier"],
      ["dictionnaire", "#dictionnaire", "menu_dico"], ["signaler", "#signaler", "menu_signaler"], ["apropos", "#a-propos", "menu_apropos"]
    ];
    document.querySelector("[data-nav]").innerHTML = liens.map(function (l) {
      return '<li><a href="' + l[1] + '"' + (l[0] === nomRoute ? ' aria-current="page"' : "") + ">" + h(t(l[2])) + "</a></li>";
    }).join("");

    var onglets = [
      ["accueil", "#accueil", "nav_accueil", "maison"], ["lecons", "#lecons", "nav_lecons", "livre"], ["verifier", "#verifier", "nav_verifier", "recherche"],
      ["jeux", "#jeux", "nav_jeu", "jeu"], ["signaler", "#signaler", "nav_aide", "bouee"]
    ];
    document.querySelector("[data-onglets]").innerHTML = "<ul>" + onglets.map(function (o) {
      var actif = o[0] === nomRoute;
      return '<li' + (o[0] === "verifier" ? ' class="onglet-centre"' : "") + '><a href="' + o[1] + '"' + (actif ? ' aria-current="page"' : "") + '><span class="onglet-icone">' + ic(o[3], actif ? "fill" : "bold") + "</span>" + h(t(o[2])) + "</a></li>";
    }).join("") + "</ul>";

    majBande();

    var avis = document.querySelector("[data-avis-langue]");
    var comptes = etat.langue === "fr" ? null : compterTextes(BRUT.fr, BRUT[etat.langue]);
    if (comptes && comptes.faits < comptes.total) {
      avis.innerHTML = '<div class="conteneur"><p lang="fr">' + h(t("langue_avis")) + ' <a href="#a-propos">' + h(t("langue_aider")) + "</a></p></div>";
      avis.hidden = false;
    } else {
      avis.hidden = true;
    }

    document.querySelector("[data-saut]").textContent = typo(t("aller_contenu"));

    document.querySelector("[data-pied]").innerHTML =
      '<div class="drapeau-ligne" aria-hidden="true"><span></span><span></span><span></span></div>' +
      '<div class="conteneur pied-corps"><div>' +
      '<a class="marque" href="#accueil">' + document.querySelector(".entete .marque-logo").outerHTML + '<span class="marque-nom">' + esc(CFG.nomSite) + "</span></a>" +
      "<p>" + h(t("pied_texte")) + "</p>" +
      '<p class="independance">' + h(t("independance").split("{site}").join(CFG.nomSite)) + "</p></div>" +
      '<ul class="pied-liens">' +
      '<li><a href="#signaler">' + ic("bouee") + h(t("menu_signaler")) + "</a></li>" +
      '<li><a href="#verifier">' + ic("recherche") + h(t("menu_verifier")) + "</a></li>" +
      '<li><a href="#dictionnaire">' + ic("mots") + h(t("menu_dico")) + "</a></li>" +
      '<li><a href="#attestation">' + ic("attestation") + h(t("menu_attestation")) + "</a></li>" +
      '<li><a href="#animer">' + ic("animer") + h(t("menu_animer")) + "</a></li>" +
      '<li><a href="#affiche">' + ic("imprimer") + h(t("menu_affiche")) + "</a></li>" +
      '<li><a href="#a-propos">' + ic("info") + h(t("menu_apropos")) + "</a></li>" +
      '<li><a href="#mentions">' + ic("balance") + h(t("menu_mentions")) + "</a></li>" +
      '<li><a href="' + esc(CFG.depot) + '" target="_blank" rel="noopener">' + ic("code") + h(t("pied_code")) + "</a></li>" +
      '<li><a href="' + esc(CFG.depot) + '/issues" target="_blank" rel="noopener">' + ic("message") + h(t("pied_contact")) + "</a></li>" +
      "</ul></div>" +
      '<div class="conteneur pied-bas"><span>© ' + new Date().getFullYear() + " " + esc(CFG.nomSite) + "</span>" +
      '<button type="button" class="bouton-lien" data-effacer>' + h(t("progression_effacer")) + "</button></div>";
  }

  function placerCurseurLangue() {
    var zone = document.querySelector("[data-langues]");
    var actif = zone.querySelector('button[aria-pressed="true"]');
    var curseur = zone.querySelector(".langues-curseur");
    if (!actif || !curseur) return;
    curseur.style.setProperty("--x", actif.offsetLeft + "px");
    curseur.style.setProperty("--w", actif.offsetWidth + "px");
  }

  /* ================================================================== */
  /* Mouvement                                                          */
  /* ================================================================== */
  var observateur = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entrees) {
    entrees.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("vu");
      if (e.target.hasAttribute("data-compteur")) compter(e.target);
      observateur.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;

  function animerPage() {
    var elements = main.querySelectorAll("[data-revele], [data-compteur]");
    elements.forEach(function (el) {
      if (observateur && !CALME) observateur.observe(el);
      else el.classList.add("vu");
    });
    majLecture();
  }

  /* Compteur qui défile jusqu'au chiffre clé */
  function compter(el) {
    var cible = parseInt(el.getAttribute("data-compteur"), 10);
    var final = el.textContent;
    if (!cible || CALME) return;
    var debut = null, duree = 1800;
    function pas(ts) {
      if (!debut) debut = ts;
      var p = Math.min(1, (ts - debut) / duree);
      var v = Math.round(cible * (1 - Math.pow(1 - p, 4)));
      el.textContent = p < 1 ? milliers(v) : final;
      if (p < 1) requestAnimationFrame(pas);
    }
    requestAnimationFrame(pas);
  }

  /* Barre de lecture des leçons */
  var barreLecture = null;
  function majLecture() {
    if (etat.route !== "lecon") { if (barreLecture) barreLecture.hidden = true; return; }
    if (!barreLecture) {
      barreLecture = document.createElement("div");
      barreLecture.className = "lecture-barre";
      barreLecture.setAttribute("aria-hidden", "true");
      barreLecture.innerHTML = "<span></span>";
      document.body.appendChild(barreLecture);
    }
    barreLecture.hidden = false;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    barreLecture.style.setProperty("--p", max > 0 ? Math.min(1, window.scrollY / max).toFixed(3) : 1);
  }
  window.addEventListener("scroll", function () { if (etat.route === "lecon") majLecture(); }, { passive: true });

  /* Confettis aux couleurs du drapeau */
  var confetti = { toile: null, ctx: null, parts: [], actif: false };
  var COULEURS_CONFETTI = ["#006A4E", "#FFCE00", "#D21034", "#FFFFFF", "#14946A", "#FFD83A"];
  function confettis(x, y, nombre) {
    if (CALME) return;
    if (!confetti.toile) {
      confetti.toile = document.createElement("canvas");
      confetti.toile.className = "confettis";
      confetti.toile.setAttribute("aria-hidden", "true");
      document.body.appendChild(confetti.toile);
      confetti.ctx = confetti.toile.getContext("2d");
    }
    var r = window.devicePixelRatio || 1;
    confetti.toile.width = window.innerWidth * r;
    confetti.toile.height = window.innerHeight * r;
    confetti.ctx.setTransform(r, 0, 0, r, 0, 0);
    for (var i = 0; i < (nombre || 80); i++) {
      var angle = Math.random() * Math.PI * 2, vitesse = 4 + Math.random() * 9;
      confetti.parts.push({
        x: x, y: y, vx: Math.cos(angle) * vitesse, vy: Math.sin(angle) * vitesse - 6,
        l: 6 + Math.random() * 6, h: 9 + Math.random() * 8, rot: Math.random() * 6, vr: (Math.random() - .5) * .4,
        c: COULEURS_CONFETTI[i % COULEURS_CONFETTI.length], vie: 110 + Math.random() * 50, rond: Math.random() < .3
      });
    }
    if (!confetti.actif) { confetti.actif = true; requestAnimationFrame(boucleConfetti); }
  }
  function boucleConfetti() {
    var ctx = confetti.ctx;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    confetti.parts = confetti.parts.filter(function (p) { return p.vie > 0 && p.y < window.innerHeight + 40; });
    confetti.parts.forEach(function (p) {
      p.vx *= .985; p.vy = p.vy * .985 + .32; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.vie--;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.globalAlpha = Math.min(1, p.vie / 30);
      ctx.fillStyle = p.c;
      if (p.c === "#FFFFFF") { ctx.strokeStyle = "rgba(0,38,28,.25)"; ctx.lineWidth = 1; }
      if (p.rond) { ctx.beginPath(); ctx.arc(0, 0, p.l / 2, 0, Math.PI * 2); ctx.fill(); }
      else { ctx.fillRect(-p.l / 2, -p.h / 2, p.l, p.h * Math.abs(Math.cos(p.rot * 2)) + 2); }
      ctx.restore();
    });
    if (confetti.parts.length) requestAnimationFrame(boucleConfetti);
    else { confetti.actif = false; ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); }
  }
  function confettisDepuis(el, n) {
    if (!el) return;
    var b = el.getBoundingClientRect();
    confettis(b.left + b.width / 2, b.top + b.height / 2, n);
  }
  function secouer(el) {
    if (!el || CALME) return;
    el.classList.remove("secoue"); void el.offsetWidth; el.classList.add("secoue");
  }

  /* Inclinaison du téléphone et halo des tuiles qui suivent la souris */
  document.addEventListener("pointermove", function (ev) {
    if (ev.pointerType !== "mouse" || CALME) return;
    var zone = ev.target.closest && ev.target.closest("[data-inclinaison]");
    if (zone) {
      var tel = zone.querySelector(".telephone-inclinaison"), b = zone.getBoundingClientRect();
      var dx = (ev.clientX - b.left) / b.width - .5, dy = (ev.clientY - b.top) / b.height - .5;
      tel.style.setProperty("--ry", (dx * 10).toFixed(2) + "deg");
      tel.style.setProperty("--rx", (-dy * 8).toFixed(2) + "deg");
    }
    var tuile = ev.target.closest && ev.target.closest(".tuile a");
    if (tuile) {
      var r = tuile.getBoundingClientRect();
      tuile.style.setProperty("--mx", (ev.clientX - r.left) + "px");
      tuile.style.setProperty("--my", (ev.clientY - r.top) + "px");
    }
  }, { passive: true });
  document.addEventListener("pointerout", function (ev) {
    var zone = ev.target.closest && ev.target.closest("[data-inclinaison]");
    if (zone && !zone.contains(ev.relatedTarget)) {
      var tel = zone.querySelector(".telephone-inclinaison");
      tel.style.setProperty("--ry", "0deg"); tel.style.setProperty("--rx", "0deg");
    }
  });

  /* ================================================================== */
  /* Interactions                                                       */
  /* ================================================================== */
  var minuterieAnnonce;
  function annoncer(msg, opts) {
    opts = opts || {};
    var el = document.querySelector("[data-annonce]");
    el.innerHTML = (opts.icone ? '<span class="annonce-icone">' + ic(opts.icone, "fill") + "</span>" : "") +
      "<span>" + (opts.titre ? "<strong>" + h(opts.titre) + "</strong>" : "") + h(msg) + "</span>";
    el.classList.add("visible");
    clearTimeout(minuterieAnnonce);
    minuterieAnnonce = setTimeout(function () { el.classList.remove("visible"); }, opts.duree || 2800);
  }

  function faireDefiler(el) {
    if (!el || !el.scrollIntoView) return;
    el.scrollIntoView({ block: "nearest", behavior: CALME ? "auto" : "smooth" });
  }

  function repondreScenario(conteneur, choix, bouton) {
    var sc = trouverScenario(conteneur.getAttribute("data-scenario")).s;
    var mode = conteneur.getAttribute("data-mode");
    var boutons = conteneur.querySelectorAll("[data-choix]");
    if (boutons[0].disabled) return;
    var juste = choix === sc.verdict;
    boutons.forEach(function (b) {
      b.disabled = true;
      if (b.getAttribute("data-choix") === choix) b.classList.add("choisi");
    });
    if (mode === "jeu") {
      if (juste) { etat.jeu.score++; etat.jeu.serie++; } else { etat.jeu.serie = 0; }
      var jetons = main.querySelector("[data-jetons]");
      if (jetons) jetons.innerHTML = jetonsJeu();
    }
    if (juste) confettisDepuis(bouton, mode === "jeu" && etat.jeu.serie >= 3 ? 110 : 60);
    else secouer(conteneur.querySelector(".telephone"));
    var zone = conteneur.querySelector("[data-retour]");
    zone.innerHTML = retourHTML(sc, choix, mode);
    var retour = zone.querySelector(".retour");
    retour.focus({ preventScroll: true });
    setTimeout(function () { faireDefiler(retour); }, 120);
  }

  function repondreQuiz(k, bouton) {
    var q = etat.quiz;
    if (!q || q.repondu) return;
    var r = trouverModule(q.mid), item = r.m.quiz[q.i];
    var juste = k === item.bonne;
    if (juste) q.score++;
    q.repondu = true;
    main.querySelectorAll("[data-option]").forEach(function (b) {
      var n = parseInt(b.getAttribute("data-option"), 10);
      b.disabled = true;
      if (n === item.bonne) { b.classList.add("juste"); b.querySelector(".lettre").innerHTML = ic("coche"); }
      else if (n === k) { b.classList.add("faux"); b.querySelector(".lettre").innerHTML = ic("croix"); }
    });
    if (juste) confettisDepuis(bouton, 50);
    var derniere = q.i + 1 >= r.m.quiz.length;
    var zone = main.querySelector("[data-quiz-retour]");
    zone.innerHTML = '<div class="quiz-retour ' + (juste ? "bon" : "mauvais") + '"><strong>' + h(t(juste ? "quiz_bonne" : "quiz_mauvaise")) + "</strong>" +
      "<p>" + h(item.explication) + "</p></div>" +
      '<div class="actions"><button type="button" class="bouton" data-quiz-suivant>' + h(t(derniere ? "quiz_resultat" : "quiz_suivante")) + ic("fleche") + "</button></div>";
    var suivant = zone.querySelector("[data-quiz-suivant]");
    suivant.focus({ preventScroll: true });
    setTimeout(function () { faireDefiler(suivant); }, 120);
  }

  function quizSuivant() {
    var q = etat.quiz, r = trouverModule(q.mid);
    q.i++; q.repondu = false;
    var fini = q.i >= r.m.quiz.length;
    if (fini) {
      var avant = modulesComplets();
      if (!quizFait(q.mid)) etat.nouveauFil = q.mid + "/quiz";
      etat.prog.quiz[q.mid] = { score: q.score, total: r.m.quiz.length };
      sauverProg();
      majBande();
      etat.nouveauFil = null;
      var tete = main.querySelector(".parcours");
      if (tete) tete.outerHTML = parcours(r.m, "quiz");
      feterNouveauxBadges(avant);
    }
    main.querySelector("[data-quiz]").innerHTML = quizCorps(r);
    window.scrollTo(0, 0);
    var titre = main.querySelector("h1");
    if (titre) titre.focus({ preventScroll: true });
    if (fini && q.score >= r.m.quiz.length - 1) setTimeout(function () { confettis(window.innerWidth / 2, window.innerHeight * .3, 140); }, 350);
  }

  /* Lecture à voix haute (français, voix du téléphone) */
  function arreterLecture() {
    if ("speechSynthesis" in window) { try { window.speechSynthesis.cancel(); } catch (e) { /* rien */ } }
  }
  function libelleEcoute(bouton, actif) {
    bouton.setAttribute("aria-pressed", actif ? "true" : "false");
    bouton.querySelector("span").textContent = typo(t(actif ? "lecon_arreter" : "lecon_ecouter"));
    var svg = bouton.querySelector("svg");
    if (svg) svg.outerHTML = ic(actif ? "stop" : "volume", "fill");
  }
  function lireLecon(bouton) {
    if (bouton.getAttribute("aria-pressed") === "true") { arreterLecture(); libelleEcoute(bouton, false); return; }
    var morceaux = [];
    main.querySelectorAll(".lecon h1, .lecon-corps p, .etapes li, .retenir h2, .retenir li").forEach(function (el) {
      morceaux.push(el.textContent.replace(/[«»]/g, ""));
    });
    try {
      var u = new SpeechSynthesisUtterance(morceaux.join(". "));
      u.lang = "fr-FR"; u.rate = 0.95;
      var voix = window.speechSynthesis.getVoices().filter(function (v) { return /^fr/i.test(v.lang); });
      if (voix.length) u.voice = voix[0];
      u.onend = u.onerror = function () { libelleEcoute(bouton, false); };
      arreterLecture();
      window.speechSynthesis.speak(u);
      libelleEcoute(bouton, true);
    } catch (e) { libelleEcoute(bouton, false); }
  }

  document.addEventListener("click", function (ev) {
    var el = ev.target.closest("button, a");
    if (!el) return;

    if (el.hasAttribute("data-saut")) { ev.preventDefault(); main.focus(); return; }

    if (el.hasAttribute("data-langue")) {
      etat.langue = el.getAttribute("data-langue");
      stock.ecrire(CLE_LANGUE, etat.langue);
      chargerLangue();
      rendre(true);
      return;
    }
    if (el.hasAttribute("data-choix")) { repondreScenario(el.closest("[data-scenario]"), el.getAttribute("data-choix"), el); return; }
    if (el.hasAttribute("data-suivant")) {
      etat.jeu.i++;
      if (etat.jeu.i >= etat.jeu.ordre.length) {
        etat.jeu.termine = true; etat.jeu.i = etat.jeu.ordre.length - 1;
        enregistrerRecord("arnaque", etat.jeu.score, etat.jeu.ordre.length);
      }
      main.querySelector("[data-jeu]").innerHTML = jeuCorps();
      window.scrollTo(0, 0);
      var cible = main.querySelector(".compteur, .resultat .surtitre");
      if (cible) { cible.setAttribute("tabindex", "-1"); cible.focus({ preventScroll: true }); }
      if (etat.jeu.termine && etat.jeu.score / etat.jeu.ordre.length >= 0.7) setTimeout(function () { confettis(window.innerWidth / 2, window.innerHeight * .3, 160); }, 350);
      return;
    }
    if (el.hasAttribute("data-rejouer")) {
      var ancien = etat.jeu || {};
      nouvellePartie(ancien.filtre, ancien.niveau);
      rendre();
      return;
    }
    if (el.hasAttribute("data-niveau")) { nouvellePartie(null, el.getAttribute("data-niveau")); rendre(); return; }
    if (el.hasAttribute("data-changer-niveau")) { etat.jeu = { choix: true }; rendre(); return; }
    if (el.hasAttribute("data-copier")) { copierLien(); return; }

    // Salle de jeux
    if (el.hasAttribute("data-rejouer-jeu")) {
      var cleEtat = { pieges: "pieges", liens: "liens", motdepasse: "duel", histoire: "histoire", memo: "memo" }[el.getAttribute("data-rejouer-jeu")];
      if (cleEtat) etat[cleEtat] = null;
      rendre();
      return;
    }
    if (el.hasAttribute("data-segment")) { toucherSegment(el); return; }
    if (el.hasAttribute("data-pieges-suivant")) { piegesSuivant(); return; }
    if (el.hasAttribute("data-lien")) { repondreLien(el.getAttribute("data-lien") === "vrai", true); return; }
    if (el.hasAttribute("data-lien-suivant")) { lienSuivant(); return; }
    if (el.hasAttribute("data-mdp-voir")) {
      var champ = main.querySelector("[data-mdp]"), voir = champ.type === "password";
      champ.type = voir ? "text" : "password";
      el.setAttribute("aria-pressed", String(voir));
      el.innerHTML = ic(voir ? "oeilbarre" : "oeil") + "<span>" + h(voir ? J().motdepasse.masquer : J().motdepasse.afficher) + "</span>";
      return;
    }
    if (el.hasAttribute("data-duel-choix")) { choisirDuel(parseInt(el.getAttribute("data-duel-choix"), 10), el); return; }
    if (el.hasAttribute("data-duel-suivant")) { duelSuivant(); return; }
    if (el.hasAttribute("data-histoire-debut")) {
      etat.histoire.scene = 0;
      main.querySelector("[data-histoire]").innerHTML = histoireCorps();
      var hh = main.querySelector(".scene-heure");
      if (hh) { hh.setAttribute("tabindex", "-1"); hh.focus({ preventScroll: true }); faireDefiler(hh); }
      return;
    }
    if (el.hasAttribute("data-histoire-choix")) { choisirHistoire(parseInt(el.getAttribute("data-histoire-choix"), 10), el); return; }
    if (el.hasAttribute("data-histoire-suite")) { histoireSuite(); return; }
    if (el.hasAttribute("data-carte")) { retournerCarte(parseInt(el.getAttribute("data-carte"), 10), el); return; }
    // Outils
    if (el.hasAttribute("data-verif-exemple")) {
      var ex = O().verifier.exemples[parseInt(el.getAttribute("data-verif-exemple"), 10)];
      if (ex) lancerVerif(ex.texte, []);
      return;
    }
    if (el.hasAttribute("data-verif-coller")) { collerVerif(); return; }
    if (el.hasAttribute("data-verif-nouveau") || el.hasAttribute("data-verif-effacer")) {
      libererImages(etat.verif && etat.verif.images);
      etat.verif = { texte: "", res: null, images: [] };
      var errEff = main.querySelector("[data-verif-erreur]"); if (errEff) errEff.hidden = true;
      main.querySelector("[data-verif-resultat]").innerHTML = "";
      var zoneTexte = main.querySelector("[data-verif-texte]");
      zoneTexte.value = "";
      if (el.hasAttribute("data-verif-nouveau")) window.scrollTo({ top: 0, behavior: CALME ? "auto" : "smooth" });
      zoneTexte.focus({ preventScroll: true });
      return;
    }
    if (el.hasAttribute("data-assist-choix")) { choisirAssistant(el.getAttribute("data-assist-choix")); return; }
    if (el.hasAttribute("data-assist-valider")) { if (etat.assist.selection.length) repondreAssistant(etat.assist.selection.slice()); return; }
    if (el.hasAttribute("data-assist-revenir")) { revenirAssistant(); return; }
    if (el.hasAttribute("data-assist-ecrire")) { etat.assist.mode = "ecrire"; majChat(); return; }
    if (el.hasAttribute("data-assist-passer")) { passerMessage(); return; }
    if (el.hasAttribute("data-assist-envoyer")) { envoyerMessageAssistant(); return; }
    if (el.hasAttribute("data-assist-coller")) {
      try {
        navigator.clipboard.readText().then(function (x) { var c = main.querySelector("[data-assist-texte]"); if (c && x) { c.value = x; c.focus(); } },
          function () { annoncer(O().verifier.coller_aide, { icone: "coller", duree: 5000 }); });
      } catch (e) { annoncer(O().verifier.coller_aide, { icone: "coller", duree: 5000 }); }
      return;
    }
    if (el.hasAttribute("data-assist-recommencer")) {
      if (etat.assist && etat.assist.message) libererImages(etat.assist.message.images);
      nouvelleDiscussion(); etat.assist.vus = 0; majChat(); window.scrollTo({ top: 0, behavior: CALME ? "auto" : "smooth" }); return;
    }
    if (el.hasAttribute("data-att-modifier")) { etat.attModif = true; rendre(true); var champNom = main.querySelector("[data-att-nom]"); if (champNom) champNom.focus(); return; }
    if (el.hasAttribute("data-att-partager")) { partagerAttestation(); return; }
    if (el.hasAttribute("data-att-telecharger") && el.getAttribute("aria-disabled") === "true") { ev.preventDefault(); return; }
    if (el.hasAttribute("data-animer-choix")) { choixAnimer(el.getAttribute("data-animer-choix")); return; }
    if (el.hasAttribute("data-animer-suivant")) { suivantAnimer(); return; }
    if (el.hasAttribute("data-animer-plein")) { basculerPleinEcran(); return; }
    if (el.hasAttribute("data-animer-quitter")) { quitterAnimer(); return; }
    if (el.hasAttribute("data-animer-nouvelle")) { demarrerAnimation(etat.animer.theme, etat.animer.nombre); return; }
    if (el.hasAttribute("data-format")) { etat.formatAffiche = el.getAttribute("data-format"); rendre(true); return; }
    if (el.hasAttribute("data-imprimer")) { window.print(); return; }
    if (el.hasAttribute("data-option")) { repondreQuiz(parseInt(el.getAttribute("data-option"), 10), el); return; }
    if (el.hasAttribute("data-quiz-suivant")) { quizSuivant(); return; }
    if (el.hasAttribute("data-recommencer")) { etat.quiz = null; rendre(); return; }
    if (el.hasAttribute("data-compris")) {
      var cle = el.getAttribute("data-compris");
      var avant = modulesComplets();
      if (!etat.prog.lecons[cle]) { etat.prog.lecons[cle] = true; etat.nouveauFil = cle; sauverProg(); }
      confettisDepuis(el, 40);
      var parts = cle.split("/"), mid = parts[0], n = parseInt(parts[1], 10);
      var m = trouverModule(mid).m;
      var dest = n < m.lecons.length ? "#lecon-" + mid + "-" + (n + 1) : "#quiz-" + mid;
      feterNouveauxBadges(avant);
      if (location.hash === dest) rendre(); else location.hash = dest;
      return;
    }
    if (el.hasAttribute("data-ecouter")) { lireLecon(el); return; }
    if (el.hasAttribute("data-effacer")) {
      if (el.getAttribute("data-confirmer") === "1") {
        etat.prog = { lecons: {}, quiz: {} };
        sauverProg();
        etat.jeu = null; etat.quiz = null;
        rendre(true);
        annoncer(t("progression_effacer_ok"), { icone: "rejouer" });
      } else {
        el.setAttribute("data-confirmer", "1");
        el.textContent = typo(t("progression_confirmer"));
        setTimeout(function () {
          if (document.body.contains(el)) { el.removeAttribute("data-confirmer"); el.textContent = typo(t("progression_effacer")); }
        }, 4000);
      }
    }
  });

  document.addEventListener("submit", function (ev) {
    var f = ev.target;
    if (f.hasAttribute("data-verif-form")) { ev.preventDefault(); lancerVerif(f.querySelector("[data-verif-texte]").value); return; }
    if (f.hasAttribute("data-attestation-form")) {
      ev.preventDefault();
      var nom = f.querySelector("[data-att-nom]").value.replace(/\s+/g, " ").trim();
      var err = f.querySelector("[data-att-erreur]");
      if (!nom) { err.textContent = typo(O().attestation.nom_vide); err.hidden = false; f.querySelector("[data-att-nom]").focus(); return; }
      var ancienne = etat.prog.attestation || {};
      etat.prog.attestation = { nom: nom, date: ancienne.date || aujourdhui() };
      sauverProg();
      etat.attModif = false; etat.attNouvelle = true;
      rendre(true);
      return;
    }
    if (f.hasAttribute("data-animer-form")) {
      ev.preventDefault();
      var nb = f.querySelector('input[name="nombre"]:checked');
      demarrerAnimation(f.querySelector("select").value, nb ? parseInt(nb.value, 10) : 10);
    }
  });

  document.addEventListener("change", function (ev) {
    var t = ev.target;
    if (t.hasAttribute && t.hasAttribute("data-verif-fichier")) { fichiersVerif(t.files); t.value = ""; return; }
    if (t.hasAttribute && t.hasAttribute("data-assist-fichier")) { capturesAssistant(t.files); t.value = ""; }
  });

  document.addEventListener("keydown", function (ev) {
    var s = etat.animer;
    if (!s || !s.actif || !main.querySelector(".scene-animer") || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    var k = ev.key, surBouton = ev.target && ev.target.closest && ev.target.closest("button, a");
    if (s.phase === "vote" && (k === "a" || k === "A")) { ev.preventDefault(); choixAnimer("arnaque"); }
    else if (s.phase === "vote" && (k === "n" || k === "N")) { ev.preventDefault(); choixAnimer("normal"); }
    else if (s.phase === "revele" && (k === "ArrowRight" || ((k === "Enter" || k === " ") && !surBouton))) { ev.preventDefault(); suivantAnimer(); }
    else if (k === "f" || k === "F") { ev.preventDefault(); basculerPleinEcran(); }
    else if (k === "Escape" && !document.fullscreenElement) { ev.preventDefault(); quitterAnimer(); }
  });

  document.addEventListener("input", function (ev) {
    if (ev.target.hasAttribute("data-mdp")) { majJauge(ev.target.value); return; }
    if (!ev.target.hasAttribute("data-dico-q")) return;
    var q = sansAccents(ev.target.value.trim().toLowerCase());
    var visibles = 0;
    main.querySelectorAll("[data-cherche]").forEach(function (e) {
      var ok = !q || e.getAttribute("data-cherche").indexOf(q) !== -1;
      e.hidden = !ok;
      if (ok) { visibles++; e.classList.add("vu"); }
    });
    main.querySelector("[data-dico-vide]").hidden = visibles > 0;
  });

  window.addEventListener("hashchange", function () {
    if (document.startViewTransition && !CALME) document.startViewTransition(function () { rendre(); });
    else rendre();
  });
  window.addEventListener("resize", placerCurseurLangue);
  window.addEventListener("offline", function () { annoncer(t("hors_ligne"), { icone: "wifi" }); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placerCurseurLangue);

  /* ================================================================== */
  /* Démarrage                                                          */
  /* ================================================================== */
  chargerLangue();
  rendre();

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", function () {
      try { navigator.serviceWorker.register("sw.js").catch(function () { /* rien */ }); } catch (e) { /* rien */ }
    });
  }
})();
