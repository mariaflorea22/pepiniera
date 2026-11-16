# Jurnal Etapa 8 - Navigare și Stilizare pe Componente

- **Layout Comun (`Layout.jsx`)**: 
  - S-a creat componenta de layout care conține antetul, navigarea cu `NavLink` (pentru rutele active și atributul `end`), subsolul și componenta `<Outlet />` pentru randarea dinamică a paginilor.
- **Pagină de Detaliu (`TaskDetaliuPage.jsx`)**: 
  - S-a adăugat funcția `fetchTask(id)` în `api.js`.
  - S-a implementat pagina de detaliu care citește parametrul din URL folosind `useParams()`, tratează cazurile de eroare (ex: 404 pentru id-uri inexistente) și permite navigarea fluidă.
- **CSS Modules**: 
  - S-au mutat stilurile specifice în fișiere `*.module.css` lângă fiecare componentă/pagină, păstrând în `index.css` doar variabilele globale și clasele comune.