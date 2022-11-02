import styled, { css } from "styled-components";

interface ButtonProps {
  green?: boolean;
  google?: boolean;
  black?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  border-radius: 5px;
  border: 0;
  outline: 0;
  width: 98%;
  padding: 8px;
  cursor: pointer;
  color: white;
  font-size: 16px;

  ${(props) =>
    props.green &&
    css`
      background-color: rgba(23, 113, 16, 1);

      :hover {
        background-color: rgba(23, 113, 16, 0.9);
      }
    `}
  ${(props) =>
    props.black &&
    css`
      background-color: rgba(24, 25, 26, 0.8);

      :hover {
        background-color: rgba(24, 25, 26, 1);
      }
    `};
`;

export default StyledButton;
