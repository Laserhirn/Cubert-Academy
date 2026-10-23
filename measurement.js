/* Messpraxis & Beleuchtung · 2.4 · Expert review pending. */
const MEASUREMENT_LESSONS = [
  {
    "id": "reference",
    "title": "Weißreferenz: vom Kamerasignal zum Vergleich",
    "topics": [
      "Rohsignal, Strahldichte und Reflexionsfaktor auseinanderhalten",
      "Ein charakterisiertes White Target passend einsetzen",
      "Die Referenzrechnung und ihre Gültigkeitsbedingungen prüfen"
    ],
    "scope": "Die Messgrößen und die Winkelabhängigkeit kennst du aus Licht & Physik. Jetzt geht es um den praktischen Referenzvergleich. Die Dunkelaufnahme wird hier benötigt; ihre Aufnahme und Prüfung vertieft das nächste Modul.",
    "body": [
      [
        "Zuerst festlegen, welche Größe gebraucht wird",
        "Vor einer Aufnahme klärst du die Messfrage: Soll die von einer Szene kommende Strahlung absolut gemessen werden, oder soll das Reflexionsverhalten verschiedener Proben verglichen werden? Ein Rohbild enthält zunächst digitale Werte. Radiometrisch kalibrierte Daten können eine physikalische Strahldichte ausdrücken. Ein Reflexionsvergleich benötigt zusätzlich eine geeignete Referenz und passende Bedingungen. Ein Klick auf „Reflektanz“ macht diese Voraussetzungen nicht entbehrlich.<br><br>Bei gerichteter Beobachtung einer realen Probe erhältst du häufig eine geometrieabhängige Reflexionsgröße beziehungsweise einen Reflexionsfaktor. Das ist nicht automatisch der über alle Richtungen integrierte reflektierte Energieanteil. Besonders bei glänzenden Proben ist diese Unterscheidung wichtig. Halte deshalb fest, welche Ausgabegröße die verwendete Software tatsächlich liefert und auf welche Referenz, Geometrie und Verarbeitung sie sich bezieht. Die Bedienung der Cubert-Software wird separat geschult."
      ],
      [
        "Was ein White Target auszeichnet",
        "Ein White Target ist eine Referenzfläche mit charakterisierten spektralen Reflexionseigenschaften. „Weiß“ allein genügt nicht. Kopierpapier kann optische Aufheller, Strukturen, richtungsabhängige Effekte und ein unbekanntes Verhalten außerhalb des sichtbaren Bereichs besitzen. Eine saubere weiße Fläche ist deshalb nicht automatisch eine kalibrierte Referenz.<br><br>Verwende die zum Standard gehörenden Daten über den benötigten Spektralbereich. Ein nominaler 99-%-Standard besitzt nicht zwingend bei jeder Wellenlänge exakt 0,99. Auch die Kalibriergeometrie und die Nähe zur diffusen Idealannahme müssen zur Anwendung passen. Dokumentiere Kennung, Kalibrierdatei und Zustand. Berühre die optische Oberfläche nicht unnötig und lagere sie geschützt. Reinige sie nach Herstellervorgabe; eine eigenmächtige Behandlung kann die Reflexion verändern. Ein beschädigter oder verschmutzter Standard lässt sich nicht allein durch erneutes Aufnehmen wieder vertrauenswürdig machen."
      ],
      [
        "Die Grundrechnung verstehen",
        "Für gleiche Belichtungszeit, Verstärkung, lineare ungesättigte Daten und unveränderte Beleuchtung lautet eine vereinfachte Rechnung pro Wellenlänge: <b>R̂ = ρref · (S − Ds)/(W − Dw)</b>. S bezeichnet das Probensignal, W das Referenzsignal, Ds und Dw die jeweils passenden Dunkelwerte. ρref ist der bekannte Referenzwert. Bei identischen Bedingungen kann dieselbe geeignete Dunkelreferenz für beide Aufnahmen verwendet werden.<br><br>Beispiel: S = 500 DN, W = 1.000 DN, D = 100 DN und ρref = 0,98. Daraus folgt 0,98 · 400/900 ≈ 0,436. Die einfache Division 500/1.000 würde 0,5 ergeben und den Offset ignorieren. Diese Formel ist ein Lernmodell, keine vollständige Cubert-Verarbeitungsvorschrift. Bereits dunkel- oder radiometrisch korrigierte Daten dürfen nicht unbemerkt nochmals gleich korrigiert werden. Prüfe den Datenzustand und den vorgesehenen Softwareablauf."
      ],
      [
        "Die Referenz passend aufnehmen",
        "Bringe den Aufbau zunächst in einen stabilen Zustand. Lege die Aufnahmeparameter fest und prüfe sowohl Probe als auch Referenz auf ausreichendes Signal und Sättigung. Erfasse die erforderliche Dunkelreferenz und dann den Standard unter einer Beleuchtung und Orientierung, die den Probenvergleich sinnvoll abbilden. Die Referenzregion muss vollständig auf einer sauberen geeigneten Fläche liegen; Rand, Schatten, Halterung und Glanzstellen werden nicht versehentlich mitgemittelt.<br><br>Ein kleines Panel neben dem Objekt erfasst nicht automatisch die räumliche Beleuchtungsverteilung über das ganze Bild. Ein großflächiges Referenzbild kann ebenfalls nur dann korrigieren, wenn sich seine Bedingungen auf die spätere Probenaufnahme übertragen lassen. Position, Abstand, Orientierung und Beleuchtung werden daher dokumentiert. Bei geänderter Geometrie, Lichtquelle oder Kameraeinstellung überprüfst du die Referenzgültigkeit und nimmst erforderlichenfalls neue Referenzen auf."
      ],
      [
        "Ungültige Werte erkennen statt schönrechnen",
        "Ist W − Dw sehr klein, wird die Division instabil: Kleine Schwankungen im Nenner können große Ausschläge erzeugen. Ein nicht positives Referenzsignal nach Dunkelkorrektur ist in diesem Modell unbrauchbar. Auch Sättigung, wechselnde Beleuchtung oder eine falsche Referenzdatei können falsche Ergebnisse liefern. Ein glattes Spektrum beweist nicht, dass die Korrektur gültig war.<br><br>Werte über 1 sind ein Prüfhinweis. Sie können beispielsweise durch gerichteten Glanz relativ zur diffusen Referenz auftreten, aber ebenso durch Referenzfehler. Begrenze sie nicht ungeprüft auf 1; damit würdest du mögliche Diagnoseinformation entfernen. Markiere ungültige Bereiche und bewahre Rohdaten samt Referenzen auf. Wenn die Referenz unter nicht mehr passenden Bedingungen entstand, ist eine neue Messung meist aussagekräftiger als eine zusätzliche rechnerische Kosmetikkorrektur."
      ]
    ],
    "exercise": "Berechne den Reflexionsfaktor für S = 500, W = 1.000, D = 100 DN und ρref = 0,98. Was prüfst du, wenn der Nenner in einem Band nur noch wenige DN beträgt?",
    "modelAnswer": "R̂ = 0,98 · (500 − 100)/(1.000 − 100) ≈ 0,436 beziehungsweise 43,6 %. Bei schwachem Nenner prüfe Beleuchtung, Systemempfindlichkeit, Referenzregion und Dunkelkorrektur. Beurteile die Unsicherheit und markiere den Bereich gegebenenfalls als nicht auswertbar; Division erzeugt kein fehlendes Signal.",
    "take": "Eine Weißreferenz ist ein charakterisierter Vergleich unter passenden Bedingungen. Sie ersetzt weder Dunkelkorrektur noch gültige Aufnahmebedingungen.",
    "q": [
      [
        "Was eignet sich als belastbare Weißreferenz?",
        [
          "Jedes weiß erscheinende Blatt",
          "Ein möglichst heller Pixel der Probe",
          "Ein charakterisierter Standard mit passenden spektralen Daten"
        ],
        2,
        "Der Referenzwert muss bekannt sein; der sichtbare Farbeindruck reicht nicht."
      ],
      [
        "500, 1.000 und 100 DN; ρref = 0,98: R̂ ist ungefähr …",
        [
          "0,436",
          "0,980",
          "0,500"
        ],
        0,
        "Zuerst Dunkelwert abziehen, dann das Verhältnis mit dem Referenzwert multiplizieren."
      ],
      [
        "W − Dw ist null. Was ist richtig?",
        [
          "Man setzt das Ergebnis auf 100 %",
          "Die Probe reflektiert sicher 0 %",
          "Das Verhältnis ist ungültig"
        ],
        2,
        "Ein fehlendes nutzbares Referenzsignal erlaubt diese Division nicht."
      ],
      [
        "Ein kleines Panel neben dem Objekt …",
        [
          "Macht eine Dunkelreferenz grundsätzlich überflüssig",
          "Erfasst nicht automatisch die Beleuchtung an jedem Objektpunkt",
          "Korrigiert immer das ganze räumliche Beleuchtungsfeld"
        ],
        1,
        "Die örtliche und geometrische Übertragbarkeit muss geprüft werden."
      ],
      [
        "Ein Wert über 1 sollte …",
        [
          "Auf Geometrie und Referenzfehler geprüft werden",
          "Immer als Materialidentifikation gelten",
          "Immer direkt auf 1 begrenzt werden"
        ],
        0,
        "Glanz kann einen Richtungsfaktor über 1 erzeugen; auch Messfehler sind möglich."
      ],
      [
        "Eine Referenzdatei und Rohdaten speichert man zusammen, damit …",
        [
          "Die Geometrie automatisch korrigiert wird",
          "Die Photonenzahl nachträglich steigt",
          "Die Korrektur später nachvollziehbar bleibt"
        ],
        2,
        "Nachvollziehbarkeit benötigt die tatsächlich verwendeten Referenzen und Bedingungen."
      ]
    ],
    "experiment": "me-white",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Malvern Panalytical · White Reference und Kalibrierdatei",
        "https://www.malvernpanalytical.com/en/learn/knowledge-center/insights/calibrating-with-a-white-reference-for-a-baseline"
      ],
      [
        "Labsphere · Pflege von Reflexionsstandards",
        "https://www.labsphere.com/wp-content/uploads/2021/09/Spectralon-Standards-Care-and-Handling-Guidelines.pdf"
      ]
    ]
  },
  {
    "id": "me-dark",
    "title": "Dunkelreferenz und Kalibrierung richtig nutzen",
    "topics": [
      "Dunkelbild und dunkle Probe unterscheiden",
      "Passende Dunkelbedingungen und Datenzustände prüfen",
      "Anwenderreferenz von Gerätekalibrierung abgrenzen"
    ],
    "scope": "Dieses Modul erklärt die Basiskorrektur der Kamera. Die Weißreferenzrechnung wurde zuvor eingeführt; Rauschquellen und Mittelung folgen im nächsten Modul. Konkrete Kalibriermenüs bleiben in der Software-Lernwelt.",
    "body": [
      [
        "Warum ohne Licht nicht automatisch null entsteht",
        "Auch bei optisch geschlossenem Eingang liefert eine Kamera gewöhnlich Messwerte. Dazu tragen elektronische Offsets und während der Belichtung entstehende Dunkelladung bei. Dunkelladung und ihre Schwankungen hängen unter anderem von Sensortemperatur und Integrationszeit ab. Ausleseelektronik und Betriebsmodus können weitere Einflüsse verursachen. Der Dunkelwert ist deshalb keine universelle Konstante für alle Aufnahmen.<br><br>Eine schwarze Probe ist keine Dunkelreferenz. Sie kann noch Licht reflektieren, insbesondere außerhalb des sichtbaren Bereichs. Auch das Ausschalten einer einzelnen Lampe reicht nicht, wenn Fremdlicht in die Kamera gelangt. Die Dunkelaufnahme soll den kameraseitigen Zustand ohne relevanten optischen Eintrag erfassen, mit dem dafür vorgesehenen Verschluss oder einer geeigneten lichtdichten Abdeckung. Sie ist von einer separaten Aufnahme des beleuchteten Hintergrunds zu unterscheiden."
      ],
      [
        "Die passende Dunkelaufnahme erfassen",
        "Stabilisiere das System nach dem vorgesehenen Geräteablauf. Wähle die für die Messung gültige Belichtungszeit, Verstärkung und Betriebsart; berücksichtige gegebenenfalls ROI, Binning oder weitere Einstellungen, wenn sie die Kalibrierung beeinflussen. Schließe den optischen Eingang zuverlässig und erfasse die Referenz. Prüfe danach, ob die Aufnahme plausibel ist oder Hinweise auf Lichteinfall beziehungsweise eine falsche Konfiguration enthält.<br><br>Dokumentiere Temperatur beziehungsweise verfügbare Statuswerte und Zeitpunkt. Ein Hersteller kann statt einer neuen Aufnahme auch ein validiertes Dunkelmodell oder eine interne Korrektur vorsehen. Entscheidend ist dessen gültiger Bereich. Es gibt keine allgemeine Vorschrift, bei jeder kleinen Temperaturänderung blind ein neues Dunkelbild zu erzwingen. Umgekehrt darf eine alte Referenz nach deutlicher Zustandsänderung nicht ohne Gültigkeitsprüfung weiterverwendet werden. Die Geräteanleitung legt die konkrete Vorgehensweise fest."
      ],
      [
        "Was die Subtraktion leistet und was nicht",
        "Eine passende Dunkelreferenz kann den mittleren additiven Untergrund schätzen und von der Aufnahme abziehen. Sie entfernt nicht die zufällige Dunkelrauschrealisierung, die während der eigentlichen Probenaufnahme entstanden ist. Das Referenzbild besitzt selbst Rauschen. Die Subtraktion zweier unabhängiger verrauschter Werte addiert deren Varianzen, anstatt beide Zufallsschwankungen aufzuheben.<br><br>Mehrere stabile Dunkelaufnahmen können zu einer weniger verrauschten Schätzung gemittelt werden. Das hilft jedoch nicht gegen falsche Temperatur, falsche Belichtungszeit oder Lichtleckage. Beispiel: Eine Probe liefert 500 DN bei tatsächlichem Untergrund 100 DN. Subtrahierst du fälschlich 160 DN, erhältst du 340 statt 400 DN Nutzsignal. Das ist ein systematischer Fehler. Bei signalarmen Bändern können dadurch sogar negative korrigierte Werte entstehen; diese werden diagnostiziert, nicht sofort als physikalische negative Reflexion interpretiert."
      ],
      [
        "Gerätekalibrierung ist mehr als eine Nutzerreferenz",
        "Eine Gerätekalibrierung beschreibt Zusammenhänge zwischen Instrumentensignal und Messgrößen beziehungsweise bekannten Eigenschaften. Dazu können Wellenlängenzuordnung, Empfindlichkeit, Nichtlinearität oder räumlich-spektrale Zusammenhänge gehören. Welche Korrekturen enthalten sind, hängt vom System ab. Ein White Target oder ein Dunkelbild ersetzt diese Charakterisierung nicht.<br><br>Eine Anwenderreferenz erfasst dagegen bestimmte aktuelle Messbedingungen, beispielsweise einen Dunkelzustand oder die Beleuchtung einer bekannten Fläche. Beide Ebenen müssen zusammenpassen. Prüfe Kameraidentität, zulässige Optik- und Betriebsbedingungen sowie Version und Herkunft der verwendeten Kalibrierdaten. Nach einem Eingriff in das System kann eine Gültigkeitsprüfung notwendig sein. Leite aus einem gelungenen Weißabgleich keine neue Wellenlängen- oder absolute radiometrische Kalibrierung ab; dafür werden andere Nachweise und Verfahren benötigt."
      ],
      [
        "Den Verarbeitungspfad sichtbar halten",
        "Notiere für jeden Datensatz, ob es sich um Rohdaten, bereits dunkelkorrektierte Werte, radiometrische Daten oder eine abgeleitete Reflexionsgröße handelt. Eine doppelte Dunkelsubtraktion erzeugt einen Fehler, der in der Vorschau unauffällig bleiben kann. Auch ein scheinbar praktischer Export kann bereits Skalierungen oder Offsetkorrekturen enthalten. Kläre die Bedeutung des Formats, bevor du eigene Formeln anwendest.<br><br>Bei einem unerwarteten Signal prüfst du daher zuerst die Kette: richtige Aufnahme, richtige Referenz, richtige Einstellungen, richtige Verarbeitung. Bewahre ursprüngliche Daten und angewandte Parameter nachvollziehbar auf. Eine Wiederaufnahme mit passendem Zustand ist bei ungeklärtem Referenzfehler oft der richtige nächste Schritt. Die Schuleinheit endet nicht mit „Dunkelbild vorhanden“, sondern mit der Fähigkeit zu erklären, warum genau dieses Dunkelbild oder Modell für genau diese Messung gültig ist."
      ]
    ],
    "exercise": "Eine Kollegin nutzt ein Dunkelbild mit 10 ms für eine Probe mit 1 ms und sagt: „Es ist ja beides dunkel.“ Wie würdest du die Verwendung beurteilen?",
    "modelAnswer": "Die Zeiten stimmen nicht überein; Dunkelladung und gegebenenfalls weitere Signalanteile können sich ändern. Ohne validiertes kameraseitiges Modell ist die Referenz nicht einfach austauschbar. Verwende die für 1 ms und den aktuellen Zustand vorgesehene Referenz beziehungsweise Korrektur und prüfe, ob die Daten bereits korrigiert wurden.",
    "take": "Ein Dunkelbild korrigiert einen passenden mittleren Untergrund. Es löscht weder jedes Rauschen noch ersetzt es die Gerätekalibrierung.",
    "q": [
      [
        "Eine schwarze Probe ist als Dunkelreferenz …",
        [
          "Immer geeignet",
          "Besser als eine lichtdichte Abdeckung",
          "Nicht gleichwertig mit optisch geschlossenem Eingang"
        ],
        2,
        "Eine schwarze Oberfläche kann im Messbereich noch Strahlung in die Kamera reflektieren."
      ],
      [
        "Welche Referenz passt am ehesten?",
        [
          "Gleicher Dateiname",
          "Gleiche Bildhelligkeit in der Vorschau",
          "Passende Aufnahmeparameter und gültiger Temperaturzustand"
        ],
        2,
        "Die physikalischen und elektronischen Bedingungen müssen passen."
      ],
      [
        "Dunkelsubtraktion entfernt …",
        [
          "Eine Schätzung des mittleren additiven Untergrunds",
          "Die gesamte zufällige Dunkelrauschrealisierung",
          "Jede Form von Streulichtkorrektur"
        ],
        0,
        "Zufällige Schwankungen der Probenaufnahme bleiben; die Referenz bringt eigene Unsicherheit mit."
      ],
      [
        "500 DN, echter Untergrund 100 DN, falsch abgezogen 160 DN: Fehler im Nutzsignal?",
        [
          "Kein Fehler",
          "60 DN zu niedrig",
          "60 DN zu hoch"
        ],
        1,
        "Richtig wären 400 DN; heraus kommen 340 DN."
      ],
      [
        "Ein White Target ersetzt die Wellenlängenkalibrierung …",
        [
          "Wenn die Kurve glatt ist",
          "Nicht",
          "Immer nach einer Neuaufnahme"
        ],
        1,
        "Ein Reflexionsstandard liefert nicht automatisch die erforderlichen spektralen Positionsnachweise."
      ],
      [
        "Vor eigener Dunkelkorrektur solltest du prüfen, …",
        [
          "Ob die Eingabedaten bereits korrigiert sind",
          "Ob das Objekt im sichtbaren Licht dunkel aussieht",
          "Ob die Darstellung farbig genug ist"
        ],
        0,
        "Doppelte Subtraktion kann systematische Fehler verursachen."
      ]
    ],
    "experiment": "me-dark",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Hamamatsu · Dunkelrauschen",
        "https://camera.hamamatsu.com/us/en/learn/technical_information/thechnical_guide/dark_noise.html"
      ],
      [
        "NERC · Design and Calibration of Field Spectrometers",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_3/"
      ]
    ]
  },
  {
    "id": "noise",
    "title": "Rauschen verstehen und gezielt reduzieren",
    "topics": [
      "Zufällige Schwankung von Drift und festen Mustern trennen",
      "Signal-Rausch-Verhältnis und Mittelungsgewinn berechnen",
      "Eine geeignete Verbesserung ohne Informationsverlust auswählen"
    ],
    "scope": "Belichtungszeit und Gain kennst du aus Kamera & Optik. Hier geht es um die Diagnose von Rauschen und den praktischen Nutzen von mehr Photonen, Wiederholungen und Mittelung. Modelltraining wird nicht behandelt.",
    "body": [
      [
        "Zuerst klären, was im Bild schwankt",
        "Nicht jede unruhige Kurve ist zufälliges Rauschen. Photonenrauschen entsteht aus der statistischen Ankunft beziehungsweise Detektion von Lichtquanten. Dunkelrauschen betrifft thermisch erzeugte Ladung; Ausleserauschen entsteht in der Erfassungskette. Daneben können feste Pixelmuster, Beleuchtungsflimmern, Bewegungen, Drift und echte Probenunterschiede auffallen. Diese Ursachen verlangen unterschiedliche Maßnahmen.<br><br>Beobachte deshalb eine stabile Referenz in mehreren aufeinanderfolgenden Aufnahmen. Ändert sich das gesamte Bild gemeinsam, denke auch an Beleuchtung oder Temperatur. Bleibt ein Muster an denselben Bildkoordinaten, prüfe instrumentelle und räumliche Einflüsse. Bewegt sich die Struktur mit der Probe, kann sie zum Objekt gehören. Solche Beobachtungen sind Hinweise, keine alleinigen Beweise. Ein einziges verrauscht wirkendes Bild reicht meist nicht, um die Ursache sicher zu bestimmen."
      ],
      [
        "Signal und Rauschen quantitativ vergleichen",
        "Das Signal-Rausch-Verhältnis ist das relevante Signal geteilt durch eine passend definierte Rauschgröße, häufig eine Standardabweichung. Definition, Messbedingungen und Signalbezug müssen genannt werden. Für rein photonenschussrauschbegrenzte photoerzeugte Elektronenzahlen N gilt näherungsweise σ = √N und SNR = √N. Bei 100 Elektronen ist das SNR 10; bei 400 Elektronen beträgt es 20.<br><br>Viermal so viele Elektronen verdoppeln in diesem Grenzfall also das SNR. Die absolute Schwankung wächst dabei von 10 auf 20 Elektronen, ihr relativer Anteil fällt aber von 10 % auf 5 %. Verwechsle diese beiden Aussagen nicht. In einem einfachen Modell mit unabhängigem Ausleserauschen σr und Dunkelladung D lautet das SNR N/√(N + D + σr²). Die konkrete Kamera kann weitere Beiträge und Verarbeitungsschritte haben; die Formel ist eine Orientierung."
      ],
      [
        "Was Mittelung tatsächlich verbessert",
        "Mittelst du M unabhängige Aufnahmen desselben unveränderten Signals, sinkt die Standardabweichung des Mittelwerts idealerweise mit 1/√M. Das SNR steigt entsprechend mit √M. Vier Aufnahmen liefern ungefähr den doppelten, sechzehn den vierfachen SNR-Wert einer einzelnen Aufnahme. Dabei bleibt der Mittelwert des Signals gleich; es wird nicht durch die Mittelung heller.<br><br>Die Voraussetzungen sind entscheidend. Ein gemeinsamer Kalibrierfehler, langsame Drift oder stets gleiche Beleuchtungsartefakte verschwinden nicht mit dieser Regel. Eine einzelne gemeinsam verwendete verrauschte Referenz kann außerdem einen gemeinsamen Fehler in viele Probenwerte tragen. Mittelung mehrerer bereits referenzierter Probenbilder entfernt diesen Anteil nicht beliebig. Prüfe daher auch die Qualität der Referenzen. Mehr Wiederholungen sind nur dann ein sinnvoller Aufwand, wenn sie den für die Aufgabe begrenzenden Fehler tatsächlich reduzieren."
      ],
      [
        "Räumlich, zeitlich oder spektral mitteln?",
        "Zeitliche Mittelung kostet Aufnahmezeit und setzt eine genügend stabile beziehungsweise korrekt ausgerichtete Szene voraus. Räumliche Mittelung über eine Region verwendet mehrere Bildpunkte, kann aber unterschiedliche Materialien, Kanten oder Glanzbereiche mischen. Wenn kleine Fremdkörper verschwinden, wurde nicht nur Rauschen entfernt, sondern möglicherweise das gesuchte Signal.<br><br>Spektrale Glättung kann zufällige Schwankungen reduzieren, aber schmale Merkmale abschwächen oder ihre Form verändern. Interpolation erzeugt keine neue Information. Wähle die Verarbeitung deshalb anhand der Zielmerkmale und dokumentiere Fenster, Regionen und Methoden. Bei einem stabilen Laborstandard ist eine große homogene Region sinnvoll; bei kleinen räumlichen Defekten kann dieselbe Region die Aufgabe unbrauchbar machen. Bewahre die unbearbeiteten Daten, damit der Nutzen und der Informationsverlust einer Verarbeitung überprüfbar bleiben."
      ],
      [
        "Eine Verbesserung nach Ursache wählen",
        "Bei zu wenigen Photonen helfen geeignete Beleuchtung, mehr optischer Durchsatz oder längere Belichtung, sofern Sättigung und Bewegung es erlauben. Bei temperaturabhängigem Dunkelbeitrag können geeigneter stabiler Betrieb und die vorgesehene Kühlung helfen; die Gerätevorgaben bleiben maßgeblich. Bei Flicker brauchst du eine stabile oder passend synchronisierte Lichtsteuerung. Bei Drift überprüfst du den zeitlichen Verlauf und den Aufbau.<br><br>Ein höherer Gain-Wert ist keine allgemeine Rauschheilung. Er sammelt keine weiteren Photonen, auch wenn analoges Gain die Gewichtung nachfolgender Rauschanteile verändern kann. Vergleiche Verbesserungen unter klaren Bedingungen: gleiche Probe, gleiche Region und dasselbe fachliche Erfolgskriterium. Berichte dann beispielsweise „die Streuung der Kontrollmessung ist gesunken“, statt aus einem glatteren Bild automatisch bessere Materialtrennung abzuleiten. Rauschreduktion muss der Messaufgabe dienen."
      ]
    ],
    "exercise": "Eine stabile Aufnahme besitzt SNR 12. Welches SNR erwartest du idealerweise nach Mittelung von 9 unabhängigen Bildern? Warum wird ein gemeinsamer Fehler der Weißreferenz dadurch nicht automatisch dreimal kleiner?",
    "modelAnswer": "Der ideale Gewinn beträgt √9 = 3, also SNR 36. Ein gemeinsamer Referenzfehler ist zwischen den Bildern korreliert und wird mitkopiert. Die √M-Regel betrifft unabhängige zufällige Beiträge unter stabilen Bedingungen.",
    "take": "Mehr Photonen und unabhängige Mittelung helfen gegen bestimmte Zufallsschwankungen. Drift, falsche Referenzen und verlorene Details brauchen andere Lösungen.",
    "q": [
      [
        "Photonenschussrauschbegrenzt: 100 → 400 Elektronen ändern das SNR von …",
        [
          "100 auf 400",
          "10 auf 20",
          "10 auf 40"
        ],
        1,
        "SNR = √N; vierfaches Signal verdoppelt das SNR in diesem Grenzfall."
      ],
      [
        "Neun unabhängige stabile Bilder mit SNR 12 ergeben ideal …",
        [
          "SNR 24",
          "SNR 108",
          "SNR 36"
        ],
        2,
        "Der Gewinn des Mittelwerts ist √9 = 3."
      ],
      [
        "Ein gemeinsamer Kalibrierfehler verschwindet durch Bildmittelung …",
        [
          "Sobald mindestens vier Bilder vorliegen",
          "Nicht nach der √M-Regel",
          "Immer mit 1/M"
        ],
        1,
        "Ein gemeinsamer Fehler ist korreliert und wird nicht unabhängig ausgemittelt."
      ],
      [
        "Räumliche Mittelung über einen kleinen Defekt kann …",
        [
          "Nur Rauschen verändern",
          "Den Defekt mit dem Hintergrund vermischen",
          "Die ursprüngliche räumliche Auflösung erhöhen"
        ],
        1,
        "Die Zielinformation kann mit weggeglättet werden."
      ],
      [
        "Synchrones Helligkeitsschwanken vieler Bildpunkte legt unter anderem nahe, …",
        [
          "Sofort die Probe chemisch neu zu klassifizieren",
          "Beleuchtung und zeitliche Stabilität zu prüfen",
          "Nur die Bilddatei zu vergrößern"
        ],
        1,
        "Eine gemeinsame Schwankung kann durch Lichtsteuerung oder Drift entstehen."
      ],
      [
        "Eine gute Rauschmaßnahme wird daran beurteilt, ob …",
        [
          "Sie das relevante Messziel bei dokumentierten Bedingungen verbessert",
          "Die Kurve möglichst glatt aussieht",
          "Jeder Bildpunkt gleich wird"
        ],
        0,
        "Glättung und Messqualität sind nicht automatisch gleichbedeutend."
      ]
    ],
    "experiment": "me-noise",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Hamamatsu · Photonenrauschen",
        "https://camera.hamamatsu.com/us/en/learn/technical_information/thechnical_guide/photon_shot_noise.html"
      ],
      [
        "Hamamatsu · Signal-Rausch-Verhältnis",
        "https://camera.hamamatsu.com/us/en/learn/technical_information/thechnical_guide/calculating_snr.html"
      ],
      [
        "Hamamatsu · Dunkelrauschen",
        "https://camera.hamamatsu.com/us/en/learn/technical_information/thechnical_guide/dark_noise.html"
      ]
    ]
  },
  {
    "id": "illumination",
    "title": "Die richtige Lichtquelle für die Messaufgabe",
    "topics": [
      "Spektrale Versorgung von sichtbarer Helligkeit unterscheiden",
      "LED, Halogen und weitere Quellen sinnvoll einordnen",
      "Stabilität, Geometrie und Probe in die Lichtwahl einbeziehen"
    ],
    "scope": "Hier wird die Beleuchtung ausgewählt. Die konkrete Einrichtung im Labor und die Besonderheiten des Sonnenlichts folgen in eigenen Modulen. Grundlagen zu Wellenlänge und Radiometrie werden angewendet, nicht neu eingeführt.",
    "body": [
      [
        "Die Quelle muss die gesuchte Information beleuchten",
        "Eine Kamera misst nur Strahlung, die das gesamte System erreicht. Für Reflexionsmessungen muss die Quelle ausreichend Photonen in den interessierenden Wellenlängenbereichen liefern. Ein hoher Luxwert oder ein weißer Farbeindruck garantiert dies nicht. Frage nach spektraler Verteilung, ausreichendem Signal am schwächsten relevanten Band und der tatsächlich verfügbaren Lichtmenge auf der Probe.<br><br>Beginne mit der Fragestellung: Welche Merkmale sollen in welchem Spektralbereich untersucht werden? Welche Belichtungszeit erlaubt die Bewegung? Wie groß ist die Fläche? Eine kleine helle Stelle kann für einen Punktvergleich genügen und gleichzeitig für eine flächige Inspektion unbrauchbar sein. Leistung am Lampenausgang, Leistung nach einer Faser und Bestrahlungsstärke auf der Probe sind unterschiedliche Angaben. Vergleiche die für deinen Aufbau relevante Größe."
      ],
      [
        "LED und Halogen: unterschiedliche Stärken",
        "Einzelne LEDs liefern typischerweise begrenzte Spektralbereiche. Weiße LEDs kombinieren häufig einen Anregungsbereich mit breiterer Leuchtstoffemission; ihre genaue Verteilung hängt vom Produkt ab. Mehrkanalige LED-Systeme können gezielt Bereiche kombinieren. Das macht sie für passende Anwendungen attraktiv, garantiert aber keine lückenlose oder ausreichend starke Abdeckung eines großen Spektralintervalls.<br><br>Wolfram-Halogenquellen liefern eine thermische, breitbandige Verteilung und können für sichtbare und infrarote Messungen nützlich sein. Die verfügbare Intensität ist nicht über alle Wellenlängen gleich. Fenster, Filter, Lichtleiter und Optik begrenzen den nutzbaren Bereich zusätzlich. Auch Wärmeentwicklung, Leistungsregelung und Einschwingverhalten zählen zur Auswahl. „Halogen ist immer richtig“ wäre ebenso pauschal wie „LED ist immer zu schmalbandig“. Entscheidend ist die gemessene beziehungsweise spezifizierte Versorgung im vorgesehenen System."
      ],
      [
        "Weitere Quellen und besondere Messarten",
        "Bogenlampen, etwa Xenonquellen, können breitbandige Beleuchtung liefern, besitzen aber eigene spektrale Strukturen und Anforderungen an Stabilität und Einkopplung. Laser sind für viele Anwendungen bewusst schmalbandig und kohärent; sie eignen sich nicht als pauschaler Ersatz für eine breitbandige Reflexionsbeleuchtung. Speckle oder besondere Anregungsbedingungen können relevant werden. Sonnenlicht ist eine weitere breitbandige Quelle, deren nutzbare Verteilung von Atmosphäre und Beobachtungssituation geprägt wird.<br><br>Bei Fluoreszenzmessungen wird die Probe gezielt angeregt und Licht anderer Wellenlängen beobachtet. Dafür braucht es ein geeignetes Anregungs- und Detektionskonzept; die einfache Weißreferenzdivision eines passiven Reflexionsversuchs ist dafür keine vollständige Kalibrierung. Kläre also zuerst die Messart. Eine verfügbare Lampe ist kein Grund, unterschiedliche physikalische Experimente unbemerkt gleich zu behandeln. Produktangaben und Systemfreigaben bestimmen die tatsächlichen Einsatzmöglichkeiten."
      ],
      [
        "Zeitliche und räumliche Versorgung mitdenken",
        "Ein für das Auge konstantes Licht kann während kurzer Kamerabelichtungen schwanken. PWM-Dimmung schaltet eine Quelle zeitlich ein und aus; bei ungünstiger Kombination aus Pulsfolge, Belichtungsfenster und Verschlussart können Helligkeitsschwankungen oder Streifen auftreten. Das Problem hängt vom Treiber und Timing ab, nicht allein vom Wort „LED“.<br><br>Räumlich müssen die relevanten Objektregionen ausreichend und reproduzierbar beleuchtet werden. Gerichtetes Licht kann Glanz betonen; diffuse Anordnungen verändern die Winkelverteilung. Zwei Lampen können Schatten reduzieren, aber auch zusätzliche Reflexe erzeugen. Prüfe deshalb die Beleuchtung am realen Objekt samt Oberflächen und Höhen. Eine Referenzkorrektur kann bestimmte reproduzierbare Unterschiede kompensieren, aber aus einer völlig signalarmen oder gesättigten Region keine zuverlässige Messung machen. Der folgende Laborabschnitt zeigt, wie du solche Einflüsse systematisch prüfst."
      ],
      [
        "Eine Auswahl mit messbaren Kriterien treffen",
        "Für einen Kandidaten notierst du Spektralbereich und spektrale Versorgung, zeitliche Stabilität bei der geplanten Belichtungszeit, ausgeleuchtetes Feld, Einfallsgeometrie und Einfluss auf die Probe. Eine Lampe kann beispielsweise durch Erwärmung den Feuchtegehalt oder die Temperatur einer empfindlichen Probe verändern. Dann beeinflusst die Beleuchtung zugleich die zu messende Eigenschaft. Gleiche Lampenstellung bedeutet nicht zwingend gleiche Probe nach mehreren Minuten.<br><br>Verwende den vorgesehenen Betrieb samt Aufwärm- und Schutzvorgaben. Lege anhand von Kontrollaufnahmen fest, wann das System hinreichend stabil ist; erfinde keine universelle Wartezeit. Teste die schwächsten relevanten Bänder ebenso wie die hellsten Regionen. Das Ergebnis ist eine begründete Quellenwahl für die konkrete Aufgabe mit dokumentierten Bedingungen. Die tatsächliche Eignung wird im Aufbau nachgewiesen, nicht allein aus einer elektrischen Wattzahl abgeleitet."
      ]
    ],
    "exercise": "Ein Kunde bietet eine sehr helle weiße LED für eine Messung bis 1.700 nm an. Welche drei Nachweise verlangst du vor der Verwendung?",
    "modelAnswer": "Prüfe die spektrale Versorgung bis zu den tatsächlich benötigten Bändern, ausreichendes Signal auf dem geplanten Objektfeld bei zulässiger Belichtungszeit und zeitliche Stabilität samt Treiber/Dimmbetrieb. Zusätzlich sind Geometrie, Probeeinfluss und Systemkompatibilität relevant. Weißer Eindruck und Luxzahl reichen nicht.",
    "take": "Die passende Quelle versorgt den relevanten Spektralbereich räumlich und zeitlich zuverlässig, ohne die Probe unkontrolliert zu verändern.",
    "q": [
      [
        "Eine weiße LED garantiert im SWIR …",
        [
          "Keine bestimmte spektrale Versorgung",
          "Immer konstante spektrale Leistung",
          "Ausreichende Bestrahlung"
        ],
        0,
        "Der sichtbare Farbeindruck legt die infrarote Verteilung nicht fest."
      ],
      [
        "Für Halogen gilt …",
        [
          "Gleiche Leistung bei jeder Wellenlänge",
          "Keine Wärmebelastung der Probe",
          "Breitbandige thermische Verteilung mit systemspezifischen Grenzen"
        ],
        2,
        "Quelle und nachfolgende Optik bestimmen gemeinsam den nutzbaren Bereich."
      ],
      [
        "Bei sehr kurzer Belichtung mit gedimmtem LED-Licht prüfst du …",
        [
          "Ausschließlich die nominelle Lebensdauer",
          "Treiber, PWM und zeitliches Zusammenspiel",
          "Nur die Farbe des Gehäuses"
        ],
        1,
        "Ein zeitlich modulierter Ausgang kann Aufnahme zu Aufnahme variieren."
      ],
      [
        "Bei Fluoreszenz ist die einfache Reflexionsreferenzierung …",
        [
          "Nicht ohne Weiteres das richtige vollständige Messmodell",
          "Immer vollständig ausreichend",
          "Nur von der Anzahl der Pixel abhängig"
        ],
        0,
        "Anregung und emittiertes Licht anderer Wellenlängen benötigen ein eigenes Messkonzept."
      ],
      [
        "Die Beleuchtung kann das Messobjekt beeinflussen durch …",
        [
          "Nur den Dateinamen",
          "Erwärmung und dadurch veränderten Zustand",
          "Ausschließlich digitale Verstärkung"
        ],
        1,
        "Eine zeitlich veränderte Probe kann das Messergebnis selbst verändern."
      ],
      [
        "Eine Lichtquelle wählst du anhand …",
        [
          "Von Spektrum, Feld, Timing und Probe gemeinsam",
          "Nur des sichtbaren Helligkeitseindrucks",
          "Nur der elektrischen Wattzahl"
        ],
        0,
        "Die relevanten Bedingungen müssen gleichzeitig erfüllt werden."
      ]
    ],
    "experiment": "me-light",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Thorlabs · Breitbandige Halogenquellen",
        "https://www.thorlabs.de/newgrouppage9.cfm?objectgroup_id=9301"
      ],
      [
        "Basler · Lichtsteuerung und PWM",
        "https://docs.baslerweb.com/light-control"
      ]
    ]
  },
  {
    "id": "me-lab",
    "title": "Einen reproduzierbaren Laboraufbau einrichten",
    "topics": [
      "Geometrie, Beleuchtung und Aufnahmeparameter reproduzierbar festlegen",
      "Fremdlicht, Inhomogenität und Flicker gezielt prüfen",
      "Eine vollständige Messserie samt Kontrollaufnahme organisieren"
    ],
    "scope": "Die Beleuchtungswahl und Referenztypen sind bekannt. Jetzt ordnen wir sie zu einem Laborablauf. Die statistische Bewertung der Qualität folgt in Modul 7; Produktschaltflächen bleiben in der Software-Lernwelt.",
    "body": [
      [
        "Die Messung als wiederholbaren Aufbau planen",
        "Beschreibe zuerst das Ziel der Messung und die Bedingungen, unter denen ein Vergleich gültig sein soll. Lege Bildfeld, Arbeitsabstand mit Bezugspunkt, Probenorientierung, relevante Objekthöhen und Beobachtungsrichtung fest. Halterungen und Anschläge helfen, die Probe reproduzierbar zu positionieren. Fotografiere den Aufbau und ergänze Maße, denn ein Foto allein beschreibt die Geometrie oft nicht ausreichend.<br><br>Wähle Hintergrund und Halterung bewusst. Dünne oder teilweise durchlässige Proben können Beiträge des Untergrunds enthalten. Eine glänzende Klemme kann zusätzliches Licht eintragen. Auch mechanische Schwingungen und lose Verstellringe beeinflussen die Aufnahme. Der Aufbau muss nicht unnötig kompliziert sein, aber seine entscheidenden Freiheitsgrade müssen bekannt sein. Wer die Messung später wiederholt, soll erkennen können, welche Positionen festgelegt und welche Änderungen zulässig waren."
      ],
      [
        "Fremdlicht und Beleuchtungsfeld prüfen",
        "Erfasse eine geeignete homogene Kontrollfläche an mehreren Positionen beziehungsweise über das Nutzfeld. Prüfe dunkle Ecken, Schatten, Glanz und Sättigung in den relevanten Bändern. Ein einzelner Mittelwert über das gesamte Bild kann diese Unterschiede verdecken. Das Ziel ist nicht zwingend perfekte Gleichheit aller Pixel, sondern ein für die Aufgabe ausreichend versorgtes und nachvollziehbar korrigierbares Feld.<br><br>Für einen Fremdlichttest vergleichst du den offenen optischen Aufbau mit und ohne die vorgesehene Messbeleuchtung, soweit dies im Setup möglich ist. Diese Aufnahme ohne Messlampe ist kein Ersatz für ein lichtdicht erfasstes Dunkelbild: Raumlicht und Fensterlicht können weiter beitragen. Ändert sich dieser Anteil während der Serie, wird die Referenzübertragung schwierig. Abschirmung, kontrollierte Raumbeleuchtung und geeignete Blenden können helfen; ihre Wirksamkeit wird anhand von Aufnahmen geprüft."
      ],
      [
        "Zeitliche Stabilität praktisch beobachten",
        "Beobachte eine feste Kontrollfläche über mehrere Aufnahmen mit den geplanten Einstellungen. Verlauf und Streuung ausgewählter Regionen beziehungsweise Bänder zeigen, ob die Bedingungen stabil sind. Eine langsam steigende Kurve kann auf Erwärmung oder Einschwingen hinweisen; wechselnde Werte können unter anderem durch Flicker, Regelung oder Bewegung entstehen. Verändere zur Diagnose jeweils gezielt einen Einfluss.<br><br>Ein längeres Belichtungsfenster kann manche periodischen Schwankungen mitteln, ist aber möglicherweise wegen Bewegung nicht zulässig. Eine stabile oder korrekt synchronisierte Lichtsteuerung kann die bessere Lösung sein. Es gibt keine universelle Aufwärmzeit, die jede Kamera-Lampen-Kombination zuverlässig stabilisiert. Nutze Herstellervorgaben und vorab definierte Stabilitätskriterien. Auch eine erwärmte Probe kann sich weiter verändern, obwohl das Gerät selbst bereits stabile Statuswerte meldet."
      ],
      [
        "Die Serie in sinnvoller Reihenfolge aufnehmen",
        "Nach mechanischem Aufbau, Stabilisierung und Einstellung folgen die für den Datenzustand nötigen Referenzen. Prüfe die hellste Referenz und relevante Probenregionen auf Sättigung sowie die schwächsten Bänder auf nutzbares Signal. Erfasse dann Proben mit eindeutiger Zuordnung, geeigneten Wiederholungen und Kontrollmessungen. Eine Kontrollaufnahme nach der Serie hilft festzustellen, ob sich der Aufbau inzwischen verändert hat.<br><br>Wechsle Gruppen möglichst in sinnvoller Reihenfolge ab, statt erst alle A- und anschließend alle B-Proben zu messen. So wird ein langsamer Zeittrend weniger leicht mit der Gruppenzugehörigkeit verwechselt. Verschiedene Objektpunkte und mehrfach aufgenommene identische Proben beantworten unterschiedliche Fragen. Schreibe daher dazu, was genau wiederholt wurde. Wenn Einstellungen oder Geometrie geändert werden, dokumentiere den Wechsel und prüfe die Referenzgültigkeit für den folgenden Abschnitt."
      ],
      [
        "Eine Messung sauber abschließen",
        "Vor dem Abbau prüfst du, ob Daten, Referenzen, Probenkennungen und Metadaten vollständig sind. Kontrolliere besonders die letzte Kontrollaufnahme und die für das Ziel entscheidenden Bänder. Eine fehlende Dunkelreferenz, unbemerkte Sättigung oder eine unklare Probenzuordnung lassen sich nach dem Abbau oft nicht zuverlässig ergänzen. Rohdaten und korrigierte Ergebnisse bleiben unterscheidbar gespeichert.<br><br>Ein sinnvolles Protokoll enthält Kamera und Optik, Software- beziehungsweise Kalibrierstand, Lichtquelle mit Betriebszustand, Geometrie, Belichtungszeit, Gain, Probenbeschreibung, Referenzkennungen, Regionen und besondere Beobachtungen. Notiere Abweichungen sachlich. Die Aussage „unter diesen Bedingungen wiederholbar“ ist hilfreicher als ein schöner Screenshot ohne Aufnahmebedingungen. Die Messqualität wird im nächsten Schritt mit konkreten Kriterien beurteilt; das Protokoll schafft dafür die nachvollziehbare Grundlage."
      ]
    ],
    "exercise": "Alle A-Proben wurden morgens, alle B-Proben nach einer Stunde Lampenbetrieb gemessen. Die Spektren unterscheiden sich leicht. Welche Änderung am Versuchsplan würde die Interpretation verbessern?",
    "modelAnswer": "Gruppen in geeigneter Reihenfolge abwechseln oder randomisieren, während Geometrie und Einstellungen kontrolliert bleiben. Eine stabile Kontrollprobe vor, während und nach der Serie zeigt zeitliche Veränderungen. Wiederholungen unabhängiger Proben helfen, Gruppenunterschiede von Drift zu trennen.",
    "take": "Ein guter Laborablauf macht Geometrie, Fremdlicht, Zeitverlauf und Probenzuordnung kontrollierbar. Dokumentation gehört zur Messung.",
    "q": [
      [
        "Ein Foto des Aufbaus …",
        [
          "Ersetzt die Referenzdateien",
          "Ergänzt Maße und definierte Bezugspunkte",
          "Ersetzt sämtliche Maße"
        ],
        1,
        "Für reproduzierbare Geometrie braucht es mehr als den optischen Eindruck eines Fotos."
      ],
      [
        "Messlampe aus, Objektiv offen: Diese Aufnahme …",
        [
          "Enthält niemals Licht",
          "Ist immer ein gültiges Dunkelbild",
          "Kann Fremdlicht zeigen und ist nicht automatisch eine Dunkelreferenz"
        ],
        2,
        "Das lichtdichte Dunkelbild erfasst den kameraseitigen Zustand ohne relevanten optischen Eintrag."
      ],
      [
        "Warum Kontrollmessungen über die Serie verteilen?",
        [
          "Um die Brennweite automatisch zu korrigieren",
          "Um zeitliche Veränderungen sichtbar zu machen",
          "Damit jede Probe heller wird"
        ],
        1,
        "Drift kann sonst unbemerkt mit Probenunterschieden vermischt werden."
      ],
      [
        "Alle A-Proben vor allen B-Proben zu messen kann …",
        [
          "Gruppen- und Zeiteffekte vermischen",
          "Die spektrale Auflösung steigern",
          "Zeitliche Einflüsse ausschließen"
        ],
        0,
        "Ein Zeittrend könnte fälschlich als Gruppenunterschied interpretiert werden."
      ],
      [
        "Inhomogenität beurteilst du sinnvoll …",
        [
          "Über relevante Regionen und Bänder samt Signalgrenzen",
          "Nur über das Vorschaubild",
          "Nur über einen einzigen globalen Mittelwert"
        ],
        0,
        "Ein Gesamtmittel kann dunkle oder gesättigte Bildteile verdecken."
      ],
      [
        "Wann ist die Vollständigkeitsprüfung besonders sinnvoll?",
        [
          "Erst nachdem alle Referenzen gelöscht sind",
          "Noch vor dem Abbau",
          "Nur nach einer Kundenreklamation"
        ],
        1,
        "Fehlende Referenzen und unklare Zuordnungen lassen sich dann noch korrigieren."
      ]
    ],
    "experiment": "me-lab",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Basler · Lichtsteuerung und PWM",
        "https://docs.baslerweb.com/light-control"
      ],
      [
        "NERC · Design and Calibration of Field Spectrometers",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_3/"
      ]
    ]
  },
  {
    "id": "me-field",
    "title": "Im Freien messen: Sonne, Schatten und Referenzen",
    "topics": [
      "Wechselnde Beleuchtung als Messbedingung behandeln",
      "Eine passende zeitliche und räumliche Referenzstrategie wählen",
      "Feldbedingungen und nicht auswertbare Bereiche dokumentieren"
    ],
    "scope": "Der Laborablauf ist bekannt. Dieses Modul ergänzt die Besonderheiten natürlicher Beleuchtung. UAV-Flugplanung, Stitching, Mapping und atmosphärische Fernerkundungskorrektur werden später eigenständig behandelt.",
    "body": [
      [
        "Sonnenlicht ist keine feste Laborlampe",
        "Im Freien wirken direktes Sonnenlicht, diffuses Himmelslicht und reflektiertes Licht der Umgebung zusammen. Sonnenstand, Wolken, Atmosphäre und nahe Objekte ändern ihre Anteile. Die Probe und eine Referenz können unterschiedlich beschattet sein, obwohl sie nur einen kleinen Abstand haben. Ein kurz zuvor aufgenommenes Panel beschreibt deshalb nicht unter allen Bedingungen die Beleuchtung der nächsten Aufnahme.<br><br>Auch die Winkelverteilung zählt: Beim Übergang von direkter Sonne zu Wolkenschatten ändert sich nicht nur die Gesamtleistung. Das kann die Antwort einer glänzenden oder strukturierten Probe verändern. Eine rein skalare Helligkeitskorrektur erfasst diesen Effekt nicht vollständig. Plane zunächst, ob stabile Bedingungen erreichbar sind und welche Veränderungen dein Messmodell toleriert. Die physikalische Geometrie aus Licht & Physik wird hier zu einer konkreten Feldentscheidung."
      ],
      [
        "Referenzen nahe an der tatsächlichen Messung erfassen",
        "Wähle eine Referenzstrategie passend zur Geschwindigkeit der Änderungen. Zeitlich nahe Panelaufnahmen, Kontrollen vor und nach einem Messblock oder eine geeignete gleichzeitig erfasste Referenz können helfen. Ein festes Intervall wie „alle zehn Minuten“ ist ohne Nachweis der Stabilität keine Garantie. Bei erkennbarer Lichtänderung müssen die betroffenen Aufnahmen und Referenzen neu beurteilt werden.<br><br>Ein Panel im Bild muss geeignet orientiert, ungesättigt und unter repräsentativer Beleuchtung sein. Es darf nicht vom Bediener beschattet werden, während die Probe Sonne erhält, oder umgekehrt. Eine zusätzliche Bestrahlungsstärkemessung kann wertvolle Informationen liefern, hat aber eigene Anforderungen an Orientierung, zeitliche Synchronisation und räumliche Übertragbarkeit. Sie korrigiert nicht automatisch jede Richtungsabhängigkeit der Probe. Dokumentiere, welche Größe wie erfasst wurde und welche Annahmen die anschließende Korrektur verwendet."
      ],
      [
        "Schatten, Wind und Probenzustand berücksichtigen",
        "Achte auf Schatten durch Kamera, Personen, Halterung und Umgebung. Schattenregionen können eine andere spektrale Beleuchtung besitzen. Wenn du nur ihre Helligkeit anhebst, machst du sie nicht automatisch vergleichbar mit sonnigen Regionen. Beobachte außerdem Bewegung durch Wind: Ein Blatt kann Lage, sichtbare Oberfläche und beleuchtete Geometrie zwischen den Aufnahmen ändern.<br><br>Feuchtigkeit, Tau, Staub und Temperatur können ebenfalls das Signal beeinflussen. Das sind nicht grundsätzlich Fehler; sie können Teil der eigentlichen Aufgabe sein. Dann müssen sie als Bedingungen oder Zielgrößen erfasst werden. Ist dagegen ein Materialvergleich unter gleichartigen Bedingungen beabsichtigt, können sie Störgrößen sein. Entscheide diese Rolle vor der Auswertung. Eine nachträgliche Auswahl nur besonders schöner Bilder kann eine scheinbar robuste Trennung erzeugen, die im realen Feld nicht trägt."
      ],
      [
        "Signalgrenzen der Atmosphäre respektieren",
        "Die Atmosphäre verändert das ankommende Sonnenspektrum. Unter anderem können Wasserdampfabsorptionen die Versorgung bestimmter Spektralbereiche stark verringern. Welche Bänder nutzbar sind, hängt von Bereich, Wetter, Pfad und System ab. Ein Panelvergleich kann eine geringe Versorgung nicht in viele neu gemessene Photonen verwandeln; in signalarmen Bereichen steigt die Unsicherheit der Quotientenbildung.<br><br>Markiere solche Bereiche anhand dokumentierter Signal- und Qualitätskriterien statt sie durch extreme Skalierung scheinbar zu retten. Ein niedriger Wert kann von Material, Beleuchtung oder Atmosphäre mitverursacht sein. Für lange Beobachtungspfade oder Fernerkundung können zusätzliche atmosphärische Verfahren notwendig werden; dieses Grundlagenmodul ersetzt sie nicht. Die zulässige Aussage lautet zunächst, welche Bereiche unter den tatsächlich beobachteten Bedingungen ausreichend belastbare Daten liefern."
      ],
      [
        "Ein Feldprotokoll für nachvollziehbare Daten",
        "Notiere Zeitpunkt, Standort beziehungsweise Versuchsposition, Wetterbeobachtung, Sonnen- und Beobachtungsgeometrie, Schattenzustand, Probenzustand, Referenzkennungen und alle Aufnahmeparameter. Erfasse ungewöhnliche Ereignisse unmittelbar: Wolkendurchgang, bewegte Probe, veränderte Orientierung oder nasses Panel. Ein zeitlich geordnetes Protokoll hilft später, Messblöcke korrekt ihren Referenzen zuzuordnen.<br><br>Bei einer deutlichen Lichtänderung pausierst du gegebenenfalls, prüfst die Referenz und wiederholst betroffene Messungen unter definierten Bedingungen. Lösche problematische Daten nicht kommentarlos; kennzeichne sie und dokumentiere die Entscheidung über ihre Verwendung. Eine Feldserie muss nicht unter perfekt konstantem Wetter entstehen. Sie braucht aber eine Strategie, die die tatsächlichen Änderungen erfasst und nur Aussagen erlaubt, die das gewählte Messmodell und die Qualitätskontrollen tragen."
      ]
    ],
    "exercise": "Ein Panel wird in Sonne aufgenommen. Während der Probe zieht eine Wolke durch. Anschließend ist das Panel wieder sonnig. Kannst du die mittlere Helligkeit der beiden Panelaufnahmen bedenkenlos als Referenz verwenden?",
    "modelAnswer": "Nein. Die beiden sonnigen Aufnahmen belegen nicht die Beleuchtung während des Wolkendurchgangs. Zudem kann sich die direkte/diffuse Winkelverteilung geändert haben. Betroffene Messung markieren, Bedingungen prüfen und erforderlichenfalls mit passender Referenz wiederholen; Interpolation braucht ein begründetes Modell und geeignete zeitliche Beobachtung.",
    "take": "Im Freien gehören Beleuchtungsverlauf, Geometrie und Referenzstrategie zusammen. Wetteränderungen sind Messbedingungen, keine bloßen Randnotizen.",
    "q": [
      [
        "Eine Wolke verändert möglicherweise …",
        [
          "Leistung, Spektrum und Winkelverteilung des Lichts",
          "Nur den globalen Zahlenfaktor",
          "Nur die Kamerabrennweite"
        ],
        0,
        "Direkte und diffuse Beleuchtungsanteile können sich verschieden ändern."
      ],
      [
        "Eine Referenz alle zehn Minuten ist …",
        [
          "Immer zu häufig",
          "Unter allen Bedingungen ausreichend",
          "Nur mit passendem Stabilitätsnachweis begründbar"
        ],
        2,
        "Das Intervall muss zur zeitlichen Veränderung der Bedingungen passen."
      ],
      [
        "Ein Panel im Schatten bei sonniger Probe …",
        [
          "Ist automatisch die beste Referenz",
          "Korrigiert alle atmosphärischen Effekte",
          "Kann die Probenbeleuchtung unpassend repräsentieren"
        ],
        2,
        "Panel und Probe erleben möglicherweise andere spektrale und gerichtete Beleuchtung."
      ],
      [
        "Sehr signalarmes Band nach atmosphärischer Absorption: Was tun?",
        [
          "Qualität prüfen und gegebenenfalls als nicht auswertbar markieren",
          "Durch große Skalierung zuverlässig machen",
          "Den Wert ohne Kennzeichnung durch Nachbarwerte ersetzen"
        ],
        0,
        "Ein fehlendes verlässliches Signal entsteht nicht durch Division oder Skalierung neu."
      ],
      [
        "Wind bei einer Blattmessung kann …",
        [
          "Durch Gain immer vollständig korrigiert werden",
          "Nur das Dateiformat beeinflussen",
          "Lage, Geometrie und die erfasste Oberfläche verändern"
        ],
        2,
        "Bewegung ist zugleich ein räumlicher und möglicherweise spektraler Einfluss."
      ],
      [
        "Bei einem Wolkendurchgang während der Probe …",
        [
          "Betroffene Daten kennzeichnen und Referenzgültigkeit prüfen",
          "Nur die Vorschau heller machen",
          "Immer die Referenz vom Tagesbeginn verwenden"
        ],
        0,
        "Die tatsächlichen Bedingungen müssen für einen gültigen Vergleich erfasst sein."
      ]
    ],
    "experiment": "me-field",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "NERC · Best Practices for Field Spectroscopy",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_4/"
      ],
      [
        "ASD FieldSpec · Feldmessung und Atmosphäre (NERC)",
        "https://fsf.nerc.ac.uk/assets/documents/ASD/FieldSpec3.pdf"
      ]
    ]
  },
  {
    "id": "me-validation",
    "title": "Messqualität nachvollziehbar nachweisen",
    "topics": [
      "Wiederholpräzision von Richtigkeit unterscheiden",
      "Kontrollen und Akzeptanzkriterien vor der Auswertung festlegen",
      "Ergebnisse samt Unsicherheiten und Metadaten berichten"
    ],
    "scope": "Die Aufnahmeroutinen sind bekannt. Jetzt wird entschieden, ob die gewonnenen Daten für die jeweilige Aussage reichen. Formale Gerätequalifikation, regulatorische Validierung und KI-Modellbewertung sind eigene Themen.",
    "body": [
      [
        "Eine gute Messung braucht ein definiertes Ziel",
        "„Die Kurve sieht gut aus“ ist kein überprüfbares Qualitätskriterium. Lege vorab fest, welche Information gebraucht wird: etwa ein wiederholbarer Bandwert, eine stabile Unterscheidung zweier Gruppen oder ein absoluter Vergleich mit einem charakterisierten Standard. Daraus folgen geeignete Kriterien für Streuung, Sättigung, Signalbereiche, Drift und zulässige Abweichung.<br><br>Die Schwellen hängen von der Aufgabe ab. Ein Demonstrationsversuch zur groben Unterscheidung kann andere Anforderungen haben als eine quantitative Materialbestimmung. Formuliere Kriterien mit Größe, Region, Spektralbereich und Bedingungen. Eine frei erfundene Regel wie „unter 2 % ist immer gut“ ist nicht allgemein belastbar. Wenn eine Schwelle im Lernbeispiel verwendet wird, ist sie ausdrücklich eine Übungsannahme und keine Vorgabe für jede Cubert-Messung."
      ],
      [
        "Wiederholpräzision und Richtigkeit trennen",
        "Wiederholte Werte können eng beieinanderliegen und trotzdem systematisch falsch sein. Präzision beschreibt die Übereinstimmung wiederholter Ergebnisse unter benannten Bedingungen. Richtigkeit betrifft die Nähe des mittleren Ergebnisses zu einem geeigneten Referenzwert. Ein falscher Standardwert kann eine sehr präzise, aber verschobene Messserie erzeugen.<br><br>Beispiel: Ein Prüfstandard ist unter den relevanten Bedingungen mit 0,50 charakterisiert. Deine Serie liefert 0,58, 0,58 und 0,58. Die Streuung ist klein, die beobachtete Abweichung beträgt aber +0,08 beziehungsweise acht Prozentpunkte. Ob sie messtechnisch bedeutsam ist, muss auch die Unsicherheit des Referenzwerts und des Vergleichs berücksichtigen. Die bloße Wiederholung beweist keine Richtigkeit. Nutze nach Möglichkeit eine unabhängige Kontrolle, statt nur dieselbe Referenz wieder gegen sich selbst auszuwerten."
      ],
      [
        "Die richtige Art von Wiederholung wählen",
        "Mehrere Bilder ohne jede Veränderung zeigen hauptsächlich kurzfristige Aufnahmevariation. Eine entnommene und neu positionierte Probe prüft zusätzlich den Einfluss der Positionierung. Verschiedene Proben derselben Gruppe zeigen Material- beziehungsweise Probenvariation. Aufnahmen an anderen Tagen oder durch andere Personen erfassen weitere Bedingungen. Schreibe dazu, welche Ebene eine Streuungsangabe beschreibt.<br><br>Ein Mittelwert über viele Pixel einer einzigen Probe ist kein Ersatz für mehrere unabhängige Proben. Benachbarte Pixel können korreliert sein und gemeinsame Einflüsse tragen. Wenn ein Vergleich nur eine Probe pro Gruppe enthält, kann ein scheinbarer Gruppenunterschied in Wahrheit eine Besonderheit dieser beiden Einzelproben sein. Wähle Wiederholungen so, dass sie die beabsichtigte Aussage tatsächlich prüfen. Mehr Zahlen allein bedeuten nicht automatisch mehr unabhängige Evidenz."
      ],
      [
        "Streuung, Drift und Abweichung berechnen",
        "Für wiederholte Werte berechnest du zunächst den Mittelwert. Die Stichprobenstandardabweichung s mit Nenner n − 1 beschreibt ihre Streuung. Die relative Standardabweichung s/Mittelwert kann hilfreich sein, ist nahe null aber instabil oder wenig aussagekräftig. Eine kleine Streuung schließt einen gemeinsamen systematischen Fehler nicht aus.<br><br>Prüfe zusätzlich den Zeitverlauf: Ein steigender Wert kann Drift zeigen, auch wenn die gesamte Spannweite im Screenshot klein wirkt. Unterschiede zwischen Kontrollmessungen werden mit denselben Auswerteregeln berechnet. Unsicherheit umfasst mehr als reine Wiederholstreuung, beispielsweise Referenzwert, Geometrie, Zustand und Korrekturmodell. Berichte die verwendete Größe und vermeide es, eine einfache Wiederholstandardabweichung ohne Begründung als vollständige Messunsicherheit auszugeben. Für anspruchsvolle quantitative Aussagen ist ein geeignetes Unsicherheitsbudget erforderlich."
      ],
      [
        "Eine Entscheidung mit nachvollziehbarem Umfang treffen",
        "Ein Messbericht hält fest, welche Kriterien erfüllt sind, welche Daten ausgeschlossen oder markiert wurden und welche Schlussfolgerung daraus folgt. Bewahre die Zuordnung zu Rohdaten, Referenzen, Proben, Softwarestand und Auswertemethode. Wenn ein Kriterium nicht erfüllt ist, benenne die Ursache soweit bekannt und den nächsten Prüfschritt. Eine Wiederholung ohne Änderung kann wenig helfen, wenn der Fehler systematisch ist.<br><br>Formuliere die Reichweite: „Unter diesen Einstellungen und für diese Proben war der Bandwert wiederholbar“ ist eine andere Aussage als „jede zukünftige Probe ist sicher klassifizierbar“. Für weitergehende Anwendungen sind unabhängige Proben und relevante Einsatzbedingungen nötig. Der Abschluss dieser Lektion soll dich befähigen, belastbare Beobachtungen von noch offenen Behauptungen zu trennen und einem Kunden verständlich zu erklären, welche Prüfung die nächste Aussage stützen würde."
      ]
    ],
    "exercise": "Drei Werte liegen bei 0,58, 0,58 und 0,58; die passende unabhängige Referenz liegt bei 0,50. Ist die Messung gut? Formuliere eine präzise Antwort.",
    "modelAnswer": "Die kurzfristige Wiederholstreuung dieser drei Werte ist null, die beobachtete Abweichung zum Referenzwert beträgt +0,08 beziehungsweise acht Prozentpunkte. Die Serie ist damit nicht allein wegen ihrer Wiederholbarkeit als richtig nachgewiesen. Referenzgültigkeit, Unsicherheiten und mögliche systematische Ursachen müssen geprüft werden.",
    "take": "Wiederholbar ist nicht automatisch richtig. Qualität wird anhand vorher festgelegter Kriterien, passender Kontrollen und des beabsichtigten Aussageumfangs beurteilt.",
    "q": [
      [
        "Drei identische Werte beweisen …",
        [
          "Automatisch absolute Richtigkeit",
          "Nur geringe beobachtete Streuung dieser Wiederholungen",
          "Eine vollständige Unsicherheitsanalyse"
        ],
        1,
        "Gemeinsame systematische Fehler können in allen Werten gleich enthalten sein."
      ],
      [
        "0,58 gegenüber 0,50 ist eine absolute Differenz von …",
        [
          "8 Prozentpunkten",
          "58 Prozentpunkten",
          "0,8 Prozentpunkten"
        ],
        0,
        "0,08 auf einer Skala von 0 bis 1 entspricht acht Prozentpunkten."
      ],
      [
        "Viele Pixel einer einzigen Probe ersetzen …",
        [
          "Nicht automatisch mehrere unabhängige Proben",
          "Jede Kontrolle an anderen Tagen",
          "Immer mehrere Chargen"
        ],
        0,
        "Pixel teilen häufig dieselben Proben- und Messbedingungen."
      ],
      [
        "Akzeptanzkriterien legt man möglichst fest …",
        [
          "Erst nachdem die schönsten Bilder ausgewählt wurden",
          "Nur anhand eines universellen Prozentwerts",
          "Vor der Ergebnisbewertung, passend zur Aufgabe"
        ],
        2,
        "Vorab definierte Kriterien vermindern eine nachträgliche Anpassung an das gewünschte Ergebnis."
      ],
      [
        "Die relative Standardabweichung nahe einem Mittelwert von null …",
        [
          "Ist die gesamte Messunsicherheit",
          "Kann instabil oder wenig aussagekräftig sein",
          "Ist immer besonders zuverlässig"
        ],
        1,
        "Ein kleiner Nenner macht die relative Größe problematisch."
      ],
      [
        "Eine unabhängige Kontrollprobe ist hilfreich, weil …",
        [
          "Sie gemeinsame Fehler zeigen kann, die ein Selbstvergleich verdeckt",
          "Sie jede Kalibrierung ersetzt",
          "Sie automatisch alle Produktionschargen repräsentiert"
        ],
        0,
        "Eine Kontrolle mit eigenem bekannten Bezug prüft mehr als die Wiederholung derselben Referenzrechnung."
      ]
    ],
    "experiment": "me-quality",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "NERC · Design and Calibration of Field Spectrometers",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_3/"
      ],
      [
        "Hamamatsu · Signal-Rausch-Verhältnis",
        "https://camera.hamamatsu.com/us/en/learn/technical_information/thechnical_guide/calculating_snr.html"
      ]
    ]
  },
  {
    "id": "me-case",
    "title": "Praxisfall: Einen Messaufbau retten",
    "topics": [
      "Mehrere Fehlerbilder anhand von Rohdaten und Metadaten priorisieren",
      "Eine kontrollierte Korrektur mit neuen gültigen Referenzen planen",
      "Die korrigierte Messung mit unabhängigen Kontrollen bewerten"
    ],
    "scope": "Dieser fiktive Fall verbindet die sieben Messpraxismodule. Er ist keine Fehlerdiagnose für ein konkretes Cubert-Gerät. Die praktische Demo-Freigabe erfordert weiterhin eine separate Trainerprüfung.",
    "body": [
      [
        "Die Demo liefert widersprüchliche Kurven",
        "Ein Kunde vergleicht zwei matte Kunststoffproben. Im ersten Versuch sehen die Kurven unterschiedlich aus, im zweiten deutlich ähnlicher. Die Referenz wurde bei 10 ms aufgenommen, die Probe später bei 2 ms. Die Auswertung verwendet trotzdem unmittelbar das einfache Rohwertverhältnis. Für das Dunkelbild wurde eine schwarze Karte aufgenommen. Eine gedimmte weiße LED beleuchtet das Objekt, und das Fenster bleibt offen für wechselndes Tageslicht.<br><br>Zusätzlich erreicht die Referenz in einigen Bändern den digitalen Maximalwert. Die Proben wurden zwischen den Wiederholungen leicht anders positioniert. Alle Angaben sind für die Übung erfunden. Das Ziel ist nicht, aus der Kurvenform einen Materialnamen zu raten. Zuerst muss geklärt werden, welche Daten unter diesen Bedingungen überhaupt einen belastbaren Vergleich erlauben. Eine einzelne nachträgliche Korrektur wird die gesamte Situation voraussichtlich nicht lösen."
      ],
      [
        "Mit Datenzustand und Signalgrenzen beginnen",
        "Sichere die Rohdaten und Metadaten und ordne die tatsächlichen Aufnahmeparameter zu. Prüfe, ob Daten schon korrigiert sind, welche Referenzen verwendet wurden und wo Sättigung beziehungsweise unzureichendes Signal auftreten. Die gesättigte Referenz kann die lineare Quotientenrechnung in den betroffenen Bändern nicht tragen. Eine nachträgliche Skalierung stellt die verlorenen Referenzwerte nicht wieder her.<br><br>Die unterschiedlichen Belichtungszeiten machen das einfache unnormierte Rohwertverhältnis ungeeignet. In einem nachweislich linearen und kompatiblen System kann eine zeitnormierte Verarbeitung möglich sein; hier sind aber zusätzlich Sättigung, falscher Dunkelersatz und wechselnde Beleuchtung vorhanden. Daher reicht „Probe mal fünf“ nicht als Rettungsplan. Kennzeichne die betroffenen Daten als nicht für den behaupteten Reflexionsvergleich freigegeben und plane eine kontrollierte Wiederaufnahme."
      ],
      [
        "Einen stabilen Aufbau und gültige Referenzen herstellen",
        "Prüfe die spektrale Versorgung der Lichtquelle für die interessierenden Bänder. Eine weiße LED kann passend sein, muss es aber nicht. Schirme wechselndes Fremdlicht sinnvoll ab und prüfe den gedimmten Betrieb auf zeitliche Schwankungen bei den geplanten Belichtungszeiten. Befestige Kamera, Licht und Probe reproduzierbar und dokumentiere Orientierung und Regionen.<br><br>Wähle Einstellungen, bei denen sowohl Referenz als auch Proben nutzbare ungesättigte Daten liefern. Erfasse die kameraseitig vorgesehene Dunkelreferenz mit optisch geschlossenem Eingang und die Weißreferenz mit charakterisiertem Standard unter passenden Bedingungen. Kontrolliere den Datenzustand in der Auswertung. Verändere nach Beginn der gültigen Serie keine Einstellungen unbemerkt. Falls eine Änderung erforderlich ist, prüfe die Referenzen neu und markiere den Übergang im Protokoll."
      ],
      [
        "Die neue Serie muss den Erfolg zeigen",
        "Erfasse wiederholte Kontrollaufnahmen sowie mehrere Proben beider Gruppen. Prüfe auch erneutes Positionieren, wenn dies zum späteren Arbeitsablauf gehört. Vergleiche relevante Bänder, Regionen und den Zeitverlauf nach vorher festgelegten Kriterien. Bleiben Unterschiede zwischen den Gruppen bestehen, untersuche, ob sie größer und stabiler sind als die Variation innerhalb der Gruppen und unter den vorgesehenen Bedingungen.<br><br>Eine glattere Kurve allein zeigt noch nicht, dass alle Fehler beseitigt sind. Eine unabhängige Kontrollprobe mit passendem bekannten Verhalten kann zusätzliche Hinweise geben. Werden nach Korrektur der Messbedingungen die vermeintlichen Materialunterschiede kleiner, ist das ein nützliches Ergebnis: Die erste Aufnahme hatte offenbar Störeinflüsse enthalten. Dokumentiere auch diese Beobachtung. Das Ziel ist ein belastbarer Vergleich, nicht die Rettung einer früheren Verkaufsbehauptung."
      ],
      [
        "Das Ergebnis sachlich an den Kunden übergeben",
        "Eine passende Rückmeldung lautet: „Die erste Serie enthielt unpassende Referenzbedingungen und gesättigte Bereiche. Deshalb verwenden wir sie nicht als Nachweis einer Materialtrennung. Im stabilisierten Aufbau prüfen wir jetzt Wiederholbarkeit, Referenzgültigkeit und unabhängige Proben, bevor wir die Trennleistung bewerten.“ Damit benennst du das Problem und den überprüfbaren nächsten Schritt.<br><br>Der Abschluss enthält Aufbauprotokoll, Aufnahmeparameter, verwendete Referenzen, Rohdatenzuordnung, Kriterien, Kontrollergebnisse und offene Punkte. Nur für die tatsächlich geprüften Bedingungen wird eine Aussage gemacht. Wenn der Kunde später eine Produktionslösung benötigt, folgen weitere Tests zu Durchsatz, Probenvariation und Einsatzbedingungen. Diese Lernwelt liefert die messtechnische Grundlage dafür. Sie erteilt keine praktische Freigabe zur selbstständigen Kamerademo und ersetzt keine Trainerbeobachtung am realen System."
      ]
    ],
    "exercise": "Ordne drei erste Maßnahmen: sofort ein Klassifikationsmodell trainieren; Rohdaten und Referenzbedingungen prüfen; Aufbau stabilisieren und gültige Referenzen neu aufnehmen; die neue Serie mit Kontrollen bewerten. Welche Maßnahme gehört zunächst nicht in diesen Diagnoseplan?",
    "modelAnswer": "Zuerst Rohdaten, Parameter und Signalgrenzen prüfen; dann den Aufbau stabilisieren und gültig neu referenzieren; anschließend die neue Serie kontrolliert bewerten. Ein Klassifikationsmodell auf der ungeklärten alten Serie zu trainieren würde mögliche Messartefakte übernehmen und behebt die Ursachen nicht.",
    "take": "Erst die Messkette belastbar machen, dann die Materialaussage prüfen. Eine nachvollziehbare Wiederaufnahme ist besser als eine unbegründete Korrekturbehauptung.",
    "q": [
      [
        "Die Weißreferenz ist gesättigt. Was ist der richtige nächste Schritt?",
        [
          "Eine passende ungesättigte Referenz neu erfassen",
          "Die gesättigten Werte als 100 % Genauigkeit behandeln",
          "Nachträglich die Maximalwerte reduzieren"
        ],
        0,
        "Die verlorene lineare Referenzinformation lässt sich durch Skalierung nicht rekonstruieren."
      ],
      [
        "Probe 2 ms, Referenz 10 ms; weitere Fehler vorhanden. „Probe mal fünf“ …",
        [
          "Löst sämtliche Ursachen",
          "Ist kein ausreichender Rettungsplan",
          "Ersetzt eine richtige Dunkelreferenz"
        ],
        1,
        "Zeitnormierung setzt gültige Linearität und passende Bedingungen voraus; Sättigung und wechselndes Licht bleiben."
      ],
      [
        "Welche erste Diagnose ist sinnvoll?",
        [
          "Datenzustand, Aufnahmeparameter, Referenzen und Signalgrenzen prüfen",
          "Nur den Kurvenplot glätten",
          "Sofort mehr Trainingsdaten aus derselben ungültigen Serie erzeugen"
        ],
        0,
        "Die Gültigkeit der Messkette muss vor weitergehender Interpretation geklärt werden."
      ],
      [
        "Nach stabiler Wiederaufnahme werden Unterschiede kleiner. Das bedeutet …",
        [
          "Die erste Serie kann Störeinflüsse enthalten haben",
          "Es darf kein Ergebnis berichtet werden",
          "Der neue Aufbau ist sicher schlechter"
        ],
        0,
        "Ein kleinerer, belastbarer Unterschied ist informativer als ein großer ungeklärter Effekt."
      ],
      [
        "Woran prüfst du den korrigierten Aufbau?",
        [
          "An vorab definierten Kriterien, Kontrollen und relevanten Wiederholungen",
          "Nur an einer einzigen Probe ohne Wiederholung",
          "Nur an einer gefälligen Vorschau"
        ],
        0,
        "Die Qualitätsbewertung muss die behauptete Aussage tatsächlich prüfen."
      ],
      [
        "Die Kundenrückmeldung sollte …",
        [
          "Die erste Materialtrennung trotz ungültiger Daten garantieren",
          "Fehler der ersten Serie und nächste belastbare Prüfung erklären",
          "Alle Unsicherheit als beseitigt darstellen"
        ],
        1,
        "Beobachtung, Ursache und noch offene Schlussfolgerung werden nachvollziehbar getrennt."
      ]
    ],
    "experiment": "me-case",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Malvern Panalytical · White Reference und Kalibrierdatei",
        "https://www.malvernpanalytical.com/en/learn/knowledge-center/insights/calibrating-with-a-white-reference-for-a-baseline"
      ],
      [
        "Basler · Lichtsteuerung und PWM",
        "https://docs.baslerweb.com/light-control"
      ],
      [
        "NERC · Best Practices for Field Spectroscopy",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_4/"
      ]
    ]
  }
];
for(const [j,l] of MEASUREMENT_LESSONS.entries()){const i=LESSON_CONTENT.findIndex(x=>x.id===l.id);if(i>=0)LESSON_CONTENT[i]=l;else LESSON_CONTENT.push(l);const m=CURRICULUM.worlds.find(w=>w.id==="measurement").modules.find(m=>m.id===l.id);Object.assign(m,{title:l.title,topics:l.topics,status:"pilot",contentId:l.id,minutes:12,version:["reference","noise","illumination"].includes(l.id)?2:1,passRatio:.8,prerequisites:j?[MEASUREMENT_LESSONS[j-1].id]:[]});}
