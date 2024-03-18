import React, { useState } from "react";
import styled from "styled-components";
import styles from "../Buttons/Button.module.css";

const Dice = ({ resetError, resetScore, generateNumber, currentDice }) => {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(!visible);
  };

  const handleReset = () => {
    resetScore();
    resetError();
  };

  return (
    <DiceBox>
      {<img onClick={currentDice} src={`/images/dice_${generateNumber}.png`} />}
      <p>Click Dice To Roll</p>

      <div className={`${styles.text} dice`}>
        <button className={styles.dice_btn} onClick={handleReset}>
          Reset
        </button>
        <button className={styles.dice_btn} onClick={show}>
          Show Result
        </button>
      </div>

      <ShowRules visible={visible} className="rules">
        <h1>How to play dice game</h1>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            after click on dice if selected number is equal to dice number you
            will get same point as dices
          </li>
          <li>if you get wrong guess then 2 point will be deducted </li>
        </ul>
      </ShowRules>
    </DiceBox>
  );
};

export default Dice;

const DiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  img {
    cursor: pointer;
    width: 200px;
    height: 200px;
  }

  p {
    font-size: 24px;
    font-weight: bold;
  }

  .dice {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const ShowRules = styled.div`
  /* opacity: 0.6; */
  margin-bottom: 50px;
  max-width: 1000px;
  display: ${(props) => (props.visible ? "block" : "none")};

  h1 {
    text-align: center;
  }

  ul {
    width: 60%;
    margin: 10px auto;
    font-size: 20px;
  }
`;
