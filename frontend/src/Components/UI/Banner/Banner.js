import React from 'react';
import Image from 'mui-image';
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "1rem",
    },
    media: {
        width: "100%",
        height: "25em",
        position: "relative",
    },
    centered: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "1",
        padding: "2em",
        width: "80%"
    }
});

export default function Banner(props) {
    const classes = useStyles();
    return (
        <div className={classes.media}>
            <Image src={props.image} />
            <div className={props.heading || props.subHeading || props.cta ? classes.centered : ""}>
                {props.heading && (<Typography variant='h4'>{props.heading}</Typography>)}
                {props.subHeading && (<Typography variant='h6'>{props.subHeading}</Typography>)}
                {props.cta && (<Button href={props.link} variant="contained"sx={{marginTop: "1em"}}>{props.cta}</Button>)}
            </div>
        </div>

    )
}