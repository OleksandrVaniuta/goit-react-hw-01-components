import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  text-decoration: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  text-decoration: none;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #abc5d1;
  border: 0.5px solid #000000;
  &::marker {
    display: none;
  }
  span {
    display: block;
  }
`;
