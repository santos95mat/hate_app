import styled from "styled-components";

export const StyledChaser = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  padding: 1%;
  overflow: auto;

  div#container {
    gap: 6px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    article {
      border-radius: 5px;
      width: 100%;
      height: 8vh;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      cursor: pointer;

      :hover {
        background-color: rgba(0, 0, 0, 0.5);
      }

      div.foto {
        width: 6vh;
        height: 6vh;
        border-radius: 3vh;
        background-color: rgba(0, 0, 0);
        margin-left: 1vh;
        margin-right: 1vh;
      }

      div.chaserDados {
        display: flex;
        flex-direction: column;

        span {
          font-size: 12px;
        }
      }
    }
  }
`;
