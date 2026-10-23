# Cubert Academy 2.1

Statische Web-App mit browserlokalem Lernfortschritt. 12 Lernwelten, 98 vorgesehene Module, 10 Praxisfreigaben, 17 Cubi-Looks. Acht bestehende Missionen enthalten Pilotmaterial; 90 neue Module sind bewusst nur als Themenplan angelegt.

## Start und GitHub Pages

Den vollständigen Inhalt von `dist/` in das Hauptverzeichnis des Publishing-Branches kopieren. GitHub Pages: Deploy from a branch, main, / (root). Alle sieben Web-Dateien gemeinsam aktualisieren; insbesondere die neuen curriculum.js, content.js, engine.js und storage.js hinzufügen. Kein Build erforderlich. Alternativ den Ordner mit einem statischen Webserver ausliefern.

Die Download-ZIP enthält die Web-Dateien bereits im Hauptverzeichnis. Sie kann direkt entpackt und hochgeladen werden. README und tools sind nicht für den Betrieb erforderlich.

## Dateien und Inhaltsausbau

- curriculum.js: Lernwelten, stabile Modul-IDs, Themen, Voraussetzungen, Status, Freigaben und Belohnungsregeln.
- content.js: die eigentlichen Lektionen, Übungen und Quizfragen. Der vorhandene Pilotinhalt bleibt erhalten.
- engine.js: reine Fortschritts- und Freischaltlogik einschließlich Datenmigration.
- storage.js: separater Browser-Speicheradapter.
- app.js: Ansichten, Navigation, Quiz, Cubi, Praxisvorbereitung und Import/Export.
- style.css / index.html: Gestaltung und Grundstruktur.

### Ein Modul füllen

1. Die bestehende ID in curriculum.js beibehalten.
2. Einen Eintrag in LESSON_CONTENT in content.js ergänzen: id, body (Paare aus Überschrift und Erklärung), take (Merksatz), q (Frage, Antwortoptionen, Index der richtigen Antwort, Erklärung).
3. Im Curriculum contentId auf diese ID setzen und status von planned auf pilot ändern.
4. Bisher nutzt die Oberfläche drei Quizfragen pro Modul. Je richtige Antwort ein Stern; bestanden ab zwei Sternen.
5. Nach fachlicher Prüfung status auf published setzen. Quellen, fachlichen Reviewer und Prüfdatum dokumentieren, beispielsweise als zusätzliche Metadaten am Modul.
6. Bei substanziellen Änderungen version des Moduls erhöhen. Frühere Ergebnisse bleiben gespeichert, gelten für die neue Version aber nicht als bestanden. Rein sprachliche Korrekturen benötigen keine neue Version.
7. `node tools/test-engine.cjs` ausführen. Der Test erwartet derzeit den Umfang der Strukturversion 2.0; Mengentests bei bewusstem Curriculum-Ausbau anpassen.

Lernwelten gelten erst als abgeschlossen, wenn alle vorgesehenen Module Inhalte haben und bestanden sind. Welten-Vorbereitung ist eine Empfehlung. Harte Modul-Voraussetzungen stehen in prerequisites und sperren das Quiz bis zum Bestehen. Die acht Pilotmissionen bleiben unabhängig zugänglich.

## Lokale Daten und Migration

Neuer Schlüssel: cubert-academy-v2. Beim ersten Start werden v1-Daten automatisch übernommen, sofern noch kein v2-Spielstand vorliegt. Der alte Schlüssel bleibt als Sicherung unangetastet. Import akzeptiert v1- und v2-JSON. Ein Reset setzt den aktuellen v2-Spielstand zurück. Alte Exporte können ihn wiederherstellen.

Bei gleicher Domain bleiben bestehende Daten erhalten. Für eine andere Domain oder einen anderen Browser vorher exportieren und danach importieren. Browserdaten sind nicht verifiziert und können vom Nutzer verändert werden.

Die frühere Spectral Crown wird bei einem importierten vollständigen Pilot-Abschluss als historische Auszeichnung übernommen. Für neue Nutzer setzt die Krone jetzt den Abschluss aller 12 Lernwelten voraus. Bereits vorhandene frühe Stern-Outfits behalten ihre Regeln.

## Praxisfreigaben

Eigenständiges Erst- und Bedarfsgespräch, Kamerademo, Projektqualifizierung, Wissenschaftsberatung, UAV-Projektberatung, KI-Projektberatung Integrationsgespräch, Kundenpräsentation, Messestand & Messegespräche sowie Konferenzgespräche sind als Anforderungsprofile angelegt. Erforderliche Module, vorgeschaltete Freigaben, praktische Checklisten und Prüferrollen sind definiert.

