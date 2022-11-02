import styled from "styled-components";

export const StyledProfile = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  position: relative;

  div#capa {
    width: 100%;
    height: 20vh;
    background-color: black;
    border-radius: 5px;
    margin-bottom: 12vh;
  }

  div#foto {
    position: absolute;
    top: 10vh;
    width: 20vh;
    height: 20vh;
    border-radius: 10vh;
    background-color: black;
    border: 0.5vh solid #7c7c7c;
  }

  img {
    cursor: pointer;
    position: absolute;
    width: 20px;
    top: 2%;
    right: 2%;
    transition: 0.3s ease;

    :hover {
      transform: scale(1.1);
    }
  }

  div#user {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  article#details {
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    margin-top: 2vh;
    padding-top: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;

    div {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
  }

  article#publications {
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    padding-top: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;

    p {
      margin-top: 8vh;
      text-align: center;
      font-size: 42px;
    }
  }
`;
