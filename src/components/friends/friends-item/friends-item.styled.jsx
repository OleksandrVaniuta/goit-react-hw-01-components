import styled from '@emotion/styled';

export const FriendsLi = styled.li`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding-top: 3px;
  padding-bottom: 3px;
  aling-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  vertical-align: middle;
  margin-top: 5px;
  span {
    width: 20px;
    height: 20px;
    margin-top: 14px;
    margin-left: 5px;
    border-radius: 50%;
    background-color: ${props => {
      if (props.status) {
        return '#10d402';
      }
      return '#d10000';
    }};
  }
  img {
    border-radius: 10px;
  }
`;
