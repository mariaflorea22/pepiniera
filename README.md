# BonsaiFlora & Exotic Plants
Manages a collection of bonsai and exotic plants and tracks their inventory status.

## Data model
| Field | Type | Notes |
| :--- | :--- | :--- |
| Specie și Vârstă | text | required, max 100 chars |
| Stare (Disponibil/Vândut) | boolean | toggled from the list, default false |
| Nivel Îngrijire | fixed values | Ușor, Mediu, Expert |
| Categorie | relation | Bonsai, Plante Exotice, Succulente |
| Utilizator | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Ficus Retusa 12 ani, done, Ușor
2. Pinus Thunbergii (Pin Negru Japonez), active, Expert
3. Acer Palmatum (Arțar Japonez) 3 ani, active, Mediu

## AI usage
| Tool | Used for |
| :--- | :--- |
| Gemini / ChatGPT | Structuring HTML semantically and writing CSS Grid/Flexbox layouts |

See the `ai-log/` folder for details per stage.

## How to run
Open `index.html` in a browser. No build step, no server.

## Status
[x] Stage 1: static mockup
[ ] Stage 2: data logic in JavaScript

## Verification Table (Stage 1)
| ID | Requirement | Where | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data | README.md | read |
| S1-R2 | AI usage section | README.md | read |
| S1-R3 | AI log for stage 1 | ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards | index.html | open the page |
| S1-R5 | finished card looks different (.done) | style.css / index.html | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 800px | style.css (@media) | resize window |
| S1-R7 | visible focus (:focus-visible) | style.css | press Tab |
| S1-R8 | commit "Stage 1" pushed to GitHub | GitHub commit history | check repo |