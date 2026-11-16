/*
 * Réglages du site : nom, liens, couleurs.
 * C'est le seul fichier à modifier pour renommer le site ou changer d'adresse.
 */
window.CG_CONFIG = {
  nomSite: "CyberGbe",

  /* Adresse publique du site (utilisée dans les messages de partage).
     À changer si tu utilises un nom de domaine, et dans index.html (balises og:). */
  siteUrl: "https://cyberachille.github.io/Cybergbe/",

  /* Nom affiché dans la page « Mentions et confidentialité » */
  auteur: "HODOME Kokou Achille",

  /* Lien du dépôt GitHub (pied de page et page « À propos ») */
  depot: "https://github.com/CyberAchille/Cybergbe",

  /* Outil d'analyse des offres d'emploi, cité dans le thème « Fausses offres d'emploi » */
  arnako: "https://cyberachille.github.io/arnako/",

  /* Coordonnées du CERT.tg (à revérifier de temps en temps sur https://cert.tg) */
  cert: {
    telephone: "+228 70 54 93 25",
    email: "incidents@cert.tg",
    site: "https://cert.tg/"
  },

  /* Couleur de chaque thème : vert, jaune et rouge du drapeau, plus deux nuances du kente */
  couleurs: {
    "codes": "#006A4E",
    "mobile-money": "#E0A800",
    "whatsapp": "#14946A",
    "emploi": "#D21034",
    "reseaux": "#E2621B"
  },

  /* Même couleur, assombrie pour rester lisible en texte sur fond clair */
  couleursTexte: {
    "codes": "#006A4E",
    "mobile-money": "#7A5A00",
    "whatsapp": "#0C6E4E",
    "emploi": "#B00D2B",
    "reseaux": "#A84A0E"
  },

  /* Thème mis en avant sur l'accueil (l'arnaque la plus fréquente) */
  themeVedette: "mobile-money",

  /* Langues proposées. « ee » est le code ISO 639-1 de l'ewe. */
  langues: [
    { code: "fr", nom: "Français" },
    { code: "ee", nom: "Eʋegbe" }
  ]
};
