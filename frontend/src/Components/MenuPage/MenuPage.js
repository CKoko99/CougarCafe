import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function MenuPage() {
    const [appetizersList, setAppetizersList] = useState([]);
    const [saladsList, setSaladsList] = useState([]);
    const [entreesList, setEntreesList] = useState([]);
    const [dessertsList, setDessertsList] = useState([]);
    const [drinksList, setDrinksList] = useState([]);

    const [activeMenu, setActiveMenu] = useState("appetizers");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
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
            console.log(data);
        })
        fetchSalads().then((data) => {
            setSaladsList(data);
            console.log(data);
        })
        fetchEntrees().then((data) => {
            setEntreesList(data);
            console.log(data);
        })
        fetchDesserts().then((data) => {
            setDessertsList(data);
            console.log(data);
        })
        fetchDrinks().then((data) => {
            setDrinksList(data);
            console.log(data);
        })
    }, []);

    return (
        <>
            <Box>
                <Typography variant="h2">Explore Our Menu</Typography>
                <Box>
                    <Button onClick={() => handleMenuClick("Appetizers")}>Appetizers</Button>
                    <Button onClick={() => handleMenuClick("Salads")}>Salads</Button>
                    <Button onClick={() => handleMenuClick("Entrees")}>Entrees</Button>
                    <Button onClick={() => handleMenuClick("Dessrts")}>Desserts</Button>
                    <Button onClick={() => handleMenuClick("Drinks")}>Drinks</Button>
                </Box>

            </Box>
        </>
    )
}