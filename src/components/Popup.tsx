import React from "react";
import { Box, Layer, Text, Button, Heading } from "grommet";
import { Close } from "grommet-icons";

interface PopupProps {
  title: string;
  message: string;
  setShowError: (value: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({
  title,
  message,
  setShowError,
}): React.ReactElement => {
  return (
    <Layer
      onEsc={() => setShowError(false)}
      onClickOutside={() => setShowError(false)}
      margin="xsmall"
    >
      <Button
        icon={<Close />}
        onClick={() => setShowError(false)}
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
        <Heading level="2" alignSelf="start">
          {title}
        </Heading>
        <Text>{message}</Text>
      </Box>
    </Layer>
  );
};

export default Popup;
