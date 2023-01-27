import React from 'react';
import Image from 'mui-image';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "1rem",
    },
    media: {
        width: "100%",
        height: "25em",
    },
});

export default function Banner(props) {
    const classes = useStyles();
    return (
        <div className={classes.media}>
            <Image  src={props.image}  />
        </div>

    )
}