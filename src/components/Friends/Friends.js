import {
  ImgStyle,
  LiStyle,
  SectionStyled,
  Status,
  UlStyle,
} from './FriendStyled';

export const Friends = ({ friends }) => {
  return (
    <SectionStyled>
      <UlStyle>
        {friends.map(friend => {
          return (
            <LiStyle className="item" key={friend.id}>
              <Status online={friend.isOnline === true}></Status>
              <ImgStyle src={friend.avatar} alt="User avatar" width="48" />
              <p className="name">{friend.name}</p>
            </LiStyle>
          );
        })}
      </UlStyle>
    </SectionStyled>
  );
};
