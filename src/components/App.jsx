import { User } from './User/User';
import profile from '../data//Profile.json';
import statistic from '../data/statistic.json';
import { GlobalStyle } from './GlobalStyled';
import { Layout } from './layout/layout';
import { Statistics } from './Statistic/Statistics';

export const App = () => {
  return (
    <Layout>
      <User userData={profile} />
      <Statistics datas={statistic} />
      <GlobalStyle />
    </Layout>
  );
};
