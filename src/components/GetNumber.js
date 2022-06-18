import React, { useState } from "react";
import { Box, Button, Heading, Layer, Text, Grid } from "grommet";
import { Close } from "grommet-icons";

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
		<Box align="center" justify="center" alignContent="center" pad="xsmall" direction="row" gap="xsmall">
			<Grid
				rows={['xsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall']}
				columns={['xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall']}
				gap="medium"
				areas={[
					{ name: 'header', start: [0, 0], end: [4, 0] },
					{ name: 'numberseven', start: [0, 1], end: [0, 1]},
					{ name: 'numbereight', start: [1, 1], end: [1, 1] },
					{ name: 'numbernine', start: [2, 1], end: [2, 1] },
					{ name: 'divide', start: [3, 1], end: [3, 1] },
					{ name: 'numberfour', start: [0, 2], end: [0, 2] },
					{ name: 'numberfive', start: [1, 2], end: [1, 2] },
					{ name: 'numbersix', start: [2, 2], end: [2, 2] },
					{ name: 'multiply', start: [3, 2], end: [3, 2] },
					{ name: 'numberone', start: [0, 3], end: [0, 3] },
					{ name: 'numbertwo', start: [1, 3], end: [1, 3] },
					{ name: 'numberthree', start: [2, 3], end: [2, 3] },
					{ name: 'subtract', start: [3, 3], end: [3, 3] },
					{ name: 'numberzero', start: [0, 4], end: [0, 4] },
					{ name: 'decimalpoint', start: [1, 4], end: [1, 4] },
					{ name: 'equals', start: [2, 4], end: [2, 4] },
					{ name: 'add', start: [3, 4], end: [3, 4] },
					{ name: 'clear', start: [4, 1], end: [4, 4] },
				]}
			>
				<Box 
					align="center"
					alignContent= "center" 
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
					<Heading textAlign="center" level="2">{numberOne}{operator}{numberTwo}</Heading>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="numberseven">
					<Button label={'7'} onClick={() => handleInput('7')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="numbereight">
					<Button label={'8'} onClick={() => handleInput('8')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="numbernine">
					<Button label={'9'} onClick={() => handleInput('9')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="divide">
					<Button label={'÷'} onClick={() => handleClick(' ÷ ')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="numberfour">
					<Button label={'4'} onClick={() => handleInput('4')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="numberfive">
					<Button label={'5'} onClick={() => handleInput('5')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="numbersix">
					<Button label={'6'} onClick={() => handleInput('6')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="multiply">
					<Button label={'×'} onClick={() => handleClick(' × ')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="numberone">
					<Button label={'1'} onClick={() => handleInput('1')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="numbertwo">
					<Button label={'2'} onClick={() => handleInput('2')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="numberthree">
					<Button label={'3'} onClick={() => handleInput('3')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="subtract">
					<Button label={'-'} onClick={() => handleClick(' - ')}/>
				</Box>
				<Box align="center" pad="small" height="xxsmall" direction="row" gap="xsmall" gridArea="numberzero">
					<Button alignSelf="center" alignContent="center" label={'0'} onClick={() => handleInput('0')}/>
				</Box>
				<Box align="center" pad="small" height="xxsmall" direction="row" gap="xsmall" gridArea="decimalpoint">
					<Button justify="center" gap="large" alignSelf="center" alignContent="center" label={'.'} onClick={() => handleInput('.')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="equals">
					<Button label={'='} hoverIndicator="white" primary="true" onClick={() => handleSubmit()}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="add">
					<Button label={'+'} onClick={() => handleClick(' + ')}/>
				</Box>
				<Box align="center" pad="small" direction="row" gap="xsmall" gridArea="clear">
					<Button label={'AC'} onClick={() => handleClear()}/>
				</Box>
			</Grid>
			{ show && (
			<Layer
				onEsc={() => setShow(false)}
				onClickOutside={() => setShow(false)}
				margin="xsmall"
			>
				<Button
					icon={<Close />}
					onClick={() => setShow(false)}
					pad="small"
					alignSelf="end"
					gap="xxsmall"
					justify="end"
					marggin="none"
				/>
				<Box
					align="center"
					alignSelf="center"
					justify="center"
					pad="medium"
					elevation="xsmall"
					alignContent="center"
					gap="xxxsmall"
				>
					<Box width="medium"/>
					<Text>Error. Please enter a number and/ or operator.</Text>
				</Box>
			</Layer>
			)}
		</Box>	
	);
};

export default GetNumber;