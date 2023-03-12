import PropTypes from 'prop-types';
import { SectionTitle } from '../Statistic-title/title';
import { List } from '../Statistic-list/list';
import { Section } from './section.styled';

export const Statistics = ({ stats }) => {
  return (
    <Section className="statistics">
      <SectionTitle text="Upload stats"></SectionTitle>
      <List stats={stats} />
    </Section>
  );
};

Statistics.propTypes = {
  text: PropTypes.string,
  stats: PropTypes.array,
};
