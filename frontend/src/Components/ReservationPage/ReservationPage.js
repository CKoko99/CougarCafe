import { TextField, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";



//styles
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: "rgb(240, 240, 240)",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "90%",
        backgroundColor: "white",
        margin: "auto",
        padding: "1rem 0",
    },
    input: {
        margin: "1em",
    }
});


export default function ReservationPage() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.container} >
                <Typography variant="h3">Reservations</Typography>
                <Typography variant="h5">Make a reservation for your next visit to the Cougar Cafe!</Typography>
                <Box sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}>

                    <TextField margin="normal" label="First Name" required />
                    <TextField label="Last Name" required />
                </Box>
                <Box sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}>

                    <TextField label="Email" required />
                    <TextField label="Phone Number" required />
                </Box>
                <Box sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}>
                    <TextField type="date" required />
                    <TextField select label="Time" required>
                        <option value="12:00">12:00</option>
                    </TextField>
                </Box>
                <Box sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}>

                    <TextField label="Number of Guests" required />
                </Box>
            </Box>
        </Box>

    )
}