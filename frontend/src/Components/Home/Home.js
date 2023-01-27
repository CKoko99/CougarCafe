import React, { useEffect, useState } from "react";
import CafeBanner from '../../assets/images/Cafe1.jpg'
import CafeBanner2 from '../../assets/images/Cafe2.jpeg'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FoodCard from "../UI/Card/FoodCard";
import Banner from "../UI/Banner/Banner";
import ExploreMenu from "./ExploreMenu";

import { makeStyles } from '@mui/styles';
// create styles
const useStyles = makeStyles({
    root: {
        backgroundColor: "rgb(245,245,245)"
    },
    menuSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
        margin: "auto",
        backgroundColor: "white",
    }
});

function Home() {

    const classes= useStyles();
    const [menuFavs, setMenuFavs] = useState([]);

    //fetch the menu favorites from the backend
    const fetchFavs = async () => {
        const res = await fetch("http://localhost/CougarCafe/Api/MenuFavs")

        return res.json();
    }
    useEffect(() => {
        fetchFavs().then((data) => {
            setMenuFavs(data);
            console.log(data);
        })
    }, []);



    return (
        <Box className={classes.root}>
            <Banner image={CafeBanner} />
            <Box className={classes.menuSection} sx={{width: { xs: "90%", md: "90%" }}}>
                <ExploreMenu />
            </Box>
            <Banner image={CafeBanner2} />
            <Box className={classes.menuSection} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: { xs: "200px" } }}>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: "center" }}> Menu Favorites </Typography>
                <Box  sx={{ display: "flex", textAlign: "left", flexWrap: "wrap", justifyContent: "center" }}>
                    {menuFavs.map((item) => {
                        return (
                            <FoodCard key={item.id} name={item.name} description={item.description} image={item.image} price={item.price} />
                        )
                    })}
                </Box>
            </Box>
        </Box>
    );
}

export default Home;