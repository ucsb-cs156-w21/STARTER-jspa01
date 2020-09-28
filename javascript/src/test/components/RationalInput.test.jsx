import React from "react";
import { render } from "@testing-library/react";
import RationalInput from "main/components/RationalInput";
import userEvent from "@testing-library/user-event";

describe("RationalInput tests", () => {
  const baseValue = {
    numerator: "",
    denominator: "",
  };
  test("renders without crashing", () => {
    render(<RationalInput value={baseValue} />);
  });

  test("calls handleChange when form inputs are changed", () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render(
      <RationalInput value={baseValue} index={5} handleChange={handleChange} />
    );
    const numeratorField = getByPlaceholderText("numerator");
    const denominatorField = getByPlaceholderText("denominator");

    userEvent.type(numeratorField, "1");
    userEvent.type(denominatorField, "2");

    expect(handleChange).toBeCalledTimes(2);
    expect(handleChange.mock.calls[0]).toEqual([5, "numerator", "1"]);
    expect(handleChange.mock.calls[1]).toEqual([5, "denominator", "2"]);
  });

  test("can't edit while in readOnly mode", () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render(
      <RationalInput
        readOnly
        value={baseValue}
        index={5}
        handleChange={handleChange}
      />
    );
    const numeratorField = getByPlaceholderText("numerator");
    const denominatorField = getByPlaceholderText("denominator");

    userEvent.type(numeratorField, "1");
    userEvent.type(denominatorField, "2");

    expect(handleChange).toBeCalledTimes(0);
  });
});
