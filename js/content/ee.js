/*
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
 * Avancement : 1 textes traduits sur 1358.
 */
window.CG_CONTENU = window.CG_CONTENU || {};
window.CG_CONTENU.ee = {
  "ui": {
    "langue": "Eʋegbe",  // FR : Français
    "menu_accueil": "",  // FR : Accueil
    "menu_lecons": "",  // FR : Leçons
    "menu_jeu": "",  // FR : Jeux
    "menu_dico": "",  // FR : Petit dictionnaire
    "menu_signaler": "",  // FR : En cas d'arnaque
    "menu_apropos": "",  // FR : À propos
    "menu_verifier": "",  // FR : Vérifier un message
    "menu_animer": "",  // FR : Mode animateur
    "menu_affiche": "",  // FR : Affiches à imprimer
    "menu_attestation": "",  // FR : Ton attestation
    "accueil_titre": "",  // FR : Arnaque ou pas ?
    "accueil_intro": "",  // FR : Apprends à reconnaître les pièges du téléphone : Mobile Money, WhatsApp, faux emplois, faux profils. Cinq thèmes courts, en français et bientôt en ewe.
    "accueil_jeu_consigne": "",  // FR : Tu reçois ce message. Qu'en penses-tu ?
    "accueil_cta_lecons": "",  // FR : Commencer les leçons
    "accueil_cta_jeu": "",  // FR : Découvrir les jeux
    "accueil_jeux_titre": "",  // FR : Joue et apprends
    "accueil_jeux_intro": "",  // FR : Six jeux pour t'entraîner à repérer les pièges, seul ou en famille.
    "accueil_jeux_tout": "",  // FR : Voir tous les jeux
    "accueil_atouts": [
      "",  // FR : Gratuit
      "",  // FR : Sans inscription
      ""  // FR : Marche hors connexion
    ],
    "chiffre_nombre": "",  // FR : 333 000
    "chiffre_texte": "",  // FR : incidents de cybersécurité traités au Togo entre 2021 et 2024. Les escrocs comptent sur la surprise : bien informé, tu deviens difficile à piéger.
    "chiffre_source": "",  // FR : Source : Agence nationale de la cybersécurité (ANCy)
    "theme_populaire": "",  // FR : Le plus courant
    "bandeau_label": "",  // FR : Phrases que les escrocs utilisent souvent
    "bandeau_phrases": [
      "",  // FR : « Je me suis trompé de numéro, renvoie-moi l'argent »
      "",  // FR : « Envoie-moi le code reçu par SMS »
      "",  // FR : « Frais de dossier : 5 000 F »
      "",  // FR : « Votre compte sera bloqué ce soir »
      "",  // FR : « Tu as gagné un smartphone ! »
      "",  // FR : « Maman, c'est moi, j'ai changé de numéro »
      "",  // FR : « Ton argent double en 7 jours »
      ""  // FR : « Tape le code que je vais te dicter »
    ],
    "puces_deco": [
      "",  // FR : Envoie-moi le code
      "",  // FR : Frais de dossier : 5 000 F
      ""  // FR : Compte bloqué ce soir !
    ],
    "badges_titre": "",  // FR : Tes badges
    "badges_intro": "",  // FR : Termine un thème (ses trois leçons et son quiz) pour gagner son badge.
    "badge_verrouille": "",  // FR : À gagner
    "badge_gagne": "",  // FR : Gagné
    "badge_nouveau": "",  // FR : Nouveau badge !
    "badge_message": "",  // FR : Tu as gagné le badge « {badge} ».
    "jeu_serie": "",  // FR : Série de {n}
    "jeu_rangs": [
      "",  // FR : Détective débutant
      "",  // FR : Œil attentif
      "",  // FR : Œil de lynx
      ""  // FR : Expert anti-arnaque
    ],
    "etoiles": "",  // FR : {n} étoiles sur 3
    "etoiles_un": "",  // FR : {n} étoile sur 3
    "module_lecons_quiz": "",  // FR : {n} leçons et un quiz
    "module_etapes": "",  // FR : {n} étapes sur {total}
    "module_etapes_un": "",  // FR : {n} étape sur {total}
    "progression_reprendre": "",  // FR : Reprendre
    "progression_bravo": "",  // FR : Tout est terminé, bravo ! Entraîne-toi encore avec le jeu.
    "progression_rejouer": "",  // FR : Jouer encore
    "pourquoi_titre": "",  // FR : Pensé pour le Togo
    "nav_accueil": "",  // FR : Accueil
    "nav_lecons": "",  // FR : Leçons
    "nav_jeu": "",  // FR : Jeux
    "nav_dico": "",  // FR : Mots
    "nav_verifier": "",  // FR : Vérifier
    "nav_aide": "",  // FR : Aide
    "accueil_lecons_titre": "",  // FR : Les leçons
    "accueil_lecons_intro": "",  // FR : Cinq thèmes de trois leçons. Compte environ cinq minutes par thème.
    "lecons_dico_titre": "",  // FR : Un mot pas clair ?
    "lecons_dico_texte": "",  // FR : Le petit dictionnaire explique simplement les mots de la sécurité numérique.
    "lecons_dico_bouton": "",  // FR : Ouvrir le dictionnaire
    "accueil_aide_titre": "",  // FR : Tu t'es fait avoir ?
    "accueil_aide_texte": "",  // FR : Ce n'est pas une honte : les escrocs sont des professionnels. Agis vite et signale-le.
    "accueil_aide_bouton": "",  // FR : Voir quoi faire
    "bouton_arnaque": "",  // FR : C'est une arnaque
    "bouton_normal": "",  // FR : C'est normal
    "jeu_bien_vu": "",  // FR : Bien vu !
    "jeu_attention": "",  // FR : Attention !
    "jeu_verdict_arnaque": "",  // FR : C'était une arnaque.
    "jeu_verdict_normal": "",  // FR : C'était un message normal.
    "jeu_indices_arnaque": "",  // FR : Les indices
    "jeu_indices_normal": "",  // FR : Pourquoi c'est normal
    "jeu_suivant": "",  // FR : Message suivant
    "jeu_voir_lecon": "",  // FR : Revoir la leçon
    "jeu_titre": "",  // FR : Arnaque ou pas ?
    "jeu_intro": "",  // FR : Lis chaque message comme s'il arrivait sur ton téléphone, puis décide. Certains sont des arnaques, d'autres sont tout à fait normaux.
    "jeu_compteur": "",  // FR : Message {n} sur {total}
    "jeu_score": "",  // FR : {score} bonnes réponses
    "jeu_score_un": "",  // FR : {score} bonne réponse
    "jeu_fin_titre": "",  // FR : Partie terminée
    "jeu_fin_score": "",  // FR : Tu as bien répondu à {score} messages sur {total}.
    "jeu_fin_score_un": "",  // FR : Tu as bien répondu à {score} message sur {total}.
    "jeu_rejouer": "",  // FR : Rejouer
    "jeu_contexte": "",  // FR : La situation
    "jeu_choisir": "",  // FR : Choisis ton niveau
    "jeu_choisir_texte": "",  // FR : Chaque partie compte jusqu'à 10 messages tirés au hasard.
    "jeu_changer_niveau": "",  // FR : Changer de niveau
    "niveau_facile": "",  // FR : Facile
    "niveau_moyen": "",  // FR : Moyen
    "niveau_expert": "",  // FR : Expert
    "niveau_tout": "",  // FR : Tout mélangé
    "niveau_facile_texte": "",  // FR : Les arnaques les plus courantes.
    "niveau_moyen_texte": "",  // FR : Des pièges plus discrets.
    "niveau_expert_texte": "",  // FR : Ceux qui trompent même les plus prudents.
    "niveau_tout_texte": "",  // FR : Un peu de tout, au hasard.
    "niveau_messages": "",  // FR : {n} messages
    "jeu_continuer": "",  // FR : Essayer d'autres messages
    "canal_sms": "",  // FR : SMS
    "canal_whatsapp": "",  // FR : WhatsApp
    "canal_appel": "",  // FR : Appel reçu
    "canal_facebook": "",  // FR : Facebook
    "canal_email": "",  // FR : E-mail
    "module_lecons": "",  // FR : {n} leçons
    "module_termine": "",  // FR : Terminé
    "module_commence": "",  // FR : Commencé
    "module_commencer": "",  // FR : Commencer
    "module_continuer": "",  // FR : Continuer
    "module_quiz": "",  // FR : Le quiz du thème
    "parcours_quiz": "",  // FR : Quiz
    "module_quiz_texte": "",  // FR : Quatre questions pour vérifier que tout est clair.
    "module_quiz_bouton": "",  // FR : Faire le quiz
    "module_quiz_score": "",  // FR : Dernier score : {score} sur {total}
    "module_entrainer": "",  // FR : S'entraîner avec des messages
    "lecon_retenir": "",  // FR : À retenir
    "lecon_etapes": "",  // FR : Comment faire
    "lecon_compris": "",  // FR : J'ai compris
    "lecon_compris_fait": "",  // FR : Leçon terminée
    "lecon_suivante": "",  // FR : Leçon suivante
    "lecon_precedente": "",  // FR : Leçon précédente
    "lecon_duree": "",  // FR : Environ {n} min
    "lecon_vers_quiz": "",  // FR : Passer au quiz
    "lecon_retour": "",  // FR : Retour au thème
    "lecon_n": "",  // FR : Leçon {n} sur {total}
    "lecon_ecouter": "",  // FR : Écouter la leçon
    "lecon_arreter": "",  // FR : Arrêter la lecture
    "lecon_audio": "",  // FR : Écouter en ewe
    "lecon_audio_bientot": "",  // FR : La version audio en ewe arrive bientôt.
    "quiz_question": "",  // FR : Question {n} sur {total}
    "quiz_bonne": "",  // FR : Bonne réponse.
    "quiz_mauvaise": "",  // FR : Ce n'est pas la bonne réponse.
    "quiz_suivante": "",  // FR : Question suivante
    "quiz_resultat": "",  // FR : Voir mon résultat
    "quiz_fin": "",  // FR : Tu as {score} bonnes réponses sur {total}.
    "quiz_fin_un": "",  // FR : Tu as {score} bonne réponse sur {total}.
    "quiz_fin_bravo": "",  // FR : Bravo, ce thème est bien compris.
    "quiz_fin_revoir": "",  // FR : Relis les leçons du thème, puis réessaie.
    "quiz_recommencer": "",  // FR : Recommencer le quiz
    "quiz_autre_theme": "",  // FR : Choisir un autre thème
    "progression": "",  // FR : Ta progression
    "progression_texte": "",  // FR : {n} étapes sur {total}
    "progression_texte_un": "",  // FR : {n} étape sur {total}
    "progression_aide": "",  // FR : Chaque leçon et chaque quiz terminés ajoutent un fil à ta bande.
    "progression_effacer": "",  // FR : Effacer ma progression
    "progression_confirmer": "",  // FR : Appuie encore pour confirmer
    "progression_effacer_ok": "",  // FR : Progression effacée.
    "dico_titre": "",  // FR : Petit dictionnaire
    "dico_intro": "",  // FR : Les mots de la sécurité numérique, expliqués simplement.
    "dico_chercher": "",  // FR : Chercher un mot
    "dico_aucun": "",  // FR : Aucun mot trouvé. Essaie un autre mot ou vide la recherche.
    "dico_ewe": "",  // FR : En ewe
    "dico_ewe_vide": "",  // FR : à traduire
    "dico_francais": "",  // FR : En français
    "langue_avis": "",  // FR : La traduction en ewe est en cours. En attendant, le texte s'affiche en français.
    "langue_aider": "",  // FR : Tu parles ewe ? Aide-nous à traduire.
    "langue_pas_traduit": "",  // FR : Pas encore traduit
    "pied_texte": "",  // FR : Site gratuit et sans publicité. Ta progression reste sur ton téléphone : rien n'est envoyé.
    "pied_code": "",  // FR : Code source
    "pied_contact": "",  // FR : Proposer une amélioration
    "menu_mentions": "",  // FR : Mentions et confidentialité
    "independance": "",  // FR : {site} est un projet indépendant. Il n'est lié ni à l'ANCy, ni au CERT.tg, ni aux opérateurs, banques ou réseaux sociaux cités, dont les noms appartiennent à leurs propriétaires.
    "partage_titre": "",  // FR : Fais passer le mot
    "partage_texte": "",  // FR : Plus on est nombreux à connaître ces arnaques, moins elles marchent. Envoie {site} à ta famille et à tes groupes.
    "partage_whatsapp": "",  // FR : Partager sur WhatsApp
    "partage_copier": "",  // FR : Copier le lien
    "partage_copie_ok": "",  // FR : Lien copié, tu peux le coller où tu veux.
    "partage_copie_echec": "",  // FR : Copie impossible ici. Voici le lien : {url}
    "partage_site": "",  // FR : Apprends à repérer les arnaques Mobile Money, WhatsApp et faux emplois, en français et en ewe. C'est gratuit 👉 {url}
    "partage_jeu": "",  // FR : J'ai eu {score}/{total} à « Arnaque ou pas ? » sur {site} 🛡️ Niveau : {rang}. Et toi, tu repères les arnaques ? 👉 {url}
    "partage_quiz": "",  // FR : J'ai fait {score}/{total} au quiz « {theme} » sur {site} ✅ Teste-toi aussi 👉 {url}
    "hors_ligne": "",  // FR : Tu es hors connexion. Les leçons déjà ouvertes restent disponibles.
    "page_introuvable": "",  // FR : Cette page n'existe pas.
    "retour_accueil": "",  // FR : Retour à l'accueil
    "aller_contenu": "",  // FR : Aller au contenu
    "qr_label": ""  // FR : QR code vers {url}
  },
  "modules": [
    {
      "badge": "",  // FR : Gardien des codes
      "titre": "",  // FR : Tes codes secrets
      "resume": "",  // FR : Ton code PIN et tes mots de passe protègent ton argent et tes comptes. Personne d'autre ne doit les connaître.
      "lecons": [
        {
          "titre": "",  // FR : Ton code PIN, c'est la clé de ton argent
          "corps": [
            "",  // FR : Ton code PIN Mobile Money ouvre ton porte-monnaie. Celui qui le connaît peut vider ton compte en quelques secondes.
            "",  // FR : Aucun agent, aucun service client, aucun opérateur n'a besoin de ton code PIN. Ni pour « débloquer », ni pour « vérifier », ni pour « rembourser » ton compte.
            "",  // FR : Quand tu tapes ton code chez un agent ou dans une boutique, cache l'écran avec ta main. Ne donne jamais ton téléphone déverrouillé à quelqu'un pour qu'il fasse l'opération à ta place.
            ""  // FR : Évite les codes faciles comme 0000, 1234 ou ton année de naissance : ce sont les premiers que les voleurs essaient.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Ton code PIN ne se donne à personne, jamais.
            "",  // FR : Si quelqu'un te demande ton code, c'est un voleur, même s'il dit travailler chez l'opérateur.
            ""  // FR : Si tu penses que quelqu'un connaît ton code, change-le tout de suite.
          ],
          "audio": ""  // FR : 
        },
        {
          "titre": "",  // FR : Un bon mot de passe
          "corps": [
            "",  // FR : Ton mot de passe protège ton Facebook, ton e-mail ou ton application de banque.
            "",  // FR : Un bon mot de passe est long. Le plus simple : une petite phrase que toi seul connais, avec trois ou quatre mots et un chiffre. Par exemple « Pagne-Taxi-Ananas-48 », mais ne copie pas cet exemple, invente le tien.
            "",  // FR : Utilise un mot de passe différent pour chaque compte. Si un compte est piraté, les autres restent protégés.
            "",  // FR : N'utilise pas ton nom, celui de ton enfant, ta date de naissance ou ton numéro de téléphone : les escrocs les trouvent facilement sur tes réseaux sociaux.
            ""  // FR : Tu as du mal à tout retenir ? Note tes mots de passe dans un carnet que tu gardes à la maison, pas dans ton portefeuille ni dans une note du téléphone.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Long et facile à retenir pour toi : une phrase de trois ou quatre mots.
            "",  // FR : Un mot de passe différent pour chaque compte.
            ""  // FR : Jamais ton nom, ta date de naissance ou ton numéro.
          ],
          "audio": ""  // FR : 
        },
        {
          "titre": "",  // FR : Les codes reçus par SMS
          "corps": [
            "",  // FR : Quand tu crées un compte ou que tu te connectes sur un nouveau téléphone, tu reçois souvent un code par SMS. Ce code prouve que c'est bien toi.
            "",  // FR : Ce code sert à toi seul. Celui qui te le demande veut prendre ton compte. La phrase la plus utilisée par les escrocs : « Je t'ai envoyé un code par erreur, renvoie-le moi s'il te plaît. »
            ""  // FR : Active la double protection, qu'on appelle aussi « vérification en deux étapes », partout où c'est possible : WhatsApp, Facebook, e-mail. Même si un voleur trouve ton mot de passe, il lui manquera ce deuxième code.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Un code reçu par SMS ne se partage jamais, même avec un proche.
            "",  // FR : « Je t'ai envoyé un code par erreur » : c'est toujours une arnaque.
            ""  // FR : Active la double protection sur tes comptes importants.
          ],
          "audio": ""  // FR : 
        }
      ],
      "quiz": [
        {
          "question": "",  // FR : Un agent Mobile Money te demande ton code PIN pour finir un retrait. Que fais-tu ?
          "options": [
            "",  // FR : Je le lui donne, c'est son travail.
            "",  // FR : Je refuse et je tape mon code moi-même en cachant l'écran.
            ""  // FR : Je le lui écris sur un papier.
          ],
          "explication": ""  // FR : Personne n'a besoin de ton code PIN, pas même un agent. Tu le tapes toi-même, en cachant l'écran.
        },
        {
          "question": "",  // FR : Quel mot de passe est le plus solide ?
          "options": [
            "",  // FR : Kodjo1990
            "",  // FR : 123456
            ""  // FR : Pagne-Taxi-Ananas-48
          ],
          "explication": ""  // FR : Une phrase de plusieurs mots est longue et difficile à deviner. Un prénom suivi d'une année se devine très vite.
        },
        {
          "question": "",  // FR : Une amie t'écrit : « Je t'ai envoyé un code par SMS par erreur, tu peux me le renvoyer ? » Que fais-tu ?
          "options": [
            "",  // FR : Je le lui renvoie, c'est mon amie.
            "",  // FR : Je ne renvoie rien et je l'appelle pour vérifier.
            ""  // FR : Je le mets dans notre groupe pour qu'elle le trouve.
          ],
          "explication": ""  // FR : Son compte a probablement été piraté. Le voleur veut ton code pour prendre ton compte à toi aussi. Appelle-la sur son numéro habituel.
        },
        {
          "question": "",  // FR : Tu utilises le même mot de passe pour Facebook et pour ton e-mail. Quel est le risque ?
          "options": [
            "",  // FR : Aucun risque.
            "",  // FR : Si un compte est piraté, l'autre l'est aussi.
            ""  // FR : Le téléphone devient plus lent.
          ],
          "explication": ""  // FR : Les voleurs essaient le même mot de passe partout. Un mot de passe par compte limite les dégâts.
        }
      ]
    },
    {
      "badge": "",  // FR : As du Mobile Money
      "titre": "",  // FR : Mobile Money
      "resume": "",  // FR : Les arnaques les plus courantes visent ton argent sur Mixx by Yas ou Flooz. Voici comment les repérer.
      "lecons": [
        {
          "titre": "",  // FR : Le faux « transfert par erreur »
          "corps": [
            "",  // FR : Tu reçois un SMS : « Vous avez reçu 25 000 F. » Juste après, quelqu'un appelle : « Je me suis trompé de numéro, renvoie-moi l'argent s'il te plaît, c'est pour l'hôpital. » Il est poli, pressé, parfois il pleure.
            "",  // FR : Le SMS est faux. Il a été tapé et envoyé comme un message ordinaire, en imitant celui de ton opérateur. Aucun argent n'est arrivé sur ton compte.
            "",  // FR : Les vrais messages arrivent en général sous le nom de l'opérateur, pas depuis un numéro à 8 chiffres. Mais un nom peut aussi être imité : le seul vrai contrôle, c'est ton solde.
            ""  // FR : Si de l'argent est vraiment arrivé par erreur, ne le renvoie pas toi-même. Dis à la personne de contacter son opérateur, qui s'occupera de l'annulation.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Vérifie ton solde dans le menu ou l'application officielle, jamais avec le SMS.
            "",  // FR : Un vrai message d'opérateur ne vient pas d'un numéro de téléphone ordinaire.
            ""  // FR : Transfert par erreur ? C'est l'opérateur qui annule, pas toi.
          ],
          "audio": ""  // FR : 
        },
        {
          "titre": "",  // FR : Le faux service client
          "corps": [
            "",  // FR : Quelqu'un t'appelle : « Bonjour, ici le service client. Votre compte va être bloqué ce soir », ou « Vous avez gagné un bonus ». Pour « régler le problème », il te demande ton code PIN, ou te dicte des chiffres, des étoiles et des dièses à taper sur ton téléphone.
            "",  // FR : En tapant ces codes, tu peux envoyer toi-même ton argent au voleur, ou changer ton code secret pour lui.
            "",  // FR : Le vrai service client ne te demande jamais ton code PIN et ne te fait jamais taper un code dicté au téléphone.
            ""  // FR : Raccroche. Puis appelle toi-même le service client, avec le numéro trouvé dans l'application officielle, sur le site de l'opérateur ou en agence.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Ne tape jamais un code dicté par quelqu'un au téléphone.
            "",  // FR : Raccroche et rappelle toi-même le numéro officiel.
            ""  // FR : « Votre compte va être bloqué » : c'est fait pour te faire peur et te presser.
          ],
          "audio": ""  // FR : 
        },
        {
          "titre": "",  // FR : L'argent facile n'existe pas
          "corps": [
            "",  // FR : « Envoie 10 000 F, tu recevras 50 000 F demain. » « Paie 5 000 F de frais pour recevoir ton lot. » « Place ton argent sur notre plateforme, il double chaque semaine. »
            "",  // FR : Ces promesses circulent sur WhatsApp, Telegram et Facebook. Elles utilisent parfois le nom d'un ministère, d'une banque ou d'une entreprise connue. Le CERT.tg, le centre national de réponse aux incidents de cybersécurité, a déjà publié plusieurs alertes sur ces fausses plateformes d'investissement.
            "",  // FR : La règle est simple : si on te demande de payer pour recevoir de l'argent, c'est une arnaque.
            ""  // FR : Au début, on te verse parfois un petit gain pour te mettre en confiance. Ensuite, on te pousse à mettre plus, et tout disparaît.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Payer pour gagner de l'argent, c'est une arnaque.
            "",  // FR : Un nom officiel sur un message ne prouve rien.
            ""  // FR : Gagner un peu au début fait partie du piège.
          ],
          "audio": ""  // FR : 
        }
      ],
      "quiz": [
        {
          "question": "",  // FR : Tu reçois un SMS « Vous avez reçu 15 000 F », puis un appel pour te demander de renvoyer l'argent. Que fais-tu d'abord ?
          "options": [
            "",  // FR : Je renvoie vite l'argent.
            "",  // FR : Je vérifie mon solde dans le menu officiel.
            ""  // FR : Je rappelle le numéro qui m'a envoyé le SMS.
          ],
          "explication": ""  // FR : Le SMS peut être faux. Ton solde, lui, ne ment pas. Le plus souvent, rien n'est arrivé.
        },
        {
          "question": "",  // FR : Le « service client » te demande de taper un code avec des étoiles et des dièses pour débloquer ton compte. Que fais-tu ?
          "options": [
            "",  // FR : Je tape le code.
            "",  // FR : Je raccroche et j'appelle moi-même le numéro officiel.
            ""  // FR : Je lui donne mon code PIN à la place.
          ],
          "explication": ""  // FR : Un code dicté au téléphone peut envoyer ton argent au voleur. Le vrai service client ne fait jamais ça.
        },
        {
          "question": "",  // FR : Une page Facebook promet de doubler ton argent en 7 jours. Ton cousin dit qu'il a déjà gagné. Qu'en penses-tu ?
          "options": [
            "",  // FR : C'est sûr, puisque mon cousin a gagné.
            "",  // FR : C'est une arnaque : les premiers gains servent d'appât.
            ""  // FR : J'essaie avec une petite somme pour voir.
          ],
          "explication": ""  // FR : Les escrocs paient parfois les premiers pour attirer les suivants. À la fin, presque tout le monde perd.
        },
        {
          "question": "",  // FR : Qui peut annuler un vrai transfert envoyé par erreur ?
          "options": [
            "",  // FR : La personne qui a reçu l'argent.
            "",  // FR : L'opérateur Mobile Money.
            ""  // FR : N'importe quel agent du quartier.
          ],
          "explication": ""  // FR : C'est à l'expéditeur de contacter son opérateur. Toi, tu n'as rien à renvoyer.
        }
      ]
    },
    {
      "badge": "",  // FR : Pro de WhatsApp
      "titre": "",  // FR : WhatsApp
      "resume": "",  // FR : Ton compte WhatsApp peut être volé en quelques secondes. Ensuite, le voleur écrit à tes proches en se faisant passer pour toi.
      "lecons": [
        {
          "titre": "",  // FR : Le code à 6 chiffres
          "corps": [
            "",  // FR : Pour installer WhatsApp sur un téléphone, il faut un code à 6 chiffres, envoyé par SMS au propriétaire du numéro.
            "",  // FR : Le voleur essaie d'installer WhatsApp avec TON numéro. C'est donc toi qui reçois le code. Puis il t'écrit, souvent depuis le compte déjà piraté d'un ami : « Je t'ai envoyé un code par erreur, renvoie-le moi stp. »
            "",  // FR : Si tu envoies ce code, il prend ton compte. Tu es déconnecté, et il écrit à tous tes contacts et à tous tes groupes en se faisant passer pour toi.
            ""  // FR : Le code WhatsApp ne se donne à personne. WhatsApp lui-même ne te le demandera jamais par message.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Le code WhatsApp à 6 chiffres ne se partage jamais.
            "",  // FR : Un ami qui te le demande a probablement été piraté : appelle-le.
            ""  // FR : Tu as reçu un code sans rien demander ? Quelqu'un essaie de prendre ton compte. Ne fais rien avec ce code.
          ],
          "audio": ""  // FR : 
        },
        {
          "titre": "",  // FR : Active la vérification en deux étapes
          "corps": [
            "",  // FR : La vérification en deux étapes ajoute un deuxième code, que tu choisis toi-même. Même avec le code reçu par SMS, le voleur ne pourra pas installer ton compte.
            "",  // FR : Choisis un code que tu n'utilises nulle part ailleurs, surtout pas ton code PIN Mobile Money. Selon ta version de WhatsApp, on te demandera un code à 6 chiffres ou un mot de passe.
            ""  // FR : Ajoute ton adresse e-mail si tu en as une : c'est elle qui te permettra de récupérer ton compte si tu oublies ce code.
          ],
          "etapes": [
            "",  // FR : Ouvre WhatsApp et va dans Paramètres.
            "",  // FR : Appuie sur Compte.
            "",  // FR : Appuie sur Vérification en deux étapes.
            "",  // FR : Appuie sur Activer, puis choisis ton code et confirme-le.
            ""  // FR : Ajoute ton adresse e-mail quand WhatsApp te la demande.
          ],
          "retenir": [
            "",  // FR : Active la vérification en deux étapes aujourd'hui.
            "",  // FR : Choisis un code différent de ton code Mobile Money.
            ""  // FR : Ajoute ton e-mail pour pouvoir récupérer ton compte.
          ],
          "audio": ""  // FR : 
        },
        {
          "titre": "",  // FR : « C'est moi, j'ai changé de numéro »
          "corps": [
            "",  // FR : Un message arrive d'un numéro inconnu : « Maman, c'est moi, mon téléphone est gâté, voici mon nouveau numéro. Envoie-moi 20 000 F, c'est urgent, je t'explique après. »
            "",  // FR : Parfois, le message vient du vrai compte d'un ami qui a été piraté. Il demande un prêt rapide, ou ton code.
            "",  // FR : Avant d'envoyer de l'argent, appelle la personne sur son ancien numéro, ou pose-lui une question que seul ton proche connaît. Un escroc trouve presque toujours une excuse pour ne pas répondre à un appel.
            ""  // FR : Si c'est une arnaque, préviens ton proche et vos groupes communs. Puis bloque et signale le numéro dans WhatsApp.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Une demande d'argent par message ? Appelle d'abord la personne.
            "",  // FR : Urgence, nouveau numéro et argent ensemble : c'est un signal d'alerte.
            ""  // FR : Bloque et signale le numéro dans WhatsApp.
          ],
          "audio": ""  // FR : 
        }
      ],
      "quiz": [
        {
          "question": "",  // FR : Tu reçois un code WhatsApp par SMS alors que tu n'as rien demandé. Que fais-tu ?
          "options": [
            "",  // FR : Je l'envoie à la personne qui me le réclame.
            "",  // FR : Je ne le partage pas et j'active la vérification en deux étapes.
            ""  // FR : Je désinstalle WhatsApp.
          ],
          "explication": ""  // FR : Quelqu'un essaie de prendre ton compte. Garde le code pour toi et ajoute la vérification en deux étapes.
        },
        {
          "question": "",  // FR : Où active-t-on la vérification en deux étapes ?
          "options": [
            "",  // FR : Paramètres, puis Compte, puis Vérification en deux étapes.
            "",  // FR : Dans les statuts.
            ""  // FR : Dans un groupe WhatsApp.
          ],
          "explication": ""  // FR : Tout se fait dans Paramètres, puis Compte. Le nom exact peut changer un peu selon la version.
        },
        {
          "question": "",  // FR : Ton « fils » t'écrit d'un nouveau numéro pour te demander de l'argent en urgence. Que fais-tu ?
          "options": [
            "",  // FR : J'envoie vite, c'est urgent.
            "",  // FR : Je l'appelle sur son ancien numéro avant tout.
            ""  // FR : Je lui demande d'envoyer une photo de lui.
          ],
          "explication": ""  // FR : Une photo peut être volée sur Facebook. Un appel, ou une question que seul ton fils connaît, est bien plus sûr.
        },
        {
          "question": "",  // FR : Quel code choisir pour la vérification en deux étapes ?
          "options": [
            "",  // FR : Le même que mon code Mobile Money.
            "",  // FR : Un nouveau code que je n'utilise nulle part ailleurs.
            ""  // FR : 123456
          ],
          "explication": ""  // FR : Si un code est découvert, il ne doit ouvrir qu'une seule porte.
        }
      ]
    },
    {
      "badge": "",  // FR : Chasseur de faux recruteurs
      "titre": "",  // FR : Fausses offres d'emploi
      "resume": "",  // FR : Les faux recruteurs visent ceux qui cherchent un travail, un stage ou une bourse. Leur but : te faire payer des « frais ».
      "lecons": [
        {
          "titre": "",  // FR : Les signaux d'alerte
          "corps": [
            "",  // FR : Une vraie entreprise ne te fait pas payer pour un emploi. Frais de dossier, d'inscription, de formation, de visite médicale ou de badge : dès qu'on te demande de l'argent, méfie-toi.
            "",  // FR : Autres signaux : un salaire très élevé pour peu de travail, un recrutement sans entretien, un recruteur joignable seulement sur WhatsApp, une adresse e-mail gratuite (Gmail, Yahoo) pour une « grande société », et la pression du temps : « Il ne reste que 3 places, payez avant ce soir. »
            ""  // FR : Les fautes, le texte copié-collé et le logo flou sont aussi des indices. Mais attention : une arnaque peut être très bien présentée.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Payer pour obtenir un travail, c'est une arnaque.
            "",  // FR : Trop beau, trop rapide, trop pressé : prends le temps de vérifier.
            ""  // FR : Un beau logo ne prouve rien.
          ],
          "audio": ""  // FR : 
        },
        {
          "titre": "",  // FR : Les faux recrutements « officiels »
          "corps": [
            "",  // FR : Les escrocs utilisent le nom de l'État, d'un ministère, d'une ONG ou d'une grande entreprise : faux concours, fausses listes d'admis, fausses ventes aux enchères.
            "",  // FR : Le CERT.tg a par exemple signalé une fausse vente aux enchères au nom de l'OTR (Office togolais des recettes). Pour « participer », il fallait envoyer environ 100 000 F de frais d'inscription sur un numéro Mobile Money.
            ""  // FR : Les vrais recrutements publics sont annoncés sur les sites et les pages officielles de l'institution. Va vérifier toi-même sur ces canaux, sans utiliser le lien ni le numéro du message.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Le nom d'un ministère sur un message ne prouve rien.
            "",  // FR : Vérifie sur le site ou la page officielle, pas avec le lien reçu.
            ""  // FR : Des frais à payer sur un numéro Mobile Money : arnaque.
          ],
          "audio": ""  // FR : 
        },
        {
          "titre": "",  // FR : Vérifier avant de répondre
          "corps": [
            "",  // FR : Avant de répondre à une offre, prends cinq minutes pour vérifier. Les vraies offres attendent ; les fausses te pressent.
            ""  // FR : Ne donne ni ta pièce d'identité, ni ton numéro Mobile Money, ni aucun code avant d'être sûr. Ces informations servent ensuite à d'autres arnaques.
          ],
          "etapes": [
            "",  // FR : Cherche sur internet le nom de l'entreprise et le numéro du recruteur, avec le mot « arnaque ».
            "",  // FR : Trouve toi-même le site ou la page officielle de l'entreprise.
            "",  // FR : Appelle l'entreprise sur son numéro officiel, pas sur celui de l'annonce.
            ""  // FR : Si tu as encore un doute, colle le texte de l'offre dans ArnaKO : il cherche les signaux d'arnaque pour toi.
          ],
          "lien": {
            "texte": ""  // FR : Analyser une offre avec ArnaKO
          },
          "retenir": [
            "",  // FR : Cherche « nom de l'entreprise + arnaque » sur internet.
            "",  // FR : Rappelle l'entreprise sur son numéro officiel.
            ""  // FR : Ta pièce d'identité ne s'envoie pas à un inconnu.
          ],
          "audio": ""  // FR : 
        }
      ],
      "quiz": [
        {
          "question": "",  // FR : Une offre de « caissier dans une grande société » demande 15 000 F de frais de dossier. Qu'en penses-tu ?
          "options": [
            "",  // FR : C'est normal pour un emploi.
            "",  // FR : C'est une arnaque : un vrai employeur ne fait pas payer.
            ""  // FR : Je paie la moitié pour commencer.
          ],
          "explication": ""  // FR : Un employeur te paie ; ce n'est jamais à toi de le payer pour être recruté.
        },
        {
          "question": "",  // FR : Le recruteur est joignable seulement sur WhatsApp et utilise une adresse Gmail. C'est :
          "options": [
            "",  // FR : Un signal d'alerte.
            "",  // FR : La preuve que c'est sérieux.
            ""  // FR : Sans aucune importance.
          ],
          "explication": ""  // FR : Une vraie entreprise a en général un site, un numéro fixe ou une adresse e-mail à son nom.
        },
        {
          "question": "",  // FR : Un message annonce un concours de la fonction publique, avec un lien pour s'inscrire et payer. Que fais-tu ?
          "options": [
            "",  // FR : Je clique et je paie vite.
            "",  // FR : Je vérifie sur le site ou la page officielle de l'institution.
            ""  // FR : Je partage le lien à mes amis.
          ],
          "explication": ""  // FR : Les vraies annonces sont sur les canaux officiels. Le lien d'un message peut mener à une fausse page.
        },
        {
          "question": "",  // FR : On te demande la photo de ta carte d'identité pour « ouvrir ton dossier », avant tout entretien. Que fais-tu ?
          "options": [
            "",  // FR : Je l'envoie.
            "",  // FR : J'attends d'avoir vérifié l'entreprise.
            ""  // FR : J'envoie celle d'un ami.
          ],
          "explication": ""  // FR : Ta pièce d'identité peut servir à ouvrir des comptes ou à tromper d'autres personnes en ton nom.
        }
      ]
    },
    {
      "badge": "",  // FR : Malin des réseaux
      "titre": "",  // FR : Réseaux sociaux
      "resume": "",  // FR : Faux profils, comptes piratés, chantage : protège ce que tu publies et ce que tu partages.
      "lecons": [
        {
          "titre": "",  // FR : Faux profils et comptes piratés
          "corps": [
            "",  // FR : Un faux profil copie les photos et le nom d'une vraie personne (un ami, une star, un pasteur, un chef d'entreprise) pour demander de l'argent ou vendre de faux produits.
            "",  // FR : Les signes : un compte récent, peu de publications, beaucoup de demandes d'amis, une histoire triste ou une offre très généreuse.
            "",  // FR : Le compte d'un ami peut aussi avoir été piraté. S'il te demande de l'argent ou un code par message, appelle-le.
            ""  // FR : Pour protéger ton compte : un mot de passe unique, la double protection activée, et jamais de connexion depuis le lien d'un message.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Une photo et un nom se copient très facilement.
            "",  // FR : Une demande d'argent par message ? Vérifie par un appel.
            ""  // FR : Signale les faux profils à la plateforme.
          ],
          "audio": ""  // FR : 
        },
        {
          "titre": "",  // FR : Le chantage aux photos et vidéos
          "corps": [
            "",  // FR : Certains escrocs créent une relation en ligne, obtiennent une photo ou une vidéo intime, puis menacent de la publier si tu ne paies pas. D'autres prétendent avoir une vidéo de toi qui n'existe même pas.
            "",  // FR : Ne paie pas. Payer ne fait pas disparaître les images : l'escroc revient toujours demander plus.
            "",  // FR : Arrête de répondre, mais ne supprime rien : fais des captures d'écran des messages, du profil et des numéros. Ce sont tes preuves.
            ""  // FR : Signale le compte à la plateforme et au CERT.tg, et parles-en à une personne de confiance. Tu es la victime : ce n'est pas ta faute.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Ne paie jamais un chantage.
            "",  // FR : Garde les preuves avec des captures d'écran, puis bloque.
            ""  // FR : Parle à quelqu'un de confiance et signale. Ce n'est pas ta faute.
          ],
          "audio": ""  // FR : 
        },
        {
          "titre": "",  // FR : Ce que tu publies peut servir contre toi
          "corps": [
            "",  // FR : Ta date de naissance, ton quartier, le nom de tes enfants, ton lieu de travail, la photo de ta carte d'identité : les escrocs rassemblent ces informations pour te tromper ou deviner tes mots de passe.
            "",  // FR : Avant de publier, demande-toi : « Est-ce qu'un inconnu pourrait utiliser ça ? »
            "",  // FR : Choisis qui voit tes publications : dans les paramètres de confidentialité de Facebook, préfère « Amis » à « Public ».
            ""  // FR : Ne publie pas tes voyages pendant que tu es absent. Partage les photos à ton retour.
          ],
          "etapes": [

          ],
          "retenir": [
            "",  // FR : Pas de pièce d'identité, de billet ni de reçu en photo publique.
            "",  // FR : Mets tes publications en « Amis » plutôt qu'en « Public ».
            ""  // FR : Partage tes voyages au retour, pas pendant.
          ],
          "audio": ""  // FR : 
        }
      ],
      "quiz": [
        {
          "question": "",  // FR : Le compte Facebook d'un pasteur connu t'écrit pour te demander une « offrande » par Mobile Money. Qu'en penses-tu ?
          "options": [
            "",  // FR : Je paie, c'est pour l'église.
            "",  // FR : Je me méfie : c'est souvent un faux profil.
            ""  // FR : Je lui donne mon code pour qu'il se serve.
          ],
          "explication": ""  // FR : Les faux profils de personnalités sont très courants. Vérifie auprès de l'église, par un autre moyen.
        },
        {
          "question": "",  // FR : Quelqu'un menace de publier une vidéo intime de toi si tu ne paies pas. Que fais-tu ?
          "options": [
            "",  // FR : Je paie pour que ça s'arrête.
            "",  // FR : Je ne paie pas, je garde les preuves, je bloque et je signale.
            ""  // FR : Je supprime toute la conversation.
          ],
          "explication": ""  // FR : Payer n'arrête pas le chantage. Les preuves servent à signaler et à porter plainte.
        },
        {
          "question": "",  // FR : Quelle publication est la plus risquée ?
          "options": [
            "",  // FR : La photo d'un coucher de soleil.
            "",  // FR : La photo de ma carte d'identité.
            ""  // FR : La photo d'un plat que j'ai cuisiné.
          ],
          "explication": ""  // FR : Ta carte d'identité permet de se faire passer pour toi.
        },
        {
          "question": "",  // FR : Pour limiter qui voit tes publications Facebook, tu choisis :
          "options": [
            "",  // FR : Public
            "",  // FR : Amis
            ""  // FR : Ça ne change rien.
          ],
          "explication": ""  // FR : « Amis » limite tes publications aux personnes que tu as acceptées.
        }
      ]
    }
  ],
  "scenarios": [
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : +228 9• •• •• 17
      "messages": [
        "",  // FR : Vous avez reçu 25 000 F de KOFFI A. Nouveau solde : 25 340 F. Réf : MP2611.0815.
        ""  // FR : Bonsoir, je me suis trompé en envoyant 25 000 F sur ton numéro. C'est pour l'hôpital de ma mère, renvoie stp 🙏
      ],
      "indices": [
        "",  // FR : Le message vient d'un numéro ordinaire, pas du nom de l'opérateur.
        "",  // FR : Juste après, quelqu'un te presse avec une histoire d'urgence.
        ""  // FR : On te demande de renvoyer l'argent toi-même.
      ],
      "explication": ""  // FR : C'est le faux « transfert par erreur ». Vérifie ton solde dans le menu officiel : tu verras que rien n'est arrivé.
    },
    {
      "contexte": "",  // FR : Tu viens de faire un retrait de 10 000 F chez l'agent de ton quartier.
      "expediteur": "",  // FR : Mixx
      "messages": [
        ""  // FR : Retrait de 10 000 F effectué. Nouveau solde : 4 900 F.
      ],
      "indices": [
        "",  // FR : C'est toi qui viens de faire l'opération.
        "",  // FR : Le message arrive sous le nom de l'opérateur.
        ""  // FR : Il ne te demande ni code, ni argent, ni clic.
      ],
      "explication": ""  // FR : Rien de suspect. En cas de doute, vérifie quand même ton solde dans le menu officiel.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : +228 7• •• •• 52
      "messages": [
        "",  // FR : Bonjour, ici le service client. Suite à une mise à jour, votre compte Mobile Money sera bloqué ce soir.
        ""  // FR : Pour l'éviter, tapez le code que je vais vous dicter, puis entrez votre code secret pour confirmer.
      ],
      "indices": [
        "",  // FR : On te menace de bloquer ton compte pour te faire peur.
        "",  // FR : On te dicte un code à taper.
        ""  // FR : On te demande ton code secret.
      ],
      "explication": ""  // FR : Le vrai service client ne demande jamais ton code et ne te dicte rien. Raccroche, puis appelle toi-même le numéro officiel.
    },
    {
      "contexte": "",  // FR : Ce message a été transféré dans un groupe WhatsApp de ton quartier.
      "expediteur": "",  // FR : Groupe « Voisins Bè-Kpota »
      "messages": [
        ""  // FR : 🎁 PROMO ANNIVERSAIRE ! Gagnez 50 000 F offerts sur votre compte Mobile Money. Réclamez ici : mixx-cadeau-tg[.]xyz ⏰ Offre valable 2 heures seulement !
      ],
      "indices": [
        "",  // FR : Le lien ne mène pas au site officiel de l'opérateur.
        "",  // FR : Un gros cadeau sans raison.
        ""  // FR : Une limite de temps pour t'empêcher de réfléchir.
      ],
      "explication": ""  // FR : Ce lien mène à une fausse page qui te demandera ton numéro et ton code. Ne clique pas, et préviens le groupe.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Ama 💛
      "messages": [
        "",  // FR : Coucou ma chérie ! Je t'ai envoyé un code à 6 chiffres par erreur 🙈
        ""  // FR : Tu peux me le renvoyer stp ? C'est urgent
      ],
      "indices": [
        "",  // FR : On te demande un code reçu par SMS.
        "",  // FR : La personne insiste sur l'urgence.
        ""  // FR : Le compte de ton amie a sans doute été piraté.
      ],
      "explication": ""  // FR : Si tu envoies ce code, le voleur prend ton compte WhatsApp. Appelle Ama sur son numéro pour la prévenir.
    },
    {
      "contexte": "",  // FR : Tu viens d'acheter un nouveau téléphone et tu installes WhatsApp toi-même.
      "expediteur": "",  // FR : WhatsApp
      "messages": [
        ""  // FR : Votre code WhatsApp : 418-207. Ne partagez pas ce code avec d'autres personnes.
      ],
      "indices": [
        "",  // FR : C'est toi qui as demandé ce code, à l'instant.
        ""  // FR : Le message dit lui-même de ne pas le partager.
      ],
      "explication": ""  // FR : Tape ce code dans ton téléphone, et nulle part ailleurs. Personne d'autre n'a besoin de le voir.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : +228 9• •• •• 63
      "messages": [
        "",  // FR : Maman c'est moi Edem, mon téléphone est tombé dans l'eau 😩 C'est mon nouveau numéro.
        ""  // FR : Envoie-moi 20 000 F stp, c'est urgent, je t'explique après.
      ],
      "indices": [
        "",  // FR : Un numéro inconnu qui dit être un proche.
        "",  // FR : Une demande d'argent urgente.
        ""  // FR : « Je t'explique après » : il évite les questions.
      ],
      "explication": ""  // FR : Appelle Edem sur son ancien numéro, ou pose une question que seul lui connaît, avant d'envoyer quoi que ce soit.
    },
    {
      "contexte": "",  // FR : Hier, ton frère Yao t'a appelé pour te dire qu'il changeait de puce.
      "expediteur": "",  // FR : +228 9• •• •• 08
      "messages": [
        ""  // FR : Salut, c'est Yao 👋 Voici mon nouveau numéro, comme je t'ai dit hier au téléphone. Enregistre-le !
      ],
      "indices": [
        "",  // FR : Ton frère t'avait prévenu de vive voix.
        ""  // FR : Il ne demande ni argent, ni code.
      ],
      "explication": ""  // FR : Tout est cohérent. Si ce numéro te demande un jour de l'argent, appelle quand même pour vérifier.
    },
    {
      "contexte": "",  // FR : Tu vois cette publication dans un groupe Facebook d'offres d'emploi.
      "expediteur": "",  // FR : Recrutement Togo Emplois
      "messages": [
        ""  // FR : 🔴 URGENT ! Grande société recrute 40 agents (caisse, sécurité, ménage). Salaire : 250 000 F. Sans diplôme, sans expérience. Frais de dossier : 5 000 F par Mobile Money au 9• •• •• 88. Places limitées !
      ],
      "indices": [
        "",  // FR : On te demande de payer des frais de dossier.
        "",  // FR : Le nom de la « grande société » n'est jamais donné.
        ""  // FR : Salaire élevé, sans diplôme ni entretien, et « places limitées ».
      ],
      "explication": ""  // FR : Un vrai employeur ne fait pas payer. Les 5 000 F de chaque candidat vont directement à l'escroc.
    },
    {
      "contexte": "",  // FR : La semaine dernière, tu as postulé sur le site officiel d'une entreprise de Lomé.
      "expediteur": "",  // FR : Service des ressources humaines
      "messages": [
        ""  // FR : Bonjour, suite à votre candidature au poste d'assistant(e) comptable, nous vous invitons à un entretien jeudi à 10 h dans nos locaux. Merci de confirmer votre présence par retour de mail.
      ],
      "indices": [
        "",  // FR : Tu as vraiment postulé auprès de cette entreprise.
        "",  // FR : L'entretien a lieu dans les locaux de l'entreprise.
        ""  // FR : On ne te demande ni argent ni document.
      ],
      "explication": ""  // FR : Ce message est normal. Pour être tranquille, vérifie l'adresse des locaux sur le site officiel de l'entreprise.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Recrutement Ministère 2026
      "messages": [
        ""  // FR : FÉLICITATIONS ! Votre nom figure sur la liste des admis au recrutement 2026. Pour valider votre poste, envoyez 25 000 F de frais de badge au 9• •• •• 41 avant vendredi.
      ],
      "indices": [
        "",  // FR : Tu n'as passé aucun concours.
        "",  // FR : On te demande des frais à envoyer sur un numéro Mobile Money.
        ""  // FR : Le message arrive sur WhatsApp, pas par un canal officiel.
      ],
      "explication": ""  // FR : Une administration ne fait pas payer un badge par Mobile Money. Vérifie toujours sur le site ou la page officielle.
    },
    {
      "contexte": "",  // FR : Un compte au nom d'un artiste connu t'écrit en message privé.
      "expediteur": "",  // FR : Compte « officiel » d'un artiste
      "messages": [
        ""  // FR : Bravo 🎉 Tu fais partie des 100 gagnants de mon concours ! Ton smartphone neuf est prêt. Envoie juste 3 000 F de frais de livraison et ton adresse.
      ],
      "indices": [
        "",  // FR : Tu n'as participé à aucun concours.
        "",  // FR : Il faut payer pour recevoir le cadeau.
        ""  // FR : Un message privé d'une star à un inconnu.
      ],
      "explication": ""  // FR : C'est un faux profil. Les « frais de livraison » sont le vrai but de l'arnaque.
    },
    {
      "contexte": "",  // FR : Après quelques jours de discussion avec une personne rencontrée en ligne, tu reçois ceci.
      "expediteur": "",  // FR : Profil inconnu
      "messages": [
        ""  // FR : J'ai enregistré notre appel vidéo. Si tu n'envoies pas 100 000 F avant ce soir, j'envoie la vidéo à tous tes amis Facebook.
      ],
      "indices": [
        "",  // FR : Une menace avec un délai très court.
        ""  // FR : Une demande d'argent en échange du silence.
      ],
      "explication": ""  // FR : Ne paie pas : il reviendrait demander plus. Fais des captures d'écran, bloque, signale, et parles-en à une personne de confiance.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : +228 9• •• •• 30
      "messages": [
        ""  // FR : Bonjour, ici votre agent Mobile Money. Pour finir votre retrait, envoyez-moi votre code PIN par SMS. Merci.
      ],
      "indices": [
        "",  // FR : On te demande ton code PIN.
        "",  // FR : Un vrai agent n'a jamais besoin de ton code.
        ""  // FR : Le message vient d'un numéro ordinaire.
      ],
      "explication": ""  // FR : Ton code PIN ne se donne à personne, ni par SMS, ni de vive voix. Supprime le message et bloque le numéro.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Sécurité Facebook <alerte@securite-fb-compte[.]com>
      "messages": [
        ""  // FR : Votre compte sera supprimé dans 24 heures suite à un signalement. Pour l'éviter, confirmez votre mot de passe ici : securite-fb-compte[.]com/verifier
      ],
      "indices": [
        "",  // FR : L'adresse de l'expéditeur n'est pas celle de Facebook.
        "",  // FR : On te menace d'une suppression rapide.
        ""  // FR : On te demande ton mot de passe via un lien.
      ],
      "explication": ""  // FR : C'est du hameçonnage : la fausse page vole ton mot de passe. Pour vérifier, ouvre toi-même l'application Facebook, jamais le lien reçu.
    },
    {
      "contexte": "",  // FR : Tu viens de te connecter à ton compte Gmail sur un ordinateur du cybercafé.
      "expediteur": "",  // FR : Google
      "messages": [
        ""  // FR : G-482915 est votre code de validation Google.
      ],
      "indices": [
        "",  // FR : C'est toi qui viens de demander à te connecter.
        ""  // FR : Le code est à taper sur l'écran devant toi, pas à envoyer à quelqu'un.
      ],
      "explication": ""  // FR : Tout est normal. Pense seulement à te déconnecter de ton compte avant de quitter le cybercafé.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Service client ✅
      "messages": [
        "",  // FR : Bonjour, suite à la mise à jour des cartes SIM, votre ligne sera suspendue ce soir.
        ""  // FR : Pour garder votre numéro, communiquez-nous le code à 6 chiffres que vous allez recevoir par SMS.
      ],
      "indices": [
        "",  // FR : Un compte avec une coche verte peut être faux.
        "",  // FR : On te demande un code reçu par SMS.
        ""  // FR : La menace de suspension sert à te presser.
      ],
      "explication": ""  // FR : Avec ce code, l'escroc peut prendre ton WhatsApp ou ton compte Mobile Money. Aucun service client ne demande un code reçu par SMS.
    },
    {
      "contexte": "",  // FR : Tu as oublié ton mot de passe Facebook et tu viens d'appuyer sur « Mot de passe oublié ».
      "expediteur": "",  // FR : Facebook
      "messages": [
        ""  // FR : Votre code de réinitialisation Facebook est 482 113. Ne le communiquez à personne.
      ],
      "indices": [
        "",  // FR : Tu viens de le demander toi-même.
        ""  // FR : Le message dit de ne le donner à personne.
      ],
      "explication": ""  // FR : Tape ce code dans l'application, puis choisis un nouveau mot de passe solide, différent de tes autres comptes.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : +228 9• •• •• 75
      "messages": [
        "",  // FR : Bonjour, ici le service sécurité de votre banque. Une opération suspecte de 300 000 F est en cours sur votre compte.
        ""  // FR : Pour l'annuler, je vais vous envoyer un code par SMS. Lisez-le moi vite, sinon l'argent part.
      ],
      "indices": [
        "",  // FR : On te fait peur avec une grosse somme.
        "",  // FR : On te demande de lire un code reçu par SMS.
        ""  // FR : L'urgence t'empêche de réfléchir.
      ],
      "explication": ""  // FR : Ce code sert justement à valider l'opération de l'escroc. Raccroche, puis appelle ta banque au numéro inscrit sur ta carte ou en agence.
    },
    {
      "contexte": "",  // FR : Ce SMS arrive sous le nom « Mixx ». Deux minutes plus tard, un inconnu t'appelle pour récupérer l'argent.
      "expediteur": "",  // FR : Mixx
      "messages": [
        ""  // FR : Transfert reçu : 50 000 F de AFI K. Nouveau solde : 50 210 F.
      ],
      "indices": [
        "",  // FR : Le nom d'un expéditeur peut être imité.
        "",  // FR : Un inconnu appelle juste après pour se faire rembourser.
        ""  // FR : Seul ton solde, vu dans le menu officiel, fait foi.
      ],
      "explication": ""  // FR : Même un SMS qui affiche le nom de l'opérateur peut être faux. Vérifie ton solde toi-même : tu verras que rien n'est arrivé.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Promo Fin d'Année 🇹🇬
      "messages": [
        "",  // FR : 🎉 Félicitations ! Votre numéro a été tiré au sort. Vous gagnez 100 000 F !
        ""  // FR : Pour recevoir votre gain, envoyez 2 000 F de frais d'activation au 9• •• •• 61.
      ],
      "indices": [
        "",  // FR : Tu n'as participé à aucun tirage.
        "",  // FR : Il faut payer pour recevoir le gain.
        ""  // FR : Le paiement va sur un numéro ordinaire.
      ],
      "explication": ""  // FR : Payer pour gagner, c'est toujours une arnaque. Les 2 000 F de chaque victime vont directement à l'escroc.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : +228 7• •• •• 19
      "messages": [
        "",  // FR : Bonjour, je suis agent Mobile Money. J'ai fait un dépôt sur votre numéro par erreur.
        ""  // FR : Vous allez recevoir un SMS avec un code : tapez-le sur votre téléphone pour confirmer le remboursement.
      ],
      "indices": [
        "",  // FR : Un inconnu te demande de taper un code.
        "",  // FR : Un remboursement se fait par l'opérateur, pas par toi.
        ""  // FR : Il se présente comme agent pour te rassurer.
      ],
      "explication": ""  // FR : En tapant ce code, tu peux envoyer ton propre argent. Raccroche et vérifie ton solde dans le menu officiel.
    },
    {
      "contexte": "",  // FR : Tu viens d'envoyer 5 000 F à ta sœur depuis l'application officielle.
      "expediteur": "",  // FR : Mixx
      "messages": [
        ""  // FR : Transfert de 5 000 F vers ADJOA M. effectué. Nouveau solde : 12 300 F.
      ],
      "indices": [
        "",  // FR : Tu viens de faire l'opération toi-même.
        ""  // FR : Le message ne demande rien.
      ],
      "explication": ""  // FR : C'est la confirmation de ton propre envoi. Rien à faire.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Investissement Togo Prospérité
      "messages": [
        ""  // FR : 💰 Placez 20 000 F aujourd'hui, recevez 60 000 F dans 7 jours ! Déjà 3 000 membres payés ✅ Preuves en commentaires 👇 Inscription par WhatsApp uniquement.
      ],
      "indices": [
        "",  // FR : Tripler son argent en une semaine est impossible.
        "",  // FR : Les « preuves » se fabriquent facilement.
        ""  // FR : Tout se passe sur WhatsApp, sans entreprise identifiable.
      ],
      "explication": ""  // FR : C'est une fausse plateforme d'investissement : les premiers sont parfois payés avec l'argent des suivants, puis tout disparaît.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : +228 9• •• •• 22
      "messages": [
        "",  // FR : Bonjour, je suis commerçante au grand marché. Je t'ai envoyé 15 000 F par erreur au lieu de mon fournisseur 😥
        "",  // FR : 📷 Capture d'écran : « Transfert de 15 000 F réussi »
        ""  // FR : Renvoie stp, c'est l'argent de la marchandise 🙏
      ],
      "indices": [
        "",  // FR : Une capture d'écran se fabrique en deux minutes.
        "",  // FR : On te demande de renvoyer toi-même.
        ""  // FR : L'histoire touchante sert à t'émouvoir.
      ],
      "explication": ""  // FR : Une capture ne prouve rien. Vérifie ton solde dans le menu officiel, et si un vrai envoi est arrivé par erreur, c'est l'opérateur qui l'annule.
    },
    {
      "contexte": "",  // FR : Ton retrait a échoué. Tu as appelé toi-même le service client avec le numéro trouvé dans l'application officielle.
      "expediteur": "",  // FR : Service client
      "messages": [
        "",  // FR : Bonjour, nous voyons votre retrait échoué. L'argent revient automatiquement sur votre compte sous 24 heures.
        ""  // FR : Avez-vous d'autres questions ?
      ],
      "indices": [
        "",  // FR : C'est toi qui as appelé le numéro officiel.
        ""  // FR : On ne te demande ni code, ni manipulation.
      ],
      "explication": ""  // FR : Tout est normal. La règle reste la même : même au vrai service client, on ne donne jamais son code PIN.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : MobileMoney
      "messages": [
        ""  // FR : Votre compte est suspendu pour vérification d'identité. Réactivez-le ici avec votre numéro et votre code PIN : mobilemoney-togo-verif[.]com
      ],
      "indices": [
        "",  // FR : Le lien ne mène pas au site officiel.
        "",  // FR : On te demande ton code PIN sur une page web.
        ""  // FR : La suspension est inventée pour te faire peur.
      ],
      "explication": ""  // FR : Aucun opérateur ne demande ton code PIN sur un site. En cas de doute, appelle le service client avec le numéro officiel.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : +44 •• •• •• 03
      "messages": [
        "",  // FR : Hello 👋 Gagnez 5 000 F par jour en aimant des vidéos YouTube. Tâche simple, paiement immédiat sur Mobile Money !
        ""  // FR : Pour débloquer les tâches mieux payées, il faut juste un dépôt de 10 000 F.
      ],
      "indices": [
        "",  // FR : Un numéro étranger inconnu.
        "",  // FR : Beaucoup d'argent pour un travail très simple.
        ""  // FR : Il faut payer pour « débloquer » la suite.
      ],
      "explication": ""  // FR : C'est l'arnaque aux tâches : on te paie un peu au début, puis on te demande de déposer toujours plus. Bloque et signale le numéro.
    },
    {
      "contexte": "",  // FR : Ce message arrive dans le groupe WhatsApp de la famille.
      "expediteur": "",  // FR : Tante Akossiwa
      "messages": [
        ""  // FR : Bonsoir à tous. Je viens d'envoyer un code par erreur à quelqu'un du groupe 🙈 Celui qui l'a reçu, envoie-le moi en privé stp, c'est urgent.
      ],
      "indices": [
        "",  // FR : On demande un code reçu par SMS.
        "",  // FR : Le compte de ta tante a sans doute déjà été volé.
        ""  // FR : Le voleur vise maintenant tout le groupe.
      ],
      "explication": ""  // FR : Appelle ta tante pour la prévenir, et dis au groupe de ne rien envoyer. Puis active la vérification en deux étapes.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : WhatsApp Support ✅
      "messages": [
        "",  // FR : Votre compte WhatsApp sera désactivé dans 24 h pour activité suspecte.
        ""  // FR : Pour le garder, répondez avec le code de vérification que vous venez de recevoir.
      ],
      "indices": [
        "",  // FR : WhatsApp ne te demande jamais ton code par message.
        "",  // FR : La coche verte et le nom peuvent être imités.
        ""  // FR : La menace de désactivation sert à te presser.
      ],
      "explication": ""  // FR : Ne réponds pas. Bloque et signale ce compte, puis active la vérification en deux étapes.
    },
    {
      "contexte": "",  // FR : Ce matin au marché, ton amie Sena t'a dit qu'elle allait t'envoyer la vidéo du mariage.
      "expediteur": "",  // FR : Sena
      "messages": [
        "",  // FR : Voici la vidéo du mariage comme promis 🎉💃
        ""  // FR : 🎬 Vidéo (2 min)
      ],
      "indices": [
        "",  // FR : Ton amie t'avait prévenu de vive voix.
        ""  // FR : Elle ne demande ni argent, ni code, ni clic sur un lien.
      ],
      "explication": ""  // FR : Tout est normal. Méfie-toi seulement si un « fichier » te demande d'installer une application ou de te connecter.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Kodjo (ton cousin)
      "messages": [
        "",  // FR : Frère, je suis bloqué à la frontière, la police veut 30 000 F sinon ils gardent ma moto 😰
        ""  // FR : Envoie vite sur ce numéro : 9• •• •• 51. Je te rembourse ce soir, je ne peux pas appeler ici.
      ],
      "indices": [
        "",  // FR : Le message vient bien du compte de ton cousin, mais ce compte peut avoir été volé.
        "",  // FR : L'argent part vers un autre numéro que le sien.
        ""  // FR : « Je ne peux pas appeler » : il évite la vérification.
      ],
      "explication": ""  // FR : Appelle Kodjo sur son numéro habituel, ou une personne qui est avec lui. Un compte piraté écrit exactement comme ça.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : +229 •• •• •• 14
      "messages": [
        "",  // FR : Bonjour maman, c'est moi, j'ai perdu mon téléphone 😢 Enregistre ce nouveau numéro.
        ""  // FR : Envoie-moi 10 000 F pour acheter une nouvelle puce stp.
      ],
      "indices": [
        "",  // FR : Un numéro inconnu, même pas du Togo.
        "",  // FR : Il ne dit pas son prénom.
        ""  // FR : La demande d'argent arrive tout de suite.
      ],
      "explication": ""  // FR : Appelle ton enfant sur son ancien numéro ou un proche avant tout. Un escroc envoie ce message à des centaines de « mamans ».
    },
    {
      "contexte": "",  // FR : Hier soir, ta fille Ama t'a appelée pour dire que son téléphone était gâté et qu'elle t'écrirait depuis celui de sa copine Délali.
      "expediteur": "",  // FR : +228 9• •• •• 46
      "messages": [
        ""  // FR : Maman c'est Ama 😊 Je t'écris avec le téléphone de Délali comme je t'ai dit. Je rentre à 18 h, ne t'inquiète pas.
      ],
      "indices": [
        "",  // FR : Ta fille t'avait prévenue par un appel.
        ""  // FR : Elle ne demande ni argent ni code.
      ],
      "explication": ""  // FR : C'est cohérent. Si ce numéro te demande un jour de l'argent, rappelle quand même Ama ou Délali avant.
    },
    {
      "contexte": "",  // FR : Tu vois cette publication dans un groupe Facebook d'offres d'emploi.
      "expediteur": "",  // FR : Offres d'emploi Lomé 2026
      "messages": [
        ""  // FR : 🔥 RECRUTEMENT IMMÉDIAT : 25 hôtesses pour un hôtel de luxe. Salaire 300 000 F/mois. Inscription : 10 000 F au 9• •• •• 07. Dépêchez-vous !
      ],
      "indices": [
        "",  // FR : Des frais d'inscription à payer.
        "",  // FR : Le nom de l'hôtel n'est jamais donné.
        ""  // FR : Salaire très élevé et pression du temps.
      ],
      "explication": ""  // FR : Un vrai employeur ne fait pas payer pour postuler. Les 10 000 F de chaque candidate vont à l'escroc.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : rh.recrutement.ong@gmail[.]com
      "messages": [
        "",  // FR : Félicitations ! Votre profil a été retenu pour un poste de chargé de projet dans notre ONG.
        ""  // FR : Merci d'envoyer 35 000 F pour la visite médicale obligatoire auprès de notre clinique partenaire, avant vendredi.
      ],
      "indices": [
        "",  // FR : Une ONG sérieuse n'utilise pas une adresse Gmail pour recruter.
        "",  // FR : Tu dois payer avant même un entretien.
        ""  // FR : La « clinique partenaire » est choisie par eux.
      ],
      "explication": ""  // FR : Frais de visite médicale, de dossier ou de badge : c'est le même piège. Ne paie rien et vérifie l'ONG par ses canaux officiels.
    },
    {
      "contexte": "",  // FR : La semaine dernière, tu as passé un entretien dans les bureaux d'une entreprise de Lomé.
      "expediteur": "",  // FR : Service des ressources humaines
      "messages": [
        ""  // FR : Bonjour, nous avons le plaisir de vous proposer le poste. Votre contrat vous sera remis lors de votre premier jour, lundi à 8 h, dans nos bureaux. Bienvenue !
      ],
      "indices": [
        "",  // FR : Tu as vraiment passé un entretien dans leurs bureaux.
        ""  // FR : On ne te demande ni argent ni document à envoyer.
      ],
      "explication": ""  // FR : Bonne nouvelle, et rien de suspect. Ton contrat se signe sur place, dans les bureaux de l'entreprise.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Concours Fonction Publique 2026 – Infos
      "messages": [
        ""  // FR : 📢 Les résultats sont disponibles ! Pour consulter ta note et réserver ta place, paie 7 500 F de frais de dossier sur ce numéro : 9• •• •• 90. Clôture ce soir.
      ],
      "indices": [
        "",  // FR : Les résultats officiels ne se paient pas.
        "",  // FR : Paiement sur un numéro Mobile Money ordinaire.
        ""  // FR : Délai très court pour t'empêcher de vérifier.
      ],
      "explication": ""  // FR : Les résultats d'un concours public sont publiés sur les canaux officiels de l'institution. Va vérifier toi-même.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Bourses Études Canada <bourses-canada-2026@outlook[.]com>
      "messages": [
        "",  // FR : Vous avez obtenu une bourse d'études complète au Canada (frais de scolarité, logement et billet d'avion) !
        ""  // FR : Pour confirmer, payez 85 000 F de frais de traitement du visa avant la fin de la semaine.
      ],
      "indices": [
        "",  // FR : Tu n'as postulé à aucune bourse.
        "",  // FR : Une adresse e-mail gratuite pour un organisme « officiel ».
        ""  // FR : Il faut payer pour « confirmer ».
      ],
      "explication": ""  // FR : Les vraies bourses ne te contactent pas sans candidature et ne font pas payer par Mobile Money. Vérifie sur le site officiel de l'organisme.
    },
    {
      "contexte": "",  // FR : Tu as postulé à un stage via le site officiel d'une banque.
      "expediteur": "",  // FR : Recrutement
      "messages": [
        ""  // FR : Merci pour votre candidature. Nous l'étudions avec attention et reviendrons vers vous si votre profil correspond à nos besoins.
      ],
      "indices": [
        "",  // FR : Tu as vraiment postulé sur le site officiel.
        ""  // FR : On ne te demande rien.
      ],
      "explication": ""  // FR : C'est un accusé de réception classique. Rien de suspect.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Recruteur International
      "messages": [
        "",  // FR : Travail au Canada 🇨🇦 Logement offert, billet d'avion payé, salaire 2 000 000 F/mois.
        ""  // FR : Il faut juste 150 000 F pour le visa de travail. Places très limitées !
      ],
      "indices": [
        "",  // FR : Une offre trop belle, sans entreprise nommée.
        "",  // FR : Tu dois payer le « visa » toi-même à un inconnu.
        ""  // FR : Places limitées pour te presser.
      ],
      "explication": ""  // FR : Les faux départs à l'étranger coûtent très cher aux victimes. Aucune vraie entreprise ne recrute ainsi sur WhatsApp.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Grande Tombola Nationale
      "messages": [
        ""  // FR : 🏍️ Partage cette publication et commente « OUI » pour gagner une moto neuve ! Les gagnants paieront seulement 5 000 F de livraison.
      ],
      "indices": [
        "",  // FR : Une page inconnue qui promet un gros lot.
        "",  // FR : Il faut payer la « livraison ».
        ""  // FR : Le partage sert à toucher encore plus de victimes.
      ],
      "explication": ""  // FR : Il n'y a pas de moto. Ne partage pas, et signale la page à Facebook.
    },
    {
      "contexte": "",  // FR : Ce profil porte le nom et la photo d'un ancien camarade de classe. Il a été créé hier.
      "expediteur": "",  // FR : Ton « ancien camarade »
      "messages": [
        "",  // FR : Salut l'ami, ça fait longtemps ! Je travaille maintenant dans une banque 😎
        ""  // FR : Je peux te faire un prêt de 500 000 F sans garantie. Il faut juste 15 000 F de frais de dossier.
      ],
      "indices": [
        "",  // FR : Un profil tout neuf qui copie un ami.
        "",  // FR : Un prêt facile contre des frais payés d'avance.
        ""  // FR : Une banque ne prête pas par Messenger.
      ],
      "explication": ""  // FR : Contacte ton vrai camarade par un autre moyen pour le prévenir, puis signale le faux profil.
    },
    {
      "contexte": "",  // FR : Tu discutes depuis trois semaines avec « Grace », rencontrée sur Facebook. Elle ne répond jamais aux appels vidéo.
      "expediteur": "",  // FR : Grace ❤️
      "messages": [
        "",  // FR : Mon cœur, je t'ai envoyé un colis avec des cadeaux et de l'argent pour qu'on se voie bientôt 🥰
        ""  // FR : La douane le bloque et demande 120 000 F. Paie vite stp, sinon ils le renvoient ❤️
      ],
      "indices": [
        "",  // FR : Une relation uniquement en ligne, jamais en vidéo.
        "",  // FR : Un colis bloqué qu'il faut payer.
        ""  // FR : Les mots d'amour servent à faire baisser ta garde.
      ],
      "explication": ""  // FR : C'est une arnaque aux sentiments. Il n'y a ni colis ni douane. Ne paie rien, garde les preuves et parles-en à un proche.
    },
    {
      "contexte": "",  // FR : Il y a cinq minutes, tu as changé toi-même ton mot de passe Facebook.
      "expediteur": "",  // FR : Facebook
      "messages": [
        ""  // FR : Votre mot de passe a été modifié. Si vous êtes à l'origine de cette modification, vous n'avez rien à faire.
      ],
      "indices": [
        "",  // FR : Tu viens de faire ce changement toi-même.
        ""  // FR : Le message ne demande ni clic, ni code.
      ],
      "explication": ""  // FR : C'est une simple confirmation. Si un jour tu reçois ce message sans avoir rien changé, sécurise ton compte tout de suite.
    },
    {
      "contexte": "",  // FR : Tu gères la page Facebook de ta boutique.
      "expediteur": "",  // FR : Meta Support Pages
      "messages": [
        "",  // FR : ⚠️ Votre page a enfreint nos règles sur les droits d'auteur et sera supprimée dans 24 h.
        ""  // FR : Si c'est une erreur, faites appel ici : meta-support-appel[.]com
      ],
      "indices": [
        "",  // FR : Le lien ne mène pas au vrai site de Facebook.
        "",  // FR : La menace de suppression rapide sert à te presser.
        ""  // FR : Les vraies alertes apparaissent dans les paramètres de ta page.
      ],
      "explication": ""  // FR : La fausse page d'appel vole tes identifiants et ta page. Vérifie dans l'application Facebook, jamais via le lien reçu.
    },
    {
      "contexte": "",  // FR : 
      "expediteur": "",  // FR : Inconnu
      "messages": [
        ""  // FR : J'ai piraté ta caméra et j'ai des vidéos de toi. Envoie 50 000 F avant demain, sinon je les envoie à tous tes contacts.
      ],
      "indices": [
        "",  // FR : Une menace sans aucune preuve.
        "",  // FR : Une demande d'argent avec un délai court.
        ""  // FR : Le même message est envoyé à des milliers de personnes.
      ],
      "explication": ""  // FR : C'est presque toujours du bluff. Ne paie pas, ne réponds pas, garde le message comme preuve et change tes mots de passe par précaution.
    },
    {
      "contexte": "",  // FR : Hier, ta cousine t'a montré la nouvelle page Facebook de sa boutique de pagnes.
      "expediteur": "",  // FR : Pagnes de chez Ayaba
      "messages": [
        ""  // FR : Merci d'avoir aimé notre page 💛 Nouveaux pagnes en stock, passez nous voir au marché !
      ],
      "indices": [
        "",  // FR : Tu connais la boutique et la personne derrière.
        ""  // FR : Pas de demande d'argent, de code ni de lien suspect.
      ],
      "explication": ""  // FR : C'est un message de remerciement normal.
    }
  ],
  "pourquoi": [
    {
      "titre": "",  // FR : En français et en ewe
      "texte": ""  // FR : Les leçons arrivent aussi en ewe, à lire et à écouter, pour apprendre dans la langue de tous les jours.
    },
    {
      "titre": "",  // FR : Léger, même hors connexion
      "texte": ""  // FR : Une fois ouvert, le site fonctionne sans internet. Idéal pour les petits forfaits et les petits téléphones.
    },
    {
      "titre": "",  // FR : Rien n'est collecté
      "texte": ""  // FR : Pas de compte, pas de publicité, pas de suivi. Ta progression reste dans ton téléphone.
    }
  ],
  "mentions": {
    "titre": "",  // FR : Mentions et confidentialité
    "sections": [
      {
        "titre": "",  // FR : Qui édite ce site
        "paragraphes": [
          ""  // FR : {site} est un projet personnel et indépendant de {auteur}, créé pour aider le public togolais à reconnaître les arnaques numériques.
        ]
      },
      {
        "titre": "",  // FR : Aucun lien officiel
        "paragraphes": [
          "",  // FR : Le site n'est affilié ni à l'Agence nationale de la cybersécurité (ANCy), ni au CERT.tg, ni à aucun opérateur, banque ou réseau social. Les noms de marques cités appartiennent à leurs propriétaires et servent uniquement à expliquer les arnaques.
          ""  // FR : Les messages du jeu sont des exemples inventés à partir d'arnaques réelles. Les numéros sont masqués et les liens désactivés.
        ]
      },
      {
        "titre": "",  // FR : Tes données
        "paragraphes": [
          "",  // FR : Le site ne collecte aucune donnée personnelle : pas de compte, pas de cookies, pas de publicité, pas de mesure d'audience.
          ""  // FR : Ta progression et la langue choisie sont enregistrées uniquement dans ton navigateur. Tu peux les effacer à tout moment avec « Effacer ma progression », en bas de page.
        ]
      },
      {
        "titre": "",  // FR : Les informations
        "paragraphes": [
          ""  // FR : Le contenu sert à la sensibilisation. Il ne remplace pas les conseils de ton opérateur, de ta banque ou des autorités. En cas d'arnaque, contacte le CERT.tg ou la police.
        ]
      },
      {
        "titre": "",  // FR : Hébergement
        "paragraphes": [
          ""  // FR : Le site est hébergé par GitHub Pages (GitHub, Inc.).
        ]
      },
      {
        "titre": "",  // FR : Licences
        "paragraphes": [
          ""  // FR : Code sous licence MIT. Polices Unbounded et Onest sous licence SIL Open Font License. Icônes Phosphor Icons sous licence MIT.
        ]
      }
    ],
    "contact": ""  // FR : Une question ou une erreur à signaler :
  },
  "jeux": {
    "salle_titre": "",  // FR : La salle de jeux
    "salle_intro": "",  // FR : Six jeux courts pour t'entraîner à déjouer les arnaques. On apprend en s'amusant, et on peut battre son record.
    "record": "",  // FR : Record : {score}
    "nouveau": "",  // FR : Nouveau
    "jouer": "",  // FR : Jouer
    "rejouer": "",  // FR : Rejouer
    "retour_salle": "",  // FR : Autres jeux
    "termine": "",  // FR : Partie terminée
    "nouveau_record": "",  // FR : Nouveau record !
    "partage": "",  // FR : J'ai fait {score} au jeu « {jeu} » sur {site} 🎮 À toi de jouer ! 👉 {url}
    "cartes": [
      {
        "titre": "",  // FR : Arnaque ou pas ?
        "texte": "",  // FR : Des messages réalistes arrivent sur un téléphone : à toi de dire si c'est une arnaque.
        "duree": ""  // FR : 3 min
      },
      {
        "titre": "",  // FR : Chasse aux pièges
        "texte": "",  // FR : Touche chaque passage suspect d'un message. Trois erreurs et c'est fini !
        "duree": ""  // FR : 4 min
      },
      {
        "titre": "",  // FR : Lien piégé ?
        "texte": "",  // FR : Glisse chaque adresse à gauche ou à droite : vrai site ou faux site ?
        "duree": ""  // FR : 2 min
      },
      {
        "titre": "",  // FR : Casse-mot de passe
        "texte": "",  // FR : Découvre en combien de temps un pirate trouverait un mot de passe.
        "duree": ""  // FR : 3 min
      },
      {
        "titre": "",  // FR : La journée d'Afi
        "texte": "",  // FR : Aide Afi, vendeuse au marché, à finir sa journée sans perdre son argent.
        "duree": ""  // FR : 5 min
      },
      {
        "titre": "",  // FR : Mémo des réflexes
        "texte": "",  // FR : Retourne les cartes et associe chaque piège au bon réflexe.
        "duree": ""  // FR : 2 min
      }
    ],
    "pieges": {
      "titre": "",  // FR : Chasse aux pièges
      "intro": "",  // FR : Chaque message cache plusieurs pièges. Touche les passages suspects pour les débusquer.
      "consigne": "",  // FR : Touche les passages suspects (l'expéditeur compte aussi). Chaque erreur coûte un cœur.
      "compteur": "",  // FR : Message {n} sur {total}
      "trouves": "",  // FR : Pièges trouvés : {n} sur {total}
      "vies": "",  // FR : Cœurs restants : {n}
      "bien": "",  // FR : Bien vu !
      "pas_suspect": "",  // FR : Ce passage n'est pas suspect. Cherche encore !
      "tous": "",  // FR : Bravo, tu as trouvé tous les pièges de ce message !
      "perdu": "",  // FR : Plus de cœurs… Voici les pièges que tu as manqués :
      "suivant": "",  // FR : Message suivant
      "fin": "",  // FR : Tu as trouvé {score} pièges sur {total}.
      "messages": [
        {
          "expediteur": "",  // FR : +228 9• •• •• 17
          "piege_expediteur": "",  // FR : Un vrai message d'opérateur n'arrive pas d'un numéro de téléphone ordinaire.
          "morceaux": [
            {
              "texte": ""  // FR : Bonsoir,
            },
            {
              "texte": "",  // FR : je me suis trompé en envoyant 25 000 F sur ton numéro.
              "piege": ""  // FR : Le faux « transfert par erreur » : vérifie toujours ton solde dans le menu officiel.
            },
            {
              "texte": ""  // FR : Je m'appelle Koffi.
            },
            {
              "texte": "",  // FR : C'est l'argent pour l'hôpital de ma mère,
              "piege": ""  // FR : Une histoire touchante pour t'émouvoir et te presser.
            },
            {
              "texte": "",  // FR : renvoie-le moi vite stp 🙏
              "piege": ""  // FR : Un remboursement se fait par l'opérateur, jamais par toi.
            },
            {
              "texte": ""  // FR : Que Dieu te bénisse.
            }
          ]
        },
        {
          "expediteur": "",  // FR : Recrutement Togo 2026
          "piege_expediteur": "",  // FR : 
          "morceaux": [
            {
              "texte": ""  // FR : Bonjour à tous !
            },
            {
              "texte": "",  // FR : Une grande société recrute 40 agents
              "piege": ""  // FR : Le nom de la « grande société » n'est jamais donné.
            },
            {
              "texte": ""  // FR : pour la caisse et l'accueil.
            },
            {
              "texte": "",  // FR : Salaire : 250 000 F, sans diplôme.
              "piege": ""  // FR : Un gros salaire sans diplôme ni expérience : trop beau pour être vrai.
            },
            {
              "texte": "",  // FR : Frais de dossier : 5 000 F par Mobile Money.
              "piege": ""  // FR : Un vrai employeur ne fait jamais payer les candidats.
            },
            {
              "texte": "",  // FR : Il ne reste que 3 places !
              "piege": ""  // FR : La pression du temps t'empêche de vérifier.
            },
            {
              "texte": ""  // FR : Bonne journée.
            }
          ]
        },
        {
          "expediteur": "",  // FR : Sécurité Facebook <alerte@securite-fb-compte[.]com>
          "piege_expediteur": "",  // FR : L'adresse de l'expéditeur ne finit pas par facebook.com.
          "morceaux": [
            {
              "texte": "",  // FR : Cher utilisateur,
              "piege": ""  // FR : Un vrai service t'appelle par ton nom, pas « cher utilisateur ».
            },
            {
              "texte": ""  // FR : votre compte a été signalé.
            },
            {
              "texte": "",  // FR : Il sera supprimé dans 24 heures.
              "piege": ""  // FR : La menace et le délai très court servent à te faire paniquer.
            },
            {
              "texte": "",  // FR : Confirmez votre mot de passe ici :
              "piege": ""  // FR : Aucun service ne demande ton mot de passe par e-mail.
            },
            {
              "texte": "",  // FR : securite-fb-compte[.]com/verifier
              "piege": ""  // FR : Ce lien ne mène pas au vrai site de Facebook.
            },
            {
              "texte": ""  // FR : L'équipe Facebook
            }
          ]
        },
        {
          "expediteur": "",  // FR : +228 7• •• •• 52
          "piege_expediteur": "",  // FR : 
          "morceaux": [
            {
              "texte": ""  // FR : Bonjour, ici le service client.
            },
            {
              "texte": ""  // FR : Suite à une mise à jour,
            },
            {
              "texte": "",  // FR : votre compte sera bloqué ce soir.
              "piege": ""  // FR : La menace de blocage sert à te faire peur.
            },
            {
              "texte": "",  // FR : Tapez le code que je vais vous dicter,
              "piege": ""  // FR : Ne tape jamais un code dicté par quelqu'un au téléphone.
            },
            {
              "texte": "",  // FR : puis entrez votre code secret pour confirmer.
              "piege": ""  // FR : Personne, jamais, n'a besoin de ton code secret.
            },
            {
              "texte": ""  // FR : Merci de votre fidélité.
            }
          ]
        },
        {
          "expediteur": "",  // FR : +229 •• •• •• 14
          "piege_expediteur": "",  // FR : Un numéro inconnu, et même pas du Togo.
          "morceaux": [
            {
              "texte": "",  // FR : Maman, c'est moi,
              "piege": ""  // FR : Il ne dit pas son prénom : ce message est envoyé à des centaines de mamans.
            },
            {
              "texte": ""  // FR : mon téléphone est tombé dans l'eau.
            },
            {
              "texte": ""  // FR : Enregistre ce nouveau numéro.
            },
            {
              "texte": "",  // FR : Envoie-moi 10 000 F tout de suite,
              "piege": ""  // FR : Une demande d'argent immédiate, avant toute vérification.
            },
            {
              "texte": "",  // FR : je t'explique après, je ne peux pas appeler.
              "piege": ""  // FR : Il évite l'appel pour ne pas être démasqué.
            }
          ]
        },
        {
          "expediteur": "",  // FR : Investissement Togo Prospérité
          "piege_expediteur": "",  // FR : 
          "morceaux": [
            {
              "texte": ""  // FR : 💰 Placez 20 000 F aujourd'hui,
            },
            {
              "texte": "",  // FR : recevez 60 000 F dans 7 jours !
              "piege": ""  // FR : Tripler son argent en une semaine est impossible.
            },
            {
              "texte": "",  // FR : Déjà 3 000 membres payés ✅
              "piege": ""  // FR : Les « preuves » de gains se fabriquent très facilement.
            },
            {
              "texte": ""  // FR : Rejoignez-nous
            },
            {
              "texte": "",  // FR : uniquement par WhatsApp.
              "piege": ""  // FR : Aucune entreprise identifiable : tout se passe en privé.
            }
          ]
        },
        {
          "expediteur": "",  // FR : MobileMoney
          "piege_expediteur": "",  // FR : 
          "morceaux": [
            {
              "texte": "",  // FR : Votre compte est suspendu
              "piege": ""  // FR : Une fausse alerte pour te faire peur.
            },
            {
              "texte": ""  // FR : pour vérification d'identité.
            },
            {
              "texte": "",  // FR : Réactivez-le ici avec votre code PIN :
              "piege": ""  // FR : Aucun opérateur ne demande ton code PIN sur un site.
            },
            {
              "texte": "",  // FR : mobilemoney-togo-verif[.]com
              "piege": ""  // FR : Ce lien ne mène pas au site officiel de l'opérateur.
            },
            {
              "texte": ""  // FR : Service client 24 h/24.
            }
          ]
        }
      ]
    },
    "liens": {
      "titre": "",  // FR : Lien piégé ?
      "intro": "",  // FR : Les escrocs fabriquent des adresses qui ressemblent aux vraies. Apprends à lire le vrai nom d'un site.
      "regle_titre": "",  // FR : La règle d'or
      "regle": "",  // FR : Le vrai nom du site se trouve juste avant le premier « / ». Lis-le en partant de la fin : c'est lui qui compte, pas le début.
      "astuce": "",  // FR : Sur téléphone, tu peux aussi glisser la carte : à gauche si c'est un piège, à droite si c'est officiel.
      "compteur": "",  // FR : Lien {n} sur {total}
      "bouton_piege": "",  // FR : Lien piégé
      "bouton_vrai": "",  // FR : Lien officiel
      "bien": "",  // FR : Bien vu !
      "rate": "",  // FR : Raté !
      "etait_piege": "",  // FR : C'était un lien piégé.
      "etait_vrai": "",  // FR : C'était un lien officiel.
      "vrai_nom": "",  // FR : Vrai nom du site : {domaine}
      "suivant": "",  // FR : Lien suivant
      "fin": "",  // FR : Tu as bien jugé {score} liens sur {total}.
      "items": [
        {
          "explication": ""  // FR : Juste avant le premier « / », on lit facebook.com : c'est bien Facebook.
        },
        {
          "explication": ""  // FR : Le début imite Facebook, mais le vrai nom, juste avant le « / », est connexion-securisee.net.
        },
        {
          "explication": ""  // FR : « m. » indique la version mobile. Le nom finit bien par facebook.com.
        },
        {
          "explication": ""  // FR : Regarde bien : deux zéros à la place des « o ». Les escrocs jouent sur les lettres qui se ressemblent.
        },
        {
          "explication": ""  // FR : C'est WhatsApp pour ordinateur. Le nom finit bien par whatsapp.com.
        },
        {
          "explication": ""  // FR : « WhatsApp Gold » n'existe pas : ce site veut te faire installer une fausse application.
        },
        {
          "explication": ""  // FR : C'est la vraie page de connexion de Google : le nom finit par google.com.
        },
        {
          "explication": ""  // FR : Tout le début est un leurre : le vrai nom est verification-compte.info.
        },
        {
          "explication": ""  // FR : C'est le site officiel du CERT.tg, le centre national de réponse aux incidents de cybersécurité.
        },
        {
          "explication": ""  // FR : Ce n'est pas cert.tg mais cert-tg-alerte.com. Et le CERT.tg ne distribue pas de récompenses.
        },
        {
          "explication": ""  // FR : Juste avant le « / », on lit youtube.com : c'est bien YouTube.
        },
        {
          "explication": ""  // FR : Piège ! Avant le « / », on lit com-video.watch. « youtube » n'est qu'un mot placé au début.
        },
        {
          "explication": ""  // FR : « fr. » indique la version française de Wikipédia, dont le nom est wikipedia.org.
        },
        {
          "explication": ""  // FR : Un site qui demande ton code PIN est toujours une arnaque, quel que soit son nom.
        },
        {
          "explication": ""  // FR : Gmail se trouve à l'adresse mail.google.com : le nom finit bien par google.com.
        },
        {
          "explication": ""  // FR : N'importe qui peut créer un blog gratuit sur blogspot.com. Un vrai organisme de bourses n'utilise pas ça.
        }
      ]
    },
    "motdepasse": {
      "titre": "",  // FR : Casse-mot de passe
      "intro": "",  // FR : Un ordinateur de pirate peut tester des milliards de mots de passe par seconde. Le tien tiendrait combien de temps ?
      "testeur_titre": "",  // FR : Teste un mot de passe
      "testeur_label": "",  // FR : Écris un mot de passe inventé (pas le vrai !)
      "prive": "",  // FR : Rien n'est envoyé ni enregistré : le calcul se fait dans ton téléphone.
      "afficher": "",  // FR : Afficher
      "masquer": "",  // FR : Masquer
      "vide": "",  // FR : Commence à écrire pour voir le résultat.
      "temps": "",  // FR : Un pirate le trouverait en :
      "niveaux": [
        "",  // FR : Très faible
        "",  // FR : Faible
        "",  // FR : Moyen
        "",  // FR : Solide
        ""  // FR : Très solide
      ],
      "criteres": [
        "",  // FR : Au moins 12 caractères
        "",  // FR : Plusieurs mots, comme une petite phrase
        "",  // FR : Des chiffres ou des symboles
        "",  // FR : Pas de mot de passe courant, de prénom ni de date
        ""  // FR : Pas de suite comme 1234 ou azerty
      ],
      "unites": {
        "instant": "",  // FR : Moins d'une seconde
        "seconde": [
          "",  // FR : {n} seconde
          ""  // FR : {n} secondes
        ],
        "minute": [
          "",  // FR : {n} minute
          ""  // FR : {n} minutes
        ],
        "heure": [
          "",  // FR : {n} heure
          ""  // FR : {n} heures
        ],
        "jour": [
          "",  // FR : {n} jour
          ""  // FR : {n} jours
        ],
        "mois": [
          "",  // FR : {n} mois
          ""  // FR : {n} mois
        ],
        "an": [
          "",  // FR : {n} an
          ""  // FR : {n} ans
        ],
        "siecles": "",  // FR : Des siècles
        "milliers": "",  // FR : Des milliers d'années
        "millions": "",  // FR : Des millions d'années
        "milliards": ""  // FR : Des milliards d'années
      },
      "defi_titre": "",  // FR : Le duel des mots de passe
      "defi_intro": "",  // FR : Lequel des deux tiendrait le plus longtemps face à un pirate ?
      "compteur": "",  // FR : Duel {n} sur {total}
      "plus_solide": "",  // FR : Le plus solide
      "bien": "",  // FR : Bien vu !
      "rate": "",  // FR : Raté !
      "suivant": "",  // FR : Duel suivant
      "fin": ""  // FR : Tu as gagné {score} duels sur {total}.
    },
    "histoire": {
      "titre": "",  // FR : La journée d'Afi
      "intro": "",  // FR : Afi vend des pagnes au grand marché de Lomé. Ce matin, elle a 60 000 F sur son compte Mobile Money. Les escrocs vont tout essayer : aide-la à faire les bons choix !
      "commencer": "",  // FR : Commencer la journée
      "porte_monnaie": "",  // FR : Porte-monnaie
      "vigilance": "",  // FR : Vigilance
      "que_faire": "",  // FR : Que doit faire Afi ?
      "continuer": "",  // FR : Continuer
      "fin_argent": "",  // FR : Il reste {argent} F à Afi sur 60 000 F.
      "fin_points": "",  // FR : Vigilance : {points} sur {total}
      "fins": [
        {
          "titre": "",  // FR : Rude journée pour Afi…
          "texte": ""  // FR : Les escrocs ont eu Afi plusieurs fois. Rejoue et aide-la à les déjouer : chaque bon réflexe compte.
        },
        {
          "titre": "",  // FR : Afi s'en sort, de justesse
          "texte": ""  // FR : Quelques pièges l'ont fait hésiter. Rejoue pour trouver tous les bons réflexes.
        },
        {
          "titre": "",  // FR : Afi, reine de la vigilance
          "texte": ""  // FR : Afi termine la journée sans perdre un franc à cause des escrocs. Tu as les bons réflexes !
        }
      ],
      "scenes": [
        {
          "heure": "",  // FR : 7 h 30
          "texte": "",  // FR : Afi reçoit un SMS : « Vous avez reçu 20 000 F. » Une minute après, un inconnu appelle en pleurant : « Je me suis trompé de numéro, renvoie-moi l'argent, c'est pour l'hôpital ! »
          "choix": [
            {
              "texte": "",  // FR : Renvoyer vite les 20 000 F, le pauvre…
              "consequence": ""  // FR : Le SMS était faux : aucun argent n'était arrivé. Afi vient d'envoyer 20 000 F de sa poche à un escroc.
            },
            {
              "texte": "",  // FR : Vérifier son solde dans le menu officiel
              "consequence": ""  // FR : Le solde n'a pas bougé : le SMS était faux. Afi raccroche et bloque le numéro. Bravo !
            },
            {
              "texte": "",  // FR : Rappeler l'inconnu pour en savoir plus
              "consequence": ""  // FR : L'escroc insiste et invente d'autres histoires. Afi ne perd rien, mais le bon réflexe était de vérifier son solde tout de suite.
            }
          ]
        },
        {
          "heure": "",  // FR : 9 h
          "texte": "",  // FR : Sur WhatsApp, son cousin Kodjo écrit : « Je t'ai envoyé un code à 6 chiffres par erreur, renvoie-le moi stp. » Justement, Afi vient de recevoir un code par SMS.
          "choix": [
            {
              "texte": "",  // FR : Envoyer le code, c'est Kodjo
              "consequence": ""  // FR : Le compte de Kodjo était piraté. Avec ce code, l'escroc prend le WhatsApp d'Afi et écrit à tous ses clients pour leur demander de l'argent.
            },
            {
              "texte": "",  // FR : Ne rien envoyer et appeler Kodjo
              "consequence": ""  // FR : Kodjo n'a rien demandé : son compte a été volé. Afi le prévient et active la vérification en deux étapes.
            },
            {
              "texte": "",  // FR : Ignorer le message
              "consequence": ""  // FR : Afi garde son compte, mais Kodjo et la famille ne sont pas prévenus. Un appel aurait aidé tout le monde.
            }
          ]
        },
        {
          "heure": "",  // FR : 11 h
          "texte": "",  // FR : Une cliente sur Facebook commande 10 pagnes pour 45 000 F. Elle envoie une capture d'écran « Paiement effectué » et demande la livraison tout de suite.
          "choix": [
            {
              "texte": "",  // FR : Livrer : la capture prouve le paiement
              "consequence": ""  // FR : La capture était fausse. Afi a perdu 45 000 F de marchandise.
            },
            {
              "texte": "",  // FR : Vérifier son solde avant de livrer
              "consequence": ""  // FR : Aucun paiement n'est arrivé et la « cliente » disparaît. Une capture d'écran ne prouve rien !
            },
            {
              "texte": "",  // FR : Demander une deuxième capture
              "consequence": ""  // FR : Une deuxième fausse capture arrive en trente secondes. Afi livre… et perd 45 000 F de marchandise.
            }
          ]
        },
        {
          "heure": "",  // FR : 13 h
          "texte": "",  // FR : Le téléphone sonne : « Bonjour, service client. Votre compte sera bloqué ce soir. Tapez le code que je vais vous dicter, puis votre code secret. »
          "choix": [
            {
              "texte": "",  // FR : Taper le code dicté et son code secret
              "consequence": ""  // FR : Le code dicté a envoyé l'argent d'Afi à l'escroc. Son compte est vidé.
            },
            {
              "texte": "",  // FR : Raccrocher et appeler le numéro officiel
              "consequence": ""  // FR : Le vrai service client confirme : son compte va très bien. C'était une arnaque.
            },
            {
              "texte": "",  // FR : Donner seulement son code secret
              "consequence": ""  // FR : Avec le code secret, l'escroc vide le compte. Personne, jamais, n'a besoin de ce code.
            }
          ]
        },
        {
          "heure": "",  // FR : 15 h
          "texte": "",  // FR : Sa fille Ama lui montre une offre : « Hôtesse dans un grand hôtel, 300 000 F par mois. Frais de dossier : 10 000 F. » Elle supplie sa mère de payer.
          "choix": [
            {
              "texte": "",  // FR : Payer les 10 000 F pour l'avenir d'Ama
              "consequence": ""  // FR : Il n'y avait pas d'hôtel. Les frais sont partis chez l'escroc, comme ceux de centaines d'autres candidates.
            },
            {
              "texte": "",  // FR : Chercher l'offre avec le mot « arnaque » sur internet
              "consequence": ""  // FR : Plusieurs personnes signalent déjà cette fausse offre. Afi explique à Ama : un vrai employeur ne fait jamais payer.
            },
            {
              "texte": "",  // FR : Partager l'offre dans le groupe de la famille
              "consequence": ""  // FR : Afi ne perd rien… mais trois cousines paient les frais. Avant de partager, on vérifie.
            }
          ]
        },
        {
          "heure": "",  // FR : 17 h
          "texte": "",  // FR : Une page Facebook annonce : « Bravo, tu as gagné une moto ! Paie juste 3 000 F de livraison. »
          "choix": [
            {
              "texte": "",  // FR : Payer 3 000 F : une moto pour ce prix, c'est rien !
              "consequence": ""  // FR : Il n'y a pas de moto. Les « frais de livraison » étaient le vrai but de l'arnaque.
            },
            {
              "texte": "",  // FR : Ignorer et signaler la page
              "consequence": ""  // FR : Bien joué ! Afi n'a participé à aucun concours : payer pour gagner, c'est toujours une arnaque.
            }
          ]
        },
        {
          "heure": "",  // FR : 19 h
          "texte": "",  // FR : Sa voisine Délali pleure : elle s'est fait arnaquer de 50 000 F et a honte d'en parler.
          "choix": [
            {
              "texte": "",  // FR : Lui conseiller de garder les preuves et de signaler au CERT.tg et à la police
              "consequence": ""  // FR : Délali garde les captures et signale. Ce n'est pas une honte : signaler aide aussi à protéger les autres.
            },
            {
              "texte": "",  // FR : Lui dire de ne rien dire à personne
              "consequence": ""  // FR : Sans signalement, l'escroc continue avec d'autres victimes. Se faire avoir n'est jamais une honte.
            },
            {
              "texte": "",  // FR : Lui conseiller de payer quelqu'un pour récupérer l'argent
              "consequence": ""  // FR : Les « récupérateurs d'argent » sont souvent… d'autres escrocs. On ne paie jamais pour récupérer.
            }
          ]
        }
      ]
    },
    "memo": {
      "titre": "",  // FR : Mémo des réflexes
      "intro": "",  // FR : Retourne les cartes deux par deux et associe chaque piège (rouge) au bon réflexe (vert).
      "piege": "",  // FR : Piège
      "reflexe": "",  // FR : Réflexe
      "cachee": "",  // FR : Carte cachée
      "coups": "",  // FR : Coups : {n}
      "paires": "",  // FR : Paires : {n} sur {total}
      "fin": "",  // FR : Tu as trouvé toutes les paires en {n} coups.
      "partage_score": "",  // FR : {n} coups
      "paires_liste": [
        {
          "piege": "",  // FR : Un code reçu par SMS
          "reflexe": ""  // FR : Je ne le donne à personne
        },
        {
          "piege": "",  // FR : « Je me suis trompé de numéro »
          "reflexe": ""  // FR : Je vérifie mon solde
        },
        {
          "piege": "",  // FR : Des frais pour un emploi
          "reflexe": ""  // FR : Je ne paie jamais
        },
        {
          "piege": "",  // FR : Le « service client » m'appelle
          "reflexe": ""  // FR : Je rappelle le numéro officiel
        },
        {
          "piege": "",  // FR : Un proche a « changé de numéro »
          "reflexe": ""  // FR : J'appelle son ancien numéro
        },
        {
          "piege": "",  // FR : Un lien reçu par message
          "reflexe": ""  // FR : J'ouvre moi-même le site officiel
        },
        {
          "piege": "",  // FR : On menace de publier une photo
          "reflexe": ""  // FR : Je ne paie pas, je garde les preuves
        },
        {
          "piege": "",  // FR : « Ton argent double en 7 jours »
          "reflexe": ""  // FR : C'est une arnaque, je fuis
        }
      ]
    }
  },
  "outils": {
    "verifier": {
      "titre": "",  // FR : Vérifie un message
      "intro": "",  // FR : Tu as reçu un SMS ou un message WhatsApp bizarre ? Colle-le ici avant de répondre : on te montre les signaux d'alerte, un par un.
      "label": "",  // FR : Le message reçu
      "placeholder": "",  // FR : Colle ou recopie le message ici…
      "coller": "",  // FR : Coller
      "coller_aide": "",  // FR : Appuie longuement dans la case, puis choisis « Coller ».
      "analyser": "",  // FR : Vérifier le message
      "prive": "",  // FR : Le message reste dans ton téléphone : rien n'est envoyé ni enregistré.
      "exemples_titre": "",  // FR : Pas de message sous la main ? Essaie un exemple :
      "exemples": [
        {
          "nom": "",  // FR : Transfert par erreur
          "texte": ""  // FR : Bonsoir, je vous ai envoyé 25 000 F par erreur sur votre Mobile Money. C'est l'argent de l'hôpital de ma mère. SVP renvoyez-moi vite au 9X XX XX XX, que Dieu vous bénisse 🙏
        },
        {
          "nom": "",  // FR : Recrutement
          "texte": ""  // FR : FÉLICITATIONS ! Votre candidature est retenue pour le grand recrutement 2026, sans diplôme, salaire 150 000 F par mois. Payez les frais de dossier de 10 000 F avant 18h pour confirmer votre place : recrutement-officiel-togo.online/inscription
        },
        {
          "nom": "",  // FR : Compte bloqué
          "texte": ""  // FR : Service client Mixx : votre compte sera bloqué ce soir pour une mise à jour. Pour le garder actif, confirmez votre code PIN sur mixx-verification.com
        },
        {
          "nom": "",  // FR : Code WhatsApp
          "texte": ""  // FR : Ton code WhatsApp : 482-913. Ne partage pas ce code.
        }
      ],
      "vide": "",  // FR : Écris ou colle d'abord un message dans la case.
      "niveaux": [
        {
          "titre": "",  // FR : Aucun piège connu repéré
          "texte": ""  // FR : Ça ne veut pas dire que le message est sûr. Dans le doute, vérifie auprès de la personne ou du service, sur un numéro que tu connais déjà.
        },
        {
          "titre": "",  // FR : À vérifier
          "texte": ""  // FR : Un détail demande de la prudence. Lis l'explication avant de répondre.
        },
        {
          "titre": "",  // FR : Suspect
          "texte": ""  // FR : Ce message utilise des techniques d'escrocs. Ne réponds pas, ne clique pas et ne paie rien avant d'avoir vérifié.
        },
        {
          "titre": "",  // FR : Très suspect
          "texte": ""  // FR : Ce message ressemble fort à une arnaque. Ne réponds pas, ne donne aucun code et n'envoie pas d'argent.
        }
      ],
      "signaux_titre": "",  // FR : Ce qu'on a repéré
      "signaux_nb": "",  // FR : {n} signaux d'alerte
      "signaux_nb_un": "",  // FR : {n} signal d'alerte
      "jeu_liens": "",  // FR : S'entraîner à lire les liens
      "bon_signe_titre": "",  // FR : Un bon signe
      "bon_signe_texte": "",  // FR : Le message te conseille de ne pas partager ton code : c'est ce que font les vrais services. Attention quand même : si tu reçois un code sans l'avoir demandé, quelqu'un essaie peut-être d'entrer dans ton compte. Ne le donne à personne.
      "reflexes_titre": "",  // FR : Les bons réflexes
      "reflexes": [
        "",  // FR : Ne donne jamais ton code PIN ni un code reçu par SMS.
        "",  // FR : Vérifie ton solde dans le menu officiel de ton opérateur, pas dans un SMS.
        "",  // FR : Rappelle la personne ou le service sur un numéro que tu connais déjà.
        ""  // FR : Si tu as déjà répondu ou payé, agis vite et préviens le CERT.tg.
      ],
      "limite": "",  // FR : Cet outil repère les pièges les plus courants, mais il ne remplace pas ton jugement : un escroc peut écrire un message sans aucun de ces mots.
      "recommencer": "",  // FR : Vérifier un autre message
      "signaler": "",  // FR : J'ai déjà répondu : que faire ?
      "partage_titre": "",  // FR : Envoie cet outil à tes proches
      "partage": "",  // FR : Un outil gratuit pour vérifier un message suspect avant de répondre. Rien n'est envoyé 👉 {url}#verifier
      "accueil_titre": "",  // FR : Un message bizarre ? Vérifie-le
      "accueil_texte": "",  // FR : Colle un SMS ou un message WhatsApp : les signaux d'alerte s'allument, avec l'explication de chacun.
      "accueil_exemple": "",  // FR : Envoie-moi vite le code reçu par SMS, sinon ton compte sera bloqué ce soir.
      "accueil_bouton": "",  // FR : Vérifier un message
      "signaux": [
        {
          "titre": "",  // FR : Demande de code secret
          "texte": ""  // FR : Personne de sérieux ne te demande ton code PIN ni un code reçu par SMS : ni ton opérateur, ni WhatsApp, ni ta banque. Celui qui a ce code peut vider ton compte ou voler ton WhatsApp.
        },
        {
          "titre": "",  // FR : Le coup du « transfert par erreur »
          "texte": ""  // FR : Avant de renvoyer quoi que ce soit, vérifie ton solde dans le menu officiel de ton opérateur. Le faux SMS de transfert vient souvent d'un numéro ordinaire.
        },
        {
          "titre": "",  // FR : On te demande de payer d'abord
          "texte": ""  // FR : Un vrai employeur, un vrai concours ou un vrai gain ne te demande jamais de payer des frais à l'avance. C'est le signe le plus sûr d'une arnaque.
        },
        {
          "titre": "",  // FR : Chantage
          "texte": ""  // FR : Ne paie pas : payer n'arrête presque jamais le chantage. Garde les preuves, bloque la personne et signale-la au CERT.tg.
        },
        {
          "titre": "",  // FR : On te demande d'installer une application
          "texte": ""  // FR : Une application envoyée par un inconnu peut prendre le contrôle de ton téléphone et de ton Mobile Money. N'installe que depuis le magasin officiel, et seulement si tu l'as choisie toi-même.
        },
        {
          "titre": "",  // FR : Une adresse trompeuse
          "texte": ""  // FR : L'adresse colle le nom d'une marque ou des mots rassurants (officiel, vérification, bonus…) à un site inconnu. Les vrais services n'utilisent pas ce genre d'adresse.
        },
        {
          "titre": "",  // FR : On te presse
          "texte": ""  // FR : « Vite », « urgent », « avant ce soir » : l'escroc veut t'empêcher de réfléchir ou de demander conseil. Un vrai service te laisse le temps de vérifier.
        },
        {
          "titre": "",  // FR : Menace de blocage
          "texte": ""  // FR : Ton opérateur ou un réseau social ne bloque pas ton compte par un simple message qui exige une action immédiate. Vérifie dans l'application officielle ou au guichet.
        },
        {
          "titre": "",  // FR : Cadeau ou argent trop facile
          "texte": ""  // FR : Personne ne gagne à un jeu auquel il n'a pas joué, et aucun placement sérieux ne double ton argent en quelques jours.
        },
        {
          "titre": "",  // FR : Changement de numéro ou de canal
          "texte": ""  // FR : « J'ai changé de numéro », « écris-moi sur WhatsApp » : appelle la personne sur son ancien numéro pour vérifier que c'est bien elle.
        },
        {
          "titre": "",  // FR : Demande d'argent
          "texte": ""  // FR : Avant d'envoyer de l'argent, appelle la personne par un appel normal. Les escrocs se font souvent passer pour un proche en difficulté.
        },
        {
          "titre": "",  // FR : On te demande le secret
          "texte": ""  // FR : « N'en parle à personne » : l'escroc veut t'empêcher de demander conseil. Parles-en toujours à quelqu'un de confiance.
        },
        {
          "titre": "",  // FR : Demande d'informations personnelles
          "texte": ""  // FR : Ta pièce d'identité, ta date de naissance ou un mot de passe permettent de se faire passer pour toi. Ne les envoie pas à un inconnu.
        },
        {
          "titre": "",  // FR : Offre d'emploi à vérifier
          "texte": ""  // FR : « Sans diplôme », « sans entretien », gros salaire : vérifie l'offre sur le site officiel de l'entreprise, ou colle-la dans ArnaKO.
        },
        {
          "titre": "",  // FR : Un lien raccourci
          "texte": ""  // FR : Un lien raccourci (bit.ly, tinyurl…) cache la vraie adresse : on ne sait pas où il mène avant d'avoir cliqué.
        },
        {
          "titre": "",  // FR : Un lien à vérifier
          "texte": ""  // FR : N'ouvre pas un lien reçu d'un inconnu. Regarde le vrai nom du site : c'est la partie juste avant le premier « / ».
        },
        {
          "titre": "",  // FR : Se présente comme un service officiel
          "texte": ""  // FR : Les escrocs se font passer pour un opérateur, une banque ou l'État. Rappelle toi-même le numéro officiel, jamais celui donné dans le message.
        }
      ]
    },
    "attestation": {
      "titre": "",  // FR : Ton attestation
      "intro": "",  // FR : Termine les 5 thèmes, leçons et quiz, pour obtenir une attestation à ton nom, à garder ou à partager.
      "verrou_titre": "",  // FR : Encore {n} étapes
      "verrou_titre_un": "",  // FR : Encore {n} étape
      "verrou_texte": "",  // FR : Chaque leçon et chaque quiz terminés te rapprochent de ton attestation.
      "continuer": "",  // FR : Continuer
      "pret_titre": "",  // FR : Bravo, tu as tout terminé !
      "pret_texte": "",  // FR : Écris ton nom tel qu'il doit apparaître sur l'attestation. Il reste dans ton téléphone.
      "nom_label": "",  // FR : Ton prénom et ton nom
      "nom_exemple": "",  // FR : Par exemple : Afi Mensah
      "nom_vide": "",  // FR : Écris ton nom pour créer l'attestation.
      "creer": "",  // FR : Créer mon attestation
      "modifier": "",  // FR : Changer le nom
      "telecharger": "",  // FR : Télécharger l'image
      "partager": "",  // FR : Partager l'image
      "partage_texte": "",  // FR : J'ai terminé les 5 thèmes de {site} pour reconnaître les arnaques du téléphone 🎓 Fais-le aussi, c'est gratuit 👉 {url}
      "apercu": "",  // FR : Aperçu de ton attestation
      "annonce": "",  // FR : Tous les thèmes sont terminés : ton attestation t'attend dans Leçons.
      "bloc_titre": "",  // FR : Ton attestation
      "bloc_pret": "",  // FR : Tu as tout terminé : crée ton attestation à ton nom.
      "bloc_verrou": "",  // FR : Termine les 5 thèmes pour obtenir ton attestation à ton nom.
      "bloc_bouton": "",  // FR : Obtenir mon attestation
      "doc_titre": "",  // FR : Attestation de parcours
      "doc_certifie": "",  // FR : {site} atteste que
      "doc_texte": "",  // FR : a suivi les 5 thèmes de sensibilisation aux arnaques du téléphone et d'internet, et terminé leurs quiz.
      "doc_badges": "",  // FR : Badges obtenus
      "doc_score": "",  // FR : Quiz : {score} bonnes réponses sur {total}
      "doc_date": "",  // FR : Délivrée le {date}
      "doc_numero": "",  // FR : N° {code}
      "doc_note": "",  // FR : Attestation de suivi délivrée par le site {site}. Elle ne remplace pas un diplôme.
      "doc_qr": "",  // FR : Toi aussi, apprends ici
      "premier_jour": "",  // FR : 1er
      "mois": [
        "",  // FR : janvier
        "",  // FR : février
        "",  // FR : mars
        "",  // FR : avril
        "",  // FR : mai
        "",  // FR : juin
        "",  // FR : juillet
        "",  // FR : août
        "",  // FR : septembre
        "",  // FR : octobre
        "",  // FR : novembre
        ""  // FR : décembre
      ]
    },
    "animer": {
      "titre": "",  // FR : Mode animateur
      "intro": "",  // FR : Pour animer une séance en groupe : à l'école, dans une association, à l'église ou en réunion de quartier. Affiche les messages en grand et faites voter la salle.
      "comment_titre": "",  // FR : Comment ça marche
      "comment": [
        "",  // FR : Branche ton ordinateur ou ton téléphone sur un vidéoprojecteur ou une télé. Sans écran, montre simplement ton téléphone à un petit groupe.
        "",  // FR : Un message s'affiche en grand. La salle vote à main levée : arnaque ou message normal ?
        "",  // FR : Indique ce que la majorité a choisi : la bonne réponse et les indices s'affichent. Prenez le temps d'en parler.
        ""  // FR : À la fin, chacun peut scanner le QR code pour continuer seul sur son téléphone.
      ],
      "reglages": "",  // FR : Préparer la séance
      "theme_label": "",  // FR : Thème
      "theme_tous": "",  // FR : Tous les thèmes
      "nombre_label": "",  // FR : Nombre de messages
      "nombre_messages": "",  // FR : {n} messages
      "commencer": "",  // FR : Commencer la séance
      "clavier": "",  // FR : Au clavier : A pour arnaque, N pour normal, flèche droite pour continuer, F pour le plein écran, Échap pour quitter.
      "affiche_titre": "",  // FR : Affiches et cartes à imprimer
      "affiche_texte": "",  // FR : Une affiche A4 et des petites cartes avec un QR code, à coller ou à distribuer après la séance.
      "affiche_bouton": "",  // FR : Voir les affiches
      "compteur": "",  // FR : Message {n} sur {total}
      "vote": "",  // FR : Levez la main : arnaque ou message normal ?
      "salle_dit": "",  // FR : La majorité de la salle a choisi :
      "arnaque": "",  // FR : Arnaque
      "normal": "",  // FR : Normal
      "bien_vu": "",  // FR : La salle a vu juste !
      "piege": "",  // FR : La salle s'est fait piéger !
      "discussion_arnaque": "",  // FR : À discuter : quel détail aurait dû vous alerter ?
      "discussion_normal": "",  // FR : À discuter : qu'est-ce qui montre que ce message est normal ?
      "suivant": "",  // FR : Message suivant
      "bilan": "",  // FR : Voir le bilan
      "plein_ecran": "",  // FR : Plein écran
      "quitter": "",  // FR : Quitter
      "bilan_titre": "",  // FR : Bilan de la séance
      "bilan_score": "",  // FR : La salle a vu juste {n} fois sur {total}.
      "bilan_score_un": "",  // FR : La salle a vu juste {n} fois sur {total}.
      "bilan_texte": "",  // FR : Merci à tous ! Pour continuer seul, scannez ce code avec l'appareil photo de votre téléphone.
      "reflexes_titre": "",  // FR : Les 3 réflexes à retenir
      "reflexes": [
        "",  // FR : Ton code ne se donne à personne, jamais.
        "",  // FR : Un transfert « par erreur » ? Vérifie ton solde dans le menu officiel.
        ""  // FR : On te demande de payer d'abord ? C'est une arnaque.
      ],
      "nouvelle": "",  // FR : Nouvelle séance
      "accueil_titre": "",  // FR : Tu animes un groupe ?
      "accueil_texte": ""  // FR : Enseignant, association, église, groupement : affiche les messages en grand, faites voter la salle, puis distribuez les affiches avec QR code.
    },
    "affiche": {
      "titre": "",  // FR : Affiches à imprimer
      "intro": "",  // FR : Imprime l'affiche ou les petites cartes, puis colle-les au marché, à l'école, dans une boutique Mobile Money ou à l'église.
      "format_affiche": "",  // FR : Affiche A4
      "format_cartes": "",  // FR : 8 petites cartes
      "imprimer": "",  // FR : Imprimer
      "imprimer_aide": "",  // FR : Dans la fenêtre d'impression, choisis « Enregistrer en PDF » pour garder un fichier.
      "titre_affiche": "",  // FR : Arnaque ou pas ?
      "sous_titre": "",  // FR : Avant de répondre à un message, pose-toi ces questions.
      "regles": [
        {
          "titre": "",  // FR : On te demande un code ?
          "texte": ""  // FR : Ton code PIN et les codes reçus par SMS ne se donnent à personne. Jamais.
        },
        {
          "titre": "",  // FR : Un transfert « par erreur » ?
          "texte": ""  // FR : Vérifie ton solde dans le menu officiel de ton opérateur avant de renvoyer quoi que ce soit.
        },
        {
          "titre": "",  // FR : On te demande de payer d'abord ?
          "texte": ""  // FR : Un vrai emploi, un vrai concours ou un vrai cadeau ne se paie jamais à l'avance.
        },
        {
          "titre": "",  // FR : Un proche a « changé de numéro » ?
          "texte": ""  // FR : Appelle-le sur son ancien numéro avant d'envoyer de l'argent.
        }
      ],
      "qr_texte": "",  // FR : Scanne ce code pour apprendre et t'entraîner gratuitement, en français et en ewe.
      "cert": "",  // FR : Victime d'une arnaque ? CERT.tg : {tel}
      "carte_regles": [
        "",  // FR : Ton code ne se donne à personne.
        "",  // FR : Transfert « par erreur » ? Vérifie ton solde.
        ""  // FR : Payer d'abord ? C'est une arnaque.
      ],
      "carte_qr": ""  // FR : Apprends gratuitement
    }
  },
  "dictionnaire": [
    {
      "terme": "",  // FR : Arnaque
      "definition": ""  // FR : Tromperie pour te prendre ton argent ou tes informations. On dit aussi escroquerie.
    },
    {
      "terme": "",  // FR : Escroc
      "definition": ""  // FR : Personne qui trompe les autres pour leur prendre de l'argent.
    },
    {
      "terme": "",  // FR : Code PIN
      "definition": ""  // FR : Code secret de quelques chiffres qui ouvre ton compte Mobile Money ou ta puce. Il ne se donne à personne.
    },
    {
      "terme": "",  // FR : Mot de passe
      "definition": ""  // FR : Mot ou phrase secrète qui ouvre un compte (Facebook, e-mail, banque).
    },
    {
      "terme": "",  // FR : Phrase de passe
      "definition": ""  // FR : Mot de passe fait de plusieurs mots. Plus long, donc plus solide.
    },
    {
      "terme": "",  // FR : Code de vérification
      "definition": ""  // FR : Code envoyé par SMS pour prouver que c'est bien toi. Il ne se partage jamais.
    },
    {
      "terme": "",  // FR : Vérification en deux étapes
      "definition": ""  // FR : Deuxième code demandé en plus du mot de passe. On dit aussi double protection.
    },
    {
      "terme": "",  // FR : Compte piraté
      "definition": ""  // FR : Compte dont quelqu'un d'autre a pris le contrôle.
    },
    {
      "terme": "",  // FR : Faux profil
      "definition": ""  // FR : Compte créé avec le nom et les photos d'une autre personne pour tromper.
    },
    {
      "terme": "",  // FR : Hameçonnage
      "definition": ""  // FR : Faux message ou fausse page qui imite une entreprise ou une administration pour voler tes informations. En anglais : phishing.
    },
    {
      "terme": "",  // FR : Lien
      "definition": ""  // FR : Adresse sur laquelle on appuie pour ouvrir une page internet.
    },
    {
      "terme": "",  // FR : Site officiel
      "definition": ""  // FR : Le vrai site d'une entreprise ou d'une institution, que tu trouves toi-même.
    },
    {
      "terme": "",  // FR : Mobile Money
      "definition": ""  // FR : Porte-monnaie sur le téléphone pour envoyer, recevoir et payer (par exemple Mixx by Yas ou Flooz).
    },
    {
      "terme": "",  // FR : Solde
      "definition": ""  // FR : L'argent qu'il y a vraiment sur ton compte.
    },
    {
      "terme": "",  // FR : Opérateur
      "definition": ""  // FR : L'entreprise qui fournit ta puce et ton service Mobile Money.
    },
    {
      "terme": "",  // FR : Service client
      "definition": ""  // FR : Le service de l'opérateur qui aide les clients. Il ne demande jamais ton code.
    },
    {
      "terme": "",  // FR : Chantage
      "definition": ""  // FR : Menace de faire du mal (publier une image, révéler un secret) si tu ne paies pas.
    },
    {
      "terme": "",  // FR : Capture d'écran
      "definition": ""  // FR : Photo de ce qui est affiché sur ton écran. Elle sert de preuve.
    },
    {
      "terme": "",  // FR : Bloquer
      "definition": ""  // FR : Empêcher une personne de te contacter.
    },
    {
      "terme": "",  // FR : Signaler
      "definition": ""  // FR : Prévenir la plateforme ou les autorités qu'un compte ou un message est dangereux.
    },
    {
      "terme": "",  // FR : Données personnelles
      "definition": ""  // FR : Tout ce qui parle de toi : nom, numéro, adresse, date de naissance, photos.
    },
    {
      "terme": "",  // FR : Confidentialité
      "definition": ""  // FR : Les réglages qui choisissent qui peut voir ce que tu publies.
    },
    {
      "terme": "",  // FR : Mise à jour
      "definition": ""  // FR : Nouvelle version d'une application qui corrige souvent des failles de sécurité.
    },
    {
      "terme": "",  // FR : Virus
      "definition": ""  // FR : Programme malveillant qui abîme ton téléphone ou vole tes informations.
    },
    {
      "terme": "",  // FR : CERT.tg
      "definition": ""  // FR : Centre national de réponse aux incidents de cybersécurité du Togo. Tu peux y signaler une arnaque.
    }
  ],
  "signaler": {
    "titre": "",  // FR : Tu t'es fait arnaquer ? Voici quoi faire
    "intro": "",  // FR : Ce n'est pas une honte : les escrocs sont des professionnels et piègent aussi des gens très prudents. Plus tu agis vite, plus tu limites les dégâts.
    "etapes": [
      {
        "titre": "",  // FR : Préviens ton opérateur
        "texte": ""  // FR : S'il s'agit de Mobile Money, appelle tout de suite le service client officiel (numéro trouvé dans l'application ou en agence). Signale la transaction et demande à protéger ton compte.
      },
      {
        "titre": "",  // FR : Change tes codes
        "texte": ""  // FR : Change ton code PIN et tes mots de passe, puis active la vérification en deux étapes.
      },
      {
        "titre": "",  // FR : Garde les preuves
        "texte": ""  // FR : Fais des captures d'écran des messages, des numéros et des références de transaction. Ne supprime rien.
      },
      {
        "titre": "",  // FR : Préviens tes proches
        "texte": ""  // FR : Si ton WhatsApp ou ton Facebook a été volé, préviens ta famille et tes groupes pour qu'ils ne tombent pas dans le piège à leur tour.
      },
      {
        "titre": "",  // FR : Signale au CERT.tg
        "texte": ""  // FR : Le centre national de réponse aux incidents de cybersécurité reçoit les signalements.
      },
      {
        "titre": "",  // FR : Porte plainte
        "texte": ""  // FR : Va au commissariat le plus proche avec tes preuves.
      }
    ],
    "cert_titre": "",  // FR : Contacter le CERT.tg
    "cert_appeler": "",  // FR : Appeler le CERT.tg
    "cert_tel_label": "",  // FR : Ligne directe
    "cert_mail_label": "",  // FR : E-mail
    "cert_site_label": "",  // FR : Site, rubrique « Déclarer un incident »
    "cert_verifie": ""  // FR : Coordonnées reprises des avis publiés par le CERT.tg, vérifiées en novembre 2026.
  },
  "apropos": {
    "titre": "",  // FR : À propos
    "paragraphes": [
      "",  // FR : {site} aide chacun à reconnaître les arnaques du téléphone et d'internet, avec des exemples d'ici : Mobile Money, WhatsApp, faux recrutements, faux profils.
      "",  // FR : Le site est gratuit, sans publicité et sans inscription. Il fonctionne sur les petits téléphones et reste disponible hors connexion une fois ouvert.
      "",  // FR : La traduction en ewe et les versions audio sont en cours. L'objectif : que chacun puisse apprendre dans la langue qu'il parle tous les jours.
      ""  // FR : Au Togo, l'Agence nationale de la cybersécurité (ANCy) indique avoir traité plus de 333 000 incidents de cybersécurité entre 2021 et 2024. Bien informé, chacun devient plus difficile à piéger.
    ],
    "aider_titre": "",  // FR : Tu veux aider ?
    "aider": [
      "",  // FR : Tu parles et écris l'ewe : aide-nous à traduire les leçons.
      "",  // FR : Tu as une voix claire : enregistre les leçons en ewe.
      "",  // FR : Tu animes une radio, une association ou un groupement : partage le site autour de toi.
      ""  // FR : Tu as vu une nouvelle arnaque : raconte-la nous pour l'ajouter au jeu.
    ],
    "contact": ""  // FR : Pour proposer ton aide ou une amélioration :
  }
};
