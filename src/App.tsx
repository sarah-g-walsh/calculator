import React, { useState } from "react";
import { Box, Grommet, Stack } from "grommet";
import Theme from "./theme";

import Banner from "./components/Banner";
import Calculator from "./components/Calculator/Calculator";
import Sidebar from "./components/Calculator/Sidebar";

const App: React.FC = (): React.ReactElement => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="App">
      <Grommet theme={Theme} full={true}>
        <Banner showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Stack anchor="top-left">
          <Box>
            <Calculator />
          </Box>
          {showSidebar && <Sidebar />}
        </Stack>
      </Grommet>
    </div>
  );
};

export default App;
