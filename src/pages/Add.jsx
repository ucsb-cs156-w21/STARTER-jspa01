import React, { useState, useReducer } from "react";
import { addRationalsFromUserInput } from "utils/RationalHelpers";
import { Row, Col, Button } from "react-bootstrap";
import RationalInput from "components/RationalInput";

const Add = () => {
  const [result, setResult] = useState({
    numerator: "",
    denominator: "",
  });
  const [userInput, setUserInput] = useReducer(
    (state, { index, fieldName, value }) => {
      let newState = [...state];
      newState[index][fieldName] = value;
      // Return the current state updated with the new values in newState
      return newState;
    },
    [
      {
        numerator: "",
        denominator: "",
      },
      {
        numerator: "",
        denominator: "",
      },
    ]
  );

  const handleChange = (index, fieldName, value) => {
    setUserInput({ index, fieldName, value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const result = addRationalsFromUserInput(userInput);
    setResult(result);
  };

  return (
    <div data-testid="calculator">
      <h1>Add</h1>
      <p>
        Enter the two fractions you'd like to add on the left and then press the
        button below to add them.
      </p>
      <form onSubmit={handleSubmit}>
        <Row style={{ maxWidth: "75%" }}>
          <Col>
            <RationalInput
              index={0}
              handleChange={handleChange}
              value={userInput[0]}
            />
          </Col>
          <Col
            style={{
              display: "grid",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div>+</div>
          </Col>
          <Col>
            <RationalInput
              index={1}
              handleChange={handleChange}
              value={userInput[1]}
            />
          </Col>
          <Col
            style={{
              display: "grid",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            =
          </Col>
          <Col>
            <RationalInput readOnly value={result} />
          </Col>
        </Row>
        <br />
        <Row>
          <Button type="submit">Add</Button>
        </Row>
      </form>
    </div>
  );
};

export default Add;
