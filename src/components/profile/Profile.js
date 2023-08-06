import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  Avatar,
  Username,
  Tag,
  Location,
  StatsList,
  StatItem,
  Label,
  Quantity,
} from './Profile.styles';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <Avatar src={avatar} alt="User avatar" />
      <Username>{username}</Username>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>

      <StatsList>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

