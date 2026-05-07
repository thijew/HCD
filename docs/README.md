# HCD Project - Ontwerp een prototype voor Darice, een doof persoon die haar filmervaring wilt verbeteren.

---

## 📋 Opdracht

Ontwerp een prototype specefiek voor Darice. Darice is  de inhoud van podcasts en films volledig kan volgen, inclusief sfeergeluiden, emoties, intonatie en andere nuances.
Darice wil graag de inhoud van films beter kunnen volgen, inclusief alle hoorbare details zoals sfeergeluiden, geluidseffecten, en nuances zoals intonatie en andere eigenschappen van de stemmen. Is de persoon bijvoorbeeld boos? Verdrietig? Vrolijk? Ook wilt ze graag de hoorbare details zoals geluidseffecten, (spannende) muziek, etc
Darice is op latere leeftijd doof geworden. Ze heeft een typ-tolk en een speak-easy apparaat.

---

## 🔍 Probleem

Darice is op latere leeftijd doof geworden. Standaard ondertiteling voldoet niet, want:

- Ze mist hoorbare details zoals emoties, geluidseffecten en sfeer.
- De meeste bestaande oplossingen bieden alleen tekst.

---

## 🧩 Oplossings ideeën (Samenvatting)

| Geluid |Ideeën voor visualisatie|
|------------------------------|-----------------------------------------|
| Geluidseffecten (deur dichtslaan, regen, applaus) | Kleine animaties of iconen die subtiel verschijnen bij het geluid (b.v. regendruppels, trillend deurtje) |
| Sfeermuziek | Achtergrondkleur verandert mee met de sfeer (warm = gezellig, blauw = verdrietig, rood = spannend) |
| Geluidsterkte | Toon de sterkte via een visuele “waveform” of een pulserend element|
| Timing en pauzes| Maak gebruik van vertragingen, fade-ins of fade-outs zodat Darice voelt wanneer er een stilte of nadruk is |

---

## ✨ Exclusive Design Principles

| Principle | Toepassing in jouw project |
|-----------|---------------------------|
| Study situation | Wat heb je geleerd van de observaties & tests met Darice? |
| Ignore conventions | Wat heb je bewust anders gedaan dan normaal? |
| Prioritise identity | Hoe zie je Darice's persoonlijkheid terug in het ontwerp? |
| Add nonsense | Wat heb je speels, creatief of ongewoon toegevoegd? |  

---

## 📖 Voortgang

### Dag 1 (30 Maart)

Ik had de opdracht verkeerd gelezen dus begon met een eerste opzetje voor de podcast te maken, alleen ga ik liever werken met de film opdracht. Ik heb de captions toegevoegd aan de film en op de juiste tijd onder de film gezet. De film toegevoegd aan de website en begonnen aan de achtergrond geluiden en hoe deze weer te geven daar wil ik morgen mee verder.

### Dag 2 (31 Maart)

De dag begonnen met een bug te fixen waardoor de video niet wilde afspelen. Daarna de eerste test gedaan met Darice en vragen gesteld, zie het resultaat daarvan hier onder. Feedback ontvangen over fonts, kleuren, emoji gebruik en toegankelijkheid. Lato fonts gekozen en eerste achtergrondeffecten toegevoegd.

### Dag 4 (2 April)
Sound-effect styling uitgewerkt: heartbeat animatie, flitsende lichten (sound0), kiddie muziek kleuren (sound1). Begonnen met CSS transitions voor sfeer-overgangen.

### Dag 5 (3 April)
Captions voor spannende scènes gestyled (beast growls, crowd panic). Kleuren en tekstgrootte aangepast na Darice feedback. Test van alle timings.

### Dag 6 (4 April)
Flash-effect voor lichtflitsen (sound 9-11) toegevoegd. Afstelling van timing en overgangen. Debug van korte intervallen tussen sounds.

### Dag 7 (7 April)
Tweede test met Darice - Arduino idee werd goed ontvangen. Flash-effect bug gefixt (verkeerde CSS selector). 

### Dag 8 (8 April)

Ik dacht dat ik een arduino trilmotor had helaas was dat niet zo dus die heb ik besteld.
Sound effects voor flashes beter uitgewerkt.

### Dag 9 (9 April)
Voorbereiding README en projectdocumentatie. Sound effects aangepast op de milliseconden zodat de effecten perfect gelijk zijn.

### Dag 10 (10 April)
README bijgewerkt met voortgang. Onderzoek gedaan naar arduino setup. Nieuw idee om een sound effect "volume" knop toe tevoegen zodat de effecten harder en zachter worden gezet.
---

## 🔄 Iteraties & Tests

### Test 1 (31 Maart)

Vragen?

