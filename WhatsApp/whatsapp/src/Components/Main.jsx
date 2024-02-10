import React from "react";
import SideBarHeader from "./SideBarHeader";
import { Box } from "@mui/material";
import Screen from "./Screen";

const Main = () =>{



    return(
        <Box
        sx={{ display: "flex", flexDirection:"row"}}
    >
      <SideBarHeader />
      <Screen />
    </Box>
    )
}
export default Main;