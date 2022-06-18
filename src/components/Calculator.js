import React from "react";
import { Box } from "grommet";
import GetNumber from "./GetNumber";

export const Calculator = () => {
	return (
		<Box 
            align="center"
            background="white"
            alignSelf="center"
            alignContent="center"
            pad="xlarge"
            gap="medium"
            justify="center"
            margin="small"
            round="medium"
            elevation="small"
            overflow="auto"
            direction="column"
            width="large"
            >
                <GetNumber />
		</Box>
	);
};

export default Calculator;