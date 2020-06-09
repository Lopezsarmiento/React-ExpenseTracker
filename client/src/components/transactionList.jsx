import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./transaction";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  console.log("context.transactions: ", transactions);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction._id}
            transaction={transaction}
          ></Transaction>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
