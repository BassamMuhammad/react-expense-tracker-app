import { createContext, useReducer } from "react";
import TransReducer from "./transReducer";

const initialTransactions = [
  { amount: 500, desc: "Cash" },
  { amount: -40, desc: "Book" },
  { amount: -200, desc: "Camera" },
];

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransReducer, initialTransactions);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  return (
    <TransactionContext.Provider
      value={{ transactions: state, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
