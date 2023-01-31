import React, { useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, List, ListItem, ListItemText, SwipeableDrawer } from "@mui/material";

import { Link } from "@mui/material";
function Navbar() {
    //Use this to create a navbar using Material UI
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerHandler = (isOpen) => {
        setIsDrawerOpen(isOpen);
    }
    return (
        <>
            <AppBar sx={{ position: "sticky" }}>
                <Toolbar>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
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
                        <Button href="/" color="inherit">Cougar Cafe</Button>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button href="/Menu" color="inherit">Menu</Button>
                            <Button href="/Reservations" color="inherit">Reservations</Button>
                            <Button href="/About" color="inherit">About</Button>
                        </Box>
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
                    }}><ListItem  onClick={() => toggleDrawerHandler(false)}>
                            <ListItemText primary="Cougar Cafe" />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem href="/Menu"component={Link}>
                            <ListItemText  primary="Menu" />
                        </ListItem>
                        <ListItem href="/Reservations" component={Link}>
                            <ListItemText primary="Reservations" />
                        </ListItem>
                        <ListItem href="/About" component={Link}>
                            <ListItemText primary="About" />
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </AppBar>
        </>
    )
}

export default Navbar;