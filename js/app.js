/*
 * CyberGbe : application (site statique, sans dépendance).
 *
 * Routes (ancres simples, compatibles partout) :
 *   #accueil  #lecons  #theme-<id>  #lecon-<id>-<n>  #quiz-<id>
 *   #jeu  #jeu-<id>  #dictionnaire  #signaler  #a-propos
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
    modulesComplets().forEach(function (id) {
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
      "</div></div>" + badgesHTML() + "</div></section>" +

      '<section class="section"><div class="conteneur">' +
      '<div class="section-tete"' + revele(0) + "><h2>" + h(t("pourquoi_titre")) + "</h2></div>" +
      '<ul class="atouts">' + C.pourquoi.map(function (p, i) {
        return "<li" + revele(i, 110) + '><span class="atout-icone">' + ic(icAtouts[i] || "bouclier", "duotone") + "</span><div><h3>" + h(p.titre) + "</h3><p>" + h(p.texte) + "</p></div></li>";
      }).join("") + "</ul>" +
      "</div></section>" +

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
      '<div class="page"><div class="conteneur">' + tuilesThemes() + badgesHTML() + "</div></div>";
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
      '<div class="page"><div class="conteneur grille-aide">' +
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
      ["lecons", "#lecons", "menu_lecons"], ["jeux", "#jeux", "menu_jeu"], ["dictionnaire", "#dictionnaire", "menu_dico"],
      ["signaler", "#signaler", "menu_signaler"], ["apropos", "#a-propos", "menu_apropos"]
    ];
    document.querySelector("[data-nav]").innerHTML = liens.map(function (l) {
      return '<li><a href="' + l[1] + '"' + (l[0] === nomRoute ? ' aria-current="page"' : "") + ">" + h(t(l[2])) + "</a></li>";
    }).join("");

    var onglets = [
      ["accueil", "#accueil", "nav_accueil", "maison"], ["lecons", "#lecons", "nav_lecons", "livre"], ["jeux", "#jeux", "nav_jeu", "jeu"],
      ["dictionnaire", "#dictionnaire", "nav_dico", "mots"], ["signaler", "#signaler", "nav_aide", "bouee"]
    ];
    document.querySelector("[data-onglets]").innerHTML = "<ul>" + onglets.map(function (o) {
      var actif = o[0] === nomRoute;
      return '<li><a href="' + o[1] + '"' + (actif ? ' aria-current="page"' : "") + '><span class="onglet-icone">' + ic(o[3], actif ? "fill" : "bold") + "</span>" + h(t(o[2])) + "</a></li>";
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
