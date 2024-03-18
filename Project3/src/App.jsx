import { useEffect, useState } from "react";
import "./App.css";
import Dice from "./Components/Dice/Dice";

import StartPage from "./Components/StartPage/StartPage";
import GameStart from "./Components/GameStart/GameStart";
import styled from "styled-components";

function App() {
  const [isStarted, setIsStarted] = useState(
    localStorage.getItem("isStarted") === "true"
  );

  const toggle = () => {
    const newValue = !isStarted;
    setIsStarted(newValue);
    localStorage.setItem("isStarted", newValue.toString());
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("isStarted");
    if (storedValue !== null) {
      setIsStarted(storedValue === "true");
    }
  }, []);

  const [generateNumber, setGenerateNumber] = useState(1); //Dice
  const [selectedNumber, setSelectedNumber] = useState(); //GameStart
  const [error, setError] = useState();
  const [score, setScore] = useState(0);
  const [reset, setReset] = useState();

  const refresh = () => {
    // Reset each state separately
    setGenerateNumber(1);
    setSelectedNumber(undefined);
    setScore(0);
    setReset();
    setError("");
  };

  const resetError = () =>
  {
    setError("");
  }

  //Dice
  const number = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const currentDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const randomNumber = number(1, 7);
    setGenerateNumber((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetHandle = () => {
    setReset(setScore(0));
  };

  return (
    <Main>
      {isStarted ? (
        <>
          <GameStart
            error={error}
            score={score}
            togglePage={toggle}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            refresh={refresh}
          />
          <Dice
            resetError={resetError}
            resetScore={resetHandle}
            generateNumber={generateNumber}
            currentDice={currentDice}
          />
        </>
      ) : (
        <StartPage togglePage={toggle} />
      )}
    </Main>
  );
}

export default App;

const Main = styled.div`
  margin-top: 50px;
`;
