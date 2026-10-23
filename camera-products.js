/* Source snapshot for training, checked 23 October 2026. Not a live quotation catalog. */
const CAMERA_PRODUCTS=[
  {
    "id": "s5",
    "name": "ULTRIS S5",
    "min": 450,
    "max": 850,
    "nx": 290,
    "ny": 275,
    "bands": 51,
    "lens": "fixed",
    "link": "Ethernet",
    "role": "Kompakte VIS/NIR-Konfiguration mit fester Optik",
    "source": [
      "Cubert Knowledge Base · S5 / H5",
      "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/361758721/ULTRIS+5+S5+H5"
    ],
    "note": "S5 und H5 haben laut Profil dasselbe spektrale Ausgaberaster. Die feste Optik ist nicht die Relay-Ausführung.",
    "rate": "Profil: bis 15 fps bei 12 Bit; 24 fps bei 8 Bit. Empfohlener Host erforderlich.",
    "checked": "23.10.2026"
  },
  {
    "id": "h5",
    "name": "ULTRIS H5",
    "min": 450,
    "max": 850,
    "nx": 290,
    "ny": 275,
    "bands": 51,
    "lens": "fixed",
    "link": "Ethernet",
    "role": "VIS/NIR mit Fokus auf höhere Bildrate",
    "source": [
      "Cubert Knowledge Base · S5 / H5",
      "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/361758721/ULTRIS+5+S5+H5"
    ],
    "note": "HFR-Variante mit anderer Anbindung und Versorgung. Anschlüsse nicht vom S5 übernehmen.",
    "rate": "Profil: bis 75 fps bei 12 Bit; der 8-Bit-Eintrag nennt 60 fps. Konkreten Modus vor einer Zusage bestätigen.",
    "checked": "23.10.2026"
  },
  {
    "id": "sr5",
    "name": "ULTRIS SR5",
    "min": 450,
    "max": 850,
    "nx": 290,
    "ny": 275,
    "bands": 51,
    "lens": "relay",
    "link": "Ethernet",
    "role": "VIS/NIR mit gewählter C-Mount-Frontoptik",
    "source": [
      "Cubert Knowledge Base · SR5 / HR5",
      "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/367067137/ULTRIS+5+Relay+SR5+HR5"
    ],
    "note": "Relay und Frontoptik gehören zur kalibrierten Konfiguration. Der effektive Gesamt-FOV ist im Profil noch als in Prüfung markiert.",
    "rate": "Profil: bis 15 fps bei 12 Bit; 24 fps bei 8 Bit. Empfohlener Host erforderlich.",
    "checked": "23.10.2026"
  },
  {
    "id": "hr5",
    "name": "ULTRIS HR5",
    "min": 450,
    "max": 850,
    "nx": 290,
    "ny": 275,
    "bands": 51,
    "lens": "relay",
    "link": "Ethernet",
    "role": "Relay-Ausführung mit höherer Bildrate",
    "source": [
      "Cubert Knowledge Base · SR5 / HR5",
      "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/367067137/ULTRIS+5+Relay+SR5+HR5"
    ],
    "note": "Optik, Stromversorgung und Datenanschluss als eigene Variante planen. Effektiven FOV der Konfiguration prüfen.",
    "rate": "Profil: bis 75 fps bei 12 Bit; 8-Bit-Eintrag 60 fps. Konkreten Modus bestätigen.",
    "checked": "23.10.2026"
  },
  {
    "id": "x20",
    "name": "ULTRIS X20",
    "min": 350,
    "max": 1000,
    "nx": 410,
    "ny": 410,
    "bands": 164,
    "lens": "fixed",
    "link": "Ethernet",
    "role": "Breiter UV/VIS/NIR-Bereich und feines Spektralraster",
    "source": [
      "Cubert Knowledge Base · X20",
      "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/339509356/ULTRIS+X20"
    ],
    "note": "Standardausgabe 164 Kanäle; 4 nm Abtastung ist nicht FWHM. Das Profil unterscheidet 10 nm Filter-FWHM und etwa 15 nm mittlere rekonstruierte Kanal-FWHM.",
    "rate": "Profil: bis 10 Hz bei 12 Bit bzw. 16 Hz bei 8 Bit mit beiden GigE-Anschlüssen; keine Zusage für den Standardanschluss.",
    "checked": "23.10.2026"
  },
  {
    "id": "plus",
    "name": "ULTRIS X20 Plus",
    "min": 350,
    "max": 1000,
    "nx": 410,
    "ny": 410,
    "bands": 164,
    "lens": "fixed",
    "link": "Ethernet",
    "role": "X20-Spektraldaten plus panchromatische Detailinformation",
    "source": [
      "Cubert Knowledge Base · X20 Plus",
      "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/319389697/ULTRIS+X20+Plus"
    ],
    "note": "1886 × 1886 ist die pansharpened Ausgabe. Native Spektraldaten: 410 × 410. Zusätzlicher Sensor und zusätzlicher Datenweg.",
    "rate": "Profil: bis 10 Hz bei 12 Bit bzw. 16 Hz bei 8 Bit mit drei GigE-Verbindungen; Konfiguration und Host prüfen.",
    "checked": "23.10.2026"
  },
  {
    "id": "xmr",
    "name": "ULTRIS XMR",
    "min": 430,
    "max": 910,
    "nx": 1000,
    "ny": 1000,
    "bands": 61,
    "lens": "relay",
    "link": "USB",
    "role": "Hohe native räumliche Spektralauflösung im VNIR",
    "source": [
      "Cubert · ULTRIS XMR",
      "https://cubert-hyperspectral.com/en/ultris-xmr/"
    ],
    "note": "Produktseite: 61 Bänder, 8 nm Sampling und 25 nm FWHM. C-Mount-/Relay-Konfiguration mit passender Kalibrierung prüfen.",
    "rate": "Produktseite: bis 17 Hz bei 8 Bit oder 12 Hz bei 12 Bit. Kein allgemeiner USB3-Vision-Nachweis.",
    "checked": "23.10.2026"
  },
  {
    "id": "swir1",
    "name": "ULTRIS SWIR1 / SR1",
    "min": 980,
    "max": 1650,
    "nx": 200,
    "ny": 200,
    "bands": 38,
    "lens": "relay",
    "link": "USB",
    "role": "SWIR-Konfiguration für Merkmale jenseits des VIS/NIR",
    "source": [
      "Cubert Knowledge Base · SWIR1 / SR1",
      "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/348061697/ULTRIS+SWIR1+SR1"
    ],
    "note": "Bereich uneinheitlich: Website 980–1650 nm, Knowledge Base 980–1664 nm. Die Auswahlübung nutzt bis 1650 nm den gemeinsamen Bereich; den Rand darüber als Klärungsfall. Profil: USB 3.1 Micro-B für Daten und Versorgung.",
    "rate": "Abweichende Quellen: Website bis 80 Hz; Profil bis 130 Hz bei 8 Bit / 86 Hz bei 12 Bit auf empfohlenem Host. Gültige Konfiguration und Rate vor Zusage klären.",
    "checked": "23.10.2026",
    "possibleMax": 1664
  },
  {
    "id": "swir1g",
    "name": "ULTRIS SWIR-1G",
    "min": 980,
    "max": 1664,
    "nx": 200,
    "ny": 200,
    "bands": 38,
    "lens": "front",
    "link": "Ethernet",
    "role": "SWIR mit GigE und dokumentierten HQ-/LQ-Modi",
    "source": [
      "Cubert · ULTRIS SWIR-1G",
      "https://cubert-hyperspectral.com/en/ultris-swir-1g/"
    ],
    "note": "38 Kanäle, 18 nm Sampling; typische FWHM 65 nm bei Standardabtastung. HQ/LQ nicht ohne Bestätigung mit einer Bitzahl gleichsetzen.",
    "rate": "Produktseite: bis 61 fps HQ oder 92 fps LQ. Belichtung, Host und gesamte Verarbeitung begrenzen die tatsächliche Rate.",
    "checked": "23.10.2026"
  }
];
