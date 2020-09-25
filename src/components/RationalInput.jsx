import React from "react";
import { Form } from "react-bootstrap";

const RationalInput = ({ readOnly, index, handleChange, value }) => {
  return (
    <>
      <Form.Control
        className="text-center"
        readOnly={readOnly}
        plaintext={readOnly}
        type={readOnly ? "text" : "number"}
        placeholder="numerator"
        onChange={(e) => handleChange(index, "numerator", e.target.value)}
        value={value.numerator}
      />
      <hr style={{ border: "2px solid green" }} />
      <Form.Control
        className="text-center"
        readOnly={readOnly}
        plaintext={readOnly}
        type={readOnly ? "text" : "number"}
        placeholder="denominator"
        onChange={(e) => handleChange(index, "denominator", e.target.value)}
        value={value.denominator}
      />
    </>
  );
};

export default RationalInput;
