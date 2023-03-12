import { Profile } from 'components/profile/profile';
import { Statistics } from './statistic-section/statistics/section';
import * as user from '../data/user.json';
import { Container } from './app.styled';
import stats from '../data/data';
import friends from '../data/friends';
import { FriendList } from './friends/friends-list/friends-list';
import transactionsData from '../data/transactions';
import { Transaction } from './transactions/transactions-box/box';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <Transaction data={transactionsData} />
    </Container>
  );
};
