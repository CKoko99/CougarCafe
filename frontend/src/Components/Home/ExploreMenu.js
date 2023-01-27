import React from "react";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FoodCard from "../UI/Card/FoodCard";

const menuOptions = [
    {
        option: "Appetizers",
        image: "https://images-gmi-pmc.edge-generalmills.com/ec9d8cb9-ad2c-49a3-bda0-0727a8bb31c6.jpg",
        description: "Start off your meal with a variety of small plates to share."
    },
    {
        option: "Salads",
        image: "https://assets.bonappetit.com/photos/6282c9214844aec731451f28/3:2/w_4073,h_2715,c_limit/0622-Summer-Goddess-Chicken-Salad.jpg",
        description: "Fresh and flavorful greens, topped with a variety of ingredients"
    },
    {
        option: "Entrees",
        image: "https://media.olivegarden.com/en_us/images/marketing/Shrimp-Alfredo-gv-590x365.jpg",
        description: "Choose from a variety of entrees to satisfy your cravings."
    },
    {
        option: "Desserts",
        image: "https://insanelygoodrecipes.com/wp-content/uploads/2021/01/White-Chocolate-Oreo-Cookie-Balls.png",
        description: "Indulge in a sweet treat with our selection of cakes, pies, and ice cream."
    },
    {
        option: "Drinks",
        image: "https://www.thespruceeats.com/thmb/PKK63OuoTMaezzPYvaq2fy-TB5Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bar101-cocktails-504754220-580e83415f9b58564cf470b9.jpg",
        description: "Quench your thirst with a variety of soft drinks, beer, wine, and cocktails."
    },
]
export default function ExploreMenu() {

    return (
        <>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: "center", paddingTop: ".5em" }}> Explore Our Menu </Typography>
            <Box sx={{ display: "flex", textAlign: "left", flexWrap: "wrap", justifyContent: "center" }}>
                {menuOptions.map((item, id) => {
                    return (
                        <FoodCard key={id} description={item.description} name={item.option} image={item.image} />
                    )
                })}
            </Box>
        </>
    );
}