# Pepinieră & Magazin de Bonsai și Plante Exotice

Proiect realizat pentru disciplina **Tehnologii Web**. Interfață web modernă (responsive, dark theme) destinată gestiunii stocului unei pepiniere de bonsai și plante exotice.

---

## Descriere Proiect

Aplicația oferă un panou de gestiune vizuală a stocului de plante. În versiunea curentă, interfața oferă un catalog extins ce conține **30 de plante în total**, dintre care:
- **15 plante disponibile** (active în stoc)
- **15 plante vândute / indisponibile** (evidențiate vizual prin stilizare atenuată)

---

## Identitate Vizuală & Stil

- **配色 / Temă:** Dark Mode cu tonuri pământii (verde olivă, accent auriu/bronz, fundal antracit închis `#121614`).
- **Tipografie:** Serif clasic (*Palatino Linotype / Book Antiqua*) pentru un aspect rafinat de tip boutique.
- **Layout:** Flexbox și Grid responsive (2 coloane pe ecran mare, 1 coloană pe ecrane înguste/mobile).
- **Elemente UI:** Badge-uri distincte pentru nivelul de îngrijire (Ușor, Mediu, Expert) și status clar de stoc.

---

## Structura Fișierelor

```text
pepiniera/
├── index.html        # Structura HTML a catalogului și a formularului
├── style.css         # Stilurile CSS (variabile, temă dark, layout responsive)
├── README.md         # Documentația proiectului
└── ai-log/
    └── etapa-01.md   # Jurnalul utilizării uneltelor AI

## Stage 2: data logic
Plain JavaScript, no DOM. `plante.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Status
[x] Stage 1: static mockup
[x] Stage 2: data logic in JavaScript
[ ] Stage 3: Vite and React project

## Verification Table (Stage 2)
| ID | Requirement | Where | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | index.html | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | plante.js | read |
| S2-R3 | list, count, search, add, toggle, delete | plante.js | console output |
| S2-R4 | add rejects empty name and invalid tag | plante.js | last 2 console lines |
| S2-R5 | original array unchanged after add | plante.js | console line |
| S2-R6 | README Stage 2 section + AI log | README.md, ai-log/etapa-02.md | read |
| S2-R7 | commit "Stage 2" pushed | GitHub commit history | check repo |