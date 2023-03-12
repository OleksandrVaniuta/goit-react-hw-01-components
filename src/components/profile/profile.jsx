import PropTypes from 'prop-types';
import { Descriptions } from 'components/description/description';
import { Stats } from 'components/stats/stats';
import { ProfileCard } from './profile.styled';

export const Profile = ({ user }) => {
  const { avatar, tag, username, location, stats } = user;

  return (
    <ProfileCard>
      <Descriptions
        avatar={avatar}
        tag={tag}
        name={username}
        location={location}
      />
      <Stats
        Followers={stats.followers}
        Views={stats.views}
        Likes={stats.likes}
      />
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
