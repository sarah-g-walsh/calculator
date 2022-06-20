import React, { useState } from "react";
import { Box, Heading, Grid } from "grommet";
import { GRID_AREAS, GRID_COLUMNS, GRID_ROWS } from "./Calculator.styles";
import Popup from "../Popup";
import FormButton from "../FormButton";

export const Calculator: React.FC = (): React.ReactElement => {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [operator, setOperator] = useState("");
  const [showError, setShowError] = useState(false);

  const DIGITS = [
    { sign: "0", name: "numberzero" },
    { sign: "1", name: "numberone" },
    { sign: "2", name: "numbertwo" },
    { sign: "3", name: "numberthree" },
    { sign: "4", name: "numberfour" },
    { sign: "5", name: "numberfive" },
    { sign: "6", name: "numbersix" },
    { sign: "7", name: "numberseven" },
    { sign: "8", name: "numbereight" },
    { sign: "9", name: "numbernine" },
    { sign: ".", name: "decimalpoint" },
  ];

  const OPERATORS = [
    { sign: "+", name: "add" },
    { sign: "-", name: "subtract" },
    { sign: "x", name: "multiply" },
    { sign: "÷", name: "divide" },
  ];

  const handleDigit = (digit: string): void => {
    if (operator === "") {
      setNumberOne(numberOne + digit);
    } else {
      setNumberTwo(numberTwo + digit);
    }
  };

  const handleOperator = (selected_operator: string): void => {
    setOperator(selected_operator);
  };

  const handleClear = (): void => {
    setOperator("");
    setNumberOne("");
    setNumberTwo("");
  };

  const handleSubmit = (): void => {
    if (operator === "" || numberTwo === "") {
      setShowError(true);
    } else {
      let result: string;
      switch (operator) {
        case "+":
          result = (Number(numberOne) + Number(numberTwo)).toString();
          break;
        case "-":
          result = (Number(numberOne) - Number(numberTwo)).toString();
          break;
        case "x":
          result = (Number(numberOne) * Number(numberTwo)).toString();
          break;
        case "÷":
          result = (Number(numberOne) / Number(numberTwo)).toString();
          break;
        default:
          result = "Error";
      }

      setNumberOne(result);
      setNumberTwo("");
      setOperator("");
    }
  };

  return (
    <Box
      align="center"
      justify="center"
      alignContent="center"
      alignSelf="center"
      pad="xsmall"
      margin="small"
      gap="xsmall"
      direction="row"
      background="white"
      elevation="small"
      round="medium"
      width="500px"
      height="500px"
    >
      <Grid
        rows={GRID_ROWS}
        columns={GRID_COLUMNS}
        areas={GRID_AREAS}
        gap="medium"
      >
        <Box
          align="center"
          alignContent="center"
          alignSelf="center"
          pad="xxsmall"
          direction="column"
          gap="xsmall"
          gridArea="header"
          basis="medium"
          justify="center"
          margin="xsmall"
          overflow="visible"
        >
          <Heading textAlign="center" level="2">
            {`${numberOne} ${operator} ${numberTwo}`}
          </Heading>
        </Box>

        {DIGITS.map((digit) => {
          return (
            <FormButton
              label={digit.sign}
              handler={(): void => handleDigit(digit.sign)}
              gridArea={digit.name}
              primary={false}
              key={digit.sign}
            />
          );
        })}

        {OPERATORS.map((operator) => {
          return (
            <FormButton
              label={operator.sign}
              handler={(): void => handleOperator(operator.sign)}
              gridArea={operator.name}
              primary={false}
              key={operator.sign}
            />
          );
        })}

        <FormButton
          label="="
          handler={handleSubmit}
          gridArea="equals"
          primary={true}
        />
        <FormButton
          label="AC"
          handler={handleClear}
          gridArea="clear"
          primary={false}
        />
      </Grid>

      {showError && (
        <Popup
          title="Error"
          message="Please enter a number and/ or operator."
          setShowError={setShowError}
        />
      )}
    </Box>
  );
};

export default Calculator;
