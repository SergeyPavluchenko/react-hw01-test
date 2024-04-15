import { User } from './User/User';
import user from '../data/user.json';
import { GlobalStyle } from './GlobalStyled';
import { Layout } from './layout/layout';

export const App = () => {
  return (
    <Layout>
      <User userData={user} />
      <GlobalStyle />
    </Layout>
  );
};
