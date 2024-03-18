import React from "react";
import styled from "styled-components";
import Button from "../Buttons/Button";

const StartPage = ({ togglePage }) => {


    

  return (
    <DiceImage className="container">
      <div className="dice_image">
        <img src="/images/dices 1.png" alt="dices" />
      </div>
      <div className="text">
        <h1>DICE GAME</h1>
        <Button click={togglePage} start="PLAY NOW" />
      </div>
    </DiceImage>
  );
};

export default StartPage;

const DiceImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;

  .dice_image img {
    max-width: 600px;
    object-fit: cover;
  }

  .text h1 {
    font-size: 96px;
    font-weight: bold;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-end;

    .dice_image img {
      object-fit: contain;
      width: 100%;
      height: 300px;
    }

    .text {
      width: 100%;
    }

    .text h1 {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
    }
  }
`;
