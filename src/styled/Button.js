import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#24a0ed" : "white")};
  color: ${(props) => (props.primary ? "white" : "#24a0ed")};
  font-size: 1em;
  margin: 1em 0em;
  padding: 0.25em 1em;
  border: 2px solid #24a0ed;
  border-radius: 7px;

  &:hover {
    border: 2px solid #1e3163;
  }
`;
