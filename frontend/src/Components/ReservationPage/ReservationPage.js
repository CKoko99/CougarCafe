import { Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useRef } from "react";


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
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: "white",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2em",
    }
});

const reservationsList = [];

export default function ReservationPage() {
    const classes = useStyles();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const guestsRef = useRef();

    const [selectedHour, setSelectedHour] = useState("");

    const [firstNameHelperText, setFirstNameHelperText] = useState("");
    const [lastNameHelperText, setLastNameHelperText] = useState("");
    const [emailHelperText, setEmailHelperText] = useState("");
    const [phoneHelperText, setPhoneHelperText] = useState("");
    const [dateHelperText, setDateHelperText] = useState("");
    const [timeHelperText, setTimeHelperText] = useState("");
    const [guestsHelperText, setGuestsHelperText] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const [validTimes, setValidTimes] = useState([]);


    useEffect(() => {
        //get reservations
        fetch("http://localhost/CougarCafe/Api/Reservation/get")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.forEach(reservation => {
                    reservationsList.push(reservation);
                }
                )
            })
    }, [])

    //check if user entered a first name after leaving the input field
    const checkFirstName = () => {
        if (firstNameRef.current.value === "") {
            setFirstNameHelperText("Please enter a first name");
        } else {
            setFirstNameHelperText("");
        }
    }
    //Check if user entered a last name after leaving the input field
    const checkLastName = () => {
        if (lastNameRef.current.value === "") {
            setLastNameHelperText("Please enter a last name");
        } else {
            setLastNameHelperText("");
        }
    }
    //check if user entered a valid email after leaving the input field
    const checkEmail = () => {
        //check if email is valid
        const email = emailRef.current.value;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
            setEmailHelperText("Please enter a valid email address");
        }
        else {
            setEmailHelperText("");
        }
    }
    //check if user entered a phone number after leaving the input field
    const checkPhone = () => {
        if (phoneRef.current.value === "") {
            setPhoneHelperText("Please enter a phone number");
        } else {
            setPhoneHelperText("");
        }
    }

    //get current date without time
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    //check if user selected a date in the past
    const checkDate = () => {
        //reset time
        timeRef.current.value = "";

        const date = new Date(dateRef.current.value);
        //add one day to date
        date.setDate(date.getDate() + 1);

        if (date <= today) {
            setDateHelperText("Please select a date in the future");
            dateRef.current.value = "";
        } else {
            setDateHelperText("");
        }
        //check if reservations exist for selected date
        if (reservationsList.length > 0) {

            //filter reservations for selected date
            const reservations = reservationsList.filter(reservation => reservation.date === dateRef.current.value);

            //get list of times that are already reserved
            const reservedTimes = reservations.map(reservation => reservation.time);

            //create list of times from 8am to 9pm where entry 0 is 24hr format and entry 1 is 12hr format

            const times = [];
            for (let i = 8; i < 21; i++) {
                if (i < 12) {
                    times.push([i + ":00", i + ":00 AM"]);
                } else if (i === 12) {
                    times.push([i + ":00", i + ":00 PM"]);
                } else {
                    times.push([i + ":00", (i - 12) + ":00 PM"]);
                }
            }
            //remove reserved times from list of times
            const validTimes = times.filter(time => !reservedTimes.includes(time[0]));
            //set valid times
            setValidTimes(validTimes);
        }
    }

    //check if user selected a time after leaving the input field
    const checkTime = (e) => {
        //check e.target.value
        console.log(e.target.value);
        console.log(timeRef.current.value)
        if (e.target.value === "") {
            setTimeHelperText("Please select a time");
            setSelectedHour("");
        } else {
            setTimeHelperText("");
            setSelectedHour(e.target.value);
        }
    }

    //check if user selected a number of guests after leaving the input field
    const checkGuests = () => {
        //check if user entered absured amount of guest
        if (guestsRef.current.value > 100) {
            setGuestsHelperText("Please call us to make a reservation for more than 25 guests");
        } else if (guestsRef.current.value === "") {
            setGuestsHelperText("Please enter the number of guests");
        } else {
            setGuestsHelperText("");
        }
    }
    //ensure all fields are valid before submitting form
    const checkForm = () => {
        checkFirstName();
        checkLastName();
        checkEmail();
        checkPhone();
        checkDate();
        checkGuests();
        if (firstNameHelperText === "" && lastNameHelperText === "" && emailHelperText === "" && phoneHelperText === "" && dateHelperText === "" && timeHelperText === "" && guestsHelperText === "") {
            submitFormToDatebase();
        }
    }

    //submit form to backend
    const submitFormToDatebase = async () => {
        const res = await fetch("http://localhost/CougarCafe/Api/Reservation/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: firstNameRef.current.value + " " + lastNameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                date: dateRef.current.value,
                time: selectedHour,
                guests: guestsRef.current.value
            })
        })
        console.log(firstNameRef.current.value + " " + lastNameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);
        console.log(dateRef.current.value);
        console.log(selectedHour);
        console.log(guestsRef.current.value);
        const data = res.json();
        console.log(data);
        handleOpen();
    }

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.container} >
                <Typography variant="h3">Reservations</Typography>
                <Typography variant="h5">Make a reservation for your next visit to the Cougar Cafe!</Typography>
                <Box sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}>
                    <TextField label="First Name" required error={firstNameHelperText === "" ? false : true} helperText={firstNameHelperText} inputRef={firstNameRef} onBlur={checkFirstName} />
                    <TextField label="Last Name" required error={lastNameHelperText === "" ? false : true} helperText={lastNameHelperText} inputRef={lastNameRef} onBlur={checkLastName} />
                </Box>
                <Box sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}>

                    <TextField label="Email" required error={emailHelperText === "" ? false : true} helperText={emailHelperText} inputRef={emailRef} onBlur={checkEmail} />
                    <TextField label="Phone" required error={phoneHelperText === "" ? false : true} helperText={phoneHelperText} inputRef={phoneRef} onBlur={checkPhone} />
                </Box>
                <Box sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}>
                    <TextField
                        type="date"
                        required
                        error={dateHelperText === "" ? false : true}
                        helperText={dateHelperText}
                        inputRef={dateRef}
                        onChange={checkDate} />
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Time</InputLabel>
                        <Select
                            label="Time"
                            required
                            error={timeHelperText === "" ? false : true}
                            helperText={timeHelperText}
                            inputRef={timeRef}
                            onChange={checkTime}
                        >
                            {validTimes.map((time) => (
                                <MenuItem key={time[0]} value={time[0]}>
                                    {time[1]}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}>

                    <TextField label="Number of Guests" required error={guestsHelperText === "" ? false : true} helperText={guestsHelperText} inputRef={guestsRef} onBlur={checkGuests} />
                </Box>
                <Button variant="contained" onClick={checkForm} >Submit</Button>
            </Box>
            <Modal open={openModal} onClose={handleClose}>
                <Box className={classes.modal}>
                    <Typography variant="h3">Thank you for your reservation!</Typography>
                    <Typography variant="h5">We look forward to seeing you soon!</Typography>
                    <Button variant="contained" onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </Box>

    )
}