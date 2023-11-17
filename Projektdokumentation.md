# Projekt-Dokumentation


Gruppe: Xavier Nursiwat, Artur Bytyqi, Leonardo Grigioni

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 17.11.2023      | 0.0.1   | I,P und E gemacht |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

Wir erstellen eine Webapp, wo man TicTacToe, alleine oder auch mit einer KI, spielen kann.


### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |  muss               | Funktional     | Als Spieler, möchte ich dass man die Felder drücken kann, damit man das Feld besetzt. |
|2  |     muss                 |Funktional      | Als Spieler, möchte ich dass es nach jedem platzieren der andere Spieler an der Riehe ist, damit man zu zweit spielen kann.                                   |
| 3  |    muss                  | Funktional     |  Als Spieler, möchte ich dass es nach jedem platzieren eine KI ein Feld paltziert, damit ich gegen einen Computer spielen kann.                           |
|4  |     muss                 |Funktional      |	Als Spieler, möchte ich eine klare Anzeige darüber erhalten, wer das Spiel gewonnen hat oder ob es unentschieden endet, damit das Spielerlebnis transparent und verständlich ist.                                    |
| 5  |   kann             | Funktional	     | Als Spieler, möchte ich die Option haben, das Spielfeld zurückzusetzen oder ein neues Spiel zu starten, damit ich schnell und einfach eine weitere Runde spielen kann.                                   |
| 6  | kann                |Funktional      |  	Als Spieler, möchte ich die Option haben, den Ton des Spiels ein- oder auszuschalten, um die audiovisuelle Erfahrung nach meinen Vorlieben anzupassen.                                  |
|7 |   kann           |  Funktional       | 	Als Spieler, möchte ich eine klare und intuitive Benutzeroberfläche haben, um das Spiel ohne Schwierigkeiten starten und spielen zu können.                  |
|8  |muss              |  Funktional       | 	Als Spieler muss das Spiel sicherstellen, dass kein Spieler mehr als einmal hintereinander an der Reihe ist, um faire Bedingungen zu gewährleisten.                  |
| 9 |    muss          |    Funktional     | Als Spieler muss das Spiel automatisch erkennen, wenn ein Spieler gewonnen hat, um das Ende des Spiels zu signalisieren.|


✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc.), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). Die User Story selber hat folgende Form: *Als ein 🤷‍♂️ möchte ich 🤷‍♂️, damit 🤷‍♂️*.

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |   Spielfeld ist leer	           | Spieler drückt auf ein freies Feld	        |Das ausgewählte Feld wird vom Spieler besetzt.|
| 2.1| 	Spieler 1 hat gerade gezogen             |Spieler 2 drückt auf ein freies Feld	         |Das ausgewählte Feld wird von Spieler 2 besetzt. |
| 3.1  |   KI hat gerade gezogen	           |   -      |  Die KI platziert automatisch ein Symbol auf dem Spielfeld.|
| 4.1  |Spieler 1 hat gewonnen|         | Eine klare Anzeige, dass Spieler 1 das Spiel gewonnen hat.|
| 5.1  |Spiel ist beendet |Spieler drückt auf "Neues Spiel starten"         |Das Spielfeld wird zurückgesetzt, und ein neues Spiel beginnt.                   |
| 6.1  |Spieler drückt auf den Ton aus  |  -       |Der Ton des Spiels wird ausgeschaltet.|
| 7.1  |	Spieler öffnet die Benutzeroberfläche|         | Die Benutzeroberfläche ist klar und intuitiv gestaltet.|
| 8.1  |Spieler 1 hat gerade gezogen  |Spieler 2 drückt auf ein freies Feld|Spieler 2 ist an der Reihe, Spieler 1 kann nicht erneut ziehen                   |
| 9.1  |  Spieler 1 hat gewonnen	           |         |  Das Spiel erkennt automatisch, dass Spieler 1 gewonnen hat.|



### 1.4 Diagramme

✍️Fügen Sie hier ein Use Case-Diagramm mit mindestens 3 Anwendungsfällen ein; und eine Skizze davon, wie Ihre Netzseite aussehen sollte.

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
|1.A	 |TBD  |		-  |Implementierung der Funktion, um Felder durch Drücken zu besetzen (US-1).|	180 Minuten|
|2.A	|TBD	|	-    |Implementierung der Funktion, damit nach jedem Zug der andere Spieler an der Reihe ist (US-2).|	180 Minuten|
|3.A	|TBD	|	 -   |Implementierung der Funktion, damit nach jedem Zug eine KI ein Feld platziert (US-3).	|240 Minuten|
|4.A	|TBD	|	 -   |Implementierung der Anzeige für Spielgewinn oder Unentschieden (US-4).|120 Minuten|
|5.A	|TBD	|	 -   |Implementierung der Option, das Spielfeld zurückzusetzen oder ein neues Spiel zu starten (US-5).	|120 Minuten|
|6.A	|TBD	|	 -   |Implementierung der Option, den Ton des Spiels ein- oder auszuschalten (US-6).	|120 Minuten|
|7.A	|TBD	|	  -  |Gestaltung einer klaren und intuitiven Benutzeroberfläche (US-7).	|240 Minuten|
|8.A	|TBD	|	 -   |Implementierung der Regel, dass kein Spieler mehr als einmal hintereinander ziehen kann (US-8).	|180 Minuten|
|9.A	|TBD	|	  -  |Implementierung der automatischen Erkennung des Spielendes bei Gewinn (US-9).|180 Minuten|


Total: 



## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
