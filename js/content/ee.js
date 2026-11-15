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
 * Avancement : 1 textes traduits sur 581.
 */
window.CG_CONTENU = window.CG_CONTENU || {};
window.CG_CONTENU.ee = {
  "ui": {
    "langue": "Eʋegbe",  // FR : Français
    "menu_accueil": "",  // FR : Accueil
    "menu_lecons": "",  // FR : Leçons
    "menu_jeu": "",  // FR : Arnaque ou pas ?
    "menu_dico": "",  // FR : Petit dictionnaire
    "menu_signaler": "",  // FR : En cas d'arnaque
    "menu_apropos": "",  // FR : À propos
    "accueil_titre": "",  // FR : Arnaque ou pas ?
    "accueil_intro": "",  // FR : Apprends à reconnaître les pièges du téléphone : Mobile Money, WhatsApp, faux emplois, faux profils. Cinq thèmes courts, en français et bientôt en ewe.
    "accueil_jeu_consigne": "",  // FR : Tu reçois ce message. Qu'en penses-tu ?
    "accueil_cta_lecons": "",  // FR : Commencer les leçons
    "accueil_cta_jeu": "",  // FR : Jouer à « Arnaque ou pas ? »
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
    "nav_jeu": "",  // FR : Jeu
    "nav_dico": "",  // FR : Mots
    "nav_aide": "",  // FR : Aide
    "accueil_lecons_titre": "",  // FR : Les leçons
    "accueil_lecons_intro": "",  // FR : Cinq thèmes de trois leçons. Compte environ cinq minutes par thème.
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
    "hors_ligne": "",  // FR : Tu es hors connexion. Les leçons déjà ouvertes restent disponibles.
    "page_introuvable": "",  // FR : Cette page n'existe pas.
    "retour_accueil": "",  // FR : Retour à l'accueil
    "aller_contenu": ""  // FR : Aller au contenu
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
