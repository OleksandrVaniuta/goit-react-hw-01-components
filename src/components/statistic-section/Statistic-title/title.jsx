import PropTypes from 'prop-types';
import { StatTitle } from './Stats-title.styled';

export const SectionTitle = ({ text }) => {
  return <StatTitle className="title">{text}</StatTitle>;
};

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
