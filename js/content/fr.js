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
    menu_jeu: "Arnaque ou pas ?",
    menu_dico: "Petit dictionnaire",
    menu_signaler: "En cas d'arnaque",
    menu_apropos: "À propos",

    accueil_titre: "Arnaque ou pas ?",
    accueil_intro: "Apprends à reconnaître les pièges du téléphone : Mobile Money, WhatsApp, faux emplois, faux profils. Cinq thèmes courts, en français et bientôt en ewe.",
    accueil_jeu_consigne: "Tu reçois ce message. Qu'en penses-tu ?",
    accueil_cta_lecons: "Commencer les leçons",
    accueil_cta_jeu: "Jouer à « Arnaque ou pas ? »",
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
    nav_jeu: "Jeu",
    nav_dico: "Mots",
    nav_aide: "Aide",
    accueil_lecons_titre: "Les leçons",
    accueil_lecons_intro: "Cinq thèmes de trois leçons. Compte environ cinq minutes par thème.",
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

    hors_ligne: "Tu es hors connexion. Les leçons déjà ouvertes restent disponibles.",
    page_introuvable: "Cette page n'existe pas.",
    retour_accueil: "Retour à l'accueil",
    aller_contenu: "Aller au contenu"
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
      id: "faux-transfert",
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
      id: "retrait-normal",
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
      id: "faux-service-client",
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
      id: "cadeau-lien",
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
      id: "code-par-erreur",
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
      id: "code-normal",
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
      id: "nouveau-numero",
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
      id: "nouveau-numero-normal",
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
      id: "faux-recrutement",
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
      id: "entretien-normal",
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
      id: "faux-concours",
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
      id: "faux-concours-star",
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
      id: "chantage",
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
    }
  ],

  /* Les atouts affichés sur l'accueil */
  pourquoi: [
    { titre: "En français et en ewe", texte: "Les leçons arrivent aussi en ewe, à lire et à écouter, pour apprendre dans la langue de tous les jours." },
    { titre: "Léger, même hors connexion", texte: "Une fois ouvert, le site fonctionne sans internet. Idéal pour les petits forfaits et les petits téléphones." },
    { titre: "Rien n'est collecté", texte: "Pas de compte, pas de publicité, pas de suivi. Ta progression reste dans ton téléphone." }
  ],

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
