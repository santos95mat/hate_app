import styled from "styled-components";

export const AuthDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15vh;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(23, 113, 16, 1);

  h1 {
    font-size: 42px;
    margin-top: 5vh;
    color: rgba(255, 255, 255, 0.8);
  }

  p {
    margin-bottom: 5vh;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }

  a {
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.8);

    :hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