- Is er een favoriet font wat u het best vindt lezen?
Sans-serif monospace voor captions, Serif voor artikelen
- Heeft de gebruiker last van motion sickness (voor de flitsende beelden en animaties).
nee maar niet teveel flashes.
- Zijn emoji's een goeie manier om emoties over te brengen?
in film niet nodig bij podcast wel.


- Let op de kleurencombinatie's en zorg dat het duidelijk is, de kleuren zijn erg belangrijk voor Darice.
- Bij ondertiteling de namen niet (), let op de grootte van het font.
- De toon van hoe mensen iets zeggen wanneer nodig, wanneer het niet duidelijk is voor de gebruiker verder niet nuttig om bij alles een toon aan te geven. 
- Eventueel een EQ om volume af te beelden.
- Toegankelijkheid is belangrijk maar ook de keuzes in toegankelijkheid dus geef de gebruiker keuze om opties aan en uit te zetten.
- Koppel een Arduino aan de film die trilling simuleert op spannende momenten. 
- Alle details moeten overkomen op de gebruiker.


### Test 2 (7 april)

vragen?

- Zou een arduino aansluiten nuttig zijn, om daarmee bijvoorbeeld trilling te gebruiken om bepaalde signalen over te brengen? 
Ja.
- Bent u bekend met soortgelijke hulpmiddelen om geluid beter over te laten komen en welke oplossing gebruikte zij?
Ja in de bioscoop bij IMAX, dit helpt erg goed om de beleving van de film over te brengen.
- Zijn de tot nu toe gebruikte kleuren duidelijk voor Darice?
Nee kleuren contrast moet beter, tekst mag groter en duidelijker maken wanneer er gesproken wordt en wanneer iets een geluid is. 
- Heeft een EQ nog eventuele voordelen?
Een duidelijke goed uitgewerkte EQ zou wel helpen maar het is erg lastig.

### Test 3 (14 april)

Vragen?

- Is het einde duidelijk? Er gebeurd veel maar alles is zichtbaar, is dit ook duidelijk voor Darice?

- Slider toevoegen om effecten minder heftig te maken net zoals je geluid harder en zachter kan zetten.

- EQ verder uitwerken.

Resultaten:

Text nog steeds te klein op een groot scherm. De mogelijkheid om de intensiteit van de effecten aanpassen is erg fijn. 
### Test 4 (21 april)

During test 4, I actually wanted to use the Arduino for testing, but unfortunately that did not work on the day of the test, so I was unable to test it. However, I did discuss the idea of how different sounds can be conveyed through vibration, and when the user would practice with the vibrations so that they know which vibration imitates which sound. 

| Sound  | Meaning         | pattern            |
| ------- | --------------------- | --------------------------------- |
| sound0  | Heartbeat             | Pulse              |
| sound1  | Kiddie music          | Light pulse              |
| sound2  | Crowd cheering        | Panic burst              |
| sound3  | Water                 | Soft rumble         |
| sound4  | Water continues       | Soft rumble         |
| sound5  | Tension building      | Long rumble         |
| sound6  | Peak tension          | Strong rumble       |
| sound7  | Beasts crawl in       | Long rumble         |
| sound8  | Scream / threat spike | Panic burst        |
| sound9  | Flash 1               | Double hit |
| sound10 | Flash 2               | Double hit |
| sound11 | Flash 3               | Double hit |
| sound12 | Final cue             | Pulse       |

---

## 📝 Conclusie

In this project, I explored how to design a website for 1 specific persona. In this case the persona (Darice) was deaf so the goal was to make sounds from a movie clip and give the user a better understanding of what the sounds are. I started the website with trying to visualize the sounds, I added subtitles, Added some sort of equalizer to display the loudness of the sounds. The test results showed that Darice would like to change how intens the visual effects of the sound should be. I came up with an idea to add a Arduino and a vibration motor so that sound could be displayed as vibration. The user can learn different vibration patterns to get a better understanding of what the vibrations mean and to later add even more vibrations for more specific sounds.

The tests showed that the idea was well received and that the Arduino made the concept more understandable and interesting. Darice was especially interested in how the Arduino could be used to represent sound through vibration, and she thought this was a good and creative solution. She also liked the option to change the intensity, although she mentioned that the three levels could be made a bit more different from each other. Overall, the website worked well and the user experience was positive.


From this project I learned that to design a website for one specific person it is incredibly important to test your project, listen to the persona specific needs, adjust your project to those needs and to think outside of the box. When you are designing something for only 1 person you can go a little crazier with your ideas and if the persona likes it then that's great, but that doesn't mean it's going to work for everyone.  
## 💾 Bestanden

- [[Link naar GitHub repo](https://github.com/thijew/HCD)]
- Link naar DLO ZIP
