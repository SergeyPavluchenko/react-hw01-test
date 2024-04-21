import profile from '../data//Profile.json';
import statistic from '../data/statistic.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { GlobalStyle } from './GlobalStyled';
import { Layout } from './layout/layout';
import { User } from './User/User';
import { Statistics } from './Statistic/Statistics';
import { Friends } from './Friends/Friends';
import { TransactionsHistory } from './Transactions/TransactionsHistory.js';

export const App = () => {
  return (
    <Layout>
      <User userData={profile} />
      <Statistics datas={statistic} />
      <Friends friends={friends} />
      <TransactionsHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
