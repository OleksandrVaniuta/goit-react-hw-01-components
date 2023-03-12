import PropTypes from 'prop-types';
import { UserInfo } from './description.styled';

export const Descriptions = ({ avatar, name, tag, location }) => {
  return (
    <UserInfo>
      <img src={avatar} alt="User avatar" className="avatar" width="100px" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </UserInfo>
  );
};

Descriptions.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
