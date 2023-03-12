import PropTypes from 'prop-types';
// import { StatItem } from './list.styled';
import { StatItem } from './item.styled';

export const Item = ({ id, label, percentage }) => {
  return (
    <StatItem id={id} style={{ background: `${getRandomColor()}` }}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatItem>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
