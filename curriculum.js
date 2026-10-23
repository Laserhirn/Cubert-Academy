/* Curriculum v2.1: structure and practice profiles; lesson content remains open. */
const CURRICULUM = {
  "version": 2,
  "worlds": [
    {
      "id": "physics",
      "title": "Licht & Physik",
      "group": "Fundament",
      "icon": "≈",
      "description": "Die Sprache des Spektrums verstehen.",
      "outcome": "Material, Licht und Messsignal im Kundengespräch einordnen.",
      "recommendedWorlds": [],
      "modules": [
        {
          "id": "light",
          "title": "Licht erzählt Geschichten",
          "topics": [
            "Wellenlänge",
            "Reflexion, Absorption und Transmission",
            "Spektraler Fingerabdruck"
          ],
          "status": "pilot",
          "contentId": "light",
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ph-spectrum",
          "title": "Das elektromagnetische Spektrum",
          "topics": [
            "VIS, NIR und SWIR",
            "Einheiten",
            "Spektralbereich und Anwendung"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "light"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ph-interaction",
          "title": "Licht trifft Materie",
          "topics": [
            "Absorption und Transmission",
            "Streuung",
            "Material und Oberflächen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ph-spectrum"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ph-reflection",
          "title": "Reflexion und Messgeometrie",
          "topics": [
            "Diffuse und gerichtete Reflexion",
            "Glanz",
            "Winkelabhängigkeit"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ph-interaction"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ph-radiometry",
          "title": "Radiometrie und Photometrie",
          "topics": [
            "Strahlungsleistung",
            "Bestrahlungsstärke und Strahldichte",
            "Photometrische Gewichtung"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ph-reflection"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ph-spectra",
          "title": "Spektren richtig lesen",
          "topics": [
            "Achsen und Einheiten",
            "Banden und Merkmale",
            "Interpretationsgrenzen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ph-radiometry"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ph-case",
          "title": "Praxisfall: Materialunterschied oder Messfehler?",
          "topics": [
            "Hypothesen",
            "Kontrollmessungen",
            "Erklärung für Kunden"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ph-spectra"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "optics-world",
      "title": "Kamera & Optik",
      "group": "Fundament",
      "icon": "◎",
      "description": "Vom gewünschten Detail zum richtigen Bildfeld.",
      "outcome": "Bildfeld, Auflösung, Optik und Belichtung gemeinsam beurteilen.",
      "recommendedWorlds": [
        "physics"
      ],
      "modules": [
        {
          "id": "optics",
          "title": "Das richtige Bildfeld",
          "topics": [
            "Brennweite",
            "Arbeitsabstand",
            "F-Zahl"
          ],
          "status": "pilot",
          "contentId": "optics",
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "op-fnumber",
          "title": "Blende und Schärfentiefe",
          "topics": [
            "Eintrittspupille",
            "Lichtdurchsatz",
            "Beugung und Schärfentiefe"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "optics"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "op-resolution",
          "title": "Auflösung richtig vergleichen",
          "topics": [
            "Sensorformat und Pixel",
            "Objektauflösung",
            "Optische Auflösung und MTF"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "op-fnumber"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "op-exposure",
          "title": "Belichtung, Gain und Dynamik",
          "topics": [
            "Belichtungszeit",
            "Sättigung",
            "Dynamikumfang und Gain"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "op-resolution"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "op-motion",
          "title": "Bewegte Objekte aufnehmen",
          "topics": [
            "Bildrate",
            "Bewegungsunschärfe",
            "Global und Rolling Shutter"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "op-exposure"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "op-lenses",
          "title": "Objektive auswählen",
          "topics": [
            "Abbildungsmaßstab",
            "Spektrale Transmission",
            "Kompatibilität und Fokus"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "op-motion"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "op-case",
          "title": "Praxisfall: Eine Optik auslegen",
          "topics": [
            "Bildfeld bestimmen",
            "Arbeitsabstand prüfen",
            "Auswahl begründen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "op-lenses"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "measurement",
      "title": "Messpraxis & Beleuchtung",
      "group": "Fundament",
      "icon": "☼",
      "description": "Reproduzierbare Daten statt zufällig guter Bilder.",
      "outcome": "Eine Messung aufbauen, referenzieren und auf Qualität prüfen.",
      "recommendedWorlds": [
        "physics",
        "optics-world"
      ],
      "modules": [
        {
          "id": "reference",
          "title": "Die Weißreferenz verstehen",
          "topics": [
            "Rohsignal und Reflektanz",
            "White Target",
            "Sättigung und Geometrie"
          ],
          "status": "pilot",
          "contentId": "reference",
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "me-dark",
          "title": "Dunkelreferenz und Kalibrierung",
          "topics": [
            "Dunkelsignal",
            "Referenzbedingungen",
            "Gerätekalibrierung und Nutzerreferenz"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "reference"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "noise",
          "title": "Mehr Signal, weniger Rauschen",
          "topics": [
            "Rauschquellen",
            "Signal-Rausch-Verhältnis",
            "Mittelung und Grenzen"
          ],
          "status": "pilot",
          "contentId": "noise",
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "illumination",
          "title": "Die passende Beleuchtung",
          "topics": [
            "LED und Halogen",
            "Laborlicht",
            "Sonnenlicht und Schatten"
          ],
          "status": "pilot",
          "contentId": "illumination",
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "me-lab",
          "title": "Ein stabiler Laboraufbau",
          "topics": [
            "Homogenität",
            "Fremdlicht und Flicker",
            "Reproduzierbare Geometrie"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "illumination"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "me-field",
          "title": "Messen im Freien",
          "topics": [
            "Sonnenstand und Wetter",
            "Referenzstrategie",
            "Dokumentation"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "me-lab"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "me-validation",
          "title": "Messqualität nachweisen",
          "topics": [
            "Wiederholbarkeit",
            "Plausibilitätsprüfungen",
            "Unsicherheiten und Metadaten"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "me-field"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "me-case",
          "title": "Praxisfall: Einen Messaufbau retten",
          "topics": [
            "Fehlerbilder",
            "Diagnoseplan",
            "Korrigierte Messung"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "me-validation"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "core",
      "title": "Cubert · Kerntechnologie",
      "group": "Cubert verstehen",
      "icon": "◇",
      "description": "Das Funktionsprinzip hinter dem Produkt.",
      "outcome": "Cubert-Technologie verständlich erklären und ihre Grenzen benennen.",
      "recommendedWorlds": [
        "physics",
        "optics-world"
      ],
      "modules": [
        {
          "id": "co-snapshot",
          "title": "Snapshot und andere HSI-Prinzipien",
          "topics": [
            "Snapshot",
            "Pushbroom und Scanning",
            "Anwendungsbezogene Kompromisse"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "co-lightfield",
          "title": "Lichtfeld und Rekonstruktion",
          "topics": [
            "Mikrooptik",
            "Teilbilder",
            "Vom Rohbild zum Datenwürfel"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "co-snapshot"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "co-sensors",
          "title": "Sensoren verstehen",
          "topics": [
            "Detektorprinzipien",
            "Empfindlichkeit und Rauschen",
            "Spektrale Grenzen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "co-lightfield"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "co-filters",
          "title": "Optische Filter",
          "topics": [
            "Filtertypen",
            "Bandbreite und Transmission",
            "Winkelabhängigkeit"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "co-sensors"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "co-parallax",
          "title": "Parallaxe und räumliche Zuordnung",
          "topics": [
            "Perspektiven",
            "Abstand und Tiefe",
            "Registrierung und Grenzen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "co-filters"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "co-resolution",
          "title": "Räumliche und spektrale Information",
          "topics": [
            "Abtastung",
            "Rekonstruktion",
            "Auflösung versus Kanalzahl"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "co-parallax"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "co-interfaces",
          "title": "USB, Ethernet und GigE Vision",
          "topics": [
            "Transport und Protokoll unterscheiden",
            "Bandbreite und Trigger",
            "Kompatibilität pro Produkt prüfen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "co-resolution"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "co-case",
          "title": "Praxisfall: Technologie erklären",
          "topics": [
            "Nutzenargumentation",
            "Grenzen erklären",
            "Vergleich ohne Überversprechen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "co-interfaces"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "cameras",
      "title": "Cubert · Kameraprodukte",
      "group": "Cubert verstehen",
      "icon": "▣",
      "description": "Die passende Kamera aus dem Portfolio wählen.",
      "outcome": "Eine Produktempfehlung mit aktuellen Daten und Anwendungsanforderungen begründen.",
      "recommendedWorlds": [
        "core",
        "measurement"
      ],
      "modules": [
        {
          "id": "ca-portfolio",
          "title": "Portfolio und Produktpositionierung",
          "topics": [
            "Produktübersicht",
            "Zielanwendungen",
            "Aktuelle Datenblätter"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ca-visnir",
          "title": "VIS/NIR-Kamerafamilien",
          "topics": [
            "Modelle und Varianten",
            "Spektralbereiche",
            "Leistungsmerkmale"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ca-portfolio"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ca-swir",
          "title": "SWIR-Kamerafamilien",
          "topics": [
            "Zielanwendungen",
            "Leistungsmerkmale",
            "Abgrenzung zu VIS/NIR"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ca-visnir"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ca-specs",
          "title": "Datenblätter richtig lesen",
          "topics": [
            "Auflösung und Bildrate",
            "Messbedingungen",
            "Vergleichbarkeit"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ca-swir"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ca-integration",
          "title": "Mechanik, Zubehör und Integration",
          "topics": [
            "Objektive und Montage",
            "Schnittstellen",
            "Lieferumfang"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ca-specs"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ca-selection",
          "title": "Kameraauswahl und Alternativen",
          "topics": [
            "Anforderungsprofil",
            "Auswahlmatrix",
            "Grenzfälle und Eskalation"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ca-integration"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ca-demo",
          "title": "Produktspezifische Demo vorbereiten",
          "topics": [
            "Modell und Version",
            "Aufbau und Referenzierung",
            "Demo-Checkliste"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ca-selection"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ca-lifecycle",
          "title": "Lieferung, Service und Produktlebenszyklus",
          "topics": [
            "Support und Zuständigkeit",
            "Wartung",
            "Änderungen und Verfügbarkeit"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ca-demo"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "uav",
      "title": "UAV · Stitching & Mapping",
      "group": "Cubert verstehen",
      "icon": "✧",
      "description": "Von der Flugplanung zur belastbaren Karte.",
      "outcome": "Einen UAV-Anwendungsfall qualifizieren und die Verarbeitungskette erklären.",
      "recommendedWorlds": [
        "cameras",
        "measurement"
      ],
      "modules": [
        {
          "id": "ua-products",
          "title": "UAV-Produkte und Plattformen",
          "topics": [
            "Produktvarianten",
            "Payload-Kompatibilität",
            "Verantwortungsgrenzen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ua-integration",
          "title": "Payload, Gimbal und Integration",
          "topics": [
            "Montage und Versorgung",
            "Trigger und Zeitbezug",
            "Plattformanforderungen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ua-products"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ua-planning",
          "title": "Flug- und Aufnahmeplanung",
          "topics": [
            "GSD und Flughöhe",
            "Überlappung und Geschwindigkeit",
            "Aufnahmegeometrie"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ua-integration"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ua-position",
          "title": "GNSS, IMU und Georeferenzierung",
          "topics": [
            "Position und Orientierung",
            "Zeitliche Synchronisation",
            "Genauigkeit und Referenzpunkte"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ua-planning"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ua-radiometry",
          "title": "Radiometrie im Flug",
          "topics": [
            "Wechselnde Beleuchtung",
            "Referenzen",
            "Vergleichbarkeit der Aufnahmen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ua-position"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ua-stitching",
          "title": "Stitching und Orthomosaike",
          "topics": [
            "Bildregistrierung",
            "Geometrische Korrekturen",
            "Nähte und Qualitätsprüfung"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ua-radiometry"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ua-mapping",
          "title": "Spektrale Karten und Auswertung",
          "topics": [
            "Spektrale Konsistenz",
            "Klassifikation und Indizes",
            "Validierung und Export"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ua-stitching"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ua-case",
          "title": "Praxisfall: Vom Auftrag zur Karte",
          "topics": [
            "Anforderungsaufnahme",
            "Daten- und Prozessplan",
            "Abnahmekriterien"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ua-mapping"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "cuvis",
      "title": "Software · CUVIS & Next",
      "group": "Cubert verstehen",
      "icon": "⌘",
      "description": "Sicher durch Aufnahme, Auswertung und Assistenz.",
      "outcome": "Den Software-Workflow erklären und eine nachvollziehbare Demo durchführen.",
      "recommendedWorlds": [
        "measurement"
      ],
      "modules": [
        {
          "id": "workflow",
          "title": "Eine Demo, die überzeugt",
          "topics": [
            "Messziel",
            "Aufnahmeablauf",
            "Ergebnis und nächster Schritt"
          ],
          "status": "pilot",
          "contentId": "workflow",
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sw-setup",
          "title": "Installation und Systemumgebung",
          "topics": [
            "Versionen und Kompatibilität",
            "Treiber und Verbindung",
            "Fehlerdiagnose"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "workflow"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sw-capture",
          "title": "Aufnehmen in CUVIS",
          "topics": [
            "Gerätekonfiguration",
            "Referenzen und Modi",
            "Aufnahme und Speicherung"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sw-setup"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sw-data",
          "title": "Daten verstehen und exportieren",
          "topics": [
            "Rohdaten und Verarbeitungsstufen",
            "Metadaten",
            "Formate und Weitergabe"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sw-capture"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sw-next",
          "title": "CUVIS.Next einordnen",
          "topics": [
            "Zweck und Funktionsumfang",
            "Assistierte Workflows",
            "Nutzerkontrolle und Grenzen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sw-data"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sw-workflow",
          "title": "Vom Messziel zum Workflow",
          "topics": [
            "Pipeline-Schritte",
            "Plausibilitätsprüfungen",
            "Reproduzierbarkeit"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sw-next"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sw-trouble",
          "title": "Fehlersuche und Supportübergabe",
          "topics": [
            "Verbindungs- und Datenprobleme",
            "Logs und Reproduktion",
            "Supportpaket"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sw-workflow"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "sdk",
      "title": "Software · SDK & Integration",
      "group": "Cubert verstehen",
      "icon": "⌥",
      "description": "Technische Integrationsgespräche sicher führen.",
      "outcome": "SDK-Anforderungen klären und sauber an die Entwicklung übergeben.",
      "recommendedWorlds": [
        "core",
        "cuvis"
      ],
      "modules": [
        {
          "id": "sdk-basics",
          "title": "Was ist ein SDK?",
          "topics": [
            "SDK, API und GUI",
            "Sprachbindungen",
            "Anwendungsarchitektur"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sdk-acquisition",
          "title": "Gerätesteuerung und Datenaufnahme",
          "topics": [
            "Verbindung und Session",
            "Referenzierung",
            "Datenfluss"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sdk-basics"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sdk-processing",
          "title": "Verarbeitung und Datenzugriff",
          "topics": [
            "Datenwürfel",
            "Metadaten",
            "Verarbeitungsstufen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sdk-acquisition"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sdk-performance",
          "title": "Trigger, Latenz und Durchsatz",
          "topics": [
            "Synchronisation",
            "Puffer und Speicher",
            "Systemgrenzen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sdk-processing"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sdk-deployment",
          "title": "Deployment und Versionsmanagement",
          "topics": [
            "Laufzeitumgebung",
            "Abhängigkeiten",
            "Versionen und Kompatibilität"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sdk-performance"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sdk-case",
          "title": "Praxisfall: Integration qualifizieren",
          "topics": [
            "Zielsystem und Schnittstellen",
            "Anforderungsliste",
            "Technische Übergabe"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sdk-deployment"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "ai",
      "title": "Software · KI & CUVIS.AI",
      "group": "Cubert verstehen",
      "icon": "✺",
      "description": "KI verstehen, bewerten und im Projekt einsetzen.",
      "outcome": "Ein ML-Projekt fundiert qualifizieren und Modellgrenzen verständlich erklären.",
      "recommendedWorlds": [
        "physics",
        "measurement",
        "cuvis"
      ],
      "modules": [
        {
          "id": "ai-taxonomy",
          "title": "KI, Machine Learning und Deep Learning",
          "topics": [
            "Begriffe und Einordnung",
            "Regeln versus Lernen",
            "Geeignete Aufgaben"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-tasks",
          "title": "Lernaufgaben und Problemtypen",
          "topics": [
            "Klassifikation und Regression",
            "Segmentierung",
            "Anomalieerkennung"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-taxonomy"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-data",
          "title": "Daten, Labels und Ground Truth",
          "topics": [
            "Probenstrategie",
            "Annotation",
            "Referenzmethoden und Datenqualität"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-tasks"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-classical",
          "title": "Klassische ML-Verfahren",
          "topics": [
            "Merkmale und Vorverarbeitung",
            "Lineare Modelle und Bäume",
            "Baselines"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-data"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-neuron",
          "title": "Vom Neuron zum neuronalen Netz",
          "topics": [
            "Gewichte und Aktivierungen",
            "Schichten",
            "Repräsentationen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-classical"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-training",
          "title": "Wie neuronale Netze lernen",
          "topics": [
            "Loss",
            "Gradienten und Backpropagation",
            "Optimierung und Hyperparameter"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-neuron"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-architectures",
          "title": "Moderne Netzarchitekturen",
          "topics": [
            "CNNs",
            "Attention und Transformer",
            "Spektrale und räumliche Modelle"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-training"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-generalization",
          "title": "Generalisierung und Datenleckage",
          "topics": [
            "Train, Validation und Test",
            "Trennung nach Proben und Chargen",
            "Overfitting"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-architectures"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-metrics",
          "title": "Modelle richtig bewerten",
          "topics": [
            "Confusion Matrix",
            "Precision, Recall und Fehlalarme",
            "Schwellenwerte"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-generalization"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-shift",
          "title": "Robustheit und Domain Shift",
          "topics": [
            "Neue Chargen und Beleuchtung",
            "Drift",
            "Überwachung und Nachtraining"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-metrics"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-cuvis",
          "title": "Der Workflow in CUVIS.AI",
          "topics": [
            "Daten und Pipeline",
            "Training und Auswertung",
            "Versionierter Funktionsumfang"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-shift"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-runtime",
          "title": "Vom Modell in den Betrieb",
          "topics": [
            "Inferenz und Laufzeit",
            "Hardware und Latenz",
            "Versionierung und Rückfallplan"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-cuvis"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "ai-case",
          "title": "Praxisfall: Eine KI-Anwendung bewerten",
          "topics": [
            "Nutzen und Datenbedarf",
            "Validierungsplan",
            "Leistungsversprechen prüfen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "ai-runtime"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "sales",
      "title": "Vertrieb & Kommunikation",
      "group": "Vertriebspraxis",
      "icon": "↗",
      "description": "Gespräche führen, Bedarf verstehen und souverän auftreten.",
      "outcome": "Kundengespräche strukturieren, Entscheider erkennen, Anfragen qualifizieren und verbindliche nächste Schritte vereinbaren.",
      "recommendedWorlds": [],
      "modules": [
        {
          "id": "sa-conversation",
          "title": "Gespräche vorbereiten und führen",
          "topics": [
            "Gesprächsziel, Vorbereitung und Agenda",
            "Einstieg, Gesprächsstruktur und aktives Zuhören",
            "Gesprächsführung und Zeitmanagement"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-discovery",
          "title": "Bedarf und Problem verstehen",
          "topics": [
            "Vom Produktwunsch zur eigentlichen Aufgabe",
            "Offene Fragen und aktives Zuhören",
            "Erfolg aus Kundensicht verstehen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-conversation"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-roles",
          "title": "Stakeholder und Entscheider erkennen",
          "topics": [
            "Anwender, Einflussnehmer und Budgetverantwortliche",
            "Einkauf und finale Entscheider",
            "Entscheidungsprozess erfragen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-discovery"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-qualification",
          "title": "Anfragen systematisch qualifizieren",
          "topics": [
            "Anwendung und technischer Fit",
            "Budget, Zeitplan und Entscheidungsprozess",
            "Erfolgskriterien und nächster Schritt"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-roles"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-handover",
          "title": "Gespräche abschließen und nachfassen",
          "topics": [
            "Zusammenfassen und Verständnis prüfen",
            "Nächster Schritt mit Termin und Verantwortlichem",
            "CRM-Notiz und Übergabe an Applications"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-qualification"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-presentation",
          "title": "Überzeugend präsentieren",
          "topics": [
            "Zielgruppe, Anlass und Kernbotschaft",
            "Roter Faden, Nutzen und verständliche Visualisierung",
            "Vortrag, Fragen und Verständnisprüfung"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-discovery"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-demo",
          "title": "Demos und POCs strukturieren",
          "topics": [
            "Hypothese",
            "Repräsentative Proben",
            "Abnahme und nächster Schritt"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-presentation",
            "sa-qualification"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-tradeshow",
          "title": "Messegespräche führen",
          "topics": [
            "Kurzer Einstieg und schnelle Relevanzprüfung",
            "Passend vertiefen oder einen Folgetermin vereinbaren",
            "Kontakt dokumentieren und Follow-up festlegen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-conversation",
            "sa-qualification",
            "sa-handover"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-conference",
          "title": "Konferenzen gezielt nutzen",
          "topics": [
            "Fachlicher Gesprächseinstieg und Forschungsinteresse",
            "Beziehungen aufbauen und Gesprächskontext respektieren",
            "Relevante Kontakte und nächste Schritte dokumentieren"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-conversation",
            "sa-discovery",
            "sa-handover"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-objections",
          "title": "Einwände und schwierige Fragen behandeln",
          "topics": [
            "Einwand und offene Frage unterscheiden",
            "Unsicherheit ehrlich benennen",
            "Technische Rückfragen sauber weitergeben"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-discovery"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-value",
          "title": "Nutzen und Wirtschaftlichkeit",
          "topics": [
            "Kundennutzen",
            "Kosten der heutigen Lösung",
            "Wirtschaftlichkeitsannahmen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-qualification"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "sa-offer",
          "title": "Angebot und Verhandlung",
          "topics": [
            "Leistungsumfang",
            "Erwartungen",
            "Verbindliche nächste Schritte"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "sa-objections"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "science",
      "title": "Vertrieb · Wissenschaft",
      "group": "Vertriebspraxis",
      "icon": "⚗",
      "description": "Die Forschungsfrage zum Ausgangspunkt machen.",
      "outcome": "Forschungsprojekte technisch und kaufmännisch qualifizieren.",
      "recommendedWorlds": [
        "sales",
        "cameras"
      ],
      "modules": [
        {
          "id": "research",
          "title": "Wissenschaftler verstehen",
          "topics": [
            "Forschungsfrage",
            "Beschaffungsprozess",
            "Erfolgskriterien"
          ],
          "status": "pilot",
          "contentId": "research",
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "re-method",
          "title": "Methode und Referenzverfahren",
          "topics": [
            "Hypothese und Zielgröße",
            "Goldstandard",
            "Vergleich und Reproduzierbarkeit"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "research"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "re-integration",
          "title": "Datenzugriff und Forschungsworkflow",
          "topics": [
            "Export und SDK",
            "Analyseumgebung",
            "Dokumentation"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "re-method"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "re-funding",
          "title": "Projektbudget und Beschaffung",
          "topics": [
            "Budgetgeber",
            "Fristen",
            "Nutzer und Entscheider"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "re-integration"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "re-poc",
          "title": "Ein wissenschaftlicher POC",
          "topics": [
            "Repräsentative Proben",
            "Evaluationsplan",
            "Grenzen und Folgeversuch"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "re-funding"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "re-case",
          "title": "Rollenspiel: Forschungsgespräch",
          "topics": [
            "Discovery",
            "Messkonzept",
            "Verbindlicher nächster Schritt"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "re-poc"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    },
    {
      "id": "industrial",
      "title": "Vertrieb · Industrial Imaging",
      "group": "Vertriebspraxis",
      "icon": "⚒",
      "description": "Von der Einzelmessung zur Serienanwendung.",
      "outcome": "Endkunden, OEMs und Integratoren mit passenden Fragen und Angeboten adressieren.",
      "recommendedWorlds": [
        "sales",
        "cameras"
      ],
      "modules": [
        {
          "id": "industry",
          "title": "Endkunde, OEM oder Integrator?",
          "topics": [
            "Rollen und Geschäftsmodelle",
            "Kundennutzen",
            "Projektqualifizierung"
          ],
          "status": "pilot",
          "contentId": "industry",
          "prerequisites": [],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "in-process",
          "title": "Prozess und Fehlerbild verstehen",
          "topics": [
            "Materialvariabilität",
            "Fehlerdefinition",
            "Bisherige Prüfung"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "industry"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "in-line",
          "title": "Inline-Anforderungen aufnehmen",
          "topics": [
            "Bandgeschwindigkeit und Bildfeld",
            "Takt und Latenz",
            "Umgebungsbedingungen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "in-process"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "in-roi",
          "title": "Wirtschaftlichkeit und Qualitätsziele",
          "topics": [
            "Ausschuss",
            "False Accept und False Reject",
            "ROI-Annahmen"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "in-line"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "in-oem",
          "title": "OEM und Seriengeschäft",
          "topics": [
            "Design-in",
            "Stückzahlpfad",
            "Produktlebenszyklus"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "in-roi"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "in-integrator",
          "title": "Mit Integratoren zusammenarbeiten",
          "topics": [
            "Schnittstellen",
            "Arbeitsteilung",
            "Abnahme und Support"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "in-oem"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "in-validation",
          "title": "Vom POC zum Pilotbetrieb",
          "topics": [
            "Testdaten und Chargen",
            "Abnahmekriterien",
            "Skalierung"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "in-integrator"
          ],
          "minutes": 10,
          "version": 1
        },
        {
          "id": "in-case",
          "title": "Rollenspiel: Industrieprojekt",
          "topics": [
            "Stakeholder",
            "Technischer und wirtschaftlicher Fit",
            "Übergabeplan"
          ],
          "status": "planned",
          "contentId": null,
          "prerequisites": [
            "in-validation"
          ],
          "minutes": 10,
          "version": 1
        }
      ]
    }
  ],
  "qualifications": [
    {
      "id": "consulting",
      "title": "Eigenständiges Erst- und Bedarfsgespräch",
      "description": "Ein Erstgespräch vom Einstieg bis zur qualifizierten Gesprächsnotiz eigenständig führen.",
      "modules": [
        "light",
        "optics",
        "co-snapshot",
        "ca-portfolio",
        "ca-selection",
        "sa-conversation",
        "sa-discovery",
        "sa-roles",
        "sa-qualification",
        "sa-objections",
        "sa-handover"
      ],
      "qualifications": [],
      "checklist": [
        "Kundenproblem in eigenen Worten zusammenfassen",
        "Relevante technische Eckdaten erfragen",
        "Passende Produktoption begründen und Grenzen nennen",
        "Nächsten Schritt und Verantwortliche vereinbaren"
      ],
      "reviewerRole": "Applications / Sales Lead",
      "status": "planned",
      "assessment": {
        "format": "Rollenspiel plus schriftliche Gesprächsnotiz",
        "task": "Führe ein Erstgespräch mit einem unbekannten Interessenten. Kläre Aufgabe, Erfolgskriterien, Beteiligte und Entscheidungsweg. Erstelle anschließend eine kurze Qualifizierung mit offenen Punkten und einem verbindlichen nächsten Schritt.",
        "criteria": [
          "Ziel und Agenda abstimmen und das Gespräch strukturieren",
          "Zuhören, offene Fragen stellen und das Kundenproblem verstehen",
          "Anwender, Einflussnehmer, Budgetverantwortliche und Entscheider unterscheiden",
          "Anwendung, technischen Fit, Budget und Zeitplan angemessen klären",
          "Wissensgrenzen erkennen und keine unbelegten Zusagen machen",
          "Ergebnisse und nächste Schritte in einer verwertbaren Gesprächsnotiz festhalten"
        ],
        "scope": "Gilt für Erst- und Bedarfsgespräche. Kamerademo, Präsentation, Messe, Konferenz und komplexe Projektqualifizierung haben eigene Praxisprofile."
      },
      "badgeTitle": "Conversation Ready"
    },
    {
      "id": "demo",
      "title": "Kamerademo",
      "description": "Eine nachvollziehbare Kamera-Demo durchführen.",
      "modules": [
        "optics",
        "reference",
        "me-dark",
        "noise",
        "illumination",
        "me-validation",
        "ca-demo",
        "workflow",
        "sw-capture"
      ],
      "qualifications": [],
      "checklist": [
        "Aufbau, Fokus und Beleuchtung kontrollieren",
        "Referenzen und Belichtung fachgerecht wählen",
        "Datenqualität prüfen und Daten mit Metadaten sichern",
        "Ergebnisse und Einschränkungen verständlich erklären"
      ],
      "reviewerRole": "Applications / Sales Lead",
      "status": "planned"
    },
    {
      "id": "qualification",
      "title": "Projektqualifizierung",
      "description": "Ein Projekt entscheidungsreif an Applications übergeben.",
      "modules": [
        "sa-qualification",
        "sa-value",
        "sa-demo",
        "sa-handover",
        "industry",
        "in-line",
        "in-validation"
      ],
      "qualifications": [
        "consulting"
      ],
      "checklist": [
        "Stakeholder und Kaufprozess dokumentieren",
        "Technische Machbarkeit und offene Punkte abgrenzen",
        "Messbare Erfolgskriterien und Probenplan vereinbaren",
        "Budget, Zeitplan und technische Übergabe festhalten"
      ],
      "reviewerRole": "Applications / Sales Lead",
      "status": "planned"
    },
    {
      "id": "research-ready",
      "title": "Wissenschaftsberatung",
      "description": "Einen Forschungsfall bis zum Messkonzept begleiten.",
      "modules": [
        "research",
        "re-method",
        "re-integration",
        "re-funding",
        "re-poc",
        "re-case"
      ],
      "qualifications": [
        "consulting"
      ],
      "checklist": [
        "Forschungsfrage und Referenzmethode klären",
        "Reproduzierbarkeit und Datenzugriff besprechen",
        "POC mit Erfolgskriterien entwerfen",
        "Beschaffungsprozess und nächsten Schritt klären"
      ],
      "reviewerRole": "Applications / Sales Lead",
      "status": "planned"
    },
    {
      "id": "uav-ready",
      "title": "UAV-Projektberatung",
      "description": "UAV-Projekte mit Mess- und Mapping-Anforderungen qualifizieren.",
      "modules": [
        "ua-products",
        "ua-planning",
        "ua-position",
        "ua-radiometry",
        "ua-stitching",
        "ua-mapping",
        "ua-case"
      ],
      "qualifications": [
        "consulting"
      ],
      "checklist": [
        "Anwendungsziel, GSD und Flächenanforderung klären",
        "Payload und Plattform anhand aktueller Dokumentation prüfen",
        "Referenzierung und Verarbeitungskette planen",
        "Kartengüte, Grenzen und Abnahme erklären"
      ],
      "reviewerRole": "Applications / Sales Lead",
      "status": "planned"
    },
    {
      "id": "ai-ready",
      "title": "KI-Projektberatung",
      "description": "Ein Daten- und Validierungskonzept für eine KI-Anwendung erklären.",
      "modules": [
        "ai-taxonomy",
        "ai-data",
        "ai-training",
        "ai-architectures",
        "ai-generalization",
        "ai-metrics",
        "ai-shift",
        "ai-cuvis",
        "ai-case"
      ],
      "qualifications": [
        "qualification"
      ],
      "checklist": [
        "Aufgabe, Ground Truth und Datenbedarf klären",
        "Datenleckage und repräsentative Tests berücksichtigen",
        "Kennzahlen und wirtschaftliche Fehlerfolgen verbinden",
        "Deployment, Drift und Verantwortlichkeiten besprechen"
      ],
      "reviewerRole": "Applications / Sales Lead",
      "status": "planned"
    },
    {
      "id": "integration-ready",
      "title": "Integrationsgespräch",
      "description": "Eine technische Integrationsanfrage strukturiert übergeben.",
      "modules": [
        "co-interfaces",
        "sdk-basics",
        "sdk-acquisition",
        "sdk-performance",
        "sdk-deployment",
        "sdk-case"
      ],
      "qualifications": [
        "consulting"
      ],
      "checklist": [
        "Zielsystem, Schnittstellen und Datenfluss aufnehmen",
        "Trigger, Latenz und Ressourcen klären",
        "Versionen und Lebenszyklus berücksichtigen",
        "Offene Fragen an den richtigen technischen Ansprechpartner übergeben"
      ],
      "reviewerRole": "Applications / Sales Lead",
      "status": "planned"
    },
    {
      "id": "presentation-ready",
      "title": "Kundenpräsentation",
      "description": "Eine zielgruppengerechte Präsentation mit Fragerunde führen.",
      "modules": [
        "sa-presentation",
        "sa-value",
        "sa-objections",
        "ca-portfolio"
      ],
      "qualifications": [
        "consulting"
      ],
      "checklist": [
        "Zielgruppe und Präsentationsziel benennen",
        "Kernbotschaft und roten Faden deutlich machen",
        "Nutzen verständlich erklären und Aussagen belegen",
        "Fragen behandeln und einen nächsten Schritt vereinbaren"
      ],
      "reviewerRole": "Sales Lead / benannter Trainer",
      "status": "planned",
      "badgeTitle": "Presentation Ready",
      "assessment": {
        "format": "Praktische Simulation mit Trainerfeedback",
        "task": "Halte eine kurze Präsentation für eine definierte Kundengruppe und beantworte anschließend Rückfragen.",
        "criteria": [
          "Zielgruppe und Präsentationsziel benennen",
          "Kernbotschaft und roten Faden deutlich machen",
          "Nutzen verständlich erklären und Aussagen belegen",
          "Fragen behandeln und einen nächsten Schritt vereinbaren"
        ],
        "scope": "Eigenes Einsatzprofil; keine Voraussetzung für die Freigabe zum Erst- und Bedarfsgespräch."
      }
    },
    {
      "id": "tradeshow-ready",
      "title": "Messestand & Messegespräche",
      "description": "Standbesucher passend ansprechen und Kontakte qualifizieren.",
      "modules": [
        "sa-tradeshow",
        "sa-qualification",
        "sa-handover",
        "ca-portfolio"
      ],
      "qualifications": [
        "consulting"
      ],
      "checklist": [
        "Kurz und offen in ein Gespräch einsteigen",
        "Relevanz und Anliegen zügig einschätzen",
        "Angemessen vertiefen, übergeben oder abschließen",
        "Lead mit Kontext, Verantwortlichem und Folgetermin dokumentieren"
      ],
      "reviewerRole": "Sales Lead / benannter Trainer",
      "status": "planned",
      "badgeTitle": "Trade Show Ready",
      "assessment": {
        "format": "Praktische Simulation mit Trainerfeedback",
        "task": "Simuliere drei unterschiedliche Standbesuche: relevanter Interessent, unklarer Bedarf und wenig passender Kontakt. Erstelle für den relevanten Kontakt eine verwertbare Lead-Notiz.",
        "criteria": [
          "Kurz und offen in ein Gespräch einsteigen",
          "Relevanz und Anliegen zügig einschätzen",
          "Angemessen vertiefen, übergeben oder abschließen",
          "Lead mit Kontext, Verantwortlichem und Folgetermin dokumentieren"
        ],
        "scope": "Eigenes Einsatzprofil; keine Voraussetzung für die Freigabe zum Erst- und Bedarfsgespräch."
      }
    },
    {
      "id": "conference-ready",
      "title": "Konferenzgespräche",
      "description": "Fachliche Kontakte respektvoll aufbauen und weiterentwickeln.",
      "modules": [
        "sa-conference",
        "research",
        "sa-handover"
      ],
      "qualifications": [
        "consulting"
      ],
      "checklist": [
        "Einen passenden fachlichen Gesprächseinstieg finden",
        "Forschungsinteresse und Anwendung verstehen",
        "Gesprächspartner und Kontext respektieren",
        "Einen sinnvollen Folgekontakt vereinbaren und dokumentieren"
      ],
      "reviewerRole": "Sales Lead / benannter Trainer",
      "status": "planned",
      "badgeTitle": "Conference Ready",
      "assessment": {
        "format": "Praktische Simulation mit Trainerfeedback",
        "task": "Führe ein Gespräch nach einem Vortrag oder einer Postersession. Greife einen fachlichen Punkt auf und entwickle daraus einen passenden nächsten Schritt.",
        "criteria": [
          "Einen passenden fachlichen Gesprächseinstieg finden",
          "Forschungsinteresse und Anwendung verstehen",
          "Gesprächspartner und Kontext respektieren",
          "Einen sinnvollen Folgekontakt vereinbaren und dokumentieren"
        ],
        "scope": "Eigenes Einsatzprofil; keine Voraussetzung für die Freigabe zum Erst- und Bedarfsgespräch."
      }
    }
  ],
  "rewards": [
    {
      "id": "basic",
      "title": "Explorer",
      "icon": "🌱",
      "description": "Dein Begleiter von Anfang an.",
      "rule": {
        "type": "always"
      },
      "visual": "basic"
    },
    {
      "id": "glasses",
      "title": "Spektralbrille",
      "icon": "◉",
      "description": "Ein neuer Blick auf die Welt.",
      "rule": {
        "type": "stars",
        "count": 3
      },
      "visual": "glasses"
    },
    {
      "id": "camera",
      "title": "Kamera",
      "icon": "▣",
      "description": "Bereit für die erste Aufnahme.",
      "rule": {
        "type": "stars",
        "count": 8
      },
      "visual": "camera"
    },
    {
      "id": "coat",
      "title": "Laborkittel",
      "icon": "♧",
      "description": "Für saubere Messungen.",
      "rule": {
        "type": "stars",
        "count": 14
      },
      "visual": "coat"
    },
    {
      "id": "prism",
      "title": "Prisma",
      "icon": "◈",
      "description": "Auszeichnung für Licht & Physik.",
      "rule": {
        "type": "world",
        "id": "physics"
      },
      "visual": "prism"
    },
    {
      "id": "lens",
      "title": "Profi-Objektiv",
      "icon": "◎",
      "description": "Auszeichnung für Kamera & Optik.",
      "rule": {
        "type": "world",
        "id": "optics-world"
      },
      "visual": "lens"
    },
    {
      "id": "target",
      "title": "Referenz-Set",
      "icon": "▧",
      "description": "Auszeichnung für Messpraxis & Beleuchtung.",
      "rule": {
        "type": "world",
        "id": "measurement"
      },
      "visual": "target"
    },
    {
      "id": "sensor",
      "title": "Sensor-Chip",
      "icon": "▦",
      "description": "Auszeichnung für Cubert · Kerntechnologie.",
      "rule": {
        "type": "world",
        "id": "core"
      },
      "visual": "sensor"
    },
    {
      "id": "case",
      "title": "Kamerakoffer",
      "icon": "▣",
      "description": "Auszeichnung für Cubert · Kameraprodukte.",
      "rule": {
        "type": "world",
        "id": "cameras"
      },
      "visual": "case"
    },
    {
      "id": "drone",
      "title": "Mini-Drohne",
      "icon": "✧",
      "description": "Auszeichnung für UAV · Stitching & Mapping.",
      "rule": {
        "type": "world",
        "id": "uav"
      },
      "visual": "drone"
    },
    {
      "id": "terminal",
      "title": "Workflow-Tablet",
      "icon": "⌘",
      "description": "Auszeichnung für Software · CUVIS & Next.",
      "rule": {
        "type": "world",
        "id": "cuvis"
      },
      "visual": "terminal"
    },
    {
      "id": "code",
      "title": "Code-Visier",
      "icon": "⌥",
      "description": "Auszeichnung für Software · SDK & Integration.",
      "rule": {
        "type": "world",
        "id": "sdk"
      },
      "visual": "code"
    },
    {
      "id": "brain",
      "title": "Neural-Visier",
      "icon": "✺",
      "description": "Auszeichnung für Software · KI & CUVIS.AI.",
      "rule": {
        "type": "world",
        "id": "ai"
      },
      "visual": "brain"
    },
    {
      "id": "compass",
      "title": "Gesprächskompass",
      "icon": "↗",
      "description": "Auszeichnung für Vertrieb & Kommunikation.",
      "rule": {
        "type": "world",
        "id": "sales"
      },
      "visual": "compass"
    },
    {
      "id": "scope",
      "title": "Forschungslupe",
      "icon": "⚗",
      "description": "Auszeichnung für Vertrieb · Wissenschaft.",
      "rule": {
        "type": "world",
        "id": "science"
      },
      "visual": "scope"
    },
    {
      "id": "helmet",
      "title": "Industriehelm",
      "icon": "⚒",
      "description": "Auszeichnung für Vertrieb · Industrial Imaging.",
      "rule": {
        "type": "world",
        "id": "industrial"
      },
      "visual": "helmet"
    },
    {
      "id": "crown",
      "title": "Spectral Crown",
      "icon": "♛",
      "description": "Alle Lernwelten abgeschlossen. Frühere Pilot-Abschlüsse bleiben anerkannt.",
      "rule": {
        "type": "all-worlds"
      },
      "visual": "crown"
    }
  ],
  "paths": [
    {
      "id": "foundation",
      "title": "Gemeinsames Fundament",
      "worlds": [
        "physics",
        "optics-world",
        "measurement",
        "core",
        "cameras",
        "cuvis",
        "sales"
      ],
      "description": "Der gemeinsame Weg für das Sales-Team."
    },
    {
      "id": "science-path",
      "title": "Schwerpunkt Wissenschaft",
      "worlds": [
        "science",
        "sdk",
        "ai"
      ],
      "description": "Nach dem Fundament: Forschungsprojekte und Datenworkflows."
    },
    {
      "id": "industry-path",
      "title": "Schwerpunkt Industrial Imaging",
      "worlds": [
        "industrial",
        "sdk",
        "ai"
      ],
      "description": "Nach dem Fundament: Integration, Wirtschaftlichkeit und Seriengeschäft."
    },
    {
      "id": "uav-path",
      "title": "Schwerpunkt UAV",
      "worlds": [
        "uav"
      ],
      "description": "Nach dem Fundament: luftgestützte Messungen und Karten."
    }
  ]
};
