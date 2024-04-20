import styled from 'styled-components';

export const StatisticsStyled = styled.section`
  display: flex;
  justify-content: center;
  padding: 8px 0;
  margin: 16px;
`;

export const StatisticsBlock = styled.div`
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
  width: 340px;
  /* height: 150px; */
  height: 100%;
  background-color: white;
  display: block;
  border-radius: 4px;
  border: 1px solid black;
`;
export const NameBlock = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
`;

export const UnorderedListBlock = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0px;
  height: 60px;
  margin: 0;
`;

export const ListBlock = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: center;
  width: 100%;
`;
