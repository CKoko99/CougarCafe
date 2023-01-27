import React, { useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, List, ListItem, ListItemText, SwipeableDrawer } from "@mui/material";

function Navbar() {
    //Use this to create a navbar using Material UI
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerHandler = (isOpen) => {
        setIsDrawerOpen(isOpen);
    }
    return (
        <>
            <AppBar sx={{position: "sticky"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
                        onClick={() => toggleDrawerHandler(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Cougar Cafe
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button color="inherit">Menu</Button>
                        <Button color="inherit">Reservations</Button>
                        <Button color="inherit">About</Button>
                    </Box>
                </Toolbar>
                <SwipeableDrawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={() => toggleDrawerHandler(false)}
                    onOpen={() => toggleDrawerHandler(true)}
                    PaperProps={{

                        sx: {
                            width: "65%"
                        }
                    }}
                >
                    <List sx={{
                        margin: ".5rem",
                    }}><ListItem button onClick={()=> toggleDrawerHandler(false)}>
                            <ListItemText primary="Cougar Cafe" />
                    </ListItem>
                        <Divider variant="middle"/>
                        <ListItem button>
                            <ListItemText primary="Menu" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Reservations" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="About" />
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </AppBar>
        </>
    )
}

export default Navbar;