Der Prototyp speichert ausschließlich persönliche Vorbereitung und Notizen. Er erteilt KEINE echte Trainerfreigabe. Die Bestätigung ist sichtbar vorgesehen, aber deaktiviert. Für produktive Bestätigungen braucht es Nutzeridentität, Trainerrollen, serverseitige Prüfung der Voraussetzungen, einen revisionsfähigen Nachweis und widerrufbare Freigaben. Eine Nutzerverwaltung wurde hier ausdrücklich noch nicht eingebaut.

## Spätere Datenbank

ProgressStore ist der austauschbare Speicheradapter. Stabile IDs und Versionsstände erlauben eine Migration. Bei Backend-Einführung zusätzlich asynchrones Laden, Konfliktauflösung und Zugriffskontrolle umsetzen. Prüfungen dürfen nicht auf clientseitige Sterne vertrauen.

## Prüfung

Browserprüfung: Lernweltübersicht, KI-Platzhalter und Voraussetzungen, Quizdurchlauf, Sternvergabe, Praxisnotizen und Persistenz nach Neuladen. Automatisierte Tests: ID-Referenzen, zyklusfreie Abhängigkeiten, geplante Inhalte nicht abschließbar, Bestwertwertung, v1-Migration, Belohnungsregeln, Importvalidierung und Schutz beschädigter Spielstände.

Google Fonts werden extern geladen, Systemschriften dienen als Fallback. Für vollständig eigenständiges Hosting können die Fonts lokal eingebunden werden.

## Konzeptänderung 2.1

Die Lernwelt Vertrieb & Kommunikation enthält 12 Module. Gesprächsführung, Bedarf, Stakeholder, Qualifizierung, Einwände und Abschluss sind Voraussetzungen für eigenständige Erst- und Bedarfsgespräche. Die Praxisprüfung besteht aus Rollenspiel und Gesprächsnotiz. Präsentation, Messe und Konferenz erhalten eigene Praxisprofile und sind keine Voraussetzung für das Erstgespräch. Alle neuen Inhalte bleiben in Planung. Bestehende Modul-IDs und das Speicherformat v2 bleiben erhalten.


## Version 2.2 — Licht & Physik

Nur diese Lernwelt wurde inhaltlich ausgebaut: sieben Module, jeweils fünf Lernabschnitte und eine Übungsseite, insgesamt 42 Quizfragen mit Feedback. Pro Modul sind etwa 10–15 Minuten einschließlich Reflexion vorgesehen, zuzüglich Quiz; die Zeitangabe ist ein Richtwert und keine Zeitsperre.

`dist/physics.js` enthält die redaktionellen Inhalte und aktualisiert die sieben stabilen Curriculum-IDs. Die Datei wird nach `content.js` und vor `engine.js` geladen. `dist/physics-ui.js` enthält den erweiterten Leser und die vereinfachten interaktiven Modelle. Andere Lernwelten behalten ihre Inhalte. Alle neuen Inhalte sind als fachlich noch zu prüfender Pilot gekennzeichnet.

Bestehen: mindestens 5 von 6 Antworten richtig (2 Sterne); 6 richtige Antworten ergeben 3 Sterne, 3–4 ergeben 1 Stern. Bereits erreichte Sterne bleiben bei Wiederholungen und beim überarbeiteten Einstiegsmodul erhalten (`earnedBest`). Für den Abschluss der neuen Lernwelt muss `light` in Inhaltsversion 2 erneut bestanden werden. Alle sieben bestandenen Module schalten die vorhandene Prisma-Ausrüstung frei. Quizfreischaltungen folgen den bestehenden Modulvoraussetzungen; Lesen ist auch vorher möglich. Praxisfreigaben bleiben separate Trainerprüfungen.

GitHub Pages: Alle Dateien aus `dist/` zusammen ins Veröffentlichungsverzeichnis übernehmen. Im Download-ZIP liegen diese Dateien bereits direkt im Hauptverzeichnis. Kein Build, kein Backend; Fortschritt bleibt im Browser. Vor Domain- oder Browserwechsel Spielstand unter Profil exportieren.

Validierung: `node tools/test-engine.cjs` aus dem Repository. Dasselbe Kommando funktioniert auch im entpackten Download-ZIP. Geprüft werden insbesondere Bestandsmigration, 5/6-Bestehensgrenze, Voraussetzungen, Sternschutz und Lernweltbelohnung.


