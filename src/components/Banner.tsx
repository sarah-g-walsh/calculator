// banner component for the application
// contains a title and a link to github

import React from "react";
import { Header, Anchor, Heading, Box } from "grommet";
import { Github } from "grommet-icons";

const Banner: React.FC = (): React.ReactElement => {
  return (
    <Header
      elevation="small"
      background="brand"
      pad="medium"
      height="xsmall"
      animation="fadeIn"
      direction="row"
    >
      <Box direction="row" align="center">
        <Heading level="2" color="text-strong">
          Calculator
        </Heading>
      </Box>
      <Anchor
        label="GitHub"
        href="https://github.com/sarah-g-walsh/noughts-and-crosses"
        color="text-strong"
        icon={<Github />}
      />
    </Header>
  );
};

export default Banner;
