// component that contains the body of the sidebar menu

import React from "react";
import { Sidebar, Box, Spinner } from "grommet";
import { Home, CaretNext } from "grommet-icons";

import SidebarButton from "./SidebarButton";
import { HOME_URL } from "../constants/constants";

const HomepageSidebar: React.FC = (): React.ReactElement => {
  const [items, setItems] = React.useState([
    { RecordId: "", Name: "", URL: "" },
  ]);
  const [load, setLoad] = React.useState(true);

  React.useEffect(() => {
    const request = new XMLHttpRequest();
    request.onerror = function () {
      setItems([{ RecordId: "", URL: "", Name: "Error fetching items" }]);
      setLoad(false);
    };
    request.ontimeout = function () {
      setItems([{ RecordId: "", URL: "", Name: "Error fetching items" }]);
      setLoad(false);
    };
    request.onload = function () {
      console.log(request.response.items);
      setItems(request.response.items);
      setLoad(false);
    };
    request.timeout = 10000;
    request.responseType = "json";
    request.open("GET", process.env.REACT_APP_PROJECT_ENDPOINT as string);
    request.send();
  }, []);

  return (
    <Box direction="row" fill="vertical">
      <Sidebar
        background="darkbackground"
        overflow="auto"
        gap="large"
        direction="row"
        pad={{ left: "medium", right: "xlarge", vertical: "medium" }}
        elevation="small"
        round="xxsmall"
      >
        <SidebarButton
          icon={<Home color="darkbrand" />}
          label="Home"
          sidebarurl={HOME_URL}
        />
        {load ? (
          <Spinner />
        ) : (
          items.map((item) => {
            return (
              <SidebarButton
                icon={<CaretNext color="darkbrand" />}
                label={item.Name}
                sidebarurl={item.URL}
                key={item.Name}
              />
            );
          })
        )}
      </Sidebar>
    </Box>
  );
};

export default HomepageSidebar;
