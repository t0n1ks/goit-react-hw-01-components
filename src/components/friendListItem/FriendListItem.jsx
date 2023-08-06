import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendListItemWrapper,
  StatusDot,
  Avatar,
  Name,
} from './FriendListItem.styles';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemWrapper>
      <StatusDot isonline={isOnline.toString()} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </FriendListItemWrapper>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
