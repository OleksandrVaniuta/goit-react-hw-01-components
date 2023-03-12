import styled from '@emotion/styled';

export const TblBody = styled.tbody`
  border: 3px solid #ffffff;
  tr,
  td {
    border: 1px solid #ffffff;
    width: calc(100% / 3);
  }
  tr:nth-of-type(2n) {
    background-color: #5f6669;
  }
`;
