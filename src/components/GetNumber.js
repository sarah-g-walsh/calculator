import React, { useState } from "react";
import { Box, Button, Heading, Layer, Text } from "grommet";

export const GetNumber = () => {
	const [numberOne, setNumberOne] = useState("");
	const [numberTwo, setNumberTwo] = useState("");
	const [operator, setOperator] = useState("");
	const [show, setShow] = useState();

	const handleInput = (input) => {
		if (operator === "") {
			setNumberOne(numberOne + input);
		} else {
			setNumberTwo(numberTwo + input);
		}
	};

	const handleClick = (click) => {
		if (operator === "") {
			setOperator(operator + click);
		}	
	};

	const handleClear = () => {
		setOperator("");
		setNumberOne("");
		setNumberTwo("");
	};
 
	const handleSubmit = () => {
		if (operator === "" || numberTwo === "") {
			setShow(true)
		} else if (operator === " + ") {
			setNumberOne(Number(numberOne) + Number(numberTwo));
			setOperator("");
			setNumberTwo("");
		} else if (operator === " - ") {
			setNumberOne(Number(numberOne) - Number(numberTwo));
			setOperator("");
			setNumberTwo("");
		} else if (operator === " × ") {
			setNumberOne(Number(numberOne) * Number(numberTwo));
			setOperator("");
			setNumberTwo("");
		} else {
			setNumberOne(Number(numberOne) / Number(numberTwo));
			setOperator("");
			setNumberTwo("");
		}
	};

	return (
		<Box align="center" pad="xsmall" direction="row" gap="xsmall">
			<Box align="center" pad="xsmall" direction="column" gap="xsmall">
				<Heading level="2" textAlign="center">{numberOne}{operator}{numberTwo}</Heading>
				<Box align="center" pad="small" direction="row" gap="xsmall">
					<Button label={'7'} onClick={() => handleInput('7')}/>
					<Button label={'8'}onClick={() => handleInput('8')}/>
					<Button label={'9'} onClick={() => handleInput('9')}/>
					<Button label={'÷'} onClick={() => handleClick(' ÷ ')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall">
					<Button label={'4'} onClick={() => handleInput('4')}/>
					<Button label={'5'} onClick={() => handleInput('5')}/>
					<Button label={'6'} onClick={() => handleInput('6')}/>
					<Button label={'×'} onClick={() => handleClick(' × ')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall">
					<Button label={'1'} onClick={() => handleInput('1')}/>
					<Button label={'2'} onClick={() => handleInput('2')}/>
					<Button label={'3'} onClick={() => handleInput('3')}/>
					<Button label={'-'} onClick={() => handleClick(' - ')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall">
					<Button label={'0'} onClick={() => handleInput('0')}/>
					<Button label={'.'} onClick={() => handleInput('.')}/>
					<Button label={'='} primary="true" onClick={() => handleSubmit()}/>
					<Button label={'+'} onClick={() => handleClick(' + ')}/>
				</Box>
			</Box>
			<Box align="center" pad="xsmall" direction="column" gap="medium">
				<Button label={'AC'} onClick={() => handleClear()}/>
					{ show && (
					<Layer
						onEsc={() => setShow(false)}
						onClickOutside={() => setShow(false)}
					>
						<Text>Error. Please enter a number and/ or operator.</Text>
						<Button label="Close" onClick={() => setShow(false)} />
					</Layer>
					)}
			</Box>
		</Box>	
	);
};

export default GetNumber;