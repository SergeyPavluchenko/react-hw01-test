import PropTypes from 'prop-types';

import { Profile } from './Profile';

export const User = ({ userData }) => {
  return (
    <div>
      <Profile item={userData} />
    </div>
  );
};

User.propTypes = {
  userData: PropTypes.shape().isRequired,
};
