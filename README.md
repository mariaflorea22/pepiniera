# Pepinieră & Magazin de Bonsai și Plante Exotice

Proiect de semestru pentru disciplina Tehnologii Web.

## Stage 1: Static Mockup
- Created the static HTML and CSS layout for the Bonsai and Exotic Plant Nursery.

## Stage 2: Data Logic in JavaScript
- Implemented core data logic in JavaScript (`plante.js`) covering read, add, filter, delete, and validation features.

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw[cite: 23].

## How to run
```bash
cd frontend
npm install
npm run dev

## Stage 4: components
The list is rendered from the data, through two components:
- `TaskList` receives the whole array and renders one card per item
- `TaskCard` receives a single item through props and displays it

# Pepinieră & Magazin de Bonsai și Plante Exotice

Aplicație web interactivă pentru gestionarea stocului de bonsai și exemplare exotice de pepinieră, dezvoltată în cadrul disciplinei Tehnologii Web.

---

## Stage 5: Local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

## Stage 6: data from a mock API
The list is served by json-server from `db.json`. The app fetches it on load and shows a loading state and an error state.

### Rulare
Pentru a rula aplicația, pornește serverul și clientul în **două terminale separate** (în folderul `frontend/`)
```bash
# Terminal 1: Pornire API Mock
npm run api

# Terminal 2: Pornire aplicație React
npm run dev