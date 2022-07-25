import { useState } from "react";
import "./style.css";
const Form = ({
  setListTransactions,
  listTransactions,
  setTotal,
  total,
  setBackup,
}) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  function insertValue(event) {
    event.preventDefault();
    const newEntry = {
      description,
      value: type === "Entrada" ? +value : -value,
      id: crypto.randomUUID(),
      type,
    };
    setListTransactions([newEntry, ...listTransactions]);
    setBackup([newEntry, ...listTransactions]);

    const totalPrice = [newEntry, ...listTransactions].reduce(
      (acc, inicialValue) => acc + inicialValue.value,
      0
    );
    setTotal(totalPrice);
    // const formData = new FormData(event.target);
    // const formProps = Object.fromEntries(formData);
    // setListTransactions((oldState) => [
    //   ...oldState,
    //   { ...formProps, id: crypto.randomUUID() },
    // ]);
  }

  return (
    <div className="containerForm">
      <form className="formNuKenzie" onSubmit={insertValue}>
        <label className="labelDescription" htmlFor="description">
          Descrição
        </label>
        <input
          required
          className="inputDescription"
          name="description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Digite aqui sua descrição"
        />
        <div className="containerValueSelect">
          <div className="containerOnlyValue">
            <label className="labelValue" htmlFor="value">
              Valor
            </label>
            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="inputValue"
              name="value"
              type="number"
            />
          </div>
          <div className="containerSelect">
            <label className="labelValueType" htmlFor="select">
              Tipo de valor
            </label>
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="select"
              name="type"
            >
              <option className="option" value="Entrada">
                Entrada
              </option>
              <option className="option" value="Despesa">
                Despesa
              </option>
            </select>
          </div>
        </div>
        <button className="buttonForm" type="submit">
          Inserir Valor
        </button>
      </form>
      {!listTransactions.length ? (
        <></>
      ) : (
        <section className="sectionPrice">
          <div className="containerH2Paragraph">
            <h2 className="totalValue">Valor Total:</h2>
            <span className="spanPrice">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </span>
          </div>
          <div className="containerParagraph">
            <p className="paragraph">O valor se refere ao saldo</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Form;
