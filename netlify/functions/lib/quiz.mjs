const assets={};
const QUESTIONS=[
  {
    "id": 1,
    "type": "QCS",
    "text": "Parmi les bactéries suivantes, laquelle est une bactérie multirésistante ?",
    "options": [
      {
        "key": "A",
        "text": "Escherichia coli méticilline résistant"
      },
      {
        "key": "B",
        "text": "Klebsiella pneumoniae productrice de BLSE"
      },
      {
        "key": "C",
        "text": "Staphylococcus epidermidis méticilline résistant"
      },
      {
        "key": "D",
        "text": "Staphylococcus aureus résistant à la vancomycine"
      },
      {
        "key": "E",
        "text": "Enterococcus faecium résistant à la méticilline"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Klebsiella pneumoniae productrice de BLSE"
  },
  {
    "id": 2,
    "type": "QCS",
    "text": "Parmi les mesures suivantes, laquelle s’applique chez un patient porteur d’une bactérie hautement résistante émergente ?",
    "options": [
      {
        "key": "A",
        "text": "Précautions complémentaires contact"
      },
      {
        "key": "B",
        "text": "Isolement protecteur"
      },
      {
        "key": "C",
        "text": "Précaution complémentaires contact renforcé"
      },
      {
        "key": "D",
        "text": "Précautions complémentaires gouttelettes"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Précaution complémentaires contact renforcé"
  },
  {
    "id": 3,
    "type": "QCS",
    "text": "Quelle affirmation est correcte concernant la résistance plasmidique ?",
    "options": [
      {
        "key": "A",
        "text": "Elle se transmet uniquement à la descendance."
      },
      {
        "key": "B",
        "text": "Elle peut se transmettre entre bactéries de même espèce ou d'espèces différentes."
      },
      {
        "key": "C",
        "text": "Elle est toujours plus stable qu'une mutation chromosomique."
      },
      {
        "key": "D",
        "text": "Elle ne concerne pas les antibiotiques."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Elle peut se transmettre entre bactéries de même espèce ou d'espèces différentes."
  },
  {
    "id": 4,
    "type": "QCS",
    "text": "Chez la personne âgée atteinte d'une pneumonie, quel signe peut être absent malgré l'infection ?",
    "options": [
      {
        "key": "A",
        "text": "La toux"
      },
      {
        "key": "B",
        "text": "La fièvre"
      },
      {
        "key": "C",
        "text": "La douleur thoracique"
      },
      {
        "key": "D",
        "text": "L'essoufflement"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. La toux"
  },
  {
    "id": 5,
    "type": "QCS",
    "text": "L'immunodépression correspond à :",
    "options": [
      {
        "key": "A",
        "text": "Une augmentation des défenses immunitaires"
      },
      {
        "key": "B",
        "text": "Une baisse des défenses immunitaires rendant le patient plus fragile"
      },
      {
        "key": "C",
        "text": "Une infection systématique par un virus"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Une baisse des défenses immunitaires rendant le patient plus fragile"
  },
  {
    "id": 6,
    "type": "QCS",
    "text": "Parmi les propositions suivantes, quel est le principal facteur favorisant les infections urinaires chez le sujet âgé ?",
    "options": [
      {
        "key": "A",
        "text": "Port de lunettes"
      },
      {
        "key": "B",
        "text": "Sonde vésicale à demeure"
      },
      {
        "key": "C",
        "text": "Régime pauvre en sel"
      },
      {
        "key": "D",
        "text": "Vaccination antigrippale"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Sonde vésicale à demeure"
  },
  {
    "id": 7,
    "type": "QCS",
    "text": "Concernant les pneumopathies chez le sujet âgé, laquelle de ces affirmations est vraie ?",
    "options": [
      {
        "key": "A",
        "text": "Elles sont rarement graves."
      },
      {
        "key": "B",
        "text": "La toux est toujours présente et efficace."
      },
      {
        "key": "C",
        "text": "Elles représentent la première cause de décès par infection chez le sujet âgé."
      },
      {
        "key": "D",
        "text": "Les troubles de la déglutition n'augmentent pas le risque de pneumonie."
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Elles représentent la première cause de décès par infection chez le sujet âgé."
  },
  {
    "id": 8,
    "type": "QCS",
    "text": "Quelle particularité de la vaccination doit être prise en compte chez le sujet âgé ?",
    "options": [
      {
        "key": "A",
        "text": "La vaccination antigrippale est réalisée une seule fois après 65 ans."
      },
      {
        "key": "B",
        "text": "La réponse immunitaire aux vaccins peut être diminuée avec l'âge."
      },
      {
        "key": "C",
        "text": "Le rappel DTP n'est plus recommandé après 65 ans."
      },
      {
        "key": "D",
        "text": "Les vaccins sont contre-indiqués chez la majorité des personnes âgées."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. La réponse immunitaire aux vaccins peut être diminuée avec l'âge."
  },
  {
    "id": 9,
    "type": "QCS",
    "text": "Quelle particularité clinique peut être observée lors d'une pneumonie chez la personne âgée ?",
    "options": [
      {
        "key": "A",
        "text": "Une toux absente ou peu efficace."
      },
      {
        "key": "B",
        "text": "Une douleur thoracique systématique."
      },
      {
        "key": "C",
        "text": "Une forte fièvre dans tous les cas."
      },
      {
        "key": "D",
        "text": "Une guérison spontanée sans traitement."
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Une toux absente ou peu efficace."
  },
  {
    "id": 10,
    "type": "QCS",
    "text": "Quelle affirmation est vraie concernant la fièvre chez un patient immunodéprimé ?",
    "options": [
      {
        "key": "A",
        "text": "Elle nécessite une surveillance simple à domicile"
      },
      {
        "key": "B",
        "text": "Elle est moins grave que chez un sujet immunocompétent"
      },
      {
        "key": "C",
        "text": "Toute fièvre aiguë constitue une urgence médicale"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Toute fièvre aiguë constitue une urgence médicale"
  },
  {
    "id": 11,
    "type": "QCS",
    "text": "Pour un patient neutropénique fébrile, quel examen doit être réalisé sans retarder l'antibiothérapie ?",
    "options": [
      {
        "key": "A",
        "text": "Scanner cérébral systématique"
      },
      {
        "key": "B",
        "text": "Échographie abdominale systématique"
      },
      {
        "key": "C",
        "text": "Hémocultures périphériques et sur cathéter"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Hémocultures périphériques et sur cathéter"
  },
  {
    "id": 12,
    "type": "QCS",
    "text": "Parmi les propositions suivantes, laquelle est vraie. Le signe clinique fréquemment absent lors d’une infection du sujet âgé est :",
    "options": [
      {
        "key": "A",
        "text": "La fièvre"
      },
      {
        "key": "B",
        "text": "La confusion"
      },
      {
        "key": "C",
        "text": "La diarrhée"
      },
      {
        "key": "D",
        "text": "L’hypertension"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. La fièvre"
  },
  {
    "id": 13,
    "type": "QCS",
    "text": "Quel signe est considéré comme une présentation atypique d'une infection chez le sujet âgé ?",
    "options": [
      {
        "key": "A",
        "text": "Perte d'autonomie"
      },
      {
        "key": "B",
        "text": "Éruption cutanée systématique"
      },
      {
        "key": "C",
        "text": "Douleur thoracique intense"
      },
      {
        "key": "D",
        "text": "Augmentation de l'appétit"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Perte d'autonomie"
  },
  {
    "id": 14,
    "type": "QCS",
    "text": "Quel signe doit faire penser à une infection chez une personne âgée, même en l'absence de fièvre ?",
    "options": [
      {
        "key": "A",
        "text": "Confusion aiguë"
      },
      {
        "key": "B",
        "text": "Myopie brutale"
      },
      {
        "key": "C",
        "text": "Tremblement essentiel"
      },
      {
        "key": "D",
        "text": "Hypercholestérolémie"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Confusion aiguë"
  },
  {
    "id": 15,
    "type": "QCS",
    "text": "Quel est le principal vecteur du paludisme ?",
    "options": [
      {
        "key": "A",
        "text": "Tique"
      },
      {
        "key": "B",
        "text": "Moustique Anopheles femelle"
      },
      {
        "key": "C",
        "text": "Mouche tsé-tsé"
      },
      {
        "key": "D",
        "text": "Puce"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Moustique Anopheles femelle"
  },
  {
    "id": 16,
    "type": "QCS",
    "text": "Quel conseil est le plus efficace pour prévenir le paludisme lors d'un séjour au Mali ?",
    "options": [
      {
        "key": "A",
        "text": "Se laver régulièrement les mains à l'eau et au savon"
      },
      {
        "key": "B",
        "text": "Dormir sous une moustiquaire imprégnée d'insecticide"
      },
      {
        "key": "C",
        "text": "Porter un masque chirurgical à l'extérieur"
      },
      {
        "key": "D",
        "text": "Appliquer des répulsifs uniquement pendant la journée"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Dormir sous une moustiquaire imprégnée d'insecticide"
  },
  {
    "id": 17,
    "type": "QCS",
    "text": "Chez un patient revenant d'une zone d'endémie, quelle attitude faut-il adopter devant une fièvre ?",
    "options": [
      {
        "key": "A",
        "text": "Penser d'abord à une gastro-entérite"
      },
      {
        "key": "B",
        "text": "Rechercher uniquement une infection respiratoire"
      },
      {
        "key": "C",
        "text": "Considérer qu'il s'agit d'un paludisme jusqu'à preuve du contraire"
      },
      {
        "key": "D",
        "text": "Attendre plusieurs jours avant de consulter"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Considérer qu'il s'agit d'un paludisme jusqu'à preuve du contraire"
  },
  {
    "id": 18,
    "type": "QCS",
    "text": "Dans la prise en charge d’un érysipèle, quel soin infirmier est particulièrement important ?",
    "options": [
      {
        "key": "A",
        "text": "Immobilisation stricte au lit sans mobilisation des membres"
      },
      {
        "key": "B",
        "text": "Surélévation du membre atteint et utilisation d’un arceau si besoin"
      },
      {
        "key": "C",
        "text": "Application systématique de glace"
      },
      {
        "key": "D",
        "text": "Mise à jeun du patient"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Surélévation du membre atteint et utilisation d’un arceau si besoin"
  },
  {
    "id": 19,
    "type": "QCS",
    "text": "Quelle IST est classiquement responsable d'une urétrite purulente appelée « chaude-pisse » ?",
    "options": [
      {
        "key": "A",
        "text": "Chlamydia trachomatis"
      },
      {
        "key": "B",
        "text": "Neisseria gonorrhoeae"
      },
      {
        "key": "C",
        "text": "Virus Herpès Simplex (HSV)"
      },
      {
        "key": "D",
        "text": "Treponema pallidum"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Neisseria gonorrhoeae"
  },
  {
    "id": 20,
    "type": "QCS",
    "text": "Quelle affirmation est correcte ?",
    "options": [
      {
        "key": "A",
        "text": "Le préservatif protège totalement contre la transmission du HPV."
      },
      {
        "key": "B",
        "text": "Les papillomavirus ne sont jamais associés à des cancers."
      },
      {
        "key": "C",
        "text": "La plupart des infections à HPV sont asymptomatiques."
      },
      {
        "key": "D",
        "text": "Le traitement repose uniquement sur les antibiotiques"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "La plupart des infections à HPV ne provoquent pas de symptômes. Certains types peuvent causer des condylomes ou des cancers. La proposition C a été reformulée par rapport au document pour éviter une affirmation erronée. Source : OMS, Immunizing against HPV."
  },
  {
    "id": 21,
    "type": "QCM",
    "text": "Concernant les bactéries multirésistantes (BMR), quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Elles sont résistantes à plusieurs familles d'antibiotiques."
      },
      {
        "key": "B",
        "text": "Elles rendent parfois les traitements antibiotiques plus difficiles."
      },
      {
        "key": "C",
        "text": "Elles sont toujours résistantes à tous les antibiotiques existants."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Elles sont résistantes à plusieurs familles d'antibiotiques. / B. Elles rendent parfois les traitements antibiotiques plus difficiles."
  },
  {
    "id": 22,
    "type": "QCM",
    "text": "Les bactéries hautement résistantes émergentes (BHRe), quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Elles présentent une multirésistance aux antibiotiques."
      },
      {
        "key": "B",
        "text": "Elles ont un fort potentiel de diffusion épidémique."
      },
      {
        "key": "C",
        "text": "Elles sont uniquement retrouvées dans les infections urinaires."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Elles présentent une multirésistance aux antibiotiques. / B. Elles ont un fort potentiel de diffusion épidémique."
  },
  {
    "id": 23,
    "type": "QCM",
    "text": "Parmi les bactéries suivantes, lesquelles sont des BMR ?",
    "options": [
      {
        "key": "A",
        "text": "SARM (Staphylococcus aureus résistant à la méticilline)"
      },
      {
        "key": "B",
        "text": "EBLSE (Entérobactérie productrice de BLSE)"
      },
      {
        "key": "C",
        "text": "Pseudomonas aeruginosa multirésistant"
      },
      {
        "key": "D",
        "text": "Virus de la grippe"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. SARM (Staphylococcus aureus résistant à la méticilline) / B. EBLSE (Entérobactérie productrice de BLSE) / C. Pseudomonas aeruginosa multirésistant"
  },
  {
    "id": 24,
    "type": "QCM",
    "text": "Quels facteurs favorisent l'émergence des bactéries multirésistantes ?",
    "options": [
      {
        "key": "A",
        "text": "Prescription d'un antibiotique non indiqué."
      },
      {
        "key": "B",
        "text": "Antibiothérapie trop prolongée."
      },
      {
        "key": "C",
        "text": "Automédication par antibiotiques."
      },
      {
        "key": "D",
        "text": "Respect des recommandations de bon usage."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Prescription d'un antibiotique non indiqué. / B. Antibiothérapie trop prolongée. / C. Automédication par antibiotiques."
  },
  {
    "id": 25,
    "type": "QCM",
    "text": "Quels patients doivent particulièrement faire l'objet d'un dépistage ?",
    "options": [
      {
        "key": "A",
        "text": "Patient ayant déjà été porteur d'une BMR ou d'une BHRe."
      },
      {
        "key": "B",
        "text": "Patient ayant récemment séjourné dans un pays à forte prévalence de BMR."
      },
      {
        "key": "C",
        "text": "Nouveau-né en bonne santé sans facteur de risque."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Patient ayant déjà été porteur d'une BMR ou d'une BHRe. / B. Patient ayant récemment séjourné dans un pays à forte prévalence de BMR."
  },
  {
    "id": 26,
    "type": "QCM",
    "text": "Concernant les précautions standard, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Elles s'appliquent à tous les patients."
      },
      {
        "key": "B",
        "text": "L'hygiène des mains en fait partie."
      },
      {
        "key": "C",
        "text": "Elles constituent la base de la prévention des infections associées aux soins."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Elles s'appliquent à tous les patients. / B. L'hygiène des mains en fait partie. / C. Elles constituent la base de la prévention des infections associées aux soins."
  },
  {
    "id": 27,
    "type": "QCM",
    "text": "Parmi les causes d'immunodépression acquise, lesquelles sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "VIH"
      },
      {
        "key": "B",
        "text": "Chimiothérapie"
      },
      {
        "key": "C",
        "text": "Vaccination antigrippale"
      },
      {
        "key": "D",
        "text": "Grossesse physiologique"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. VIH / B. Chimiothérapie"
  },
  {
    "id": 28,
    "type": "QCM",
    "text": "Concernant les infections opportunistes chez l'immunodéprimé, quelles propositions sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Pneumocystis est une infection opportuniste exogène"
      },
      {
        "key": "B",
        "text": "Aspergillus est une infection opportuniste exogène"
      },
      {
        "key": "C",
        "text": "Escherichia coli est une infection opportuniste spécifique"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Pneumocystis est une infection opportuniste exogène / B. Aspergillus est une infection opportuniste exogène"
  },
  {
    "id": 29,
    "type": "QCM",
    "text": "Quelles sont les principales portes d'entrée des bactériémies chez le patient neutropénique ?",
    "options": [
      {
        "key": "A",
        "text": "Digestive"
      },
      {
        "key": "B",
        "text": "Cutanée liée aux cathéters"
      },
      {
        "key": "C",
        "text": "Auditive"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Digestive / B. Cutanée liée aux cathéters"
  },
  {
    "id": 30,
    "type": "QCM",
    "text": "Parmi les causes de neutropénie, lesquelles sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Chimiothérapie"
      },
      {
        "key": "B",
        "text": "VIH"
      },
      {
        "key": "C",
        "text": "Asthme"
      },
      {
        "key": "D",
        "text": "Hypertension artérielle"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Chimiothérapie / B. VIH"
  },
  {
    "id": 31,
    "type": "QCM",
    "text": "Chez un patient sous corticothérapie prolongée à forte dose, quelles infections opportunistes sont particulièrement à risque ?",
    "options": [
      {
        "key": "A",
        "text": "Pneumocystose"
      },
      {
        "key": "B",
        "text": "Réactivation tuberculeuse"
      },
      {
        "key": "C",
        "text": "Otite externe simple"
      },
      {
        "key": "D",
        "text": "Rhinopharyngite banale"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Pneumocystose / B. Réactivation tuberculeuse"
  },
  {
    "id": 32,
    "type": "QCM",
    "text": "Parmi les points clés de la prise en charge d'un patient immunodéprimé, lesquels sont essentiels ?",
    "options": [
      {
        "key": "A",
        "text": "Dépister certaines infections (VIH, VHB, VHC, CMV...)"
      },
      {
        "key": "B",
        "text": "Vacciner selon les recommandations"
      },
      {
        "key": "C",
        "text": "Éduquer le patient"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Dépister certaines infections (VIH, VHB, VHC, CMV...) / B. Vacciner selon les recommandations / C. Éduquer le patient"
  },
  {
    "id": 33,
    "type": "QCM",
    "text": "Parmi les définitions suivantes, lesquelles sont vraie ? La définition médicale de la personne âgée est :",
    "options": [
      {
        "key": "A",
        "text": "Une personne de plus de 65 ans"
      },
      {
        "key": "B",
        "text": "Une personne de plus de 70 ans"
      },
      {
        "key": "C",
        "text": "Une personne de plus de 65 ans et au moins 3 critères de fragilité"
      },
      {
        "key": "D",
        "text": "Une personne de plus de 75 ans"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : C. Une personne de plus de 65 ans et au moins 3 critères de fragilité / D. Une personne de plus de 75 ans"
  },
  {
    "id": 34,
    "type": "QCM",
    "text": "Concernant l'évolution de la dengue, quelles propositions sont vraies ?",
    "options": [
      {
        "key": "A",
        "text": "La phase fébrile dure généralement de 2 à 7 jours."
      },
      {
        "key": "B",
        "text": "Le début est souvent brutal avec une fièvre élevée."
      },
      {
        "key": "C",
        "text": "La phase critique survient entre le 3ᵉ et le 8ᵉ jour de la maladie."
      },
      {
        "key": "D",
        "text": "La phase critique concerne la majorité des patients atteints de dengue."
      },
      {
        "key": "E",
        "text": "Une éruption cutanée prurigineuse peut apparaître lors de la phase de récupération."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. La phase fébrile dure généralement de 2 à 7 jours. / B. Le début est souvent brutal avec une fièvre élevée. / C. La phase critique survient entre le 3ᵉ et le 8ᵉ jour de la maladie. / E. Une éruption cutanée prurigineuse peut apparaître lors de la phase de récupération."
  },
  {
    "id": 35,
    "type": "QCM",
    "text": "Concernant les diarrhées du voyageur, quelles propositions sont vraies ?",
    "options": [
      {
        "key": "A",
        "text": "La « tourista » est le plus souvent une affection bénigne."
      },
      {
        "key": "B",
        "text": "Un syndrome cholériforme peut entraîner une déshydratation sévère."
      },
      {
        "key": "C",
        "text": "Un syndrome dysentérique se caractérise par des diarrhées sanglantes."
      },
      {
        "key": "D",
        "text": "Les résistances aux antibiotiques sont inexistantes."
      },
      {
        "key": "E",
        "text": "L'Asie du Sud-Est est une zone particulièrement concernée."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. La « tourista » est le plus souvent une affection bénigne. / B. Un syndrome cholériforme peut entraîner une déshydratation sévère. / C. Un syndrome dysentérique se caractérise par des diarrhées sanglantes. / E. L'Asie du Sud-Est est une zone particulièrement concernée."
  },
  {
    "id": 36,
    "type": "QCM",
    "text": "Concernant le diagnostic et le traitement des diarrhées du voyageur, quelles propositions sont vraies ?",
    "options": [
      {
        "key": "A",
        "text": "La réhydratation est la mesure thérapeutique fondamentale."
      },
      {
        "key": "B",
        "text": "Une coproculture permet la recherche de bactéries dans les selles."
      },
      {
        "key": "C",
        "text": "Un examen parasitologique des selles est recommandé au retour de voyage."
      },
      {
        "key": "D",
        "text": "Une antibiothérapie courte peut être utilisée dans les formes sévères après prélèvements microbiologiques."
      },
      {
        "key": "E",
        "text": "Le racécadotril est à privilégier au lopéramide."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. La réhydratation est la mesure thérapeutique fondamentale. / B. Une coproculture permet la recherche de bactéries dans les selles. / C. Un examen parasitologique des selles est recommandé au retour de voyage. / D. Une antibiothérapie courte peut être utilisée dans les formes sévères après prélèvements microbiologiques. / E. Le racécadotril est à privilégier au lopéramide."
  },
  {
    "id": 37,
    "type": "QCM",
    "text": "Concernant le diagnostic du paludisme, quelles propositions sont vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Le diagnostic biologique repose sur le frottis sanguin, la goutte épaisse et les tests de diagnostic rapides (TDR)."
      },
      {
        "key": "B",
        "text": "Il est important d'informer le biologiste d'un retour de zone d'endémie."
      },
      {
        "key": "C",
        "text": "La prise éventuelle d'un traitement antipaludique doit être signalée."
      },
      {
        "key": "D",
        "text": "Les informations cliniques fournies par le médecin sont importantes pour l'interprétation des résultats."
      },
      {
        "key": "E",
        "text": "Le bon de prescription n'a pas besoin d'être correctement rempli."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : A. Le diagnostic biologique repose sur le frottis sanguin, la goutte épaisse et les tests de diagnostic rapides (TDR). / B. Il est important d'informer le biologiste d'un retour de zone d'endémie. / C. La prise éventuelle d'un traitement antipaludique doit être signalée. / D. Les informations cliniques fournies par le médecin sont importantes pour l'interprétation des résultats."
  },
  {
    "id": 38,
    "type": "QCM",
    "text": "Concernant la vaccination contre le HPV, quelles sont les affirmations exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Le vaccin Gardasil 9 peut être utilisé dans la prévention du HPV"
      },
      {
        "key": "B",
        "text": "Le vaccin Cervarix est un vaccin contre le HPV"
      },
      {
        "key": "C",
        "text": "Le schéma vaccinal est de 2 doses jusqu'à 14 ans"
      },
      {
        "key": "D",
        "text": "La vaccination est réservée aux femmes"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Le vaccin Gardasil 9 peut être utilisé dans la prévention du HPV / B. Le vaccin Cervarix est un vaccin contre le HPV / C. Le schéma vaccinal est de 2 doses jusqu'à 14 ans"
  },
  {
    "id": 39,
    "type": "QCM",
    "text": "Concernant le chemsex, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Il correspond à l'utilisation de substances psychoactives lors des rapports sexuels"
      },
      {
        "key": "B",
        "text": "Il peut faire appel à la cocaïne ou à la kétamine"
      },
      {
        "key": "C",
        "text": "Il correspond à une méthode de contraception"
      },
      {
        "key": "D",
        "text": "Le GHB peut être impliqué dans certaines situations"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : A. Il correspond à l'utilisation de substances psychoactives lors des rapports sexuels / B. Il peut faire appel à la cocaïne ou à la kétamine / D. Le GHB peut être impliqué dans certaines situations"
  },
  {
    "id": 40,
    "type": "QCM",
    "text": "Concernant la fasciite nécrosante, quelles sont les réponses vraies :",
    "options": [
      {
        "key": "A",
        "text": "Son traitement est exclusivement médical"
      },
      {
        "key": "B",
        "text": "Un signe d’alerte est la crépitation de la peau au palper"
      },
      {
        "key": "C",
        "text": "La peau est souvent chaude"
      },
      {
        "key": "D",
        "text": "Une des suites est la greffe de la peau"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : B. Un signe d’alerte est la crépitation de la peau au palper / D. Une des suites est la greffe de la peau"
  }
];
const json=(d,status=200,headers={})=>Response.json(d,{status,headers:{'Cache-Control':'no-store',...headers}});
async function sign(value,secret){let k=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return Array.from(new Uint8Array(await crypto.subtle.sign('HMAC',k,new TextEncoder().encode(value)))).map(x=>x.toString(16).padStart(2,'0')).join('')}
async function isAdmin(req,env){let c=req.headers.get('Cookie')?.match(/quizue25admin=([^;]+)/)?.[1];if(!c||!env.ADMIN_PASSWORD)return false;let [expiry,sig]=c.split('.');return Number(expiry)>Date.now()&&sig===await sign(expiry,env.ADMIN_PASSWORD)}
async function objects(env,prefix){let all=[],cursor;do{const l=await env.BUCKET.list({prefix,cursor});all.push(...await Promise.all(l.objects.map(o=>readObject(env,o.key))));cursor=l.truncated?l.cursor:undefined}while(cursor);return all.filter(Boolean)}
async function rows(env){const saved=await objects(env,'submissions/'),byId=new Map(saved.map(r=>[r.id,{...r,status:'completed',answered:QUESTIONS.filter(q=>(r.answers[q.id]||[]).length).length}]));for(const a of await objects(env,'attempts/')){if(!byId.has(a.id))byId.set(a.id,makeRow(a,false))}return [...byId.values()].sort((a,b)=>b.created_at.localeCompare(a.created_at))}
const equal=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
export default {async fetch(req,env){try{const path=new URL(req.url).pathname;const handled=await attemptRoutes(req,env,path);if(handled)return handled;if(assets[path])return new Response(assets[path][0],{headers:{'Content-Type':assets[path][1]}});
if(path==='/api/questions')return json(QUESTIONS.map(({id,type,text,options})=>({id,type,text,options})));
if(path==='/api/admin/login'&&req.method==='POST'){let d=await req.json();if(!env.ADMIN_PASSWORD||d.password!==env.ADMIN_PASSWORD)return json({error:'Mot de passe incorrect.'},401);let exp=String(Date.now()+8*3600000);return json({ok:true},200,{'Set-Cookie':`quizue25admin=${exp}.${await sign(exp,env.ADMIN_PASSWORD)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`})}
if(path==='/api/admin/logout')return json({ok:true},200,{'Set-Cookie':'quizue25admin=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0'});
if(path==='/api/admin/me')return json({admin:await isAdmin(req,env)});
if(path.startsWith('/api/admin/')){if(!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(path.endsWith('/questions'))return json(QUESTIONS);let data=await rows(env);if(path.endsWith('/results'))return json({results:data});if(path.endsWith('/export.csv')||path.endsWith('/export.xlsx'))return exportData(data,path.endsWith('.xlsx'));}
if(path==='/api/submit'&&req.method==='POST'){const d=await req.json(),a=await readObject(env,'attempts/'+d.attempt_token+'.json');if(!a)return json({error:'Tentative invalide'},409);if(a.submitted){const row=await readObject(env,'submissions/'+a.id+'.json');return json(withReview(row))}if(!a.deadline||Date.now()<=a.deadline+5000)a.answers=cleanAnswers(d.answers);return json(await finishAttempt(env,a));}
return json({error:'Page introuvable'},404)}catch(e){return json({error:'Erreur du serveur. Réessayez.'},500)}}};
const xml=s=>String(s??'').replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
function zip(files){let chunks=[],central=[],offset=0;const enc=new TextEncoder();const header=(n)=>new DataView(new ArrayBuffer(n));function crc(bytes){let c=0xffffffff;for(let b of bytes){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0}for(let [name,content]of Object.entries(files)){let n=enc.encode(name),b=enc.encode(content),c=crc(b),h=header(30);h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint32(14,c,true);h.setUint32(18,b.length,true);h.setUint32(22,b.length,true);h.setUint16(26,n.length,true);chunks.push(new Uint8Array(h.buffer),n,b);let z=header(46);z.setUint32(0,0x02014b50,true);z.setUint16(4,20,true);z.setUint16(6,20,true);z.setUint32(16,c,true);z.setUint32(20,b.length,true);z.setUint32(24,b.length,true);z.setUint16(28,n.length,true);z.setUint32(42,offset,true);central.push(new Uint8Array(z.buffer),n);offset+=30+n.length+b.length}let size=central.reduce((s,b)=>s+b.length,0),e=header(22);e.setUint32(0,0x06054b50,true);e.setUint16(8,Object.keys(files).length,true);e.setUint16(10,Object.keys(files).length,true);e.setUint32(12,size,true);e.setUint32(16,offset,true);return new Blob([...chunks,...central,e.buffer])}
function exportData(data,xlsx){let matrix=[['ID','Date UTC','Nom','Prénom','Groupe','Score','Total','Note /20','Durée (s)','État','Questions renseignées',...QUESTIONS.map(q=>'Q'+q.id+' réponse'),...QUESTIONS.map(q=>'Q'+q.id+' résultat')],...data.map(r=>[r.id,r.created_at,r.nom,r.prenom,r.groupe,r.score,r.total,r.score20,r.duration_seconds,r.status==='in_progress'?'En cours — note provisoire':'Terminée',r.answered??QUESTIONS.length,...QUESTIONS.map(q=>(r.answers[q.id]||[]).join(', ')),...QUESTIONS.map(q=>Number(equal(r.answers[q.id]||[],q.correct)))])];if(!xlsx)return new Response('\ufeff'+matrix.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(';')).join('\r\n'),{headers:{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':'attachment; filename=resultats_quiz.csv'}});let sheet='<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>'+matrix.map(r=>'<row>'+r.map(x=>typeof x==='number'?`<c><v>${x}</v></c>`:`<c t="inlineStr"><is><t>${xml(x)}</t></is></c>`).join('')+'</row>').join('')+'</sheetData></worksheet>';let files={'[Content_Types].xml':'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>','_rels/.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>','xl/workbook.xml':'<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Résultats" sheetId="1" r:id="rId1"/></sheets></workbook>','xl/_rels/workbook.xml.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>','xl/worksheets/sheet1.xml':sheet};return new Response(zip(files),{headers:{'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','Content-Disposition':'attachment; filename=resultats_quiz.xlsx'}})}
const defaultSettings={timed:false,minutes:30,max_attempts:0,allow_resume:true};
async function readObject(env,key){let o=await env.BUCKET.get(key);return o?JSON.parse(await o.text()):null}
async function attemptRoutes(req,env,path){
if(path==='/api/settings'||path==='/api/admin/settings'){if(path.includes('/admin/')&&!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(req.method==='POST'){let s=await req.json();if(typeof s.timed!=='boolean'||typeof s.allow_resume!=='boolean'||!Number.isInteger(s.minutes)||s.minutes<1||s.minutes>240||!Number.isInteger(s.max_attempts)||s.max_attempts<0||s.max_attempts>100)return json({error:'Durée : 1 à 240 minutes. Tentatives : 0 à 100.'},400);await env.BUCKET.put('config/settings.json',JSON.stringify({timed:s.timed,minutes:s.minutes,max_attempts:s.max_attempts,allow_resume:s.allow_resume}));return json({ok:true})}return json(await readObject(env,'config/settings.json')||defaultSettings)}
if(path==='/api/start'&&req.method==='POST'){let d=await req.json(),nom=String(d.nom||'').trim(),prenom=String(d.prenom||'').trim();if(nom.length<2||nom.length>80||prenom.length<2||prenom.length>80)return json({error:'Nom et prénom obligatoires.'},400);const identity=(nom+'|'+prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ');let settings=await readObject(env,'config/settings.json')||defaultSettings;let previous=d.token?await readObject(env,'attempts/'+d.token+'.json'):null;if(previous&&!previous.submitted&&previous.identity===identity&&previous.allow_resume){return json(previous)}let count=0,cursor;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);if(a.identity===identity)count++}cursor=l.truncated?l.cursor:undefined}while(cursor);let old=(await rows(env)).filter(r=>(r.nom+'|'+r.prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ')===identity);let attemptSubmissionIds=new Set();cursor=undefined;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);attemptSubmissionIds.add(a.id)}cursor=l.truncated?l.cursor:undefined}while(cursor);count+=old.filter(r=>!attemptSubmissionIds.has(r.id)).length;if(settings.max_attempts&&count>=settings.max_attempts)return json({error:'Nombre maximal de tentatives atteint. Contactez votre formateur.'},403);let now=Date.now(),a={token:crypto.randomUUID(),id:now*1000+crypto.getRandomValues(new Uint16Array(1))[0]%1000,identity,nom,prenom,started_at:now,deadline:settings.timed?now+settings.minutes*60000:null,allow_resume:settings.allow_resume,answers:{},submitted:false};await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json(a)}
if(path==='/api/progress'&&req.method==='POST'){const d=await req.json(),a=await readObject(env,'attempts/'+d.token+'.json');if(!a)return json({error:'Tentative invalide'},409);if(a.submitted)return json({ok:true,completed:true,result:withReview(await readObject(env,'submissions/'+a.id+'.json'))});if(a.deadline&&Date.now()>a.deadline)return json({ok:true,completed:true,result:await finishAttempt(env,a)});a.answers=cleanAnswers(d.answers);a.confirmed=QUESTIONS.filter(q=>(d.confirmed||[]).includes(q.id)&&(a.answers[q.id]||[]).length>0).map(q=>q.id);a.current=Number.isInteger(d.current)?Math.max(0,Math.min(QUESTIONS.length-1,d.current)):0;a.updated_at=new Date().toISOString();if(a.confirmed.length===QUESTIONS.length)return json({ok:true,completed:true,result:await finishAttempt(env,a)});await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json({ok:true,completed:false,updated_at:a.updated_at})}

return null}

function cleanAnswers(input){if(!input||typeof input!=='object'||Array.isArray(input)||JSON.stringify(input).length>30000)throw Error('Réponses invalides');const answers={};for(const q of QUESTIONS){const a=input[q.id]||[];if(!Array.isArray(a)||a.some(v=>!q.options.some(o=>o.key===v))||new Set(a).size!==a.length||(q.type==='QCS'&&a.length>1))throw Error('Réponse invalide');answers[q.id]=a}return answers}
function makeRow(a,completed){const answers=a.answers||{},score=QUESTIONS.filter(q=>equal(answers[q.id]||[],q.correct)).length;return {id:a.id,nom:a.nom,prenom:a.prenom,groupe:'',created_at:completed?new Date().toISOString():new Date(a.started_at).toISOString(),updated_at:a.updated_at||new Date(a.started_at).toISOString(),score,total:QUESTIONS.length,score20:Math.round(score*2000/QUESTIONS.length)/100,duration_seconds:Math.max(0,Math.round((Math.min(Date.now(),a.deadline||Date.now())-a.started_at)/1000)),answers,status:completed?'completed':'in_progress',answered:QUESTIONS.filter(q=>(answers[q.id]||[]).length).length}}
function withReview(row){return {...row,review:QUESTIONS.map(q=>({...q,selected:row.answers[q.id]||[],success:equal(row.answers[q.id]||[],q.correct)}))}}
async function finishAttempt(env,a){const existing=await readObject(env,'submissions/'+a.id+'.json');if(existing)return withReview(existing);const row=makeRow(a,true);await env.BUCKET.put('submissions/'+a.id+'.json',JSON.stringify(row));a.submitted=true;await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return withReview(row)}
