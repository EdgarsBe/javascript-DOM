# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Tekst paliek atkal neredzams, jo atsvaidzinot lapu tu ielāde visu pa jaunu un rezultātā arī javascript kods sāk savu darbu no jauna.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Nē nestrādās, jo tā koda daļa ielādē javascripta kodu. Risinājums, lai kods strādātu bez šī koda ir html faila pārlikt script uz apakšu.
---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Metode addEventListener () norādītajam elementam pievieno notikumu apstrādātāju.
Metode addEventListener () elementam pievieno notikumu apdarinātāju, nepārrakstot esošos notikumu apstrādātājus.
Vienam elementam varat pievienot daudz pasākumu apstrādātāju.
Vienam elementam varat pievienot daudz viena veida notikumu apstrādātāju, t.i., divus notikumus ar klikšķi.
Notikumu klausītājus var pievienot jebkuram DOM objektam, ne tikai HTML elementiem. i., loga objekts.
Metode addEventListener () ļauj vieglāk kontrolēt, kā notikums reaģē uz burbuļošanu.
Izmantojot metodi addEventListener (), JavaScript tiek atdalīts no HTML marķējuma, lai nodrošinātu labāku lasāmību un ļauj pievienot notikumu klausītājus pat tad, ja jūs nekontrolējat HTML iezīmēšanu.
Notikumu klausītāju var viegli noņemt, izmantojot metodi removeEventListener ().

