import PropTypes from 'prop-types';
import { Item } from '../item/item';
import { StatList } from './list.styled';

export const List = ({ stats }) => {
  return (
    <StatList className="stat-list">
      {stats.map(stat => {
        const { id, label, percentage } = stat;
        return <Item key={id} id={id} label={label} percentage={percentage} />
      })}
    </StatList>
  );
};

List.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
