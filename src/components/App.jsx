import { User } from './User';
import user from '../data/user.json';

export const App = () => {
  return (
    <div>
      <User userData={user} />
    </div>
  );
};
