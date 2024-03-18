import React, { useState } from "react";
import Button from "../Buttons/Button";
import styled from "styled-components";

const GameStart = ({
  error,
  score,
  togglePage,
  selectedNumber,
  setSelectedNumber,
  refresh,
}) => {
  const arr = [1, 2, 3, 4, 5, 6];

  const HandleLog = () => {
    togglePage();
    refresh();
  };

  return (
    <>
      <Header>
        <div className="total">
          <h1>{score}</h1>
          <p>Total Points</p>
        </div>

        <div className="numbers">
          <p className="error">{error}</p>
          {arr.map((index, value) => (
            <Numbers
              isSelected={index === selectedNumber}
              key={value}
              onClick={() => setSelectedNumber(index)}
            >
              {/* {console.log(arr[value])} */}
              {index}
            </Numbers>
          ))}
          <p className="select_number">Select Number</p>
        </div>
      </Header>

      <StyleButton>
        <Button className="log" click={HandleLog} log="LOG OUT" />
      </StyleButton>
    </>
  );
};

export default GameStart;

const Header = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  .total {
    line-height: 50px;
  }

  .total h1 {
    font-size: 100px;
    font-weight: medium;
  }

  .total p {
    font-size: 24px;
    font-weight: small;
  }

  .numbers {
    position: relative;
    margin-bottom: 40px;
  }

  .numbers .select_number {
    position: absolute;
    right: 0;
    top: 50px;
    font-size: 24px;
    font-weight: bold;
  }

  .numbers .error {
    position: absolute;
    top: -50px;
    right: 0;
    color: red;
    font-size: 24px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 20px;

    .numbers .select_number {
      top: 30px;
    }
  }
`;

const Numbers = styled.span`
  border: 1px solid black;
  padding: 15px 25px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin-left: 24px;

  background: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  transition: ${(props) =>
    props.isSelected ? "2s background ease" : ".8s background ease"};

  @media screen and (max-width: 800px) {
    padding: 5px 10px;
  }
`;
const StyleButton = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
