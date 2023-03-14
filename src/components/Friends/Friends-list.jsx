import PropTypes from 'prop-types';
import { FriendItem } from './Friend-item/Friend-Item';
import { FriendsUl } from './Friends-list.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsUl>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem
            key={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
          />
        );
      })}
    </FriendsUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
