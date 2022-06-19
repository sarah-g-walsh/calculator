import React, { useState } from "react";
import { Box, Button, Heading, Grid } from "grommet";
import { GRID_AREAS, GRID_COLUMNS, GRID_ROWS } from "./Calculator.styles";
import Popup from "../Popup";

export const Calculator: React.FC = (): React.ReactElement => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
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
      setFirstNumber(firstNumber + digit);
    } else {
      setSecondNumber(secondNumber + digit);
    }
  };

  const handleOperator = (selected_operator: string): void => {
    setOperator(selected_operator);
  };

  const handleClear = (): void => {
    setOperator("");
    setFirstNumber("");
    setSecondNumber("");
  };

  const handleSubmit = (): void => {
    if (operator === "" || secondNumber === "") {
      setShowError(true);
    } else {
      let result: string;
      switch (operator) {
        case "+":
          result = (Number(firstNumber) + Number(secondNumber)).toString();
          break;
        case "-":
          result = (Number(firstNumber) - Number(secondNumber)).toString();
          break;
        case "x":
          result = (Number(firstNumber) * Number(secondNumber)).toString();
          break;
        case "÷":
          result = (Number(firstNumber) / Number(secondNumber)).toString();
          break;
        default:
          result = "Error";
      }

      setFirstNumber(result);
      setSecondNumber("");
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
          <Heading
            textAlign="center"
            level="2"
          >{`${firstNumber} ${operator} ${secondNumber}`}</Heading>
        </Box>

        {DIGITS.map((digit) => {
          return (
            <Box
              align="center"
              pad="small"
              direction="row"
              gap="xsmall"
              gridArea={digit.name}
            >
              <Button
                label={digit.sign}
                onClick={() => handleDigit(digit.sign)}
              />
            </Box>
          );
        })}

        {OPERATORS.map((operator) => {
          return (
            <Box
              align="center"
              pad="small"
              direction="row"
              gap="xsmall"
              gridArea={operator.name}
            >
              <Button
                label={operator.sign}
                onClick={() => handleOperator(operator.sign)}
              />
            </Box>
          );
        })}

        <Box
          align="center"
          pad="small"
          direction="row"
          gap="xsmall"
          gridArea="equals"
        >
          <Button
            label={"="}
            hoverIndicator="white"
            primary={true}
            onClick={() => handleSubmit()}
          />
        </Box>
        <Box
          align="center"
          pad="small"
          direction="row"
          gap="xsmall"
          gridArea="clear"
        >
          <Button label={"AC"} onClick={() => handleClear()} />
        </Box>
      </Grid>
      {showError && (
        <Popup
          title="Error"
          message="Please enter a number and/or operator."
          setShowError={setShowError}
        />
      )}
    </Box>
  );
};

export default Calculator;
