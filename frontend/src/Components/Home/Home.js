import React, { useEffect, useState } from "react";
import CafeBanner from '../../assets/images/Cafe2.jpg'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FoodCard from "../UI/Card/FoodCard";
import Banner from "../UI/Banner/Banner";

function Home() {

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
        <>
            <Banner image={CafeBanner} />
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: { xs: "200px" } }}>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: "center" }}> Menu Favorites </Typography>
                <Box sx={{ display: "flex", textAlign: "left", flexWrap: "wrap", width: { xs: "100%", md: "80%" }, justifyContent: "center" }}>
                    {menuFavs.map((item) => {
                        return (
                            <FoodCard key={item.id} name={item.name} description={item.description} image={item.image} price={item.price} />
                        )
                    })}
                </Box>
            </Box>
        </>
    );
}

export default Home;