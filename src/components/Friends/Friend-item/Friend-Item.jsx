import PropTypes from 'prop-types';
import { FriendsLi, StatusOnline } from './Friend-item.styled';

export const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendsLi>
      <StatusOnline status={isOnline}></StatusOnline>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsLi>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
