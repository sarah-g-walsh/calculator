import React from "react";
import { Box, Layer, Text, Button, Heading } from "grommet";
import { Close } from "grommet-icons";

const Popup = ({ title, message, setShowError }) => {
    return (
        <Layer
            onEsc={() => setShowError(false)}
            onClickOutside={() => setShowError(false)}
            margin="xsmall"
        >
            <Button
                icon={<Close />}
                onClick={() => setShowError(false)}
                pad="small"
                alignSelf="end"
                gap="xxsmall"
                justify="end"
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
                <Heading level="2" alignSelf="start">{title}</Heading>
                <Text>{message}</Text>
            </Box>
        </Layer>
    );
};

export default Popup;
