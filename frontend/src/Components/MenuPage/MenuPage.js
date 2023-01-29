
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FoodCard from '../UI/Card/FoodCard';
import { makeStyles } from '@mui/styles';

//use styles

const useStyles = makeStyles({
    root: {backgroundColor: "rgb(240, 240, 240)"},
    menu: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        backgroundColor: "white",
        padding: "1rem 0",
    },
    menuSelector: {
        margin: "1rem",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: 'space-evenly',
    } 
})

export default function MenuPage() {

    const classes = useStyles();

    const [appetizersList, setAppetizersList] = useState([]);
    const [saladsList, setSaladsList] = useState([]);
    const [entreesList, setEntreesList] = useState([]);
    const [dessertsList, setDessertsList] = useState([]);
    const [drinksList, setDrinksList] = useState([]);

    const [activeMenu, setActiveMenu] = useState("Appetizers");
    const [activeMenuDesc, setActiveMenuDesc] = useState("Start off your meal with a variety of small plates to share.");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        if (menu === "Appetizers") {
            setActiveMenuDesc("Start off your meal with a variety of small plates to share.");
        }
        else if (menu === "Salads") {
            setActiveMenuDesc("Enjoy a variety of salads to start your meal.");
        }
        else if (menu === "Entrees") {
            setActiveMenuDesc("Choose from a variety of entrees to enjoy.");
        }
        else if (menu === "Desserts") {
            setActiveMenuDesc("Finish off your meal with a variety of desserts.");
        }
        else if (menu === "Drinks") {
            setActiveMenuDesc("Enjoy a variety of drinks to go with your meal.");
        }
    }

    const fetchAppetizers = async () => {
        const res = await fetch("http://localhost/CougarCafe/Api/Menu/Appetizers");
        return res.json();
    }
    const fetchSalads = async () => {
        const res = await fetch("http://localhost/CougarCafe/Api/Menu/Salads");
        return res.json();
    }
    const fetchEntrees = async () => {
        const res = await fetch("http://localhost/CougarCafe/Api/Menu/Entrees");
        return res.json();
    }
    const fetchDesserts = async () => {
        const res = await fetch("http://localhost/CougarCafe/Api/Menu/Desserts");
        return res.json();
    }
    const fetchDrinks = async () => {
        const res = await fetch("http://localhost/CougarCafe/Api/Menu/Drinks");
        return res.json();
    }

    useEffect(() => {
        fetchAppetizers().then((data) => {
            setAppetizersList(data);
        })
        fetchSalads().then((data) => {
            setSaladsList(data);
        })
        fetchEntrees().then((data) => {
            setEntreesList(data);
        })
        fetchDesserts().then((data) => {
            setDessertsList(data)
        })
        fetchDrinks().then((data) => {
            setDrinksList(data);
        })
    }, []);

    return (
        <>
        <Box className={classes.root}>
            <Box className={classes.menu} sx={{width: {xs: "95%", md: "80%"}}}>
                <Typography variant="h2" sx={{textAlign: "center"}}>Explore Our Menu</Typography>
                <Box className={classes.menuSelector}>
                    <Button variant={activeMenu==="Appetizers" ? "outlined" : "text"}onClick={() => handleMenuClick("Appetizers")}>Appetizers</Button>
                    <Button variant={activeMenu === "Salads" ? "outlined" : "text"} onClick={() => handleMenuClick("Salads")}>Salads</Button>
                    <Button variant={activeMenu==="Entrees" ? "outlined": "text"} onClick={() => handleMenuClick("Entrees")}>Entrees</Button>
                    <Button variant={activeMenu==="Desserts" ? "outlined": "text"} onClick={() => handleMenuClick("Desserts")}>Desserts</Button>
                    <Button variant={activeMenu==="Drinks" ? "outlined": "text"} onClick={() => handleMenuClick("Drinks")}>Drinks</Button>
                </Box>
                <Box sx={{display: "flex",flexDirection: "column", alignItems: "center"}}>
                    <Typography variant="h5" sx={{textAlign: "center", padding: "0 1em"}}>{activeMenuDesc}</Typography>
                    {activeMenu === "Appetizers" && appetizersList.map((item) => {
                        return (
                            <FoodCard
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        )
                    })}
                    {activeMenu === "Salads" && saladsList.map((item) => {
                        return (
                            <FoodCard
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        )
                    })}
                    {activeMenu === "Entrees" && entreesList.map((item) => {
                        return (
                            <FoodCard
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        )
                    })}
                    {activeMenu === "Desserts" && dessertsList.map((item) => {
                        return (
                            <FoodCard
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        )
                    })}
                    {activeMenu === "Drinks" && drinksList.map((item) => {
                        return (
                            <FoodCard
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        )
                    })}
                </Box>
            </Box>
        </Box>
        </>
    )
}