const portfolioData = [
    // --- 1. INDUSTRIAL TRAINING ---
    {
        title: "Laboratory VR Training",
        category: "Training",
        description: "Simulazione immersiva di esperimenti e protocolli di laboratorio su visori Meta Quest, progettata per replicare interazioni manuali complesse all’interno di un Digital Twin sicuro e controllato.",
        videoUrl: "Video/ITS.mp4",
        tags: ["Meta Quest", "Unity", "VR", "Training"],
        challenge: "Formare operatori su strumentazioni delicate e agenti chimici riducendo completamente i rischi fisici e l’utilizzo di materiali reali.",
        solution: "Sviluppo di un ambiente virtuale ad alta fedeltà con fisica avanzata dei fluidi, collisioni precise e tracking millimetrico delle mani per garantire realismo operativo.",
        metrics: [ { label: "Accelerazione Apprendimento", value: "+40%", isHighlight: true }, { label: "Costi Consumabili", value: "fino a -100%", isHighlight: false } ],
        drawerMedia: [ { type: "video", url: "Video/ITS.mp4" } ]
    },
    {
        title: "Industrial Machinery Simulator",
        category: "Training",
        description: "Simulatore VR per macchinari industriali (centrifuga e fermentatore) con procedure guidate di manutenzione e ispezione.",
        videoUrl: "Video/machinery.mp4",
        tags: ["Meta Quest", "Unity", "VR", "Training"],
        challenge: "Ridurre il downtime formando i tecnici sulle operazioni critiche prima dell’accesso all’impianto reale.",
        solution: "Replica digitale 1:1 del macchinario con workflow procedurali step-by-step per smontaggio, controllo e manutenzione.",
        metrics: [ { label: "Downtime Macchina", value: "-40%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/machinery.mp4" } ]
    },
    {
        title: "DPI & Crane Safety",
        category: "Training",
        description: "Modulo VR per la sicurezza sul lavoro che combina selezione DPI e operatività su gru a carrello in scenari realistici.",
        videoUrl: "Video/DPI&Crane.mp4",
        tags: ["Meta Quest", "Unity", "VR", "HSE Safety"],
        challenge: "Aumentare la consapevolezza dei rischi e validare le competenze operative in ambienti ad alta pericolosità.",
        solution: "Ambiente immersivo che simula imprevisti reali e valuta in tempo reale le decisioni dell’utente e le procedure di sollevamento.",
        metrics: [ { label: "Ritenzione Procedure", value: "+75%", isHighlight: true }, { label: "Riduzione Errori Critici", value: "-90%", isHighlight: false } ],
        drawerMedia: [ { type: "video", url: "Video/DPI&Crane.mp4" } ]
    },
    {
        title: "Automotive Welding Training",
        category: "Training",
        description: "Training VR avanzato per lavorazioni di saldatura automotive ad alta precisione.",
        videoUrl: "Video/interact_honda_medium.mp4",
        tags: ["PC VR", "Unity", "VR", "Hand Skills"],
        challenge: "Garantire qualità costante nelle lavorazioni manuali riducendo errori operativi in linea.",
        solution: "Sistema procedurale che guida e valuta movimenti, tempi e precisione dell’operatore in tempo reale.",
        metrics: [ { label: "Errori In Catena di Montaggio", value: "-60%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/interact_honda_medium.mp4" } ]
    },
    {
        title: "Viewer MR Machinery",
        category: "Training",
        description: "Esperienza in Mixed Reality ad altissima definizione per la visualizzazione e revisione di macchinari industriali complessi.",
        videoUrl: "Video/Varjo.mp4",
        tags: ["Varjo XR-3", "Unity", "MR", "Industrial Review"],
        challenge: "Consentire validazioni ergonomiche e progettuali in scala reale prima della costruzione fisica.",
        solution: "Utilizzo del passthrough ad alta risoluzione Varjo XR-3 per sessioni di design review estremamente accurate.",
        metrics: [ { label: "Tempo Design Review", value: "-50%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/Varjo.mp4" } ]
    },

    // --- 2. HEALTHCARE & REHABILITATION ---
    {
        title: "Riabilitazione Neuromotoria",
        category: "Healthcare",
        description: "Applicazione VR per la riabilitazione degli arti superiori basata su hand tracking naturale.",
        videoUrl: "Video/HandTracking.mp4",
        tags: ["PC VR", "Unity", "VR", "Hand Tracking"],
        challenge: "Migliorare l’aderenza del paziente a esercizi ripetitivi monitorando con precisione i movimenti.",
        solution: "Esperienze gamificate che trasformano esercizi clinici in attività interattive senza l’uso di controller.",
        metrics: [ { label: "Aderenza Terapia", value: "+85%", isHighlight: true }, { label: "Precisione Tracking", value: "sub-millimetrica", isHighlight: false } ],
        drawerMedia: [ { type: "video", url: "Video/HandTracking.mp4" } ]
    },
    {
        title: "MR Molecule Viewer",
        category: "Healthcare",
        description: "Applicazione in Mixed Reality per la visualizzazione e manipolazione collaborativa di modelli molecolari complessi.",
        videoUrl: "Video/ARExperience.mp4",
        tags: ["Hololens 2", "Unity", "MR", "Pharma R&D"],
        challenge: "Migliorare la comprensione spaziale delle strutture chimiche in contesti di ricerca condivisi.",
        solution: "Modelli olografici ancorati nello spazio reale e sincronizzati tra più utenti in tempo reale.",
        metrics: [ { label: "Workflow Collaborativo", value: "ottimizzato", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/ARExperience.mp4" } ]
    },

    // --- 3. ARCHITECTURE & BUILDING ---
    {
        title: "Hotel Photorealism",
        category: "ArchViz",
        description: "Esperienza VR fotorealistica per la visita immersiva di ambienti hospitality di fascia alta.",
        videoUrl: "Video/ciani.mp4",
        tags: ["PC VR", "Unreal Engine", "VR", "Photorealism"],
        challenge: "Trasmettere atmosfera, materiali e qualità percepita prima della realizzazione fisica.",
        solution: "Rendering avanzato con Global Illumination e materiali PBR per un risultato visivo estremamente realistico.",
        metrics: [ { label: "Conversioni Visita-Acquisto", value: "+35%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/ciani.mp4" } ]
    },
    {
        title: "Building Construction",
        category: "ArchViz",
        description: "Simulazione immersiva delle fasi costruttive di edifici residenziali.",
        videoUrl: "Video/m2.mp4",
        tags: ["PC VR", "Unreal Engine", "VR", "BIM to VR"],
        challenge: "Migliorare coordinamento e decision making tra stakeholder durante il ciclo di costruzione.",
        solution: "Integrazione di modelli BIM in ambienti real-time navigabili per analisi spaziali e temporali.",
        metrics: [ { label: "Varianti in Opera", value: "-30%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/m2.mp4" } ]
    },
    {
        title: "B-Here Virtual Product Showroom",
        category: "ArchViz",
        description: "Showroom digitale ad alta fedeltà per la presentazione immersiva di prodotti e asset complessi.",
        videoUrl: "Video/Arcadia.mp4",
        tags: ["Web VR", "Unreal Engine", "VR", "Digital Showroom"],
        challenge: "Superare i limiti dei cataloghi tradizionali offrendo un’esperienza interattiva e contestualizzata.",
        solution: "Ambienti sviluppati in Unreal Engine ottimizzati per fruizione web e VR.",
        metrics: [ { label: "Session Time Utente", value: "+300%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/Arcadia.mp4" } ]
    },

    // --- 4. MUSEUMS & CULTURAL HERITAGE ---
    {
        title: "immerSEE – 360 Museum Experience Platform",
        category: "Museum",
        description: "Piattaforma proprietaria per la fruizione immersiva di contenuti culturali in formato 360°.",
        videoUrl: "Video/video360template.mp4",
        tags: ["Meta Quest", "Unity", "VR 360", "Cultural Virtualization"],
        challenge: "Garantire accessibilità remota senza perdita di qualità visiva o comfort utente.",
        solution: "Streaming ottimizzato di contenuti stereoscopici ad altissima risoluzione per visori VR.",
        metrics: [ { label: "Risoluzione Supportata", value: "fino a 8K", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/video360template.mp4" } ]
    },
    {
        title: "Virtual Museum Archive",
        category: "Museum",
        description: "Esperienza VR ottimizzata per la fruizione museale su larga scala con dispositivi standalone.",
        videoUrl: "Video/SoilmecVRGo.mp4",
        tags: ["Oculus GO", "Unity", "VR", "Museum Exhibition"],
        challenge: "Gestire flussi elevati di utenti mantenendo qualità e stabilità dell’esperienza.",
        solution: "Applicazione ottimizzata per performance su hardware leggero con navigazione intuitiva e sicura.",
        metrics: [ { label: "Accessibilità Evento", value: "elevata", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/SoilmecVRGo.mp4" } ]
    },

    // --- 5. RESEARCH & INNOVATION ---
    {
        title: "X-DE-MAN Project",
        category: "R&D",
        description: "Progetto europeo XR (Horizon Europe) focalizzato sul training per il de-manufacturing e l’economia circolare.",
        videoUrl: "Video/xdeman.mp4",
        tags: ["PC VR", "Unity", "VR", "Dismantling"],
        challenge: "Migliorare sicurezza ed efficienza nelle operazioni di smontaggio di componenti elettronici complessi.",
        solution: "Ambienti immersivi con guide visive che supportano procedure corrette e sostenibili.",
        metrics: [ { label: "Competenze Operative", value: "incrementate", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/xdeman.mp4" } ]
    },
    {
        title: "BeSpoke Mixed Reality Haptics Experience",
        category: "R&D",
        description: "Esperienza MR con integrazione aptica per la percezione realistica dei materiali.",
        videoUrl: "Video/PoltronaFrau.mp4",
        tags: ["Varjo XR-3", "Haptic Weart", "Unity", "MR", "Haptics"],
        challenge: "Integrare feedback tattile nel processo di valutazione del prodotto digitale.",
        solution: "Sincronizzazione tra rendering ad alta definizione e attuatori aptici indossabili.",
        metrics: [ { label: "Realistic Haptic Index", value: "fino al 99%", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/PoltronaFrau.mp4" } ]
    },
    {
        title: "Collaborative Mixed Reality (Multiplayer)",
        category: "R&D",
        description: "Sistema MR multiplayer per esperienze collaborative in co-presenza fisica.",
        videoUrl: "Video/mixed_reality_meta_multiplayer.mp4",
        tags: ["Meta Quest", "Unity", "MR", "Multiplayer Core"],
        challenge: "Allineare ambienti virtuali condivisi tra utenti nello stesso spazio reale.",
        solution: "Integrazione di Spatial Anchors e networking a bassa latenza per sincronizzazione precisa.",
        metrics: [ { label: "Accuratezza Spaziale", value: "sub-millimetrica", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/mixed_reality_meta_multiplayer.mp4" } ]
    },

    // --- 6. GAMING & INTERACTIVE EXPERIENCES ---
    {
        title: "Jungle Climbing VR",
        category: "Gaming",
        description: "Esperienza VR basata su locomozione fisica per l’esplorazione e arrampicata in ambienti naturali.",
        videoUrl: "Video/jungle.mp4",
        tags: ["PC VR", "Unreal Engine", "VR", "Locomotion Design"],
        challenge: "Garantire immersione e comfort evitando motion sickness.",
        solution: "Sistema di locomozione basato su interazioni manuali e fisica realistica.",
        metrics: [ { label: "Motion Sickness", value: "assente nei test", isHighlight: true } ],
        drawerMedia: [ { type: "video", url: "Video/jungle.mp4" } ]
    },

    // --- 7. INTERACTIVE WEB EXPERIENCES ---
    {
        title: "360 Virtual Showroom",
        category: "Playground",
        description: "Esperienza 360° accessibile via browser per l’esplorazione interattiva di ambienti virtuali.",
        imageUrl: "img/favicon.png",
        tags: ["Web 360", "WebXR", "Live Demo"],
        challenge: "Esperienza accessibile senza plugin esterni su tutti i dispositivi mobili e desktop.",
        solution: "Navigazione sferica ad alta risoluzione tramite iframe nativo.",
        drawerMedia: [ { type: "iframe", url: "https://design.wslabs.it/vr/360/app-files/index.html" } ]
    },
    {
        title: "Metaverse Spatial",
        category: "Playground",
        description: "Ambiente virtuale sociale accessibile via web con creazione avatar e interazione in tempo reale.",
        imageUrl: "img/favicon.png",
        tags: ["Spatial", "Web3", "Metaverse"],
        challenge: "Ospitare delegazioni internazionali in uno spazio virtuale aziendale multi-user.",
        solution: "Avvia il bridge Web-To-Spatial per muoverti liberamente nell'ambiente 3D globale.",
        drawerMedia: [ { type: "iframe", url: "https://www.spatial.io/s/Hall-More-643ed0842cdf0e61cc2868f1" } ]
    },
    {
        title: "Model Viewer AR",
        category: "Playground",
        description: "Visualizzazione interattiva di modelli 3D con possibilità di posizionamento in realtà aumentata direttamente da browser.",
        imageUrl: "img/favicon.png",
        tags: ["WebXR", "AR", "Cloud"],
        challenge: "Permettere agli scienziati e commerciali di esplorare l'oggetto ovunque nel mondo reale.",
        solution: "Framework WebXR integrato per iOS (USDZ) e Android (GLB).",
        drawerMedia: [ { type: "model-viewer" } ]
    },
    {
        title: "Edutainment 360",
        category: "Playground",
        description: "Esperienza immersiva 360° integrata in pagine web senza necessità di plugin esterni.",
        imageUrl: "img/favicon.png",
        tags: ["WebVR", "A-Frame", "360 Image"],
        challenge: "Visualizzare asset fotografici sferici con prestazioni native altissime.",
        solution: "Streaming di file equirettangolari renderizzati localmente via A-Frame.",
        drawerMedia: [ { type: "360-image", url: "img/theater.jpg" } ]
    }
];
