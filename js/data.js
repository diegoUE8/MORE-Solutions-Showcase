const portfolioData = [
    // --- 1. TRAINING E INDUSTRY ---
    {
        title: "Laboratory VR Training",
        category: "Training",
        description: "Simulazione immersiva di esperimenti e protocolli da laboratorio tramite Meta Quest. L'esempio perfetto di interazione manuale complessa in un Digital Twin sicuro.",
        videoUrl: "Video/ITS.mp4",
        tags: ["Meta Quest", "Chimica", "Safety"],
        challenge: "Addestrare il personale a operare su strumentazioni fragili e agenti chimici senza rischi fisici o sprechi di reagenti reali.",
        solution: "Sviluppo di un gemello virtuale del laboratorio con fisica dei fluidi avanzata, collision geometry precisa e tracking millimetrico delle mani.",
        metrics: [ { label: "Rischio Operativo", value: "-100%", isHighlight: true }, { label: "Costi Materiale", value: "Azzerati", isHighlight: false } ],
        drawerMedia: [ { type: "video", url: "Video/ITS.mp4" } ]
    },
    {
        title: "Industrial Machinery Simulator",
        category: "Training",
        description: "Sistema di simulazione per centrifuga e fermentatore industriale, con procedure di manutenzione guidate in Realtà Virtuale.",
        videoUrl: "Video/machinery.mp4",
        tags: ["Industry 4.0", "Manutenzione", "VR"],
        challenge: "Ridurre i tempi di fermo macchina (downtime) formando i tecnici sulle procedure di manutenzione prima ancora di accedere all'impianto fisico.",
        solution: "Replica 1:1 del macchinario con logica procedurale step-by-step per lo smontaggio e il controllo delle valvole.",
        metrics: [ { label: "Downtime Macchina", value: "-40%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/machinery.mp4" } ]
    },
    {
        title: "DPI & Crane Safety",
        category: "Training",
        description: "Modulo formativo per la sicurezza sul lavoro: selezione dei Dispositivi di Protezione (DPI) e operatività immersiva su Gru a carrello.",
        videoUrl: "Video/DPI&Crane.mp4",
        tags: ["HSE Training", "Safety", "Crane"],
        challenge: "Aumentare la consapevolezza dei rischi nei cantieri edili e certificare le competenze sull'utilizzo di macchinari pesanti.",
        solution: "Ambiente VR che testa le reazioni dell'utente ad imprevisti e valida le procedure di aggancio e sollevamento carichi.",
        metrics: [ { label: "Ritenzione Info", value: "+75%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/DPI&Crane.mp4" } ]
    },
    {
        title: "Interact Honda",
        category: "Training",
        description: "Esperienza di training meccanico avanzato incentrato sulla saldatura e lavorazione di precisione su impianti di scarico (marmitte) automotive.",
        videoUrl: "Video/interact_honda_medium.mp4",
        tags: ["Automotive", "Honda", "Skills"],
        challenge: "Ottimizzare l'addestramento degli operatori di linea per garantire la massima qualità nelle lavorazioni di saldatura manuale.",
        solution: "Training procedurale in VR che guida i movimenti dell'operatore, valutando precisione, tempistiche e rispetto delle specifiche.",
        metrics: [ { label: "Errori in Linea", value: "-60%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/interact_honda_medium.mp4" } ]
    },
    {
        title: "AR Molecule Viewer",
        category: "Training",
        description: "Applicazione per Hololens 2 dedicata alla visualizzazione olografica avanzata e manipolazione di complessi modelli molecolari in Realtà Mista.",
        videoUrl: "Video/ARExperience.mp4",
        tags: ["Hololens 2", "Mixed Reality", "Pharma"],
        challenge: "Facilitare la comprensione della struttura 3D chimica e le interazioni spaziali delle molecole in ambito ricerca e farmaceutico.",
        solution: "Proiezione spaziale sovrapposta al mondo reale, condivisibile tra più ricercatori nella stessa stanza tramite visori Microsoft.",
        drawerMedia: [ { type: "video", url: "Video/ARExperience.mp4" } ]
    },

    // --- 2. ARCHVIZ & REAL ESTATE ---
    {
        title: "Building Construction VR",
        category: "ArchViz",
        description: "Simulazione immersiva per l'esplorazione delle fasi cronologiche di costruzione di un edificio residenziale (Progetto Ciani).",
        videoUrl: "Video/ciani.mp4",
        tags: ["Construction", "BIM to VR", "Architecture"],
        challenge: "Migliorare la coordinazione tra progettisti, appaltatori e clienti finali visualizzando l'impatto dei lavori in scala 1:1 prima della posa.",
        solution: "Conversione dei modelli BIM in ambiente immersivo per l'analisi temporale e spaziale del cantiere.",
        metrics: [ { label: "Varianti in d'Opera", value: "-30%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/ciani.mp4" } ]
    },
    {
        title: "Hotel Arcadia Photorealism",
        category: "ArchViz",
        description: "Esperienza fotorealistica ad alta definizione all'interno delle stanze di pregio dell'Hotel Arcadia.",
        videoUrl: "Video/Arcadia.mp4",
        tags: ["Photorealism", "Real Estate", "Design Review"],
        challenge: "Comunicare il lusso e l'atmosfera degli spazi interni per incentivare la prevendita o le prenotazioni a distanza.",
        solution: "Illuminazione calcolata, materiali PBR fisicamente corretti e navigazione fluida che restituiscono il calore reale dell'ambiente.",
        metrics: [ { label: "Engagement", value: "+120%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/Arcadia.mp4" } ]
    },

    // --- 3. HEALTHCARE ---
    {
        title: "Riabilitazione Neuromotoria",
        category: "Healthcare",
        description: "Software in Realtà Virtuale dedicato alla riabilitazione della spalla e degli arti superiori sfruttando il sensore di Hand Tracking nativo.",
        videoUrl: "Video/HandTracking.mp4",
        tags: ["Digital Health", "Rehab", "Hand Tracking"],
        challenge: "Rendere i movimenti riabilitativi ripetitivi più ingaggianti per il paziente e tracciarne matematicamente l'escursione articolare.",
        solution: "Applicazioni ludico-terapeutiche (Gamification) in cui l'utente compie gesti prescritti dal medico in modo naturale e senza controller fisici.",
        metrics: [ { label: "Aderenza Terapia", value: "+85%", isHighlight: true }, { label: "Precisione Tracking", value: "Sub-millimetrica", isHighlight: false } ],
        drawerMedia: [ { type: "video", url: "Video/HandTracking.mp4" } ]
    },

    // --- 4. MUSEUM ---
    {
        title: "immerSEE (Museum 360)",
        category: "Museum",
        description: "L'esclusivo visualizzatore 360 nativo per la preservazione digitale e turistica di ambienti storici ed espositivi.",
        videoUrl: "Video/video360template.mp4",
        tags: ["Cultural Heritage", "Edutainment", "Immersive"],
        challenge: "Rendere l'esplorazione dei siti culturali accessibile da remoto senza causare motion sickness né perdita di profondità storica.",
        solution: "L'ecosistema immerSEE supporta video stereoscopici ad altissima risoluzione per un edutainment culturale ultra-realistico.",
        metrics: [ { label: "Accessibilità", value: "Globale", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/video360template.mp4" } ]
    },

    // --- 5. R&D & EU PROJECTS ---
    {
        title: "X-DE-MAN Project",
        category: "R&D",
        description: "Progetto europeo (EU) di ricerca all'avanguardia per l'evoluzione tecnologica della diagnostica non distruttiva e del testing manifatturiero (X-ray NDT).",
        imageUrl: "img/favicon.png",
        tags: ["EU Project", "Innovation", "Smart Manufacturing"],
        challenge: "Standardizzare l'innovazione della Realtà Estesa all'interno di consorzi di filiera complessa per il piano Industria 4.0 Europeo.",
        solution: "Sviluppo di Proof of Concept validati che aprono la strada alla digitalizzazione dei test sui materiali.",
        drawerMedia: [ { type: "youtube", url: "gudiafS-2gs" } ]
    },
    {
        title: "BeSpoke MR & Haptics",
        category: "R&D",
        description: "Applicativo per la visualizzazione di una poltrona (Frau) in Mixed Reality integrata con feedback tattile tramite il guanto Haptic WeArt.",
        videoUrl: "Video/PoltronaFrau.mp4",
        tags: ["Mixed Reality", "Haptics", "UX Design"],
        challenge: "Superare la sola validazione visiva del prodotto inserendo la percezione tattile delle texture (pelle, tessuto) nel mondo digitale.",
        solution: "Sincronizzazione tra i modelli 3D ultra-realistici e le attuazioni aptiche per replicare la rigidità e la rugosità superficiale in tempo reale.",
        metrics: [ { label: "Perceived Quality", value: "Massima", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/PoltronaFrau.mp4" } ]
    },
    {
        title: "Multiplayer Meta MR",
        category: "R&D",
        description: "R&D sull'implementazione del Multiplayer in Mixed Reality con i visori della famiglia Meta Quest permettendo co-presenza fisica (co-location).",
        videoUrl: "Video/mixed_reality_meta_multiplayer.mp4",
        tags: ["Mixed Reality", "Co-op", "R&D"],
        challenge: "Allineare perfettamente la mappa fisica di due utenti nella stessa stanza in modo che vedano ologrammi condivisi nello stesso punto esatto.",
        solution: "Uso iterativo delle Spatial Anchors e protocolli di rete UDP, essenziali per abilitare sessioni collaborative di ingegneria o design review.",
        metrics: [ { label: "Sincronizzazione", value: "Perfetta", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/mixed_reality_meta_multiplayer.mp4" } ]
    },

    // --- 6. GAMING ---
    {
        title: "Jungle Climbing VR",
        category: "Gaming",
        description: "Esperienza di puro intrattenimento videoludico in Realtà Virtuale: l'utente scala a mani nude pareti rocciose in una lussureggiante foresta.",
        videoUrl: "Video/jungle.mp4",
        tags: ["Gaming", "Entertainment", "VR Locomotion"],
        challenge: "Garantire meccaniche di scalata naturali e fluide, prevenendo completamente il senso di chinetosi (nausea nei giocatori non esperti).",
        solution: "Fisica applicata alle mani del giocatore, hitbox calcolati organicamente sulle sporgenze ambientali e sound design posizionale a 360°.",
        drawerMedia: [ { type: "video", url: "Video/jungle.mp4" } ]
    },

    // --- 7. PLAYGROUND ---
    {
        title: "Showroom Virtuale a 360",
        category: "Playground",
        description: "Naviga direttamente da web all'interno dei nostri showroom renderizzati a 360 gradi. Prova cliccando e trascinando la visuale!",
        imageUrl: "img/favicon.png",
        tags: ["Interactive", "Web 360", "Live Demo"],
        challenge: "Tramutare l'esposizione passiva di un prodotto in un'esplorazione autonoma e proattiva da parte del prospect, tutto eseguito all'interno del browser web.",
        solution: "Cliccando su questa Live Demo aprirai un portale interattivo dove immergerti totalmente senza scaricare file pesanti.",
        drawerMedia: [ { type: "iframe", url: "https://design.wslabs.it/vr/360/app-files/index.html" } ]
    },
    {
        title: "Metaverso Spatial",
        category: "Playground",
        description: "Entra e genera il tuo avatar nel nostro quartier generale virtuale ufficiale ospitato sulla nota piattaforma Social XR Spatial.io.",
        imageUrl: "img/favicon.png",
        tags: ["Spatial", "Metaverse", "Live Demo"],
        challenge: "Aprire un hub aziendale multiverso per incontrare delegazioni internazionali e organizzare fiere globali riducendo i costi di trasferta e le emissioni CO2.",
        solution: "Premi su Apri l'esperienza per avviare il bridge Web-To-Spatial e muoverti nell'auditorium tridimensionale.",
        drawerMedia: [ { type: "iframe", url: "https://www.spatial.io/s/Hall-More-643ed0842cdf0e61cc2868f1" } ]
    },
    {
        title: "Model Viewer AR",
        category: "Playground",
        description: "Seleziona e ruota il modello, esaminalo e poi piazzalo magicamente sulla tua scrivania scansionando la stanza (Realtà Aumentata Mobile).",
        imageUrl: "img/favicon.png",
        tags: ["AR", "Web3D", "Live Demo"],
        challenge: "Scardinare l'obbligo, per gli acquirenti, di dover scaricare e installare app terze dai vari Store solo per valutare l'ingombro di un macchinario/prodotto.",
        solution: "Il framework WebXR espone nativamente l'ologramma sui dispositivi iOS (via USDZ) e Android (via GLB e Scene Viewer) con un semplice tap.",
        drawerMedia: [ { type: "model-viewer" } ]
    },
    {
        title: "Edutainment 360",
        category: "Playground",
        description: "Visualizzazione immersiva e reattiva di siti storici/artistici direttamente integrata negli strati grafici della pagina Web.",
        imageUrl: "img/favicon.png",
        tags: ["Native 360", "Culture", "Live Demo"],
        challenge: "Fornire apprendimento esplorativo e turismo digitale per reperti o ambienti archeologici abbattendo ostacoli UX e garantendo frame-rate elevati.",
        solution: "Grazie ad A-Frame e WebXR, l'esperienza viene eseguita fluidamente nella GPU del browser. Clicca e trascina la visuale!",
        drawerMedia: [ { type: "360-image", url: "img/theater.jpg" } ]
    }
];
