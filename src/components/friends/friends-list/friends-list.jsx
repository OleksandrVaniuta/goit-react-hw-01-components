import PropTypes from 'prop-types';
import { FriendItem } from '../friends-item/friends-item';
import { FriendsUl } from './friends-list.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsUl>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <FriendItem
            key={id}
            avatar={avatar}
            name={name}
            status={isOnline}
            id={id}
          />
        );
      })}
    </FriendsUl>
  );
};

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.bool,
    })
  ),
};
