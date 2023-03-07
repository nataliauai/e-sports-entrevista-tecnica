import styled from "styled-components";

export const DivTeam = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;

  h1 {
    color: var(--color-primary);
    text-align: center;
    margin: 20px 0;
  }

  h3 {
    text-align: center;
  }

  .contentTeam {
    height: 100%;
    width: 30%;
  }

  .buttom1 {
    background-color: var(--color-primary);
    border: none;
    text-align: center;
    text-decoration: none;
    color: var(--color-grey0);
    border-radius: 4px;
    width: 92%;
    height: 40px;
    margin: 25px 13px;
  }

  .buttom2 {
    background-color: var(--color-grey1);
    border: none;
    text-align: center;
    text-decoration: none;
    color: var(--color-grey0);
    border-radius: 4px;
    width: 92%;
    height: 40px;
    margin: 25px 13px;
    padding-top: 10px;
  }
  .account {
    text-align: center;
  }
  .error {
    margin-left: 10px;
    color: var(--color-grey1);
    font-size: 12px;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 22px;
    }

    header {
      width: 90%;
    }

    .contentTeam {
      width: 100%;
      padding: 10px;
      margin-left: 15px;
      font-size: 14px;
    }

    button {
      font-size: 14px;
    }
  }
`;
