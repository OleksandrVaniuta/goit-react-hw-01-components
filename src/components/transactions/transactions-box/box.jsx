import PropTypes from 'prop-types';
import { TableHead } from '../table-head/tableHead';
import { Body } from '../table-body/tableBody';
import { TrstnHist } from './box.styled';

export const Transaction = ({ data }) => {
  return (
    <TrstnHist className="transaction-history">
      <TableHead type="Type" amount="amount" currency="currency" />
      <Body data={data} />
    </TrstnHist>
  );
};

Transaction.propTypes = {
  data: PropTypes.array.isRequired,
};
