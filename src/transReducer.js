import { useReducer } from "react";

const TransReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];

    case "DELETE":
      return state.transactions.filter(
        (transaction) => transaction.id !== action.payload.id
      );
    default:
      return state;
  }
};

export default TransReducer;
