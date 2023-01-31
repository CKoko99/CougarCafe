import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const aboutText1 = "Cougar Cafe is a Full Stack Web Application built using React, PHP, and MySQL"
const aboutText2 = "The PHP backend uses REST APIs to send and receive data, store the data in a MySQL database, and retrieve it as needed."
const aboutText3 = "The React frontend uses React Router to navigate between pages, and Material UI for the styling."
export default function About() {
    return (
        <Box>
            <Typography variant="h2">About Cougar Cafe</Typography>
            <Typography variant="h4">Cougar Cafe is a Full Stack Web Application Built</Typography>
            <Typography variant="h4">{aboutText1}</Typography>
            <Typography variant="h4">{aboutText2}</Typography>
            <Typography variant="h4">{aboutText3}</Typography>
        </Box>
    )
}