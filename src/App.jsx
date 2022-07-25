import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Main from "./components/Main";
import Section from "./components/Section";
import List from "./components/List";

function App() {
  const [backup, setBackup] = useState([]);
  const [listTransactions, setListTransactions] = useState([
    // {
    //   id: crypto.randomUUID(),
    //   description: "Salário recebido",
    //   type: "entrada",
    //   value: 2500,
    // },
    // {
    //   id: crypto.randomUUID(),
    //   description: "Conta de luz",
    //   type: "saída",
    //   value: -150,
    // },
  ]);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main>
        <Form
          setListTransactions={setListTransactions}
          listTransactions={listTransactions}
          setTotal={setTotal}
          total={total}
          setBackup={setBackup}
        />
        <Section
          setListTransactions={setListTransactions}
          listTransactions={listTransactions}
          backup={backup}
        >
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            backup={backup}
            setBackup={setBackup}
          />
        </Section>
      </Main>
    </div>
  );
}

export default App;
