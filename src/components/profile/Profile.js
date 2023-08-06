import React from 'react';
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

export default Profile;
