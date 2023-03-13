import styled from '@emotion/styled';

export const TrstnHist = styled.table`
  background-color: #ffffff;
  border-collapse: collapse;
  border: 3px solid #ffffff;
  margin-left: 20px;
`;

export const Head = styled.thead`
  border: 3px solid #ffffff;
  background-color: #0096d1;
  color: #ffffff;
  width: 100%;
  tr,
  th {
    border: 1px solid #ffffff;
    width: calc(100% / 3);
  }
`;

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
