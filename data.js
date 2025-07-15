/// data.js

const photographyScenarios = [
    {
        id: "general_base",
        name: "Général (Base)",
        icon: "📷",
        shootingMode: {
            value: "Manuel (M), Priorité à l'ouverture (A), ou Priorité à la vitesse (S)",
            explanation: "Modes polyvalents pour débuter ou s'adapter à la situation. Le mode Manuel offre un contrôle total."
        },
        aperture: {
            value: "Variable",
            explanation: "À ajuster selon la profondeur de champ désirée."
        },
        shutterSpeed: {
            value: "Variable",
            explanation: "À ajuster selon le mouvement du sujet ou l'effet désiré."
        },
        iso: {
            value: "RAW (NEF) recommandé, ISO 100-800 de base",
            explanation: "Le format RAW maximise les informations pour la post-production. ISO bas pour minimiser le bruit."
        },
        afMode: {
            value: "AF-S ou AF-C",
            explanation: "AF-S pour sujets statiques, AF-C pour sujets en mouvement."
        },
        afZoneMode: {
            value: "Point sélectif ou Auto",
            explanation: "Le point sélectif offre une précision sur le sujet principal."
        },
        recommendedLens: {
            value: "Polyvalent (ex: 24-120mm f/4)",
            explanation: "Un objectif 'tout-en-un' pour une variété de situations."
        },
        specificRecommendations: [
            "Qualité d'image : RAW (NEF) est fortement recommandé pour une flexibilité maximale en post-traitement.",
            "Picture Control : Standard/Neutre pour une image équilibrée à la prise de vue.",
            "Espace colorimétrique : Adobe RVB pour une gamme de couleurs plus large (particulièrement en RAW).",
            "Désactiver Réduction du bruit ISO élevée et D-Lighting actif en RAW car ces traitements sont mieux gérés en post-production."
        ]
    },
    {
        id: "portrait",
        name: "Portrait",
        icon: "👤",
        shootingMode: {
            value: "Priorité à l'ouverture (A)",
            explanation: "Permet de contrôler directement la profondeur de champ, essentielle pour isoler le sujet."
        },
        aperture: {
            value: "Faible (f/1.4 - f/2.8)",
            explanation: "Crée un beau flou d'arrière-plan (bokeh) pour faire ressortir le sujet et le séparer de l'arrière-plan."
        },
        shutterSpeed: {
            value: "L'appareil détermine",
            explanation: "La vitesse sera ajustée automatiquement pour une exposition correcte. Assurez-vous qu'elle est suffisamment rapide (min 1/100s, idéalement plus) pour éviter le flou de bougé du sujet ou du photographe."
        },
        iso: {
            value: "Aussi bas que possible (100-400), Auto ISO avec limite",
            explanation: "Minimiser le bruit et maximiser la qualité d'image. L'Auto ISO peut être utile si la lumière varie."
        },
        afMode: {
            value: "AF-S (Single-servo AF)",
            explanation: "Idéal pour les sujets statiques, la mise au point est verrouillée une fois acquise, permettant de recomposer."
        },
        afZoneMode: {
            value: "Point sélectif (sur les yeux)",
            explanation: "Permet une mise au point précise sur la partie la plus importante du visage pour des portraits nets."
        },
        recommendedLens: {
            value: "Objectif fixe lumineux (ex: 50mm f/1.8, 85mm f/1.8, 70-200mm f/2.8)",
            explanation: "Ces objectifs offrent de grandes ouvertures pour un bokeh marqué, une excellente netteté et sont souvent idéaux pour la distance de travail."
        },
        specificRecommendations: [
            "Balance des blancs : Auto, Ombre ou Nuageux pour des tons chair chaleureux et naturels.",
            "Picture Control : Portrait (adoucit la peau et les teints) ou Standard (pour une base neutre à retoucher).",
            "Flash externe si nécessaire : Utilisez un flash déporté ou rebondi pour un éclairage doux et flatteur, évitant les ombres dures."
        ]
    },
    {
        id: "landscape",
        name: "Paysage",
        icon: "🏞️",
        shootingMode: {
            value: "Priorité à l'ouverture (A) ou Manuel (M)",
            explanation: "Le mode A permet de contrôler la profondeur de champ. Le mode M offre un contrôle total pour les situations complexes."
        },
        aperture: {
            value: "Élevée (f/8 - f/16)",
            explanation: "Pour une grande profondeur de champ, garantissant que l'ensemble du paysage, de l'avant-plan à l'arrière-plan, est net."
        },
        shutterSpeed: {
            value: "L'appareil détermine ou Manuel",
            explanation: "En mode A, l'appareil gère la vitesse. En mode M, vous la réglez pour une exposition parfaite."
        },
        iso: {
            value: "ISO 100 (le plus bas)",
            explanation: "Pour une qualité d'image maximale et le moins de bruit possible, essentiel en paysage."
        },
        afMode: {
            value: "AF-S",
            explanation: "Les paysages sont statiques, l'AF-S suffit pour une mise au point précise."
        },
        afZoneMode: {
            value: "Point sélectif (sur l'hyperfocale)",
            explanation: "Permet de maximiser la netteté sur toute la scène en choisissant le bon point de mise au point."
        },
        recommendedLens: {
            value: "Grand-angle (ex: 14-24mm f/2.8, 20mm f/1.8, 24-70mm f/2.8)",
            explanation: "Pour capturer de vastes étendues et donner un sentiment d'immensité à vos photos."
        },
        specificRecommendations: [
            "Trépied indispensable : Pour des vitesses d'obturation lentes et une netteté maximale.",
            "Picture Control : Paysage (pour des couleurs plus vives et contrastées) ou Standard.",
            "Mise au point sur l'hyperfocale : Permet d'optimiser la netteté de l'avant-plan à l'infini."
        ]
    },
    {
        id: "sports_freeze",
        name: "Sports (Figer le mouvement)",
        icon: "🏃",
        shootingMode: {
            value: "Priorité à la vitesse (S) ou Manuel (M)",
            explanation: "Le mode S est idéal pour garantir une vitesse d'obturation rapide. Le mode M pour un contrôle total de l'exposition."
        },
        aperture: {
            value: "L'appareil détermine ou ouverte",
            explanation: "En mode S, l'appareil choisit. Une ouverture plus grande peut aider à isoler le sujet si possible."
        },
        shutterSpeed: {
            value: "Très rapide (1/1000s+)",
            explanation: "Pour figer complètement les actions rapides et éviter tout flou de mouvement."
        },
        iso: {
            value: "Auto ISO avec limite élevée (6400-12800)",
            explanation: "L'appareil ajustera l'ISO pour maintenir une vitesse d'obturation élevée, même en conditions de lumière difficiles."
        },
        afMode: {
            value: "AF-C (Continuous-servo AF)",
            explanation: "Indispensable pour suivre les sujets en mouvement et maintenir la mise au point."
        },
        afZoneMode: {
            value: "AF dynamique (9, 21, 51 pts), Suivi 3D, ou Groupe",
            explanation: "Ces modes permettent à l'appareil de suivre efficacement le sujet même s'il se déplace dans le cadre."
        },
        recommendedLens: {
            value: "Téléobjectif rapide (ex: 70-200mm f/2.8, 300mm f/2.8, 400mm f/2.8)",
            explanation: "Pour rapprocher l'action et isoler le sujet, avec une grande ouverture pour de meilleures performances en basse lumière."
        },
        specificRecommendations: [
            "Mode rafale rapide (CH) : Pour capturer plusieurs images d'une séquence et choisir le meilleur moment.",
            "AF-C priorité déclenchement : Permet de déclencher même si la mise au point n'est pas encore parfaite, privilégiant la capture du mouvement.",
            "Verrouillage du suivi AF réglé court : Pour que l'autofocus réagisse rapidement aux changements de mouvement du sujet."
        ]
    },
    {
        id: "sports_panning",
        name: "Sports (Filé)",
        icon: "💨",
        shootingMode: {
            value: "Priorité à la vitesse (S) ou Manuel (M)",
            explanation: "Le mode S permet de choisir précisément la vitesse pour l'effet de filé. Le mode M donne un contrôle total."
        },
        aperture: {
            value: "L'appareil détermine ou f/4 - f/8",
            explanation: "L'appareil ajuste en mode S. Manuellement, f/4-f/8 est un bon compromis pour une netteté suffisante sur le sujet en mouvement."
        },
        shutterSpeed: {
            value: "Lente (1/30s - 1/250s) selon la vitesse du sujet",
            explanation: "La vitesse doit être suffisamment lente pour créer un flou de mouvement sur l'arrière-plan, mais assez rapide pour figer le sujet relatif à votre mouvement."
        },
        iso: {
            value: "Auto ISO avec limite (800-3200)",
            explanation: "L'ISO s'adaptera pour une bonne exposition avec la vitesse choisie, sans monter excessivement."
        },
        afMode: {
            value: "AF-C",
            explanation: "Essentiel pour maintenir la mise au point sur le sujet qui se déplace avec vous."
        },
        afZoneMode: {
            value: "AF dynamique (9, 21, 51 pts) ou AF zone groupée",
            explanation: "Aide à suivre le sujet et compenser de légers mouvements."
        },
        recommendedLens: {
            value: "Téléobjectif rapide (ex: 70-200mm f/2.8, 300mm f/2.8)",
            explanation: "Idéal pour les sujets éloignés et pour créer une compression de perspective avec le fond flou."
        },
        specificRecommendations: [
            "Suivre le sujet avec le mouvement du corps : Un mouvement fluide est la clé de la réussite du filé.",
            "Utiliser le mode rafale : Pour augmenter vos chances de capturer un cliché net avec l'effet désiré.",
            "Priorité AF-C au déclenchement : Pour ne pas rater le moment critique pendant le suivi.",
            "Pratiquer le mouvement de rotation fluide : Plus vous pratiquez, meilleur sera votre filé."
        ]
    },
    {
        id: "low_light_night",
        name: "Basse Lumière / Nuit",
        icon: "🌃",
        shootingMode: {
            value: "Manuel (M)",
            explanation: "Le contrôle manuel est crucial pour obtenir la bonne exposition dans des conditions de lumière difficiles et pour les poses longues."
        },
        aperture: {
            value: "Aussi grande que possible (ex: f/2.8)",
            explanation: "Une grande ouverture laisse entrer un maximum de lumière, ce qui est vital en basse lumière."
        },
        shutterSpeed: {
            value: "Longue (plusieurs secondes à minutes) ou la plus rapide possible à main levée",
            explanation: "Dépend si vous utilisez un trépied (longue pose pour capter la lumière) ou si vous tentez de figer un mouvement à main levée (vitesse minimale pour éviter le flou)."
        },
        iso: {
            value: "Aussi élevé que nécessaire (3200-12800)",
            explanation: "Pour compenser le manque de lumière, au prix d'un bruit potentiel. Le D750 gère bien les ISO élevés."
        },
        afMode: {
            value: "Manuel (MF) ou AF-S sur point lumineux",
            explanation: "L'autofocus peut avoir du mal dans le noir. La mise au point manuelle est souvent plus fiable. AF-S peut fonctionner s'il y a un point suffisamment contrasté."
        },
        afZoneMode: {
            value: "N/A (Manuel)",
            explanation: "Lorsque la mise au point est manuelle, le mode de zone AF n'est pas pertinent."
        },
        recommendedLens: {
            value: "Objectif lumineux (ex: 24-70mm f/2.8, 35mm f/1.8, 50mm f/1.8)",
            explanation: "Les objectifs avec une grande ouverture (faible chiffre f/) sont indispensables pour capter la lumière."
        },
        specificRecommendations: [
            "Trépied indispensable pour poses longues : Pour éviter tout flou de bougé et capturer un maximum de lumière.",
            "Réduction du bruit sur longues expositions activée : Pour réduire le bruit généré par le capteur lors de longues expositions (prend du temps après la photo).",
            "Mise au point manuelle précise : Utilisez le Live View et le zoom pour une mise au point parfaite sur un point lumineux ou l'infini."
        ]
    },
    {
        id: "street_photography",
        name: "Photographie de Rue",
        icon: "🚶",
        shootingMode: {
            value: "Priorité à l'ouverture (A) ou Manuel (M)",
            explanation: "Le mode A permet de contrôler la profondeur de champ pour isoler un sujet ou obtenir une scène nette. Le mode M pour un contrôle total dans des conditions stables."
        },
        aperture: {
            value: "f/2.8 - f/8 (selon l'effet voulu)",
            explanation: "f/2.8 pour un sujet plus isolé (bokeh), f/8 pour une scène plus nette avec plus de profondeur de champ."
        },
        shutterSpeed: {
            value: "1/125s - 1/500s",
            explanation: "Suffisamment rapide pour figer les mouvements des passants, mais pas excessivement pour ne pas monter l'ISO inutilement."
        },
        iso: {
            value: "Auto ISO avec limite (3200-6400)",
            explanation: "Permet à l'appareil de s'adapter rapidement aux changements de lumière dans la rue, tout en gérant le bruit."
        },
        afMode: {
            value: "AF-C ou AF-S",
            explanation: "AF-C pour les sujets qui se déplacent vers vous ou latéralement. AF-S pour les scènes plus statiques."
        },
        afZoneMode: {
            value: "Point sélectif ou AF dynamique",
            explanation: "Point sélectif pour un contrôle précis. AF dynamique pour suivre un sujet en mouvement."
        },
        recommendedLens: {
            value: "Objectif fixe compact (ex: 35mm f/1.8, 50mm f/1.8, 24-70mm f/2.8)",
            explanation: "Les focales fixes sont discrètes et rapides. Les zooms polyvalents offrent de la flexibilité."
        },
        specificRecommendations: [
            "Back-button focus recommandé : Sépare la mise au point du déclenchement, pour plus de réactivité.",
            "Pré-mise au point (hyperfocale) pour plus de réactivité : Idéal pour des sujets à des distances prévisibles, permet un déclenchement quasi instantané.",
            "Mode rafale lente (CL) utile : Pour capturer de légères variations dans les expressions ou les mouvements."
        ]
    },
    {
        id: "milky_way_astrophotography",
        name: "Voie Lactée / Astrophotographie",
        icon: "🌌",
        shootingMode: {
            value: "Manuel (M)",
            explanation: "Un contrôle total est indispensable pour des expositions très longues dans l'obscurité totale."
        },
        aperture: {
            value: "La plus grande possible (f/1.4 - f/2.8)",
            explanation: "Essentiel pour capter le maximum de lumière des étoiles et de la Voie Lactée, qui sont très faibles."
        },
        shutterSpeed: {
            value: "15s - 30s (règle des 500/300)",
            explanation: "Permet de capter suffisamment de lumière sans que les étoiles ne deviennent des traînées (flou de rotation terrestre). La 'règle des 500' (500 / focale = temps de pose max) est un bon point de départ."
        },
        iso: {
            value: "ISO 3200 - 6400 (voire plus)",
            explanation: "Des ISO très élevés sont nécessaires pour révéler les détails de la Voie Lactée, étant donné l'absence de lumière ambiante."
        },
        afMode: {
            value: "Manuel (MF) (sur l'infini)",
            explanation: "L'autofocus est inopérant dans l'obscurité. La mise au point manuelle est plus fiable."
        },
        afZoneMode: {
            value: "N/A (Manuel)",
            explanation: "Non pertinent en mise au point manuelle."
        },
        recommendedLens: {
            value: "Grand-angle très lumineux (ex: 14-24mm f/2.8, 20mm f/1.8, 24mm f/1.4)",
            explanation: "Un grand-angle permet de capturer une vaste portion du ciel. La grande ouverture est cruciale."
        },
        specificRecommendations: [
            "Trépied robuste et déclencheur souple : Indispensables pour les poses longues et éviter tout mouvement de l'appareil.",
            "Désactiver réduction du bruit longues expositions (si stacking) : Si vous prévoyez de 'stacker' plusieurs images, désactivez cette option.",
            "Désactiver D-Lighting : Peut introduire du bruit ou des artefacts indésirables en astrophotographie.",
            "Balance des blancs : Tungstène ou Personnalisée (autour de 3500K-4000K) pour des couleurs plus naturelles du ciel."
        ]
    },
    {
        id: "macro_photography",
        name: "Macrophotographie",
        icon: "🐞",
        shootingMode: {
            value: "Manuel (M) ou Priorité à l'ouverture (A)",
            explanation: "Le mode M offre un contrôle total. Le mode A permet de gérer la très faible profondeur de champ."
        },
        aperture: {
            value: "Variable (f/8 - f/16) pour profondeur de champ",
            explanation: "La profondeur de champ est extrêmement faible en macro. Une ouverture plus fermée est souvent nécessaire."
        },
        shutterSpeed: {
            value: "Variable (souvent rapide avec flash, plus lent sans)",
            explanation: "Dépend de l'éclairage et si le sujet bouge. Le flash permet des vitesses très rapides."
        },
        iso: {
            value: "ISO 100 - 400",
            explanation: "Maintenir l'ISO le plus bas possible pour une qualité d'image maximale."
        },
        afMode: {
            value: "Manuel (MF)",
            explanation: "La mise au point automatique est souvent imprécise en macro. La mise au point manuelle est préférable."
        },
        afZoneMode: {
            value: "N/A (Manuel)",
            explanation: "Non pertinent en mise au point manuelle."
        },
        recommendedLens: {
            value: "Objectif macro dédié (ex: 60mm macro, 105mm macro)",
            explanation: "Ces objectifs sont conçus pour des rapports de reproduction élevés et une netteté optimale à courte distance."
        },
        specificRecommendations: [
            "Trépied ou rail de mise au point recommandé : Pour une stabilité maximale et des ajustements précis.",
            "Éclairage (flash annulaire, diffuseur, LED) essentiel : La petite ouverture et la courte distance de travail réduisent la lumière.",
            "Focus stacking souvent nécessaire : Empilement de plusieurs photos prises à différentes mises au point pour une profondeur de champ plus étendue."
        ]
    },
    {
        id: "water_panning",
        name: "Filé (Torrents/Cascades)",
        icon: "🌊",
        shootingMode: {
            value: "Priorité à la vitesse (S) ou Manuel (M)",
            explanation: "Le mode S permet de dicter la durée de l'effet filé. Le mode M offre un contrôle total de l'exposition."
        },
        aperture: {
            value: "L'appareil détermine ou f/8 - f/16",
            explanation: "En mode S, l'appareil ajuste. Manuellement, une ouverture moyenne à élevée assure une bonne netteté."
        },
        shutterSpeed: {
            value: "Longue (1/30s à plusieurs secondes)",
            explanation: "Plus la vitesse est lente, plus l'eau sera soyeuse. La durée exacte dépend de l'effet désiré et du débit de l'eau."
        },
        iso: {
            value: "ISO 100 (le plus bas possible)",
            explanation: "Pour minimiser le bruit et maximiser la qualité d'image pendant les longues expositions."
        },
        afMode: {
            value: "AF-S",
            explanation: "La mise au point est faite sur des éléments statiques du paysage, pas sur l'eau qui coule."
        },
        afZoneMode: {
            value: "Point sélectif (sur un élément immobile)",
            explanation: "Pour une mise au point précise sur les rochers ou la végétation."
        },
        recommendedLens: {
            value: "Grand-angle à Téléobjectif standard (ex: 24-70mm f/2.8, 16-35mm f/4)",
            explanation: "Le choix dépend du cadrage souhaité."
        },
        specificRecommendations: [
            "Trépied indispensable : Pour toute pose longue, le trépied est crucial.",
            "Filtre ND (Densité Neutre) essentiel en pleine lumière : Réduit la lumière, permettant des vitesses plus lentes.",
            "Utiliser un déclencheur souple : Pour éviter de faire bouger l'appareil lors du déclenchement.",
            "Réduction du bruit sur longues expositions activée : Aide à minimiser le bruit (peut doubler le temps de prise de vue)."
        ]
    },
    {
        id: "wildlife_photography",
        name: "Photographie Animalière",
        icon: "🦌",
        shootingMode: {
            value: "Priorité à la vitesse (S) ou Manuel (M)",
            explanation: "Le mode S est souvent privilégié pour garantir une vitesse d'obturation suffisante. Le mode M offre un contrôle total."
        },
        aperture: {
            value: "Ouverte (f/2.8 - f/5.6) pour isoler le sujet",
            explanation: "Une grande ouverture permet de créer un bokeh agréable et d'obtenir des vitesses plus rapides."
        },
        shutterSpeed: {
            value: "Rapide (1/500s - 1/2000s) pour figer le mouvement",
            explanation: "La vitesse exacte dépend de l'activité de l'animal. Plus il bouge vite, plus la vitesse doit être élevée."
        },
        iso: {
            value: "Auto ISO avec limite élevée (3200-12800)",
            explanation: "L'ISO s'adaptera pour maintenir la vitesse d'obturation souhaitée."
        },
        afMode: {
            value: "AF-C",
            explanation: "Indispensable pour suivre les animaux en mouvement, même imprévisibles."
        },
        afZoneMode: {
            value: "AF dynamique (51 points), Groupe, ou Suivi 3D",
            explanation: "Ces modes sont excellents pour suivre les sujets qui se déplacent rapidement."
        },
        recommendedLens: {
            value: "Téléobjectif (ex: 70-300mm, 200-500mm, 500mm f/4)",
            explanation: "Pour atteindre les animaux sans les déranger et remplir le cadre."
        },
        specificRecommendations: [
            "Utiliser le mode rafale rapide (CH) : Pour ne pas manquer le moment crucial.",
            "Back-button focus : Permet de séparer la mise au point du déclenchement, offrant plus de contrôle.",
            "Prévoir un monopode ou trépied pour les longues focales : Aide à stabiliser l'objectif et à réduire la fatigue.",
            "Soyez patient et discret : La patience est la clé en photographie animalière."
        ]
    },
    {
        id: "nd_filters_usage",
        name: "Utilisation Filtres ND",
        icon: "⚫",
        shootingMode: {
            value: "Manuel (M) ou Priorité à la vitesse (S)",
            explanation: "Le mode M donne le contrôle total. Le mode S permet de définir la longue exposition."
        },
        aperture: {
            value: "Varie (souvent f/8 - f/16)",
            explanation: "Utilisé avec des ouvertures moyennes à fermées pour maximiser la profondeur de champ et la netteté."
        },
        shutterSpeed: {
            value: "Très longue (plusieurs secondes à plusieurs minutes)",
            explanation: "L'objectif principal du filtre ND est de permettre des poses extrêmement longues, même en plein jour."
        },
        iso: {
            value: "ISO 100 (toujours le plus bas)",
            explanation: "Minimiser le bruit pendant la très longue exposition."
        },
        afMode: {
            value: "AF-S (avant la pose longue) ou Manuel (MF)",
            explanation: "Faire la mise au point sans le filtre, puis passer en manuel."
        },
        afZoneMode: {
            value: "Point sélectif (avant de monter le filtre)",
            explanation: "Précision de la mise au point sur le sujet clé avant d'obscurcir l'objectif."
        },
        recommendedLens: {
            value: "Dépend du sujet (souvent grand-angle ou standard)",
            explanation: "Les filtres ND sont utilisés dans divers contextes."
        },
        specificRecommendations: [
            "Indispensable : Trépied, Déclencheur souple (ou télécommande) : Absolument nécessaires pour éviter le flou de bougé.",
            "Calculer le temps de pose : Utilisez une application ou une formule pour déterminer la nouvelle vitesse d'obturation.",
            "Couvrir l'œilleton du viseur : Pour éviter que la lumière parasite ne rentre.",
            "Désactiver la réduction du bruit longue exposition si vous faites du *stacking* : Pour éviter les temps d'attente."
        ]
    },
    {
        id: "fireworks",
        name: "Feux d'Artifice",
        icon: "🎆",
        shootingMode: {
            value: "Manuel (M) ou Bulb",
            explanation: "Le mode M offre un contrôle précis. Le mode Bulb permet des poses plus longues que 30s."
        },
        aperture: {
            value: "f/8 - f/16 pour netteté et éviter la surexposition",
            explanation: "Une ouverture moyenne à fermée assure que les traînées lumineuses sont nettes et évite de 'griller' les explosions."
        },
        shutterSpeed: {
            value: "2s - 10s (pour capturer les traînées)",
            explanation: "Permet de capter l'ensemble du déploiement et des traînées d'un feu."
        },
        iso: {
            value: "ISO 100 - 400",
            explanation: "Un ISO bas est suffisant car les feux sont très lumineux."
        },
        afMode: {
            value: "Manuel (MF) (sur l'infini ou un point éloigné)",
            explanation: "L'autofocus aura du mal. La mise au point manuelle sur l'infini est la plus fiable."
        },
        afZoneMode: {
            value: "N/A (Manuel)",
            explanation: "Non pertinent en mise au point manuelle."
        },
        recommendedLens: {
            value: "Grand-angle à Téléobjectif standard (ex: 24-70mm f/2.8, 16-35mm f/4)",
            explanation: "Le grand-angle pour un spectacle panoramique, le téléobjectif pour des détails."
        },
        specificRecommendations: [
            "Trépied indispensable : Pour des photos nettes avec des poses longues.",
            "Déclencheur souple ou retardateur (2s) : Pour éviter tout mouvement de l'appareil.",
            "Mode Bulb pour les poses très longues : Si vous voulez capturer plusieurs explosions sur une seule image.",
            "Balance des blancs : Lumière du jour ou Auto. Peut être ajusté en post-traitement.",
            "Désactiver le flash : Inutile et gênerait les autres spectateurs.",
            "Cadrez large au début : Les premières explosions vous donneront une idée de la hauteur et de l'étendue."
        ]
    },
    {
        id: "light_painting",
        name: "Light Painting",
        icon: "💡",
        shootingMode: {
            value: "Manuel (M) ou Bulb",
            explanation: "Le mode Manuel est essentiel. Le mode Bulb permet des poses très longues, parfaites pour des dessins complexes."
        },
        aperture: {
            value: "f/8 - f/16 (pour netteté et contrôle de la lumière)",
            explanation: "Une ouverture plus fermée permet d'augmenter la profondeur de champ et de contrôler la luminosité des sources lumineuses."
        },
        shutterSpeed: {
            value: "10s - 60s+ (selon la complexité du dessin)",
            explanation: "La durée de l'exposition doit être suffisamment longue pour que vous ayez le temps de 'peindre' avec la lumière."
        },
        iso: {
            value: "ISO 100 - 400",
            explanation: "Un ISO bas est crucial pour minimiser le bruit sur ces très longues expositions et pour que le fond reste sombre."
        },
        afMode: {
            value: "Manuel (MF) (sur un sujet ou l'infini dans le noir)",
            explanation: "L'autofocus est inopérant dans l'obscurité. Faites la mise au point sur une source lumineuse temporaire, puis passez en manuel."
        },
        afZoneMode: {
            value: "N/A (Manuel)",
            explanation: "Non pertinent en mise au point manuelle."
        },
        recommendedLens: {
            value: "Grand-angle à Standard (ex: 24-70mm f/2.8, 50mm f/1.8, 16-35mm f/4)",
            explanation: "Le grand-angle est idéal pour de grands dessins ou inclure un arrière-plan."
        },
        specificRecommendations: [
            "Trépied indispensable : Pour des photos stables et nettes pendant les longues expositions.",
            "Déclencheur souple ou retardateur (2s) : Pour éviter le flou de bougé au début de la pose.",
            "Opérer dans l'obscurité totale ou quasi-totale : Pour que seules les lumières que vous contrôlez soient enregistrées.",
            "Utilisez des sources lumineuses variées : Lampes de poche, LED colorées, bâtons lumineux, téléphones, etc., pour différents effets.",
            "Désactiver la réduction du bruit longue exposition si vous faites plusieurs essais rapidement : Pour ne pas doubler le temps de prise de vue."
        ]
    }
];

const ndFiltersData = [
    { factor: "ND2", stops: 1 },
    { factor: "ND4", stops: 2 },
    { factor: "ND8", stops: 3 },
    { factor: "ND16", stops: 4 },
    { factor: "ND32", stops: 5 },
    { factor: "ND64", stops: 6 },
    { factor: "ND128", stops: 7 },
    { factor: "ND256", stops: 8 },
    { factor: "ND512", stops: 9 },
    { factor: "ND1000", stops: 10 },
    { factor: "ND2000", stops: 11 },
    { factor: "ND4000", stops: 12 },
    { factor: "ND8000", stops: 13 },
    { factor: "ND16000", stops: 14 },
    { factor: "ND32000", stops: 15 }
];