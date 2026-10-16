const plante = [
  { id: 1, titlu: "Ficus Retusa 12 ani", stare: "disponibil", tag: "uşor" },
  { id: 2, titlu: "Pinus Thunbergii (Pin Negru Japonez)", stare: "vândut", tag: "expert" },
  { id: 3, titlu: "Acer Palmatum (Arțar Japonez)", stare: "disponibil", tag: "mediu" }
];

export default function App() {
  const active = plante.filter((p) => p.stare === "disponibil").length;

  return (
    <>
      <header className="app-header">
        <h1>Pepinieră & Magazin de Bonsai și Plante Exotice</h1>
        <p>Gestiune stoc de bonsai și exemplare exotice de pepinieră.</p>
        <p className="app-count">
          {plante.length} plante în catalog, dintre care {active} disponibile
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Plantele Mele</h2>
          <pre>{JSON.stringify(plante, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}