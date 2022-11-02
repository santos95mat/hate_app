import styled from "styled-components";

export const RegisterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 16px 24px 16px;
  width: 100vw;
  max-width: 320px;
  background-color: rgba(24, 25, 26, 0.5);
  border-radius: 5px;

  div {
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    h2 {
      font-size: 32px;
      margin-bottom: 18px;
      color: rgba(255, 255, 255, 1);
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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

      select {
        border-radius: 5px;
        padding: 8px;
        width: 98%;
        border: none;
        outline: none;
        background-color: rgba(255, 255, 255, 0.3);
        font-size: 16px;

        ::placeholder {
          color: black;
        }
      }

      div {
        position: relative;

        img {
          right: 16px;
          position: absolute;
          width: 16px;
          cursor: pointer;
          transition: 0.3s ease;

          :hover {
            transform: scale(1.2);
          }
        }
      }
    }

    a {
      margin-top: 12px;
    }
  }
`;
