import PropTypes from 'prop-types';
import { TrstnHist, Head, TblBody } from './Transactions.styled';

export const Transaction = ({ data }) => {
  return (
    <TrstnHist className="transaction-history">
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>
      <TblBody>
        {data.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </TblBody>
    </TrstnHist>
  );
};

Transaction.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
