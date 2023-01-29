import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "1rem",
    },
    media: {
        height: 140,
    },
});

export default function FoodCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.name}
                />
                <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                        <Typography variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Button>{props.price}</Button>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
        </Card>
    );
}