import PropTypes from 'prop-types';
import { Section, StatTitle, StatList, StatItem } from './Section.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} style={{ background: `${getRandomColor()}` }}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  text: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
