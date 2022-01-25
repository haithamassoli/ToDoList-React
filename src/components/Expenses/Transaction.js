const Transaction = ({
  amount,
  text,
  transactions,
  trans,
  setTransactions,
}) => {
  const sign = +amount < 0 ? "-" : "+";

  const deleteTransaction = () => {
    const filteredTransations = transactions.filter(
      (item) => item.id !== trans.id
    );
    setTransactions(filteredTransations);
  };

  return (
    <li className={+amount < 0 ? "minus" : "plus"}>
      {text}
      <span>
        {sign}${Math.abs(+amount)}
      </span>
      <button onClick={deleteTransaction} className="delete-btn">
        x
      </button>
    </li>
  );
};

export default Transaction;
