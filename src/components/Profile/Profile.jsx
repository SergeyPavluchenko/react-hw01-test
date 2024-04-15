import PropTypes from 'prop-types';
import {
  ProfileStyled,
  Img,
  Description,
  Name,
  Stats,
  StatsInfo,
  Quantity,
  Label,
  Tag,
  Location,
} from './Profile.styled';

export const Profile = ({
  item: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileStyled class="profile">
      <Description class="description">
        <Img src={avatar} alt="User avatar" class="avatar" width="340" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsInfo>
          <Label class="label">Followers</Label>
          <Quantity class="quantity">{followers}</Quantity>
        </StatsInfo>
        <StatsInfo>
          <Label class="label">Views</Label>
          <Quantity class="quantity">{views}</Quantity>
        </StatsInfo>
        <StatsInfo>
          <Label class="label">Likes</Label>
          <Quantity class="quantity">{likes}</Quantity>
        </StatsInfo>
      </Stats>
    </ProfileStyled>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
