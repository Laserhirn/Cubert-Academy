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
