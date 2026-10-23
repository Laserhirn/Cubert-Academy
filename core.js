/* Original learning content; sources checked 23 October 2026. */
const CORE_LESSONS=[
  {
    "id": "co-snapshot",
    "title": "Snapshot: wann Gleichzeitigkeit zählt",
    "topics": [
      "Datenwürfel und Aufnahmeprinzip unterscheiden",
      "Snapshot, Pushbroom und spektrales Scanning vergleichen",
      "Bewegung und Zeitbudget in Kundenfragen übersetzen"
    ],
    "scope": "Hier geht es um das Aufnahmeprinzip. Belichtungsgrundlagen kennst du aus Kamera & Optik; konkrete Produktdaten folgen in Kameraprodukte.",
    "body": [
      [
        "Ein Bild mit einer dritten Achse",
        "Ein hyperspektraler Datenwürfel hat zwei Ortsachsen x und y sowie eine Wellenlängenachse λ. Eine Scheibe zeigt die Szene in einem spektralen Band. Durch den Würfel entlang λ zu gehen bedeutet, das Spektrum eines zugeordneten Bildpunkts zu betrachten. Diese dritte Achse ist zunächst keine räumliche Tiefe. Auch ein flaches Blatt kann einen solchen Würfel liefern. Die zentrale Frage lautet: Wann wurden die Werte aufgenommen, die wir zu diesem Würfel zusammensetzen? Stelle dir einen Würfel wie einen Stapel beschrifteter Karten vor. Alle Karten sollen dieselbe Szene beschreiben. Bewegt sich die Szene zwischen den Karten, kann die Zuordnung schwieriger werden."
      ],
      [
        "Drei Wege zum vollständigen Würfel",
        "Ein Pushbroom-System erfasst eine räumliche Linie mit spektraler Information. Eine Relativbewegung zwischen Kamera und Szene ergänzt die zweite Ortsrichtung. Beim spektralen Scanning werden dagegen nacheinander verschiedene spektrale Einstellungen einer Fläche erfasst. Snapshot erfasst die erforderliche räumliche und spektrale Information für einen Würfel in einer Aufnahme, anschließend folgt die Rekonstruktion. Diese Begriffe beschreiben verschiedene Zeit- und Ortszuordnungen. Sie legen noch keine allgemeine Rangfolge der Messqualität fest. Auf einem gleichmäßig laufenden Förderband kann die Bewegung für ein Zeilensystem gezielt genutzt werden. Bei frei bewegten Objekten oder raschen Veränderungen ist eine gemeinsame Aufnahmezeit häufig besonders hilfreich. Das konkrete System entscheidet über Details."
      ],
      [
        "Was bei Bewegung auseinanderläuft",
        "Im Schaubild bewegt sich ein Punkt pro Zeitschritt weiter. Bei sequenziellen Bändern erscheint er deshalb an unterschiedlichen Stellen. Ein Pixel mit denselben x/y-Koordinaten kann dann in zwei Bändern verschiedene Teile der Szene abbilden. Ein Snapshot vermeidet diesen speziellen zeitlichen Versatz innerhalb der gleichzeitig erfassten Information. Er verhindert aber keine Bewegung während der Belichtung. Auch 5 ms sind für ein schnelles Objekt eine endliche Zeit. Die richtige Nachfrage lautet deshalb nicht nur „Wie viele Bilder pro Sekunde?“, sondern auch „Wie lange wird belichtet, wie schnell bewegt sich die Probe und welches Detail muss erkennbar bleiben?“ Gleichzeitigkeit und kurze Belichtung lösen unterschiedliche Probleme."
      ],
      [
        "Gleichzeitigkeit ist nicht der gesamte Durchsatz",
        "Zwischen einem Lichtsignal und einer verfügbaren Entscheidung liegen Belichtung, Auslesen, Übertragen, Rekonstruktion und Auswertung. Einige Schritte können sich überlappen. Deshalb ist weder die Summe aller Einzelzeiten immer die Bildperiode noch die reine Belichtungszeit automatisch die erreichbare Bildrate. Latenz beschreibt die Verzögerung bis zum Ergebnis, Durchsatz die Zahl fertiger Ergebnisse pro Zeit. Ein System kann viele Bilder gleichzeitig verarbeiten und trotzdem eine spürbare Latenz haben. Frage bei einer Sortieraufgabe nach dem Abstand bis zur Ausblasdüse und nach der maximal tolerierbaren Verzögerung. Ein stabiler Datenstrom ohne verlorene Aufnahmen ist ebenso wichtig wie eine eindrucksvolle Spitzenrate in einer kurzen Demo."
      ],
      [
        "Das Prinzip an der Aufgabe erklären",
        "Eine Wissenschaftlerin beobachtet einen Tropfen, dessen Form sich unregelmäßig verändert. Dein Nutzenargument lautet: „Wir erfassen die spektrale Szene gemeinsam und reduzieren dadurch Probleme durch nacheinander aufgenommene Bänder.“ Ergänze die Bedingungen: ausreichendes Signal, geeignete Belichtung, räumliche Zuordnung und passende Auswertung. Bei einer ebenen Bahn mit kontrollierter Bewegung vergleichst du dagegen auch Zeilenrate, Ortsabtastung und Integrationsaufwand eines Zeilensystems. Frage nach Messziel, Bewegungsmuster und benötigter Fläche, bevor du das Prinzip empfiehlst. Ein fairer Vergleich verwendet dieselben Proben und dieselben Erfolgskriterien. Die Übung unten zeigt nur Zeitversatz; sie bewertet weder konkrete Kameras noch Lichtausbeute oder erreichbare Klassifikationsgüte."
      ]
    ],
    "exercise": "Eine Kundin möchte einen schwingenden Pflanzenstängel messen. Erkläre den Snapshot-Nutzen und zwei weiterhin notwendige Prüfungen.",
    "modelAnswer": "Gemeinsame Erfassung reduziert zeitliche Unterschiede zwischen den spektralen Informationen. Belichtungsunschärfe und ausreichendes Signal müssen trotzdem geprüft werden; außerdem räumliche Zuordnung und Auswertelatenz.",
    "take": "Gleichzeitig erfassen hilft bei dynamischen Szenen. Schärfe, Signalqualität und Verarbeitung bleiben eigene Anforderungen.",
    "q": [
      [
        "Welche dritte Achse hat der spektrale Datenwürfel?",
        [
          "Wellenlänge",
          "Immer Aufnahmezeit",
          "Automatisch räumliche Tiefe"
        ],
        0,
        "x und y beschreiben den Ort, λ die spektrale Dimension."
      ],
      [
        "Wie entsteht beim Pushbroom die zweite Ortsrichtung?",
        [
          "Durch Umbenennen der Bänder",
          "Durch Relativbewegung",
          "Durch längere Wellenlängen"
        ],
        1,
        "Die aufgenommenen Linien werden entlang der Bewegung ergänzt."
      ],
      [
        "Welches Problem reduziert Snapshot besonders?",
        [
          "Alle Beleuchtungseinflüsse",
          "Jede Bewegungsunschärfe",
          "Zeitversatz zwischen gemeinsam erfassten Spektralinformationen"
        ],
        2,
        "Während einer endlichen Belichtung bleibt Bewegung möglich."
      ],
      [
        "Ein Snapshot ist trotz hoher Bildrate unscharf. Was prüfen?",
        [
          "Nur den Namen der Schnittstelle",
          "Nur die Anzahl der Bänder",
          "Belichtungszeit und Objektbewegung"
        ],
        2,
        "Bildrate und Belichtungsunschärfe sind verschiedene Größen."
      ],
      [
        "Was ist Latenz?",
        [
          "Zeit bis zum verfügbaren Ergebnis",
          "Zahl der Sensorpixel",
          "Zahl fertiger Bilder pro Sekunde"
        ],
        0,
        "Durchsatz zählt Ergebnisse pro Zeit, Latenz beschreibt ihre Verzögerung."
      ],
      [
        "Wann kann Pushbroom gut passen?",
        [
          "Nur wenn alle Objekte stillstehen",
          "Grundsätzlich nie bei industriellen Aufgaben",
          "Bei kontrollierter Relativbewegung mit passender Synchronisation"
        ],
        2,
        "Die Aufgabe entscheidet, nicht ein pauschales besser oder schlechter."
      ]
    ],
    "experiment": "co-snapshot",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert · Snapshot Advantage",
        "https://cubert-hyperspectral.com/en/knowledge/the-snapshot-advantage/"
      ],
      [
        "Cubert · Light Field for HSI",
        "https://cubert-hyperspectral.com/en/knowledge/light-field-for-hsi/"
      ]
    ],
    "visualChapters": [
      0,
      2
    ]
  },
  {
    "id": "co-lightfield",
    "title": "Lichtfeld: vom Teilbild zum Spektralwürfel",
    "topics": [
      "Ort, Blickrichtung und spektrale Auswahl unterscheiden",
      "Teilbilder und Rekonstruktion nachvollziehen",
      "Sensorpixel von nutzbaren Spektralorten trennen"
    ],
    "scope": "Prinzipdarstellung der ULTRIS-Lichtfeldtechnologie. Keine maßstäbliche Konstruktionszeichnung und keine pauschale Zusage zu Refokussierung oder 3D-Funktionen.",
    "body": [
      [
        "Mehrere Blicke auf dieselbe Szene",
        "Halte einen Finger vor dich und schaue abwechselnd mit dem linken und rechten Auge. Der Finger verschiebt sich relativ zum Hintergrund. Die Szene ist dieselbe, die Blickrichtung unterscheidet sich. Ein Lichtfeld beschreibt Licht zusätzlich zu seiner räumlichen Zuordnung auch über seine Richtung. Bei einer optischen Anordnung mit mehreren kleinen Abbildungen können solche Perspektiven getrennt erfasst werden. Im Schema wählst du ein Teilbild aus und verfolgst seinen Beitrag zur Ausgabe. Die Farben kennzeichnen hier Kanäle; sie sind keine Behauptung darüber, wie unsichtbares Licht aussieht. Wichtig ist die Beziehung zwischen Szene, Teilbildern auf dem Sensor und dem rekonstruierten Ergebnis."
      ],
      [
        "Spektrale Auswahl vor der Auswertung",
        "Cubert beschreibt für ULTRIS eine Kombination aus kleinen Abbildungsoptiken und spektralen Filtern. Die Teilbilder erfassen die Szene aus leicht unterschiedlichen Positionen und mit unterschiedlicher spektraler Gewichtung. Ein Sensorwert sagt allein noch nicht: „Das ist exakt ein punktförmiger Ort bei genau einer Wellenlänge.“ Er gehört zu einem optischen Kanal mit endlicher Bandbreite und einer bestimmten Abbildung. Erst die bekannte Charakterisierung macht ihn interpretierbar. Die neun Teilbilder der Grafik sind bewusst stark vereinfacht. Reale Anzahlen, Filteranordnungen, Sensoren und nutzbare Bereiche sind modellabhängig. Das Schema soll den Zusammenhang erklären, ohne eine konkrete Kameraarchitektur oder ein aktuelles Datenblatt zu ersetzen."
      ],
      [
        "Was Rekonstruktion leisten muss",
        "Stelle dir vor, neun Personen fotografieren dieselbe Tafel aus leicht verschiedenen Positionen. Bevor du ihre Informationen vergleichst, brauchst du eine Zuordnung: Welche Stelle in jedem Foto gehört zur gleichen Stelle auf der Tafel? Zusätzlich musst du wissen, wie die einzelnen Ansichten auf Licht reagieren. Die Rekonstruktion nutzt solche bekannten räumlichen und spektralen Zusammenhänge, um die Ausgabe auf einem gemeinsamen Raster zu bilden. Sie ist damit Teil der Messkette. Parameter und Kalibrierdaten sind keine beliebige kosmetische Nachbearbeitung. Speichere für nachvollziehbare Versuche den Rohdatensatz und die verwendete Verarbeitung. Eine schön aussehende RGB-Vorschau allein beweist noch keine saubere spektrale Zuordnung."
      ],
      [
        "Sensorpixel sind keine vollständigen Spektren",
        "Ein großer Sensor verteilt seine Messstellen auf mehrere Teilbilder und deren Informationen. Daher entspricht seine Pixelzahl nicht automatisch der Anzahl unabhängig erfasster räumlicher Spektren im Ergebnis. Ein frei erfundenes Beispiel: 900.000 Sensorstellen, die idealisiert auf neun gleich große Ansichten verteilt werden, ergeben 100.000 Stellen je Ansicht. Dieses Zahlenbild erklärt ein Budget, keine reale Auflösungsformel. Überlappung, Randbereiche, Abbildungsqualität und Rekonstruktionsraster verändern die tatsächliche Nutzung. Auch ein vergrößertes Ausgabebild erzeugt nicht allein zusätzliche optisch getrennte Details. Im Kundengespräch nennst du Sensorformat, räumliches Ausgaberaster und nachgewiesene Detailerkennbarkeit getrennt. So vermeidest du einen irreführenden Vergleich mit der Megapixelzahl einer gewöhnlichen Kamera."
      ],
      [
        "Was du dem Kunden versprechen kannst",
        "Eine passende Erklärung ist: „Die Kamera nimmt mehrere spektral gewichtete Ansichten gleichzeitig auf. Die Verarbeitung ordnet sie zu einem räumlich und spektral interpretierten Datenwürfel.“ Danach fragst du nach Arbeitsabstand, Höhenunterschieden und der kleinsten relevanten Struktur. Möglichkeiten wie virtuelle Fokusebenen oder weitergehende Tiefenauswertung müssen für Modell und Softwarefunktion konkret bestätigt werden. Aus dem Begriff Lichtfeld folgt kein unbegrenztes nachträgliches Scharfstellen und keine automatische 3D-Messfreigabe. Für eine Demo wählst du zuerst eine ebene strukturierte Probe, prüfst die Bandzuordnung und ergänzt anschließend eine Szene mit mehreren Tiefen. Der Unterschied macht sowohl den Nutzen als auch die Grenzen nachvollziehbar."
      ]
    ],
    "exercise": "Ein Kunde setzt 20 Megapixel Sensorauflösung mit 20 Millionen vollständigen Spektren gleich. Wie erklärst du den Unterschied ohne Produktzahlen zu erfinden?",
    "modelAnswer": "Die Sensorfläche enthält mehrere Teilbilder und damit räumliche sowie spektrale Information. Die nutzbaren Spektralorte ergeben sich aus Optik, Kalibrierung und Rekonstruktion; ich zeige das Ausgaberaster und prüfe die reale Detailauflösung separat.",
    "take": "Die Rekonstruktion verbindet kalibrierte Teilinformationen. Sensorpixel, Ausgaberaster und aufgelöste Details sind unterschiedliche Angaben.",
    "q": [
      [
        "Welche zusätzliche Information beschreibt ein Lichtfeld?",
        [
          "Automatisch die Materialklasse",
          "Den Kaufpreis einer Kamera",
          "Lichtrichtung"
        ],
        2,
        "Neben dem Ort ist die Richtung ein wesentlicher Teil der Beschreibung."
      ],
      [
        "Was kennzeichnet die ULTRIS-Prinzipdarstellung?",
        [
          "Eine automatisch fertige Materialkarte",
          "Spektral gewichtete Teilansichten",
          "Eine einzelne RGB-Aufnahme ohne weitere Optik"
        ],
        1,
        "Die Ausgabe entsteht aus optischer Erfassung und Rekonstruktion."
      ],
      [
        "Warum sind Kalibrierdaten wichtig?",
        [
          "Sie beschreiben räumliche und spektrale Zuordnungen",
          "Sie erhöhen beliebig die Sensorpixelzahl",
          "Sie ersetzen jede Beleuchtung"
        ],
        0,
        "Ohne passende Charakterisierung sind Sensorwerte nicht vollständig interpretierbar."
      ],
      [
        "Sind Sensorpixel gleich unabhängige vollständige Spektren?",
        [
          "Ja, wenn das Exportbild groß genug ist",
          "Nein, die Sensorfläche trägt mehrere Teilinformationen",
          "Ja, bei jeder Lichtfeldkamera"
        ],
        1,
        "Die Aufteilung der Messinformation muss berücksichtigt werden."
      ],
      [
        "Beweist ein scharfes RGB-Bild korrekte Spektren?",
        [
          "Nein, die spektrale Zuordnung braucht eigene Prüfung",
          "Ja, grundsätzlich",
          "Ja, wenn drei Farben sichtbar sind"
        ],
        0,
        "Eine Vorschau ist kein vollständiger Qualitätsnachweis."
      ],
      [
        "Ist unbegrenztes Refokussieren automatisch zugesichert?",
        [
          "Ja, jede Verdeckung lässt sich entfernen",
          "Nein, Funktion und Grenzen sind modellabhängig",
          "Ja, allein durch das Wort Lichtfeld"
        ],
        1,
        "Physikalische Sichtbarkeit und verfügbare Funktionen begrenzen die Verarbeitung."
      ]
    ],
    "experiment": "co-lightfield",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert · Light Field Technology",
        "https://cubert-hyperspectral.com/en/knowledge/light-field-technology/"
      ],
      [
        "Cubert · Light Field for HSI",
        "https://cubert-hyperspectral.com/en/knowledge/light-field-for-hsi/"
      ],
      [
        "Cubert Knowledge Base · Focus und Band Alignment",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/346521601/Focus+Adjustment+and+Alignment+of+spectral+Bands"
      ]
    ],
    "visualChapters": [
      0
    ]
  },
  {
    "id": "co-sensors",
    "title": "Sensoren: von Photonen zu digitalen Werten",
    "topics": [
      "Quanteneffizienz und Signalentstehung erklären",
      "Detektormaterial und Auslesearchitektur unterscheiden",
      "Empfindlichkeit, Dynamik und Bitzahl einordnen"
    ],
    "scope": "Die Lernwelt Messpraxis behandelt die praktische Rauschreduktion. Hier erklären wir die Signalentstehung und die Auswahlkriterien des Detektors.",
    "body": [
      [
        "Ein Photon ist noch kein digitaler Messwert",
        "Licht trifft auf den Detektor, erzeugt unter geeigneten Bedingungen Ladungsträger und wird über Elektronik ausgelesen und digitalisiert. Die Quanteneffizienz QE beschreibt für eine Wellenlänge das Verhältnis gesammelter Photoelektronen zur Zahl einfallender Photonen. Bei 100 einfallenden Photonen und 60 Prozent QE erwarten wir im Mittel 60 Photoelektronen. Einzelne Aufnahmen schwanken; die Grafik zeigt einen Erwartungswert, keinen deterministischen Elektronenzähler. Verändere die QE bei gleicher Photonenzahl: Das Nutzsignal wächst, ohne dass sich die Energie eines einzelnen Photons verändert. Mehr Effizienz ist etwas anderes als längere Belichtung oder höhere elektronische Verstärkung. Jede dieser Stellgrößen greift an einer anderen Stelle der Messkette an."
      ],
      [
        "Das Material legt einen nutzbaren Bereich nahe",
        "Detektoren reagieren nicht auf alle Wellenlängen gleich. Silizium wird häufig im sichtbaren und angrenzenden nahinfraroten Bereich eingesetzt, während InGaAs auch wichtige SWIR-Bereiche erschließt. Die genauen Grenzen hängen vom konkreten Bauteil ab; spezielle Varianten weichen deutlich voneinander ab. InGaAs bezeichnet ein Detektormaterial. CMOS bezeichnet eine elektronische Technologie beziehungsweise Auslesearchitektur. Die Gegenüberstellung „CMOS oder InGaAs“ vermischt deshalb Ebenen: Ein InGaAs-Detektor kann mit einer CMOS-Ausleseschaltung kombiniert sein. Für die Beratung fragst du nach der spektralen Empfindlichkeitskurve des ganzen Systems, einschließlich Fenster, Filter und Optik. Eine Materialbezeichnung allein liefert noch keinen vollständigen Nachweis für ein bestimmtes Messband."
      ],
      [
        "Warum Verstärkung keine Photonen ergänzt",
        "Nach der Ladungserfassung kann Verstärkung die Zuordnung zu digitalen Werten verändern. Wenn 100 Elektronen zuvor 50 DN und anschließend 100 DN ergeben, enthält die Aufnahme deswegen nicht doppelt so viele eingefangene Photonen. DN steht für den ausgegebenen Digitalwert. Hoher Gain kann die Nutzung der Digitalisierung beeinflussen, verändert aber nicht rückwirkend die Lichtmenge. Gleichzeitig müssen Sättigungsgrenzen der Ladungsspeicherung und der Elektronik betrachtet werden. Eine weiße Fläche kann im Digitalbild anschlagen, obwohl andere Bereiche noch dunkel erscheinen. Stelle zuerst sicher, dass der benötigte Bereich überhaupt ausreichend beleuchtet und optisch übertragen wird. Danach wählst du die Aufnahmeparameter für den nutzbaren Signalbereich."
      ],
      [
        "Bitzahl und Dynamik sauber trennen",
        "Ein 12-Bit-Wert bietet 4.096 mögliche Codes, ein 16-Bit-Wert 65.536. Das beschreibt zunächst die Zahl darstellbarer Stufen, nicht die Zahl zuverlässig unterscheidbarer Helligkeiten. Rauschen, Nichtlinearität und Sättigung begrenzen die nutzbare Information. Werden 12-Bit-Daten in einem 16-Bit-Behälter gespeichert, werden sie dadurch nicht automatisch präziser. Dynamik beschreibt hier den nutzbaren Bereich zwischen einer unteren Signalgrenze und der oberen Sättigungsgrenze; Definition und Messbedingungen gehören immer dazu. Ein Vergleich ist nur sinnvoll, wenn Betriebsmodus, Temperatur, Belichtung und Bewertungsmethode vergleichbar sind. Frage bei beeindruckenden Zahlen deshalb nach dem Messverfahren und danach, welcher Betriebszustand für den Kunden vorgesehen ist."
      ],
      [
        "Vom Detektor zur belastbaren Auswahl",
        "Ein Kunde sucht ein schwaches Merkmal bei 1.550 nm. Du prüfst zuerst, ob die gesamte Kamera dort sinnvoll messen kann, nicht ob ihr Datenformat besonders viele Bits hat. Danach kommen verfügbare Photonen, Empfindlichkeit, Dunkel- und Ausleseverhalten, erforderliche Geschwindigkeit und räumliche Abtastung. Eine gute Vorauswahl endet mit einem Versuch unter den vorgesehenen Bedingungen. Dokumentiere außerdem, ob du eine Sensorkennzahl oder eine Systemkennzahl nennst. Der gleiche Detektor in verschiedenen optischen Aufbauten kann andere Ergebnisse liefern. Die Simulation hält die Wellenlänge fest und zeigt nur die mittlere Umwandlung. Ihre einfache Klarheit hilft beim Erklären, ersetzt aber keine spektrale Empfindlichkeitskurve."
      ]
    ],
    "exercise": "Ein Integrator fordert 16 Bit, um ein schwaches Merkmal bei 1.550 nm zu erkennen. Welche Fragen stellst du vor einer Empfehlung?",
    "modelAnswer": "Zuerst spektraler Systembereich und Signal am Merkmal, dann Rauschen, Sättigung, Belichtung und Durchsatz. Außerdem klären, ob 16 Bit echte Digitalisierung oder nur das Speicherformat bezeichnet.",
    "take": "Das Detektorsignal entsteht vor dem Zahlenformat. Empfindlichkeit, Rauschen und Sättigung bestimmen die nutzbare Information.",
    "q": [
      [
        "100 Photonen bei 60 % QE ergeben im Mittel …",
        [
          "160 Photoelektronen",
          "Genau 60 in jeder einzelnen Aufnahme",
          "60 Photoelektronen"
        ],
        2,
        "QE beschreibt eine mittlere Umwandlung; Einzelmessungen schwanken."
      ],
      [
        "Welche Gegenüberstellung vermischt Ebenen?",
        [
          "12 oder 16 Bit",
          "100 oder 200 Photonen",
          "CMOS oder InGaAs"
        ],
        2,
        "Material und Auslesetechnologie sind nicht dasselbe Auswahlmerkmal."
      ],
      [
        "Was verändert Gain nicht rückwirkend?",
        [
          "Die Skalierung des Digitalwerts",
          "Die Nutzung des Zahlenbereichs",
          "Die Zahl eingefangener Photonen"
        ],
        2,
        "Elektronische Verstärkung fügt keine bereits fehlenden Photonen hinzu."
      ],
      [
        "Was bedeutet ein 16-Bit-Export sicher?",
        [
          "Automatisch geringeres Photonenrauschen",
          "Ein Zahlenformat mit bis zu 65.536 Codes",
          "65.536 sicher unterscheidbare Helligkeiten"
        ],
        1,
        "Formatbreite ist keine Garantie für effektive Information."
      ],
      [
        "Was zuerst bei einem Merkmal bei 1.550 nm prüfen?",
        [
          "Spektrale Empfindlichkeit des gesamten Systems",
          "Nur die Gehäusefarbe",
          "Nur den maximalen Dateinamenumfang"
        ],
        0,
        "Detektor, Optik und Filter müssen den Bereich unterstützen."
      ],
      [
        "Wie vergleicht man Sensorkennzahlen sinnvoll?",
        [
          "Nur nach der größten Zahl",
          "Unter vergleichbaren Bedingungen und Definitionen",
          "Ohne Betriebsmodus und Temperatur"
        ],
        1,
        "Die Messbedingungen beeinflussen die Kennzahlen."
      ]
    ],
    "experiment": "co-sensors",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Hamamatsu · InGaAs-Bildsensoren",
        "https://www.hamamatsu.com/us/en/product/optical-sensors/image-sensor/ingaas-image-sensor.html"
      ]
    ],
    "visualChapters": [
      0
    ]
  },
  {
    "id": "co-filters",
    "title": "Optische Filter: Bandbreite und Einfallswinkel",
    "topics": [
      "Bandpass, Kantenfilter und Sperrung unterscheiden",
      "FWHM aus einer Transmissionskurve ablesen",
      "Winkelverschiebung und Kalibrierung zusammenbringen"
    ],
    "scope": "Die Physik der Wellenlänge wird vorausgesetzt. Hier geht es um die spektrale Auswahl im optischen System; spektrale Abtastung folgt im Auflösungsmodul.",
    "body": [
      [
        "Ein Band ist ein Fenster, kein einzelner Strich",
        "Ein Bandpass lässt einen begrenzten Wellenlängenbereich passieren. Seine Transmissionskurve beschreibt, welcher Anteil bei jeder Wellenlänge durchkommt. Ein Messwert entsteht somit aus einer Gewichtung über ein Intervall, nicht aus einer perfekten Auswahl einer einzigen Wellenlänge. In der Grafik ist der höchste Transmissionswert auf eins normiert. Die gestrichelte Linie bei 0,5 markiert die halbe Höhe. Der Abstand der beiden Schnittpunkte ist die volle Breite bei halber Höhe, kurz FWHM. Verschiebe den Breitenregler: Zwei Filter mit derselben Mitte können sehr unterschiedliche Bereiche zusammenfassen. Eine Bandmitte allein reicht daher für einen technischen Vergleich nicht aus."
      ],
      [
        "Filtertypen und unerwünschtes Licht",
        "Ein Langpass überträgt längere Wellenlängen oberhalb einer Übergangsregion, ein Kurzpass entsprechend kürzere. Ein Notchfilter sperrt einen begrenzten Bereich. Ein Neutraldichtefilter soll die Intensität über einen angegebenen Bereich möglichst gleichmäßig verringern. Diese Funktionen sagen zunächst, was übertragen wird, nicht durch welchen Aufbau es geschieht. Absorptive Filter wandeln einen Teil des zurückgehaltenen Lichts in Wärme um; Interferenzfilter nutzen dünne Schichten und Reflexionen. Auch außerhalb des gewünschten Fensters ist die Transmission selten exakt null. Die Sperrung muss über den relevanten Bereich beschrieben werden. Sehr starkes unerwünschtes Licht kann selbst bei kleiner Resttransmission noch einen Beitrag zum Signal erzeugen."
      ],
      [
        "Warum schräger Einfall die Kurve verschiebt",
        "Bei vielen Interferenzfiltern verschiebt sich das Transmissionsband mit größerem Einfallswinkel zu kürzeren Wellenlängen. Die Grafik verwendet dafür eine vereinfachte Näherung mit einem effektiven Brechungsindex. Winkel werden zum Lot auf den Filter gemessen. Das ist keine universelle Bauvorschrift für jedes Schichtsystem. Polarisation, Strahlenkegel und reale Schichtstruktur können Breite und Kurvenform zusätzlich beeinflussen. In der Übung bleibt die Form bewusst gleich, damit die Verschiebung verständlich wird. Stelle erst null Grad und dann zwanzig Grad ein. Die neue Mitte liegt links von der ursprünglichen. Eine schräge geometrische Strecke allein ist keine ausreichende Erklärung für das Interferenzverhalten."
      ],
      [
        "Winkel können Teil der Messinformation sein",
        "In einem abbildenden System erreichen Strahlen aus verschiedenen Szenenrichtungen einen Filter unter verschiedenen Winkeln. Deshalb kann die wirksame spektrale Antwort innerhalb eines Teilbilds variieren. Die Cubert Knowledge Base erläutert, dass diese positionsabhängigen Antworten charakterisiert und für die spektrale Rekonstruktion genutzt werden. Mehr ausgegebene Bänder als physische Filter müssen daher nicht bloß frei erfundene Zwischenwerte bedeuten. Entscheidend sind die vorhandenen Messungen und ihre Kalibrierung. Daraus folgt trotzdem keine beliebige Verbesserung der optischen Bandbreite. Wenn du eine Rekonstruktion erklärst, trenne die Zahl der Messstellen, ihre Antwortfunktionen und das gewählte Ausgaberaster. Die nächste Lektion zur Information vertieft genau diese Unterscheidung."
      ],
      [
        "Die richtige technische Nachfrage",
        "Eine Kundin nennt einen Filter mit 700 nm Mitte. Frage nach FWHM, Transmission, Sperrbereich und vorgesehenem Einfallswinkel. Prüfe außerdem, ob ein nahezu paralleles Bündel oder ein größerer Strahlenkegel vorliegt. Ein Filter kann in zwei Aufbauten unterschiedlich wirken, obwohl seine Beschriftung gleich bleibt. Für eine Systemänderung reicht es deshalb nicht, nur einen nominell passenden Filter einzusetzen. Die Änderung kann eine bestehende Kalibrierung ungültig machen. In der Beratung erklärst du die Folgen und klärst die Freigabe mit dem technischen Team. Die Simulation liefert eine anschauliche Größenordnung; ihre Kurve ist synthetisch und kein vermessenes Cubert-Bauteil oder zugesicherter Toleranzbereich."
      ]
    ],
    "exercise": "Ein Kunde möchte einen 700-nm-Filter schräg montieren und die alte Wellenlängenzuordnung behalten. Was erklärst du?",
    "modelAnswer": "Bei einem Interferenzfilter kann sich das Band verschieben und seine Form ändern. Die tatsächliche Winkelverteilung und Kalibrierung sind zu prüfen; die nominelle 700-nm-Angabe bei anderen Bedingungen reicht nicht.",
    "take": "Bandmitte, Bandbreite, Sperrung und Winkelbedingungen gehören zusammen.",
    "q": [
      [
        "Was beschreibt FWHM?",
        [
          "Größe des Sensors",
          "Abstand zweier Exportkanäle",
          "Breite bei halbem Maximum"
        ],
        2,
        "FWHM bezieht sich auf die Form der Antwortkurve."
      ],
      [
        "Ein Bandwert repräsentiert idealisiert …",
        [
          "Eine mathematisch unendlich schmale Wellenlänge",
          "Immer drei RGB-Farben",
          "Ein spektral gewichtetes Intervall"
        ],
        2,
        "Reale Filter besitzen endliche Breiten."
      ],
      [
        "Wohin verschiebt sich das Band im gezeigten Interferenzmodell bei größerem Winkel?",
        [
          "Es bleibt unabhängig vom Winkel",
          "Zu kürzeren Wellenlängen",
          "Immer zu längeren Wellenlängen"
        ],
        1,
        "Das Modell zeigt die typische Blauverschiebung."
      ],
      [
        "Was lässt ein Langpass bevorzugt durch?",
        [
          "Längere Wellenlängen oberhalb seiner Kante",
          "Nur kurze Belichtungen",
          "Nur Licht bei null Grad"
        ],
        0,
        "Die Bezeichnung betrifft den spektralen Durchlassbereich."
      ],
      [
        "Mehr Ausgabebänder als Filter bedeuten …",
        [
          "Automatisch beliebig hohe Auflösung",
          "Zwingend einen Fehler",
          "Nicht automatisch erfundene Daten; kalibrierte Messantworten prüfen"
        ],
        2,
        "Positionsabhängige Antwortfunktionen können zusätzliche Messinformation liefern."
      ],
      [
        "Was ist bei verändertem Filterwinkel zu prüfen?",
        [
          "Gültigkeit der spektralen Charakterisierung",
          "Nur die Dateigröße",
          "Nur die Farbe der Vorschau"
        ],
        0,
        "Optische Änderungen können bestehende Zuordnungen verändern."
      ]
    ],
    "experiment": "co-filters",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Edmund Optics · Optische Filter",
        "https://www.edmundoptics.com/knowledge-center/application-notes/optics/optical-filters/"
      ],
      [
        "Edmund Optics · Filterwinkel und Strahlenkegel",
        "https://www.edmundoptics.com/knowledge-center/application-notes/optics/optical-filter-orientation/"
      ],
      [
        "Cubert Knowledge Base · Oversampling",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/455245826/Oversampling+-+More+Spectral+Bands+Than+Filters"
      ]
    ],
    "visualChapters": [
      0,
      2
    ]
  },
  {
    "id": "co-parallax",
    "title": "Parallaxe: wenn ein Bildpunkt nicht dieselbe Stelle meint",
    "topics": [
      "Tiefenabhängigen Versatz erkennen",
      "Eine Referenzebene von einem 3D-Objekt unterscheiden",
      "Bandzuordnung und optischen Fokus getrennt prüfen"
    ],
    "scope": "Aufbauend auf der Lichtfeldidee. Die Grafik nutzt ein idealisiertes Zweiansichtenmodell, keine Kalibrierparameter einer realen ULTRIS.",
    "body": [
      [
        "Zwei Blickpunkte, zwei Positionen",
        "Ein nahes Objekt verschiebt sich zwischen zwei Perspektiven stärker als ein entferntes. Diesen Unterschied nennen wir Parallaxe. In einem spektralen Mehransichtssystem ist das wichtig, weil Messwerte verschiedener Bänder möglichst dieselbe Probenstelle beschreiben sollen. Wenn sie stattdessen beiderseits einer Kante liegen, kann ein scheinbares Spektrum aus verschiedenen Materialien zusammengesetzt sein. Die Grafik zeigt einen nahen und einen fernen Punkt. Ihre Farben markieren die beiden Tiefen und keine Materialeigenschaften. Ändere den nahen Abstand und beobachte seinen Restversatz. Selbst wenn die Szene während der Aufnahme vollkommen stillsteht, kann dieser räumliche Effekt bestehen. Snapshot beseitigt ihn nicht automatisch."
      ],
      [
        "Eine Ebene lässt sich passend ausrichten",
        "Im vereinfachten Modell gilt für den perspektivischen Versatz d = f · b / Z. f ist die Brennweite in Pixelkoordinaten, b der Abstand der Blickpunkte und Z die Entfernung; b und Z brauchen dieselbe Längeneinheit. Registrieren wir auf eine Ebene Z₀, bleibt für andere Tiefen ein Rest d − d₀. Für Z = Z₀ wird dieser Rest null. Ein Zahlenbeispiel mit f = 400 px und b = 5 mm: Bei Z = 500 mm entstehen 4 px Versatz, bei 1.000 mm 2 px. Eine Ausrichtung auf 1.000 mm lässt am nahen Punkt noch 2 px Differenz übrig. Die Werte sind nur ein Rechenbeispiel."
      ],
      [
        "Fokus und Zuordnung nicht verwechseln",
        "Optischer Fokus beeinflusst, wie scharf eine Struktur innerhalb einer Ansicht abgebildet wird. Registrierung beschreibt, welche Positionen unterschiedlicher Ansichten zusammengehören. Ein Bild kann scharfe Einzelkanten enthalten und trotzdem zwischen Bändern versetzt sein. Umgekehrt macht eine passende Zuordnung ein optisch unscharfes Teilbild nicht automatisch scharf. Die Cubert-Dokumentation unterscheidet modellabhängige Abläufe für Fokus und Entfernungsausrichtung. Folge daher der Anleitung des tatsächlich verwendeten Systems. Prüfe anschließend kontrastreiche Kanten in mehreren Bändern und an der vorgesehenen Probenebene. Eine einzelne RGB-Darstellung kann Hinweise auf Farbsäume liefern, ist aber kein Ersatz für die Prüfung der betroffenen Bandbilder."
      ],
      [
        "Mehrere Tiefen und Verdeckungen",
        "Ein Schüttgut, ein Blatt vor einem Hintergrund oder ein gestapeltes Bauteil liegt nicht vollständig in einer Ebene. Eine globale Ausrichtung kann deshalb nicht zwangsläufig überall gleichzeitig passen. Zusätzlich kann eine Perspektive etwas sehen, das in einer anderen verdeckt ist. Für diesen Bereich fehlt dann eine direkte gemeinsame Beobachtung. Software kann nicht einfach eine nicht erfasste Sicht als sichere Messung ausgeben. Für die Auswertung kannst du geeignete Bereiche auswählen, Kanten ausschließen oder eine passende Geometrie herstellen. Welche weitergehenden Verfahren verfügbar sind, hängt von Produkt und Anwendung ab. Dokumentiere die Einschränkung, statt jedes Randartefakt als physikalisches Materialmerkmal zu interpretieren."
      ],
      [
        "Einen Verdacht systematisch prüfen",
        "In einer Demo erscheint ein spektraler Unterschied nur entlang einer Objektkante. Verschiebe die Probe kontrolliert in der Tiefe und prüfe, ob sich das Muster mit der Ausrichtung verändert. Vergleiche außerdem eine homogene Innenfläche mit dem Rand. Diese Versuche liefern Hinweise, trennen aber nicht automatisch alle Ursachen: Unschärfe, Streulicht oder Reflexion können ebenfalls beteiligt sein. Erkläre dem Kunden, welche Beobachtung für einen geometrischen Einfluss spricht und welche Materialaussage noch offen ist. Ein belastbarer nächster Schritt ist eine Messung mit passender Ebene, kontrollierter Geometrie und geeigneten Auswerteregionen. Für die Produktfreigabe werden zulässige Höhenunterschiede und Detailgrößen anhand echter Daten geprüft."
      ]
    ],
    "exercise": "Die Referenzebene liegt bei 1.000 mm, ein Bauteil steht bei 500 mm. Berechne den Restversatz für f = 400 px und b = 5 mm. Was bedeutet er an einer Materialkante?",
    "modelAnswer": "4 px minus 2 px ergeben 2 px Restversatz. Gleich benannte Bildkoordinaten können an der Kante verschiedene Materialien erfassen; die spektrale Zuordnung muss geprüft werden.",
    "take": "Eine passende Ebene richtet diese Ebene aus. Andere Tiefen und Verdeckungen bleiben eigenständige Herausforderungen.",
    "q": [
      [
        "Wie ändert sich Parallaxe im Modell bei kleinerem Abstand?",
        [
          "Sie hängt nur von der Wellenlänge ab",
          "Sie wird größer",
          "Sie verschwindet grundsätzlich"
        ],
        1,
        "Der Versatz ist umgekehrt proportional zur Entfernung."
      ],
      [
        "Wann ist der Restversatz im Modell null?",
        [
          "Wenn man mehr Bänder speichert",
          "Wenn Objekt- und Registrierungsebene übereinstimmen",
          "Wenn das Exportformat 16 Bit ist"
        ],
        1,
        "Dann werden gleiche perspektivische Verschiebungen abgezogen."
      ],
      [
        "Ist eine scharfe Kante automatisch bandübergreifend ausgerichtet?",
        [
          "Nur bei grüner Vorschau",
          "Nein",
          "Ja, immer"
        ],
        1,
        "Schärfe und räumliche Zuordnung sind unterschiedliche Eigenschaften."
      ],
      [
        "Warum sind Materialkanten kritisch?",
        [
          "Bänder können verschiedene Materialien abtasten",
          "Weil dort immer mehr Photonen entstehen",
          "Weil jedes Material an Kanten chemisch wechselt"
        ],
        0,
        "Versatz kann Mischspektren oder Farbsäume erzeugen."
      ],
      [
        "Was kann eine verdeckte Stelle bedeuten?",
        [
          "Eine Ansicht enthält keine direkte Beobachtung dieser Stelle",
          "Die fehlende Messung ist automatisch bekannt",
          "Eine größere Datei stellt die Sicht wieder her"
        ],
        0,
        "Nicht gesehene Information lässt sich nicht als sicher gemessen behandeln."
      ],
      [
        "Welcher Versuch hilft bei einem geometrischen Verdacht?",
        [
          "Sofort eine Materialklasse vergeben",
          "Kontrolliert die Tiefe ändern und Bandkanten vergleichen",
          "Nur die Kurvenfarbe ändern"
        ],
        1,
        "Eine gezielte Änderung zeigt, ob der Effekt auf die Geometrie reagiert."
      ]
    ],
    "experiment": "co-parallax",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert Knowledge Base · Focus und Band Alignment",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/346521601/Focus+Adjustment+and+Alignment+of+spectral+Bands"
      ],
      [
        "Cubert · Light Field Technology",
        "https://cubert-hyperspectral.com/en/knowledge/light-field-technology/"
      ]
    ],
    "visualChapters": [
      0,
      1
    ]
  },
  {
    "id": "co-resolution",
    "title": "Information: Auflösung ist mehr als Pixel und Kanäle",
    "topics": [
      "Spektrale Abtastung von Bandbreite unterscheiden",
      "Optische Information von Interpolation trennen",
      "Anforderungen als nachweisbare Merkmale formulieren"
    ],
    "scope": "Die geometrische Abtastung aus Kamera & Optik wird hier auf rekonstruierte spektrale Daten übertragen. Keine allgemeine Leistungsrangliste von Produkten.",
    "body": [
      [
        "Zwei Peaks und eine Messantwort",
        "Ein Spektrum kann zwei nahe Merkmale enthalten. Das Messsystem gibt diese nicht unverändert wieder, sondern gewichtet sie mit seiner spektralen Antwort. Die Grafik zeigt zwei synthetische gaußförmige Peaks und ihre geglättete Messkurve. Vergrößere die Bandbreite: Die einzelnen Maxima können zu einem breiten Verlauf zusammenlaufen. Danach ändere nur den Abstand der ausgegebenen Punkte. Mehr Punkte beschreiben diese breite Kurve dichter, machen ihre optische Antwort aber nicht schmaler. So werden zwei Fragen sichtbar: Welche Struktur trägt das gemessene Signal überhaupt, und wie fein wird dieses Signal anschließend dargestellt? Beide Fragen sind wichtig, aber sie sind nicht austauschbar."
      ],
      [
        "Abtastschritt und FWHM benennen",
        "Der Abtastschritt Δλ beschreibt den Abstand benachbarter berichteter Wellenlängen. Die FWHM beschreibt eine Breite der spektralen Antwort. Ein Raster von 2 nm kann daher mit einer deutlich breiteren Antwort kombiniert sein. Das ist kein Widerspruch. Es kann helfen, Verlauf und Lage eines breiten Merkmals darzustellen. Eine Aussage wie „Auflösung 2 nm“ wäre ohne nähere Definition jedoch missverständlich. Benenne im Gespräch ausdrücklich „spektraler Abtastschritt“ oder „Bandbreite FWHM“. Die Trennbarkeit zweier realer Merkmale hängt zusätzlich von Form, Stärke, Rauschen und Bewertungsmethode ab. Der Reglervergleich verwendet rauschfreie Modellkurven und liefert deshalb keine garantierte Nachweisgrenze für eine Kamera."
      ],
      [
        "Mehr Messinformation oder nur mehr Rasterpunkte?",
        "Es gibt mehrere Wege zu einem dichten Ausgaberaster. Zusätzliche kalibrierte Beobachtungen können Information beitragen; reine Interpolation fügt zwischen vorhandenen Zahlen berechnete Werte ein. Diese Vorgänge dürfen nicht pauschal gleichgesetzt werden. Für ULTRIS erklärt die Knowledge Base die Nutzung positions- und winkelabhängiger spektraler Antworten. Trotzdem bleibt die Bandbreite der zugrunde liegenden Messantwort relevant. Frage deshalb nach dem Ursprung der Datenpunkte und nach der verwendeten Rekonstruktion. Wenn ein fremder Datensatz auf doppelt so viele Wellenlängen umgerechnet wird, ist die größere Spaltenzahl allein noch kein Beweis einer besseren Messung. Reproduzierbare Merkmalsnachweise sind aussagekräftiger als die Länge einer exportierten Tabelle."
      ],
      [
        "Räumliche Information im selben Sinn prüfen",
        "Auch räumlich sind Ausgaberaster und optisch unterscheidbare Details verschieden. Eine viermal größere Bilddatei kann aus denselben Messungen berechnet sein. Bei zusätzlicher hochaufgelöster Information kann eine Fusion nützlich sein, ihre Voraussetzungen und spektrale Treue müssen aber zur Aufgabe passen. Ein feines Graubild beweist nicht automatisch ein ebenso feines unabhängiges Spektrum an jedem ausgegebenen Punkt. Prüfe ein definiertes Ziel mit bekannten Strukturen, anschließend echte Proben mit relevanten Kanten und Materialien. Vergleiche Verarbeitungseinstellungen nachvollziehbar. Eine Präsentation sollte angeben, ob eine Abbildung nativ, rekonstruiert, interpoliert oder mit zusätzlicher Information fusioniert wurde. Diese Begriffe helfen dem Kunden, den tatsächlichen Nutzen einzuordnen."
      ],
      [
        "Anforderungen vom Materialmerkmal ableiten",
        "Ein Wissenschaftler fordert 200 Bänder. Frage, welche Merkmale er trennen, welche Wellenlängen er untersuchen und welche Genauigkeit er erreichen möchte. Vielleicht braucht er einen passenden Bereich mit guter Signalqualität, vielleicht tatsächlich eine schmalere Antwort. Kanalzahl allein beantwortet das nicht. Definiere mit ihm einen Test: bekannte Proben, relevante Merkmale, Wiederholungen und Kriterien für erfolgreiche Trennung. Für einen Integrator kommen Objektgröße, Bewegung und Zeitbudget hinzu. Das Ziel ist keine möglichst lange Spezifikationsliste, sondern ein belegbarer Informationsgewinn für die Aufgabe. Halte vor dem Versuch fest, was ein positives oder negatives Ergebnis bedeuten würde. So bleibt eine beeindruckende Grafik mit einer überprüfbaren Aussage verbunden."
      ]
    ],
    "exercise": "Ein Export wird von 10 auf 2 nm Raster umgerechnet. Darf der Vertrieb jetzt „fünffach bessere spektrale Auflösung“ sagen?",
    "modelAnswer": "Nein. Das Raster ist fünfmal dichter. Für eine bessere Auflösung braucht es einen entsprechenden Informationsnachweis; die optische Antwortbreite wird durch bloße Interpolation nicht schmaler.",
    "take": "Viele Punkte können eine Kurve gut beschreiben. Ob sie nahe Merkmale trennt, entscheidet die Messinformation.",
    "q": [
      [
        "Was ändert ein dichteres Ausgaberaster allein nicht?",
        [
          "Die optische Bandbreite",
          "Die Zahl ausgegebener Werte",
          "Den Abstand der berichteten Wellenlängen"
        ],
        0,
        "Mehr Rasterpunkte verengen keine optische Antwort."
      ],
      [
        "Was bezeichnet Δλ hier?",
        [
          "Abstand benachbarter Wellenlängenpunkte",
          "Die Pixelgröße des Sensors",
          "Die Belichtungszeit"
        ],
        0,
        "Der Abtastschritt ist von der FWHM zu unterscheiden."
      ],
      [
        "Was beeinflusst die Trennbarkeit zweier Merkmale zusätzlich?",
        [
          "Rauschen und Merkmalsform",
          "Nur die Bildschirmgröße",
          "Nur der Dateiname"
        ],
        0,
        "Eine rauschfreie Zeichnung ist keine vollständige Nachweisgrenze."
      ],
      [
        "Sind zusätzliche kalibrierte Messungen dasselbe wie reine Interpolation?",
        [
          "Nein",
          "Ja, definitionsgemäß",
          "Nur wenn die Datei groß ist"
        ],
        0,
        "Der Ursprung der Information muss betrachtet werden."
      ],
      [
        "Eine viermal größere Bilddatei beweist …",
        [
          "Automatisch viermal bessere Klassifikation",
          "Viermal mehr unabhängige Spektren",
          "Allein noch keine bessere optische Detailauflösung"
        ],
        2,
        "Ausgabedimensionen sind kein alleiniger Informationsnachweis."
      ],
      [
        "Was fragst du bei der Forderung nach 200 Bändern zuerst?",
        [
          "Welche Diagrammfarbe bevorzugt wird",
          "Ob 400 Bänder noch besser klingen",
          "Welche Merkmale und Wellenlängen benötigt werden"
        ],
        2,
        "Die Messaufgabe sollte die Spezifikation begründen."
      ]
    ],
    "experiment": "co-resolution",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert Knowledge Base · Oversampling",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/455245826/Oversampling+-+More+Spectral+Bands+Than+Filters"
      ],
      [
        "Cubert · Light Field for HSI",
        "https://cubert-hyperspectral.com/en/knowledge/light-field-for-hsi/"
      ]
    ],
    "visualChapters": [
      0
    ]
  },
  {
    "id": "co-interfaces",
    "title": "Schnittstellen: vom Anschluss zum fertigen Ergebnis",
    "topics": [
      "USB und Ethernet von Vision-Standards trennen",
      "Datenrate und Speicherbedarf überschlagen",
      "Trigger, Latenz und Softwarekompatibilität prüfen"
    ],
    "scope": "Allgemeine Integrationsgrundlagen, keine pauschale USB3-Vision- oder GigE-Vision-Zusage für das Cubert-Portfolio. Konkrete Modelle und Treiber müssen separat geprüft werden.",
    "body": [
      [
        "Der Stecker beantwortet nur eine Frage",
        "Ethernet beschreibt eine Familie von Netzwerktechniken, GigE steht im Kamerakontext häufig für Gigabit-Ethernet. GigE Vision ist dagegen ein Standard für die Kamerakommunikation über Ethernet. Entsprechend ist USB 3 nicht automatisch USB3 Vision. GenICam verfolgt eine standardisierte Beschreibung und Nutzung von Gerätefunktionen über verschiedene Schnittstellen hinweg. Diese Ebenen können zusammenwirken, sind aber nicht gleichbedeutend. Wenn ein Kunde einen bestimmten Bildverarbeitungsstack verwendet, frage nach dessen unterstützten Treibern, Transportwegen, Datenformaten und benötigten Kamerafunktionen. Ein mechanisch passendes Kabel beweist keine vollständige Softwarekompatibilität. Im Schema ist die Verbindung nur ein Abschnitt zwischen Sensor, Verarbeitung und Anwendung."
      ],
      [
        "Welche Daten fließen an welcher Stelle?",
        "Eine Kamera kann Rohdaten an den Rechner liefern, aus denen erst dort ein größerer Datenwürfel entsteht. Dann ist die Würfelgröße im Arbeitsspeicher nicht automatisch die übertragene Nutzlast pro Aufnahme. Umgekehrt können Metadaten, mehrere Datenströme oder zusätzliche Bilder die Übertragung vergrößern. Trage deshalb getrennt ein: Rohdaten pro Aufnahme, Aufnahmen pro Sekunde, Verarbeitungsdaten und Speicherformat. Der Rechner unten betrachtet ausdrücklich einen hypothetischen unkomprimierten Würfelstrom, der bereits vor der Verbindung vorliegt. Er ist kein Nachweis der Datenrate einer konkreten ULTRIS. Diese bewusste Trennung verhindert, dass man eine reale Schnittstelle mit einer falschen Dateigrößenannahme vorschnell als ungeeignet einstuft."
      ],
      [
        "Eine Größenordnung selbst berechnen",
        "Für einen Würfel mit 400 × 400 Orten, 100 Bändern und 16 Bit Speicherbreite ergeben sich 32.000.000 Byte, also 32 MB im dezimalen Sinn. Bei zehn Würfeln pro Sekunde sind das 320 MB/s beziehungsweise 2,56 Gbit/s, noch ohne Protokollaufwand. Acht Bit ergeben ein Byte. Mbit und MB dürfen nicht verwechselt werden. Eine nominelle Leitungskapazität ist außerdem keine dauerhaft garantierte Nutzdatenrate. Im Rechner wird eine frei gewählte Nutzquote abgezogen, um Reserven sichtbar zu machen. Reale Werte müssen im vorgesehenen Aufbau gemessen werden. Änderungen der Bandzahl oder Speicherbreite können Rechen- und Speicherbedarf verändern, ohne die reale Rohübertragung proportional zu verändern."
      ],
      [
        "Trigger und Flusssteuerung sind eigene Themen",
        "Ein Trigger veranlasst eine Aufnahme oder einen definierten Ablauf. Eine schnelle Verbindung garantiert noch keine präzise zeitliche Synchronisation. Umgekehrt beseitigt ein präziser Trigger keinen Engpass beim Auslesen oder Speichern. Frage nach Triggerquelle, elektrischer Schnittstelle, Zeitstempeln und dem gewünschten Verhalten bei Überlast. Sollen Bilder verworfen werden, soll die Quelle warten oder muss jedes Ereignis erhalten bleiben? Solche Fragen gehören vor den Integrationsversuch. Bei Ethernet kommen Netzwerkkonfiguration, Adapter und passende Paketgrößen hinzu. Die Cubert-Anleitung beschreibt dafür modellabhängige Einstellungen. Übernimm diese aus der aktuellen Anleitung für das jeweilige System, statt eine universelle Netzwerkeinstellung auswendig zu empfehlen."
      ],
      [
        "Einen realistischen Integrationstest vereinbaren",
        "Lass einen längeren Lauf mit der geplanten Bildrate, Verarbeitung und Speicherung durchführen. Beobachte verlorene Aufnahmen, Warteschlangen und Verzögerungen; ein kurzer flüssiger Vorschaustrom reicht nicht. Teste auch, ob ein zweites Gerät Ressourcen am Host teilt und ob der Datenträger dauerhaft mitkommt. Dokumentiere Betriebssystem, SDK beziehungsweise Treiber, Kameramodus und Verarbeitungsversion. Eine nützliche Übergabe an die Technik enthält außerdem die Zielanwendung, die verlangte Schnittstellenkonformität und ein messbares Erfolgskriterium. Im Kundengespräch kannst du so sagen: „Wir haben den Datenweg eingegrenzt und prüfen diese konkrete Kombination.“ Das ist belastbarer als aus dem Wort GigE bereits eine vollständige Integrationszusage abzuleiten."
      ]
    ],
    "exercise": "Berechne den hypothetischen Würfelstrom für 400 × 400 × 100 Werte, 16 Bit und 10 Hz. Welche Information fehlt, um die reale Kameraverbindung zu bewerten?",
    "modelAnswer": "32 MB pro Würfel, 320 MB/s oder 2,56 Gbit/s ohne Overhead. Es fehlt insbesondere, ob und in welchem Format die Kamera Rohdaten oder bereits den Würfel überträgt; außerdem reale Nutzrate und Verarbeitung.",
    "take": "Anschluss, Protokoll, Datenformat und Verarbeitung müssen zusammenpassen. Rechne mit der Nutzlast am richtigen Ort der Messkette.",
    "q": [
      [
        "Bedeutet Ethernet-Anschluss automatisch GigE Vision?",
        [
          "Nein",
          "Nur bei einem langen Kabel",
          "Ja, jeder Ethernet-Anschluss"
        ],
        0,
        "Transporttechnik und Kamerastandard sind verschiedene Ebenen."
      ],
      [
        "Wie viele Bit sind ein Byte?",
        [
          "8",
          "10",
          "16"
        ],
        0,
        "Die Umrechnung ist entscheidend beim Vergleich von MB/s und Mbit/s."
      ],
      [
        "32 MB pro Aufnahme bei 10 Hz ergeben …",
        [
          "320 MB/s",
          "32 Mbit/s",
          "3,2 MB/s"
        ],
        0,
        "Aufnahmegröße mal Rate ergibt den unkomprimierten Datenstrom."
      ],
      [
        "Entspricht die fertige Würfelgröße immer der Kamera-Nutzlast?",
        [
          "Ja, grundsätzlich",
          "Nein, Rekonstruktion kann erst am Host erfolgen",
          "Nur wenn der Würfel bunt ist"
        ],
        1,
        "Die Position der Verarbeitung bestimmt, welche Daten die Verbindung tragen muss."
      ],
      [
        "Garantiert eine schnelle Leitung präzise Triggerung?",
        [
          "Ja, ab einem beliebigen Grenzwert",
          "Ja, immer",
          "Nein"
        ],
        2,
        "Bandbreite und zeitliche Synchronisation sind eigenständige Anforderungen."
      ],
      [
        "Welcher Nachweis ist für den Integrator sinnvoll?",
        [
          "Längerer Lauf mit Zielrate, Auswertung und Speicherung",
          "Nur ein Screenshot der Vorschau",
          "Nur das Einstecken des Kabels"
        ],
        0,
        "Dauerbetrieb zeigt Engpässe, Verluste und Latenzen unter realistischen Bedingungen."
      ]
    ],
    "experiment": "co-interfaces",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "EMVA · Schnittstellenstandards",
        "https://www.emva.org/standards-technology/other-standards/g3-interface-standards/"
      ],
      [
        "EMVA · GenICam",
        "https://www.emva.org/standards-technology/genicam/"
      ],
      [
        "Cubert Knowledge Base · Ethernet-Konfiguration",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/355991606/IP+Configuration+of+Ethernet+based+Cameras"
      ]
    ],
    "visualChapters": [
      2
    ]
  },
  {
    "id": "co-case",
    "title": "Praxisfall: Technologie überzeugend erklären",
    "topics": [
      "Nutzen mit einer konkreten Kundenanforderung verbinden",
      "Grafiken für eine verständliche Erklärung einsetzen",
      "Offene Nachweise sauber an die Technik übergeben"
    ],
    "scope": "Gemeinsamer Technologiefall mit fiktiven Anforderungen. Er ersetzt weder eine Produktfreigabe noch die praktische Freigabe für eigenständige Kundengespräche.",
    "body": [
      [
        "Die Anfrage vor der Produktempfehlung",
        "Ein Labor will bewegte Kunststoffstücke beobachten. Die Oberfläche ist nicht überall eben, ein relevanter spektraler Bereich wurde noch nicht sicher festgelegt. Der Kunde fragt: „Können Sie uns eine schnelle Kamera mit möglichst vielen Bändern anbieten?“ Beginne mit dem Ziel: Welche Materialien oder Eigenschaften sollen unterschieden werden, wie klein sind die Strukturen und wie bewegt sich die Probe? Frage nach den bisher vorhandenen Spektren und nach der gewünschten Ausgabe. Ein System für explorative Forschung kann andere Prioritäten haben als eine laufende Sortierentscheidung. Die Karte in der Übung führt dich durch vier typische Aussagen. Wähle jeweils die Erklärung, die einen Nutzen verständlich macht und einen überprüfbaren nächsten Schritt nennt."
      ],
      [
        "Den Snapshot-Nutzen an Bewegung knüpfen",
        "Zeige die Zeitgrafik aus dem ersten Modul. Erkläre, dass eine gemeinsame Aufnahme zeitliche Unterschiede zwischen spektralen Teilinformationen reduziert. Frage danach, wie weit sich die Probe während der Belichtung bewegt. Das lässt sich mit Geschwindigkeit, Belichtungszeit und Objektabtastung abschätzen. Eine besonders hohe Bildrate allein beantwortet die Frage nicht. Verknüpfe die Erklärung mit einem Versuch: Das Labor liefert repräsentative Bewegungsabläufe und wir prüfen Signal und Detailerkennbarkeit unter passender Beleuchtung. So wird aus einem allgemeinen Technologieargument eine konkrete Aussage über die Aufgabe. Versprich keine Materialtrennung allein aufgrund des Aufnahmeprinzips. Dafür braucht es Daten und eine passende Auswertung über relevante Probenvarianten hinweg."
      ],
      [
        "Räumliche und spektrale Grenzen sichtbar machen",
        "Für die unebenen Stücke zeigst du die Parallaxegrafik. Eine passende Ebene bedeutet nicht automatisch perfekte Zuordnung über jede Höhe. Danach zeigst du zwei nahe Peaks bei unterschiedlicher Bandbreite. Die beiden Bilder beantworten unterschiedliche Kundenfragen: „Sind die Werte räumlich vergleichbar?“ und „Ist das benötigte spektrale Merkmal überhaupt ausreichend getrennt?“ Bitte den Kunden, kritische Kanten, Höhenunterschiede und bekannte Merkmale zu benennen. Ein guter Test enthält gerade die schwierigen Fälle. Wenn bisher nur homogene flache Proben vermessen wurden, darf die Aussage nicht unbemerkt auf beliebige Schüttgüter ausgeweitet werden. Dokumentiere, welche Randbedingungen tatsächlich geprüft wurden und welche erst im nächsten Versuch folgen."
      ],
      [
        "Die Integration ohne Abkürzung erklären",
        "Der Kunde arbeitet mit einer bestehenden Vision-Software und nennt GigE Vision als Vorgabe. Bestätige zunächst die Anforderung, nicht vorschnell die Kompatibilität. Halte fest, welche Kamera, welcher Modus und welche Softwareversion gemeinsam geprüft werden sollen. Kläre außerdem, an welcher Stelle die Rekonstruktion läuft und ob Rohdaten, Spektren oder nur Klassifikationsergebnisse weitergereicht werden. Der Datenratenrechner hilft bei einer ersten Größenordnung, aber die reale Nutzlast muss bekannt sein. Ein Übergabepaket an die Applikation enthält das Ziel, die Proben, Bewegungsdaten, Höhenbereich, Spektralbedarf, Zielrate und gewünschte Integration. Damit kann das technische Team einen zielgerichteten Versuch planen, statt dieselben Grundfragen erneut zu stellen."
      ],
      [
        "Den Abschluss als prüfbaren nächsten Schritt formulieren",
        "Eine passende Zusammenfassung lautet: „Snapshot ist für Ihre Bewegung interessant. Wir prüfen jetzt die Merkmalsinformation und die Zuordnung über Ihren Höhenbereich. Anschließend testen wir den Datenweg in Ihrer Softwareumgebung.“ Vereinbare konkrete Erfolgskriterien und einen Termin für die Auswertung. Trenne dabei drei Ebenen: beobachtete Ergebnisse, plausible Erklärung und noch offene Zusage. Ein überzeugendes Gespräch muss nicht jede Frage sofort endgültig beantworten. Es muss zeigen, dass du die Aufgabe verstanden hast und weißt, wie die verbleibenden Fragen geprüft werden. Die Sterne dieses Moduls belegen Quizwissen. Eigenständige Kundengespräche werden weiterhin über das vorgesehene Praxisprofil mit einer zusätzlichen Trainerprüfung freigegeben."
      ]
    ],
    "exercise": "Formuliere eine 60-Sekunden-Erklärung für das Labor: ein Nutzen, zwei relevante Prüfungen und ein konkreter nächster Schritt.",
    "modelAnswer": "Snapshot reduziert zeitliche Unterschiede in der bewegten Szene. Wir prüfen das spektrale Merkmal sowie Bandzuordnung und Schärfe über den Höhenbereich. Danach folgt ein dokumentierter Versuch mit repräsentativen Proben und der geplanten Integration; Zusagen folgen aus den Ergebnissen.",
    "take": "Gute Technologieberatung verbindet ein verständliches Prinzip mit der Aufgabe und einem überprüfbaren nächsten Schritt.",
    "q": [
      [
        "Was zuerst bei „möglichst viele Bänder“ klären?",
        [
          "Sofort eine Garantie aussprechen",
          "Die größte verfügbare Zahl versprechen",
          "Messziel und benötigte Merkmale"
        ],
        2,
        "Der Nutzen entsteht aus passender Messinformation."
      ],
      [
        "Welche Aussage zu Bewegung ist angemessen?",
        [
          "Snapshot verhindert jede Unschärfe",
          "Snapshot reduziert zeitlichen Bandversatz; Belichtung bleibt zu prüfen",
          "Hohe Bildrate garantiert Materialerkennung"
        ],
        1,
        "Das Prinzip löst einen bestimmten Teil der Aufgabe."
      ],
      [
        "Welche Grafik passt zu Höhenunterschieden?",
        [
          "Ein Firmenlogo",
          "Nur ein Balken zur Dateigröße",
          "Parallaxe und Registrierungsebene"
        ],
        2,
        "Sie zeigt die tiefenabhängige räumliche Zuordnung."
      ],
      [
        "Was tun bei einer GigE-Vision-Vorgabe?",
        [
          "Ethernet-Stecker als alleinigen Beweis nennen",
          "Konkrete Modell- und Softwarekombination prüfen",
          "Nur eine höhere Bildrate anbieten"
        ],
        1,
        "Kompatibilität verlangt mehr als den Anschluss."
      ],
      [
        "Was gehört in die technische Übergabe?",
        [
          "Proben, Geometrie, Bewegung, Spektralbedarf und Erfolgskriterien",
          "Nur der gewünschte Preis",
          "Nur „Kunde will HSI“"
        ],
        0,
        "Konkrete Anforderungen ermöglichen einen sinnvollen Versuch."
      ],
      [
        "Erteilen Quizsterne automatisch die Freigabe für Kundengespräche?",
        [
          "Nein, die Praxisprüfung bleibt zusätzlich nötig",
          "Ja, nach einem Modul",
          "Ja, mit drei Sternen im Abschlussfall"
        ],
        0,
        "Wissen und praktische Freigabe bleiben getrennt."
      ]
    ],
    "experiment": "co-case",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Cubert · Light Field Technology",
        "https://cubert-hyperspectral.com/en/knowledge/light-field-technology/"
      ],
      [
        "Cubert Knowledge Base · Focus und Band Alignment",
        "https://cuvis.atlassian.net/wiki/spaces/CKB/pages/346521601/Focus+Adjustment+and+Alignment+of+spectral+Bands"
      ],
      [
        "EMVA · GenICam",
        "https://www.emva.org/standards-technology/genicam/"
      ]
    ],
    "visualChapters": [
      0
    ]
  }
];
for(const [j,l] of CORE_LESSONS.entries()){LESSON_CONTENT.push(l);const m=CURRICULUM.worlds.find(w=>w.id==="core").modules.find(m=>m.id===l.id);Object.assign(m,{title:l.title,topics:l.topics,status:"pilot",contentId:l.id,minutes:12,version:1,passRatio:.8,prerequisites:j?[CORE_LESSONS[j-1].id]:[]});}
