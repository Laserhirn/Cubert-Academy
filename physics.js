/* Licht & Physik, edition 2.2. Original educational text; expert review pending. */
const PHYSICS_LESSONS = [
  {
    "id": "light",
    "title": "Was ist Licht? Wellen, Photonen und Energie",
    "topics": [
      "Wellenlänge und Frequenz unterscheiden",
      "Photonenenergie und Lichtleistung erklären",
      "Eine einfache Wellenlängenrechnung durchführen"
    ],
    "scope": "Hier geht es ausschließlich um die Eigenschaften von Licht. Spektralbereiche folgen in Modul 2, Materialwechselwirkungen in Modul 3. Blende, Brennweite und Kameraeinstellungen gehören in andere Lernwelten.",
    "body": [
      [
        "Licht ist mehr als das, was wir sehen",
        "Licht ist elektromagnetische Strahlung. Ein elektrisches und ein magnetisches Feld ändern sich und breiten sich aus. Dafür ist kein Trägermedium wie Luft nötig: Sonnenlicht erreicht uns auch durch den weitgehend leeren Weltraum. Das menschliche Auge erfasst nur einen kleinen Bereich dieser Strahlung. Eine Kamera kann andere Bereiche erfassen, sofern Sensor, Optik und Filter dafür geeignet sind. „Unsichtbar“ bedeutet deshalb nicht „nicht vorhanden“.<br><br>Für verschiedene Fragen verwenden wir unterschiedliche Modelle. Das Wellenmodell erklärt etwa Wellenlänge und Interferenz; das Photonenmodell hilft, Energieübertragung und die endliche Anzahl detektierter Lichtquanten zu verstehen. Es handelt sich um zwei Beschreibungen desselben physikalischen Phänomens. Eine Kamera empfängt keine chemischen Materialnamen, sondern Strahlung, die anschließend interpretiert wird."
      ],
      [
        "Wellenlänge, Frequenz und Amplitude",
        "Die <b>Wellenlänge λ</b> ist der räumliche Abstand zweier benachbarter gleicher Schwingungszustände, beispielsweise zweier Wellenberge. Die <b>Frequenz f</b> zählt die Schwingungen pro Sekunde und wird in Hertz angegeben. Die Amplitude beschreibt die Stärke der Feldschwingung. Sie ist eine andere Eigenschaft als die Wellenlänge: Eine stärkere Welle muss nicht kürzer oder länger sein.<br><br>Im Vakuum gilt <b>c = λ · f</b>, mit c ≈ 3 · 10⁸ m/s. Kürzere Wellenlänge bedeutet dort höhere Frequenz. In Materie ist die Ausbreitungsgeschwindigkeit abhängig vom Brechungsindex; an einer ruhenden Grenzfläche bleibt die Frequenz erhalten, während sich die Wellenlänge ändern kann. Wellenlängenangaben in der Spektroskopie beziehen sich üblicherweise auf Vakuum oder Luft. Für unsere Überschlagsrechnungen genügt die Vakuumnäherung."
      ],
      [
        "Rechnen ohne Angst vor Zehnerpotenzen",
        "Ein Nanometer ist 10⁻⁹ Meter. Bei λ = 600 nm setzt du daher 600 · 10⁻⁹ m in die Formel ein. Es folgt f = c / λ ≈ 5 · 10¹⁴ Hz = 500 THz. Verdoppelst du die Wellenlänge auf 1.200 nm, halbiert sich die Frequenz auf etwa 250 THz. Du musst diese großen Zahlen nicht auswendig lernen. Entscheidend sind die Einheiten und der umgekehrte Zusammenhang.<br><br>Ein typischer Fehler ist, 600 direkt als Meterwert einzusetzen oder bei der Umrechnung nm mit µm zu verwechseln. Schreibe deshalb zuerst die gesuchte Größe, dann die Formel und erst danach die Zahlen mit Einheiten auf. Plausibilitätscheck: Bei einer längeren Wellenlänge darf die errechnete Frequenz unter gleichen Bedingungen nicht steigen."
      ],
      [
        "Ein Photon hat Energie – ein Strahl hat Leistung",
        "Ein Photon trägt die Energie <b>E = h · f = h · c / λ</b>. Für schnelle Rechnungen eignet sich E in Elektronenvolt: <b>E [eV] ≈ 1.240 / λ [nm]</b>. Bei 620 nm sind das ungefähr 2 eV, bei 1.240 nm ungefähr 1 eV. Ein langwelliges Photon trägt also weniger Energie. Das bedeutet nicht, dass eine langwellige Lichtquelle insgesamt weniger Leistung abgibt.<br><br>Die Strahlungsleistung P bezeichnet Energie pro Zeit: 1 W = 1 J/s. Ein monochromatischer Strahl mit konstanter Leistung kann bei längerer Wellenlänge entsprechend mehr Photonen pro Sekunde enthalten. Photonenzahl pro Sekunde = P / E pro Photon. Eine Kamera wandelt davon nur einen Teil in nutzbares Signal um. Wie effizient das geschieht, hängt unter anderem von der Quanteneffizienz des Sensors ab; die Kameratechnik folgt später."
      ],
      [
        "Was „heller“ in einem Kundengespräch offenlässt",
        "„Die Lampe ist heller“ kann bedeuten: Sie wirkt für das Auge heller, sie liefert insgesamt mehr optische Leistung oder mehr Strahlung erreicht die untersuchte Fläche. Diese Aussagen sind nicht gleichbedeutend. Auch elektrische Leistungsaufnahme, beispielsweise 20 W auf einem Netzteil, ist keine Angabe der optischen Ausgangsleistung. Ein Teil der aufgenommenen Energie kann als Wärme abgegeben werden.<br><br>Frage daher nach der gemeinten Größe und dem betrachteten Wellenlängenbereich. Vergleiche zunächst dieselbe Größe unter denselben Bedingungen. Die präzisen Messgrößen lernst du in Modul 5. Für jetzt genügt die Trennung: Wellenlänge beschreibt eine spektrale Eigenschaft, Photonenenergie die Energie eines Lichtquants und Strahlungsleistung die gesamte Energie pro Sekunde. Keine dieser Größen ist für sich allein ein Qualitätsmaß für eine Kamera."
      ]
    ],
    "exercise": "Zwei monochromatische Quellen liefern jeweils 1 mW, eine bei 500 nm, die andere bei 1.000 nm. Welche liefert mehr Photonen pro Sekunde? Erkläre es ohne die Planck-Konstante auszurechnen.",
    "modelAnswer": "Bei 1.000 nm besitzt jedes Photon die halbe Energie. Bei gleicher optischer Leistung müssen daher doppelt so viele Photonen pro Sekunde transportiert werden. Daraus folgt noch nicht das doppelte Kamerasignal: Die spektrale Empfindlichkeit kann unterschiedlich sein.",
    "take": "Wellenlänge, Energie pro Photon und Leistung sind verschiedene Größen. Bei gleicher Leistung bedeutet längere Wellenlänge mehr Photonen, nicht automatisch mehr Kamerasignal.",
    "q": [
      [
        "Was braucht Licht zur Ausbreitung?",
        [
          "Immer Luft",
          "Kein materielles Trägermedium",
          "Immer Glas"
        ],
        1,
        "Elektromagnetische Strahlung kann sich im Vakuum ausbreiten."
      ],
      [
        "Die Wellenlänge verdoppelt sich im Vakuum. Was passiert mit der Frequenz?",
        [
          "Sie verdoppelt sich",
          "Sie bleibt gleich",
          "Sie halbiert sich"
        ],
        2,
        "Aus c = λf folgt bei konstantem c ein umgekehrter Zusammenhang."
      ],
      [
        "600 nm entsprechen ungefähr welcher Frequenz?",
        [
          "500 THz",
          "500 Hz",
          "5 THz"
        ],
        0,
        "600 nm = 6 · 10⁻⁷ m. 3 · 10⁸ / (6 · 10⁻⁷) = 5 · 10¹⁴ Hz."
      ],
      [
        "Welches Photon hat mehr Energie?",
        [
          "Das bei 1.000 nm",
          "Das bei 500 nm",
          "Beide immer gleich viel"
        ],
        1,
        "Die Energie ist umgekehrt proportional zur Wellenlänge. Bei 500 nm ist sie doppelt so groß."
      ],
      [
        "Gleiche optische Leistung bei 500 und 1.000 nm: Wo sind mehr Photonen pro Sekunde?",
        [
          "Bei 500 nm",
          "Gleich viele",
          "Bei 1.000 nm"
        ],
        2,
        "Die halbierte Photonenenergie erfordert bei gleicher Leistung die doppelte Photonenzahl."
      ],
      [
        "Eine Lampe nimmt elektrisch 20 W auf. Was weißt du über die optische Leistung im NIR?",
        [
          "Noch keinen konkreten Wert",
          "Sie beträgt genau 20 W",
          "Sie beträgt genau 10 W"
        ],
        0,
        "Elektrische Aufnahmeleistung ist weder optische Ausgangsleistung noch deren spektrale Verteilung."
      ]
    ],
    "experiment": "wave",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "NASA · Licht und Materie",
        "https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-light-and-matter/"
      ],
      [
        "University of Arizona · Radiometry and Photometry FAQ",
        "https://wp.optics.arizona.edu/jpalmer/radiometry/radiometry-and-photometry-faq/"
      ],
      [
        "NERC · Field spectroscopy",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_2/"
      ]
    ]
  },
  {
    "id": "ph-spectrum",
    "title": "Im elektromagnetischen Spektrum orientieren",
    "topics": [
      "nm und µm sicher umrechnen",
      "VIS, NIR und SWIR mit ihren Konventionen einordnen",
      "Spektralbereich von spektraler Auflösung trennen"
    ],
    "scope": "Dieses Modul ordnet Wellenlängen und Messbereiche ein. Es behandelt weder konkrete Cubert-Produkte noch Sensorarchitekturen oder die Auswahl einer Laborbeleuchtung.",
    "body": [
      [
        "Eine gemeinsame Skala für unterschiedliche Strahlung",
        "Radiowellen, Mikrowellen, Infrarot, sichtbares Licht, Ultraviolett, Röntgen- und Gammastrahlung gehören zum elektromagnetischen Spektrum. Die Bereiche unterscheiden sich in Wellenlänge beziehungsweise Frequenz; ihre Namen bezeichnen keine grundsätzlich verschiedenen Naturgesetze. Mit abnehmender Wellenlänge nimmt die Energie pro Photon zu. Zwischen benachbarten Bereichen gibt es keine physikalische Mauer.<br><br>Für viele optische Anwendungen sind sichtbares Licht und angrenzende Infrarotbereiche relevant. Das bedeutet nicht, dass jede optische Kamera den gesamten Bereich erfassen kann. Ein nutzbarer Messbereich ergibt sich aus dem gesamten System: Strahlung muss vorhanden sein, durch die Optik gelangen und vom Sensor ausreichend empfindlich erfasst werden. Ein Datenblattbereich ist deshalb ein Anfang, aber noch kein Nachweis, dass ein bestimmtes Merkmal messbar ist."
      ],
      [
        "Einheiten und Bereichsnamen",
        "<b>1 µm = 1.000 nm.</b> 0,55 µm sind also 550 nm; 1.700 nm sind 1,7 µm. Eine Angabe wie „0,4 bis 1,0“ ist ohne Einheit unvollständig. Schreibe die Einheit an jede Achse und an jeden besprochenen Bereich.<br><br>VIS bezeichnet sichtbares Licht, grob etwa 380 bis 780 nm, wobei die Empfindlichkeit an den Rändern allmählich abnimmt. Im Infrarot sind NIR und SWIR gebräuchliche Begriffe. Ihre Grenzen hängen vom Fachgebiet und der verwendeten Konvention ab. Manche Imaging-Anwendungen nennen etwa 780–1.000 nm NIR und 1.000–2.500 nm SWIR; andere ordnen einen größeren Bereich dem NIR zu. Verwende deshalb für technische Zusagen stets numerische Grenzen. „Unsere Kamera kann NIR“ reicht zur Prüfung einer Anwendung nicht aus."
      ],
      [
        "Eine Quelle hat eine spektrale Verteilung",
        "Reales Licht besteht häufig aus vielen Wellenlängen. Ein Spektrum zeigt, wie sich eine bestimmte Größe über Wellenlänge oder Frequenz verteilt. Eine breitbandige Quelle liefert Strahlung über einen ausgedehnten Bereich. Eine schmalbandige Quelle konzentriert sie auf einen kleineren Bereich. „Weiß“ ist ein Farbeindruck des Auges; er garantiert keine lückenlose spektrale Versorgung und erst recht keine ausreichende Strahlung im Infrarot.<br><br>Zwei Lichtquellen können ähnlich weiß erscheinen und sehr unterschiedliche Spektren besitzen. In einer Messung kann damit ein Bereich ausreichend beleuchtet sein, während in einem anderen kaum Photonen ankommen. Eine Kamera erzeugt aus fehlender Beleuchtung keine Materialinformation. Details zu Lampentypen, Sonne und Labor gehören später zur Lernwelt Messpraxis; hier geht es um die Bedeutung der spektralen Verteilung."
      ],
      [
        "Bereich, Abtastung und Auflösung sind drei Fragen",
        "Der <b>Spektralbereich</b> sagt, zwischen welchen Wellenlängen gemessen wird. Der <b>Kanalabstand</b> sagt, wie weit die nominellen Stützstellen auseinanderliegen. Die <b>spektrale Auflösung</b> beschreibt, wie gut eng benachbarte spektrale Strukturen getrennt werden; oft wird dazu die Breite der spektralen Antwortfunktion angegeben, etwa ihre Halbwertsbreite (FWHM). Diese Kennzahlen sind nicht austauschbar.<br><br>Ein hypothetisches Gerät mit Kanälen alle 2 nm kann eine 10 nm breite spektrale Antwort haben. Die vielen Stützstellen machen daraus keine echte 2-nm-Auflösung. Ebenso hilft ein großer Gesamtbereich nicht, wenn das relevante schmale Merkmal nicht aufgelöst wird. Vermeide deshalb das Verkaufsargument „mehr Kanäle ist immer besser“. Frage nach Position, Breite und erforderlicher Unterscheidbarkeit des gesuchten Merkmals."
      ],
      [
        "RGB und spektrale Messung sinnvoll vergleichen",
        "Eine typische RGB-Kamera fasst Strahlung in drei breiten, überlappenden Farbkanälen zusammen. Eine hyperspektrale Messung erfasst viele benachbarte spektrale Bänder. Dadurch können Unterschiede sichtbar werden, die im RGB-Bild ähnlich aussehen. Viele Kanäle bedeuten aber weder automatisch eine chemische Identifikation noch automatisch eine bessere Lösung für jede Aufgabe.<br><br>Beispiel: Ein relevantes Merkmal liegt bei 1.450 nm. Ein System von 400 bis 1.000 nm erfasst dieses Merkmal nicht, auch wenn es sehr viele Kanäle hat. Ein System bis 1.700 nm deckt seine Position ab, muss aber zusätzlich genügend Signal und passende Auflösung liefern. Stelle zuerst die Informationsfrage: Welches Merkmal trennt die zu untersuchenden Proben? Erst danach wird der erforderliche Messbereich abgeleitet."
      ]
    ],
    "exercise": "Ein Kunde nennt ein Merkmal bei 1,45 µm und eine Kamera von 450 bis 950 nm. Reicht der Bereich? Welche zwei weiteren Fragen stellst du, wenn ein anderes System bis 1.700 nm reicht?",
    "modelAnswer": "1,45 µm sind 1.450 nm und liegen außerhalb von 450–950 nm. Beim zweiten System ist die Lage abgedeckt. Zusätzlich sind etwa die erforderliche spektrale Auflösung und das erreichbare Signal-Rausch-Verhältnis unter der vorgesehenen Beleuchtung zu prüfen.",
    "take": "Bereichsnamen sind Orientierung. Für die Machbarkeit zählen numerische Grenzen, Auflösung und nutzbares Signal.",
    "q": [
      [
        "1,7 µm sind …",
        [
          "170 nm",
          "1.700 nm",
          "17.000 nm"
        ],
        1,
        "Ein Mikrometer entspricht 1.000 Nanometern."
      ],
      [
        "Welche Aussage ist für eine technische Zusage eindeutig?",
        [
          "Kann NIR",
          "Kann unsichtbares Licht",
          "Messbereich 900–1.700 nm"
        ],
        2,
        "Numerische Grenzen vermeiden unterschiedliche Definitionen der Bereichsnamen."
      ],
      [
        "Was garantiert eine weiß erscheinende Lampe?",
        [
          "Keine lückenlose Versorgung aller Messwellenlängen",
          "Ausreichend SWIR-Strahlung",
          "Ein konstantes Spektrum"
        ],
        0,
        "Der Farbeindruck des Auges sagt wenig über die vollständige spektrale Verteilung."
      ],
      [
        "Kanäle alle 2 nm, Antwortbreite 10 nm: Was ist richtig?",
        [
          "Die Auflösung ist automatisch 2 nm",
          "Abtastung und Auflösung sind verschieden",
          "Das Gerät misst nur zehn Kanäle"
        ],
        1,
        "Enger Kanalabstand ersetzt keine schmale spektrale Antwortfunktion."
      ],
      [
        "Ein Merkmal bei 1.450 nm, Kamera bis 1.000 nm. Helfen mehr Kanäle im selben Bereich?",
        [
          "Ja, immer",
          "Nur bei RGB",
          "Nein, das Merkmal liegt außerhalb"
        ],
        2,
        "Mehr Stützstellen erweitern den gemessenen Wellenlängenbereich nicht."
      ],
      [
        "Was ist ein sinnvoller erster Schritt bei der Auswahl?",
        [
          "Das zu unterscheidende Merkmal bestimmen",
          "Die größte Kanalzahl bestellen",
          "Nur den Begriff hyperspektral prüfen"
        ],
        0,
        "Die Aufgabe bestimmt Bereich, Auflösung und Signalbedarf."
      ]
    ],
    "experiment": "units",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "NASA · Licht und Materie",
        "https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-light-and-matter/"
      ],
      [
        "University of Arizona · Radiometry and Photometry FAQ",
        "https://wp.optics.arizona.edu/jpalmer/radiometry/radiometry-and-photometry-faq/"
      ],
      [
        "NERC · Field spectroscopy",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_2/"
      ]
    ]
  },
  {
    "id": "ph-interaction",
    "title": "Licht trifft Materie: Wohin geht die Energie?",
    "topics": [
      "Reflexion, Transmission und Absorption bilanzieren",
      "Streuung ohne Doppelzählung erklären",
      "Wellenlängen- und Weglängenabhängigkeit verstehen"
    ],
    "scope": "Hier geht es um die Wechselwirkungen und die Energiebilanz. Die Richtung des reflektierten Lichts und Glanz vertieft Modul 4; praktische Referenzmessungen folgen in Messpraxis.",
    "body": [
      [
        "Drei Wege für einfallende Strahlung",
        "Trifft Strahlung auf eine Probe, kann sie zurückgeworfen werden (<b>Reflexion</b>), hindurchtreten (<b>Transmission</b>) oder Energie an das Material abgeben (<b>Absorption</b>). Für eine passive Probe ohne Wellenlängenumwandlung gilt bei einer betrachteten Wellenlänge <b>R + T + A = 1</b>. Dabei werden die gesamten reflektierten und transmittierten Anteile über alle relevanten Richtungen erfasst. Die Größen sind Anteile der einfallenden Leistung.<br><br>Beispiel: Von 100 mW werden 30 mW reflektiert und 20 mW transmittiert. Dann werden 50 mW absorbiert: R = 0,30, T = 0,20, A = 0,50. Eine einzelne Kamera erfasst normalerweise nur einen begrenzten Richtungsbereich. Ihr Signal ist deshalb nicht unmittelbar diese vollständige Energiebilanz."
      ],
      [
        "Streuung ist nicht einfach ein vierter Verlusttopf",
        "Streuung bedeutet, dass Strahlung ihre Ausbreitungsrichtung ändert. Sie kann an Oberflächenstrukturen, Partikeln oder im Inneren einer Probe auftreten. Bei elastischer Streuung bleibt die Photonenenergie erhalten. Licht kann mehrfach gestreut werden, bevor es eine Probe verlässt oder absorbiert wird. Zurückgestreutes Licht trägt zur Reflexion bei; vorwärts austretendes gestreutes Licht kann zur Transmission beitragen.<br><br>Wenn R und T bereits alle Richtungen enthalten, darfst du Streuung nicht noch einmal als vierten Anteil addieren. Betrachtest du nur einen direkten Strahl, kann Streuung zwar Licht aus diesem Strahl entfernen, ohne es zu absorbieren. Deshalb ist „am Detektor fehlt Licht“ nicht gleichbedeutend mit „das Material hat alles absorbiert“. Die Messgeometrie bestimmt, welcher Anteil überhaupt beobachtet wird."
      ],
      [
        "Warum die Wellenlänge wichtig ist",
        "Die Wechselwirkungen sind häufig wellenlängenabhängig. Ein Material kann in einem Bereich stark reflektieren, in einem anderen stärker absorbieren oder durchlässiger sein. Absorptionsprozesse hängen unter anderem mit möglichen elektronischen oder molekularen Anregungen zusammen. Ein gemessenes spektrales Merkmal kann daher Hinweise auf Materialeigenschaften liefern. Für eine sichere Zuordnung braucht es jedoch passende Referenzen und die Berücksichtigung weiterer Einflüsse.<br><br>Oberfläche, Zusammensetzung, Feuchte, Korngröße, Schichtdicke und Mischungen können die beobachtete Kurve verändern. Eine dunkle Probe absorbiert nicht zwangsläufig bei jeder Wellenlänge stark. „Schwarz“ ist zunächst ein Eindruck im sichtbaren Bereich. Ebenso bedeutet sichtbare Transparenz nicht automatisch Transparenz im Infrarot. Der jeweils relevante Wellenlängenbereich muss gemessen oder verlässlich belegt werden."
      ],
      [
        "Weglänge und Absorption getrennt denken",
        "In einem einfachen homogenen, nicht streuenden Medium kann die interne Transmission näherungsweise durch <b>T = exp(−α · d)</b> beschrieben werden: α ist der Absorptionskoeffizient und d die durchlaufene Strecke. Reflexionsverluste an Grenzflächen sind in dieser einfachen Formel nicht enthalten. Verdoppelt sich d, wird T quadriert. Aus T = 0,5 bei einer Dicke wird beispielsweise T = 0,25 bei doppelter Dicke.<br><br>Die <b>Absorbanz</b> D = −log₁₀(T) ist eine logarithmische Größe und nicht identisch mit dem absorbierten Energieanteil A. Bei T = 0,1 ist D = 1. Daraus folgt nur dann A = 0,9, wenn keine Reflexions- oder anderen Verlustanteile zu berücksichtigen sind. Beer-Lambert-Beziehungen dürfen nicht ungeprüft auf stark streuende Pulver, raue Oberflächen oder jede beliebige Konzentration übertragen werden."
      ],
      [
        "Grenzen der einfachen Bilanz",
        "Bei Fluoreszenz wird Licht absorbiert und ein Teil der Energie später als Licht anderer Wellenlängen abgegeben. Eine einfache Bilanz nur einer Wellenlänge erklärt dann nicht das gesamte Verhalten. Auch thermische Emission ist ein eigener Beitrag, der bei passenden Temperaturen und Wellenlängen relevant werden kann. Energie bleibt insgesamt erhalten; ihre Verteilung und ihre Wege müssen aber vollständig betrachtet werden.<br><br>Für eine erste Kundenanalyse frage daher: Wird in Reflexion oder Transmission gemessen? Ist die Probe homogen, transparent oder stark streuend? Ändern sich Dicke, Untergrund oder Feuchte? Bei dünnen Schichten kann Licht beispielsweise durch die Probe zum Untergrund gelangen und zurückkommen. Dann enthält das Signal Informationen aus mehr als nur der obersten Oberfläche. Ein Unterschied zwischen zwei Kurven beweist für sich allein noch keine andere chemische Zusammensetzung."
      ]
    ],
    "exercise": "Eine Probe lässt 40 % durch und reflektiert insgesamt 35 %. Jemand nennt zusätzlich 20 % Streuung und errechnet 5 % Absorption. Wo liegt der Denkfehler?",
    "modelAnswer": "Wenn die 35 % Reflexion und 40 % Transmission bereits alle Richtungen erfassen, ist die Streuung darin enthalten. Die Absorption beträgt dann 25 %. Bei einer Messung nur des direkten Strahls fehlen dagegen Richtungsanteile; dann ist diese Bilanz aus den Messwerten allein nicht zulässig.",
    "take": "Fehlendes Detektorsignal ist kein direkter Absorptionsnachweis. Erst Messgeometrie und vollständige Anteile machen eine Bilanz sinnvoll.",
    "q": [
      [
        "R = 0,3 und T = 0,2, alle Richtungen erfasst. Wie groß ist A?",
        [
          "0,1",
          "0,5",
          "0,8"
        ],
        1,
        "R + T + A = 1 ergibt A = 0,5. Voraussetzung: passive Probe ohne Wellenlängenumwandlung."
      ],
      [
        "Elastische Streuung bedeutet …",
        [
          "Immer vollständige Absorption",
          "Immer höhere Photonenenergie",
          "Richtungsänderung ohne Änderung der Photonenenergie"
        ],
        2,
        "Streuung kann Strahlung aus dem beobachteten Strahl entfernen, ohne sie zu absorbieren."
      ],
      [
        "R und T enthalten alle gestreuten Anteile. Darf Streuung zusätzlich bilanziert werden?",
        [
          "Nein, das wäre Doppelzählung",
          "Ja, immer",
          "Nur im NIR"
        ],
        0,
        "Gestreute austretende Strahlung gehört bereits zu Reflexion oder Transmission."
      ],
      [
        "T = 0,5. Was ergibt doppelte Dicke im einfachen exponentiellen Modell?",
        [
          "0",
          "0,25",
          "1"
        ],
        1,
        "exp(−α · 2d) = [exp(−αd)]² = 0,25."
      ],
      [
        "Absorbanz und absorbierter Anteil sind …",
        [
          "Immer identisch",
          "Beides Prozentwerte",
          "Verschiedene Größen"
        ],
        2,
        "Absorbanz ist −log₁₀(T), der Absorptionsanteil ist ein Energieanteil."
      ],
      [
        "Eine Probe erscheint schwarz. Welche Schlussfolgerung ist zulässig?",
        [
          "Das legt ihr Verhalten im gesamten Infrarot nicht fest",
          "Sie absorbiert jede Wellenlänge vollständig",
          "Sie kann kein Licht transmittieren"
        ],
        0,
        "Der sichtbare Eindruck legt die infraroten Eigenschaften nicht eindeutig fest."
      ]
    ],
    "experiment": "balance",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "NASA · Licht und Materie",
        "https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-light-and-matter/"
      ],
      [
        "University of Arizona · Radiometry and Photometry FAQ",
        "https://wp.optics.arizona.edu/jpalmer/radiometry/radiometry-and-photometry-faq/"
      ],
      [
        "NERC · Field spectroscopy",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_2/"
      ]
    ]
  },
  {
    "id": "ph-reflection",
    "title": "Reflexion und Messgeometrie",
    "topics": [
      "Gerichtete und diffuse Reflexion unterscheiden",
      "Glanz und Winkelabhängigkeit erklären",
      "Material- und Geometrieeffekte auseinanderhalten"
    ],
    "scope": "Die Energiebilanz ist bereits bekannt. Jetzt betrachten wir die Richtungsverteilung. Aufbau, Ausrichtung und Verwendung eines White Targets werden erst in Messpraxis als Arbeitsablauf behandelt.",
    "body": [
      [
        "Die Kamera sieht nur einen Ausschnitt",
        "Der gesamte reflektierte Anteil beschreibt, wie viel Strahlung eine Probe insgesamt zurückgibt. Eine Kamera blickt dagegen aus einer bestimmten Richtung und durch eine endliche Objektivöffnung auf die Probe. Sie sammelt nur einen Teil der reflektierten Strahlung. Zwei Aufnahmen derselben Probe können daher verschieden aussehen, obwohl sich das Material nicht geändert hat.<br><br>Zu einer Messgeometrie gehören mindestens Richtung und Ausdehnung der Beleuchtung, Beobachtungsrichtung und Orientierung der Probenoberfläche. Bei gekrümmten Objekten ändern sich diese Beziehungen von Punkt zu Punkt. Eine glänzende Stelle im Bild kann deshalb eine lokale geometrische Besonderheit sein. Sie darf nicht automatisch als Materialdefekt bezeichnet werden."
      ],
      [
        "Gerichtete Reflexion: der Spiegel als Grenzfall",
        "An einer ideal glatten spiegelnden Fläche gilt: <b>Einfallswinkel = Reflexionswinkel</b>. Beide Winkel werden zum Lot gemessen, also zur Senkrechten auf der Oberfläche, nicht zur Oberfläche selbst. Einfallender Strahl, Lot und reflektierter Strahl liegen in derselben Ebene. Dreht man die Fläche, dreht man ihr Lot und damit die Richtung, in die der reflektierte Strahl läuft.<br><br>Reale Oberflächen bestehen oft aus vielen kleinen unterschiedlich orientierten Bereichen. Statt eines einzigen idealen Strahls entsteht ein mehr oder weniger breiter Glanzbereich. Eine kleine Änderung des Probenwinkels kann die Kamera in diesen Bereich hinein- oder aus ihm herausbringen. Das Signal kann dabei stark ansteigen oder abfallen. Mehr Intensität in Kamerarichtung bedeutet nicht zwingend mehr insgesamt reflektierte Energie."
      ],
      [
        "Diffuse Reflexion und das Lambert-Modell",
        "Eine diffuse Oberfläche verteilt reflektierte Strahlung über viele Richtungen. Ein idealer lambertscher Strahler besitzt bei gleicher Beleuchtung eine richtungsunabhängige <b>Strahldichte</b>. Was diese Größe bedeutet, lernst du im nächsten Modul. Das ist nicht dasselbe wie gleich viel Leistung in jedem Raumwinkel: Die projizierte Fläche nimmt bei schräger Betrachtung mit dem Kosinus des Winkels ab.<br><br>Das Lambert-Modell ist eine nützliche Näherung, kein allgemeines Gesetz für jede matte Probe. Reale Materialien können richtungsabhängig reflektieren, auch wenn sie mit dem Auge wenig glänzend wirken. „Matt“ ersetzt daher keine Prüfung der Winkelabhängigkeit. Viele Oberflächen zeigen eine Mischung aus diffusem Anteil und gerichtetem Glanz; die Stärke dieser Beiträge kann außerdem von der Wellenlänge abhängen."
      ],
      [
        "Warum Glanz ein Spektrum verändern kann",
        "Das gemessene Signal kann aus mehreren Beiträgen bestehen: beispielsweise einer gerichteten Oberflächenreflexion und Licht, das in die Probe eingedrungen, dort gestreut und wieder ausgetreten ist. Diese Beiträge können unterschiedliche spektrale Formen besitzen. Ändert sich ihr Mischungsverhältnis mit dem Winkel, verändert sich nicht nur die Helligkeit, sondern möglicherweise auch die Kurvenform oder die Tiefe eines Merkmals.<br><br>Richtungsabhängige Reflexion wird formal etwa durch die BRDF beschrieben, die Beobachtungs- und Beleuchtungsrichtungen verknüpft. Für den Vertrieb reicht hier das Prinzip: Eine einzelne Richtung ist nicht die gesamte Hemisphäre. Auch ein gegen eine diffuse Referenz gebildeter Reflexionsfaktor kann in einer Glanzrichtung über 1 liegen, ohne dass die Probe insgesamt mehr Energie reflektiert als auf sie einfällt. Das ist kein Freibrief, jeden Wert über 1 als korrekt zu akzeptieren."
      ],
      [
        "Eine geometrische Hypothese prüfen",
        "Beispiel: Zwei nominell gleiche Folien erscheinen spektral verschieden. Bevor du eine Materialdifferenz annimmst, erfasse ihre Orientierung und prüfe, ob ein Glanzfleck eine Messregion überlagert. Wiederhole die Aufnahme nach reproduzierbarer Positionierung. Verändere anschließend gezielt nur den Winkel und halte die übrigen Bedingungen möglichst konstant. Wandert die Auffälligkeit mit der Glanzlage, spricht das für einen Geometrieeinfluss.<br><br>Eine kontrollierte Änderung ist aussagekräftiger als gleichzeitig neue Beleuchtung, andere Belichtung und eine gedrehte Probe. Vergleiche außerdem mehrere Stellen und Wiederholungen. Das Ergebnis einer solchen Prüfung lautet zunächst „winkelabhängiger Beitrag beobachtet“. Es ist noch keine allgemeine Aussage darüber, wie alle Proben dieser Materialklasse aussehen. Die konkrete Demo- und Referenzroutine folgt später in Messpraxis."
      ]
    ],
    "exercise": "Eine Folie zeigt nach leichtem Kippen ein viel höheres Signal. Ein Kollege sagt: „Jetzt reflektiert sie insgesamt doppelt so viel Energie.“ Wie korrigierst du das?",
    "modelAnswer": "Wir beobachten nur die Kamerarichtung. Durch das Kippen kann ein gerichteter Glanzanteil in die Objektivöffnung gelangen. Das belegt keine Verdopplung der gesamten reflektierten Leistung. Eine Messung der Richtungsverteilung oder eine geeignete integrierende Messung wäre dafür nötig.",
    "take": "Ein Kamerasignal hängt von der Geometrie ab. Halte Winkel reproduzierbar und prüfe Glanz, bevor du eine Materialänderung behauptest.",
    "q": [
      [
        "Wozu werden Einfalls- und Reflexionswinkel gemessen?",
        [
          "Zur Tischkante",
          "Zum Oberflächenlot",
          "Immer zur Kameraachse"
        ],
        1,
        "Das Lot ist die Senkrechte auf der lokalen Oberfläche."
      ],
      [
        "Eine leichte Drehung verändert das Signal stark. Was prüfst du zuerst?",
        [
          "Ob der Materialname falsch ist",
          "Ob die Probe neue Moleküle bildet",
          "Ob ein Glanzanteil in die Kamera gelangt"
        ],
        2,
        "Die Änderung der Beobachtungsgeometrie kann den gerichteten Reflexionsanteil stark verändern."
      ],
      [
        "Im idealen Lambert-Modell ist welche Größe richtungsunabhängig?",
        [
          "Die Strahldichte",
          "Die Leistung in jedem Raumwinkel ohne Flächenprojektion",
          "Der Einfallswinkel"
        ],
        0,
        "Die projizierte Fläche führt trotzdem zu einer Kosinusabhängigkeit der gerichteten Leistungsabgabe."
      ],
      [
        "Eine matte Oberfläche …",
        [
          "Ist immer perfekt lambertsch",
          "Kann trotzdem winkelabhängig reflektieren",
          "Reflektiert niemals gerichtet"
        ],
        1,
        "Lambert ist ein Modell; reale matte Materialien können davon abweichen."
      ],
      [
        "Wie prüfst du einen Winkel-Einfluss sinnvoll?",
        [
          "Alle Einstellungen gleichzeitig ändern",
          "Nur einen anderen Produktnamen vergeben",
          "Den Winkel kontrolliert variieren und andere Bedingungen konstant halten"
        ],
        2,
        "So lässt sich eine beobachtete Änderung eher einer Ursache zuordnen."
      ],
      [
        "Ein richtungsbezogener Reflexionsfaktor über 1 …",
        [
          "Kann bei Glanz auftreten und muss geprüft werden",
          "Beweist Energieerzeugung",
          "Ist bei jeder Messung zwingend unmöglich"
        ],
        0,
        "Eine diffuse Referenz und eine gerichtete Probe verteilen Energie unterschiedlich. Die Gesamtbilanz bleibt erhalten."
      ]
    ],
    "experiment": "angle",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "NASA · Licht und Materie",
        "https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-light-and-matter/"
      ],
      [
        "University of Arizona · Radiometry and Photometry FAQ",
        "https://wp.optics.arizona.edu/jpalmer/radiometry/radiometry-and-photometry-faq/"
      ],
      [
        "NERC · Field spectroscopy",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_2/"
      ]
    ]
  },
  {
    "id": "ph-radiometry",
    "title": "Radiometrie: Was messen wir eigentlich?",
    "topics": [
      "Leistung, Bestrahlungsstärke und Strahldichte unterscheiden",
      "Radiometrische und photometrische Einheiten zuordnen",
      "Rohsignal, kalibrierte Strahldichte und Reflexionsgröße trennen"
    ],
    "scope": "Dieses Modul erklärt Größen und Einheiten. Es liefert keine Anleitung zur radiometrischen Kalibrierung und keine White-Target-Messroutine. Diese gehören in Messpraxis.",
    "body": [
      [
        "Energie pro Zeit ist Leistung",
        "Radiometrie beschreibt elektromagnetische Strahlung anhand physikalischer Energiegrößen. <b>Strahlungsenergie</b> wird in Joule (J) gemessen. <b>Strahlungsleistung</b> beziehungsweise Strahlungsfluss Φ ist Energie pro Zeit in Watt (W). Liefert eine Quelle eine Sekunde lang konstant 2 W optische Leistung, überträgt sie 2 J Energie.<br><br>Leistung allein sagt noch nicht, auf welcher Fläche diese Energie ankommt oder in welche Richtungen sie verteilt ist. Derselbe optische Wattwert kann eine kleine Stelle stark oder eine große Fläche schwach beleuchten. Auch die spektrale Verteilung ist darin noch nicht beschrieben. Frage daher bei einer Zahl immer: Welche Größe, welche Einheit, welcher Ort und welcher Wellenlängenbereich sind gemeint? Ein isolierter „Intensitätswert“ kann mehrere unterschiedliche Dinge bezeichnen."
      ],
      [
        "Bestrahlungsstärke: Leistung auf einer Fläche",
        "Die <b>Bestrahlungsstärke E</b> ist einfallende Strahlungsleistung pro Fläche und wird in W/m² angegeben. Bei gleichmäßiger Beleuchtung gilt E = Φ / A. Verteilst du 1 W auf 0,01 m², ergeben sich 100 W/m². Auf 0,02 m² sind es nur 50 W/m². Bei ungleichmäßiger Beleuchtung kann ein Mittelwert lokale Unterschiede verdecken.<br><br>Die Orientierung der Fläche ist relevant: Dieselbe Strahlung kann bei schrägem Einfall auf eine größere Fläche verteilt werden. Ein Abstandsgesetz wie 1/r² gilt nur unter passenden Annahmen, zum Beispiel für eine hinreichend punktförmige Quelle im geeigneten Abstand. Es ist kein universelles Gesetz für jede Laborleuchte, Flächenquelle oder fokussierte Beleuchtung. Verwende deshalb für ein konkretes Setup Messungen oder ein geeignetes Modell."
      ],
      [
        "Strahlstärke und Strahldichte: Richtung zählt",
        "Die <b>Strahlstärke I</b> ist Leistung pro Raumwinkel, Einheit W/sr. Ein Raumwinkel beschreibt einen räumlichen Richtungsausschnitt; seine Einheit ist Steradiant. Die <b>Strahldichte L</b> berücksichtigt zusätzlich die projizierte Fläche: W/(m² · sr). Sie beschreibt damit, wie viel Strahlung eine Fläche in einer bestimmten Richtung abgibt. Das ist für abbildende optische Systeme eine zentrale Größe.<br><br>Für eine ideal diffuse, lambertsche reflektierende Fläche gilt unter geeigneter Beleuchtung <b>L = ρ · E / π</b>, wobei ρ der diffuse Reflexionsgrad ist. Bei E = 100 W/m² und ρ = 0,5 ergibt sich L ≈ 15,9 W/(m² · sr). Diese Beziehung ist ein Modell für lambertsche Reflexion; sie darf nicht pauschal auf gerichteten Glanz übertragen werden. E beschreibt das Ankommende, L das in eine Richtung Abgehende."
      ],
      [
        "Spektrale Größen brauchen eine zusätzliche Einheit",
        "Eine spektrale Strahldichte Lλ beschreibt die Verteilung pro Wellenlängenintervall, zum Beispiel in W/(m² · sr · nm). Um die Strahldichte über ein Band zu erhalten, integriert man über die Wellenlänge. Ist Lλ in einem 10 nm breiten Band näherungsweise konstant 2 W/(m² · sr · nm), ergibt sich eine Bandstrahldichte von 20 W/(m² · sr). Bei stark veränderlichen Werten muss die Kurve entsprechend integriert werden.<br><br>Die Einheit „pro nm“ ist nicht dasselbe wie „pro µm“. Für dieselbe physikalische Verteilung ist der Zahlenwert pro µm tausendmal so groß wie der Zahlenwert pro nm, weil 1 µm tausend Nanometer umfasst. Beim Vergleichen von Exportdateien müssen deshalb sowohl Achseneinheiten als auch Dichte-Einheiten stimmen. Auch eine spektrale Dichte pro Frequenz lässt sich nicht durch bloßes Umbenennen der Achse umrechnen."
      ],
      [
        "Photometrie, Rohwerte und Reflexion",
        "Photometrie gewichtet Strahlung mit einer standardisierten spektralen Empfindlichkeit des menschlichen Sehens. Lichtstrom wird in Lumen, Beleuchtungsstärke in Lux angegeben. Lux ist daher kein allgemeines Maß für die Versorgung einer NIR- oder SWIR-Messung. Zwei Quellen mit gleichem Luxwert können im infraroten Messbereich stark unterschiedliche Strahlung liefern.<br><br>Ein Kamera-Rohwert, oft DN genannt, ist zunächst ein digitaler Messwert. Er hängt unter anderem von Strahlung, Belichtungszeit, Verstärkung und Sensorantwort ab. Eine radiometrische Kalibrierung kann unter ihren gültigen Bedingungen eine physikalische Größe wie Strahldichte liefern. Eine daraus abgeleitete Reflexionsgröße benötigt weitere Informationen über Beleuchtung, Referenz und Geometrie. „Radiometrisch“ und „Reflektanz“ sind deshalb keine Synonyme. Ein White Target ist eine charakterisierte Referenz, kein beliebiges weißes Blatt; sein korrekter Einsatz folgt später."
      ]
    ],
    "exercise": "Ein Datenexport enthält den Zahlenwert 2 mit Einheit W/(m² · sr · nm). Ein anderer enthält 2.000 W/(m² · sr · µm). Widersprechen sich die Werte? Welche Zusatzfrage stellst du vor dem Vergleich?",
    "modelAnswer": "Die Zahlen können dieselbe spektrale Strahldichte ausdrücken: pro µm ist der Zahlenwert um den Faktor 1.000 größer. Prüfe zusätzlich, ob Wellenlänge, Messbedingungen und Kalibrierung übereinstimmen. Bloße Zahlenvergleiche ohne Einheit sind nicht aussagekräftig.",
    "take": "Erst Größe und Einheit machen eine Zahl interpretierbar. DN, Strahldichte, Reflexionsgröße und Lux dürfen nicht verwechselt werden.",
    "q": [
      [
        "1 W gleichmäßig auf 0,02 m² ergibt …",
        [
          "0,02 W/m²",
          "50 W/m²",
          "200 W/m²"
        ],
        1,
        "Bestrahlungsstärke = Leistung / Fläche = 1 / 0,02."
      ],
      [
        "Welche Einheit gehört zur Strahldichte?",
        [
          "Lux",
          "Watt allein",
          "W/(m² · sr)"
        ],
        2,
        "Strahldichte enthält sowohl projizierte Fläche als auch Raumwinkel."
      ],
      [
        "Lλ = 2 pro nm, konstant über 10 nm. Die Bandstrahldichte beträgt …",
        [
          "20 W/(m² · sr)",
          "0,2 W/(m² · sr)",
          "2.000 Lux"
        ],
        0,
        "Die spektrale Dichte wird über das Wellenlängenintervall integriert."
      ],
      [
        "Warum reicht Lux für die Bewertung einer SWIR-Beleuchtung nicht?",
        [
          "Weil Lux nur elektrische Leistung misst",
          "Weil Lux nach menschlicher Sehempfindlichkeit gewichtet ist",
          "Weil Lux keine Einheit ist"
        ],
        1,
        "Photometrische Größen sind keine allgemeine radiometrische Charakterisierung im Infrarot."
      ],
      [
        "Ein Rohwert von 5.000 DN ist ohne weitere Angaben …",
        [
          "Immer 50 % Reflexion",
          "Immer 5.000 W",
          "Keine eindeutig bestimmte physikalische Strahldichte"
        ],
        2,
        "Für die Umrechnung braucht es gültige Kalibrierung und passende Aufnahmebedingungen."
      ],
      [
        "Wann darf L = ρE/π als Reflexionsmodell verwendet werden?",
        [
          "Unter der Annahme lambertscher Reflexion",
          "Für jeden Glanzpunkt exakt",
          "Nur für elektrische Lampenleistung"
        ],
        0,
        "Die Beziehung setzt die entsprechende diffuse Richtungsverteilung voraus."
      ]
    ],
    "experiment": "radiometry",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "NASA · Licht und Materie",
        "https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-light-and-matter/"
      ],
      [
        "University of Arizona · Radiometry and Photometry FAQ",
        "https://wp.optics.arizona.edu/jpalmer/radiometry/radiometry-and-photometry-faq/"
      ],
      [
        "NERC · Field spectroscopy",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_2/"
      ]
    ]
  },
  {
    "id": "ph-spectra",
    "title": "Spektren lesen und Grenzen erkennen",
    "topics": [
      "Achsen und Messgrößen zuerst prüfen",
      "Lage, Tiefe und Breite von Merkmalen unterscheiden",
      "Beleuchtung, Mischung und Verarbeitung als Einflüsse erkennen"
    ],
    "scope": "Die Begriffe aus den vorigen Modulen werden angewendet. Algorithmen, Klassifikatoren, neuronale Netze und Softwarebedienung bleiben in ihren eigenen Lernwelten.",
    "body": [
      [
        "Bevor du eine Kurve interpretierst",
        "Ein Spektrum ist zunächst eine Darstellung einer Größe über Wellenlänge oder Frequenz. Lies zuerst die Achsen: Steht horizontal nm, µm oder eine andere Größe? Steht vertikal DN, spektrale Strahldichte, Reflexionsfaktor, Transmission oder Absorbanz? Ist die Skala linear oder logarithmisch? Ein Tal in einer Reflexionskurve und ein Maximum in einer Absorbanzkurve dürfen nicht ohne Weiteres gleich interpretiert werden.<br><br>Prüfe außerdem, ob die Kurve einen einzelnen Bildpunkt, einen Mittelwert über eine Region oder bereits verarbeitete Daten zeigt. Ein Mittelwert kann zufällige Schwankungen reduzieren, aber auch verschiedene Materialien oder Beleuchtungssituationen mischen. Eine fehlende Achsenbeschriftung ist kein kosmetisches Problem: Ohne Messgröße und Einheit ist eine fachlich belastbare Interpretation häufig unmöglich."
      ],
      [
        "Merkmale systematisch beschreiben",
        "Beschreibe eine spektrale Struktur zunächst ohne Materialdiagnose. Wo liegt das Minimum oder Maximum? Wie breit ist der Bereich? Wie stark hebt er sich vom lokalen Untergrund ab? Ist die Form in Wiederholungen stabil? Ein breitbandiger Anstieg der gesamten Kurve ist etwas anderes als eine lokalisierte Absorptionsstruktur.<br><br>Eine relative Bandtiefe kann beispielsweise als 1 − Rmin/Rkontinuum beschrieben werden. Bei Rmin = 0,3 und einem gewählten lokalen Kontinuum von 0,6 ergibt sich 0,5 beziehungsweise 50 %. Die Definition hängt von der Kontinuumswahl ab. Eine andere Baseline kann einen anderen Wert liefern. Berichte deshalb die Auswertemethode, statt die Bandtiefe als unveränderliche Materialkonstante zu behandeln. Auch die instrumentelle spektrale Antwort kann schmale Merkmale verbreitern und abschwächen."
      ],
      [
        "Das Rohsignal ist ein Zusammenspiel",
        "In einer vereinfachten schmalbandigen Betrachtung hängt das reflektierte Rohsignal vom Beleuchtungsspektrum, vom richtungsabhängigen Probenverhalten, von der spektralen Systemempfindlichkeit und von Aufnahmeparametern ab. Real integriert jeder Kanal über seine Antwortfunktion. Die vereinfachte Multiplikation dreier Kurven ist daher ein Denkmodell und keine vollständige Kamera-Kalibrierung.<br><br>Ein Tal im Rohsignal kann entstehen, weil die Quelle dort wenig liefert, das System dort wenig empfindlich ist oder die Probe dort weniger Strahlung in Kamerarichtung zurückgibt. An einer Stelle ohne ausreichendes Signal macht auch rechnerische Normierung keine zuverlässige Information verfügbar. Eine Referenzierung kann Beiträge korrigieren, benötigt aber gültige Bedingungen. Ihre praktische Durchführung gehört in Messpraxis."
      ],
      [
        "Verarbeitung kann helfen und Information entfernen",
        "Eine Normierung auf das Maximum oder auf die Fläche unter der Kurve erleichtert manchmal Formvergleiche. Sie entfernt aber absolute Skalierungsinformation. Zwei Kurven können nach Normierung gleich aussehen, obwohl sich ihre ursprüngliche Intensität stark unterscheidet. Umgekehrt kann eine unterschiedliche Form nach Normierung sichtbarer werden. Die richtige Verarbeitung hängt von der Fragestellung ab.<br><br>Glättung kann zufällige Schwankungen reduzieren, aber schmale echte Merkmale abschwächen. Interpolation erzeugt zusätzliche Stützstellen, jedoch keine neue instrumentelle Auflösung. Ein einzelner auffälliger Kanal ist deshalb zunächst ein Prüfhinweis. Vergleiche benachbarte Kanäle, Wiederholungen und die erwartete Antwortbreite des Systems. Speichere die ursprünglichen Daten und dokumentiere die Verarbeitung, damit eine überzeugende Grafik nicht mit einer unabhängigen Messbestätigung verwechselt wird."
      ],
      [
        "Von einem Unterschied zu einer belastbaren Aussage",
        "Eine spektrale Unterscheidung ist nicht automatisch eine eindeutige chemische Identifikation. Verschiedene Materialien können unter bestimmten Bedingungen ähnlich aussehen; dasselbe Material kann sich mit Feuchte, Temperatur, Oberfläche oder Geometrie verändern. Ein Bildpunkt kann außerdem mehrere Bestandteile enthalten. Ein „spektraler Fingerabdruck“ ist deshalb eine nützliche Metapher, aber keine Garantie universeller Eindeutigkeit.<br><br>Beispiel: Zwei Kunststoffgruppen unterscheiden sich in einem ersten Versuch. Für eine robuste Aussage brauchst du mehrere unabhängige Proben, Wiederholungen, plausible Kontrollbedingungen und eine Bewertung der Streuung innerhalb jeder Gruppe. Ein Modell, das nur die Beleuchtung oder die Probenhalterung erkennt, löst die eigentliche Materialaufgabe nicht. Beschreibe zunächst den beobachteten Unterschied und welche zusätzliche Prüfung eine weitergehende Behauptung stützen würde."
      ]
    ],
    "exercise": "Zwei Spektren sind nach Normierung fast identisch. Vorher war eines doppelt so hoch. Was darfst du sagen, und was nicht?",
    "modelAnswer": "Die normierten Formen sind unter der gewählten Verarbeitung ähnlich. Die absolute Skalierungsinformation wurde entfernt. Daraus folgt weder gleiche ursprüngliche Strahldichte noch sicher identisches Material. Für die Materialfrage sind weitere unabhängige Proben und kontrollierte Bedingungen nötig.",
    "take": "Erst beschreiben, dann erklären, dann validieren. Eine schöne Kurve ist noch kein Materialnachweis.",
    "q": [
      [
        "Was prüfst du zuerst bei einem unbekannten Spektrum?",
        [
          "Die Linienfarbe",
          "Achsen, Größen, Einheiten und Verarbeitung",
          "Den gewünschten Materialnamen"
        ],
        1,
        "Ohne die Bedeutung der dargestellten Größen fehlt die Grundlage für Interpretation."
      ],
      [
        "Ein Tal im Rohsignal beweist …",
        [
          "Immer Absorption der Probe",
          "Immer einen Defekt",
          "Für sich allein keine bestimmte Ursache"
        ],
        2,
        "Auch Quelle und Systemempfindlichkeit können ein Tal verursachen."
      ],
      [
        "Maximum-Normierung entfernt typischerweise …",
        [
          "Absolute Skalierungsinformation",
          "Alle Materialunterschiede",
          "Den Wellenlängenbereich"
        ],
        0,
        "Die Form bleibt vergleichbar, die ursprüngliche absolute Höhe geht verloren."
      ],
      [
        "Viele interpolierte Stützstellen …",
        [
          "Verbessern automatisch die instrumentelle Auflösung",
          "Erzeugen keine neue gemessene Auflösung",
          "Beweisen ein scharfes Merkmal"
        ],
        1,
        "Interpolation verändert die Darstellung beziehungsweise Abtastung, nicht die optische Antwort."
      ],
      [
        "Rmin = 0,3 und Rkontinuum = 0,6: relative Bandtiefe?",
        [
          "0,2",
          "2",
          "0,5"
        ],
        2,
        "1 − 0,3/0,6 = 0,5. Der Wert gilt für dieses gewählte Kontinuum."
      ],
      [
        "Zwei Gruppen unterscheiden sich in einer ersten Aufnahme. Was folgt?",
        [
          "Eine Hypothese, die mit unabhängigen Proben geprüft werden muss",
          "Eine universelle chemische Identifikation",
          "Eine Garantie für alle Produktionsbedingungen"
        ],
        0,
        "Ein einzelner Versuch trennt Materialeinflüsse nicht sicher von Störgrößen."
      ]
    ],
    "experiment": "spectrum",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "NASA · Licht und Materie",
        "https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-light-and-matter/"
      ],
      [
        "University of Arizona · Radiometry and Photometry FAQ",
        "https://wp.optics.arizona.edu/jpalmer/radiometry/radiometry-and-photometry-faq/"
      ],
      [
        "NERC · Field spectroscopy",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_2/"
      ]
    ]
  },
  {
    "id": "ph-case",
    "title": "Praxisfall: Materialunterschied oder Messfehler?",
    "topics": [
      "Konkurrierende Erklärungen aufstellen",
      "Einen kontrollierten Vergleich planen",
      "Eine sachliche Kundenantwort mit Grenzen formulieren"
    ],
    "scope": "Ein synthetischer Übungsfall verbindet die sechs vorherigen Module. Er ersetzt weder eine echte Produktvalidierung noch die späteren Vertriebsmodule zur Gesprächsführung und Projektqualifizierung.",
    "body": [
      [
        "Der Auftrag: Zwei ähnliche Folien unterscheiden",
        "Eine Kundin bringt zwei optisch ähnlich aussehende Foliengruppen A und B. Sie fragt, ob eine spektrale Kamera sie zuverlässig trennen kann. In einer ersten Aufnahme liegt die Kurve von B ungefähr 30 % höher; außerdem zeigt sie ein flacheres Tal. Die Rohdaten sind digitale Werte, keine ausgewiesenen Reflexionsspektren. A wurde flach aufgenommen, B lag leicht gewölbt. Zwischen den Aufnahmen wurde die Beleuchtung verändert.<br><br>Alle Zahlen in diesem Fall sind erfunden und dienen der Übung. Es gibt noch keine verlässliche Materialzuordnung. Deine Aufgabe ist nicht, möglichst schnell „ja“ zu sagen, sondern zu klären, welche Beobachtung durch welchen Einfluss erklärbar ist. Halte zunächst fest: Wir sehen unterschiedliche Rohsignale unter unterschiedlichen Bedingungen. Das ist eine Beobachtung, noch keine geprüfte Trennbarkeit."
      ],
      [
        "Drei Hypothesen statt einer vorschnellen Geschichte",
        "<b>Hypothese 1:</b> Die Proben unterscheiden sich tatsächlich in ihren optischen Materialeigenschaften. <b>Hypothese 2:</b> Die andere Beleuchtung verändert Signalhöhe und Kurvenform. <b>Hypothese 3:</b> Die Wölbung lenkt einen anderen Glanzanteil in die Kamera. Zusätzlich können Dicke, Untergrund, Messregion oder Aufnahmeparameter beitragen.<br><br>Prüfe die Datenbeschreibung: Welche Einheit trägt die vertikale Achse? Wurden Belichtungszeit oder Verstärkung verändert? Liegt das Merkmal innerhalb des nutzbaren Wellenlängenbereichs? Sind Werte gesättigt oder Bereiche sehr signalarm? Ordne jede Frage einer Hypothese zu. „Wir nehmen einfach mehr Kanäle“ beantwortet keine dieser Fragen. Auch eine ausgefeilte Auswertung kann fehlende Kontrollen nicht zuverlässig ersetzen."
      ],
      [
        "Der erste kontrollierte Vergleich",
        "Positioniere mehrere Proben beider Gruppen reproduzierbar. Verwende möglichst gleiche Beleuchtung, Beobachtungsgeometrie, Aufnahmeparameter und vergleichbare Messregionen. Führe die für die Messgröße erforderlichen Kontrollen und Referenzierungen nach einem geprüften Messablauf durch; die genaue Routine wird später in Messpraxis geschult. Wechsle die Reihenfolge A/B, damit langsame Änderungen nicht immer mit einer Gruppe zusammenfallen.<br><br>Vergleiche Wiederholungen derselben Probe sowie verschiedene Proben innerhalb jeder Gruppe. Die Variation innerhalb einer Gruppe ist für die Beurteilung ebenso wichtig wie der Abstand zwischen ihren Mittelwerten. Ein großer Unterschied zweier einzelner Bildpunkte kann verschwinden, sobald mehr Proben betrachtet werden. Dokumentiere auch erfolglose oder widersprüchliche Aufnahmen. Sie helfen, die Grenzen der Aussage zu verstehen."
      ],
      [
        "Neue Beobachtungen auswerten",
        "Im kontrollierten Versuch verschwindet ein großer Teil des Höhenunterschieds. Bei leichtem Kippen einer Probe ändert sich die Tiefe des Tals. Ein kleiner verbleibender Formunterschied tritt jedoch bei mehreren unabhängigen Proben beider Gruppen wiederholt auf. Welche Aussage ist jetzt gerechtfertigt?<br><br>Die ersten Unterschiede waren zumindest teilweise von den Messbedingungen abhängig. Der wiederholte verbleibende Unterschied ist ein Kandidat für eine nutzbare Trennung. Er beweist noch keine eindeutige chemische Ursache und keine robuste Leistung im späteren Einsatz. Als Nächstes müssen neue Proben, relevante Chargen und erwartete Prozessbedingungen einbezogen werden. Eine Validierung sollte Proben enthalten, die nicht zur Auswahl der Merkmale oder zur Einstellung einer späteren Auswertung verwendet wurden."
      ],
      [
        "Eine Antwort, die fachlich trägt",
        "Eine passende Kundenantwort lautet: „Unter kontrollierten Bedingungen sehen wir bei den untersuchten Proben einen wiederkehrenden spektralen Unterschied. Ein Teil des anfänglichen Unterschieds stammt offenbar aus Beleuchtung und Geometrie. Wir prüfen jetzt mit weiteren unabhängigen Proben und den vorgesehenen Prozessbedingungen, ob die verbleibende Trennung zuverlässig ist.“<br><br>Diese Antwort trennt Beobachtung, Interpretation und nächste Prüfung. Sie verspricht weder eine bestimmte Fehlerquote noch eine universelle Materialerkennung ohne Daten. Für den nächsten Versuch dokumentierst du die Fragestellung, die verwendeten Proben, die Messbedingungen, die Messgröße, die erwarteten Störeinflüsse und ein vorher vereinbartes Erfolgskriterium. Die kommerzielle Projektqualifizierung und Gesprächsführung werden in anderen Lernwelten behandelt. Hier ist dein Erfolg, physikalisch nachvollziehbar zu argumentieren."
      ]
    ],
    "exercise": "Formuliere in drei Sätzen eine Antwort auf „Kann die Kamera A und B jetzt sicher unterscheiden?“ Verwende je einen Satz für Beobachtung, Einschränkung und nächsten Prüfschritt.",
    "modelAnswer": "Bei mehreren Proben beobachten wir unter kontrollierten Bedingungen einen wiederkehrenden Formunterschied. Seine Ursache und seine Zuverlässigkeit über alle erwarteten Chargen und Geometrien sind noch nicht vollständig geklärt. Wir prüfen die Trennung als Nächstes an unabhängigen Proben unter den vorgesehenen Prozessbedingungen anhand eines vorab festgelegten Erfolgskriteriums.",
    "take": "Eine belastbare Aussage entsteht aus kontrollierten Vergleichen und unabhängigen Wiederholungen. Der Abschluss dieser Lernwelt ersetzt keine Kamerademo- oder Kundenberatungsfreigabe.",
    "q": [
      [
        "B ist in DN um 30 % höher, Beleuchtung und Winkel waren anders. Was ist gesichert?",
        [
          "B reflektiert insgesamt 30 % mehr",
          "Die Rohsignale unterscheiden sich unter verschiedenen Bedingungen",
          "B ist chemisch eindeutig identifiziert"
        ],
        1,
        "Eine Rohsignaländerung lässt sich unter diesen Bedingungen keiner einzelnen Ursache zuordnen."
      ],
      [
        "Was ist der sinnvollste nächste Schritt?",
        [
          "Sofort eine Erfolgsquote versprechen",
          "Nur die Grafik schöner machen",
          "Unter kontrollierten Bedingungen wiederholen"
        ],
        2,
        "Vergleichbare Bedingungen helfen, Material- und Messeinflüsse zu trennen."
      ],
      [
        "Warum A und B in wechselnder Reihenfolge messen?",
        [
          "Damit zeitliche Änderungen nicht systematisch einer Gruppe zugeordnet werden",
          "Damit die Wellenlänge steigt",
          "Damit die Daten automatisch kalibriert sind"
        ],
        0,
        "Eine zeitliche Drift könnte sonst mit der Gruppenzugehörigkeit verwechselt werden."
      ],
      [
        "Ein Merkmal ändert sich beim Kippen. Was folgt?",
        [
          "Es gibt sicher keinen Materialeinfluss",
          "Ein Geometrieeinfluss muss berücksichtigt werden",
          "Alle Proben sind identisch"
        ],
        1,
        "Winkelabhängigkeit zeigt einen möglichen Beitrag der Messgeometrie, schließt andere Beiträge aber nicht aus."
      ],
      [
        "Ein kleiner Unterschied bleibt reproduzierbar. Was brauchst du vor einer robusten Zusage?",
        [
          "Nur dieselbe Grafik",
          "Nur weitere Interpolation",
          "Unabhängige Proben und relevante Einsatzbedingungen"
        ],
        2,
        "Die Generalisierbarkeit muss über die bisher untersuchten Proben hinaus geprüft werden."
      ],
      [
        "Welche Antwort ist fachlich angemessen?",
        [
          "Wir sehen einen wiederkehrenden Unterschied und prüfen seine Zuverlässigkeit unter Einsatzbedingungen",
          "Jede zukünftige Probe wird sicher erkannt",
          "Das Material ist allein durch das erste Rohspektrum bewiesen"
        ],
        0,
        "Die Antwort trennt Beobachtung von noch offenen Schlussfolgerungen."
      ]
    ],
    "experiment": "case",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "NASA · Licht und Materie",
        "https://science.nasa.gov/mission/webb/science-overview/science-explainers/spectroscopy-101-light-and-matter/"
      ],
      [
        "University of Arizona · Radiometry and Photometry FAQ",
        "https://wp.optics.arizona.edu/jpalmer/radiometry/radiometry-and-photometry-faq/"
      ],
      [
        "NERC · Field spectroscopy",
        "https://fsf.nerc.ac.uk/training/fieldspectroscopy/tutorial_2/"
      ]
    ]
  }
];
for(const l of PHYSICS_LESSONS){const i=LESSON_CONTENT.findIndex(x=>x.id===l.id);if(i>=0)LESSON_CONTENT[i]=l;else LESSON_CONTENT.push(l);const m=CURRICULUM.worlds.find(w=>w.id==="physics").modules.find(m=>m.id===l.id);Object.assign(m,{title:l.title,topics:l.topics,status:"pilot",contentId:l.id,minutes:12,version:l.id==="light"?2:1,passRatio:.8});}
