import React from "react";
import { Box } from '@mui/material';
import { blue, blueGrey, deepOrange } from '@mui/material/colors';


const Screen = () =>{



    return(
        <Box
        sx={{display:"flex",flexDirection:"row", height:"100vh",width:"160vh",backgroundColor:"#222E35"}}
        >
            <img src="/WhatsAppPic.png" alt="WhatsApp Pic" width="500" height="333" />
        </Box>
    )
}
export default Screen;