import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
   return (
      <table class="transaction-history">
            <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
         </thead>
         <tbody>

        {items.map(({ type, amount , currency, id }) => (
    <tr key={id}>
              <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
        ))}
            </tbody>
  </table>
   )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
      })
   )
};