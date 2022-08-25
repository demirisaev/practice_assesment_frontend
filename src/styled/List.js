import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    margin-bottom: 7px;
    width:350px;
    padding-left:20px;
  }
}
li:nth-child(odd) {
    color: #fff;
    background-color: green;
}
li:nth-child(even) {
    color: tomato;
    background-color: lightgrey;
}
`;
