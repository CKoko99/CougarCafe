import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const aboutText = "Cougar Cafe is a Full Stack Web Application built using React, PHP, and MySQL"
export default function About() {
    return (
        <Box>
            <Typography variant="h2">About Cougar Cafe</Typography>
            <Typography variant="h4">Cougar Cafe is a Full Stack Web Application Built</Typography>
        </Box>
    )
}