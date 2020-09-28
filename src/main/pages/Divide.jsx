import React from "react";
import { divideRationalsFromUserInput } from "main/utils/RationalHelpers";
import Calculator from "main/components/Calculator";

const Divide = () => {
  const props = {
    calculateFromUserInput: divideRationalsFromUserInput,
    title: "Divide",
    subtitle:
      "Fill in the numerator and denominator of two rational numbers (fractions) below, then click the Calculate button to see the result",
    sign: "/",
  };
  return <Calculator {...props} />;
};

export default Divide;
