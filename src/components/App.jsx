import React from 'react';
import Profile from './user/Profile';
import user from './user/user.json';
import Statistics from './data/Statistics';
import data from './data/data.json';
import FriendList from './friends/FriendList';
import friends from './friends/friends.json';
import TransactionHistory from './transactions/TransactionHistory';
import transactions from './transactions/transactions.json';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
  overflow-y: auto;
`;

const Section = styled.div`
  margin-bottom: 25px;
`;

export const App = () => {
  return (
    <Container>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
};
