/* Kamera & Optik · 2.3 · Educational content, expert review pending. */
const OPTICS_LESSONS = [
  {
    "id": "optics",
    "title": "Bildfeld, Brennweite und Arbeitsabstand",
    "topics": [
      "Bildfeld und Arbeitsabstand präzise beschreiben",
      "Brennweite und Abbildungsmaßstab berechnen",
      "Eine Modellrechnung von einer geprüften Optikauslegung unterscheiden"
    ],
    "scope": "Licht & Physik erklärt die Strahlung. Hier beginnt die räumliche Abbildung: Welcher Ausschnitt landet auf dem Sensor? Blende, Detailauflösung und Belichtung haben jeweils eigene Folgemodule.",
    "body": [
      [
        "Vom Objekt zum Bild",
        "Das Objektiv bildet Punkte einer Szene auf die lichtempfindliche Fläche der Kamera ab. Der Sensor wandelt eintreffende Strahlung in elektrische Signale um; daraus entstehen Bildwerte. Das <b>Bildfeld</b> ist der sichtbare Ausschnitt in der Objektebene, beispielsweise 240 mm Breite und 180 mm Höhe. Es ist nicht die Anzahl der Pixel und auch nicht die Größe des Kameragehäuses.<br><br>Starte eine Auslegung mit dem Objekt: Welche Fläche muss vollständig sichtbar sein? Wie stark schwankt seine Position? Muss ein Rand für Positionierung, Kalibrierung oder nachfolgende Verarbeitung frei bleiben? Ein 240 mm breites Objekt benötigt in der Praxis oft ein etwas größeres Bildfeld. Prüfe beide Bildrichtungen. Wenn das Seitenverhältnis von Objekt und Sensor verschieden ist, kann die Höhe die Auswahl bestimmen, obwohl die Breite bereits passt."
      ],
      [
        "Drei Abstände, die nicht verwechselt werden dürfen",
        "Die <b>Brennweite f</b> beschreibt die Abbildungswirkung des Objektivs. Bei einer idealen dünnen Sammellinse liegt der Fokus parallel einfallender Strahlen eine Brennweite hinter der Linse. Ein reales Objektiv besteht meist aus mehreren Linsen; seine Brennweite ist nicht einfach seine Gehäuselänge. Der <b>Arbeitsabstand</b> wird gewöhnlich von einer definierten Stelle an der Objektivfront bis zum Objekt gemessen. Prüfe immer den Bezugspunkt im Datenblatt.<br><br>Die Gegenstandsweite g in der dünnen Linsengleichung wird dagegen von der objektseitigen Hauptebene gemessen, die bei realen Objektiven im oder außerhalb des Gehäuses liegen kann. Diese Unterscheidung erklärt, warum eine Überschlagsrechnung nicht automatisch das exakte Bildfeld bei einem mechanisch gemessenen Arbeitsabstand liefert. Notiere deshalb sowohl den verfügbaren Bauraum als auch die optischen Angaben. Ein Abstand zum Kameragehäuse ist ohne Bezugspunkt mehrdeutig."
      ],
      [
        "Sensorgröße und Abbildungsmaßstab",
        "Der Betrag des <b>Abbildungsmaßstabs m</b> ist Bildgröße geteilt durch Objektgröße. Wird ein 240 mm breiter Ausschnitt auf 12 mm aktive Bildbreite abgebildet, gilt m = 12/240 = 0,05. Ein 10 mm großes Objektmerkmal wird dann 0,5 mm groß abgebildet. Pixelgröße und Auflösung werden erst im nächsten Schritt berücksichtigt; die geometrische Abbildung selbst braucht zunächst keine Pixelzahl.<br><br>Verwende reale aktive Abmessungen in Millimetern. Historische Sensorformatnamen wie „1 Zoll“ sind keine direkte Angabe der Sensordiagonale von 25,4 mm. Außerdem kann eine Kamera einen Ausschnitt, eine andere aktive Fläche oder eine rekonstruierte Bildgeometrie verwenden. Gerade bei spektralen Systemen sind die für das Nutzbild gültigen Systemangaben entscheidend. Die Gesamtfläche eines internen Sensors lässt sich nicht ungeprüft als Bildfeldmaß eines ausgegebenen Spektralbilds einsetzen."
      ],
      [
        "Eine einfache Auslegung rechnen",
        "Für eine dünne Linse gilt <b>1/f = 1/g + 1/b</b>, mit Bildweite b. Zusammen mit m = b/g erhältst du m = f/(g − f) und die Objektfeldbreite <b>W = H · (g − f)/f</b>. H ist die aktive Bildbreite. Umgestellt ergibt sich <b>f = H · g/(W + H)</b>. Alle Längen müssen in derselben Einheit stehen.<br><br>Beispiel: H = 12 mm, g = 500 mm, W = 240 mm. Dann ist f ≈ 23,8 mm. Für g viel größer als f wird daraus die bekannte Näherung W ≈ H · g/f. Sie würde hier 25 mm liefern. Beide Ergebnisse sind Startpunkte für die Auswahl, keine bestätigten Werte eines konkreten Objektivs. Nahfokus, reale Hauptebenen, Verzeichnung und Änderungen beim Fokussieren können das tatsächliche Bildfeld beeinflussen."
      ],
      [
        "Was sich bei längerer Brennweite verändert",
        "Bei gleichem Sensor und gleicher Gegenstandsweite ergibt eine längere Brennweite ein kleineres Bildfeld und einen größeren Abbildungsmaßstab. Soll das Bildfeld gleich bleiben, muss die Kamera mit längerer Brennweite weiter weg. Mehr Abstand kann mechanisch hilfreich sein, verändert aber den Aufbau. Eine kurze Brennweite ist daher nicht automatisch besser oder schlechter; sie beantwortet eine andere geometrische Aufgabe.<br><br>Zoom verändert die Brennweite. Fokussieren stellt die scharfe Abbildung für eine bestimmte Entfernung ein; manche Objektive verändern dabei etwas ihren Bildwinkel. Ein digitaler Ausschnitt vergrößert nur die Darstellung vorhandener Daten und erzeugt keine neu aufgenommenen Details. Formuliere im Kundengespräch zuerst Bildfeld, verfügbare Entfernung und relevante Objekthöhen. Daraus lässt sich eine begründete Kandidatenauswahl ableiten, die anschließend am realen System überprüft wird."
      ]
    ],
    "exercise": "Ein 240 mm breites Objekt soll auf 12 mm Bildbreite passen. Die Gegenstandsweite im dünnen Linsenmodell beträgt 500 mm. Berechne den Maßstab und die Brennweite. Warum bestellst du noch nicht allein anhand dieser Zahl?",
    "modelAnswer": "m = 12/240 = 0,05. f = 12 · 500/(240 + 12) ≈ 23,8 mm. Es fehlen unter anderem Bildfeldreserve, vertikale Abdeckung, der reale Arbeitsabstand samt Bezugspunkt und die Prüfung der Objektiv- und Kamerakompatibilität.",
    "take": "Beginne mit Objektfeld und Bauraum. Brennweite entsteht aus der Abbildungsgeometrie; der Zahlenwert allein beschreibt noch kein geeignetes Gesamtsystem.",
    "q": [
      [
        "Was ist das Bildfeld?",
        [
          "Die Zahl der Sensorpixel",
          "Der erfasste Ausschnitt in der Objektebene",
          "Die Gehäusebreite"
        ],
        1,
        "Ein Bildfeld wird beispielsweise in Millimetern Breite und Höhe angegeben."
      ],
      [
        "12 mm Bildbreite für 240 mm Objektbreite: Wie groß ist m?",
        [
          "0,05",
          "20",
          "0,5"
        ],
        0,
        "m = Bildgröße/Objektgröße = 12/240."
      ],
      [
        "Längere Brennweite bei gleichem Abstand und Sensor führt zu …",
        [
          "Größerem Bildfeld",
          "Unverändertem Bildfeld",
          "Kleinerem Bildfeld"
        ],
        2,
        "Der Abbildungsmaßstab steigt, der sichtbare Ausschnitt wird kleiner."
      ],
      [
        "Was unterscheidet Arbeitsabstand und Gegenstandsweite g?",
        [
          "Nur die Schreibweise",
          "Ihr Bezugspunkt kann verschieden sein",
          "g wird immer in Sekunden angegeben"
        ],
        1,
        "Die dünne Linsengleichung nutzt die Hauptebene; der Arbeitsabstand meist eine definierte Stelle an der Front."
      ],
      [
        "H = 12 mm, g = 500 mm, W = 240 mm: f im dünnen Linsenmodell?",
        [
          "Etwa 23,8 mm",
          "500 mm",
          "0,05 mm"
        ],
        0,
        "f = Hg/(W + H) = 6000/252 ≈ 23,8 mm."
      ],
      [
        "Ein digitaler Bildausschnitt …",
        [
          "Erhöht automatisch die optische Auflösung",
          "Verändert die Brennweite des Objektivs",
          "Erzeugt keine zusätzlich aufgenommenen Details"
        ],
        2,
        "Ein Ausschnitt verwendet vorhandene Daten; zusätzliche Darstellungspixel sind keine neue Messinformation."
      ]
    ],
    "experiment": "opt-fov",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Edmund Optics · Brennweite und Bildfeld",
        "https://www.edmundoptics.de/knowledge-center/application-notes/imaging/understanding-focal-length-and-field-of-view/"
      ],
      [
        "The Imaging Source · Objektivauswahl und Anschlüsse",
        "https://www.theimagingsource.com/en-us/resource/glossary/how-to-choose-a-lens-for-machine-vision/"
      ]
    ]
  },
  {
    "id": "op-fnumber",
    "title": "Blende, Lichtdurchsatz und Schärfentiefe",
    "topics": [
      "Die F-Zahl aus Brennweite und Eintrittspupille erklären",
      "Lichtdurchsatz und Schärfentiefe gegeneinander abwägen",
      "Beugung als Grenze starken Abblendens erkennen"
    ],
    "scope": "Dieses Modul behandelt die Blende als optische Stellgröße. Die räumliche Abtastung folgt in Modul 3; Belichtungszeit und Verstärkung folgen in Modul 4. Die Energiebeschreibung aus Licht & Physik wird vorausgesetzt.",
    "body": [
      [
        "Eine Zahl für die relative Öffnung",
        "Die F-Zahl N ist das Verhältnis <b>N = f/D</b>. Dabei ist f die Brennweite und D der Durchmesser der Eintrittspupille. Die Eintrittspupille ist das von der Objektseite aus gesehene Bild der begrenzenden Blendenöffnung. Ihr Durchmesser muss weder dem Frontlinsendurchmesser noch dem mechanischen Lochdurchmesser einer innenliegenden Iris entsprechen.<br><br>Bei f = 25 mm und D = 6,25 mm ergibt sich N = 4, geschrieben f/4. Eine kleinere F-Zahl bedeutet bei gleicher Brennweite eine größere relative Öffnung. „Aufblenden“ senkt die F-Zahl; „Abblenden“ erhöht sie. Verwechsle das nicht mit dem Helligkeitsregler einer Software. Bei einem Objektiv mit fester Blende lässt sich N nicht frei einstellen; auch eine Kamera kann einen bestimmten zulässigen Blendenbereich verlangen."
      ],
      [
        "Warum f/8 deutlich weniger Licht als f/4 liefert",
        "Die Öffnungsfläche hängt quadratisch vom Durchmesser ab. Unter vergleichbaren Bedingungen und bei kleinem Abbildungsmaßstab ist die bildseitige Bestrahlungsstärke näherungsweise proportional zu <b>1/N²</b>. Von f/4 auf f/8 halbiert sich der Pupillendurchmesser und die Lichtmenge pro Zeit sinkt auf ungefähr ein Viertel. Eine Verdopplung der F-Zahl ist also keine Halbierung der Lichtmenge.<br><br>Die klassische Reihe f/2, f/2,8, f/4, f/5,6, f/8 nähert Schritte an, die jeweils etwa die halbe Lichtmenge durchlassen. Die Rechnung setzt unter anderem gleiche Szene und vergleichbare Transmission voraus. Vergütungen, Abschattungen und spektrale Verluste können den tatsächlichen Durchsatz verändern. Im Nahbereich muss außerdem die wirksame bildseitige Öffnung berücksichtigt werden. Eine nominell gleiche F-Zahl garantiert daher nicht unter allen Bedingungen dieselben Kamerawerte."
      ],
      [
        "Schärfe ist an eine Anforderung gebunden",
        "Exakt fokussiert wird auf eine bestimmte Objektebene. Punkte davor oder dahinter werden als größere Flecken abgebildet. Als <b>Schärfentiefe</b> bezeichnen wir den Bereich im Objektraum, in dem diese Unschärfe für eine festgelegte Aufgabe noch akzeptabel ist. Für das Erkennen eines großen Flecks kann mehr Unschärfe zulässig sein als für eine präzise Kantenmessung.<br><br>Bei unveränderter Geometrie erhöht Abblenden zunächst üblicherweise den tolerierbaren Tiefenbereich, weil die Strahlenbündel schmaler werden. Der Abbildungsmaßstab und das akzeptierte Unschärfekriterium sind ebenfalls entscheidend. Eine kleinere Ausgabe auf dem Bildschirm kann scharf wirken, obwohl die Originaldaten die Anforderung verfehlen. Fordere deshalb keine pauschale „Schärfentiefe von 20 mm“, ohne Detailgröße, Kontrast und Bewertungsmaßstab festzulegen. Schärfentiefe im Objektraum ist außerdem von der zulässigen Sensorverschiebung im Bildraum zu unterscheiden."
      ],
      [
        "Warum beliebig weit Abblenden nicht funktioniert",
        "Eine endliche Öffnung beugt Licht. Selbst eine ideale kreisförmige Pupille bildet einen Punkt daher nicht als unendlich kleinen Punkt ab. Im einfachen beugungsbegrenzten Modell beträgt der Durchmesser des zentralen Airy-Scheibchens bis zum ersten Minimum ungefähr <b>d = 2,44 · λ · N</b>. λ und d müssen in denselben Längeneinheiten eingesetzt werden; bei größerem Abbildungsmaßstab ist die effektive F-Zahl relevant.<br><br>Bei λ = 0,55 µm und f/8 ergibt sich d ≈ 10,7 µm. Bei λ = 1,1 µm ist der Durchmesser unter denselben Modellbedingungen doppelt so groß. Das ist kein universeller Grenzwert für die kleinste erkennbare Objektstruktur, sondern eine charakteristische Größe des Punktbilds. Reale Abbildungsfehler kommen hinzu. Starkes Abblenden kann deshalb trotz größerer geometrischer Schärfentiefe feine Details im ganzen Bild verschlechtern."
      ],
      [
        "Den sinnvollen Arbeitspunkt finden",
        "Öffnet man die Blende sehr weit, stehen mehr Photonen zur Verfügung; zugleich können Abbildungsfehler und Defokus stärker auffallen. Schließt man sie weit, fehlen möglicherweise Photonen und die Beugung nimmt zu. Ein sinnvoller Arbeitspunkt erfüllt gemeinsam die Anforderungen an Detailkontrast, Objekthöhen und Signal. Er hängt auch vom verwendeten Wellenlängenbereich ab.<br><br>Prüfe die Aufnahme bei mehreren relevanten Objekthöhen und bis zum Bildrand. Vergleiche nach einem festen Detailkriterium und dokumentiere die eingestellte F-Zahl. Wenn die Aufgabe nur durch extreme Abblendung lösbar erscheint, sind bessere Objektführung, andere Geometrie oder eine passendere Optik mögliche Ansatzpunkte. Eine längere Belichtungszeit kann fehlende Photonen teilweise ausgleichen, ist aber bei Bewegung begrenzt. Die genaue Bewegungsrechnung lernst du in Modul 5."
      ]
    ],
    "exercise": "Du wechselst bei gleicher Szene von f/4 auf f/8. Welche Veränderung der Belichtungszeit würde die geringere Lichtmenge näherungsweise ausgleichen? Nenne zwei Gründe, warum das trotzdem keine automatisch bessere Aufnahme ergibt.",
    "modelAnswer": "Ungefähr die vierfache Belichtungszeit gleicht den Faktor 1/4 im Lichtdurchsatz aus. Längere Belichtung kann Bewegung stärker verwischen; die kleinere Öffnung erhöht zudem die Beugung. Auch reale Transmission und Kameraanforderungen müssen passen.",
    "take": "Blende steuert einen Kompromiss zwischen Licht, Defokustoleranz und Detailkontrast. Die höchste F-Zahl ist kein allgemeines Qualitätsziel.",
    "q": [
      [
        "25 mm Brennweite und 6,25 mm Eintrittspupille ergeben …",
        [
          "f/4",
          "f/156",
          "f/0,25"
        ],
        0,
        "N = 25/6,25 = 4."
      ],
      [
        "Von f/4 auf f/8: Der Lichtdurchsatz beträgt näherungsweise …",
        [
          "Das Doppelte",
          "Die Hälfte",
          "Ein Viertel"
        ],
        2,
        "Bei vergleichbaren Bedingungen gilt 1/N²."
      ],
      [
        "Was bedeutet Schärfentiefe?",
        [
          "Nur die Gehäusetiefe",
          "Objekttiefenbereich mit aufgabenbezogen akzeptabler Unschärfe",
          "Immer scharfe Abbildung aller Entfernungen"
        ],
        1,
        "Das Akzeptanzkriterium gehört zur Angabe der Schärfentiefe."
      ],
      [
        "Warum kann sehr starkes Abblenden Details verschlechtern?",
        [
          "Weil die Beugung stärker begrenzt",
          "Weil keine Fokussierung mehr existiert",
          "Weil die Brennweite stets verdoppelt wird"
        ],
        0,
        "Der Airy-Durchmesser steigt im einfachen Modell mit der F-Zahl."
      ],
      [
        "Doppelte Wellenlänge bei gleicher effektiver F-Zahl: Airy-Durchmesser?",
        [
          "Halb so groß",
          "Unverändert",
          "Doppelt so groß"
        ],
        2,
        "d = 2,44 λN ist proportional zur Wellenlänge."
      ],
      [
        "Eine geeignete Blende wählst du anhand …",
        [
          "Nur der Helligkeit der Bildschirmvorschau",
          "Von Signal, Detailkontrast und relevantem Tiefenbereich gemeinsam",
          "Nur der höchsten verfügbaren F-Zahl"
        ],
        1,
        "Die Anforderungen müssen im realen Aufnahmebereich gemeinsam erfüllt werden."
      ]
    ],
    "experiment": "opt-aperture",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Edmund Optics · Blende und Lichtdurchsatz",
        "https://www.edmundoptics.com/knowledge-center/application-notes/imaging/lens-iris-aperture-setting/"
      ],
      [
        "Edmund Optics · Schärfentiefe",
        "https://www.edmundoptics.com/knowledge-center/application-notes/imaging/depth-of-field-and-depth-of-focus/"
      ],
      [
        "Edmund Optics · Beugungsgrenze",
        "https://www.edmundoptics.com/knowledge-center/application-notes/imaging/limitations-on-resolution-and-contrast-the-airy-disk/"
      ]
    ]
  },
  {
    "id": "op-resolution",
    "title": "Pixel, Objektauflösung und Detailkontrast",
    "topics": [
      "Abtastmaßstab in mm pro Bildpunkt berechnen",
      "Pixelzahl von tatsächlich auflösbaren Details unterscheiden",
      "Kontrastübertragung und spektrale Nutzauflösung einordnen"
    ],
    "scope": "Hier geht es um räumliche Details. Spektrale Auflösung wurde in Licht & Physik behandelt. Kameraarchitekturen und konkrete Cubert-Auflösungsangaben bleiben in den Produkt- und Technologiewelten.",
    "body": [
      [
        "Megapixel beantworten nur eine Teilfrage",
        "Ein Bild mit vielen Pixeln besitzt viele Zahlenwerte. Ob diese Zahlen viele unterscheidbare Details enthalten, hängt zusätzlich von Objektiv, Fokus, Blende, Bewegung, Kontrast und Signalqualität ab. Eine unscharfe Szene wird durch mehr Ausgabepixel nicht automatisch detaillierter. Deshalb ist „Auflösung“ ohne nähere Beschreibung ein mehrdeutiger Begriff.<br><br>Trenne Sensorpixel, räumliche Bildpunkte des Nutzbilds und tatsächlich nachgewiesene Detailtrennung. Bei spektralen Systemen kann die ausgegebene räumliche Abtastung pro Band von der Anzahl der physisch vorhandenen Sensorpixel abweichen. Ein hochaufgelöstes Vorschau- oder Zusatzbild ist nicht automatisch ein ebenso hochaufgelöstes Spektralbild. Im Beratungsgespräch muss klar sein, auf welchen Datenkanal sich eine genannte Pixelzahl bezieht und ob sie gemessen, rekonstruiert oder nur interpoliert ist."
      ],
      [
        "Von Bildpunkten zu Millimetern auf dem Objekt",
        "Für ein näherungsweise ebenes Objekt und eine passende geometrische Abbildung ergibt sich der mittlere objektseitige Abtastschritt aus <b>s = W/n</b>. W ist die Bildfeldbreite und n die Anzahl nutzbarer räumlicher Bildpunkte quer dazu. Bei W = 240 mm und n = 1.200 beträgt s = 0,2 mm pro Bildpunkt. Ein 0,8 mm breites Merkmal erstreckt sich geometrisch über vier Bildpunkte.<br><br>Das ist zunächst eine Abtastrechnung. Bei Verzeichnung oder einer geneigten Objektebene kann der lokale Maßstab variieren. Ein rechteckiges Bild muss in beiden Richtungen betrachtet werden, und Pixel sind nicht in jedem ausgegebenen Datenraster gleich zu interpretieren. Schreibe deine Rechnung mit dem tatsächlichen Nutzbild und dem für die Aufgabe relevanten Bildfeld auf. Eine angenommene Sensorpixelzahl kann die erreichbare Detaildarstellung sonst deutlich überschätzen."
      ],
      [
        "Warum zwei Pixel nicht jede Erkennung garantieren",
        "Die Nyquist-Bedingung beschreibt die Abtastung räumlicher Frequenzen: Für eine sinusförmige Periode sind mindestens zwei Abtastwerte nötig, um die entsprechende Frequenz grundsätzlich ohne Mehrdeutigkeit erfassen zu können, sofern die übrigen Voraussetzungen erfüllt sind. Ein Linienpaar aus heller und dunkler Linie ist eine solche Periode. Das ist keine Garantie, jeden Defekt von zwei Pixeln Breite zuverlässig zu finden.<br><br>Die Lage des Merkmals relativ zum Pixelraster, die Form, der Kontrast und die optische Unschärfe beeinflussen die Sichtbarkeit. Erkennen, Klassifizieren und maßhaltig Vermessen sind außerdem unterschiedliche Aufgaben. Subpixelverfahren können unter passenden Bedingungen Positionen genauer als einen Abtastschritt schätzen; sie erzeugen jedoch keine beliebige unabhängige Detailauflösung. Wähle deshalb eine begründete Anzahl Bildpunkte über dem Merkmal als Auslegungsziel und validiere die tatsächliche Aufgabe mit repräsentativen Proben."
      ],
      [
        "MTF: Welche Details behalten noch Kontrast?",
        "Ein Objektiv kann grobe helle und dunkle Strukturen gut trennen, während feinere Strukturen im Bild immer ähnlicher grau werden. Die <b>Modulationsübertragungsfunktion (MTF)</b> beschreibt, welcher Anteil des Objektkontrasts bei einer bestimmten räumlichen Frequenz übertragen wird. Räumliche Frequenzen werden beispielsweise in Linienpaaren pro Millimeter angegeben. Achte darauf, ob sich diese Millimeter auf Objekt- oder Bildraum beziehen.<br><br>Für ein periodisches Muster lässt sich sein Modulationskontrast als (Imax − Imin)/(Imax + Imin) angeben. Sind die Extremwerte im Bild 80 und 20, beträgt der Kontrast 0,6. Bei einem Objektkontrast von 1 entspricht dies unter passenden Messbedingungen einer Übertragung von 60 %. MTF-Kurven gelten für bestimmte Bedingungen wie Blende, Wellenlänge, Abstand und Bildposition. Eine einzelne Auflösungszahl ohne Kontrastkriterium ersetzt diese Informationen nicht."
      ],
      [
        "Das System bis an die Bildränder prüfen",
        "Ein gutes Objektiv in der Bildmitte kann am Rand schwächer sein. Unterschiedliche Wellenlängen können verschieden fokussieren, und eine Vergrößerung der Bildfläche kann zuvor ungenutzte Randbereiche sichtbar machen. Prüfe deshalb relevante Details an mehreren Positionen, bei den benötigten Objekthöhen und über die entscheidenden Spektralbänder. Eine reine RGB-Vorschau kann bandabhängige Probleme verdecken.<br><br>Für eine Auslegung hältst du drei Dinge fest: den berechneten Abtastmaßstab, das geforderte Detail mit Kontrast und die geplante experimentelle Prüfung. „0,2 mm pro Bildpunkt“ ist eine saubere geometrische Aussage. „Jeder 0,2-mm-Defekt wird erkannt“ wäre eine zusätzliche Behauptung, die daraus nicht folgt. Bei Kunden mit präzisen Messaufgaben gehört außerdem die Messunsicherheit zur Bewertung; dazu reichen Sensorformat und Megapixelzahl allein nicht aus."
      ]
    ],
    "exercise": "Eine Kamera liefert 1.200 nutzbare Bildpunkte über 240 mm. Ein Fremdkörper ist 0,8 mm breit. Was kannst du berechnen, und welche Aussage wäre noch nicht gerechtfertigt?",
    "modelAnswer": "Der Abtastschritt beträgt 0,2 mm pro Bildpunkt; das Merkmal erstreckt sich über vier Bildpunkte. Eine garantierte Erkennung folgt daraus nicht. Dafür müssen unter anderem Kontrast, Abbildung, Signalqualität, Lage zum Raster und die tatsächlichen Proben geprüft werden.",
    "take": "mm pro Bildpunkt ist ein Abtastmaßstab. Tatsächliche Detailerkennung benötigt zusätzlich ausreichenden Kontrast und eine geprüfte Abbildung.",
    "q": [
      [
        "240 mm Bildfeld und 1.200 Bildpunkte ergeben …",
        [
          "0,002 mm/Bildpunkt",
          "5 mm/Bildpunkt",
          "0,2 mm/Bildpunkt"
        ],
        2,
        "s = W/n = 240/1200."
      ],
      [
        "Ein 0,8-mm-Merkmal bei 0,2 mm/Bildpunkt erstreckt sich über …",
        [
          "16 Bildpunkte",
          "4 Bildpunkte",
          "0,25 Bildpunkte"
        ],
        1,
        "Anzahl = Merkmalbreite/Abtastschritt = 0,8/0,2."
      ],
      [
        "Was beschreibt MTF?",
        [
          "Übertragung von Kontrast abhängig von räumlicher Frequenz",
          "Nur die Anzahl gespeicherter Dateien",
          "Nur die elektrische Verstärkung"
        ],
        0,
        "Feine Strukturen können trotz vieler Pixel durch geringen übertragenen Kontrast verschwinden."
      ],
      [
        "Zwei Abtastwerte pro Periode garantieren …",
        [
          "Identische Kontraste bei jeder Bildposition",
          "Die sichere Erkennung jedes beliebigen Defekts",
          "Keine allgemeine Erkennungsgarantie für reale Defekte"
        ],
        2,
        "Nyquist ist eine Abtastbedingung, keine vollständige Validierung einer Erkennungsaufgabe."
      ],
      [
        "80 und 20 als Maximal- und Minimalwert ergeben welchen Modulationskontrast?",
        [
          "1",
          "0,6",
          "0,2"
        ],
        1,
        "(80 − 20)/(80 + 20) = 60/100."
      ],
      [
        "Welche Pixelzahl verwendest du für eine spektrale Detailaufgabe?",
        [
          "Die für das relevante spektrale Nutzbild gültige räumliche Abtastung",
          "Immer alle physisch vorhandenen Sensorpixel",
          "Die Zahl der interpolierten Bildschirmdarstellung"
        ],
        0,
        "Vorschau, Sensor und spektrales Nutzbild können unterschiedliche räumliche Raster haben."
      ]
    ],
    "experiment": "opt-sampling",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Edmund Optics · MTF und Objektivleistung",
        "https://www.edmundoptics.com/knowledge-center/application-notes/imaging/mtf-curves-and-lens-performance/"
      ],
      [
        "Edmund Optics · Brennweite und Bildfeld",
        "https://www.edmundoptics.de/knowledge-center/application-notes/imaging/understanding-focal-length-and-field-of-view/"
      ]
    ]
  },
  {
    "id": "op-exposure",
    "title": "Belichtungszeit, Gain und Dynamik",
    "topics": [
      "Belichtungszeit und Gain in ihrer Wirkung unterscheiden",
      "Sättigung und dunkle Signalbereiche erkennen",
      "Bittiefe von nutzbarem Dynamikumfang trennen"
    ],
    "scope": "Dieses Modul erklärt die Kamera-Stellgrößen und ihre Grenzen. Die systematische Behandlung von Rauschquellen, Dunkelreferenz und Weißreferenz folgt in Messpraxis. Bewegungsunschärfe wird im nächsten Modul quantitativ behandelt.",
    "body": [
      [
        "Belichten heißt: über eine Zeit sammeln",
        "Während der Belichtungszeit integriert ein Pixel die durch Licht erzeugte Ladung. Bei zeitlich konstanter Beleuchtung, unveränderter Geometrie und im linearen, ungesättigten Bereich steigt das nutzbare Signal näherungsweise mit der Belichtungszeit. Doppelte Zeit bedeutet dann ungefähr doppelte photoerzeugte Ladung. Ein Offset oder Dunkelsignal gehört nicht zu dieser einfachen Proportionalitätsaussage über das Lichtsignal.<br><br>Eine längere Aufnahme sammelt mehr Photonen, aber auch mehr Zeitverlauf. Bewegt sich das Objekt, werden verschiedene Positionen innerhalb derselben Aufnahme vermischt. Zudem können sich Dunkelbeiträge und Bildrate verändern. Die richtige Zeit ist daher nicht einfach „so lang wie möglich“. Sie muss genügend Signal liefern und zu Bewegung, Takt und Messbedingungen passen. Prüfe die Zeitangabe genau: 1 ms sind 1.000 µs, und 0,2 ms sind 200 µs."
      ],
      [
        "Gain verstärkt ein vorhandenes Signal",
        "<b>Gain</b> ist Verstärkung. Analoges Gain kann ein elektrisches Signal vor der Digitalisierung verstärken; digitales Gain skaliert bereits digitalisierte Werte. Beides vergrößert nicht die Zahl zuvor eingefangener Photonen. Eine hellere Darstellung durch Gain ist deshalb nicht gleichbedeutend mit einer informationsreicheren Belichtung.<br><br>Verstärkung verändert, wie Signal, bestimmte Rauschbeiträge und der verfügbare Zahlenbereich zusammenwirken. Analoges Gain kann je nach Kamerakette nachfolgende Auslese- oder Quantisierungseinflüsse relativ zum Signal verändern; es ist daher nicht in jedem Fall identisch mit nachträglicher digitaler Multiplikation. Es verbessert aber nicht durch sich selbst das durch die eingefangene Photonenzahl begrenzte Signal-Rausch-Verhältnis. Für einen Vergleich dokumentierst du die konkrete Gain-Einstellung und ihre Bedeutung im Kameramodell. Ein universeller Zusammenhang zwischen einem beliebigen Gain-Regler und einem bestimmten Faktor ist nicht garantiert."
      ],
      [
        "Sättigung vernichtet unterscheidbare Information",
        "Ein Pixel kann nur eine begrenzte Ladung aufnehmen. Außerdem haben Verstärker und Analog-Digital-Wandler einen endlichen nutzbaren Bereich. Sättigung kann daher an verschiedenen Stellen entstehen. Liegen unterschiedliche reale Eingangssignale am selben Maximalwert, sind diese Unterschiede in der Aufnahme verloren. Eine spätere Helligkeitskorrektur kann sie nicht rekonstruieren.<br><br>Bei spektralen Daten kann ein einzelnes Band sättigen, obwohl das Vorschaubild unauffällig aussieht. Prüfe daher die relevanten Kanäle und Regionen. Eine flach abgeschnittene Kurve oder viele Werte exakt am Grenzwert sind Hinweise, aber die gültige Sättigungsgrenze ist systemspezifisch. Referenzierung macht gesättigte Daten nicht wieder linear. Wähle genügend Reserve für erwartete Unterschiede zwischen Proben und Beleuchtungsänderungen. Ein bestimmter Prozentwert der digitalen Skala ist ohne Kamerakontext kein allgemeingültiges Qualitätskriterium."
      ],
      [
        "Bittiefe ist nicht dasselbe wie Dynamikumfang",
        "Ein idealer 12-Bit-Ausgabewert kann 2¹² = 4.096 unterschiedliche Codes annehmen, typischerweise von 0 bis 4.095. Das beschreibt die Anzahl darstellbarer Stufen. Es sagt nicht, dass alle Stufen als unabhängige Helligkeitsunterschiede nutzbar sind. Rauschen, Offset, Sättigung und Verarbeitung können den tatsächlich nutzbaren Bereich begrenzen.<br><br>Der Dynamikumfang beschreibt das Verhältnis zwischen einem oberen nutzbaren Signal und einer definierten unteren Empfindlichkeitsgrenze. Kamerakennwerte sind nur mit ihrer Messdefinition und den Aufnahmebedingungen sinnvoll vergleichbar. Mehr Ausgabebits können die Quantisierung feiner machen, erzeugen aber keine zusätzlichen Photonen. Eine 16-Bit-Datei kann beispielsweise Daten einer geringeren effektiven Bittiefe enthalten. Frage deshalb nach gemessenen Leistungsdaten und nicht nur nach dem Dateiformat. Die EMVA 1288 stellt dafür definierte Charakterisierungsverfahren bereit."
      ],
      [
        "Eine Einstellung nachvollziehbar wählen",
        "Betrachte zunächst die hellsten und dunkelsten relevanten Stellen beziehungsweise Spektralbänder. Lege dann die maximal zulässige Belichtungszeit aus Bewegung und Takt fest. Innerhalb dieses Rahmens suchst du eine Aufnahme mit ausreichendem Signal und ohne relevante Sättigung. Wenn das nicht gelingt, können Beleuchtung, optischer Durchsatz, Bildmaßstab oder die Aufgabe selbst angepasst werden müssen.<br><br>Automatische Belichtung und automatisches Gain sind für eine angenehme Vorschau praktisch, verändern aber Messbedingungen zwischen Aufnahmen. Für reproduzierbare Vergleiche müssen diese Änderungen kontrolliert und dokumentiert werden. Es gibt kein universelles Verbot solcher Funktionen; entscheidend ist, dass Kalibrierung und Auswertung ihre tatsächlichen Einstellungen korrekt berücksichtigen. Beurteile die Roh- beziehungsweise Messdaten und ihre Kennwerte, nicht allein ein vom Bildschirm automatisch gestrecktes Bild. Die konkrete Aufnahme- und Referenzroutine gehört zur nächsten Lernwelt."
      ]
    ],
    "exercise": "Eine dunkle Aufnahme wird durch digitales Gain 4× heller dargestellt. Welche Informationen sind dadurch hinzugekommen? Wie unterscheidet sich das von vierfacher Belichtungszeit unter konstantem Licht?",
    "modelAnswer": "Digitales Gain fügt keine aufgenommenen Photonen hinzu und skaliert auch vorhandene Schwankungen. Vierfache Belichtungszeit sammelt im linearen Bereich ungefähr viermal so viel Lichtsignal, kann aber Sättigung und Bewegungsunschärfe erhöhen. Die beiden Eingriffe sind deshalb nicht austauschbar.",
    "take": "Belichtungszeit sammelt Licht über Zeit. Gain verstärkt. Sättigung und fehlendes Signal lassen sich nicht durch eine schöne Vorschau reparieren.",
    "q": [
      [
        "Von 2 auf 4 ms bei konstantem Licht und ungesättigtem linearem Betrieb: photoerzeugtes Signal?",
        [
          "Bleibt immer gleich",
          "Ungefähr doppelt",
          "Ungefähr halbiert"
        ],
        1,
        "Die integrierte photoerzeugte Ladung ist unter diesen Bedingungen proportional zur Zeit."
      ],
      [
        "Digitales Gain 4× führt zu …",
        [
          "Skalierung der bereits digitalisierten Werte",
          "Viermal mehr eingefangenen Photonen",
          "Automatisch viermal höherer Detailauflösung"
        ],
        0,
        "Die Verstärkung sammelt kein zusätzliches Licht."
      ],
      [
        "Gesättigte Werte lassen sich durch nachträgliches Abdunkeln …",
        [
          "Immer vollständig rekonstruieren",
          "In zusätzliche Spektralbänder umwandeln",
          "Nicht wieder in ihre ursprünglichen Unterschiede auflösen"
        ],
        2,
        "Mehrere Eingangssignale wurden auf denselben Grenzwert abgebildet."
      ],
      [
        "12 Bit ermöglichen nominell …",
        [
          "12 Helligkeitscodes",
          "4.096 Codes",
          "1.200 Codes"
        ],
        1,
        "2 hoch 12 = 4096; üblicher Wertebereich 0 bis 4095."
      ],
      [
        "Eine 16-Bit-Datei beweist …",
        [
          "Nicht automatisch 16 Bit unabhängige Messinformation",
          "Immer 16 Bit nutzbaren Dynamikumfang",
          "Rauschfreie Daten"
        ],
        0,
        "Dateiformat, Quantisierung und nutzbarer Dynamikumfang sind zu unterscheiden."
      ],
      [
        "Warum bei Vergleichsmessungen Auto-Gain beachten?",
        [
          "Weil Gain die Brennweite verändert",
          "Weil Automatik immer dieselbe Verstärkung erzwingt",
          "Weil sich Aufnahmebedingungen zwischen Bildern ändern können"
        ],
        2,
        "Reproduzierbare Auswertung benötigt Kenntnis und korrekte Berücksichtigung der Einstellungen."
      ]
    ],
    "experiment": "opt-exposure",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Basler · Bildqualität und Aufnahmeparameter",
        "https://docs.baslerweb.com/optimizing-image-quality"
      ],
      [
        "EMVA 1288 · Messgrößen für Kameras",
        "https://www.emva.org/wp-content/uploads/EMVA1288General_4.0Release.pdf"
      ]
    ]
  },
  {
    "id": "op-motion",
    "title": "Bewegung, Bildrate und Verschluss",
    "topics": [
      "Bewegungsunschärfe aus Geschwindigkeit und Belichtungszeit berechnen",
      "Bildrate von Belichtungszeit unterscheiden",
      "Global Shutter, Rolling Shutter und Trigger einordnen"
    ],
    "scope": "Belichtungszeit und Signal wurden im vorigen Modul erklärt. Hier geht es um Bewegung während und zwischen Aufnahmen. Spektrale Snapshot-Architekturen und Synchronisation konkreter Cubert-Produkte folgen in Kerntechnologie und Produkten.",
    "body": [
      [
        "Zwei Uhren bestimmen die Aufnahme",
        "Die <b>Bildrate</b> zählt aufgenommene Bilder pro Sekunde. 50 Bilder pro Sekunde entsprechen bei gleichmäßiger Folge einem Abstand der Bildstarts von 20 ms. Die <b>Belichtungszeit</b> sagt, wie lange für ein einzelnes Bild beziehungsweise eine Zeile Signal gesammelt wird. Bei 50 Bildern pro Sekunde kann die Belichtungszeit etwa 1 ms betragen, wenn Kamera und Betriebsart das erlauben.<br><br>Ein schnelles Video kann deshalb aus unscharfen Einzelbildern bestehen, während eine langsamere Folge sehr kurze und scharfe Einzelaufnahmen enthalten kann. Maximale Bildrate und zulässige Belichtungszeit sind nicht völlig unabhängig: Auslesezeit, Überlappung von Belichtung und Auslesung, Datenübertragung und Gerätemodus setzen Grenzen. Die konkrete Kombination muss aus den Systemangaben hervorgehen. Eine angegebene Spitzenbildrate gilt außerdem möglicherweise nur für einen Ausschnitt oder eine bestimmte Datenkonfiguration."
      ],
      [
        "Die Bewegung auf Pixel umrechnen",
        "Bei gleichförmiger Bewegung parallel zur betrachteten Objektebene ist der zurückgelegte Weg während der Belichtung näherungsweise <b>b = v · t</b>. Die zugehörige Verwischung in Bildpunkten ist <b>B = v · t/s</b>, wobei s der objektseitige Abtastschritt ist. Nutze konsistente Einheiten: Geschwindigkeit in mm/s und Zeit in Sekunden ergeben Millimeter.<br><br>Beispiel: v = 500 mm/s, t = 1 ms = 0,001 s und s = 0,2 mm/Bildpunkt. Das Objekt bewegt sich 0,5 mm beziehungsweise 2,5 Bildpunkte. Soll die Bewegung höchstens einen Bildpunkt betragen, gilt t ≤ s/v = 0,4 ms. Das ist ein gewähltes Auslegungsbudget, keine universelle Erkennungsgrenze. Beschleunigung, Rotation, Schwingung und räumlich unterschiedliche Geschwindigkeiten erfordern eine entsprechend erweiterte Betrachtung."
      ],
      [
        "Global Shutter stoppt die Zeit nicht",
        "Bei einem Global Shutter integrieren die Bildpunkte eines Bilds im üblichen Verständnis im gleichen Zeitfenster. Das verhindert den zeilenweisen Zeitversatz der Bildaufnahme, beseitigt aber keine Bewegung während dieses Fensters. Auch ein Global-Shutter-Bild verwischt bei zu langer Belichtungszeit.<br><br>Bei einem Rolling Shutter beginnen beziehungsweise enden die Belichtungsfenster verschiedener Zeilen zeitversetzt. Jede Zeile kann für sich kurz belichtet sein, während das gesamte Bild unterschiedliche Objektzeitpunkte kombiniert. Bewegte gerade Strukturen können dadurch schräg oder verformt erscheinen. Kurze Belichtung allein beseitigt diesen geometrischen Effekt nicht zwingend. Prüfe außerdem, was „Snapshot“ im jeweiligen spektralen System genau bezeichnet: gleichzeitige spektrale Erfassung und elektronisches Verschlussverhalten sind verwandte, aber nicht identische Eigenschaften. Eine Produktzusage benötigt die konkrete Systembeschreibung."
      ],
      [
        "Bildabdeckung zwischen den Aufnahmen",
        "Zwischen zwei gleichmäßig getakteten Aufnahmen bewegt sich das Objekt um <b>Δx = v/F</b>, wobei F die Bildrate ist. Bei 500 mm/s und 25 Bildern/s sind das 20 mm. Beträgt das Bildfeld in Bewegungsrichtung 80 mm, überlappen aufeinanderfolgende geometrische Ausschnitte um 60 mm, also 75 %. Das sagt noch nichts über die Verwischung innerhalb eines Einzelbilds.<br><br>Für lückenlose Inspektion müssen Objektgeschwindigkeit, Bildfeld in Bewegungsrichtung und tatsächlich verfügbare Aufnahmefolge zusammenpassen. Übertragungsprobleme, verworfene Bilder oder Triggerpausen können trotz rechnerisch passender Spitzenbildrate Lücken erzeugen. Bei diskreten Objekten ist zudem ihre Ankunftszeit relevant. Frage deshalb nach Durchsatz und Objektabstand statt nur nach „möglichst vielen Bildern pro Sekunde“. Das praktische Timing wird mit dem vollständigen System überprüft."
      ],
      [
        "Trigger und gepulstes Licht gezielt einsetzen",
        "Ein Trigger startet oder steuert eine Aufnahme zu einem definierten Ereignis, etwa einer Objektposition. Er verkürzt nicht automatisch die Belichtung und garantiert ohne bekannte Latenz auch keine exakte räumliche Lage. Eine gepulste Beleuchtung kann das wirksame Lichtfenster verkürzen, wenn ihre zeitliche Lage, Dauer und Leistung zur Kamera passen.<br><br>Bei Rolling-Shutter-Systemen ist besonders zu prüfen, welche Zeilen während des Pulses tatsächlich lichtempfindlich sind. Andernfalls werden nur Teile des Bilds beleuchtet. Auch Umgebungslicht kann während eines längeren elektronischen Belichtungsfensters weiterhin Verwischung beitragen. Halte daher Geschwindigkeit, zulässige Verwischung, Bildabdeckung, Verschlussart und Timing gemeinsam fest. Die Auswahl und praktische Einrichtung der Lichtquelle gehört in Messpraxis; hier lernst du, welche zeitlichen Fragen dafür beantwortet werden müssen."
      ]
    ],
    "exercise": "Ein Band läuft mit 600 mm/s. Das Nutzbild hat 0,2 mm pro Bildpunkt. Erlaubt ist höchstens ein Bildpunkt Bewegung. Berechne die maximale Belichtungszeit. Würde eine Verdopplung der Bildrate diese Grenze bei gleicher Belichtung ändern?",
    "modelAnswer": "t ≤ 0,2/600 s ≈ 0,000333 s = 0,333 ms = 333 µs. Mehr Bilder pro Sekunde ändern diese Verwischung bei gleicher Belichtungszeit nicht. Sie beeinflussen die zeitliche Abdeckung zwischen Bildern.",
    "take": "Bildrate bestimmt die Folge der Aufnahmen; Belichtungszeit bestimmt die Bewegungsintegration im Einzelbild. Beide Größen müssen zur Anwendung passen.",
    "q": [
      [
        "50 Bilder/s entsprechen welchem Abstand der Bildstarts?",
        [
          "20 ms",
          "1 ms",
          "50 ms"
        ],
        0,
        "1/50 s = 0,02 s = 20 ms. Die Belichtungszeit kann kürzer sein."
      ],
      [
        "500 mm/s während 1 ms ergeben welchen Weg?",
        [
          "500 mm",
          "0,005 mm",
          "0,5 mm"
        ],
        2,
        "500 · 0,001 = 0,5 mm."
      ],
      [
        "0,5 mm Weg bei 0,2 mm/Bildpunkt entsprechen …",
        [
          "250 Bildpunkten",
          "2,5 Bildpunkten",
          "0,1 Bildpunkten"
        ],
        1,
        "B = b/s = 0,5/0,2."
      ],
      [
        "Global Shutter verhindert …",
        [
          "Den üblichen zeilenweisen Zeitversatz der Belichtung",
          "Jede Überbelichtung",
          "Jede Bewegungsunschärfe"
        ],
        0,
        "Die gesamte Belichtung dauert weiterhin eine endliche Zeit; Bewegung kann verwischen."
      ],
      [
        "Kurze Belichtung bei Rolling Shutter …",
        [
          "Entfernt sicher jeden Zeilenversatz",
          "Macht die Bildrate unendlich",
          "Kann scharfe Zeilen liefern, während das Gesamtbild geometrisch verzerrt ist"
        ],
        2,
        "Die Zeilen können unterschiedliche Zeitpunkte aufnehmen."
      ],
      [
        "Mehr Bildrate bei unveränderter Belichtungszeit …",
        [
          "Verdoppelt automatisch den optischen Durchsatz",
          "Verringert den Weg zwischen Bildern, nicht automatisch die Verwischung im Bild",
          "Halbiert immer die Bewegungsunschärfe"
        ],
        1,
        "Zwischenbildabstand und Integrationszeit sind unterschiedliche Größen."
      ]
    ],
    "experiment": "opt-motion",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Basler · Elektronische Verschlussarten",
        "https://docs.baslerweb.com/electronic-shutter-types"
      ],
      [
        "Basler · Bildqualität und Aufnahmeparameter",
        "https://docs.baslerweb.com/optimizing-image-quality"
      ]
    ]
  },
  {
    "id": "op-lenses",
    "title": "Ein passendes Objektiv auswählen",
    "topics": [
      "Mechanische und optische Kompatibilität gemeinsam prüfen",
      "Spektrale Transmission und Fokuslage berücksichtigen",
      "Verzeichnung, Vignettierung und Telezentrie einordnen"
    ],
    "scope": "Brennweite, Blende und räumliche Abtastung sind bekannt. Dieses Modul bündelt die Kriterien zur Objektivauswahl. Konkrete Cubert-Freigabelisten, Lichtfeldarchitektur und optische Filter werden in den firmenspezifischen Lernwelten behandelt.",
    "body": [
      [
        "Eine mechanische Verbindung ist erst der Anfang",
        "Ein Objektiv muss mechanisch sicher montierbar sein und optisch zur Kamera passen. Dazu gehören Gewinde beziehungsweise Bajonett, Auflagemaß, erlaubter hinterer Überstand und freier Bauraum. Das Auflagemaß beschreibt den Abstand zwischen definierter Anschlussfläche und Bildebene. Gleiche Gewinde bedeuten nicht automatisch gleiche optische Anschlussgeometrie.<br><br>C-Mount und CS-Mount sind ein klassisches Beispiel: Beide verwenden ein ähnliches beziehungsweise gleiches Anschlussgewinde, unterscheiden sich aber im vorgesehenen Auflagemaß. Ein Adapter verändert Abstände und kann nicht jede Kombination sinnvoll korrigieren. Prüfe deshalb die dokumentierte Kombination und mögliche Kollisionsräume. Bei spektralen Kameras können vor dem Sensor interne optische Baugruppen liegen. Ein weit hineinragendes Objektiv darf dort nicht allein deshalb eingeschraubt werden, weil das Gewinde passt."
      ],
      [
        "Bildkreis und nutzbares Feld",
        "Der Bildkreis beschreibt den bildseitigen Bereich, für den das Objektiv eine Abbildung bereitstellt; die qualifizierte Bildqualität kann innerhalb dieses Bereichs zusätzlich variieren. Die aktive Bildfläche muss ausreichend abgedeckt sein. Ist der nutzbare Bildkreis zu klein, können Bildränder stark abgeschattet werden oder ganz fehlen. Auch bei ausreichender Abdeckung kann die Beleuchtung zum Rand hin abnehmen.<br><br>Verwende daher reale Abmessungen und die Herstellerangaben zum vorgesehenen Sensorformat. Für ein rechteckiges Bild kann die Diagonale das entscheidende Abdeckungsmaß sein. Zusätzlich muss die Detailleistung an den relevanten Feldpositionen stimmen. Ein Bildkreis, der die Ecken gerade erreicht, garantiert weder gleichmäßigen Durchsatz noch ausreichenden Kontrast. Bei komplexen Kameras ist die optisch relevante Eingangs- beziehungsweise Zwischenbildebene nicht ohne Weiteres mit dem nackten Sensorformat gleichzusetzen. Maßgeblich ist die dokumentierte Systemkompatibilität."
      ],
      [
        "Durchlässig heißt noch nicht gut abgebildet",
        "Ein Objektiv kann in einem Wellenlängenbereich Licht durchlassen und dort trotzdem unzureichend abbilden. Gläser, Beschichtungen, Klebstoffe und weitere Bauteile beeinflussen die spektrale Transmission. Die Brechung hängt ebenfalls von der Wellenlänge ab; dadurch können verschiedene Wellenlängen unterschiedliche Fokuslagen oder Abbildungsmaßstäbe besitzen. Das sind Aspekte chromatischer Abbildungsfehler.<br><br>Für eine spektrale Anwendung sind daher sowohl ausreichender Durchsatz als auch geeignete Abbildungsleistung über den relevanten Bereich erforderlich. Eine VIS-Kennzeichnung ist keine automatische SWIR-Freigabe. Auch ein für NIR beworbenes Objektiv muss anhand numerischer Bereichsangaben und Leistungsdaten geprüft werden. Ein scharfes sichtbares Vorschaubild belegt nicht, dass alle relevanten Spektralbänder scharf sind. Die Wellenlängenabhängigkeit der Beugung aus Modul 2 kommt zusätzlich zu den realen Objektivfehlern hinzu."
      ],
      [
        "Perspektive, Verzeichnung und Telezentrie",
        "Bei gewöhnlicher perspektivischer Abbildung erscheinen weiter entfernte gleich große Objekte kleiner. Verzeichnung ist ein anderer Effekt: Der Abbildungsmaßstab verändert sich über das Bildfeld, wodurch beispielsweise gerade Linien gekrümmt erscheinen können. Für Messaufgaben ist diese Unterscheidung wichtig, weil ein Fokuswechsel oder eine Kalibrierung nicht jede geometrische Ursache gleich behandelt.<br><br>Objektseitig telezentrische Objektive halten den Maßstab innerhalb ihres spezifizierten Arbeitsbereichs weitgehend konstant, wenn sich die Objekthöhe ändert. Das kann perspektivische Messfehler reduzieren. Telezentrie bedeutet aber weder unendliche Schärfentiefe noch vollständige Fehlerfreiheit. Bildfeld, Bauraum, Durchsatz, Resttelezentrie und Kosten müssen zur Aufgabe passen. Für eine reine Anwesenheitsprüfung ist eine solche Optik möglicherweise unnötig; für bestimmte präzise Maßprüfungen kann sie entscheidend sein. Die Anforderung führt zur Bauart."
      ],
      [
        "Eine begründete Vorauswahl dokumentieren",
        "Eine sinnvolle Kandidatenliste enthält Bildfeld und Arbeitsabstand, aktiven Nutzbildmaßstab, erforderlichen Detailkontrast, F-Zahl beziehungsweise Durchsatz, relevanten Tiefenbereich, Wellenlängenbereich sowie mechanische und kameraseitige Freigabe. Ergänze Umgebungsbedingungen wie Vibration oder Temperatur, wenn sie im Einsatz eine Rolle spielen. Verstellringe müssen gegebenenfalls reproduzierbar fixiert werden können.<br><br>Fehlende Daten werden als offene Prüfpunkte notiert. Wähle nicht einfach die größte Frontlinse oder die niedrigste nominelle F-Zahl. Bei einer Cubert-Kamera gehören die konkrete Produktdokumentation und freigegebene Optikkombinationen zur Auswahl; diese Lernwelt gibt bewusst keine erfundene Produktfreigabe. Der nächste sinnvolle Schritt ist ein Test mit repräsentativen Proben und den vorgesehenen Einstellungen, einschließlich Bildrändern und relevanten Spektralbändern. Erst dieser Test verbindet Datenblatt und Anwendung."
      ]
    ],
    "exercise": "Ein Objektiv hat die passende Brennweite und lässt sich einschrauben. Welche vier weiteren Prüfungen würdest du vor einer Zusage mindestens verlangen?",
    "modelAnswer": "Beispielsweise: korrekter Anschluss samt Auflagemaß und Kollisionsfreiheit; Bildkreis und Detailleistung über das Nutzfeld; Transmission und Fokusverhalten im erforderlichen Spektralbereich; zulässiger Arbeitsabstand, Blendenbereich und dokumentierte Kamera-Kompatibilität. Bei der konkreten Aufgabe kommen Tiefentoleranz und Umgebungsbedingungen hinzu.",
    "take": "Ein geeignetes Objektiv passt mechanisch, geometrisch, spektral und zur Detailanforderung. Passendes Gewinde und passende Brennweite reichen allein nicht.",
    "q": [
      [
        "Gleiches Anschlussgewinde bedeutet …",
        [
          "Immer kollisionsfreie Montage",
          "Immer identisches Auflagemaß",
          "Noch keine vollständige optische Kompatibilität"
        ],
        2,
        "Abstände, hinterer Überstand und interne Baugruppen müssen zusätzlich geprüft werden."
      ],
      [
        "Ein zu kleiner nutzbarer Bildkreis kann …",
        [
          "Mehr unabhängige Pixel erzeugen",
          "Ränder abschatten oder unbrauchbar machen",
          "Die Belichtungszeit automatisch verlängern"
        ],
        1,
        "Die aktive Bildfläche muss vom geeigneten Bildkreis abgedeckt werden."
      ],
      [
        "Gute Transmission bei 1.500 nm garantiert …",
        [
          "Noch keine gute Abbildung bei 1.500 nm",
          "Immer identischen Fokus zu 550 nm",
          "Immer perfekte Randauflösung"
        ],
        0,
        "Durchsatz und chromatische Abbildungsleistung sind verschiedene Eigenschaften."
      ],
      [
        "Objektseitige Telezentrie hilft besonders bei …",
        [
          "Der Beseitigung jeder Beugung",
          "Der Erzeugung zusätzlicher Spektralkanäle",
          "Der Reduzierung höhenabhängiger Maßstabsänderungen"
        ],
        2,
        "Der Maßstab bleibt innerhalb des spezifizierten Bereichs weitgehend konstant."
      ],
      [
        "Telezentrie bedeutet …",
        [
          "Keine verbleibenden Fehler",
          "Nicht automatisch Schärfe über beliebige Objekthöhen",
          "Unendliche Schärfentiefe"
        ],
        1,
        "Die Defokustoleranz muss weiterhin zur Detailanforderung passen."
      ],
      [
        "Vor einer konkreten Cubert-Optikzusage brauchst du …",
        [
          "Die dokumentierte Systemkompatibilität und Prüfung der relevanten Anwendung",
          "Nur einen universellen NIR-Aufkleber",
          "Nur das kleinste verfügbare f/#"
        ],
        0,
        "Diese Grundlagen ersetzen keine produktbezogene Optikfreigabe."
      ]
    ],
    "experiment": "opt-lens",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "The Imaging Source · Objektivauswahl und Anschlüsse",
        "https://www.theimagingsource.com/en-us/resource/glossary/how-to-choose-a-lens-for-machine-vision/"
      ],
      [
        "Edmund Optics · Wellenlänge und Abbildungsleistung",
        "https://www.edmundoptics.com/knowledge-center/application-notes/imaging/wavelength-effects-on-performance/"
      ],
      [
        "Edmund Optics · Telezentrische Abbildung",
        "https://www.edmundoptics.com/knowledge-center/application-notes/imaging/advantages-of-telecentricity"
      ]
    ]
  },
  {
    "id": "op-case",
    "title": "Praxisfall: Eine bewegte Inspektion auslegen",
    "topics": [
      "Bildfeld, Abtastung und Bewegung gemeinsam berechnen",
      "Optikkandidaten mit ihren offenen Prüfpunkten begründen",
      "Eine belastbare technische Empfehlung formulieren"
    ],
    "scope": "Dieser erfundene Fall verbindet die sechs Optikmodule. Er ist keine Spezifikation einer Cubert-Kamera und ersetzt weder eine reale Demo noch die spätere Projektqualifizierung im Vertrieb.",
    "body": [
      [
        "Die Aufgabe zuerst in messbare Anforderungen übersetzen",
        "Ein Kunde möchte 0,8 mm breite Auffälligkeiten auf einem laufenden Band untersuchen. Für die Übung ist das geplante Bildfeld 240 mm breit; eine angemessene Positionierungsreserve ist darin bereits enthalten. Das hypothetische spektrale Nutzbild liefert 1.200 räumliche Bildpunkte quer zum Band. Die optisch relevante Bildbreite beträgt 12 mm. Als Gegenstandsweite im dünnen Linsenmodell verwenden wir 500 mm. Das Band läuft mit 600 mm/s.<br><br>Das sind Modellannahmen, keine Produktdaten. Im wirklichen Gespräch müsstest du zusätzlich unter anderem Kontrast, Objekthöhen, benötigten Spektralbereich, Bildfeldhöhe und akzeptierte Erkennungsleistung klären. Für die erste Rechnung nehmen wir ein ebenes Objekt und gleichförmige Bewegung an. Die Verwischung darf höchstens einen Bildpunkt betragen. Dieses Kriterium ist ein vereinbartes Auslegungsziel und muss später auf seine Eignung geprüft werden."
      ],
      [
        "Bildfeld und räumliche Abtastung rechnen",
        "Der mittlere objektseitige Abtastschritt ist s = 240/1.200 = <b>0,2 mm pro Bildpunkt</b>. Die 0,8 mm breite Auffälligkeit erstreckt sich damit über vier Bildpunkte. Das ist eine plausible geometrische Ausgangsbasis für einen Versuch, aber kein garantierter Erkennungsnachweis. Bei geringerem Kontrast oder unscharfer Abbildung können vier Bildpunkte unzureichend sein.<br><br>Der Betrag des Maßstabs ist m = 12/240 = 0,05. Die dünne Linsengleichung liefert f = 12 · 500/(240 + 12) ≈ <b>23,8 mm</b>. Ein Objektiv im Bereich um 24–25 mm ist damit ein Kandidat, dessen tatsächliches Bildfeld geprüft werden muss. Ein nominelles 25-mm-Objektiv ergibt im exakt verwendeten dünnen Modell bei g = 500 mm nur 228 mm Breite. Für 240 mm müsste g dort 525 mm betragen. Die Reserve darf also nicht unbemerkt verloren gehen."
      ],
      [
        "Die Bewegung setzt eine enge Zeitgrenze",
        "Ein Bildpunkt entspricht 0,2 mm. Bei 600 mm/s darf das Licht höchstens t = 0,2/600 s wirksam integriert werden: <b>etwa 0,333 ms beziehungsweise 333 µs</b>. Eine Belichtungszeit von 2 ms würde dagegen 1,2 mm Weg und damit sechs Bildpunkte Verwischung ergeben. Mehr Bildrate allein löst dieses Problem nicht.<br><br>Für die Abdeckung zwischen Bildern betrachten wir zusätzlich ein hypothetisches Bildfeld von 100 mm in Bewegungsrichtung. Bei 30 Bildern/s wandert das Band zwischen den Bildstarts um 20 mm. Die geometrische Überlappung beträgt dann 80 %. Diese Rechnung setzt eine kontinuierliche gültige Aufnahmefolge voraus. Sie berücksichtigt noch keine Ausfälle, Triggerlücken oder wechselnde Geschwindigkeit. Das Einzelbild muss sowohl kurz genug belichtet als auch rechtzeitig aufgenommen werden."
      ],
      [
        "Licht und Optik zusammenbringen",
        "Angenommen, bei f/8 ist das Signal innerhalb von 333 µs zu schwach. Ein Wechsel auf f/4 kann im einfachen Modell ungefähr viermal so viel Licht pro Zeit auf die Bildebene bringen. Das kann helfen, muss aber gegen die veränderte Schärfentiefe und Abbildungsleistung geprüft werden. Mehr Gain sammelt keine zusätzlichen Photonen und ersetzt diese Betrachtung nicht.<br><br>Alternativen sind eine geeignete stärkere Beleuchtung, ein korrekt synchronisierter Lichtpuls, verbesserte Objektführung oder eine Anpassung von Geschwindigkeit und Bildmaßstab. Jede Option hat Folgen für andere Anforderungen. Prüfe das Signal in den relevanten Spektralbändern und die Detaildarstellung in der Mitte sowie am Rand. Bestätige zudem Anschluss, Bildkreis, spektrale Eignung und Systemfreigabe des Objektivs. Die nominelle Brennweite allein beantwortet keine dieser offenen Fragen."
      ],
      [
        "Eine Empfehlung mit überprüfbaren Bedingungen",
        "Eine fachlich saubere Empfehlung könnte lauten: „Unter den angenommenen Nutzbilddaten liegen wir bei 0,2 mm pro Bildpunkt und etwa vier Bildpunkten über dem kleinsten Merkmal. Die Geometrie weist auf eine Brennweite um 24 mm hin; für höchstens einen Bildpunkt Bewegung benötigen wir ungefähr 333 µs oder kürzer. Wir prüfen nun reale Bildfeldabdeckung, Detailkontrast und Signal über den benötigten Spektralbereich bei den erwarteten Objekthöhen.“<br><br>Dokumentiere für den Versuch die tatsächliche Optik, Blende, Arbeitsabstandsdefinition, Geschwindigkeit, Belichtungszeit, Gain und relevante Bildregionen. Das Ergebnis muss anhand repräsentativer Proben bewertet werden. Wenn ein Ziel verfehlt wird, benenne den Engpass: Abdeckung, Abtastung, Abbildung, Photonenzahl oder Timing. Ein bestandener Lernweltabschluss zeigt, dass du solche Zusammenhänge erklären kannst. Die praktische Kamerademo-Freigabe bleibt eine eigene Prüfung."
      ]
    ],
    "exercise": "Formuliere für den Kunden eine kurze technische Empfehlung mit drei Zahlen und zwei offenen Prüfpunkten. Vermeide eine Erkennungsgarantie allein aus der Pixelrechnung.",
    "modelAnswer": "Wir planen mit 0,2 mm pro Bildpunkt, einer Brennweite von ungefähr 23,8 mm im dünnen Linsenmodell und höchstens etwa 333 µs Belichtungszeit. Zu prüfen sind unter anderem die reale Bildfeldabdeckung samt Arbeitsabstand sowie Detailkontrast und Signal in den relevanten Spektralbändern. Vier Bildpunkte über dem Merkmal sind ein Auslegungswert, keine Erkennungsgarantie.",
    "take": "Eine gute Vorauslegung verbindet Geometrie, Detailkontrast, Photonen und Zeit. Ein realer Test bestätigt, ob diese Bedingungen gemeinsam erreichbar sind.",
    "q": [
      [
        "0,8-mm-Merkmal bei 0,2 mm/Bildpunkt: Was ist zunächst gesichert?",
        [
          "Jedes Merkmal wird sicher erkannt",
          "Es erstreckt sich geometrisch über vier Bildpunkte",
          "Es besitzt vier Spektralbänder"
        ],
        1,
        "Die Abtastung ist berechnet; die Erkennung muss zusätzlich validiert werden."
      ],
      [
        "25 mm Brennweite, H = 12 mm und g = 500 mm im dünnen Modell: Bildfeldbreite?",
        [
          "228 mm",
          "240 mm exakt",
          "500 mm"
        ],
        0,
        "W = 12 · (500 − 25)/25 = 228 mm."
      ],
      [
        "600 mm/s und höchstens 0,2 mm Weg: Belichtungszeit maximal?",
        [
          "Etwa 33 ms",
          "Etwa 3,33 s",
          "Etwa 333 µs"
        ],
        2,
        "t = 0,2/600 s ≈ 0,000333 s."
      ],
      [
        "2 ms bei 600 mm/s und 0,2 mm/Bildpunkt verwischen um …",
        [
          "Einen Bildpunkt",
          "Sechs Bildpunkte",
          "0,06 Bildpunkte"
        ],
        1,
        "600 · 0,002 = 1,2 mm; 1,2/0,2 = 6."
      ],
      [
        "f/8 → f/4 liefert näherungsweise …",
        [
          "Vierfachen Durchsatz, mit weiteren optischen Folgen",
          "Gleich viele Photonen bei jeder Belichtung",
          "Ein Viertel des Durchsatzes"
        ],
        0,
        "1/N² ergibt Faktor 4; Schärfentiefe und Detailkontrast müssen weiterhin passen."
      ],
      [
        "Was gehört in die nächste Prüfung?",
        [
          "Nur eine größere Vorschau",
          "Nur ein anderer Dateiname",
          "Reale Abdeckung, Detailkontrast und Signal bei den Einsatzbedingungen"
        ],
        2,
        "Eine Modellrechnung liefert Kandidaten und Grenzen; die Anwendung muss am Gesamtsystem bestätigt werden."
      ]
    ],
    "experiment": "opt-case",
    "edition": "full",
    "time": 12,
    "sources": [
      [
        "Edmund Optics · Brennweite und Bildfeld",
        "https://www.edmundoptics.de/knowledge-center/application-notes/imaging/understanding-focal-length-and-field-of-view/"
      ],
      [
        "Basler · Elektronische Verschlussarten",
        "https://docs.baslerweb.com/electronic-shutter-types"
      ],
      [
        "Edmund Optics · Blende und Lichtdurchsatz",
        "https://www.edmundoptics.com/knowledge-center/application-notes/imaging/lens-iris-aperture-setting/"
      ]
    ]
  }
];
for(const l of OPTICS_LESSONS){const i=LESSON_CONTENT.findIndex(x=>x.id===l.id);if(i>=0)LESSON_CONTENT[i]=l;else LESSON_CONTENT.push(l);const m=CURRICULUM.worlds.find(w=>w.id==="optics-world").modules.find(m=>m.id===l.id);Object.assign(m,{title:l.title,topics:l.topics,status:"pilot",contentId:l.id,minutes:12,version:l.id==="optics"?2:1,passRatio:.8});}
