import styled from "styled-components";

export const SpotList = styled.ul`
  width: 100%;
  display: grid;
  list-style: none;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
`;

export const Spots = styled.li`
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 10px;
    font-size: 24;
    color: #444;
  }

  span {
    margin-top: 5px;
    font-size: 15px;
    color: #999;
  }
`;

export const SpotHeader = styled.header`
  background-image: url(${props => props.image});
  width: 100%;
  height: 120px;
  background-size: cover;
  border-radius: 4px;
`;
