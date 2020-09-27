import React from "react";
import { subtractRationalsFromUserInput } from "utils/RationalHelpers";
import Calculator from "components/Calculator";

const Subtract = () => {
  const props = {
    calculateFromUserInput: subtractRationalsFromUserInput,
    title: "Subtract",
    subtitle: "Something goes here",
    sign: "-",
  };
  return <Calculator {...props} />;
};

export default Subtract;
