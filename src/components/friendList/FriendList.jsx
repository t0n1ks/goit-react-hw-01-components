import React from 'react';
import PropTypes from 'prop-types';
import { FriendListWrapper } from './FriendList.styles';
import FriendListItem from '../friendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
