import PropTypes from 'prop-types';
import { ProfileCard, UserInfo, StatsList, StatsItem } from './Profile.styled';

export const Profile = ({ avatar, tag, username, location, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileCard>
      <UserInfo>
        <img src={avatar} alt="User avatar" className="avatar" width="100px" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </UserInfo>
      <StatsList>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

// Profile.propTypes = {
//   user: PropTypes.object.isRequired,
// };

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
