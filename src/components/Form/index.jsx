import "./style.css";
const Form = () => {
  return (
    <form className="formNuKenzie" action="">
      <label className="labelDescription" htmlFor="description">
        Descrição
      </label>
      <input
        className="inputDescription"
        name="description"
        type="text"
        placeholder="Digite aqui sua descrição"
      />
      <div className="containerValueSelect">
        <div className="containerOnlyValue">
          <label className="labelValue" htmlFor="value">
            Valor
          </label>
          <input className="inputValue" name="value" type="text" />
        </div>
        <div className="containerSelect">
          <label className="labelValueType" clashtmlFor="select">
            Tipo de valor
          </label>
          <select className="select" name="select" id="">
            <option className="option" value="">
              Entrada
            </option>
            <option className="option" value="">
              Despesa
            </option>
          </select>
        </div>
      </div>
      <button className="buttonForm" type="submit">
        Inserir Valor
      </button>
    </form>
  );
};

export default Form;
