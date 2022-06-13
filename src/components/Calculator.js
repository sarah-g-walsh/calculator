import React from "react";
import { Box } from "grommet";
import GetNumber from "./GetNumber";

export const Calculator = () => {
	return (
		<Box 
            align="center"
            alignSelf="center"
            alignContent="center"
            pad="large"
            background="white"
            gap="small"
            justify="center"
            margin="small"
            round="medium">
                <GetNumber />
		</Box>
	);
};

export default Calculator;