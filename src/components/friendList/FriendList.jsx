import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendListItem from '../friendListItem/FriendListItem';

const FriendListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

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