## Version 2.3 — Kamera & Optik

Die zweite Lernwelt enthält sieben vollständig ausgearbeitete Module: Bildfeld/Brennweite, Blende/Schärfentiefe, räumliche Auflösung, Belichtung/Gain, Bewegung/Verschluss, Objektivauswahl und einen gemeinsamen Auslegungsfall. Jedes Modul bietet fünf Lernabschnitte, eine interaktive Übung, eine Transferfrage mit Musterantwort und sechs Quizfragen mit Feedback. Richtwert: 10–15 Minuten Lernen und Üben plus Quiz.

`optics.js` erweitert die Inhalte; `optics-ui.js` enthält die transparenten Rechenmodelle. Der bisherige erweiterte Leser in `physics-ui.js` unterstützt jetzt beide Grundlagenwelten. `optics` verwendet Inhaltsversion 2: alte Sterne bleiben erhalten, für den neuen Lernweltabschluss ist das neue Quiz nötig. Bestehensgrenze wie bei Licht & Physik: 5/6; 6/6 ergeben drei Sterne. Die vorgesehene Optik-Ausrüstung wird bei sieben bestandenen Modulen freigeschaltet. Vorher können alle Lektionen gelesen werden, Quizvoraussetzungen bleiben wirksam.

Die Simulationen nennen jeweils ihre Modellannahmen. Gegenstandsweite ist nicht pauschal Arbeitsabstand; geometrische Abtastung ist keine Erkennungsgarantie. Objektivkandidaten und der Abschlussfall sind fiktiv und keine Cubert-Produktfreigabe. Redaktionelle Fachprüfung steht offen. Die Inhalte von Licht & Physik bleiben unverändert.

Die Academy enthält jetzt 20 verfügbare Module: 14 ausführliche Grundlagenmodule mit zusammen 84 Fragen sowie sechs ältere Pilotmodule. Weitere Lernwelten sind weiterhin vorbereitet. Automatische Tests prüfen Bestandsmigration, Bestehensgrenzen, Freischaltungen, Belohnungen und die Rechenmodelle. Die Tests laufen im Repository und im entpackten Quellcode-ZIP mit `node tools/test-engine.cjs`.


## Version 2.4 — Messpraxis & Beleuchtung

Acht ausführliche Module führen durch Weißreferenz, Dunkelreferenz/Kalibrierung, Rauschen, Lichtquellen, Laboraufbau, Außenmessungen, Qualitätsnachweis und einen Diagnosefall. Je Modul: fünf Lernabschnitte, interaktive Übung, Transferfrage mit Musterantwort und sechs Quizfragen. Richtwert: 10–15 Minuten plus Quiz. Die Grundlagen werden angewendet; Licht & Physik und Kamera & Optik bleiben unverändert.

`measurement.js` enthält die Inhalte; `measurement-ui.js` enthält acht Übungen mit ausdrücklich vereinfachten oder fiktiven Daten. Rechenmodelle behandeln Referenzgültigkeit, unabhängiges Rauschen gegenüber gemeinsamer Drift, wechselnde Beleuchtung sowie Mittelwert und Stichprobenstreuung. Sie ersetzen keine Gerätekalibrierung oder reale Qualitätsfreigabe. Redaktionelle Fachprüfung steht offen.

Die drei früheren Kurzmodule `reference`, `noise` und `illumination` verwenden jetzt Inhaltsversion 2. Bereits verdiente Sterne bleiben erhalten; der neue Abschluss benötigt die aktuellen Quiz. Die acht Quiz werden nacheinander freigeschaltet (5/6 bestanden, 6/6 drei Sterne). Alle Inhalte bleiben lesbar. Der vollständige Lernweltabschluss schaltet die bestehende Weltbelohnung frei. Praktische Kundenfreigaben bleiben getrennt.

Jetzt verfügbar: 25 Module, davon 22 ausführliche Module in drei fertigen Lernwelten mit 132 Fragen, plus drei ältere Pilotmodule. Fortschritt bleibt im Browser; JSON-Export/Import bleiben verfügbar. `node tools/test-engine.cjs` prüft die bestehenden Funktionen sowie die neue Migration, Freischaltungen und numerischen Modelle. Das Kommando funktioniert ebenfalls im entpackten Download-ZIP.


## Version 2.5 — Kerntechnologie und visuelles Lernen

