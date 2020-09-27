import React from "react";
import { subtractRationalsFromUserInput } from "utils/RationalHelpers";
import Calculator from "components/Calculator";

const Subtract = () => {
  const props = {
    calculateFromUserInput: subtractRationalsFromUserInput,
    title: "Subtract",
    subtitle:
      "Fill in the numerator and denominator of two rational numbers (fractions) below, then click the Calculate button to see the result",
    sign: "-",
  };
  return <Calculator {...props} />;
};

export default Subtract;
