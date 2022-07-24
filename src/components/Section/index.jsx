import "./style.css";
const Section = ({
  children,
  listTransactions,
  setListTransactions,
  backup,
}) => {
  const filterEntry = backup.filter((transaction) => {
    return transaction.type === "Entrada";
  });

  const filterExpenses = backup.filter((transaction) => {
    return transaction.type === "Despesa";
  });

  return (
    <section className="section">
      <div className="containerH2Button">
        <h2>Resumo Financeiro</h2>
        <div className="container button">
          <button
            onClick={() => setListTransactions(backup)}
            className="buttonAll button-everybody"
          >
            Todos
          </button>{" "}
          <button
            onClick={() => setListTransactions(filterEntry)}
            className="buttonAll button-entry"
          >
            Entradas
          </button>{" "}
          <button
            onClick={() => setListTransactions(filterExpenses)}
            className="buttonAll button-expenses"
          >
            Despesas
          </button>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;
