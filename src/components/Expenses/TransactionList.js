import Transaction from "../Expenses/Transaction";

const TransactionList = ({ transactions, setTransactions }) => {
  return (
    <>
      <h3 className="Heading-3">History</h3>
      <ul className="list">
        {transactions.map((trans) => (
          <Transaction
            key={trans.id}
            trans={trans}
            amount={trans.amount}
            text={trans.text}
            transactions={transactions}
            setTransactions={setTransactions}
          />
        ))}
      </ul>
    </>
  );
};
export default TransactionList;
