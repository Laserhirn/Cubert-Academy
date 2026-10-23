/* Original camera training; source snapshot checked 23 October 2026. */
const CAMERA_LESSONS=[
  {
    "id": "ca-portfolio",
    "title": "Das Portfolio nach Messaufgaben ordnen",
    "topics": [
      "Produktfamilien anhand ihrer Rolle unterscheiden",
      "Spektralbereich und Detailbedarf vor dem Modellnamen klären",
      "Quellenstand und Varianten nachvollziehbar festhalten"
    ],
    "scope": "Die Kerntechnologie wurde bereits erklärt. Hier wenden wir sie auf dokumentierte Cubert-Produkte an; Preise, Liefertermine und kundenspezifische Zusagen sind nicht Bestandteil dieses Lernstands.",
    "body": [
      [
        "Eine Produktfamilie ist keine Rangliste",
        "Das passende Produkt ergibt sich aus der Messaufgabe. Ein großer Wellenlängenbereich hilft nicht, wenn das relevante Merkmal außerhalb liegt; ein großes Ausgaberaster hilft nicht automatisch bei fehlendem Signal. Frage deshalb zuerst, was der Kunde unterscheiden oder quantifizieren will. Danach folgen benötigte Wellenlängen, kleinste relevante Struktur, beobachtete Fläche, Bewegung und gewünschte Ausgabe. Erst dann wird ein Kameramodell sinnvoll vergleichbar. Die Produktkarte unten zeigt dokumentierte Bereiche auf einer gemeinsamen Achse. Bewege den Marker auf die Wellenlänge eines Merkmals. Ein markierter Treffer bedeutet zunächst nur, dass dieser Punkt im angegebenen Bereich liegt. Er beweist noch keine ausreichende Bandbreite, Empfindlichkeit oder Materialtrennung."
      ],
      [
        "Vier Rollen als erste Orientierung",
        "Die ULTRIS-5-Familie deckt den Bereich von 450 bis 850 nm ab und bietet Standard- sowie schnellere Varianten. X20 und X20 Plus erweitern die spektrale Abdeckung auf 350 bis 1000 nm. XMR setzt im Bereich 430 bis 910 nm einen Schwerpunkt auf hohe native räumliche Spektralauflösung. Die SWIR-Konfigurationen erweitern die Auswahl in Richtung etwa 980 bis 1664 nm, wobei für die ältere SWIR1 unterschiedliche obere Grenzen dokumentiert sind. Diese Rollen sind eine Orientierung, keine vollständige Produktspezifikation. Es kann mehrere plausible Kandidaten geben. Ein engeres, gut versorgtes Messfenster kann für eine konkrete Aufgabe völlig ausreichen. Eine universell beste Kamera lässt sich aus der Liste nicht ableiten."
      ],
      [
        "Varianten im Namen ernst nehmen",
        "S5 und H5 sind nicht bloß zwei Schreibweisen. Ebenso unterscheidet eine Relay-Ausführung mit gewählter Frontoptik sich von einer Ausführung mit fester Optik. Das Plus beim X20 verweist auf zusätzliche panchromatische Information und eine mögliche Fusion; es macht nicht jeden ausgegebenen Bildpunkt zu einem unabhängig gemessenen hochaufgelösten Spektrum. Auch SWIR1 und SWIR-1G werden hier als eigene Konfigurationen geführt. Ähnliche Namen erlauben keine automatische Übertragung von Bildrate, Anschluss oder Lieferumfang. Schreibe eine Empfehlung deshalb mit genauer Variante und geplanter Optik auf. Das reduziert Missverständnisse zwischen Vertrieb, Applikation, Produktion und Kunde schon vor dem Angebot."
      ],
      [
        "Aus einer Aussage eine prüfbare Auswahl machen",
        "Ein Forschungsinstitut sagt: „Wir möchten Pflanzenzustand untersuchen.“ Frage nach dem erwarteten Merkmal und vorhandenen Referenzmessungen. Geht es um ein Merkmal um 700 nm, können mehrere VIS/NIR-Kandidaten infrage kommen. Wird zwingend ein Bereich um 1450 nm benötigt, ändert sich die Vorauswahl deutlich. Die Anwendungsbezeichnung allein entscheidet das nicht. Frage außerdem, ob ganze Blätter oder kleine Strukturen beurteilt werden und ob sich die Szene bewegt. Diese Informationen gehören in ein kurzes Anforderungsprofil. Eine gute Erstempfehlung benennt Kandidaten, den Grund ihrer Auswahl und den Versuch, der offene Punkte klärt. Sie behauptet noch keinen nachgewiesenen Projekterfolg."
      ],
      [
        "Den Quellenstand mitliefern",
        "Die Karten sind ein Lernstand vom 23.10.2026. Jede Karte verlinkt ihre Quelle und nennt wichtige Bedingungen. Sie sind kein automatisch aktualisierter Bestellkatalog. Vor einer konkreten Zusage prüfst du das aktuelle freigegebene Datenblatt und die betreffende Konfiguration. Wenn Website und Knowledge Base voneinander abweichen, notierst du beide Angaben samt Definition. Manchmal beschreibt eine Zahl einen Filter, eine andere den rekonstruierten Kanal; manchmal ist tatsächlich eine Klärung nötig. Verwende für eine harte Anforderung nicht stillschweigend den günstigeren Wert. Für Sonderwünsche außerhalb des dokumentierten Portfolios wird eine technische Machbarkeit geprüft. Diese Anfrage ist weder ein verfügbares Standardprodukt noch eine bereits bestätigte Lieferzusage."
      ]
    ],
    "exercise": "Ein Kunde nennt „Pflanzenanalyse“ und fordert die beste Kamera. Welche vier Informationen brauchst du vor einer Vorauswahl?",
    "modelAnswer": "Messziel beziehungsweise Merkmal, benötigter Wellenlängenbereich, relevante Objektstruktur und Bildfeld sowie Bewegung beziehungsweise Zeitbudget. Danach Konfiguration und einen geeigneten Nachweis klären.",
    "take": "Die Produktwahl beginnt bei der Aufgabe. Modellname, Variante und Quellenstand gehören gemeinsam in die Empfehlung.",
    "q": [
      [
        "Was bedeutet ein Treffer in der Wellenlängenkarte?",
        [
          "Jede benötigte Bildrate ist garantiert",
          "Der Punkt liegt im dokumentierten Bereich",
          "Die Materialtrennung ist bewiesen"
        ],
        1,
        "Bereichsabdeckung ist nur ein erstes Auswahlkriterium."
      ],
      [
        "Welche Familie ist für ein zwingendes Merkmal um 1450 nm zuerst zu prüfen?",
        [
          "Ausschließlich X20",
          "Ausschließlich S5",
          "SWIR-Konfigurationen"
        ],
        2,
        "1450 nm liegt außerhalb der hier dokumentierten VIS/NIR-Bereiche."
      ],
      [
        "Warum die genaue Variante festhalten?",
        [
          "Alle Varianten sind identisch",
          "Der Name ersetzt einen Test",
          "Optik, Schnittstelle und Betriebsbedingungen können sich unterscheiden"
        ],
        2,
        "Ähnliche Produktnamen sind keine vollständigen Konfigurationsangaben."
      ],
      [
        "Was sagt „Pflanzenanalyse“ allein aus?",
        [
          "Immer SWIR",
          "Noch nicht genug für eine eindeutige Kameraauswahl",
          "Immer XMR"
        ],
        1,
        "Das konkrete Merkmal und die Messbedingungen entscheiden."
      ],
      [
        "Wie mit abweichenden Spezifikationen umgehen?",
        [
          "Definitionen und Quellen prüfen, offene Punkte klären",
          "Den größeren Wert auswählen",
          "Den kleineren Wert als garantiert erklären"
        ],
        0,
        "Zunächst klären, ob dieselbe Größe und Konfiguration gemeint ist."
      ],
      [
        "Ist ein diskutierter Sonderwunsch sofort ein Standardprodukt?",
        [
          "Nein, Machbarkeit und Lieferbarkeit sind zu bestätigen",
          "Ja, wenn er technisch plausibel klingt",
          "Ja, sobald der Vertrieb ihn erwähnt"
        ],
        0,
        "Technische Möglichkeit und bestätigtes Angebot sind unterschiedliche Schritte."
      ]
    ],
    "experiment": "ca-portfolio",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert Knowledge Base · Kameraprofile",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/313917441/Ultris+Camera+Profiles"
      ],
      [
        "Cubert Knowledge Base · S5 / H5",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/361758721/ULTRIS+5+S5+H5"
      ],
      [
        "Cubert Knowledge Base · X20",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/339509356/ULTRIS+X20"
      ],
      [
        "Cubert · ULTRIS XMR",
        "https://cubert-hyperspectral.com/en/ultris-xmr/"
      ],
      [
        "Cubert Knowledge Base · SWIR1 / SR1",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/348061697/ULTRIS+SWIR1+SR1"
      ],
      [
        "Cubert · ULTRIS SWIR-1G",
        "https://cubert-hyperspectral.com/en/ultris-swir-1g/"
      ]
    ],
    "visualChapters": [
      0
    ]
  },
  {
    "id": "ca-visnir",
    "title": "VIS/NIR: S5, H5, X20, Plus und XMR vergleichen",
    "topics": [
      "Die ULTRIS-5-Varianten auseinanderhalten",
      "X20 Plus und XMR bei räumlichen Anforderungen unterscheiden",
      "Bandzahl, Bereich und Messaufgabe gemeinsam bewerten"
    ],
    "scope": "Kein erneuter Optik-Grundkurs: Wir vergleichen konkrete Konfigurationsrollen. Die Grafik stellt native Spektralraster getrennt von einer fusionierten Ausgabe dar.",
    "body": [
      [
        "Die kompakte Familie richtig aufteilen",
        "Die dokumentierte ULTRIS-5-Ausgabe umfasst 290 × 275 räumliche Orte und 51 Spektralkanäle. S5 und H5 besitzen laut Kameraprofil eine feste Optik. SR5 und HR5 sind die Relay-Ausführungen mit gewählter C-Mount-Frontoptik. Die H-Varianten zielen auf höhere Bildraten, benötigen aber eine entsprechend geplante Anbindung und Versorgung. Die gleiche spektrale Rastergröße bedeutet deshalb nicht, dass alle vier Varianten gleich integriert werden. Für ein kleines Laborfeld kann eine feste Optik passend sein; ein vorgegebenes Bildfeld bei festem Abstand kann eine andere Optikkonfiguration erfordern. Prüfe die reale Geometrie, bevor du die kompaktere Gehäuseform zum entscheidenden Argument machst."
      ],
      [
        "X20: Bereich und spektrale Information",
        "X20 und X20 Plus bieten in der dokumentierten Standardausgabe 410 × 410 × 164 Werte im Bereich 350 bis 1000 nm. Damit kommen sie auch für Aufgaben infrage, die den engeren Bereich der 5er-Familie verlassen. Die Zahl 164 ist jedoch keine eigenständige Aussage über die Trennbarkeit eines Merkmals. Abtastschritt, spektrale Antwort, Signalqualität und benötigte Wellenlängen gehören dazu. Im Vergleichsdiagramm ist die größere räumliche Rasterzahl sichtbar, aber nicht als pauschale Qualitätsrangliste dargestellt. Ein sinnvoller Test hält Bildfeld und Probe vergleichbar. Wird bei zwei Kameras eine andere Objektfläche erfasst, kann die gleiche Pixelzahl eine ganz andere Abtastung am Objekt bedeuten."
      ],
      [
        "Was das Plus tatsächlich ergänzt",
        "Der X20 Plus kombiniert den Spektralsensor mit einem panchromatischen Sensor. Aus der zusätzlichen räumlichen Information kann eine pansharpened Ausgabe mit 1886 × 1886 Orten entstehen. Die native Spektralausgabe bleibt dabei 410 × 410. Diese Unterscheidung ist wichtig, wenn ein Kunde unabhängige spektrale Informationen an sehr kleinen Strukturen benötigt. Pansharpening kann eine nützliche Darstellung oder Auswertung ermöglichen, seine spektrale Eignung muss aber für die Aufgabe gezeigt werden. In der Grafik kannst du die Fusion einblenden. Die gestrichelte Fläche kennzeichnet die andere Herkunft der Detailinformation. Sie wird absichtlich nicht mit dem nativen Raster zu einer einzigen Rangzahl vermischt."
      ],
      [
        "XMR für hohe native Ortsinformation prüfen",
        "Die XMR-Produktseite nennt eine native räumliche Spektralauflösung von 1000 × 1000 bei 61 Bändern und einem Bereich von 430 bis 910 nm. Eine Anforderung nach vielen nativen Spektralorten führt damit zu einer anderen Überlegung als eine Anforderung nach dem breitesten Bereich. Der XMR ist nicht allein deshalb für jedes Projekt besser als der X20. Ein benötigtes Merkmal bei 970 nm läge außerhalb des hier dokumentierten XMR-Bereichs. Außerdem müssen Optik, Signal, Datenweg und Verarbeitung zusammenpassen. Frage nach dem kleinsten Merkmal im vorgesehenen Bildfeld. Ein größeres Raster kann hilfreich sein; die tatsächliche Trennbarkeit prüfst du dennoch anhand geeigneter Strukturen und Proben."
      ],
      [
        "Ein faires Vergleichsgespräch führen",
        "Zeige dem Kunden zuerst den spektralen Bereich und danach das räumliche Raster. Benenne beim X20 Plus ausdrücklich, ob du die native oder fusionierte Ausgabe zeigst. Halte Belichtung, Beleuchtung, Geometrie und Verarbeitung des Vergleichs fest. Eine höhere Bildrate aus einem anderen Digitalisierungsmodus darf nicht ohne Erläuterung neben die höchste Qualität eines anderen Modus gestellt werden. Auch die Angabe „C-Mount“ genügt nicht als vollständige Optikempfehlung. Am Ende stehen zwei nachvollziehbare Kandidaten oder ein klarer Ausschlussgrund, nicht nur ein Favorit. Wenn die Anforderung noch unklar ist, wird zunächst das benötigte Merkmal mit repräsentativen Proben untersucht und anschließend das Portfolio eingegrenzt."
      ]
    ],
    "exercise": "Ein Kunde vergleicht X20 Plus mit XMR und sagt: „1886 ist mehr als 1000, also liefert der Plus mehr unabhängige Spektralorte.“ Wie antwortest du?",
    "modelAnswer": "1886 × 1886 bezeichnet beim Plus die pansharpened Ausgabe. Native Spektraldaten liegen bei 410 × 410; beim XMR nennt die Produktseite 1000 × 1000. Die zusätzliche Information und ihre Eignung müssen getrennt bewertet werden.",
    "take": "Native Spektralinformation und Fusion sind unterschiedliche Eigenschaften. Vergleiche sie im gleichen Bildfeld und an derselben Aufgabe.",
    "q": [
      [
        "Welche 5er-Varianten sind laut Profil Relay-Ausführungen?",
        [
          "S5 und H5",
          "Nur X20 Plus",
          "SR5 und HR5"
        ],
        2,
        "Die Relay-Varianten ermöglichen eine gewählte Frontoptik mit passender Kalibrierung."
      ],
      [
        "Welche native Spektralgröße ist für X20 Plus dokumentiert?",
        [
          "410 × 410",
          "1886 × 1886",
          "1000 × 1000"
        ],
        0,
        "1886 × 1886 ist die pansharpened Ausgabe."
      ],
      [
        "Welche native Spektralgröße nennt die XMR-Produktseite?",
        [
          "410 × 410",
          "290 × 275",
          "1000 × 1000"
        ],
        2,
        "Diese Angabe ist getrennt von Sensorpixelzahl und Exportformat zu betrachten."
      ],
      [
        "Ein zwingendes Merkmal bei 970 nm passt laut Lernkarte …",
        [
          "Zum X20-Bereich, nicht zum XMR-Standardbereich",
          "Zum XMR-Standardbereich, nicht zum X20",
          "Zu allen 5er-Varianten"
        ],
        0,
        "XMR ist hier mit 430–910 nm, X20 mit 350–1000 nm dokumentiert."
      ],
      [
        "Was braucht ein fairer räumlicher Vergleich?",
        [
          "Nur die größte Dateigröße",
          "Vergleichbares Bildfeld und nachvollziehbare Verarbeitung",
          "Nur dieselbe Bildschirmbreite"
        ],
        1,
        "Die Abtastung am Objekt hängt vom Bildfeld ab."
      ],
      [
        "Bedeutet mehr native Pixel automatisch die beste Kamera?",
        [
          "Ja, auch ohne ausreichendes Licht",
          "Nein, Bereich und weitere Anforderungen müssen passen",
          "Ja, unabhängig vom Messziel"
        ],
        1,
        "Die Aufgabe bestimmt die Prioritäten."
      ]
    ],
    "experiment": "ca-visnir",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert Knowledge Base · S5 / H5",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/361758721/ULTRIS+5+S5+H5"
      ],
      [
        "Cubert Knowledge Base · SR5 / HR5",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/367067137/ULTRIS+5+Relay+SR5+HR5"
      ],
      [
        "Cubert Knowledge Base · X20",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/339509356/ULTRIS+X20"
      ],
      [
        "Cubert Knowledge Base · X20 Plus",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/319389697/ULTRIS+X20+Plus"
      ],
      [
        "Cubert · ULTRIS XMR",
        "https://cubert-hyperspectral.com/en/ultris-xmr/"
      ]
    ],
    "visualChapters": [
      2
    ]
  },
  {
    "id": "ca-swir",
    "title": "SWIR: Merkmale, Varianten und Betriebsmodi",
    "topics": [
      "SWIR als gezielte spektrale Erweiterung einordnen",
      "SWIR1 und SWIR-1G getrennt betrachten",
      "HQ/LQ, Bereichsgrenzen und Beleuchtung richtig prüfen"
    ],
    "scope": "Grundlagen zu Wellenlängen und Lichtquellen werden angewendet. Beispielmerkmale dienen der Vorauswahl und sind keine garantierte Materialklassifikation.",
    "body": [
      [
        "Wann der zusätzliche Bereich relevant wird",
        "Viele Materialien, die im sichtbaren Bild ähnlich aussehen, können bei längeren Wellenlängen unterschiedliche spektrale Verläufe zeigen. SWIR kann deshalb zusätzliche Information für Material- oder Feuchtefragen liefern. Der Anwendungsname allein beweist diesen Nutzen nicht. Frage nach dem konkreten Merkmal, den relevanten Proben und den Bedingungen, unter denen es nachweisbar sein soll. Ein Merkmal bei 1450 nm führt zu einer anderen Vorauswahl als eines bei 700 nm. Die Bereichsgrafik zeigt diese Einordnung. Ein grüner Treffer bedeutet keine Konzentrationsmessung und keine sichere Materialidentifikation. Dafür müssen Kontrast, Signal, Referenzen und Auswertemethode anhand passender Proben zusammen geprüft werden."
      ],
      [
        "Die beiden Bezeichnungen nicht vermischen",
        "Für SWIR1 / SR1 nennt die Knowledge Base ein Raster von 200 × 200 × 38. Die aktuelle SWIR-1G-Produktseite nennt ebenfalls 200 × 200 Orte und 38 Kanäle, zusätzlich GigE und konkrete HQ-/LQ-Bildraten. Gleiche Rasterzahlen bedeuten nicht automatisch gleiche Elektronik, Anbindung oder Betriebsbedingungen. Führe die Produkte deshalb als eigene Konfigurationen. Aus der neueren Produktseite folgt außerdem weder die Abkündigung der älteren Ausführung noch ihre Lagerverfügbarkeit. Diese kaufmännischen Informationen müssen separat bestätigt werden. Eine klare Anfrage enthält die genaue Bezeichnung, den gewünschten Modus, die Optik und die Integration. So vermeidest du, versehentlich eine Eigenschaft der einen Ausführung für die andere zu versprechen."
      ],
      [
        "Bereichsgrenzen als echte Prüffrage behandeln",
        "Für die ältere SWIR1 stehen 980–1650 nm auf der Website und 980–1664 nm in der Knowledge Base. Die Lernkarte behandelt bis 1650 nm den gemeinsamen Bereich. Eine Anforderung darüber bis 1664 nm wird als Klärungsfall markiert. Die SWIR-1G-Seite nennt ausdrücklich 980–1664 nm. Selbst eine übereinstimmende nominelle Grenze bedeutet nicht, dass jedes Merkmal direkt am Rand mit gleicher Qualität nutzbar ist. Eine endliche Bandbreite kann Information über einen größeren Bereich gewichten. Prüfe deshalb die konkrete Antwortfunktion und den Abstand wichtiger Merkmale zum Rand. In der Übung kannst du genau diese Grenze verschieben und siehst den Unterschied zwischen Kandidat, Ausschluss und offener Angabe."
      ],
      [
        "Bildrate, Modus und Licht gemeinsam planen",
        "Die SWIR-1G-Seite nennt maximal 61 fps in HQ und 92 fps in LQ. Diese Modi dürfen nicht ohne zusätzliche Bestätigung mit einer bestimmten Bitzahl gleichgesetzt werden. Die maximale Rate setzt außerdem passende Belichtung und einen geeigneten Datenweg voraus. Für 92 Aufnahmen pro Sekunde beträgt das Zeitintervall im Mittel rund 10,9 ms. Eine unüberlappte Belichtung von beispielsweise 50 ms passt nicht in jedes dieser Intervalle. Das beweist noch keinen vollständigen Gerätetakt, zeigt aber eine grundlegende Grenze. Die Übung rechnet dieses Zeitbudget aus und kennzeichnet ihre Vereinfachung. Für die reale Auslegung sind Gerätemodus, Auslesen, Beleuchtung und Verarbeitung gemeinsam zu prüfen."
      ],
      [
        "Einen geeigneten SWIR-Versuch vorbereiten",
        "Ein heller sichtbarer Eindruck sagt wenig darüber aus, wie viel Licht im gewünschten SWIR-Band ankommt. Prüfe die Quelle, die eingesetzte Optik und das Referenzsignal im relevanten Bereich. Achte auf den Zustand der Probe, etwa Änderungen während längerer Beleuchtung. Definiere mehrere Probenvarianten, Wiederholungen und ein geeignetes Referenzverfahren, wenn eine quantitative Aussage benötigt wird. Aus einem einzelnen Unterschied zweier Kurven folgt noch keine robuste Klassifikation. Eine belastbare Empfehlung beschreibt die gewählte SWIR-Konfiguration und die dafür geprüften Bedingungen. Offene Punkte werden konkret benannt: beispielsweise ausreichendes Signal am Randband oder stabiler Durchsatz im gewünschten Modus. Diese Punkte lassen sich gezielt testen und anschließend bewerten."
      ]
    ],
    "exercise": "Ein Kunde verlangt ein Merkmal bei 1660 nm und 90 fps. Welche Aussagen sind mit den Lernkarten möglich, welche müssen geprüft werden?",
    "modelAnswer": "SWIR-1G nennt 1664 nm als Grenze und bis 92 fps LQ, aber die Kombination mit Belichtung und Signal ist nicht bewiesen. Bei SWIR1 sind Bereich und Bildrate zwischen Website und Profil uneinheitlich: 80 Hz gegenüber 130/86 Hz je Digitalisierung. Die 90-fps-Anforderung muss für die konkrete Konfiguration bestätigt werden. Konkrete Konfiguration und Messnachweis klären.",
    "take": "SWIR erweitert die mögliche Information. Variante, Betriebsmodus und nutzbares Signal entscheiden über die Anwendung.",
    "q": [
      [
        "Was beweist ein SWIR-Bereichstreffer nicht?",
        [
          "Dass ein weiterer Test sinnvoll sein kann",
          "Eine sichere Materialtrennung",
          "Dass der nominale Bereich den Punkt umfasst"
        ],
        1,
        "Bereichsabdeckung ist kein vollständiger Messnachweis."
      ],
      [
        "Welche obere SWIR1-Grenze ist in den Quellen uneinheitlich?",
        [
          "1650 gegenüber 1664 nm",
          "350 gegenüber 430 nm",
          "850 gegenüber 910 nm"
        ],
        0,
        "Für eine harte Anforderung am Rand ist eine Klärung nötig."
      ],
      [
        "Was nennt die SWIR-1G-Seite als maximale Modi?",
        [
          "Immer 92 fps unabhängig vom Modus",
          "61 fps HQ und 92 fps LQ",
          "92 fps HQ und 61 fps LQ"
        ],
        1,
        "Die Rate gehört zur Modusangabe."
      ],
      [
        "Darf LQ ohne weitere Quelle gleich 8 Bit gesetzt werden?",
        [
          "Nur wenn die Datei klein ist",
          "Ja, grundsätzlich",
          "Nein"
        ],
        2,
        "Die Begriffe dürfen nicht ohne Bestätigung gleichgesetzt werden."
      ],
      [
        "Welche zusätzliche Prüfung braucht eine SWIR-Lichtquelle?",
        [
          "Signal im benötigten SWIR-Bereich",
          "Nur sichtbare Helligkeit",
          "Nur die Farbe des Lampengehäuses"
        ],
        0,
        "Das Auge bewertet den erforderlichen Bereich nicht zuverlässig."
      ],
      [
        "Beweist SWIR-1G automatisch die Abkündigung von SWIR1?",
        [
          "Ja",
          "Nein",
          "Ja, sobald beide ähnlich heißen"
        ],
        1,
        "Lebenszyklus und Verfügbarkeit müssen separat bestätigt werden."
      ]
    ],
    "experiment": "ca-swir",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert Knowledge Base · SWIR1 / SR1",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/348061697/ULTRIS+SWIR1+SR1"
      ],
      [
        "Cubert · ULTRIS SWIR 1",
        "https://cubert-hyperspectral.com/en/ultris-swir-1/"
      ],
      [
        "Cubert · ULTRIS SWIR-1G",
        "https://cubert-hyperspectral.com/en/ultris-swir-1g/"
      ]
    ],
    "visualChapters": [
      3
    ]
  },
  {
    "id": "ca-specs",
    "title": "Datenblätter: die richtige Zahl mit der richtigen Bedingung",
    "topics": [
      "Native, fusionierte und Sensorauflösung auseinanderhalten",
      "Filter-FWHM, Kanal-FWHM und Sampling getrennt lesen",
      "Maximalwerte und Quellenabweichungen nachvollziehbar behandeln"
    ],
    "scope": "Die technischen Begriffe sind bekannt. Hier üben wir das Lesen realer Angaben und das Dokumentieren einer belastbaren Produktaussage.",
    "body": [
      [
        "Jede Zahl braucht ein Bezugsobjekt",
        "Eine Zahl wie 1000 × 1000 kann den Sensor, ein rekonstruiertes Raster oder eine vergrößerte Ausgabe beschreiben. Lies deshalb die Überschrift und den Verarbeitungsschritt mit. Beim X20 Plus unterscheiden wir native Spektraldaten und pansharpened Ausgabe. Beim XMR nennt die Produktseite eine native räumliche Spektralauflösung. Diese Angaben dürfen nicht in einer Vergleichstabelle unter einer unkommentierten Spalte „Auflösung“ zusammenfallen. Die Übung lässt dich technische Karten den passenden Kategorien zuordnen. Begründe jede Zuordnung in einem Satz. Damit übst du eine Fähigkeit, die auch dann hilfreich bleibt, wenn ein Modell später andere Zahlen erhält: erst die Bedeutung klären, dann den Wert vergleichen."
      ],
      [
        "Ein konkretes X20-Beispiel lesen",
        "Das X20-Profil unterscheidet physische Filter mit 10 nm FWHM, ein Standardraster von 4 nm und durchschnittlich etwa 15 nm FWHM der resultierenden Kanäle. Diese drei Angaben beschreiben nicht dieselbe Eigenschaft. Sie sind daher nicht automatisch ein Widerspruch. Eine verkürzte Werbeaussage kann sich auf den Filter beziehen, während die Anwendung die gesamte rekonstruierte Antwort benötigt. Frage bei einer Anforderung nach schmalen Merkmalen ausdrücklich nach der relevanten Systemantwort. Verwende nicht den Abtastschritt als Auflösungsnachweis. Wenn du eine Zahl weitergibst, schreibe die Bezugsgröße direkt dazu. So bleibt nachvollziehbar, ob eine Aussage für das optische Bauteil, die Verarbeitung oder die Ausgabe gilt."
      ],
      [
        "Die Bedingungen einer Bildrate mitlesen",
        "Das X20-Profil nennt Spitzenraten unter Verwendung beider GigE-Verbindungen des Spektralsensors. Beim Plus kommt der panchromatische Datenweg hinzu. Eine solche Angabe darf nicht ohne Bedingung als Standardleistung jeder Verkabelung ausgegeben werden. Digitalisierung, Belichtung und empfohlener Rechner gehören ebenfalls in den Vergleich. Manche Verarbeitungsschritte verändern zusätzlich die Latenz, ohne dieselbe Wirkung auf den Durchsatz zu haben. Trage deshalb neben der Rate den Modus und den geprüften Aufbau ein. Ein besonders hoher Wert aus einer Tabelle ist eine Ausgangsinformation, kein Ersatz für einen längeren Test mit der geplanten Speicherung und Auswertung. Die endgültige Aussage muss zum vorgesehenen Betrieb passen."
      ],
      [
        "Dateigröße und Übertragung nicht gleichsetzen",
        "Ein einzelner gespeicherter Datensatz kann Referenzen und Kalibrierdaten enthalten. Werden mehrere Aufnahmen in einer Sitzung zusammengefasst, müssen gemeinsame Informationen nicht für jedes Bild erneut gespeichert werden. Deshalb kann der durchschnittliche Speicherbedarf pro Aufnahme kleiner werden. Daraus folgt nicht automatisch eine gleich große Änderung der übertragenen Kameranutzlast. Auch der rekonstruierte Würfel kann erst auf dem Rechner entstehen. Wenn ein Kunde nach Speicher oder Bandbreite fragt, kläre den Datenzustand und den Ort der Verarbeitung. Halte Rohdaten, Ausgabeformat und Archivstruktur auseinander. Eine Rechnung mit einer unbekannten Dateidefinition kann zwar genau aussehen, aber trotzdem die falsche Frage beantworten."
      ],
      [
        "Abweichungen gezielt auflösen",
        "Findest du zwei unterschiedliche Werte, prüfe zunächst Modell, Version, Modus, Einheit und Definition. Eine andere Verarbeitung oder Optik kann die Abweichung erklären. Bleibt sie offen, formuliere eine konkrete Rückfrage: „Welche nutzbare obere Wellenlängengrenze gilt für diese Seriennummer und diese Kalibrierung?“ Das ist hilfreicher als „Die Datenblätter widersprechen sich“. Die Lernkarten zeigen einen solchen offenen Randbereich bei SWIR1. In einer Empfehlung wird die ungeklärte Eigenschaft nicht als erfülltes Muss-Kriterium gezählt. Dokumentiere die Antwort später mit Quelle und Datum. So entsteht eine nachvollziehbare Entscheidung, die ein Kollege auch ohne das ursprüngliche Gespräch verstehen und überprüfen kann."
      ]
    ],
    "exercise": "Formuliere eine saubere X20-Spezifikation für Sampling und Bandbreite aus dem Profil. Welche Zahl wäre bei einer Trennbarkeitsfrage besonders zu prüfen?",
    "modelAnswer": "Standard-Sampling 4 nm; physische Filter-FWHM 10 nm; mittlere FWHM der resultierenden Kanäle etwa 15 nm laut Profil. Für Trennbarkeit ist die relevante System-/Kanalantwort samt Signal und Merkmalform zu prüfen.",
    "take": "Eine Produktaussage besteht aus Wert, Bezugsgröße, Bedingung und Quelle.",
    "q": [
      [
        "Welche Angabe ist beim X20 das Standard-Sampling?",
        [
          "10 nm Filter-FWHM",
          "Etwa 15 nm Kanal-FWHM",
          "4 nm"
        ],
        2,
        "Der Abstand der Ausgabekanäle ist eine eigene Größe."
      ],
      [
        "Warum sind 10 und etwa 15 nm im X20-Profil nicht automatisch widersprüchlich?",
        [
          "Weil FWHM keine Einheit hat",
          "Sie beziehen sich auf Filter und resultierende Kanäle",
          "Weil jede Zahl gleich gültig ist"
        ],
        1,
        "Der Verarbeitungsschritt und die Bezugsgröße unterscheiden sich."
      ],
      [
        "Was gehört zu einer Maximalbildrate?",
        [
          "Nur das Produktfoto",
          "Nur die Zahl",
          "Modus, Verbindung und Systembedingungen"
        ],
        2,
        "Ohne Bedingungen ist der Wert für die Anwendung unvollständig."
      ],
      [
        "Eine kleine mittlere Sitzungsdateigröße beweist …",
        [
          "Eine höhere spektrale Auflösung",
          "Eine entsprechend schnellere Kamera",
          "Nicht automatisch dieselbe Kameranutzlast"
        ],
        2,
        "Gemeinsame Referenzen und Verarbeitung verändern die Dateidefinition."
      ],
      [
        "Wie wird ein ungeklärtes Muss-Kriterium behandelt?",
        [
          "Als offen, nicht als erfüllt",
          "Als unwichtig",
          "Als erfüllt, wenn ein guter Wert existiert"
        ],
        0,
        "Die Vorauswahl muss Unsicherheit sichtbar halten."
      ],
      [
        "Welche Rückfrage ist am hilfreichsten?",
        [
          "Kann man den größeren Wert nehmen?",
          "Welche Zahl klingt besser?",
          "Welche Angabe gilt für die konkrete Konfiguration und Definition?"
        ],
        2,
        "Eine konkrete Rückfrage lässt sich technisch beantworten."
      ]
    ],
    "experiment": "ca-specs",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert Knowledge Base · X20",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/339509356/ULTRIS+X20"
      ],
      [
        "Cubert Knowledge Base · X20 Plus",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/319389697/ULTRIS+X20+Plus"
      ],
      [
        "Cubert Knowledge Base · SWIR1 / SR1",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/348061697/ULTRIS+SWIR1+SR1"
      ],
      [
        "Cubert · ULTRIS SWIR 1",
        "https://cubert-hyperspectral.com/en/ultris-swir-1/"
      ]
    ],
    "visualChapters": [
      0
    ]
  },
  {
    "id": "ca-integration",
    "title": "Konfiguration: Kamera, Optik und Datenweg zusammen planen",
    "topics": [
      "Festoptik und Relay im Aufbau unterscheiden",
      "Kalibrierung an die vollständige Optikkonfiguration binden",
      "Mechanik, Versorgung und Host in die Übergabe aufnehmen"
    ],
    "scope": "Hier geht es um Produktkonfiguration. Detaillierte Pinbelegungen, Installationsbefehle und Freigaben bleiben bei der aktuellen Anleitung des konkreten Systems.",
    "body": [
      [
        "Die Kamera ist Teil einer Messkette",
        "Eine passende Spektralabdeckung reicht nicht, wenn die Probe nicht ins Bild passt oder das System nicht dauerhaft Daten liefert. Plane deshalb Kamera, Frontoptik, Beleuchtung, Montage, Versorgung, Datenweg, Rechner und Software als zusammenhängenden Aufbau. In der Grafik wählst du eine Produktkonfiguration und prüfst, welche Teile bereits passen und welche offen sind. Die Darstellung ist eine Lernhilfe, kein vollständiger Lieferumfang. Sie soll dich daran erinnern, die Schnittstellen zwischen den Komponenten zu klären. Ein Integrator benötigt besonders die Bedingungen, unter denen die gewünschte Leistung erreichbar ist. Eine bloße Liste von Kameraeigenschaften lässt diese Zusammenhänge oft offen."
      ],
      [
        "Festoptik und Relay unterscheiden",
        "Die Profile beschreiben S5/H5 sowie X20/Plus als Systeme mit fester Optik. Bei SR5/HR5, XMR und SWIR1 kommen Relay-Konfigurationen mit ausgewählter Frontoptik zum Einsatz. Die Anleitung zum Objektivwechsel erklärt, dass der Relay-Adapter fest zum System gehört und nicht entfernt werden darf. Er ist nicht mit der wechselbaren Frontoptik gleichzusetzen. Kamera, Adapter und Objektiv bilden eine charakterisierte Kombination. Wird eine andere Frontoptik eingesetzt, muss die passende Kalibrierung verwendet beziehungsweise deren Gültigkeit geklärt werden. Eine mechanisch passende Verbindung allein beweist keine unveränderte radiometrische Aussage. Prüfe vor einer Demo daher nicht nur das Objektivlabel, sondern auch die tatsächlich geladene Konfiguration."
      ],
      [
        "Bildfeld und Einbauraum verifizieren",
        "Ein Objektivangebot mit nominellem FOV beantwortet noch nicht jede Frage zum nutzbaren Bildfeld des Gesamtsystems. Im Relay-Profil ist der effektive Gesamt-FOV teilweise noch als in Prüfung markiert. Verwende für eine verbindliche Auslegung deshalb bestätigte Systemwerte oder eine geeignete Messung. Kläre Arbeitsabstand, Objektgröße, Höhenbereich, Befestigung und zugängliche Einstellringe. Für die mechanische Planung gibt es Zeichnungen und 3D-Dateien in der Knowledge Base. Prüfe, ob Objektiv, Stecker, Biegeradien und Montageadapter im verfügbaren Raum mitgedacht sind. Die bloße Länge des Kameragehäuses beschreibt nicht den gesamten Einbauraum. Auch eine später nötige Wartung sollte ohne unnötigen Umbau möglich sein."
      ],
      [
        "Versorgung und Datenweg modellbezogen planen",
        "Übertrage Anschlüsse und Versorgung nicht zwischen ähnlich benannten Varianten. Die Profile unterscheiden etwa die Standard- und HFR-Ausführungen. Für die konkrete Verdrahtung werden die freigegebenen Zeichnungen und Pinbelegungen verwendet. Die Lernübung nennt deshalb bewusst keine universellen Anschlussbelegungen. Beim XMR ist außerdem die USB-Hoststruktur relevant: Mehrere Kameras am selben Controller können sich Ressourcen teilen. Bei Ethernet müssen Rechner, Adapter und Netzwerkkonfiguration zum Datenstrom passen. GigE bedeutet nicht allein eine bestätigte GigE-Vision-Integration in jede Zielsoftware. Halte fest, wie die Kamera angebunden wird, wo die Rekonstruktion läuft und welche Daten die Anwendung tatsächlich erhält."
      ],
      [
        "Ein vollständiges Konfigurationspaket übergeben",
        "Eine gute Übergabe enthält Modell und Variante, Optik, Kalibrierdaten, gewünschte Messgeometrie, Versorgung, Datenkabel, Host und Softwarestand. Ergänze die geplante Beleuchtung und die Referenzen. Ungeklärte Komponenten werden mit einer konkreten Verantwortlichkeit und einem Prüfschritt versehen. Du musst im Vertrieb nicht jede elektrische Detailfrage selbst beantworten; du musst erkennen, welche Information für eine sichere und funktionierende Integration fehlt. Die Übung markiert erst dann einen vollständigen Vorbereitungsstand, wenn alle gezeigten Punkte geklärt sind. Das ist keine technische Freigabe des realen Aufbaus. Diese erfolgt anhand der tatsächlichen Konfiguration, passender Dokumentation und eines nachvollziehbaren Funktionstests."
      ]
    ],
    "exercise": "Ein Kunde möchte an einer Relay-Kamera nur das Objektiv wechseln und mit der bisherigen Radiance-Kalibrierung weiterarbeiten. Was klärst du?",
    "modelAnswer": "Frontoptik und fest installierten Relay-Adapter unterscheiden. Prüfen, ob für die neue Kombination eine passende Kalibrierung vorliegt; alte radiometrische Gültigkeit nicht voraussetzen. Die konkrete Anleitung und technische Freigabe nutzen.",
    "take": "Die vollständige Konfiguration ist die Einheit der Integration – einschließlich ihrer Kalibrierung.",
    "q": [
      [
        "Ist der Relay-Adapter dasselbe wie die wechselbare Frontoptik?",
        [
          "Nein",
          "Nur beim Export",
          "Ja"
        ],
        0,
        "Die Anleitung behandelt den Adapter als festen Bestandteil."
      ],
      [
        "Was bei einem Objektivwechsel prüfen?",
        [
          "Nur die Gehäusefarbe",
          "Passende Kalibrierung der neuen Kombination",
          "Nur den Dateinamen des letzten Bilds"
        ],
        1,
        "Die radiometrische Charakterisierung hängt von der Optik ab."
      ],
      [
        "Was gehört zum Einbauraum?",
        [
          "Auch Objektiv, Stecker und Kabelwege",
          "Nur die Pixelzahl",
          "Nur die Sensorgröße"
        ],
        0,
        "Die komplette mechanische Integration benötigt Platz."
      ],
      [
        "Mehrere XMR am selben USB-Controller …",
        [
          "Verdoppeln automatisch die Bandbreite",
          "Sind immer unabhängig",
          "Können sich Ressourcen teilen"
        ],
        2,
        "Die Hosttopologie ist Teil der Leistungsprüfung."
      ],
      [
        "Was beweist GigE allein nicht?",
        [
          "Die Notwendigkeit eines Datenwegs",
          "GigE-Vision-Kompatibilität mit jeder Software",
          "Eine Ethernet-basierte Verbindung"
        ],
        1,
        "Anschluss und Anwendungsstandard sind verschiedene Ebenen."
      ],
      [
        "Was enthält eine gute technische Übergabe?",
        [
          "Die vollständige Konfiguration und offene Prüfpunkte",
          "Nur die gewünschte Bildrate",
          "Nur einen Produktnamen"
        ],
        0,
        "Technik muss die tatsächlichen Betriebsbedingungen kennen."
      ]
    ],
    "experiment": "ca-integration",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert Knowledge Base · Objektivwechsel bei Relay-Kameras",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/387547141/Changing+Lenses+Relay+Cameras+only"
      ],
      [
        "Cubert Knowledge Base · SR5 / HR5",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/367067137/ULTRIS+5+Relay+SR5+HR5"
      ],
      [
        "Cubert Knowledge Base · S5 / H5",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/361758721/ULTRIS+5+S5+H5"
      ],
      [
        "Cubert Knowledge Base · X20",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/339509356/ULTRIS+X20"
      ],
      [
        "Cubert Knowledge Base · Mehrkamerabetrieb",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/418381825/Multi-Camera+Setups+with+SDK"
      ],
      [
        "Cubert Knowledge Base · Zeichnungen und 3D-Modelle",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/347078657/Technical+Drawings+3D+Models"
      ]
    ],
    "visualChapters": [
      1
    ]
  },
  {
    "id": "ca-selection",
    "title": "Kameraauswahl: Muss-Kriterien vor Lieblingsmodell",
    "topics": [
      "Harte Anforderungen von Präferenzen trennen",
      "Kandidaten mit nachvollziehbaren Gründen auswählen",
      "Unbekannte Werte und Ausschlussgründe sichtbar halten"
    ],
    "scope": "Die Auswahlhilfe prüft nur dokumentierten Bereich, natives Raster, Optiktyp und Transportfamilie. Sie ist keine vollständige technische oder kaufmännische Produktfreigabe.",
    "body": [
      [
        "Die Aufgabe in Kriterien übersetzen",
        "Schreibe zuerst auf, was zwingend erfüllt sein muss. Beispiele sind ein benötigter spektraler Bereich, eine Mindestzahl nativer Orte im vorgesehenen Bildfeld oder eine festgelegte Integration. Danach kommen Präferenzen wie ein kleineres Gehäuse oder ein vertrauter Anschluss. Eine Präferenz darf kein nicht erfülltes Muss-Kriterium verdecken. Frage auch, ob eine Vorgabe wirklich technisch nötig oder lediglich aus einem früheren System übernommen wurde. Die Übung erlaubt vier Anforderungsgruppen. Jede Produktkarte erklärt, welches davon erfüllt, ausgeschlossen oder noch offen ist. Es gibt absichtlich keine scheinpräzise Gesamtpunktzahl. Eine Kamera wird nicht passend, weil drei weiche Vorteile einen harten spektralen Ausschluss rechnerisch überstimmen."
      ],
      [
        "Den benötigten Bereich vollständig prüfen",
        "Ein einzelner Wellenlängenmarker genügt nicht, wenn eine Auswertung mehrere Merkmale oder einen Bereich benötigt. Trage deshalb untere und obere Grenze ein. Eine Kamera muss den gesamten geforderten Bereich abdecken. Benötigt die Aufgabe gleichzeitig 700 und 1450 nm, deckt keine der hier geführten Einzelkonfigurationen beide Punkte ab. Die ehrliche Antwort ist dann keine erzwungene Empfehlung. Prüfe das Messziel, alternative Merkmale oder eine technisch zu bewertende Mehrsystemlösung. Dabei entstehen neue Anforderungen an Zuordnung und Integration. Die Auswahlhilfe zeigt den fehlenden Treffer deutlich. Ein Grenzbereich mit widersprüchlicher Dokumentation wird dagegen als offen behandelt und nicht stillschweigend als sicherer Treffer gezählt."
      ],
      [
        "Räumliche Anforderungen mit dem Bildfeld verbinden",
        "Die Mindestgröße des nativen Rasters in der Übung ist eine vereinfachte Anforderung. In einem echten Projekt leitest du sie aus Bildfeld, kleinster Struktur und benötigtem Nachweis ab. Ein Raster von 1000 × 1000 bedeutet bei einem sehr großen Bildfeld nicht automatisch, dass ein kleines Teil ausreichend abgetastet wird. Beim X20 Plus zählt die Auswahlhilfe die native Spektralgröße, nicht die größere fusionierte Ausgabe. Das ist bewusst konservativ für eine ausdrücklich native Anforderung. Wenn die Anwendung mit Fusion arbeiten darf, wird dieser Weg separat anhand realer Daten bewertet. Die Parameter sollten also die tatsächliche Aufgabe beschreiben, nicht eine versehentlich zu streng formulierte Wunschzahl."
      ],
      [
        "Integration als eigener Filter",
        "Eine gewünschte Frontoptik schränkt die Vorauswahl anders ein als eine feste Optik. Ebenso kann eine Vorgabe für die Transportfamilie bestimmte Kandidaten ausschließen oder zu einer offenen Frage führen. Das SWIR1-Profil nennt USB 3.1 Micro-B; die SWIR-1G-Seite nennt GigE. Die ähnliche Bezeichnung ist also kein Grund, den Datenweg gleichzusetzen. Fehlt eine relevante Angabe bei einer Sonderkonfiguration, bleibt dieses Kriterium offen. Die Auswahlhilfe bestätigt außerdem keine Vision-Standardkonformität. Eine USB- oder Ethernet-Auswahl beschreibt nur diese grobe Ebene. Geschwindigkeit, elektrische Triggerung, Rechenleistung und Betriebssystem müssen anschließend geprüft werden. Halte die Grenzen der Hilfe im Gespräch sichtbar. Eine übersichtliche Grafik ist hilfreich, darf aber nicht mehr Gewissheit vortäuschen, als ihre Eingangsdaten tatsächlich tragen."
      ],
      [
        "Eine Empfehlung begründen und testen",
        "Wähle einen Kandidaten und formuliere drei Sätze: welche Anforderungen er laut Quelle erfüllt, welche Punkte noch offen sind und welcher Versuch die Entscheidung absichert. Benenne gegebenenfalls einen zweiten Kandidaten mit einem anderen sinnvollen Kompromiss. Ein Forschungsprojekt kann zunächst mehrere Bereiche erkunden; ein OEM benötigt zusätzlich eine stabile Konfiguration und einen nachvollziehbaren Änderungsprozess. Preis, Lieferbarkeit und vertragliche Eigenschaften werden vor dem Angebot separat bestätigt. Falls kein Kandidat übrig bleibt, eskalierst du mit dem Anforderungsprofil an die Technik. Du änderst die Muss-Kriterien nicht heimlich, um doch noch eine grüne Karte zu erhalten. Die Entscheidung bleibt für Kunde und Kollegen nachvollziehbar."
      ]
    ],
    "exercise": "Ein Kunde verlangt 700–1450 nm in einer Kamera und mindestens 900 × 900 native Spektralorte. Was zeigt die Auswahlhilfe und wie gehst du weiter?",
    "modelAnswer": "Kein hier geführter Kandidat deckt den ganzen Bereich ab. Anforderung und relevante Merkmale klären, dann alternative Messkonzepte technisch prüfen. Kein Modell als passend darstellen, nur weil einzelne Kriterien erfüllt sind.",
    "take": "Ein Kandidat erfüllt die geprüften Kriterien. Eine Empfehlung braucht zusätzlich einen nachvollziehbaren Nachweis der offenen Anforderungen.",
    "q": [
      [
        "Wie werden Muss-Kriterien behandelt?",
        [
          "Sie zählen nur als ein Punkt unter vielen",
          "Sie sind nach der Modellwahl unwichtig",
          "Sie dürfen nicht durch weiche Vorteile aufgewogen werden"
        ],
        2,
        "Ein harter Ausschluss bleibt ein Ausschluss."
      ],
      [
        "Welche Bereichsprüfung ist bei 700–1450 nm nötig?",
        [
          "Ein Punkt irgendwo im Bereich reicht",
          "Nur die Mitte zählt",
          "Der ganze Bereich muss abgedeckt sein"
        ],
        2,
        "Mehrere benötigte Merkmale müssen gemeinsam erfasst werden können."
      ],
      [
        "Welche Größe zählt bei einer nativen Anforderung für X20 Plus?",
        [
          "1886 × 1886",
          "410 × 410",
          "Jede gewünschte Exportgröße"
        ],
        1,
        "Fusion wird hier bewusst getrennt bewertet."
      ],
      [
        "Was bedeutet eine unbekannte Schnittstellenangabe?",
        [
          "Automatisch nicht lieferbar",
          "Klärungsbedarf",
          "Automatisch erfüllt"
        ],
        1,
        "Unbekannt ist weder ein bestätigter Treffer noch ein technischer Gegenbeweis."
      ],
      [
        "Was bedeutet eine grüne Karte in dieser Übung?",
        [
          "Die hier geprüften Kriterien passen",
          "Liefertermin und Preis sind garantiert",
          "Das gesamte Projekt ist freigegeben"
        ],
        0,
        "Die Auswahlhilfe hat einen ausdrücklich begrenzten Umfang."
      ],
      [
        "Was tun, wenn kein Modell passt?",
        [
          "Das Lieblingsmodell trotzdem anbieten",
          "Anforderung und alternative Konzepte technisch prüfen",
          "Den Spektralbereich still kürzen"
        ],
        1,
        "Eine ehrliche Lücke ist ein sinnvoller Ausgangspunkt für weitere Klärung."
      ]
    ],
    "experiment": "ca-selection",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert Knowledge Base · Kameraprofile",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/313917441/Ultris+Camera+Profiles"
      ],
      [
        "Cubert · ULTRIS XMR",
        "https://cubert-hyperspectral.com/en/ultris-xmr/"
      ],
      [
        "Cubert Knowledge Base · X20 Plus",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/319389697/ULTRIS+X20+Plus"
      ],
      [
        "Cubert Knowledge Base · SWIR1 / SR1",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/348061697/ULTRIS+SWIR1+SR1"
      ],
      [
        "Cubert · ULTRIS SWIR-1G",
        "https://cubert-hyperspectral.com/en/ultris-swir-1g/"
      ]
    ],
    "visualChapters": [
      0
    ]
  },
  {
    "id": "ca-demo",
    "title": "Die Produktempfehlung in einer Demo belegen",
    "topics": [
      "Eine Demo auf konkrete Nachweise ausrichten",
      "Konfiguration, Referenzen und Auswertung vorbereiten",
      "Beobachtung und Zusage sauber trennen"
    ],
    "scope": "Messpraxis wird vorausgesetzt. Dieses Modul organisiert eine produktspezifische Demo und ist keine Wiederholung aller Messschritte.",
    "body": [
      [
        "Mit einer Kundenfrage beginnen",
        "Eine gute Demo beantwortet eine konkrete Frage. Zum Beispiel: Sind zwei relevante Probenvarianten unter den geplanten Bedingungen unterscheidbar? Oder bleibt eine kleine Struktur im vorgesehenen Bildfeld ausreichend erkennbar? „Ein schönes Spektralbild zeigen“ ist noch kein Erfolgskriterium. Formuliere vorab, welche Beobachtung die Frage stützt und welche sie offenlässt. Die Demo sollte den ausgewählten Kandidaten unter nachvollziehbaren Bedingungen zeigen. Wenn ein anderes Objektiv oder ein anderer Modus verwendet wird als später vorgesehen, gehört das ausdrücklich dazu. So wird die Vorführung zu einem sinnvollen technischen Zwischenschritt und nicht nur zu einer überzeugenden, aber schwer übertragbaren Momentaufnahme."
      ],
      [
        "Das konkrete System dokumentieren",
        "Erfasse Modell, Variante, Optik, relevante Kalibrierdaten und Softwarestand. Beim X20 Plus notierst du zusätzlich, ob die gezeigte Ausgabe nativ oder pansharpened ist. Bei SWIR-1G gehört der HQ-/LQ-Modus zur Bildratenangabe. Bei Relay-Systemen prüfst du die passende Frontoptik und Kalibrierung. Diese Notizen müssen nicht während des Gesprächs jede Minute sichtbar sein; sie sollen nachher eine Wiederholung ermöglichen. Kontrolliere außerdem Versorgung, Datenweg und ausreichend Speicherplatz. Eine Demo kann fachlich gute Daten liefern und trotzdem scheitern, wenn der Rechner den geplanten Lauf nicht stabil verarbeitet. Führe deshalb einen kurzen vollständigen Probelauf mit derselben Verarbeitung durch."
      ],
      [
        "Die Messkette vor der Interpretation prüfen",
        "Nutze die bereits erlernte Messpraxis: geeignete Beleuchtung, gültige Referenzen, ungesättigte Daten, passende räumliche Zuordnung und sinnvolle Auswerteregionen. Wähle zuerst einen übersichtlichen Aufbau, bevor du schwierige Randbedingungen ergänzst. Die Übung zeigt sechs Vorbereitungsbausteine und gibt Rückmeldung, welche Information noch fehlt. Die Häkchen sind eine persönliche Vorbereitungshilfe. Sie bestätigen weder die tatsächliche Qualität der aufgenommenen Daten noch eine Trainerfreigabe. Eine reale Prüfung braucht die Beobachtung am System. Gerade bei einem Grenzmerkmal solltest du nicht nur eine gemittelte Kurve zeigen, sondern auch relevante Streuung und räumliche Unterschiede betrachten. Sonst können problematische Teilbereiche im Mittel verschwinden."
      ],
      [
        "Repräsentative Fälle und Grenzen zeigen",
        "Verwende nicht nur die beiden leichtesten Proben. Ergänze ähnliche Materialien, unterschiedliche Oberflächen oder die vorgesehenen Höhen und Bewegungen, soweit sie zur Fragestellung gehören. Halte Vergleichsbedingungen fest. Eine Demo mit einer ruhenden, ebenen Probe belegt nicht automatisch eine schnelle Sortierung unebener Teile. Wenn der Kunde eine solche Übertragung wünscht, wird ein weiterer Test vereinbart. Zeige außerdem, welche Verarbeitung aktiv ist. Glättung, Fusion oder Klassifikation können sinnvoll sein, verändern aber die Interpretation der sichtbaren Ausgabe. Eine transparente Erklärung stärkt die Aussage, weil der Kunde nachvollziehen kann, welche Information gemessen und welche daraus berechnet wurde."
      ],
      [
        "Ergebnisse als nächste Entscheidung übergeben",
        "Schließe mit einer kurzen Zusammenfassung: Fragestellung, getestete Konfiguration, beobachtetes Ergebnis und offene Punkte. Nenne bei einem positiven Ergebnis die tatsächlich geprüften Bedingungen. Bei einem unklaren Ergebnis beschreibst du den nächsten Versuch, statt die Unsicherheit mit einer stärkeren Behauptung zu überdecken. Speichere die Daten und die notwendigen Metadaten so, dass die Applikation daran weiterarbeiten kann. Vereinbare, wer welche Proben oder Informationen liefert und wie der Erfolg im nächsten Schritt bewertet wird. Die Demo wird dadurch ein Bestandteil der Projektqualifizierung. Die praktische Freigabe, eine Kamera eigenständig vorzuführen, bleibt weiterhin an das entsprechende Praxisprofil und eine zusätzliche Trainerprüfung gebunden."
      ]
    ],
    "exercise": "Deine Demo zeigt eine gute Trennung an zwei ruhenden Proben. Der Kunde möchte daraus eine Garantie für bewegtes Schüttgut ableiten. Wie fasst du das Ergebnis zusammen?",
    "modelAnswer": "Die Trennung wurde nur unter den getesteten Bedingungen gezeigt. Bewegung, Höhenverteilung und repräsentative Varianten sind zusätzliche Prüfungen. Ich vereinbare dafür einen Versuch mit Kriterien und dokumentierter Konfiguration.",
    "take": "Eine gute Demo beantwortet eine Frage und macht den nächsten Entscheidungsschritt klar.",
    "q": [
      [
        "Was steht am Anfang einer guten Demo?",
        [
          "Nur die höchste Bildrate",
          "Eine konkrete Kundenfrage und ein Erfolgskriterium",
          "Nur ein möglichst buntes Bild"
        ],
        1,
        "Die Vorführung soll eine Entscheidung unterstützen."
      ],
      [
        "Was beim X20 Plus ausdrücklich dokumentieren?",
        [
          "Nur die Zahl im Dateinamen",
          "Native oder pansharpened Ausgabe",
          "Nur die Monitorgröße"
        ],
        1,
        "Die Herkunft der räumlichen Information beeinflusst die Aussage."
      ],
      [
        "Was beweisen die Vorbereitungs-Häkchen der Übung?",
        [
          "Die bestandene Trainerprüfung",
          "Nur den eingetragenen Vorbereitungsstand",
          "Eine reale Messfreigabe"
        ],
        1,
        "Selbstauskunft ersetzt keinen Nachweis am System."
      ],
      [
        "Belegt eine ruhende ebene Probe automatisch bewegtes Schüttgut?",
        [
          "Nein",
          "Ja, sobald zwei Kurven getrennt sind",
          "Ja, bei derselben Kamera"
        ],
        0,
        "Andere Randbedingungen benötigen eigene Prüfung."
      ],
      [
        "Wie mit aktiver Verarbeitung umgehen?",
        [
          "Sie benennen und für die Interpretation berücksichtigen",
          "Sie grundsätzlich verschweigen",
          "Sie mit Rohdaten gleichsetzen"
        ],
        0,
        "Verarbeitung kann sinnvoll sein, muss aber nachvollziehbar bleiben."
      ],
      [
        "Was gehört in die Ergebnisübergabe?",
        [
          "Nur ein Screenshot ohne Bedingungen",
          "Nur „Demo erfolgreich“",
          "Frage, Konfiguration, Beobachtung und offene Punkte"
        ],
        2,
        "Der nächste Schritt muss aus den Ergebnissen ableitbar sein."
      ]
    ],
    "experiment": "ca-demo",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert Knowledge Base · Fokus und Bandzuordnung",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/346521601/Focus+Adjustment+and+Alignment+of+spectral+Bands"
      ],
      [
        "Cubert Knowledge Base · Objektivwechsel bei Relay-Kameras",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/387547141/Changing+Lenses+Relay+Cameras+only"
      ],
      [
        "Cubert Knowledge Base · X20 Plus",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/319389697/ULTRIS+X20+Plus"
      ],
      [
        "Cubert · ULTRIS SWIR-1G",
        "https://cubert-hyperspectral.com/en/ultris-swir-1g/"
      ],
      [
        "Cubert Knowledge Base · Troubleshooting",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/337281027"
      ]
    ],
    "visualChapters": [
      2
    ]
  },
  {
    "id": "ca-lifecycle",
    "title": "Nach dem Verkauf: Lieferung, Support und Änderungen",
    "topics": [
      "Den bestätigten Lieferumfang nachvollziehbar übergeben",
      "Supportfälle mit reproduzierbaren Informationen vorbereiten",
      "Änderungen an Konfiguration und Software kontrolliert bewerten"
    ],
    "scope": "Dieses Modul erklärt einen vorgeschlagenen Arbeitsablauf. Es erfindet keine Cubert-Servicefristen, Garantiezusagen oder festen Ansprechpartner.",
    "body": [
      [
        "Die bestätigte Konfiguration übergeben",
        "Mit der Bestellung beginnt eine neue Phase der Kundenbeziehung. Vergleiche den bestätigten Lieferumfang mit der vorgesehenen Anwendung: genaue Kameravariante, Optik, Kalibrierdaten, vereinbartes Zubehör und Softwarezugang. Diese Punkte werden aus dem tatsächlichen Angebot beziehungsweise Auftrag entnommen, nicht aus einer allgemeinen Produktkarte geraten. Ein optional abgebildetes Objektiv ist nicht automatisch im Lieferumfang enthalten. Ebenso folgt aus einem Demonstrationsaufbau keine Zusage, dass alle dort verwendeten Teile mitgeliefert werden. Eine klare Übergabe benennt außerdem, welche Komponenten der Kunde selbst bereitstellt. Damit vermeidest du, dass ein funktionsfähiges Produkt beim ersten Einsatz an einem fehlenden oder unpassenden Bestandteil scheitert."
      ],
      [
        "Den ersten funktionierenden Stand festhalten",
        "Nach der Inbetriebnahme sollte ein nachvollziehbarer Ausgangszustand vorliegen: Seriennummer, relevante Konfiguration, Software- und Treiberstände sowie ein einfacher Referenzdatensatz mit Messbedingungen. Dieses Paket erleichtert spätere Vergleiche. Wenn sich das Ergebnis verändert, lässt sich prüfen, ob zugleich Optik, Beleuchtung, Rechner oder Verarbeitung geändert wurden. Der Ausgangszustand ist kein Beweis für jede spätere Anwendung. Er zeigt, unter welchen dokumentierten Bedingungen das System funktioniert hat. Die Zeitlinie in der Übung verbindet Übergabe, Abnahme, Betrieb, Änderung und Support. Wähle eine Phase und entscheide, welche Information dort die nächste sinnvolle Handlung ermöglicht. Die Beispiele sind fiktiv und keine verbindlichen Unternehmensprozesse."
      ],
      [
        "Einen Supportfall reproduzierbar beschreiben",
        "„Die Kamera ist schlecht“ enthält noch keine prüfbare Fehlerbeschreibung. Hilfreich sind das erwartete und das beobachtete Verhalten, der Zeitpunkt des Auftretens, die genaue Konfiguration sowie Schritte zur Wiederholung. Ergänze passende Logdateien und einen geeigneten Datensatz, soweit eine Weitergabe erlaubt ist. Bei Kundendaten werden Freigabe und notwendiger Umfang vorher geklärt. Prüfe zunächst die aktuelle Knowledge Base und nutze den vorgesehenen Supportweg. Der Vertrieb muss nicht jede technische Ursache selbst diagnostizieren. Er kann aber verhindern, dass eine Meldung ohne Modell, Seriennummer oder nachvollziehbare Beobachtung mehrfach zurückgefragt werden muss. Eine präzise Übergabe spart dem Kunden und dem technischen Team Zeit."
      ],
      [
        "Änderungen als überprüfbare Ereignisse behandeln",
        "Ein neues Objektiv, ein geänderter Treiber oder ein Softwareupdate kann einen funktionierenden Ablauf beeinflussen. Dokumentiere deshalb die Änderung und prüfe die relevanten Mess- und Integrationskriterien erneut. Bei einer anderen Optikkonfiguration gehört die Kalibriergültigkeit ausdrücklich dazu. Ein Update sollte nicht allein deshalb als ungeeignet gelten, weil es neu ist, und nicht allein deshalb als unkritisch, weil es vom gleichen Hersteller stammt. Entscheidend sind die konkret betroffenen Funktionen und der Nachweis im vorgesehenen Aufbau. Für einen OEM wird ein abgestimmter Änderungsprozess besonders wichtig. Verfügbarkeit, angekündigte Produktänderungen und zugesagte Unterstützung werden anhand bestätigter Informationen behandelt, nicht aus einer Websiteänderung abgeleitet."
      ],
      [
        "Zusagen und Empfehlungen auseinanderhalten",
        "Wartungs- oder Rekalibrierungshinweise können in Unterlagen als Empfehlung stehen. Das ist nicht automatisch eine individuell vereinbarte Pflicht, Garantie oder Servicefrist. Ebenso muss eine aktuelle Lieferzeit für die konkrete Konfiguration bestätigt werden. Nenne dem Kunden deshalb klar, ob du eine allgemeine Empfehlung, ein dokumentiertes Messergebnis oder eine bestätigte vertragliche Zusage wiedergibst. Wenn eine Information fehlt, formuliere eine konkrete Rückfrage und halte das Ergebnis fest. Die Lernwelt endet damit nicht bei Produktnamen, sondern bei einer verantwortbaren Begleitung über den Lebenszyklus. Ein guter Vertrieb sorgt dafür, dass die ursprüngliche Messaufgabe auch bei Übergaben und Änderungen sichtbar bleibt."
      ]
    ],
    "exercise": "Nach einem Objektivwechsel meldet ein Kunde veränderte Spektren. Welche Informationen gehören in deine erste technische Übergabe?",
    "modelAnswer": "Genaues Modell und Seriennummer, alte und neue Optik, verwendete Kalibrierung, Softwarestand, Messbedingungen, erwartetes und beobachtetes Verhalten sowie geeignete Vergleichsdaten. Kalibriergültigkeit gezielt prüfen lassen.",
    "take": "Eine nachvollziehbare Konfiguration und klare Änderungsinformationen helfen dem Kunden über die gesamte Nutzungsdauer.",
    "q": [
      [
        "Woraus wird der zugesagte Lieferumfang abgeleitet?",
        [
          "Aus jedem Produktfoto",
          "Aus dem bestätigten Angebot beziehungsweise Auftrag",
          "Aus jedem früheren Demoaufbau"
        ],
        1,
        "Abgebildetes oder verwendetes Zubehör kann optional sein."
      ],
      [
        "Was ist ein sinnvoller Ausgangszustand?",
        [
          "Nur der Produktname",
          "Nur ein mündliches „läuft“",
          "Dokumentierte Konfiguration mit Referenzdaten und Bedingungen"
        ],
        2,
        "Der Zustand sollte später nachvollziehbar vergleichbar sein."
      ],
      [
        "Was macht eine Supportmeldung hilfreich?",
        [
          "Nur der Kaufpreis",
          "Erwartetes und beobachtetes Verhalten mit Reproduktionsschritten",
          "Nur eine allgemeine Unzufriedenheit"
        ],
        1,
        "Konkrete Beobachtungen ermöglichen eine gezielte Diagnose."
      ],
      [
        "Was vor Weitergabe eines Kundendatensatzes klären?",
        [
          "Nur die Bildschirmfarbe",
          "Nur die Dateiendung",
          "Erlaubnis und notwendigen Umfang"
        ],
        2,
        "Daten werden nicht ohne passende Freigabe weitergegeben."
      ],
      [
        "Was nach einem Objektivwechsel besonders prüfen?",
        [
          "Nur die Anzahl der Monitorpixel",
          "Nur den Namen des Exportordners",
          "Kalibriergültigkeit der neuen Kombination"
        ],
        2,
        "Die optische Konfiguration beeinflusst die Messkette."
      ],
      [
        "Ist eine allgemeine Wartungsempfehlung automatisch eine individuelle Vertragszusage?",
        [
          "Nein",
          "Nur wenn sie auf einer Website steht",
          "Ja"
        ],
        0,
        "Empfehlung, Messergebnis und bestätigte Zusage sind zu unterscheiden."
      ]
    ],
    "experiment": "ca-lifecycle",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert Knowledge Base · Kameraprofile",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/313917441/Ultris+Camera+Profiles"
      ],
      [
        "Cubert Knowledge Base · Objektivwechsel bei Relay-Kameras",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/387547141/Changing+Lenses+Relay+Cameras+only"
      ],
      [
        "Cubert Knowledge Base · Troubleshooting",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/337281027"
      ],
      [
        "Cubert Knowledge Base · Zeichnungen und 3D-Modelle",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/347078657/Technical+Drawings+3D+Models"
      ]
    ],
    "visualChapters": [
      0
    ]
  }
];
for(const [j,l] of CAMERA_LESSONS.entries()){LESSON_CONTENT.push(l);const m=CURRICULUM.worlds.find(w=>w.id==="cameras").modules.find(m=>m.id===l.id);Object.assign(m,{title:l.title,topics:l.topics,status:"pilot",contentId:l.id,minutes:12,version:1,passRatio:.8,prerequisites:j?[CAMERA_LESSONS[j-1].id]:[]});}
