import PropTypes from 'prop-types';
import { StatsList, StatsItem } from './stats.styled';

export const Stats = ({ Followers, Views, Likes }) => {
  return (
    <StatsList>
      <StatsItem>
        <span className="label">Followers</span>
        <span className="quantity">{Followers}</span>
      </StatsItem>
      <StatsItem>
        <span className="label">Views</span>
        <span className="quantity">{Views}</span>
      </StatsItem>
      <StatsItem>
        <span className="label">Likes</span>
        <span className="quantity">{Likes}</span>
      </StatsItem>
    </StatsList>
  );
};

Stats.propTypes = {
  Followers: PropTypes.number.isRequired,
  Views: PropTypes.number.isRequired,
  Likes: PropTypes.number.isRequired,
};
