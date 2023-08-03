import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FriendListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  padding-left: 10px;
  padding-right: 75px;
`;

const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 15px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemWrapper>
      <Status isOnline={isOnline} />
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
