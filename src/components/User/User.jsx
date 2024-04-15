import PropTypes from 'prop-types';

import { Profile } from '../Profile/Profile';
import { UserStyled } from './User.styled';

export const User = ({ userData }) => {
  return (
    <UserStyled>
      <Profile item={userData} />
    </UserStyled>
  );
};

User.propTypes = {
  userData: PropTypes.shape().isRequired,
};
