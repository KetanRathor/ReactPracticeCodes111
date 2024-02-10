import React from "react";
import { Box, AppBar, Toolbar, Avatar, Input } from '@mui/material';
import { blue, blueGrey, deepOrange } from '@mui/material/colors';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import WhatsAppStoryIcon from './WhatsAppStoryIcon';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';



const SideBarHeader = () => {


    return (
        <Box

            sx={{ display:"flex", flexDirection:"column",height: "100vh", width: "60vh", backgroundColor: "#111B21" }}>
            <AppBar position="static"
                sx={{ height: "10vh", width: "60vh", backgroundColor: "#202C33", display: "flex", justifyContent: "flex-start" }}
            >
                <Toolbar sx={{ display: "flex", height: "5vh", width: "55vh", justifyContent: "space-between", paddingLeft: "10px" }}

                >
                    <Avatar sx={{ bgcolor: deepOrange[500], fontSize: "medium" }}>K</Avatar>
                    <Groups2TwoToneIcon sx={{ color: "grey" }} />
                    <WhatsAppStoryIcon sx={{ color: "grey" }} />
                    <AddCommentOutlinedIcon sx={{ color: "grey" }} />
                    <ChatBubbleIcon sx={{ color: "grey" }} />
                    <MoreVertIcon sx={{ paddingRight: "16px" }} />


                </Toolbar>
            </AppBar>
            <Box
                display={"flex"}
                sx={{ display: "flex", width: "100%", height: "9%" }}
            >
                <Box
                    display={"flex"}
                    sx={{ alignItems: "center", marginLeft: "12px", marginTop: "5px", height: "70%", width: "85%", backgroundColor: "#202C33", borderRadius: "10px" }}
                >
                    <SearchOutlinedIcon sx={{ fontSize: "20px", color: "grey", alignItems: "center", justifyContent: "center", marginLeft: "12px" }} />
                    <Box
                        sx={{ color: "grey", fontSize: "14px", paddingLeft: "35px" }}>


                        <Input
                            placeholder="Search or start new chat"
                            fullWidth
                            disableUnderline
                            sx={{
                                color: 'grey',
                                fontSize:"14px",
                                height: '100%', // Adjust the height of the input
                                '&:hover, &:focus': {
                                    outline: 'none',
                                },
                            }}
                        />
                        
                    </Box>
                    
                </Box>
                <FilterListIcon sx={{color: "grey", fontSize:"22px", alignItems: "center", justifyContent: "center", marginLeft: "12px", marginTop:"10px",marginRight:"12px"}}/>





            </Box>
            <Box
            sx={{display:"flex", flexDirection:"column", height: "81vh", width: "60vh", backgroundColor: "blue" }}
            >

            </Box>

        </Box>

    )

}
export default SideBarHeader;