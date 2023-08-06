import React from 'react';

import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';
import { Container } from './styledApp/Container.styled';
import { Section } from './styledApp/Section.styled';

import user from '/GidHubProd/REact/goit-react-hw-01-components/src/helpers/profile/user.json';
import data from '/GidHubProd/REact/goit-react-hw-01-components/src/helpers/dataStatistics/data.json';
import friends from '/GidHubProd/REact/goit-react-hw-01-components/src/helpers/friendList/friends.json';
import transactions from '/GidHubProd/REact/goit-react-hw-01-components/src/helpers/transactions/transactions.json';


export const App = () => {
  return (
    <Section>
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
    </Section>
  );
};
