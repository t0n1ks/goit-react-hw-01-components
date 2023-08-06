import styled from 'styled-components';

export const FriendListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  padding-left: 10px;
  padding-right: 75px;
`;

export const StatusDot = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => (props.isonline === 'true' ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;
