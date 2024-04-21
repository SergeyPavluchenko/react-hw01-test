import styled from 'styled-components';

export const SectionStyled = styled.section`
  display: flex;
  padding: 8px 0;
  margin: 16px;
  justify-content: center;
`;

export const UlStyle = styled.ul`
  width: 340px;
  padding: 0;
`;

export const LiStyle = styled.li`
  margin-bottom: 8px;
  list-style: none;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  padding-left: 60px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  height: 60px;
`;

export const Status = styled.span`
  background-color: ${props => {
    return props.online ? '#27cc14' : '#e0040f';
  }};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 15px;
  margin-top: 15px;
`;

export const ImgStyle = styled.img`
  margin-right: 10px;
  display: block;
  object-fit: contain;
`;
