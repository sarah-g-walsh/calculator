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
    primary
}): React.ReactElement => {
    return (
        <Box
            align="center"
            pad="small"
            direction="row"
            gap="xsmall"
            gridArea={gridArea}
        >
            <Button label={label} hoverIndicator={primary ? "white": false} primary={primary} onClick={handler} />
        </Box>
    );
};

export default FormButton;