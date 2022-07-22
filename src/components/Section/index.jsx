import "./style.css";
const Section = ({ children }) => {
  return (
    <section className="section">
      <div className="containerH2Button">
        <h2>Resumo Financeiro</h2>
        <div className="container button">
          <button>Todos</button> <button>Entradas</button>{" "}
          <button>Despesas</button>
        </div>
      </div>
    </section>
  );
};

export default Section;
