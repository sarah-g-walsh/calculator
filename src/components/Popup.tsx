// component for popup that displays if there is an error with the user's input

import React from "react";
import { Box, Button, Heading, Layer, Text } from "grommet";
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
  //args:
  //  title [string]: title that shows on the popup window
  // message [string]: error message
  // setShowError [boolean]: setter that sets whether or not the popup should display to the user
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
        pad="small"
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
