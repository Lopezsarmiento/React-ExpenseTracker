import React from "react";
import "./App.css";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpenses from "./components/incomeExpenses";
import TransactionList from "./components/transactionList";
import AddTransaction from "./components/addTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </GlobalProvider>
  );
}

export default App;
