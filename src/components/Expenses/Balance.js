const Balance = ({ total }) => {
  return (
    <div className="Balance">
      <h4>Your Balance</h4>
      <h1>${total.toFixed(2)}</h1>
    </div>
  );
};
export default Balance;
