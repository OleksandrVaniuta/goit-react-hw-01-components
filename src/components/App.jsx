import { Container } from './app.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Section';
import { FriendList } from './Friends/Friends-list';
import { Transaction } from './Transactions/Transactions';

import user from '../data/user.json';
import stats from '../data/data';
import friends from '../data/friends';
import transactionsData from '../data/transactions';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <Transaction data={transactionsData} />
    </Container>
  );
};