Die vierte Lernwelt enthält acht ausführliche Module mit insgesamt 48 Fragen: Aufnahmeprinzipien, Lichtfeld/Rekonstruktion, Sensoren, Filter, Parallaxe, Information/Auflösung, Schnittstellen und ein Beratungsfall. Je Modul fünf Textabschnitte, eine bedienbare Grafik beziehungsweise visuelle Fallauswahl, Transferfrage und sechs Quizfragen. Zeitbudget etwa 10–15 Minuten einschließlich Erkundung, zuzüglich Quiz. Quellen: Cubert Knowledge Base und Cubert-Technologieartikel sowie EMVA, Hamamatsu und Edmund Optics; geprüft am 23.10.2026. Fachliche Freigabe bleibt offen.

Die Grafik steht bei jedem neuen Modul direkt in einem passenden Lernabschnitt und erneut auf der Übungsseite. Auch die vorhandenen Experimente der ersten drei Lernwelten sind jetzt im Textfluss erreichbar. Der Wellenlängenselektor zeigt zusätzlich eine räumliche Welle, einen zeitlichen Verlauf auf festen Achsen und einen separaten Balken für die Energie pro Photon. Gleiche Feldamplitude bedeutet dabei nicht gleiche Photonenenergie; Infrarot wird neutral dargestellt.

`core.js` enthält die Lektionen, `core-ui.js` die schematischen SVG-Grafiken und Rechenmodelle. Die Modelle sind ausdrücklich keine Produktdaten: Zweiansichten-Parallaxe, vereinfachte Filterwinkelverschiebung, Gaußfaltung zweier Peaks, mittlere Photonenumwandlung und ein hypothetischer fertiger Würfelstrom. Die reale ULTRIS-Rekonstruktion und die tatsächlich übertragene Rohdatenmenge werden nicht simuliert. Konkrete GigE-Vision/USB3-Vision-Konformität ist pro Produkt zu prüfen.

Bestehende Inhaltsversionen und Spielstände bleiben unverändert. Die neuen Quiz verwenden 5/6 als Bestehensgrenze und 6/6 für drei Sterne; der gesamte Kerntechnologiekurs schaltet seine vorgesehene Ausrüstung frei. Keine automatische Praxisfreigabe. Insgesamt: 33 verfügbare Module, davon 30 ausführliche in vier Lernwelten mit 180 Fragen, zusätzlich drei ältere Pilotmodule (9 Fragen). Browserlokale Speicherung und JSON-Import/Export bleiben erhalten.

Prüfen: `node tools/test-engine.cjs` im Repository oder im entpackten ZIP. Die Prüfung deckt die bisherige Migration, Erhalt der drei abgeschlossenen Welten beim Update, Freischaltungen und numerische Grenzfälle der neuen Modelle ab.

## Version 2.6 — Cubert · Kameraprodukte

Acht vollständige Module mit fünf Leseabschnitten, visueller Übung, Transferaufgabe und je sechs Quizfragen. Themen: Portfolio, VIS/NIR, SWIR, Datenblattinterpretation, Konfiguration, Auswahl, Demo und Lebenszyklus. Neun Produkt-/Variantenkarten tragen Quellen und Stand 23.10.2026. Wellenlängenkarte, native/fusionierte Pixel, Belichtungsbudget, Zuordnungskarten, Konfigurationskette, Kriterienmatrix, Demoplan und Supportfälle sind interaktiv.

Die Auswahl trennt Kandidaten, Ausschlüsse und Klärungsfälle. Die SWIR1-Quellenabweichung bei Bereich und Bildrate bleibt sichtbar; SWIR-1G ist eine eigene Variante. X20-Plus-Fusion zählt nicht als native Spektralpixel. Quellen sind Momentaufnahmen; konkrete Konfigurationen und fachliche Freigabe sind zu bestätigen. Quizsterne erzeugen keine Praxisfreigabe.

Jetzt fünf ausgearbeitete Lernwelten mit 38 vollständigen Modulen / 228 Fragen; einschließlich dreier älterer Piloten 41 spielbare Module und 237 Fragen. Bestehende Spielstände und Modulrevisionen bleiben erhalten. Prüfung: `node tools/test-engine.cjs` (aus Projekt- oder ZIP-Wurzel).

## Version 2.7 — Vertrieb & Kommunikation

