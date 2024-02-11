import React from "react";
import { useState } from "react";
import { Box, AppBar, Toolbar, Avatar, Input,List,ListItem,ListItemAvatar,ListItemText,Button, Paper } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Groups2TwoToneIcon from "@mui/icons-material/Groups2TwoTone";
import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";

const SideBarHeader = () => {


    const [selectedPerson, setSelectedPerson] = useState(null);

    const people = [
        { id: 1, name: "Ashutosh", messages: "Hii How Are You" },
        { id: 2, name: "Ketan Rathor",messages: "Hii How Are You"  },
        { id: 1, name: "Ashutosh", messages: "Hii How Are You"  },
        { id: 2, name: "Ketan Rathor",messages: "Hii How Are You"  },
        { id: 1, name: "Ashutosh", messages: "Hii How Are You"  },
        { id: 2, name: "Ketan Rathor",messages: "Hii How Are You"  },
        { id: 1, name: "Ashutosh", messages: "Hii How Are You"  },
        { id: 2, name: "Ketan Rathor",messages: "Hii How Are You"  }
        // Add more people as needed
      ];

      const handlePersonClick = (person) => {
        setSelectedPerson(person);
      };
    

  return (
    <Paper
    elevation={"25"}
    >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "70vh",
        backgroundColor: "#111B21",
      }}
    >
      <AppBar
        position="static"
        sx={{
          height: "10vh",
          width: "70vh",
          backgroundColor: "#202C33",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            height: "5vh",
            width: "55vh",
            justifyContent: "space-between",
            paddingLeft: "10px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Avatar sx={{ bgcolor: deepOrange[500], fontSize: "medium" }}>
              K
            </Avatar>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap:3,
              width: "50%", // Set the width to 50%
            }}
          >
            <Groups2TwoToneIcon sx={{ color: "grey" }} />
            {/* <WhatsAppStoryIcon sx={{ color: "grey" }} /> */}
            <DonutLargeRoundedIcon  sx={{ color: "grey" }}/>
            <AddCommentOutlinedIcon sx={{ color: "grey" }} />
            <ChatBubbleIcon sx={{ color: "grey" }} />
            <MoreVertIcon sx={{paddingRight:"16px",color: "grey"}} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        display={"flex"}
        sx={{ display: "flex", width: "100%", height: "12%" }}
      >
        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
            marginLeft: "12px",
            marginTop: "5px",
            height: "70%",
            width: "85%",
            backgroundColor: "#202C33",
            borderRadius: "10px",
          }}
        >
          <SearchOutlinedIcon
            sx={{
              fontSize: "20px",
              color: "grey",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "12px",
            }}
          />
          <Box sx={{ color: "grey", fontSize: "14px", paddingLeft: "35px" }}>
            <Input
              placeholder="Search or start new chat"
              fullWidth
              disableUnderline
              sx={{
                color: "grey",
                fontSize: "14px",
                
                height: "100%", // Adjust the height of the input
                "&:hover, &:focus": {
                  outline: "none",
                },
              }}
            />
          </Box>
        </Box>
        <FilterListIcon
          sx={{
            color: "grey",
            fontSize: "22px",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "12px",
            marginTop: "10px",
            marginRight: "12px",
          }}
        />
      </Box>
      <List sx={{overflow: "auto",
    "&::-webkit-scrollbar": {
        width: "8px", // Set the width of the scrollbar
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "grey", // Set the color of the thumb
        borderRadius: "0px", // Round the corners of the thumb
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#202C33", // Set the color of the track
      },
    }}>
        {people.map((person) => (
          <ListItem key={person.id} component="div" onClick={() => handlePersonClick(person)}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#394B59',  // Add a background color on hover if desired
            },
          }}
          >
            <ListItemAvatar>
              <Avatar
              >{person.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText 
            primary={person.name}
            secondary= {person.messages}

            primaryTypographyProps={{ sx: { color: "white" } }}
            secondaryTypographyProps={{ sx: { color: "grey",borderBottom:"1px solid rgba(255, 255, 255, 0.5)" } }}
            />
          </ListItem>
        ))}
      </List>



      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "81vh",
          width: "70vh",
          backgroundColor: "blue",
        }}
      ></Box> */}
    </Box>
    </Paper>
  );
};
export default SideBarHeader;
