import React, { useState, useReducer } from "react";
import {
  addRationalsFromUserInput,
  subtractRationalsFromUserInput,
  multiplyRationalsFromUserInput,
  divideRationalsFromUserInput,
} from "utils/RationalHelpers";

const Calculator = () => {
  const [result, setResult] = useState("No result yet.");
  const [userInput, setUserInput] = useReducer(
    (state, newState) => {
      // Return the current state updated with the new values in newState
      return {
        ...state,
        ...newState,
      };
    },
    {
      firstNumerator: "",
      firstDenominator: "",
      secondNumerator: "",
      secondDenominator: "",
    }
  );

  const handleFormChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setUserInput({
      [name]: value,
    });
  };

  const onAddClick = (event) => {
    event.preventDefault();

    const result = addRationalsFromUserInput(userInput);
    setResult(result);
  };

  const onSubtractClick = (event) => {
    event.preventDefault();

    const result = subtractRationalsFromUserInput(userInput);
    setResult(result);
  };

  const onMultiplyClick = (event) => {
    event.preventDefault();
    const result = multiplyRationalsFromUserInput(userInput);
    setResult(result);
  };

  const onDivideClick = (event) => {
    event.preventDefault();
    const result = divideRationalsFromUserInput(userInput);
    setResult(result);
  };

  return (
    <div data-testid="calculator">
      <form>
        <div>
          <input
            name="firstNumerator"
            type="number"
            placeholder="first numerator"
            onChange={handleFormChange}
            value={userInput.firstNumerator}
          />
          <input
            name="firstDenominator"
            type="number"
            placeholder="first denominator"
            onChange={handleFormChange}
            value={userInput.firstDenominator}
          />
        </div>
        <div>
          <input
            name="secondNumerator"
            type="number"
            placeholder="second numerator"
            onChange={handleFormChange}
            value={userInput.secondNumerator}
          />
          <input
            name="secondDenominator"
            type="number"
            placeholder="second denominator"
            onChange={handleFormChange}
            value={userInput.secondDenominator}
          />
        </div>
        <div>
          <button onClick={onAddClick}>Add</button>
          <button onClick={onSubtractClick}>Subtract</button>
          <button onClick={onMultiplyClick}>Multiply</button>
          <button onClick={onDivideClick}>Divide</button>
        </div>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
