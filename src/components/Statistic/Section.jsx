import PropTypes from 'prop-types';
import { Section, StatTitle, StatList, StatItem } from './Section.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title.length > 0 && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(stat => {
          const { id, label, percentage } = stat;
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
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
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
