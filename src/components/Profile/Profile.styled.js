const { default: styled } = require('styled-components');

export const ProfileStyled = styled.div`
  width: 340px;
  background-color: white;
  display: block;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 240px;
  height: 240px;
  padding-top: 20px;
`;

export const Name = styled.span`
  font-size: 32px;
  font-weight: 800;
  margin-top: 16px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  padding: 0;
  margin-bottom: 0;
`;

export const StatsInfo = styled.li`
  align-items: center;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.33333%;
  background-color: #e8e8e8;
`;

export const Label = styled.span`
  padding-top: 15px;
  padding-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 800;
  padding-bottom: 15px;
  padding-top: 5px;
`;

export const Tag = styled.p`
  color: gray;
`;

export const Location = styled.p`
  color: gray;
`;
