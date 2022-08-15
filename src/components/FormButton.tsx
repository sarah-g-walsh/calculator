// component for calculator buttons

import React from "react";
import { Box, Button } from "grommet";

interface FormButtonProps {
  label: string;
  handler: () => void;
  gridArea: string;
  primary: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({
  label,
  handler,
  gridArea,
  primary,
}): React.ReactElement => {
  // args:
  //  label [string]: label for button
  // handler [function]: handles the click of the button
  // gridArea [string]: sets the grid area that the button will appear on the page
  // primary [boolean]: dictates if the button is a primary button or not
  return (
    <Box
      align="center"
      pad="small"
      direction="row"
      gap="xsmall"
      gridArea={gridArea}
    >
      <Button
        label={label}
        hoverIndicator={primary ? "white" : false}
        primary={primary}
        onClick={handler}
      />
    </Box>
  );
};

export default FormButton;
