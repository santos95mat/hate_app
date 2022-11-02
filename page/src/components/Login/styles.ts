import styled from "styled-components";

export const LoginSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 16px 24px 16px;
  width: 100vw;
  max-width: 320px;
  background-color: rgba(24, 25, 26, 0.5);
  border-radius: 5px;

  div {
    width: 100%;
    display: flex;
    gap: 12px;
    flex-direction: column;
    align-items: center;

    h2 {
      color: rgba(255, 255, 255, 1);
      font-size: 32px;
      margin-bottom: 16px;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;

      input {
        border-radius: 5px;
        padding: 10px;
        width: 98%;
        border: none;
        outline: none;
        background-color: rgba(255, 255, 255, 0.3);
        font-size: 16px;

        ::placeholder {
          color: black;
        }
      }
    }

    p {
      margin-top: 16px;
      color: rgba(255, 255, 255, 0.8);
    }

    a {
      cursor: pointer;
      color: rgba(255, 255, 255, 0.8);
      text-decoration: underline;

      :hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;