Alle zwölf vorgesehenen Module sind ausgearbeitet: Gesprächsführung, Bedarf, Rollen und Entscheider (einschließlich Endkunde/OEM/Integrator), Qualifizierung, Abschluss/Übergabe, Präsentation, Demo/POC, Messe, Konferenz, Einwände, Nutzen/Wirtschaftlichkeit und Angebot/Verhandlung. Je fünf Leseabschnitte mit etwa 600 Wörtern, eine interaktive Übung, eine Transferaufgabe mit Musterantwort und sechs Quizfragen ergeben 72 neue Fragen.

Grafische Übungen: Zeitplan, Fragenleiter, Entscheiderkarte, Qualifizierungsübersicht, strukturierte Gesprächsnotiz, Folienordnung, POC-Plan, drei Gesprächsszenarien, Wirtschaftlichkeitsrechner und Angebotsumfang. Übungseingaben gelten nur in der aktuellen Ansicht; keine Nachrichten, CRM-Übertragungen oder dauerhafte Kundendatenspeicherung. Der Rechner nutzt ausschließlich fiktive Annahmen und eine einfache, nicht abgezinste Amortisation.

Die vorhandenen verzweigten Voraussetzungen bleiben bestehen. Die sechs Vertriebsbausteine für „Eigenständiges Erst- und Bedarfsgespräch“ sind jetzt verfügbar; zusammen mit den technischen Voraussetzungen wird dessen Theorie erreichbar. Präsentations- und Eventmodule sind dafür keine zusätzliche Pflicht. Praxisfreigaben erfordern weiterhin eine Trainerbestätigung und werden niemals durch Quizsterne oder persönliche Häkchen erteilt. Inhalte bleiben „Fachprüfung offen“; Trainingsfälle ersetzen keine internen Befugnisse, Preislisten oder Vertragsprozesse.

Gesamtstand: sechs ausgearbeitete Lernwelten, 50 vollständige Module mit 300 Fragen; einschließlich dreier älterer Piloten 53 spielbare Module, 309 Fragen und maximal 159 Sterne. Stabile IDs, bestehende Revisionen und Spielstände bleiben erhalten. Prüfungen: `node tools/test-engine.cjs`, JavaScript-Syntaxprüfung sowie Browserprüfung der neuen Übungen und Grenzen.

## Version 2.8 — Vertrieb · Wissenschaft und Vertrieb · Industrial Imaging

Nacheinander ausgebaut: Wissenschaft mit sechs Modulen / 36 Fragen, danach Industrial Imaging mit acht Modulen / 48 Fragen. Alle 14 Module enthalten fünf Lernabschnitte von etwa 600 Wörtern, eine grafische/interaktive Übung, Transferaufgabe, Musterantwort und sechs Quizfragen. Die bisherigen kurzen Piloten `research` und `industry` wurden ersetzt und auf Revision 2 angehoben. Ihre historischen Sterne bleiben erhalten; der neue Abschluss erfordert das aktuelle Quiz. Alle übrigen Modulrevisionen und geplanten Kursinhalte bleiben unverändert.

Wissenschaft: Erkenntnisziel und Forschungsphase, Referenzzuordnung, Streuung/Offset, Datenzustand und Metadaten, Finanzierungs-/Beschaffungsplan, unabhängige Pflanzen als Prüfgruppen und abschließendes Forschungsgespräch. Industrial: projektspezifische Rollen, Fehler-/Probenmatrix, Abdeckung/Unschärfe/gesamtes Zeitbudget, Entscheidungsmatrix mit klaren Nennern und fiktiven Fehlerkosten, OEM-Mengenreife, Integrationsverantwortung, Chargentrennung, Pilotgrenzen und Industriegespräch. Alle Fälle und Rechenwerte sind fiktiv; keine neuen Produkt-, Förder-, Liefer- oder Serienzusagen.

Praktische Aufgaben für Wissenschaftsberatung und Projektqualifizierung sind ergänzt; bestehende Voraussetzungen und Checklisten bleiben kompatibel. Eine Trainerbestätigung bleibt getrennt von Theorie, Übungshäkchen und Quizsternen. Die übrigen Lernwelten warten weiterhin auf zusätzliche fachliche Informationen.

Gesamtstand: acht ausgearbeitete Lernwelten, 64 vollständige Module / 384 Fragen sowie der ältere Software-Pilot: 65 spielbare Module, 387 Fragen und maximal 195 Sterne. Prüfung: `node tools/test-engine.cjs` plus Syntax- und Browserprüfung. Modelle berücksichtigen leere/ungültige Eingaben, fehlende Nenner, negative Zeitreserven und getrennte Bestellstatus. Browserinteraktionen bleiben lokal; keine externen Dienste, Nachrichten oder Kundendatenübertragung.
