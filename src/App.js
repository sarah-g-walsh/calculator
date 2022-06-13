import React from "react";
import { Grommet } from "grommet";
import Theme from "./theme";

import Banner from "./components/Banner";
import  Calculator from "./components/Calculator";

function App() {
	return (
		<div className="App">
			<Grommet theme={Theme} full={true}>
				<Banner />
				<Calculator />
			</Grommet>
		</div>
	);
}

export default App;
