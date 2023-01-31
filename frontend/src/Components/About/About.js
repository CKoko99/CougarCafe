import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
//styles
import { makeStyles } from '@mui/styles';
import Banner from '../UI/Banner/Banner';
import aboutImage from '../../assets/images/Cafe3.jpeg'
// create styles
const useStyles = makeStyles({
    root: {
        backgroundColor: "rgb(245,245,245)"
    },
    aboutSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
        margin: "auto",
        backgroundColor: "white",
        padding: "1em"
    },
    aboutText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
        margin: "auto",
        backgroundColor: "white",
        padding: "3em"
    }
});

const bannerHeading = "About Cougar Cafe"
const bannerSubHeading = "Cougar Cafe is a Full Stack Web Application built with React, PHP, and MySQL"
const aboutText1 = "Built with React displays a single page application with a responsive design built with Material Ui for users to interact with. React Router is used to navigate between pages. Data is retrieved from the backend using REST APIs and Displayed with Components."
const aboutText2 = "Built with PHP and MySQL, the backend is a REST API that provides data to the frontend. The MySQL relational database stores information about the menu categories, products, and reservations made by users."
export default function About() {
    const classes = useStyles();
    return (
        <Box className={classes.root} >
            <Box className={classes.aboutSection} sx={{ width: { xs: "90%", md: "90%" } }}>
                <Banner image={aboutImage} heading={bannerHeading} subHeading={bannerSubHeading} />
                <Box className={classes.aboutText}>
                    <Box sx={{mb: "1em"}}>
                        <Typography variant='h5'><strong>Frontend: </strong>{aboutText1}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='h5'><strong>Backend: </strong>{aboutText2}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}