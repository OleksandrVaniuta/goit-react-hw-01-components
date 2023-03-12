import PropTypes from 'prop-types';
import { TrstnInfo } from '../transactions-info/info';
import { TblBody } from './tableBody.styled';

export const Body = ({ data }) => {
  return (
    <TblBody>
      {data.map(item => {
        const { id, type, amount, currency } = item;
        return (
          <TrstnInfo key={id} type={type} amount={amount} currency={currency} />
        );
      })}
    </TblBody>
  );
};

Body.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
