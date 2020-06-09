import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  const absAmount = Math.abs(transaction.amount);
  const kind = transaction.amount < 0 ? "minus" : "plus";
  return (
    <li className={kind}>
      {transaction.text}
      <span>
        {sign}${numberWithCommas(absAmount)}
      </span>
      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
