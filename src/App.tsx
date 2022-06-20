import React from "react";
import { Box, Grommet } from "grommet";
import Theme from "./theme";

import Banner from "./components/Banner";
import Calculator from "./components/Calculator/Calculator";

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <Grommet theme={Theme} full={true}>
        <Box gap="medium">
          <Banner />
          <Calculator />
        </Box>
      </Grommet>
    </div>
  );
}

export default App;
