import PropTypes from 'prop-types';
import { FriendsUl, FriendsLi } from './Friends-list.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsUl>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <FriendsLi key={id} status={isOnline}>
            <span></span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </FriendsLi>
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
      isOnline: PropTypes.bool,
    })
  ),
};
