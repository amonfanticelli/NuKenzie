import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Main from "./components/Main";
import Section from "./components/Section";
import List from "./components/List";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return (
    <div className="App">
      <Header />
      <Main>
        <Form />
        <Section>
          <List></List>
        </Section>
      </Main>
    </div>
  );
}

export default App;
