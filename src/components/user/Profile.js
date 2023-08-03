// В файлі Profile.js
import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  background-color: #ffffff;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 45px;
  background-color:#f0f0f0;
`;

const Username = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Tag = styled.p`
  font-size: 18px;
  color: #888888;
  margin-bottom: 8px;
`;

const Location = styled.p`
  font-size: 16px;
  color: #aaaaaa;
`;

const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color:#f0f0f0;
  border-radius: 10px;

`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

const Label = styled.span`
  font-size: 14px;
  color: #555555;
`;

const Quantity = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

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
