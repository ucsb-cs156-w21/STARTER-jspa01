import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "main/components/Calculator";

describe("Calculator tests", () => {
  test("(1 pts) renders a calculator component with the correct test id", () => {
    const { getByTestId } = render(<Calculator />);
    const calculator = getByTestId("calculator");
    expect(calculator).toBeInTheDocument();
  });

  test("(2 pts) there are 3 numerator fields", () => {
    const { getAllByPlaceholderText } = render(<Calculator />);
    const numeratorFields = getAllByPlaceholderText("numerator");
    expect(numeratorFields.length).toBe(3);
  });
  test("(2 pts) there are 3 denominator fields", () => {
    const { getAllByPlaceholderText } = render(<Calculator />);
    const denominatorFields = getAllByPlaceholderText("denominator");
    expect(denominatorFields.length).toBe(3);
  });

  test("(2 pts) entering two rationals and clicking the calculate button will call the calculateFromUserInput prop", () => {
    const calculate = jest.fn();
    calculate.mockReturnValue({
      numerator: 5,
      denominator: 6,
    });
    const { getAllByPlaceholderText, getByText } = render(
      <Calculator calculateFromUserInput={calculate} />
    );

    const numeratorFields = getAllByPlaceholderText("numerator");
    const denominatorFields = getAllByPlaceholderText("denominator");

    userEvent.type(numeratorFields[0], "1");
    userEvent.type(numeratorFields[1], "2");
    userEvent.type(denominatorFields[0], "3");
    userEvent.type(denominatorFields[1], "4");

    const calculateButton = getByText("Calculate");
    userEvent.click(calculateButton);

    expect(calculate).toHaveBeenCalledTimes(1);
    expect(calculate).toHaveBeenCalledWith([
      {
        numerator: "1",
        denominator: "3",
      },
      {
        numerator: "2",
        denominator: "4",
      },
    ]);
  });

  test("(2 pts) an error caused in the calculate function will show as an error to the user", () => {
    const calculate = jest.fn();
    calculate.mockImplementationOnce(() => {
      throw new Error("Error: something went wrong");
    });
    const { getByText } = render(
      <Calculator calculateFromUserInput={calculate} />
    );

    const calculateButton = getByText("Calculate");
    userEvent.click(calculateButton);

    expect(calculate).toHaveBeenCalledTimes(1);
    const error = getByText("Error: something went wrong");
    expect(error).toBeInTheDocument();
  });

  test("(1 pts) passing title renders the title", () => {
    const { getByText } = render(<Calculator title="Cool Title" />);
    const title = getByText("Cool Title");
    expect(title).toBeInTheDocument();
  });

  test("(1 pts) passing subtitle renders the subtitle", () => {
    const content = "This is the subtitle";
    const { getByText } = render(<Calculator subtitle={content} />);
    const subtitle = getByText(content);
    expect(subtitle).toBeInTheDocument();
  });

  test("(1 pts) passing the sign renders the sign", () => {
    const content = "+";
    const { getByText } = render(<Calculator sign={content} />);
    const sign = getByText(content);
    expect(sign).toBeInTheDocument();
  });
});
