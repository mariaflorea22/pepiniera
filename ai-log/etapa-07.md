# Jurnal Etapa 7 - Formular și Validare

- **Extindere `api.js`**: 
  - S-a creat funcția comună `request` care gestionează antetele JSON și erorile HTTP.
- **Componenta `TaskForm.jsx`**:
  - S-a creat formularul controlat cu stări pentru `titlu`, `prioritate`, `eroare` și starea de trimidere (`trimite`).
  - S-a adăugat validarea locală (titlu obligatoriu și lungime maximă) care afișează eroarea în pagină lângă formular, fără `alert`.
  - S-au adăugat atributele `data-testid` cerute pentru verificarea automată.
- **Integrare și Flux în `App.jsx`**:
  - S-a mutat formularul în panoul din stânga.
  - S-a implementat fluxul „întâi serverul, apoi state-ul” pentru adăugare (`handleAdd`), bifare (`handleToggle`) și ștergere (`handleDelete`).
- **Layout și Stiluri (`App.css`)**:
  - S-a configurat layout-ul pe două coloane prin CSS Grid (`1fr 2fr`).
  - S-au adăugat stiluri pentru butoane dezactivate în timpul trimiterii și marcarea câmpurilor invalide (`aria-invalid="true"`).
- **Verificare Automată (`tw.json`)**:
  - S-a creat fișierul `tw.json` în rădăcina repository-ului cu setările pentru resursă, titlu și stare.