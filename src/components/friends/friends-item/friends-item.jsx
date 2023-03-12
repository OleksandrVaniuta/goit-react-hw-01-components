import PropTypes from 'prop-types';
import { FriendsLi } from './friends-item.styled';

export const FriendItem = ({ avatar, name, status }) => {
  return (
    <FriendsLi status={status}>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsLi>
  );
};

FriendItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
};
