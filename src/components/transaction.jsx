import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  const absAmount = Math.abs(transaction.amount);
  const kind = transaction.amount < 0 ? "minus" : "plus";
  return (
    <li className={kind}>
      {transaction.text}
      <span>
        {sign}${absAmount}
      </span>
      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
