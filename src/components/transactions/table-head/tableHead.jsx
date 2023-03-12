import PropTypes from 'prop-types';
import { Head } from './tableHead.styled';

export const TableHead = ({ type, amount, currency }) => {
  return (
    <Head>
      <tr>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
      </tr>
    </Head>
  );
};

TableHead.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
