// Datele de test adaptate temei, fiecare element având id, titlu (specie), starea gata (boolean) și etichetă fixă[cite: 29, 30, 32]
const plante = [
    { id: 1, titlu: "Ficus Retusa 12 ani", gata: true, eticheta: "easy" },
    { id: 2, titlu: "Pinus Thunbergii (Pin Negru Japonez)", gata: false, eticheta: "expert" },
    { id: 3, titlu: "Acer Palmatum (Arțar Japonez) 3 ani", gata: false, eticheta: "moderate" }
];

const NIVELURI = ["easy", "moderate", "expert"];

function listeazaTitluri(lista) {
    return lista.map((t) => t.titlu);
}

function numaraActive(lista) {
    return lista.filter((t) => !t.gata).length;
}

function cautaDupaTitlu(lista, text) {
    const textCautat = text.toLowerCase();
    return lista.filter((t) => t.titlu.toLowerCase().includes(textCautat));
}

function nextId(lista) {
    return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function adaugaPlanta(lista, titlu, eticheta = "moderate") {
    const titluCurat = titlu.trim();
    
    if (titluCurat === "") {
        console.log("Eroare: Nopți / Titlul nu poate fi gol!");
        return lista;
    }
    
    if (!NIVELURI.includes(eticheta)) {
        console.log("Eroare: Nivel de îngrijire invalid:", eticheta);
        return lista;
    }

    const nouaPlanta = {
        id: nextId(lista),
        titlu: titluCurat,
        gata: false,
        eticheta: eticheta
    };

    return [...lista, nouaPlanta];
}

function comutaStare(lista, id) {
    return lista.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t));
}
 
function stergePlanta(lista, id) {
    return lista.filter((t) => t.id !== id);
}

console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(plante).join(", "));
console.log("Active:", numaraActive(plante));
console.log("Căutare 'ficus':", listeazaTitluri(cautaDupaTitlu(plante, "ficus")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaPlanta(plante, "Bonsai Carmona Microphylla", "expert");
console.log("Lista nouă:", listaNoua.length, "plante");
console.log("Originalul a rămas cu:", plante.length, "plante");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 2);
console.log("După bifarea id 2, active:", numaraActive(listaNoua));
listaNoua = stergePlanta(listaNoua, 3);
console.log("După ștergerea id 3, titluri:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaPlanta(plante, ""); // Ar trebui să dea eroare în consolă
adaugaPlanta(plante, "Plantă Test", "supra-expert"); // Etichetă invalidă