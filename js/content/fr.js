/*
 * Contenu en français : c'est la langue de référence.
 * Le fichier ee.js reprend exactement la même structure pour l'ewe.
 * Toute chaîne vide dans ee.js s'affiche en français en attendant sa traduction.
 *
 * Après une modification de structure ici (nouvelle leçon, nouvelle question…),
 * lance :  node scripts/modele-ewe.js   pour mettre ee.js à jour sans perdre les traductions.
 */
window.CG_CONTENU = window.CG_CONTENU || {};
window.CG_CONTENU.fr = {

  /* ------------------------------------------------------------------ */
  /* Textes de l'interface                                               */
  /* ------------------------------------------------------------------ */
  ui: {
    langue: "Français",
    menu_accueil: "Accueil",
    menu_lecons: "Leçons",
    menu_jeu: "Jeux",
    menu_dico: "Petit dictionnaire",
    menu_signaler: "En cas d'arnaque",
    menu_apropos: "À propos",
    menu_verifier: "Vérifier un message",
    menu_animer: "Mode animateur",
    menu_affiche: "Affiches à imprimer",
    menu_attestation: "Ton attestation",

    accueil_titre: "Arnaque ou pas ?",
    accueil_intro: "Apprends à reconnaître les pièges du téléphone : Mobile Money, WhatsApp, faux emplois, faux profils. Cinq thèmes courts, en français et bientôt en ewe.",
    accueil_jeu_consigne: "Tu reçois ce message. Qu'en penses-tu ?",
    accueil_cta_lecons: "Commencer les leçons",
    accueil_cta_jeu: "Découvrir les jeux",
    accueil_jeux_titre: "Joue et apprends",
    accueil_jeux_intro: "Six jeux pour t'entraîner à repérer les pièges, seul ou en famille.",
    accueil_jeux_tout: "Voir tous les jeux",
    accueil_atouts: ["Gratuit", "Sans inscription", "Marche hors connexion"],
    chiffre_nombre: "333 000",
    chiffre_texte: "incidents de cybersécurité traités au Togo entre 2021 et 2024. Les escrocs comptent sur la surprise : bien informé, tu deviens difficile à piéger.",
    chiffre_source: "Source : Agence nationale de la cybersécurité (ANCy)",
    theme_populaire: "Le plus courant",
    bandeau_label: "Phrases que les escrocs utilisent souvent",
    bandeau_phrases: [
      "« Je me suis trompé de numéro, renvoie-moi l'argent »",
      "« Envoie-moi le code reçu par SMS »",
      "« Frais de dossier : 5 000 F »",
      "« Votre compte sera bloqué ce soir »",
      "« Tu as gagné un smartphone ! »",
      "« Maman, c'est moi, j'ai changé de numéro »",
      "« Ton argent double en 7 jours »",
      "« Tape le code que je vais te dicter »"
    ],
    puces_deco: ["Envoie-moi le code", "Frais de dossier : 5 000 F", "Compte bloqué ce soir !"],
    badges_titre: "Tes badges",
    badges_intro: "Termine un thème (ses trois leçons et son quiz) pour gagner son badge.",
    badge_verrouille: "À gagner",
    badge_gagne: "Gagné",
    badge_nouveau: "Nouveau badge !",
    badge_message: "Tu as gagné le badge « {badge} ».",
    jeu_serie: "Série de {n}",
    jeu_rangs: ["Détective débutant", "Œil attentif", "Œil de lynx", "Expert anti-arnaque"],
    etoiles: "{n} étoiles sur 3",
    etoiles_un: "{n} étoile sur 3",
    module_lecons_quiz: "{n} leçons et un quiz",
    module_etapes: "{n} étapes sur {total}",
    module_etapes_un: "{n} étape sur {total}",
    progression_reprendre: "Reprendre",
    progression_bravo: "Tout est terminé, bravo ! Entraîne-toi encore avec le jeu.",
    progression_rejouer: "Jouer encore",
    pourquoi_titre: "Pensé pour le Togo",
    nav_accueil: "Accueil",
    nav_lecons: "Leçons",
    nav_jeu: "Jeux",
    nav_dico: "Mots",
    nav_verifier: "Vérifier",
    nav_aide: "Aide",
    accueil_lecons_titre: "Les leçons",
    accueil_lecons_intro: "Cinq thèmes de trois leçons. Compte environ cinq minutes par thème.",
    lecons_dico_titre: "Un mot pas clair ?",
    lecons_dico_texte: "Le petit dictionnaire explique simplement les mots de la sécurité numérique.",
    lecons_dico_bouton: "Ouvrir le dictionnaire",
    accueil_aide_titre: "Tu t'es fait avoir ?",
    accueil_aide_texte: "Ce n'est pas une honte : les escrocs sont des professionnels. Agis vite et signale-le.",
    accueil_aide_bouton: "Voir quoi faire",

    bouton_arnaque: "C'est une arnaque",
    bouton_normal: "C'est normal",
    jeu_bien_vu: "Bien vu !",
    jeu_attention: "Attention !",
    jeu_verdict_arnaque: "C'était une arnaque.",
    jeu_verdict_normal: "C'était un message normal.",
    jeu_indices_arnaque: "Les indices",
    jeu_indices_normal: "Pourquoi c'est normal",
    jeu_suivant: "Message suivant",
    jeu_voir_lecon: "Revoir la leçon",
    jeu_titre: "Arnaque ou pas ?",
    jeu_intro: "Lis chaque message comme s'il arrivait sur ton téléphone, puis décide. Certains sont des arnaques, d'autres sont tout à fait normaux.",
    jeu_compteur: "Message {n} sur {total}",
    jeu_score: "{score} bonnes réponses",
    jeu_score_un: "{score} bonne réponse",
    jeu_fin_titre: "Partie terminée",
    jeu_fin_score: "Tu as bien répondu à {score} messages sur {total}.",
    jeu_fin_score_un: "Tu as bien répondu à {score} message sur {total}.",
    jeu_rejouer: "Rejouer",
    jeu_contexte: "La situation",
    jeu_choisir: "Choisis ton niveau",
    jeu_choisir_texte: "Chaque partie compte jusqu'à 10 messages tirés au hasard.",
    jeu_changer_niveau: "Changer de niveau",
    niveau_facile: "Facile",
    niveau_moyen: "Moyen",
    niveau_expert: "Expert",
    niveau_tout: "Tout mélangé",
    niveau_facile_texte: "Les arnaques les plus courantes.",
    niveau_moyen_texte: "Des pièges plus discrets.",
    niveau_expert_texte: "Ceux qui trompent même les plus prudents.",
    niveau_tout_texte: "Un peu de tout, au hasard.",
    niveau_messages: "{n} messages",
    jeu_continuer: "Essayer d'autres messages",

    canal_sms: "SMS",
    canal_whatsapp: "WhatsApp",
    canal_appel: "Appel reçu",
    canal_facebook: "Facebook",
    canal_email: "E-mail",

    module_lecons: "{n} leçons",
    module_termine: "Terminé",
    module_commence: "Commencé",
    module_commencer: "Commencer",
    module_continuer: "Continuer",
    module_quiz: "Le quiz du thème",
    parcours_quiz: "Quiz",
    module_quiz_texte: "Quatre questions pour vérifier que tout est clair.",
    module_quiz_bouton: "Faire le quiz",
    module_quiz_score: "Dernier score : {score} sur {total}",
    module_entrainer: "S'entraîner avec des messages",

    lecon_retenir: "À retenir",
    lecon_etapes: "Comment faire",
    lecon_compris: "J'ai compris",
    lecon_compris_fait: "Leçon terminée",
    lecon_suivante: "Leçon suivante",
    lecon_precedente: "Leçon précédente",
    lecon_duree: "Environ {n} min",
    lecon_vers_quiz: "Passer au quiz",
    lecon_retour: "Retour au thème",
    lecon_n: "Leçon {n} sur {total}",
    lecon_ecouter: "Écouter la leçon",
    lecon_arreter: "Arrêter la lecture",
    lecon_audio: "Écouter en ewe",
    lecon_audio_bientot: "La version audio en ewe arrive bientôt.",

    quiz_question: "Question {n} sur {total}",
    quiz_bonne: "Bonne réponse.",
    quiz_mauvaise: "Ce n'est pas la bonne réponse.",
    quiz_suivante: "Question suivante",
    quiz_resultat: "Voir mon résultat",
    quiz_fin: "Tu as {score} bonnes réponses sur {total}.",
    quiz_fin_un: "Tu as {score} bonne réponse sur {total}.",
    quiz_fin_bravo: "Bravo, ce thème est bien compris.",
    quiz_fin_revoir: "Relis les leçons du thème, puis réessaie.",
    quiz_recommencer: "Recommencer le quiz",
    quiz_autre_theme: "Choisir un autre thème",

    progression: "Ta progression",
    progression_texte: "{n} étapes sur {total}",
    progression_texte_un: "{n} étape sur {total}",
    progression_aide: "Chaque leçon et chaque quiz terminés ajoutent un fil à ta bande.",
    progression_effacer: "Effacer ma progression",
    progression_confirmer: "Appuie encore pour confirmer",
    progression_effacer_ok: "Progression effacée.",

    dico_titre: "Petit dictionnaire",
    dico_intro: "Les mots de la sécurité numérique, expliqués simplement.",
    dico_chercher: "Chercher un mot",
    dico_aucun: "Aucun mot trouvé. Essaie un autre mot ou vide la recherche.",
    dico_ewe: "En ewe",
    dico_ewe_vide: "à traduire",
    dico_francais: "En français",

    langue_avis: "La traduction en ewe est en cours. En attendant, le texte s'affiche en français.",
    langue_aider: "Tu parles ewe ? Aide-nous à traduire.",
    langue_pas_traduit: "Pas encore traduit",

    pied_texte: "Site gratuit et sans publicité. Ta progression reste sur ton téléphone : rien n'est envoyé.",
    pied_code: "Code source",
    pied_contact: "Proposer une amélioration",
    menu_mentions: "Mentions et confidentialité",
    independance: "{site} est un projet indépendant. Il n'est lié ni à l'ANCy, ni au CERT.tg, ni aux opérateurs, banques ou réseaux sociaux cités, dont les noms appartiennent à leurs propriétaires.",
    partage_titre: "Fais passer le mot",
    partage_texte: "Plus on est nombreux à connaître ces arnaques, moins elles marchent. Envoie {site} à ta famille et à tes groupes.",
    partage_whatsapp: "Partager sur WhatsApp",
    partage_copier: "Copier le lien",
    partage_copie_ok: "Lien copié, tu peux le coller où tu veux.",
    partage_copie_echec: "Copie impossible ici. Voici le lien : {url}",
    partage_site: "Apprends à repérer les arnaques Mobile Money, WhatsApp et faux emplois, en français et en ewe. C'est gratuit 👉 {url}",
    partage_jeu: "J'ai eu {score}/{total} à « Arnaque ou pas ? » sur {site} 🛡️ Niveau : {rang}. Et toi, tu repères les arnaques ? 👉 {url}",
    partage_quiz: "J'ai fait {score}/{total} au quiz « {theme} » sur {site} ✅ Teste-toi aussi 👉 {url}",

    hors_ligne: "Tu es hors connexion. Les leçons déjà ouvertes restent disponibles.",
    page_introuvable: "Cette page n'existe pas.",
    retour_accueil: "Retour à l'accueil",
    aller_contenu: "Aller au contenu",
    qr_label: "QR code vers {url}"
  },

  /* ------------------------------------------------------------------ */
  /* Les 5 thèmes                                                        */
  /* ------------------------------------------------------------------ */
  modules: [

    /* ----------------------------- 1 ----------------------------- */
    {
      id: "codes",
      badge: "Gardien des codes",
      titre: "Tes codes secrets",
      resume: "Ton code PIN et tes mots de passe protègent ton argent et tes comptes. Personne d'autre ne doit les connaître.",
      lecons: [
        {
          titre: "Ton code PIN, c'est la clé de ton argent",
          corps: [
            "Ton code PIN Mobile Money ouvre ton porte-monnaie. Celui qui le connaît peut vider ton compte en quelques secondes.",
            "Aucun agent, aucun service client, aucun opérateur n'a besoin de ton code PIN. Ni pour « débloquer », ni pour « vérifier », ni pour « rembourser » ton compte.",
            "Quand tu tapes ton code chez un agent ou dans une boutique, cache l'écran avec ta main. Ne donne jamais ton téléphone déverrouillé à quelqu'un pour qu'il fasse l'opération à ta place.",
            "Évite les codes faciles comme 0000, 1234 ou ton année de naissance : ce sont les premiers que les voleurs essaient."
          ],
          etapes: [],
          retenir: [
            "Ton code PIN ne se donne à personne, jamais.",
            "Si quelqu'un te demande ton code, c'est un voleur, même s'il dit travailler chez l'opérateur.",
            "Si tu penses que quelqu'un connaît ton code, change-le tout de suite."
          ],
          audio: ""
        },
        {
          titre: "Un bon mot de passe",
          corps: [
            "Ton mot de passe protège ton Facebook, ton e-mail ou ton application de banque.",
            "Un bon mot de passe est long. Le plus simple : une petite phrase que toi seul connais, avec trois ou quatre mots et un chiffre. Par exemple « Pagne-Taxi-Ananas-48 », mais ne copie pas cet exemple, invente le tien.",
            "Utilise un mot de passe différent pour chaque compte. Si un compte est piraté, les autres restent protégés.",
            "N'utilise pas ton nom, celui de ton enfant, ta date de naissance ou ton numéro de téléphone : les escrocs les trouvent facilement sur tes réseaux sociaux.",
            "Tu as du mal à tout retenir ? Note tes mots de passe dans un carnet que tu gardes à la maison, pas dans ton portefeuille ni dans une note du téléphone."
          ],
          etapes: [],
          retenir: [
            "Long et facile à retenir pour toi : une phrase de trois ou quatre mots.",
            "Un mot de passe différent pour chaque compte.",
            "Jamais ton nom, ta date de naissance ou ton numéro."
          ],
          audio: ""
        },
        {
          titre: "Les codes reçus par SMS",
          corps: [
            "Quand tu crées un compte ou que tu te connectes sur un nouveau téléphone, tu reçois souvent un code par SMS. Ce code prouve que c'est bien toi.",
            "Ce code sert à toi seul. Celui qui te le demande veut prendre ton compte. La phrase la plus utilisée par les escrocs : « Je t'ai envoyé un code par erreur, renvoie-le moi s'il te plaît. »",
            "Active la double protection, qu'on appelle aussi « vérification en deux étapes », partout où c'est possible : WhatsApp, Facebook, e-mail. Même si un voleur trouve ton mot de passe, il lui manquera ce deuxième code."
          ],
          etapes: [],
          retenir: [
            "Un code reçu par SMS ne se partage jamais, même avec un proche.",
            "« Je t'ai envoyé un code par erreur » : c'est toujours une arnaque.",
            "Active la double protection sur tes comptes importants."
          ],
          audio: ""
        }
      ],
      quiz: [
        {
          question: "Un agent Mobile Money te demande ton code PIN pour finir un retrait. Que fais-tu ?",
          options: [
            "Je le lui donne, c'est son travail.",
            "Je refuse et je tape mon code moi-même en cachant l'écran.",
            "Je le lui écris sur un papier."
          ],
          bonne: 1,
          explication: "Personne n'a besoin de ton code PIN, pas même un agent. Tu le tapes toi-même, en cachant l'écran."
        },
        {
          question: "Quel mot de passe est le plus solide ?",
          options: [
            "Kodjo1990",
            "123456",
            "Pagne-Taxi-Ananas-48"
          ],
          bonne: 2,
          explication: "Une phrase de plusieurs mots est longue et difficile à deviner. Un prénom suivi d'une année se devine très vite."
        },
        {
          question: "Une amie t'écrit : « Je t'ai envoyé un code par SMS par erreur, tu peux me le renvoyer ? » Que fais-tu ?",
          options: [
            "Je le lui renvoie, c'est mon amie.",
            "Je ne renvoie rien et je l'appelle pour vérifier.",
            "Je le mets dans notre groupe pour qu'elle le trouve."
          ],
          bonne: 1,
          explication: "Son compte a probablement été piraté. Le voleur veut ton code pour prendre ton compte à toi aussi. Appelle-la sur son numéro habituel."
        },
        {
          question: "Tu utilises le même mot de passe pour Facebook et pour ton e-mail. Quel est le risque ?",
          options: [
            "Aucun risque.",
            "Si un compte est piraté, l'autre l'est aussi.",
            "Le téléphone devient plus lent."
          ],
          bonne: 1,
          explication: "Les voleurs essaient le même mot de passe partout. Un mot de passe par compte limite les dégâts."
        }
      ]
    },

    /* ----------------------------- 2 ----------------------------- */
    {
      id: "mobile-money",
      badge: "As du Mobile Money",
      titre: "Mobile Money",
      resume: "Les arnaques les plus courantes visent ton argent sur Mixx by Yas ou Flooz. Voici comment les repérer.",
      lecons: [
        {
          titre: "Le faux « transfert par erreur »",
          corps: [
            "Tu reçois un SMS : « Vous avez reçu 25 000 F. » Juste après, quelqu'un appelle : « Je me suis trompé de numéro, renvoie-moi l'argent s'il te plaît, c'est pour l'hôpital. » Il est poli, pressé, parfois il pleure.",
            "Le SMS est faux. Il a été tapé et envoyé comme un message ordinaire, en imitant celui de ton opérateur. Aucun argent n'est arrivé sur ton compte.",
            "Les vrais messages arrivent en général sous le nom de l'opérateur, pas depuis un numéro à 8 chiffres. Mais un nom peut aussi être imité : le seul vrai contrôle, c'est ton solde.",
            "Si de l'argent est vraiment arrivé par erreur, ne le renvoie pas toi-même. Dis à la personne de contacter son opérateur, qui s'occupera de l'annulation."
          ],
          etapes: [],
          retenir: [
            "Vérifie ton solde dans le menu ou l'application officielle, jamais avec le SMS.",
            "Un vrai message d'opérateur ne vient pas d'un numéro de téléphone ordinaire.",
            "Transfert par erreur ? C'est l'opérateur qui annule, pas toi."
          ],
          audio: ""
        },
        {
          titre: "Le faux service client",
          corps: [
            "Quelqu'un t'appelle : « Bonjour, ici le service client. Votre compte va être bloqué ce soir », ou « Vous avez gagné un bonus ». Pour « régler le problème », il te demande ton code PIN, ou te dicte des chiffres, des étoiles et des dièses à taper sur ton téléphone.",
            "En tapant ces codes, tu peux envoyer toi-même ton argent au voleur, ou changer ton code secret pour lui.",
            "Le vrai service client ne te demande jamais ton code PIN et ne te fait jamais taper un code dicté au téléphone.",
            "Raccroche. Puis appelle toi-même le service client, avec le numéro trouvé dans l'application officielle, sur le site de l'opérateur ou en agence."
          ],
          etapes: [],
          retenir: [
            "Ne tape jamais un code dicté par quelqu'un au téléphone.",
            "Raccroche et rappelle toi-même le numéro officiel.",
            "« Votre compte va être bloqué » : c'est fait pour te faire peur et te presser."
          ],
          audio: ""
        },
        {
          titre: "L'argent facile n'existe pas",
          corps: [
            "« Envoie 10 000 F, tu recevras 50 000 F demain. » « Paie 5 000 F de frais pour recevoir ton lot. » « Place ton argent sur notre plateforme, il double chaque semaine. »",
            "Ces promesses circulent sur WhatsApp, Telegram et Facebook. Elles utilisent parfois le nom d'un ministère, d'une banque ou d'une entreprise connue. Le CERT.tg, le centre national de réponse aux incidents de cybersécurité, a déjà publié plusieurs alertes sur ces fausses plateformes d'investissement.",
            "La règle est simple : si on te demande de payer pour recevoir de l'argent, c'est une arnaque.",
            "Au début, on te verse parfois un petit gain pour te mettre en confiance. Ensuite, on te pousse à mettre plus, et tout disparaît."
          ],
          etapes: [],
          retenir: [
            "Payer pour gagner de l'argent, c'est une arnaque.",
            "Un nom officiel sur un message ne prouve rien.",
            "Gagner un peu au début fait partie du piège."
          ],
          audio: ""
        }
      ],
      quiz: [
        {
          question: "Tu reçois un SMS « Vous avez reçu 15 000 F », puis un appel pour te demander de renvoyer l'argent. Que fais-tu d'abord ?",
          options: [
            "Je renvoie vite l'argent.",
            "Je vérifie mon solde dans le menu officiel.",
            "Je rappelle le numéro qui m'a envoyé le SMS."
          ],
          bonne: 1,
          explication: "Le SMS peut être faux. Ton solde, lui, ne ment pas. Le plus souvent, rien n'est arrivé."
        },
        {
          question: "Le « service client » te demande de taper un code avec des étoiles et des dièses pour débloquer ton compte. Que fais-tu ?",
          options: [
            "Je tape le code.",
            "Je raccroche et j'appelle moi-même le numéro officiel.",
            "Je lui donne mon code PIN à la place."
          ],
          bonne: 1,
          explication: "Un code dicté au téléphone peut envoyer ton argent au voleur. Le vrai service client ne fait jamais ça."
        },
        {
          question: "Une page Facebook promet de doubler ton argent en 7 jours. Ton cousin dit qu'il a déjà gagné. Qu'en penses-tu ?",
          options: [
            "C'est sûr, puisque mon cousin a gagné.",
            "C'est une arnaque : les premiers gains servent d'appât.",
            "J'essaie avec une petite somme pour voir."
          ],
          bonne: 1,
          explication: "Les escrocs paient parfois les premiers pour attirer les suivants. À la fin, presque tout le monde perd."
        },
        {
          question: "Qui peut annuler un vrai transfert envoyé par erreur ?",
          options: [
            "La personne qui a reçu l'argent.",
            "L'opérateur Mobile Money.",
            "N'importe quel agent du quartier."
          ],
          bonne: 1,
          explication: "C'est à l'expéditeur de contacter son opérateur. Toi, tu n'as rien à renvoyer."
        }
      ]
    },

    /* ----------------------------- 3 ----------------------------- */
    {
      id: "whatsapp",
      badge: "Pro de WhatsApp",
      titre: "WhatsApp",
      resume: "Ton compte WhatsApp peut être volé en quelques secondes. Ensuite, le voleur écrit à tes proches en se faisant passer pour toi.",
      lecons: [
        {
          titre: "Le code à 6 chiffres",
          corps: [
            "Pour installer WhatsApp sur un téléphone, il faut un code à 6 chiffres, envoyé par SMS au propriétaire du numéro.",
            "Le voleur essaie d'installer WhatsApp avec TON numéro. C'est donc toi qui reçois le code. Puis il t'écrit, souvent depuis le compte déjà piraté d'un ami : « Je t'ai envoyé un code par erreur, renvoie-le moi stp. »",
            "Si tu envoies ce code, il prend ton compte. Tu es déconnecté, et il écrit à tous tes contacts et à tous tes groupes en se faisant passer pour toi.",
            "Le code WhatsApp ne se donne à personne. WhatsApp lui-même ne te le demandera jamais par message."
          ],
          etapes: [],
          retenir: [
            "Le code WhatsApp à 6 chiffres ne se partage jamais.",
            "Un ami qui te le demande a probablement été piraté : appelle-le.",
            "Tu as reçu un code sans rien demander ? Quelqu'un essaie de prendre ton compte. Ne fais rien avec ce code."
          ],
          audio: ""
        },
        {
          titre: "Active la vérification en deux étapes",
          corps: [
            "La vérification en deux étapes ajoute un deuxième code, que tu choisis toi-même. Même avec le code reçu par SMS, le voleur ne pourra pas installer ton compte.",
            "Choisis un code que tu n'utilises nulle part ailleurs, surtout pas ton code PIN Mobile Money. Selon ta version de WhatsApp, on te demandera un code à 6 chiffres ou un mot de passe.",
            "Ajoute ton adresse e-mail si tu en as une : c'est elle qui te permettra de récupérer ton compte si tu oublies ce code."
          ],
          etapes: [
            "Ouvre WhatsApp et va dans Paramètres.",
            "Appuie sur Compte.",
            "Appuie sur Vérification en deux étapes.",
            "Appuie sur Activer, puis choisis ton code et confirme-le.",
            "Ajoute ton adresse e-mail quand WhatsApp te la demande."
          ],
          retenir: [
            "Active la vérification en deux étapes aujourd'hui.",
            "Choisis un code différent de ton code Mobile Money.",
            "Ajoute ton e-mail pour pouvoir récupérer ton compte."
          ],
          audio: ""
        },
        {
          titre: "« C'est moi, j'ai changé de numéro »",
          corps: [
            "Un message arrive d'un numéro inconnu : « Maman, c'est moi, mon téléphone est gâté, voici mon nouveau numéro. Envoie-moi 20 000 F, c'est urgent, je t'explique après. »",
            "Parfois, le message vient du vrai compte d'un ami qui a été piraté. Il demande un prêt rapide, ou ton code.",
            "Avant d'envoyer de l'argent, appelle la personne sur son ancien numéro, ou pose-lui une question que seul ton proche connaît. Un escroc trouve presque toujours une excuse pour ne pas répondre à un appel.",
            "Si c'est une arnaque, préviens ton proche et vos groupes communs. Puis bloque et signale le numéro dans WhatsApp."
          ],
          etapes: [],
          retenir: [
            "Une demande d'argent par message ? Appelle d'abord la personne.",
            "Urgence, nouveau numéro et argent ensemble : c'est un signal d'alerte.",
            "Bloque et signale le numéro dans WhatsApp."
          ],
          audio: ""
        }
      ],
      quiz: [
        {
          question: "Tu reçois un code WhatsApp par SMS alors que tu n'as rien demandé. Que fais-tu ?",
          options: [
            "Je l'envoie à la personne qui me le réclame.",
            "Je ne le partage pas et j'active la vérification en deux étapes.",
            "Je désinstalle WhatsApp."
          ],
          bonne: 1,
          explication: "Quelqu'un essaie de prendre ton compte. Garde le code pour toi et ajoute la vérification en deux étapes."
        },
        {
          question: "Où active-t-on la vérification en deux étapes ?",
          options: [
            "Paramètres, puis Compte, puis Vérification en deux étapes.",
            "Dans les statuts.",
            "Dans un groupe WhatsApp."
          ],
          bonne: 0,
          explication: "Tout se fait dans Paramètres, puis Compte. Le nom exact peut changer un peu selon la version."
        },
        {
          question: "Ton « fils » t'écrit d'un nouveau numéro pour te demander de l'argent en urgence. Que fais-tu ?",
          options: [
            "J'envoie vite, c'est urgent.",
            "Je l'appelle sur son ancien numéro avant tout.",
            "Je lui demande d'envoyer une photo de lui."
          ],
          bonne: 1,
          explication: "Une photo peut être volée sur Facebook. Un appel, ou une question que seul ton fils connaît, est bien plus sûr."
        },
        {
          question: "Quel code choisir pour la vérification en deux étapes ?",
          options: [
            "Le même que mon code Mobile Money.",
            "Un nouveau code que je n'utilise nulle part ailleurs.",
            "123456"
          ],
          bonne: 1,
          explication: "Si un code est découvert, il ne doit ouvrir qu'une seule porte."
        }
      ]
    },

    /* ----------------------------- 4 ----------------------------- */
    {
      id: "emploi",
      badge: "Chasseur de faux recruteurs",
      titre: "Fausses offres d'emploi",
      resume: "Les faux recruteurs visent ceux qui cherchent un travail, un stage ou une bourse. Leur but : te faire payer des « frais ».",
      lecons: [
        {
          titre: "Les signaux d'alerte",
          corps: [
            "Une vraie entreprise ne te fait pas payer pour un emploi. Frais de dossier, d'inscription, de formation, de visite médicale ou de badge : dès qu'on te demande de l'argent, méfie-toi.",
            "Autres signaux : un salaire très élevé pour peu de travail, un recrutement sans entretien, un recruteur joignable seulement sur WhatsApp, une adresse e-mail gratuite (Gmail, Yahoo) pour une « grande société », et la pression du temps : « Il ne reste que 3 places, payez avant ce soir. »",
            "Les fautes, le texte copié-collé et le logo flou sont aussi des indices. Mais attention : une arnaque peut être très bien présentée."
          ],
          etapes: [],
          retenir: [
            "Payer pour obtenir un travail, c'est une arnaque.",
            "Trop beau, trop rapide, trop pressé : prends le temps de vérifier.",
            "Un beau logo ne prouve rien."
          ],
          audio: ""
        },
        {
          titre: "Les faux recrutements « officiels »",
          corps: [
            "Les escrocs utilisent le nom de l'État, d'un ministère, d'une ONG ou d'une grande entreprise : faux concours, fausses listes d'admis, fausses ventes aux enchères.",
            "Le CERT.tg a par exemple signalé une fausse vente aux enchères au nom de l'OTR (Office togolais des recettes). Pour « participer », il fallait envoyer environ 100 000 F de frais d'inscription sur un numéro Mobile Money.",
            "Les vrais recrutements publics sont annoncés sur les sites et les pages officielles de l'institution. Va vérifier toi-même sur ces canaux, sans utiliser le lien ni le numéro du message."
          ],
          etapes: [],
          retenir: [
            "Le nom d'un ministère sur un message ne prouve rien.",
            "Vérifie sur le site ou la page officielle, pas avec le lien reçu.",
            "Des frais à payer sur un numéro Mobile Money : arnaque."
          ],
          audio: ""
        },
        {
          titre: "Vérifier avant de répondre",
          corps: [
            "Avant de répondre à une offre, prends cinq minutes pour vérifier. Les vraies offres attendent ; les fausses te pressent.",
            "Ne donne ni ta pièce d'identité, ni ton numéro Mobile Money, ni aucun code avant d'être sûr. Ces informations servent ensuite à d'autres arnaques."
          ],
          etapes: [
            "Cherche sur internet le nom de l'entreprise et le numéro du recruteur, avec le mot « arnaque ».",
            "Trouve toi-même le site ou la page officielle de l'entreprise.",
            "Appelle l'entreprise sur son numéro officiel, pas sur celui de l'annonce.",
            "Si tu as encore un doute, colle le texte de l'offre dans ArnaKO : il cherche les signaux d'arnaque pour toi."
          ],
          lien: { texte: "Analyser une offre avec ArnaKO", url: "{arnako}" },
          retenir: [
            "Cherche « nom de l'entreprise + arnaque » sur internet.",
            "Rappelle l'entreprise sur son numéro officiel.",
            "Ta pièce d'identité ne s'envoie pas à un inconnu."
          ],
          audio: ""
        }
      ],
      quiz: [
        {
          question: "Une offre de « caissier dans une grande société » demande 15 000 F de frais de dossier. Qu'en penses-tu ?",
          options: [
            "C'est normal pour un emploi.",
            "C'est une arnaque : un vrai employeur ne fait pas payer.",
            "Je paie la moitié pour commencer."
          ],
          bonne: 1,
          explication: "Un employeur te paie ; ce n'est jamais à toi de le payer pour être recruté."
        },
        {
          question: "Le recruteur est joignable seulement sur WhatsApp et utilise une adresse Gmail. C'est :",
          options: [
            "Un signal d'alerte.",
            "La preuve que c'est sérieux.",
            "Sans aucune importance."
          ],
          bonne: 0,
          explication: "Une vraie entreprise a en général un site, un numéro fixe ou une adresse e-mail à son nom."
        },
        {
          question: "Un message annonce un concours de la fonction publique, avec un lien pour s'inscrire et payer. Que fais-tu ?",
          options: [
            "Je clique et je paie vite.",
            "Je vérifie sur le site ou la page officielle de l'institution.",
            "Je partage le lien à mes amis."
          ],
          bonne: 1,
          explication: "Les vraies annonces sont sur les canaux officiels. Le lien d'un message peut mener à une fausse page."
        },
        {
          question: "On te demande la photo de ta carte d'identité pour « ouvrir ton dossier », avant tout entretien. Que fais-tu ?",
          options: [
            "Je l'envoie.",
            "J'attends d'avoir vérifié l'entreprise.",
            "J'envoie celle d'un ami."
          ],
          bonne: 1,
          explication: "Ta pièce d'identité peut servir à ouvrir des comptes ou à tromper d'autres personnes en ton nom."
        }
      ]
    },

    /* ----------------------------- 5 ----------------------------- */
    {
      id: "reseaux",
      badge: "Malin des réseaux",
      titre: "Réseaux sociaux",
      resume: "Faux profils, comptes piratés, chantage : protège ce que tu publies et ce que tu partages.",
      lecons: [
        {
          titre: "Faux profils et comptes piratés",
          corps: [
            "Un faux profil copie les photos et le nom d'une vraie personne (un ami, une star, un pasteur, un chef d'entreprise) pour demander de l'argent ou vendre de faux produits.",
            "Les signes : un compte récent, peu de publications, beaucoup de demandes d'amis, une histoire triste ou une offre très généreuse.",
            "Le compte d'un ami peut aussi avoir été piraté. S'il te demande de l'argent ou un code par message, appelle-le.",
            "Pour protéger ton compte : un mot de passe unique, la double protection activée, et jamais de connexion depuis le lien d'un message."
          ],
          etapes: [],
          retenir: [
            "Une photo et un nom se copient très facilement.",
            "Une demande d'argent par message ? Vérifie par un appel.",
            "Signale les faux profils à la plateforme."
          ],
          audio: ""
        },
        {
          titre: "Le chantage aux photos et vidéos",
          corps: [
            "Certains escrocs créent une relation en ligne, obtiennent une photo ou une vidéo intime, puis menacent de la publier si tu ne paies pas. D'autres prétendent avoir une vidéo de toi qui n'existe même pas.",
            "Ne paie pas. Payer ne fait pas disparaître les images : l'escroc revient toujours demander plus.",
            "Arrête de répondre, mais ne supprime rien : fais des captures d'écran des messages, du profil et des numéros. Ce sont tes preuves.",
            "Signale le compte à la plateforme et au CERT.tg, et parles-en à une personne de confiance. Tu es la victime : ce n'est pas ta faute."
          ],
          etapes: [],
          retenir: [
            "Ne paie jamais un chantage.",
            "Garde les preuves avec des captures d'écran, puis bloque.",
            "Parle à quelqu'un de confiance et signale. Ce n'est pas ta faute."
          ],
          audio: ""
        },
        {
          titre: "Ce que tu publies peut servir contre toi",
          corps: [
            "Ta date de naissance, ton quartier, le nom de tes enfants, ton lieu de travail, la photo de ta carte d'identité : les escrocs rassemblent ces informations pour te tromper ou deviner tes mots de passe.",
            "Avant de publier, demande-toi : « Est-ce qu'un inconnu pourrait utiliser ça ? »",
            "Choisis qui voit tes publications : dans les paramètres de confidentialité de Facebook, préfère « Amis » à « Public ».",
            "Ne publie pas tes voyages pendant que tu es absent. Partage les photos à ton retour."
          ],
          etapes: [],
          retenir: [
            "Pas de pièce d'identité, de billet ni de reçu en photo publique.",
            "Mets tes publications en « Amis » plutôt qu'en « Public ».",
            "Partage tes voyages au retour, pas pendant."
          ],
          audio: ""
        }
      ],
      quiz: [
        {
          question: "Le compte Facebook d'un pasteur connu t'écrit pour te demander une « offrande » par Mobile Money. Qu'en penses-tu ?",
          options: [
            "Je paie, c'est pour l'église.",
            "Je me méfie : c'est souvent un faux profil.",
            "Je lui donne mon code pour qu'il se serve."
          ],
          bonne: 1,
          explication: "Les faux profils de personnalités sont très courants. Vérifie auprès de l'église, par un autre moyen."
        },
        {
          question: "Quelqu'un menace de publier une vidéo intime de toi si tu ne paies pas. Que fais-tu ?",
          options: [
            "Je paie pour que ça s'arrête.",
            "Je ne paie pas, je garde les preuves, je bloque et je signale.",
            "Je supprime toute la conversation."
          ],
          bonne: 1,
          explication: "Payer n'arrête pas le chantage. Les preuves servent à signaler et à porter plainte."
        },
        {
          question: "Quelle publication est la plus risquée ?",
          options: [
            "La photo d'un coucher de soleil.",
            "La photo de ma carte d'identité.",
            "La photo d'un plat que j'ai cuisiné."
          ],
          bonne: 1,
          explication: "Ta carte d'identité permet de se faire passer pour toi."
        },
        {
          question: "Pour limiter qui voit tes publications Facebook, tu choisis :",
          options: [
            "Public",
            "Amis",
            "Ça ne change rien."
          ],
          bonne: 1,
          explication: "« Amis » limite tes publications aux personnes que tu as acceptées."
        }
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* Jeu « Arnaque ou pas ? »                                            */
  /* Les numéros sont masqués et les liens « désamorcés » ([.]) exprès.  */
  /* ------------------------------------------------------------------ */
  scenarios: [
    {
      id: "faux-transfert", niveau: "facile",
      module: "mobile-money", lecon: 1,
      canal: "sms",
      contexte: "",
      expediteur: "+228 9• •• •• 17",
      messages: [
        "Vous avez reçu 25 000 F de KOFFI A. Nouveau solde : 25 340 F. Réf : MP2611.0815.",
        "Bonsoir, je me suis trompé en envoyant 25 000 F sur ton numéro. C'est pour l'hôpital de ma mère, renvoie stp 🙏"
      ],
      verdict: "arnaque",
      indices: [
        "Le message vient d'un numéro ordinaire, pas du nom de l'opérateur.",
        "Juste après, quelqu'un te presse avec une histoire d'urgence.",
        "On te demande de renvoyer l'argent toi-même."
      ],
      explication: "C'est le faux « transfert par erreur ». Vérifie ton solde dans le menu officiel : tu verras que rien n'est arrivé."
    },
    {
      id: "retrait-normal", niveau: "facile",
      module: "mobile-money", lecon: 1,
      canal: "sms",
      contexte: "Tu viens de faire un retrait de 10 000 F chez l'agent de ton quartier.",
      expediteur: "Mixx",
      messages: [
        "Retrait de 10 000 F effectué. Nouveau solde : 4 900 F."
      ],
      verdict: "normal",
      indices: [
        "C'est toi qui viens de faire l'opération.",
        "Le message arrive sous le nom de l'opérateur.",
        "Il ne te demande ni code, ni argent, ni clic."
      ],
      explication: "Rien de suspect. En cas de doute, vérifie quand même ton solde dans le menu officiel."
    },
    {
      id: "faux-service-client", niveau: "moyen",
      module: "mobile-money", lecon: 2,
      canal: "appel",
      contexte: "",
      expediteur: "+228 7• •• •• 52",
      messages: [
        "Bonjour, ici le service client. Suite à une mise à jour, votre compte Mobile Money sera bloqué ce soir.",
        "Pour l'éviter, tapez le code que je vais vous dicter, puis entrez votre code secret pour confirmer."
      ],
      verdict: "arnaque",
      indices: [
        "On te menace de bloquer ton compte pour te faire peur.",
        "On te dicte un code à taper.",
        "On te demande ton code secret."
      ],
      explication: "Le vrai service client ne demande jamais ton code et ne te dicte rien. Raccroche, puis appelle toi-même le numéro officiel."
    },
    {
      id: "cadeau-lien", niveau: "facile",
      module: "mobile-money", lecon: 3,
      canal: "whatsapp",
      contexte: "Ce message a été transféré dans un groupe WhatsApp de ton quartier.",
      expediteur: "Groupe « Voisins Bè-Kpota »",
      messages: [
        "🎁 PROMO ANNIVERSAIRE ! Gagnez 50 000 F offerts sur votre compte Mobile Money. Réclamez ici : mixx-cadeau-tg[.]xyz ⏰ Offre valable 2 heures seulement !"
      ],
      verdict: "arnaque",
      indices: [
        "Le lien ne mène pas au site officiel de l'opérateur.",
        "Un gros cadeau sans raison.",
        "Une limite de temps pour t'empêcher de réfléchir."
      ],
      explication: "Ce lien mène à une fausse page qui te demandera ton numéro et ton code. Ne clique pas, et préviens le groupe."
    },
    {
      id: "code-par-erreur", niveau: "moyen",
      module: "codes", lecon: 3,
      canal: "whatsapp",
      contexte: "",
      expediteur: "Ama 💛",
      messages: [
        "Coucou ma chérie ! Je t'ai envoyé un code à 6 chiffres par erreur 🙈",
        "Tu peux me le renvoyer stp ? C'est urgent"
      ],
      verdict: "arnaque",
      indices: [
        "On te demande un code reçu par SMS.",
        "La personne insiste sur l'urgence.",
        "Le compte de ton amie a sans doute été piraté."
      ],
      explication: "Si tu envoies ce code, le voleur prend ton compte WhatsApp. Appelle Ama sur son numéro pour la prévenir."
    },
    {
      id: "code-normal", niveau: "facile",
      module: "whatsapp", lecon: 1,
      canal: "sms",
      contexte: "Tu viens d'acheter un nouveau téléphone et tu installes WhatsApp toi-même.",
      expediteur: "WhatsApp",
      messages: [
        "Votre code WhatsApp : 418-207. Ne partagez pas ce code avec d'autres personnes."
      ],
      verdict: "normal",
      indices: [
        "C'est toi qui as demandé ce code, à l'instant.",
        "Le message dit lui-même de ne pas le partager."
      ],
      explication: "Tape ce code dans ton téléphone, et nulle part ailleurs. Personne d'autre n'a besoin de le voir."
    },
    {
      id: "nouveau-numero", niveau: "facile",
      module: "whatsapp", lecon: 3,
      canal: "whatsapp",
      contexte: "",
      expediteur: "+228 9• •• •• 63",
      messages: [
        "Maman c'est moi Edem, mon téléphone est tombé dans l'eau 😩 C'est mon nouveau numéro.",
        "Envoie-moi 20 000 F stp, c'est urgent, je t'explique après."
      ],
      verdict: "arnaque",
      indices: [
        "Un numéro inconnu qui dit être un proche.",
        "Une demande d'argent urgente.",
        "« Je t'explique après » : il évite les questions."
      ],
      explication: "Appelle Edem sur son ancien numéro, ou pose une question que seul lui connaît, avant d'envoyer quoi que ce soit."
    },
    {
      id: "nouveau-numero-normal", niveau: "moyen",
      module: "whatsapp", lecon: 3,
      canal: "whatsapp",
      contexte: "Hier, ton frère Yao t'a appelé pour te dire qu'il changeait de puce.",
      expediteur: "+228 9• •• •• 08",
      messages: [
        "Salut, c'est Yao 👋 Voici mon nouveau numéro, comme je t'ai dit hier au téléphone. Enregistre-le !"
      ],
      verdict: "normal",
      indices: [
        "Ton frère t'avait prévenu de vive voix.",
        "Il ne demande ni argent, ni code."
      ],
      explication: "Tout est cohérent. Si ce numéro te demande un jour de l'argent, appelle quand même pour vérifier."
    },
    {
      id: "faux-recrutement", niveau: "facile",
      module: "emploi", lecon: 1,
      canal: "facebook",
      contexte: "Tu vois cette publication dans un groupe Facebook d'offres d'emploi.",
      expediteur: "Recrutement Togo Emplois",
      messages: [
        "🔴 URGENT ! Grande société recrute 40 agents (caisse, sécurité, ménage). Salaire : 250 000 F. Sans diplôme, sans expérience. Frais de dossier : 5 000 F par Mobile Money au 9• •• •• 88. Places limitées !"
      ],
      verdict: "arnaque",
      indices: [
        "On te demande de payer des frais de dossier.",
        "Le nom de la « grande société » n'est jamais donné.",
        "Salaire élevé, sans diplôme ni entretien, et « places limitées »."
      ],
      explication: "Un vrai employeur ne fait pas payer. Les 5 000 F de chaque candidat vont directement à l'escroc."
    },
    {
      id: "entretien-normal", niveau: "moyen",
      module: "emploi", lecon: 3,
      canal: "email",
      contexte: "La semaine dernière, tu as postulé sur le site officiel d'une entreprise de Lomé.",
      expediteur: "Service des ressources humaines",
      messages: [
        "Bonjour, suite à votre candidature au poste d'assistant(e) comptable, nous vous invitons à un entretien jeudi à 10 h dans nos locaux. Merci de confirmer votre présence par retour de mail."
      ],
      verdict: "normal",
      indices: [
        "Tu as vraiment postulé auprès de cette entreprise.",
        "L'entretien a lieu dans les locaux de l'entreprise.",
        "On ne te demande ni argent ni document."
      ],
      explication: "Ce message est normal. Pour être tranquille, vérifie l'adresse des locaux sur le site officiel de l'entreprise."
    },
    {
      id: "faux-concours", niveau: "moyen",
      module: "emploi", lecon: 2,
      canal: "whatsapp",
      contexte: "",
      expediteur: "Recrutement Ministère 2026",
      messages: [
        "FÉLICITATIONS ! Votre nom figure sur la liste des admis au recrutement 2026. Pour valider votre poste, envoyez 25 000 F de frais de badge au 9• •• •• 41 avant vendredi."
      ],
      verdict: "arnaque",
      indices: [
        "Tu n'as passé aucun concours.",
        "On te demande des frais à envoyer sur un numéro Mobile Money.",
        "Le message arrive sur WhatsApp, pas par un canal officiel."
      ],
      explication: "Une administration ne fait pas payer un badge par Mobile Money. Vérifie toujours sur le site ou la page officielle."
    },
    {
      id: "faux-concours-star", niveau: "facile",
      module: "reseaux", lecon: 1,
      canal: "facebook",
      contexte: "Un compte au nom d'un artiste connu t'écrit en message privé.",
      expediteur: "Compte « officiel » d'un artiste",
      messages: [
        "Bravo 🎉 Tu fais partie des 100 gagnants de mon concours ! Ton smartphone neuf est prêt. Envoie juste 3 000 F de frais de livraison et ton adresse."
      ],
      verdict: "arnaque",
      indices: [
        "Tu n'as participé à aucun concours.",
        "Il faut payer pour recevoir le cadeau.",
        "Un message privé d'une star à un inconnu."
      ],
      explication: "C'est un faux profil. Les « frais de livraison » sont le vrai but de l'arnaque."
    },
    {
      id: "chantage", niveau: "moyen",
      module: "reseaux", lecon: 2,
      canal: "facebook",
      contexte: "Après quelques jours de discussion avec une personne rencontrée en ligne, tu reçois ceci.",
      expediteur: "Profil inconnu",
      messages: [
        "J'ai enregistré notre appel vidéo. Si tu n'envoies pas 100 000 F avant ce soir, j'envoie la vidéo à tous tes amis Facebook."
      ],
      verdict: "arnaque",
      indices: [
        "Une menace avec un délai très court.",
        "Une demande d'argent en échange du silence."
      ],
      explication: "Ne paie pas : il reviendrait demander plus. Fais des captures d'écran, bloque, signale, et parles-en à une personne de confiance."
    },
    /* ---------------- Codes secrets ---------------- */
    {
      id: "agent-pin-sms", niveau: "facile",
      module: "codes", lecon: 1, canal: "sms", contexte: "",
      expediteur: "+228 9• •• •• 30",
      messages: ["Bonjour, ici votre agent Mobile Money. Pour finir votre retrait, envoyez-moi votre code PIN par SMS. Merci."],
      verdict: "arnaque",
      indices: ["On te demande ton code PIN.", "Un vrai agent n'a jamais besoin de ton code.", "Le message vient d'un numéro ordinaire."],
      explication: "Ton code PIN ne se donne à personne, ni par SMS, ni de vive voix. Supprime le message et bloque le numéro."
    },
    {
      id: "faux-facebook-suppression", niveau: "moyen",
      module: "codes", lecon: 2, canal: "email", contexte: "",
      expediteur: "Sécurité Facebook <alerte@securite-fb-compte[.]com>",
      messages: ["Votre compte sera supprimé dans 24 heures suite à un signalement. Pour l'éviter, confirmez votre mot de passe ici : securite-fb-compte[.]com/verifier"],
      verdict: "arnaque",
      indices: ["L'adresse de l'expéditeur n'est pas celle de Facebook.", "On te menace d'une suppression rapide.", "On te demande ton mot de passe via un lien."],
      explication: "C'est du hameçonnage : la fausse page vole ton mot de passe. Pour vérifier, ouvre toi-même l'application Facebook, jamais le lien reçu."
    },
    {
      id: "code-google-normal", niveau: "moyen",
      module: "codes", lecon: 3, canal: "sms",
      contexte: "Tu viens de te connecter à ton compte Gmail sur un ordinateur du cybercafé.",
      expediteur: "Google",
      messages: ["G-482915 est votre code de validation Google."],
      verdict: "normal",
      indices: ["C'est toi qui viens de demander à te connecter.", "Le code est à taper sur l'écran devant toi, pas à envoyer à quelqu'un."],
      explication: "Tout est normal. Pense seulement à te déconnecter de ton compte avant de quitter le cybercafé."
    },
    {
      id: "faux-changement-sim", niveau: "expert",
      module: "codes", lecon: 3, canal: "whatsapp", contexte: "",
      expediteur: "Service client ✅",
      messages: ["Bonjour, suite à la mise à jour des cartes SIM, votre ligne sera suspendue ce soir.", "Pour garder votre numéro, communiquez-nous le code à 6 chiffres que vous allez recevoir par SMS."],
      verdict: "arnaque",
      indices: ["Un compte avec une coche verte peut être faux.", "On te demande un code reçu par SMS.", "La menace de suspension sert à te presser."],
      explication: "Avec ce code, l'escroc peut prendre ton WhatsApp ou ton compte Mobile Money. Aucun service client ne demande un code reçu par SMS."
    },
    {
      id: "code-facebook-normal", niveau: "facile",
      module: "codes", lecon: 3, canal: "sms",
      contexte: "Tu as oublié ton mot de passe Facebook et tu viens d'appuyer sur « Mot de passe oublié ».",
      expediteur: "Facebook",
      messages: ["Votre code de réinitialisation Facebook est 482 113. Ne le communiquez à personne."],
      verdict: "normal",
      indices: ["Tu viens de le demander toi-même.", "Le message dit de ne le donner à personne."],
      explication: "Tape ce code dans l'application, puis choisis un nouveau mot de passe solide, différent de tes autres comptes."
    },
    {
      id: "fausse-banque-appel", niveau: "expert",
      module: "codes", lecon: 3, canal: "appel", contexte: "",
      expediteur: "+228 9• •• •• 75",
      messages: ["Bonjour, ici le service sécurité de votre banque. Une opération suspecte de 300 000 F est en cours sur votre compte.", "Pour l'annuler, je vais vous envoyer un code par SMS. Lisez-le moi vite, sinon l'argent part."],
      verdict: "arnaque",
      indices: ["On te fait peur avec une grosse somme.", "On te demande de lire un code reçu par SMS.", "L'urgence t'empêche de réfléchir."],
      explication: "Ce code sert justement à valider l'opération de l'escroc. Raccroche, puis appelle ta banque au numéro inscrit sur ta carte ou en agence."
    },

    /* ---------------- Mobile Money ---------------- */
    {
      id: "nom-imite", niveau: "expert",
      module: "mobile-money", lecon: 1, canal: "sms",
      contexte: "Ce SMS arrive sous le nom « Mixx ». Deux minutes plus tard, un inconnu t'appelle pour récupérer l'argent.",
      expediteur: "Mixx",
      messages: ["Transfert reçu : 50 000 F de AFI K. Nouveau solde : 50 210 F."],
      verdict: "arnaque",
      indices: ["Le nom d'un expéditeur peut être imité.", "Un inconnu appelle juste après pour se faire rembourser.", "Seul ton solde, vu dans le menu officiel, fait foi."],
      explication: "Même un SMS qui affiche le nom de l'opérateur peut être faux. Vérifie ton solde toi-même : tu verras que rien n'est arrivé."
    },
    {
      id: "tirage-frais", niveau: "facile",
      module: "mobile-money", lecon: 3, canal: "whatsapp", contexte: "",
      expediteur: "Promo Fin d'Année 🇹🇬",
      messages: ["🎉 Félicitations ! Votre numéro a été tiré au sort. Vous gagnez 100 000 F !", "Pour recevoir votre gain, envoyez 2 000 F de frais d'activation au 9• •• •• 61."],
      verdict: "arnaque",
      indices: ["Tu n'as participé à aucun tirage.", "Il faut payer pour recevoir le gain.", "Le paiement va sur un numéro ordinaire."],
      explication: "Payer pour gagner, c'est toujours une arnaque. Les 2 000 F de chaque victime vont directement à l'escroc."
    },
    {
      id: "faux-agent-remboursement", niveau: "moyen",
      module: "mobile-money", lecon: 2, canal: "appel", contexte: "",
      expediteur: "+228 7• •• •• 19",
      messages: ["Bonjour, je suis agent Mobile Money. J'ai fait un dépôt sur votre numéro par erreur.", "Vous allez recevoir un SMS avec un code : tapez-le sur votre téléphone pour confirmer le remboursement."],
      verdict: "arnaque",
      indices: ["Un inconnu te demande de taper un code.", "Un remboursement se fait par l'opérateur, pas par toi.", "Il se présente comme agent pour te rassurer."],
      explication: "En tapant ce code, tu peux envoyer ton propre argent. Raccroche et vérifie ton solde dans le menu officiel."
    },
    {
      id: "envoi-soeur-normal", niveau: "facile",
      module: "mobile-money", lecon: 1, canal: "sms",
      contexte: "Tu viens d'envoyer 5 000 F à ta sœur depuis l'application officielle.",
      expediteur: "Mixx",
      messages: ["Transfert de 5 000 F vers ADJOA M. effectué. Nouveau solde : 12 300 F."],
      verdict: "normal",
      indices: ["Tu viens de faire l'opération toi-même.", "Le message ne demande rien."],
      explication: "C'est la confirmation de ton propre envoi. Rien à faire."
    },
    {
      id: "investissement-triple", niveau: "moyen",
      module: "mobile-money", lecon: 3, canal: "facebook", contexte: "",
      expediteur: "Investissement Togo Prospérité",
      messages: ["💰 Placez 20 000 F aujourd'hui, recevez 60 000 F dans 7 jours ! Déjà 3 000 membres payés ✅ Preuves en commentaires 👇 Inscription par WhatsApp uniquement."],
      verdict: "arnaque",
      indices: ["Tripler son argent en une semaine est impossible.", "Les « preuves » se fabriquent facilement.", "Tout se passe sur WhatsApp, sans entreprise identifiable."],
      explication: "C'est une fausse plateforme d'investissement : les premiers sont parfois payés avec l'argent des suivants, puis tout disparaît."
    },
    {
      id: "fausse-capture", niveau: "expert",
      module: "mobile-money", lecon: 1, canal: "whatsapp", contexte: "",
      expediteur: "+228 9• •• •• 22",
      messages: ["Bonjour, je suis commerçante au grand marché. Je t'ai envoyé 15 000 F par erreur au lieu de mon fournisseur 😥", "📷 Capture d'écran : « Transfert de 15 000 F réussi »", "Renvoie stp, c'est l'argent de la marchandise 🙏"],
      verdict: "arnaque",
      indices: ["Une capture d'écran se fabrique en deux minutes.", "On te demande de renvoyer toi-même.", "L'histoire touchante sert à t'émouvoir."],
      explication: "Une capture ne prouve rien. Vérifie ton solde dans le menu officiel, et si un vrai envoi est arrivé par erreur, c'est l'opérateur qui l'annule."
    },
    {
      id: "service-client-normal", niveau: "moyen",
      module: "mobile-money", lecon: 2, canal: "appel",
      contexte: "Ton retrait a échoué. Tu as appelé toi-même le service client avec le numéro trouvé dans l'application officielle.",
      expediteur: "Service client",
      messages: ["Bonjour, nous voyons votre retrait échoué. L'argent revient automatiquement sur votre compte sous 24 heures.", "Avez-vous d'autres questions ?"],
      verdict: "normal",
      indices: ["C'est toi qui as appelé le numéro officiel.", "On ne te demande ni code, ni manipulation."],
      explication: "Tout est normal. La règle reste la même : même au vrai service client, on ne donne jamais son code PIN."
    },
    {
      id: "faux-site-reactivation", niveau: "expert",
      module: "mobile-money", lecon: 2, canal: "sms", contexte: "",
      expediteur: "MobileMoney",
      messages: ["Votre compte est suspendu pour vérification d'identité. Réactivez-le ici avec votre numéro et votre code PIN : mobilemoney-togo-verif[.]com"],
      verdict: "arnaque",
      indices: ["Le lien ne mène pas au site officiel.", "On te demande ton code PIN sur une page web.", "La suspension est inventée pour te faire peur."],
      explication: "Aucun opérateur ne demande ton code PIN sur un site. En cas de doute, appelle le service client avec le numéro officiel."
    },
    {
      id: "taches-remunerees", niveau: "moyen",
      module: "mobile-money", lecon: 3, canal: "whatsapp", contexte: "",
      expediteur: "+44 •• •• •• 03",
      messages: ["Hello 👋 Gagnez 5 000 F par jour en aimant des vidéos YouTube. Tâche simple, paiement immédiat sur Mobile Money !", "Pour débloquer les tâches mieux payées, il faut juste un dépôt de 10 000 F."],
      verdict: "arnaque",
      indices: ["Un numéro étranger inconnu.", "Beaucoup d'argent pour un travail très simple.", "Il faut payer pour « débloquer » la suite."],
      explication: "C'est l'arnaque aux tâches : on te paie un peu au début, puis on te demande de déposer toujours plus. Bloque et signale le numéro."
    },

    /* ---------------- WhatsApp ---------------- */
    {
      id: "code-groupe-famille", niveau: "facile",
      module: "whatsapp", lecon: 1, canal: "whatsapp",
      contexte: "Ce message arrive dans le groupe WhatsApp de la famille.",
      expediteur: "Tante Akossiwa",
      messages: ["Bonsoir à tous. Je viens d'envoyer un code par erreur à quelqu'un du groupe 🙈 Celui qui l'a reçu, envoie-le moi en privé stp, c'est urgent."],
      verdict: "arnaque",
      indices: ["On demande un code reçu par SMS.", "Le compte de ta tante a sans doute déjà été volé.", "Le voleur vise maintenant tout le groupe."],
      explication: "Appelle ta tante pour la prévenir, et dis au groupe de ne rien envoyer. Puis active la vérification en deux étapes."
    },
    {
      id: "faux-support-whatsapp", niveau: "moyen",
      module: "whatsapp", lecon: 1, canal: "whatsapp", contexte: "",
      expediteur: "WhatsApp Support ✅",
      messages: ["Votre compte WhatsApp sera désactivé dans 24 h pour activité suspecte.", "Pour le garder, répondez avec le code de vérification que vous venez de recevoir."],
      verdict: "arnaque",
      indices: ["WhatsApp ne te demande jamais ton code par message.", "La coche verte et le nom peuvent être imités.", "La menace de désactivation sert à te presser."],
      explication: "Ne réponds pas. Bloque et signale ce compte, puis active la vérification en deux étapes."
    },
    {
      id: "video-mariage-normal", niveau: "facile",
      module: "whatsapp", lecon: 3, canal: "whatsapp",
      contexte: "Ce matin au marché, ton amie Sena t'a dit qu'elle allait t'envoyer la vidéo du mariage.",
      expediteur: "Sena",
      messages: ["Voici la vidéo du mariage comme promis 🎉💃", "🎬 Vidéo (2 min)"],
      verdict: "normal",
      indices: ["Ton amie t'avait prévenu de vive voix.", "Elle ne demande ni argent, ni code, ni clic sur un lien."],
      explication: "Tout est normal. Méfie-toi seulement si un « fichier » te demande d'installer une application ou de te connecter."
    },
    {
      id: "cousin-frontiere", niveau: "expert",
      module: "whatsapp", lecon: 3, canal: "whatsapp", contexte: "",
      expediteur: "Kodjo (ton cousin)",
      messages: ["Frère, je suis bloqué à la frontière, la police veut 30 000 F sinon ils gardent ma moto 😰", "Envoie vite sur ce numéro : 9• •• •• 51. Je te rembourse ce soir, je ne peux pas appeler ici."],
      verdict: "arnaque",
      indices: ["Le message vient bien du compte de ton cousin, mais ce compte peut avoir été volé.", "L'argent part vers un autre numéro que le sien.", "« Je ne peux pas appeler » : il évite la vérification."],
      explication: "Appelle Kodjo sur son numéro habituel, ou une personne qui est avec lui. Un compte piraté écrit exactement comme ça."
    },
    {
      id: "maman-numero-benin", niveau: "facile",
      module: "whatsapp", lecon: 3, canal: "whatsapp", contexte: "",
      expediteur: "+229 •• •• •• 14",
      messages: ["Bonjour maman, c'est moi, j'ai perdu mon téléphone 😢 Enregistre ce nouveau numéro.", "Envoie-moi 10 000 F pour acheter une nouvelle puce stp."],
      verdict: "arnaque",
      indices: ["Un numéro inconnu, même pas du Togo.", "Il ne dit pas son prénom.", "La demande d'argent arrive tout de suite."],
      explication: "Appelle ton enfant sur son ancien numéro ou un proche avant tout. Un escroc envoie ce message à des centaines de « mamans »."
    },
    {
      id: "fille-telephone-copine", niveau: "moyen",
      module: "whatsapp", lecon: 3, canal: "whatsapp",
      contexte: "Hier soir, ta fille Ama t'a appelée pour dire que son téléphone était gâté et qu'elle t'écrirait depuis celui de sa copine Délali.",
      expediteur: "+228 9• •• •• 46",
      messages: ["Maman c'est Ama 😊 Je t'écris avec le téléphone de Délali comme je t'ai dit. Je rentre à 18 h, ne t'inquiète pas."],
      verdict: "normal",
      indices: ["Ta fille t'avait prévenue par un appel.", "Elle ne demande ni argent ni code."],
      explication: "C'est cohérent. Si ce numéro te demande un jour de l'argent, rappelle quand même Ama ou Délali avant."
    },

    /* ---------------- Fausses offres d'emploi ---------------- */
    {
      id: "hotesses-inscription", niveau: "facile",
      module: "emploi", lecon: 1, canal: "facebook",
      contexte: "Tu vois cette publication dans un groupe Facebook d'offres d'emploi.",
      expediteur: "Offres d'emploi Lomé 2026",
      messages: ["🔥 RECRUTEMENT IMMÉDIAT : 25 hôtesses pour un hôtel de luxe. Salaire 300 000 F/mois. Inscription : 10 000 F au 9• •• •• 07. Dépêchez-vous !"],
      verdict: "arnaque",
      indices: ["Des frais d'inscription à payer.", "Le nom de l'hôtel n'est jamais donné.", "Salaire très élevé et pression du temps."],
      explication: "Un vrai employeur ne fait pas payer pour postuler. Les 10 000 F de chaque candidate vont à l'escroc."
    },
    {
      id: "ong-visite-medicale", niveau: "moyen",
      module: "emploi", lecon: 1, canal: "email", contexte: "",
      expediteur: "rh.recrutement.ong@gmail[.]com",
      messages: ["Félicitations ! Votre profil a été retenu pour un poste de chargé de projet dans notre ONG.", "Merci d'envoyer 35 000 F pour la visite médicale obligatoire auprès de notre clinique partenaire, avant vendredi."],
      verdict: "arnaque",
      indices: ["Une ONG sérieuse n'utilise pas une adresse Gmail pour recruter.", "Tu dois payer avant même un entretien.", "La « clinique partenaire » est choisie par eux."],
      explication: "Frais de visite médicale, de dossier ou de badge : c'est le même piège. Ne paie rien et vérifie l'ONG par ses canaux officiels."
    },
    {
      id: "contrat-normal", niveau: "moyen",
      module: "emploi", lecon: 3, canal: "email",
      contexte: "La semaine dernière, tu as passé un entretien dans les bureaux d'une entreprise de Lomé.",
      expediteur: "Service des ressources humaines",
      messages: ["Bonjour, nous avons le plaisir de vous proposer le poste. Votre contrat vous sera remis lors de votre premier jour, lundi à 8 h, dans nos bureaux. Bienvenue !"],
      verdict: "normal",
      indices: ["Tu as vraiment passé un entretien dans leurs bureaux.", "On ne te demande ni argent ni document à envoyer."],
      explication: "Bonne nouvelle, et rien de suspect. Ton contrat se signe sur place, dans les bureaux de l'entreprise."
    },
    {
      id: "resultats-concours", niveau: "expert",
      module: "emploi", lecon: 2, canal: "whatsapp", contexte: "",
      expediteur: "Concours Fonction Publique 2026 – Infos",
      messages: ["📢 Les résultats sont disponibles ! Pour consulter ta note et réserver ta place, paie 7 500 F de frais de dossier sur ce numéro : 9• •• •• 90. Clôture ce soir."],
      verdict: "arnaque",
      indices: ["Les résultats officiels ne se paient pas.", "Paiement sur un numéro Mobile Money ordinaire.", "Délai très court pour t'empêcher de vérifier."],
      explication: "Les résultats d'un concours public sont publiés sur les canaux officiels de l'institution. Va vérifier toi-même."
    },
    {
      id: "bourse-canada", niveau: "expert",
      module: "emploi", lecon: 1, canal: "email", contexte: "",
      expediteur: "Bourses Études Canada <bourses-canada-2026@outlook[.]com>",
      messages: ["Vous avez obtenu une bourse d'études complète au Canada (frais de scolarité, logement et billet d'avion) !", "Pour confirmer, payez 85 000 F de frais de traitement du visa avant la fin de la semaine."],
      verdict: "arnaque",
      indices: ["Tu n'as postulé à aucune bourse.", "Une adresse e-mail gratuite pour un organisme « officiel ».", "Il faut payer pour « confirmer »."],
      explication: "Les vraies bourses ne te contactent pas sans candidature et ne font pas payer par Mobile Money. Vérifie sur le site officiel de l'organisme."
    },
    {
      id: "stage-banque-normal", niveau: "facile",
      module: "emploi", lecon: 3, canal: "email",
      contexte: "Tu as postulé à un stage via le site officiel d'une banque.",
      expediteur: "Recrutement",
      messages: ["Merci pour votre candidature. Nous l'étudions avec attention et reviendrons vers vous si votre profil correspond à nos besoins."],
      verdict: "normal",
      indices: ["Tu as vraiment postulé sur le site officiel.", "On ne te demande rien."],
      explication: "C'est un accusé de réception classique. Rien de suspect."
    },
    {
      id: "visa-travail", niveau: "moyen",
      module: "emploi", lecon: 1, canal: "whatsapp", contexte: "",
      expediteur: "Recruteur International",
      messages: ["Travail au Canada 🇨🇦 Logement offert, billet d'avion payé, salaire 2 000 000 F/mois.", "Il faut juste 150 000 F pour le visa de travail. Places très limitées !"],
      verdict: "arnaque",
      indices: ["Une offre trop belle, sans entreprise nommée.", "Tu dois payer le « visa » toi-même à un inconnu.", "Places limitées pour te presser."],
      explication: "Les faux départs à l'étranger coûtent très cher aux victimes. Aucune vraie entreprise ne recrute ainsi sur WhatsApp."
    },

    /* ---------------- Réseaux sociaux ---------------- */
    {
      id: "tombola-moto", niveau: "facile",
      module: "reseaux", lecon: 1, canal: "facebook", contexte: "",
      expediteur: "Grande Tombola Nationale",
      messages: ["🏍️ Partage cette publication et commente « OUI » pour gagner une moto neuve ! Les gagnants paieront seulement 5 000 F de livraison."],
      verdict: "arnaque",
      indices: ["Une page inconnue qui promet un gros lot.", "Il faut payer la « livraison ».", "Le partage sert à toucher encore plus de victimes."],
      explication: "Il n'y a pas de moto. Ne partage pas, et signale la page à Facebook."
    },
    {
      id: "faux-camarade-pret", niveau: "moyen",
      module: "reseaux", lecon: 1, canal: "facebook",
      contexte: "Ce profil porte le nom et la photo d'un ancien camarade de classe. Il a été créé hier.",
      expediteur: "Ton « ancien camarade »",
      messages: ["Salut l'ami, ça fait longtemps ! Je travaille maintenant dans une banque 😎", "Je peux te faire un prêt de 500 000 F sans garantie. Il faut juste 15 000 F de frais de dossier."],
      verdict: "arnaque",
      indices: ["Un profil tout neuf qui copie un ami.", "Un prêt facile contre des frais payés d'avance.", "Une banque ne prête pas par Messenger."],
      explication: "Contacte ton vrai camarade par un autre moyen pour le prévenir, puis signale le faux profil."
    },
    {
      id: "amour-colis-douane", niveau: "expert",
      module: "reseaux", lecon: 1, canal: "facebook",
      contexte: "Tu discutes depuis trois semaines avec « Grace », rencontrée sur Facebook. Elle ne répond jamais aux appels vidéo.",
      expediteur: "Grace ❤️",
      messages: ["Mon cœur, je t'ai envoyé un colis avec des cadeaux et de l'argent pour qu'on se voie bientôt 🥰", "La douane le bloque et demande 120 000 F. Paie vite stp, sinon ils le renvoient ❤️"],
      verdict: "arnaque",
      indices: ["Une relation uniquement en ligne, jamais en vidéo.", "Un colis bloqué qu'il faut payer.", "Les mots d'amour servent à faire baisser ta garde."],
      explication: "C'est une arnaque aux sentiments. Il n'y a ni colis ni douane. Ne paie rien, garde les preuves et parles-en à un proche."
    },
    {
      id: "mot-de-passe-change-normal", niveau: "moyen",
      module: "reseaux", lecon: 1, canal: "email",
      contexte: "Il y a cinq minutes, tu as changé toi-même ton mot de passe Facebook.",
      expediteur: "Facebook",
      messages: ["Votre mot de passe a été modifié. Si vous êtes à l'origine de cette modification, vous n'avez rien à faire."],
      verdict: "normal",
      indices: ["Tu viens de faire ce changement toi-même.", "Le message ne demande ni clic, ni code."],
      explication: "C'est une simple confirmation. Si un jour tu reçois ce message sans avoir rien changé, sécurise ton compte tout de suite."
    },
    {
      id: "faux-appel-page", niveau: "expert",
      module: "reseaux", lecon: 1, canal: "facebook",
      contexte: "Tu gères la page Facebook de ta boutique.",
      expediteur: "Meta Support Pages",
      messages: ["⚠️ Votre page a enfreint nos règles sur les droits d'auteur et sera supprimée dans 24 h.", "Si c'est une erreur, faites appel ici : meta-support-appel[.]com"],
      verdict: "arnaque",
      indices: ["Le lien ne mène pas au vrai site de Facebook.", "La menace de suppression rapide sert à te presser.", "Les vraies alertes apparaissent dans les paramètres de ta page."],
      explication: "La fausse page d'appel vole tes identifiants et ta page. Vérifie dans l'application Facebook, jamais via le lien reçu."
    },
    {
      id: "fausse-camera", niveau: "moyen",
      module: "reseaux", lecon: 2, canal: "email", contexte: "",
      expediteur: "Inconnu",
      messages: ["J'ai piraté ta caméra et j'ai des vidéos de toi. Envoie 50 000 F avant demain, sinon je les envoie à tous tes contacts."],
      verdict: "arnaque",
      indices: ["Une menace sans aucune preuve.", "Une demande d'argent avec un délai court.", "Le même message est envoyé à des milliers de personnes."],
      explication: "C'est presque toujours du bluff. Ne paie pas, ne réponds pas, garde le message comme preuve et change tes mots de passe par précaution."
    },
    {
      id: "boutique-cousine-normal", niveau: "facile",
      module: "reseaux", lecon: 1, canal: "facebook",
      contexte: "Hier, ta cousine t'a montré la nouvelle page Facebook de sa boutique de pagnes.",
      expediteur: "Pagnes de chez Ayaba",
      messages: ["Merci d'avoir aimé notre page 💛 Nouveaux pagnes en stock, passez nous voir au marché !"],
      verdict: "normal",
      indices: ["Tu connais la boutique et la personne derrière.", "Pas de demande d'argent, de code ni de lien suspect."],
      explication: "C'est un message de remerciement normal."
    }
  ],

  /* Les atouts affichés sur l'accueil */
  pourquoi: [
    { titre: "En français et en ewe", texte: "Les leçons arrivent aussi en ewe, à lire et à écouter, pour apprendre dans la langue de tous les jours." },
    { titre: "Léger, même hors connexion", texte: "Une fois ouvert, le site fonctionne sans internet. Idéal pour les petits forfaits et les petits téléphones." },
    { titre: "Rien n'est collecté", texte: "Pas de compte, pas de publicité, pas de suivi. Ta progression reste dans ton téléphone." }
  ],

  /* ------------------------------------------------------------------ */
  /* Page « Mentions et confidentialité »                                */
  /* ------------------------------------------------------------------ */
  mentions: {
    titre: "Mentions et confidentialité",
    sections: [
      { titre: "Qui édite ce site", paragraphes: ["{site} est un projet personnel et indépendant de {auteur}, créé pour aider le public togolais à reconnaître les arnaques numériques."] },
      { titre: "Aucun lien officiel", paragraphes: [
        "Le site n'est affilié ni à l'Agence nationale de la cybersécurité (ANCy), ni au CERT.tg, ni à aucun opérateur, banque ou réseau social. Les noms de marques cités appartiennent à leurs propriétaires et servent uniquement à expliquer les arnaques.",
        "Les messages du jeu sont des exemples inventés à partir d'arnaques réelles. Les numéros sont masqués et les liens désactivés."
      ] },
      { titre: "Tes données", paragraphes: [
        "Le site ne collecte aucune donnée personnelle : pas de compte, pas de cookies, pas de publicité, pas de mesure d'audience.",
        "Ta progression et la langue choisie sont enregistrées uniquement dans ton navigateur. Tu peux les effacer à tout moment avec « Effacer ma progression », en bas de page."
      ] },
      { titre: "Les informations", paragraphes: ["Le contenu sert à la sensibilisation. Il ne remplace pas les conseils de ton opérateur, de ta banque ou des autorités. En cas d'arnaque, contacte le CERT.tg ou la police."] },
      { titre: "Hébergement", paragraphes: ["Le site est hébergé par GitHub Pages (GitHub, Inc.)."] },
      { titre: "Licences", paragraphes: ["Code sous licence MIT. Polices Unbounded et Onest sous licence SIL Open Font License. Icônes Phosphor Icons sous licence MIT."] }
    ],
    contact: "Une question ou une erreur à signaler :"
  },

  /* ------------------------------------------------------------------ */
  /* La salle de jeux                                                    */
  /* ------------------------------------------------------------------ */
  jeux: {
    salle_titre: "La salle de jeux",
    salle_intro: "Six jeux courts pour t'entraîner à déjouer les arnaques. On apprend en s'amusant, et on peut battre son record.",
    record: "Record : {score}",
    nouveau: "Nouveau",
    jouer: "Jouer",
    rejouer: "Rejouer",
    retour_salle: "Autres jeux",
    termine: "Partie terminée",
    nouveau_record: "Nouveau record !",
    partage: "J'ai fait {score} au jeu « {jeu} » sur {site} 🎮 À toi de jouer ! 👉 {url}",
    cartes: [
      { id: "arnaque", titre: "Arnaque ou pas ?", texte: "Des messages réalistes arrivent sur un téléphone : à toi de dire si c'est une arnaque.", duree: "3 min" },
      { id: "pieges", titre: "Chasse aux pièges", texte: "Touche chaque passage suspect d'un message. Trois erreurs et c'est fini !", duree: "4 min" },
      { id: "liens", titre: "Lien piégé ?", texte: "Glisse chaque adresse à gauche ou à droite : vrai site ou faux site ?", duree: "2 min" },
      { id: "motdepasse", titre: "Casse-mot de passe", texte: "Découvre en combien de temps un pirate trouverait un mot de passe.", duree: "3 min" },
      { id: "histoire", titre: "La journée d'Afi", texte: "Aide Afi, vendeuse au marché, à finir sa journée sans perdre son argent.", duree: "5 min" },
      { id: "memo", titre: "Mémo des réflexes", texte: "Retourne les cartes et associe chaque piège au bon réflexe.", duree: "2 min" }
    ],

    /* --- Chasse aux pièges --- */
    pieges: {
      titre: "Chasse aux pièges",
      intro: "Chaque message cache plusieurs pièges. Touche les passages suspects pour les débusquer.",
      consigne: "Touche les passages suspects (l'expéditeur compte aussi). Chaque erreur coûte un cœur.",
      compteur: "Message {n} sur {total}",
      trouves: "Pièges trouvés : {n} sur {total}",
      vies: "Cœurs restants : {n}",
      bien: "Bien vu !",
      pas_suspect: "Ce passage n'est pas suspect. Cherche encore !",
      tous: "Bravo, tu as trouvé tous les pièges de ce message !",
      perdu: "Plus de cœurs… Voici les pièges que tu as manqués :",
      suivant: "Message suivant",
      fin: "Tu as trouvé {score} pièges sur {total}.",
      messages: [
        {
          canal: "sms", expediteur: "+228 9• •• •• 17",
          piege_expediteur: "Un vrai message d'opérateur n'arrive pas d'un numéro de téléphone ordinaire.",
          morceaux: [
            { texte: "Bonsoir," },
            { texte: "je me suis trompé en envoyant 25 000 F sur ton numéro.", piege: "Le faux « transfert par erreur » : vérifie toujours ton solde dans le menu officiel." },
            { texte: "Je m'appelle Koffi." },
            { texte: "C'est l'argent pour l'hôpital de ma mère,", piege: "Une histoire touchante pour t'émouvoir et te presser." },
            { texte: "renvoie-le moi vite stp 🙏", piege: "Un remboursement se fait par l'opérateur, jamais par toi." },
            { texte: "Que Dieu te bénisse." }
          ]
        },
        {
          canal: "whatsapp", expediteur: "Recrutement Togo 2026", piege_expediteur: "",
          morceaux: [
            { texte: "Bonjour à tous !" },
            { texte: "Une grande société recrute 40 agents", piege: "Le nom de la « grande société » n'est jamais donné." },
            { texte: "pour la caisse et l'accueil." },
            { texte: "Salaire : 250 000 F, sans diplôme.", piege: "Un gros salaire sans diplôme ni expérience : trop beau pour être vrai." },
            { texte: "Frais de dossier : 5 000 F par Mobile Money.", piege: "Un vrai employeur ne fait jamais payer les candidats." },
            { texte: "Il ne reste que 3 places !", piege: "La pression du temps t'empêche de vérifier." },
            { texte: "Bonne journée." }
          ]
        },
        {
          canal: "email", expediteur: "Sécurité Facebook <alerte@securite-fb-compte[.]com>",
          piege_expediteur: "L'adresse de l'expéditeur ne finit pas par facebook.com.",
          morceaux: [
            { texte: "Cher utilisateur,", piege: "Un vrai service t'appelle par ton nom, pas « cher utilisateur »." },
            { texte: "votre compte a été signalé." },
            { texte: "Il sera supprimé dans 24 heures.", piege: "La menace et le délai très court servent à te faire paniquer." },
            { texte: "Confirmez votre mot de passe ici :", piege: "Aucun service ne demande ton mot de passe par e-mail." },
            { texte: "securite-fb-compte[.]com/verifier", piege: "Ce lien ne mène pas au vrai site de Facebook." },
            { texte: "L'équipe Facebook" }
          ]
        },
        {
          canal: "appel", expediteur: "+228 7• •• •• 52", piege_expediteur: "",
          morceaux: [
            { texte: "Bonjour, ici le service client." },
            { texte: "Suite à une mise à jour," },
            { texte: "votre compte sera bloqué ce soir.", piege: "La menace de blocage sert à te faire peur." },
            { texte: "Tapez le code que je vais vous dicter,", piege: "Ne tape jamais un code dicté par quelqu'un au téléphone." },
            { texte: "puis entrez votre code secret pour confirmer.", piege: "Personne, jamais, n'a besoin de ton code secret." },
            { texte: "Merci de votre fidélité." }
          ]
        },
        {
          canal: "whatsapp", expediteur: "+229 •• •• •• 14",
          piege_expediteur: "Un numéro inconnu, et même pas du Togo.",
          morceaux: [
            { texte: "Maman, c'est moi,", piege: "Il ne dit pas son prénom : ce message est envoyé à des centaines de mamans." },
            { texte: "mon téléphone est tombé dans l'eau." },
            { texte: "Enregistre ce nouveau numéro." },
            { texte: "Envoie-moi 10 000 F tout de suite,", piege: "Une demande d'argent immédiate, avant toute vérification." },
            { texte: "je t'explique après, je ne peux pas appeler.", piege: "Il évite l'appel pour ne pas être démasqué." }
          ]
        },
        {
          canal: "facebook", expediteur: "Investissement Togo Prospérité", piege_expediteur: "",
          morceaux: [
            { texte: "💰 Placez 20 000 F aujourd'hui," },
            { texte: "recevez 60 000 F dans 7 jours !", piege: "Tripler son argent en une semaine est impossible." },
            { texte: "Déjà 3 000 membres payés ✅", piege: "Les « preuves » de gains se fabriquent très facilement." },
            { texte: "Rejoignez-nous" },
            { texte: "uniquement par WhatsApp.", piege: "Aucune entreprise identifiable : tout se passe en privé." }
          ]
        },
        {
          canal: "sms", expediteur: "MobileMoney", piege_expediteur: "",
          morceaux: [
            { texte: "Votre compte est suspendu", piege: "Une fausse alerte pour te faire peur." },
            { texte: "pour vérification d'identité." },
            { texte: "Réactivez-le ici avec votre code PIN :", piege: "Aucun opérateur ne demande ton code PIN sur un site." },
            { texte: "mobilemoney-togo-verif[.]com", piege: "Ce lien ne mène pas au site officiel de l'opérateur." },
            { texte: "Service client 24 h/24." }
          ]
        }
      ]
    },

    /* --- Lien piégé ? --- */
    liens: {
      titre: "Lien piégé ?",
      intro: "Les escrocs fabriquent des adresses qui ressemblent aux vraies. Apprends à lire le vrai nom d'un site.",
      regle_titre: "La règle d'or",
      regle: "Le vrai nom du site se trouve juste avant le premier « / ». Lis-le en partant de la fin : c'est lui qui compte, pas le début.",
      astuce: "Sur téléphone, tu peux aussi glisser la carte : à gauche si c'est un piège, à droite si c'est officiel.",
      compteur: "Lien {n} sur {total}",
      bouton_piege: "Lien piégé",
      bouton_vrai: "Lien officiel",
      bien: "Bien vu !",
      rate: "Raté !",
      etait_piege: "C'était un lien piégé.",
      etait_vrai: "C'était un lien officiel.",
      vrai_nom: "Vrai nom du site : {domaine}",
      suivant: "Lien suivant",
      fin: "Tu as bien jugé {score} liens sur {total}.",
      items: [
        { url: "https://www.facebook.com/login", domaine: "facebook.com", vrai: true, explication: "Juste avant le premier « / », on lit facebook.com : c'est bien Facebook." },
        { url: "https://facebook.com.connexion-securisee.net/login", domaine: "connexion-securisee.net", vrai: false, explication: "Le début imite Facebook, mais le vrai nom, juste avant le « / », est connexion-securisee.net." },
        { url: "https://m.facebook.com/", domaine: "facebook.com", vrai: true, explication: "« m. » indique la version mobile. Le nom finit bien par facebook.com." },
        { url: "https://faceb00k-login.com/", domaine: "faceb00k-login.com", vrai: false, explication: "Regarde bien : deux zéros à la place des « o ». Les escrocs jouent sur les lettres qui se ressemblent." },
        { url: "https://web.whatsapp.com/", domaine: "whatsapp.com", vrai: true, explication: "C'est WhatsApp pour ordinateur. Le nom finit bien par whatsapp.com." },
        { url: "https://whatsapp-gold-gratuit.net/telecharger", domaine: "whatsapp-gold-gratuit.net", vrai: false, explication: "« WhatsApp Gold » n'existe pas : ce site veut te faire installer une fausse application." },
        { url: "https://accounts.google.com/signin", domaine: "google.com", vrai: true, explication: "C'est la vraie page de connexion de Google : le nom finit par google.com." },
        { url: "https://accounts.google.com.verification-compte.info/", domaine: "verification-compte.info", vrai: false, explication: "Tout le début est un leurre : le vrai nom est verification-compte.info." },
        { url: "https://cert.tg/", domaine: "cert.tg", vrai: true, explication: "C'est le site officiel du CERT.tg, le centre national de réponse aux incidents de cybersécurité." },
        { url: "http://cert-tg-alerte.com/recompense", domaine: "cert-tg-alerte.com", vrai: false, explication: "Ce n'est pas cert.tg mais cert-tg-alerte.com. Et le CERT.tg ne distribue pas de récompenses." },
        { url: "https://www.youtube.com/watch?v=Xk92pLm", domaine: "youtube.com", vrai: true, explication: "Juste avant le « / », on lit youtube.com : c'est bien YouTube." },
        { url: "https://www.youtube.com-video.watch/gagner", domaine: "com-video.watch", vrai: false, explication: "Piège ! Avant le « / », on lit com-video.watch. « youtube » n'est qu'un mot placé au début." },
        { url: "https://fr.wikipedia.org/wiki/Togo", domaine: "wikipedia.org", vrai: true, explication: "« fr. » indique la version française de Wikipédia, dont le nom est wikipedia.org." },
        { url: "https://mobilemoney-togo-verif.com/pin", domaine: "mobilemoney-togo-verif.com", vrai: false, explication: "Un site qui demande ton code PIN est toujours une arnaque, quel que soit son nom." },
        { url: "https://mail.google.com/mail/", domaine: "google.com", vrai: true, explication: "Gmail se trouve à l'adresse mail.google.com : le nom finit bien par google.com." },
        { url: "https://bourses-canada-2026.blogspot.com/", domaine: "bourses-canada-2026.blogspot.com", vrai: false, explication: "N'importe qui peut créer un blog gratuit sur blogspot.com. Un vrai organisme de bourses n'utilise pas ça." }
      ]
    },

    /* --- Casse-mot de passe --- */
    motdepasse: {
      titre: "Casse-mot de passe",
      intro: "Un ordinateur de pirate peut tester des milliards de mots de passe par seconde. Le tien tiendrait combien de temps ?",
      testeur_titre: "Teste un mot de passe",
      testeur_label: "Écris un mot de passe inventé (pas le vrai !)",
      prive: "Rien n'est envoyé ni enregistré : le calcul se fait dans ton téléphone.",
      afficher: "Afficher",
      masquer: "Masquer",
      vide: "Commence à écrire pour voir le résultat.",
      temps: "Un pirate le trouverait en :",
      niveaux: ["Très faible", "Faible", "Moyen", "Solide", "Très solide"],
      criteres: [
        "Au moins 12 caractères",
        "Plusieurs mots, comme une petite phrase",
        "Des chiffres ou des symboles",
        "Pas de mot de passe courant, de prénom ni de date",
        "Pas de suite comme 1234 ou azerty"
      ],
      unites: {
        instant: "Moins d'une seconde",
        seconde: ["{n} seconde", "{n} secondes"],
        minute: ["{n} minute", "{n} minutes"],
        heure: ["{n} heure", "{n} heures"],
        jour: ["{n} jour", "{n} jours"],
        mois: ["{n} mois", "{n} mois"],
        an: ["{n} an", "{n} ans"],
        siecles: "Des siècles",
        milliers: "Des milliers d'années",
        millions: "Des millions d'années",
        milliards: "Des milliards d'années"
      },
      defi_titre: "Le duel des mots de passe",
      defi_intro: "Lequel des deux tiendrait le plus longtemps face à un pirate ?",
      compteur: "Duel {n} sur {total}",
      plus_solide: "Le plus solide",
      bien: "Bien vu !",
      rate: "Raté !",
      suivant: "Duel suivant",
      fin: "Tu as gagné {score} duels sur {total}.",
      lecon: "Le secret : la longueur. Une petite phrase de plusieurs mots bat un mot court plein de symboles.",
      duels: [
        ["kodjo1990", "Pagne-Taxi-Ananas-48"],
        ["azerty123", "Lune!Mangue7"],
        ["Togo2026!", "riz-plage-velo-soleil"],
        ["MotDePasse", "Ama@Marche#2026"],
        ["Kokou!", "kokou-mange-du-fufu"],
        ["P@ssw0rd", "chat-noir-sous-la-table"]
      ]
    },

    /* --- La journée d'Afi --- */
    histoire: {
      titre: "La journée d'Afi",
      intro: "Afi vend des pagnes au grand marché de Lomé. Ce matin, elle a 60 000 F sur son compte Mobile Money. Les escrocs vont tout essayer : aide-la à faire les bons choix !",
      commencer: "Commencer la journée",
      porte_monnaie: "Porte-monnaie",
      vigilance: "Vigilance",
      que_faire: "Que doit faire Afi ?",
      continuer: "Continuer",
      fin_argent: "Il reste {argent} F à Afi sur 60 000 F.",
      fin_points: "Vigilance : {points} sur {total}",
      fins: [
        { titre: "Rude journée pour Afi…", texte: "Les escrocs ont eu Afi plusieurs fois. Rejoue et aide-la à les déjouer : chaque bon réflexe compte." },
        { titre: "Afi s'en sort, de justesse", texte: "Quelques pièges l'ont fait hésiter. Rejoue pour trouver tous les bons réflexes." },
        { titre: "Afi, reine de la vigilance", texte: "Afi termine la journée sans perdre un franc à cause des escrocs. Tu as les bons réflexes !" }
      ],
      scenes: [
        {
          heure: "7 h 30",
          texte: "Afi reçoit un SMS : « Vous avez reçu 20 000 F. » Une minute après, un inconnu appelle en pleurant : « Je me suis trompé de numéro, renvoie-moi l'argent, c'est pour l'hôpital ! »",
          choix: [
            { texte: "Renvoyer vite les 20 000 F, le pauvre…", points: 0, argent: -20000, consequence: "Le SMS était faux : aucun argent n'était arrivé. Afi vient d'envoyer 20 000 F de sa poche à un escroc." },
            { texte: "Vérifier son solde dans le menu officiel", points: 2, argent: 0, consequence: "Le solde n'a pas bougé : le SMS était faux. Afi raccroche et bloque le numéro. Bravo !" },
            { texte: "Rappeler l'inconnu pour en savoir plus", points: 1, argent: 0, consequence: "L'escroc insiste et invente d'autres histoires. Afi ne perd rien, mais le bon réflexe était de vérifier son solde tout de suite." }
          ]
        },
        {
          heure: "9 h",
          texte: "Sur WhatsApp, son cousin Kodjo écrit : « Je t'ai envoyé un code à 6 chiffres par erreur, renvoie-le moi stp. » Justement, Afi vient de recevoir un code par SMS.",
          choix: [
            { texte: "Envoyer le code, c'est Kodjo", points: 0, argent: 0, consequence: "Le compte de Kodjo était piraté. Avec ce code, l'escroc prend le WhatsApp d'Afi et écrit à tous ses clients pour leur demander de l'argent." },
            { texte: "Ne rien envoyer et appeler Kodjo", points: 2, argent: 0, consequence: "Kodjo n'a rien demandé : son compte a été volé. Afi le prévient et active la vérification en deux étapes." },
            { texte: "Ignorer le message", points: 1, argent: 0, consequence: "Afi garde son compte, mais Kodjo et la famille ne sont pas prévenus. Un appel aurait aidé tout le monde." }
          ]
        },
        {
          heure: "11 h",
          texte: "Une cliente sur Facebook commande 10 pagnes pour 45 000 F. Elle envoie une capture d'écran « Paiement effectué » et demande la livraison tout de suite.",
          choix: [
            { texte: "Livrer : la capture prouve le paiement", points: 0, argent: -45000, consequence: "La capture était fausse. Afi a perdu 45 000 F de marchandise." },
            { texte: "Vérifier son solde avant de livrer", points: 2, argent: 0, consequence: "Aucun paiement n'est arrivé et la « cliente » disparaît. Une capture d'écran ne prouve rien !" },
            { texte: "Demander une deuxième capture", points: 0, argent: -45000, consequence: "Une deuxième fausse capture arrive en trente secondes. Afi livre… et perd 45 000 F de marchandise." }
          ]
        },
        {
          heure: "13 h",
          texte: "Le téléphone sonne : « Bonjour, service client. Votre compte sera bloqué ce soir. Tapez le code que je vais vous dicter, puis votre code secret. »",
          choix: [
            { texte: "Taper le code dicté et son code secret", points: 0, argent: -40000, consequence: "Le code dicté a envoyé l'argent d'Afi à l'escroc. Son compte est vidé." },
            { texte: "Raccrocher et appeler le numéro officiel", points: 2, argent: 0, consequence: "Le vrai service client confirme : son compte va très bien. C'était une arnaque." },
            { texte: "Donner seulement son code secret", points: 0, argent: -40000, consequence: "Avec le code secret, l'escroc vide le compte. Personne, jamais, n'a besoin de ce code." }
          ]
        },
        {
          heure: "15 h",
          texte: "Sa fille Ama lui montre une offre : « Hôtesse dans un grand hôtel, 300 000 F par mois. Frais de dossier : 10 000 F. » Elle supplie sa mère de payer.",
          choix: [
            { texte: "Payer les 10 000 F pour l'avenir d'Ama", points: 0, argent: -10000, consequence: "Il n'y avait pas d'hôtel. Les frais sont partis chez l'escroc, comme ceux de centaines d'autres candidates." },
            { texte: "Chercher l'offre avec le mot « arnaque » sur internet", points: 2, argent: 0, consequence: "Plusieurs personnes signalent déjà cette fausse offre. Afi explique à Ama : un vrai employeur ne fait jamais payer." },
            { texte: "Partager l'offre dans le groupe de la famille", points: 0, argent: 0, consequence: "Afi ne perd rien… mais trois cousines paient les frais. Avant de partager, on vérifie." }
          ]
        },
        {
          heure: "17 h",
          texte: "Une page Facebook annonce : « Bravo, tu as gagné une moto ! Paie juste 3 000 F de livraison. »",
          choix: [
            { texte: "Payer 3 000 F : une moto pour ce prix, c'est rien !", points: 0, argent: -3000, consequence: "Il n'y a pas de moto. Les « frais de livraison » étaient le vrai but de l'arnaque." },
            { texte: "Ignorer et signaler la page", points: 2, argent: 0, consequence: "Bien joué ! Afi n'a participé à aucun concours : payer pour gagner, c'est toujours une arnaque." }
          ]
        },
        {
          heure: "19 h",
          texte: "Sa voisine Délali pleure : elle s'est fait arnaquer de 50 000 F et a honte d'en parler.",
          choix: [
            { texte: "Lui conseiller de garder les preuves et de signaler au CERT.tg et à la police", points: 2, argent: 0, consequence: "Délali garde les captures et signale. Ce n'est pas une honte : signaler aide aussi à protéger les autres." },
            { texte: "Lui dire de ne rien dire à personne", points: 0, argent: 0, consequence: "Sans signalement, l'escroc continue avec d'autres victimes. Se faire avoir n'est jamais une honte." },
            { texte: "Lui conseiller de payer quelqu'un pour récupérer l'argent", points: 0, argent: 0, consequence: "Les « récupérateurs d'argent » sont souvent… d'autres escrocs. On ne paie jamais pour récupérer." }
          ]
        }
      ]
    },

    /* --- Mémo des réflexes --- */
    memo: {
      titre: "Mémo des réflexes",
      intro: "Retourne les cartes deux par deux et associe chaque piège (rouge) au bon réflexe (vert).",
      piege: "Piège",
      reflexe: "Réflexe",
      cachee: "Carte cachée",
      coups: "Coups : {n}",
      paires: "Paires : {n} sur {total}",
      fin: "Tu as trouvé toutes les paires en {n} coups.",
      partage_score: "{n} coups",
      paires_liste: [
        { piege: "Un code reçu par SMS", reflexe: "Je ne le donne à personne" },
        { piege: "« Je me suis trompé de numéro »", reflexe: "Je vérifie mon solde" },
        { piege: "Des frais pour un emploi", reflexe: "Je ne paie jamais" },
        { piege: "Le « service client » m'appelle", reflexe: "Je rappelle le numéro officiel" },
        { piege: "Un proche a « changé de numéro »", reflexe: "J'appelle son ancien numéro" },
        { piege: "Un lien reçu par message", reflexe: "J'ouvre moi-même le site officiel" },
        { piege: "On menace de publier une photo", reflexe: "Je ne paie pas, je garde les preuves" },
        { piege: "« Ton argent double en 7 jours »", reflexe: "C'est une arnaque, je fuis" }
      ]
    }
  },

  /* ------------------------------------------------------------------ */
  /* Outils : vérifier un message, attestation, mode animateur, affiches */
  /* ------------------------------------------------------------------ */
  outils: {

    verifier: {
      titre: "Vérifie un message",
      intro: "Tu as reçu un SMS ou un message WhatsApp bizarre ? Colle-le ici avant de répondre : on te montre les signaux d'alerte, un par un.",
      label: "Le message reçu",
      placeholder: "Colle ou recopie le message ici…",
      coller: "Coller",
      coller_aide: "Appuie longuement dans la case, puis choisis « Coller ».",
      analyser: "Vérifier le message",
      prive: "Le message reste dans ton téléphone : rien n'est envoyé ni enregistré.",
      exemples_titre: "Pas de message sous la main ? Essaie un exemple :",
      exemples: [
        { nom: "Transfert par erreur", texte: "Bonsoir, je vous ai envoyé 25 000 F par erreur sur votre Mobile Money. C'est l'argent de l'hôpital de ma mère. SVP renvoyez-moi vite au 9X XX XX XX, que Dieu vous bénisse 🙏" },
        { nom: "Recrutement", texte: "FÉLICITATIONS ! Votre candidature est retenue pour le grand recrutement 2026, sans diplôme, salaire 150 000 F par mois. Payez les frais de dossier de 10 000 F avant 18h pour confirmer votre place : recrutement-officiel-togo.online/inscription" },
        { nom: "Compte bloqué", texte: "Service client Mixx : votre compte sera bloqué ce soir pour une mise à jour. Pour le garder actif, confirmez votre code PIN sur mixx-verification.com" },
        { nom: "Code WhatsApp", texte: "Ton code WhatsApp : 482-913. Ne partage pas ce code." }
      ],
      vide: "Écris ou colle d'abord un message dans la case.",
      niveaux: [
        { titre: "Aucun piège connu repéré", texte: "Ça ne veut pas dire que le message est sûr. Dans le doute, vérifie auprès de la personne ou du service, sur un numéro que tu connais déjà." },
        { titre: "À vérifier", texte: "Un détail demande de la prudence. Lis l'explication avant de répondre." },
        { titre: "Suspect", texte: "Ce message utilise des techniques d'escrocs. Ne réponds pas, ne clique pas et ne paie rien avant d'avoir vérifié." },
        { titre: "Très suspect", texte: "Ce message ressemble fort à une arnaque. Ne réponds pas, ne donne aucun code et n'envoie pas d'argent." }
      ],
      signaux_titre: "Ce qu'on a repéré",
      signaux_nb: "{n} signaux d'alerte",
      signaux_nb_un: "{n} signal d'alerte",
      domaine: "Le vrai nom du site : {domaine}",
      lecon: "Revoir la leçon",
      jeu_liens: "S'entraîner à lire les liens",
      bon_signe_titre: "Un bon signe",
      bon_signe_texte: "Le message te conseille de ne pas partager ton code : c'est ce que font les vrais services. Attention quand même : si tu reçois un code sans l'avoir demandé, quelqu'un essaie peut-être d'entrer dans ton compte. Ne le donne à personne.",
      reflexes_titre: "Les bons réflexes",
      reflexes: [
        "Ne donne jamais ton code PIN ni un code reçu par SMS.",
        "Vérifie ton solde dans le menu officiel de ton opérateur, pas dans un SMS.",
        "Rappelle la personne ou le service sur un numéro que tu connais déjà.",
        "Si tu as déjà répondu ou payé, agis vite et préviens le CERT.tg."
      ],
      limite: "Cet outil repère les pièges les plus courants, mais il ne remplace pas ton jugement : un escroc peut écrire un message sans aucun de ces mots.",
      recommencer: "Vérifier un autre message",
      signaler: "J'ai déjà répondu : que faire ?",
      partage_titre: "Envoie cet outil à tes proches",
      partage: "Un outil gratuit pour vérifier un message suspect avant de répondre. Rien n'est envoyé 👉 {url}#verifier",
      accueil_titre: "Un message bizarre ? Vérifie-le",
      accueil_texte: "Colle un SMS ou un message WhatsApp : les signaux d'alerte s'allument, avec l'explication de chacun.",
      accueil_exemple: "Envoie-moi vite le code reçu par SMS, sinon ton compte sera bloqué ce soir.",
      accueil_bouton: "Vérifier un message",
      signaux: [
        { id: "code", titre: "Demande de code secret", texte: "Personne de sérieux ne te demande ton code PIN ni un code reçu par SMS : ni ton opérateur, ni WhatsApp, ni ta banque. Celui qui a ce code peut vider ton compte ou voler ton WhatsApp." },
        { id: "erreur", titre: "Le coup du « transfert par erreur »", texte: "Avant de renvoyer quoi que ce soit, vérifie ton solde dans le menu officiel de ton opérateur. Le faux SMS de transfert vient souvent d'un numéro ordinaire." },
        { id: "frais", titre: "On te demande de payer d'abord", texte: "Un vrai employeur, un vrai concours ou un vrai gain ne te demande jamais de payer des frais à l'avance. C'est le signe le plus sûr d'une arnaque." },
        { id: "chantage", titre: "Chantage", texte: "Ne paie pas : payer n'arrête presque jamais le chantage. Garde les preuves, bloque la personne et signale-la au CERT.tg." },
        { id: "installer", titre: "On te demande d'installer une application", texte: "Une application envoyée par un inconnu peut prendre le contrôle de ton téléphone et de ton Mobile Money. N'installe que depuis le magasin officiel, et seulement si tu l'as choisie toi-même." },
        { id: "lien_imite", titre: "Une adresse trompeuse", texte: "L'adresse colle le nom d'une marque ou des mots rassurants (officiel, vérification, bonus…) à un site inconnu. Les vrais services n'utilisent pas ce genre d'adresse." },
        { id: "urgence", titre: "On te presse", texte: "« Vite », « urgent », « avant ce soir » : l'escroc veut t'empêcher de réfléchir ou de demander conseil. Un vrai service te laisse le temps de vérifier." },
        { id: "blocage", titre: "Menace de blocage", texte: "Ton opérateur ou un réseau social ne bloque pas ton compte par un simple message qui exige une action immédiate. Vérifie dans l'application officielle ou au guichet." },
        { id: "gain", titre: "Cadeau ou argent trop facile", texte: "Personne ne gagne à un jeu auquel il n'a pas joué, et aucun placement sérieux ne double ton argent en quelques jours." },
        { id: "numero", titre: "Changement de numéro ou de canal", texte: "« J'ai changé de numéro », « écris-moi sur WhatsApp » : appelle la personne sur son ancien numéro pour vérifier que c'est bien elle." },
        { id: "argent", titre: "Demande d'argent", texte: "Avant d'envoyer de l'argent, appelle la personne par un appel normal. Les escrocs se font souvent passer pour un proche en difficulté." },
        { id: "secret", titre: "On te demande le secret", texte: "« N'en parle à personne » : l'escroc veut t'empêcher de demander conseil. Parles-en toujours à quelqu'un de confiance." },
        { id: "identite", titre: "Demande d'informations personnelles", texte: "Ta pièce d'identité, ta date de naissance ou un mot de passe permettent de se faire passer pour toi. Ne les envoie pas à un inconnu." },
        { id: "emploi", titre: "Offre d'emploi à vérifier", texte: "« Sans diplôme », « sans entretien », gros salaire : vérifie l'offre sur le site officiel de l'entreprise, ou colle-la dans ArnaKO." },
        { id: "lien_court", titre: "Un lien raccourci", texte: "Un lien raccourci (bit.ly, tinyurl…) cache la vraie adresse : on ne sait pas où il mène avant d'avoir cliqué." },
        { id: "lien", titre: "Un lien à vérifier", texte: "N'ouvre pas un lien reçu d'un inconnu. Regarde le vrai nom du site : c'est la partie juste avant le premier « / »." },
        { id: "officiel", titre: "Se présente comme un service officiel", texte: "Les escrocs se font passer pour un opérateur, une banque ou l'État. Rappelle toi-même le numéro officiel, jamais celui donné dans le message." }
      ]
    },

    attestation: {
      titre: "Ton attestation",
      intro: "Termine les 5 thèmes, leçons et quiz, pour obtenir une attestation à ton nom, à garder ou à partager.",
      verrou_titre: "Encore {n} étapes",
      verrou_titre_un: "Encore {n} étape",
      verrou_texte: "Chaque leçon et chaque quiz terminés te rapprochent de ton attestation.",
      continuer: "Continuer",
      pret_titre: "Bravo, tu as tout terminé !",
      pret_texte: "Écris ton nom tel qu'il doit apparaître sur l'attestation. Il reste dans ton téléphone.",
      nom_label: "Ton prénom et ton nom",
      nom_exemple: "Par exemple : Afi Mensah",
      nom_vide: "Écris ton nom pour créer l'attestation.",
      creer: "Créer mon attestation",
      modifier: "Changer le nom",
      telecharger: "Télécharger l'image",
      partager: "Partager l'image",
      partage_texte: "J'ai terminé les 5 thèmes de {site} pour reconnaître les arnaques du téléphone 🎓 Fais-le aussi, c'est gratuit 👉 {url}",
      apercu: "Aperçu de ton attestation",
      annonce: "Tous les thèmes sont terminés : ton attestation t'attend dans Leçons.",
      bloc_titre: "Ton attestation",
      bloc_pret: "Tu as tout terminé : crée ton attestation à ton nom.",
      bloc_verrou: "Termine les 5 thèmes pour obtenir ton attestation à ton nom.",
      bloc_bouton: "Obtenir mon attestation",
      doc_titre: "Attestation de parcours",
      doc_certifie: "{site} atteste que",
      doc_texte: "a suivi les 5 thèmes de sensibilisation aux arnaques du téléphone et d'internet, et terminé leurs quiz.",
      doc_badges: "Badges obtenus",
      doc_score: "Quiz : {score} bonnes réponses sur {total}",
      doc_date: "Délivrée le {date}",
      doc_numero: "N° {code}",
      doc_note: "Attestation de suivi délivrée par le site {site}. Elle ne remplace pas un diplôme.",
      doc_qr: "Toi aussi, apprends ici",
      premier_jour: "1er",
      mois: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
    },

    animer: {
      titre: "Mode animateur",
      intro: "Pour animer une séance en groupe : à l'école, dans une association, à l'église ou en réunion de quartier. Affiche les messages en grand et faites voter la salle.",
      comment_titre: "Comment ça marche",
      comment: [
        "Branche ton ordinateur ou ton téléphone sur un vidéoprojecteur ou une télé. Sans écran, montre simplement ton téléphone à un petit groupe.",
        "Un message s'affiche en grand. La salle vote à main levée : arnaque ou message normal ?",
        "Indique ce que la majorité a choisi : la bonne réponse et les indices s'affichent. Prenez le temps d'en parler.",
        "À la fin, chacun peut scanner le QR code pour continuer seul sur son téléphone."
      ],
      reglages: "Préparer la séance",
      theme_label: "Thème",
      theme_tous: "Tous les thèmes",
      nombre_label: "Nombre de messages",
      nombre_messages: "{n} messages",
      commencer: "Commencer la séance",
      clavier: "Au clavier : A pour arnaque, N pour normal, flèche droite pour continuer, F pour le plein écran, Échap pour quitter.",
      affiche_titre: "Affiches et cartes à imprimer",
      affiche_texte: "Une affiche A4 et des petites cartes avec un QR code, à coller ou à distribuer après la séance.",
      affiche_bouton: "Voir les affiches",
      compteur: "Message {n} sur {total}",
      vote: "Levez la main : arnaque ou message normal ?",
      salle_dit: "La majorité de la salle a choisi :",
      arnaque: "Arnaque",
      normal: "Normal",
      bien_vu: "La salle a vu juste !",
      piege: "La salle s'est fait piéger !",
      discussion_arnaque: "À discuter : quel détail aurait dû vous alerter ?",
      discussion_normal: "À discuter : qu'est-ce qui montre que ce message est normal ?",
      suivant: "Message suivant",
      bilan: "Voir le bilan",
      plein_ecran: "Plein écran",
      quitter: "Quitter",
      bilan_titre: "Bilan de la séance",
      bilan_score: "La salle a vu juste {n} fois sur {total}.",
      bilan_score_un: "La salle a vu juste {n} fois sur {total}.",
      bilan_texte: "Merci à tous ! Pour continuer seul, scannez ce code avec l'appareil photo de votre téléphone.",
      reflexes_titre: "Les 3 réflexes à retenir",
      reflexes: [
        "Ton code ne se donne à personne, jamais.",
        "Un transfert « par erreur » ? Vérifie ton solde dans le menu officiel.",
        "On te demande de payer d'abord ? C'est une arnaque."
      ],
      nouvelle: "Nouvelle séance",
      accueil_titre: "Tu animes un groupe ?",
      accueil_texte: "Enseignant, association, église, groupement : affiche les messages en grand, faites voter la salle, puis distribuez les affiches avec QR code."
    },

    affiche: {
      titre: "Affiches à imprimer",
      intro: "Imprime l'affiche ou les petites cartes, puis colle-les au marché, à l'école, dans une boutique Mobile Money ou à l'église.",
      format_affiche: "Affiche A4",
      format_cartes: "8 petites cartes",
      imprimer: "Imprimer",
      imprimer_aide: "Dans la fenêtre d'impression, choisis « Enregistrer en PDF » pour garder un fichier.",
      titre_affiche: "Arnaque ou pas ?",
      sous_titre: "Avant de répondre à un message, pose-toi ces questions.",
      regles: [
        { titre: "On te demande un code ?", texte: "Ton code PIN et les codes reçus par SMS ne se donnent à personne. Jamais." },
        { titre: "Un transfert « par erreur » ?", texte: "Vérifie ton solde dans le menu officiel de ton opérateur avant de renvoyer quoi que ce soit." },
        { titre: "On te demande de payer d'abord ?", texte: "Un vrai emploi, un vrai concours ou un vrai cadeau ne se paie jamais à l'avance." },
        { titre: "Un proche a « changé de numéro » ?", texte: "Appelle-le sur son ancien numéro avant d'envoyer de l'argent." }
      ],
      qr_texte: "Scanne ce code pour apprendre et t'entraîner gratuitement, en français et en ewe.",
      cert: "Victime d'une arnaque ? CERT.tg : {tel}",
      carte_regles: [
        "Ton code ne se donne à personne.",
        "Transfert « par erreur » ? Vérifie ton solde.",
        "Payer d'abord ? C'est une arnaque."
      ],
      carte_qr: "Apprends gratuitement"
    }
  },

  /* Le scénario affiché en grand sur la page d'accueil */
  scenario_accueil: "faux-transfert",

  /* ------------------------------------------------------------------ */
  /* Petit dictionnaire                                                  */
  /* La colonne ewe se remplit dans ee.js (champ « terme »).             */
  /* ------------------------------------------------------------------ */
  dictionnaire: [
    { terme: "Arnaque", definition: "Tromperie pour te prendre ton argent ou tes informations. On dit aussi escroquerie." },
    { terme: "Escroc", definition: "Personne qui trompe les autres pour leur prendre de l'argent." },
    { terme: "Code PIN", definition: "Code secret de quelques chiffres qui ouvre ton compte Mobile Money ou ta puce. Il ne se donne à personne." },
    { terme: "Mot de passe", definition: "Mot ou phrase secrète qui ouvre un compte (Facebook, e-mail, banque)." },
    { terme: "Phrase de passe", definition: "Mot de passe fait de plusieurs mots. Plus long, donc plus solide." },
    { terme: "Code de vérification", definition: "Code envoyé par SMS pour prouver que c'est bien toi. Il ne se partage jamais." },
    { terme: "Vérification en deux étapes", definition: "Deuxième code demandé en plus du mot de passe. On dit aussi double protection." },
    { terme: "Compte piraté", definition: "Compte dont quelqu'un d'autre a pris le contrôle." },
    { terme: "Faux profil", definition: "Compte créé avec le nom et les photos d'une autre personne pour tromper." },
    { terme: "Hameçonnage", definition: "Faux message ou fausse page qui imite une entreprise ou une administration pour voler tes informations. En anglais : phishing." },
    { terme: "Lien", definition: "Adresse sur laquelle on appuie pour ouvrir une page internet." },
    { terme: "Site officiel", definition: "Le vrai site d'une entreprise ou d'une institution, que tu trouves toi-même." },
    { terme: "Mobile Money", definition: "Porte-monnaie sur le téléphone pour envoyer, recevoir et payer (par exemple Mixx by Yas ou Flooz)." },
    { terme: "Solde", definition: "L'argent qu'il y a vraiment sur ton compte." },
    { terme: "Opérateur", definition: "L'entreprise qui fournit ta puce et ton service Mobile Money." },
    { terme: "Service client", definition: "Le service de l'opérateur qui aide les clients. Il ne demande jamais ton code." },
    { terme: "Chantage", definition: "Menace de faire du mal (publier une image, révéler un secret) si tu ne paies pas." },
    { terme: "Capture d'écran", definition: "Photo de ce qui est affiché sur ton écran. Elle sert de preuve." },
    { terme: "Bloquer", definition: "Empêcher une personne de te contacter." },
    { terme: "Signaler", definition: "Prévenir la plateforme ou les autorités qu'un compte ou un message est dangereux." },
    { terme: "Données personnelles", definition: "Tout ce qui parle de toi : nom, numéro, adresse, date de naissance, photos." },
    { terme: "Confidentialité", definition: "Les réglages qui choisissent qui peut voir ce que tu publies." },
    { terme: "Mise à jour", definition: "Nouvelle version d'une application qui corrige souvent des failles de sécurité." },
    { terme: "Virus", definition: "Programme malveillant qui abîme ton téléphone ou vole tes informations." },
    { terme: "CERT.tg", definition: "Centre national de réponse aux incidents de cybersécurité du Togo. Tu peux y signaler une arnaque." }
  ],

  /* ------------------------------------------------------------------ */
  /* Page « En cas d'arnaque »                                           */
  /* ------------------------------------------------------------------ */
  signaler: {
    titre: "Tu t'es fait arnaquer ? Voici quoi faire",
    intro: "Ce n'est pas une honte : les escrocs sont des professionnels et piègent aussi des gens très prudents. Plus tu agis vite, plus tu limites les dégâts.",
    etapes: [
      { titre: "Préviens ton opérateur", texte: "S'il s'agit de Mobile Money, appelle tout de suite le service client officiel (numéro trouvé dans l'application ou en agence). Signale la transaction et demande à protéger ton compte." },
      { titre: "Change tes codes", texte: "Change ton code PIN et tes mots de passe, puis active la vérification en deux étapes." },
      { titre: "Garde les preuves", texte: "Fais des captures d'écran des messages, des numéros et des références de transaction. Ne supprime rien." },
      { titre: "Préviens tes proches", texte: "Si ton WhatsApp ou ton Facebook a été volé, préviens ta famille et tes groupes pour qu'ils ne tombent pas dans le piège à leur tour." },
      { titre: "Signale au CERT.tg", texte: "Le centre national de réponse aux incidents de cybersécurité reçoit les signalements." },
      { titre: "Porte plainte", texte: "Va au commissariat le plus proche avec tes preuves." }
    ],
    cert_titre: "Contacter le CERT.tg",
    cert_appeler: "Appeler le CERT.tg",
    cert_tel_label: "Ligne directe",
    cert_mail_label: "E-mail",
    cert_site_label: "Site, rubrique « Déclarer un incident »",
    cert_verifie: "Coordonnées reprises des avis publiés par le CERT.tg, vérifiées en novembre 2026."
  },

  /* ------------------------------------------------------------------ */
  /* Page « À propos »                                                   */
  /* ------------------------------------------------------------------ */
  apropos: {
    titre: "À propos",
    paragraphes: [
      "{site} aide chacun à reconnaître les arnaques du téléphone et d'internet, avec des exemples d'ici : Mobile Money, WhatsApp, faux recrutements, faux profils.",
      "Le site est gratuit, sans publicité et sans inscription. Il fonctionne sur les petits téléphones et reste disponible hors connexion une fois ouvert.",
      "La traduction en ewe et les versions audio sont en cours. L'objectif : que chacun puisse apprendre dans la langue qu'il parle tous les jours.",
      "Au Togo, l'Agence nationale de la cybersécurité (ANCy) indique avoir traité plus de 333 000 incidents de cybersécurité entre 2021 et 2024. Bien informé, chacun devient plus difficile à piéger."
    ],
    aider_titre: "Tu veux aider ?",
    aider: [
      "Tu parles et écris l'ewe : aide-nous à traduire les leçons.",
      "Tu as une voix claire : enregistre les leçons en ewe.",
      "Tu animes une radio, une association ou un groupement : partage le site autour de toi.",
      "Tu as vu une nouvelle arnaque : raconte-la nous pour l'ajouter au jeu."
    ],
    contact: "Pour proposer ton aide ou une amélioration :"
  }
};
