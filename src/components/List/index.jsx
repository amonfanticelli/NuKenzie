import imgNoContent from "../../img/noLaunchs.png";
import "./style.css";
import { FiTrash2 } from "react-icons/fi";

const List = ({ listTransactions, setListTransactions }) => {
  const handleRemoveItem = (id) => {
    const newList = listTransactions.filter((item) => item.id !== id);
    console.log({ listTransactions, newList });
    setListTransactions(newList);
  };

  return listTransactions.length === 0 ? (
    <img src={imgNoContent} alt="" />
  ) : (
    <ul className="list">
      {listTransactions.map((transaction) => (
        <li className="listElement" key={transaction.id}>
          <div
            className={
              transaction.type === "Entrada"
                ? "coloredBarGreen"
                : "coloredBarGrey"
            }
          ></div>
          <div className="containerH2Span">
            <h2 className="titleDescription">{transaction.description}</h2>
            <span className="spanEntry">{transaction.type}</span>
          </div>
          <div className="containerSpanButton">
            <span className="spanPrice">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(transaction.value)}
            </span>
            <button
              onClick={() => handleRemoveItem(transaction.id)}
              id={transaction.id}
              className="buttonRemove"
            >
              <FiTrash2 id={transaction.id} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;

// .toFixed(2)
// .replace(".", ",")
