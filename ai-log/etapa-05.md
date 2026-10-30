# AI Log - Stage 5

## Instrumente 
- Gemini

## Conversații
- Ghidaj pentru implementarea comutatorului de temă (Light/Dark mode) folosind starea locală și atributul `data-theme` pe elementul `<html>`, integrat cu variabilele CSS existente.

## Cereri cheie
### 1. State local și funcționalitate interactivă
- **Solicitat:** Cum se gestionează corect lista în 'useState'.

### 2. Comutatorul de temă
- **Solicitat:** Cum se leagă un buton din antet de schimbarea dinamică a temei cromatice a paginii.
- **Obținut:** Indicații cu privire la funcția de comutare a temei care modifică țdocument.documentElement.dataset.themeț și actualizează variabilele CSS corespunzătoare.

## Ce am învățat / ce nu a funcționat
- Am înțeles diferența dintre o valoare păstrată în state (lista de plante, tema curentă) și o valoare derivată (contorul plantelor active calculat prin `.filter().length`).
- Am corectat o problemă de legătură a variabilelor CSS în `App.css` pentru a asigura schimbarea instantanee a culorilor la comutarea temei.