import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #ffffff;
  margin-top: 20px;
`;

export const StatTitle = styled.h2`
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  text-decoration: none;
  display: flex;
`;

export const StatItem = styled.li`
  width: calc(100% / 4);
  text-decoration: none;
  span {
    display: block;
  }
  border: 1px solid #000000;
  color: #ffffff;
`;
