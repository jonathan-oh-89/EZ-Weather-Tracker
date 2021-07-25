import React from 'react'
import Search from '../Search/Search';
import { useSelector } from 'react-redux'
import ZipCarousel from "../ZipCarousel/ZipCarousel";
import { Box, Typography, Button } from '@material-ui/core';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import "./Home.css"
import { useDispatch } from 'react-redux';

function Home() {
    // console.log("*** HOME ***");

    const allZipWeather = useSelector((state) => state.zipcodeWeatherReducer.allZipWeather)

    let resetActive = allZipWeather.length > 0;

    const dispatch = useDispatch();
    const resetPage = () => {
        resetActive = false
        dispatch({ type: 'RESET_WEATHER' })
    }

    return (
        <div className="home fonts">
            <div className="resetButton">
                <Button variant="contained" color="secondary" size="small" type="submit" onClick={resetPage} disabled={!resetActive}>Reset</Button>
            </div>
            <Typography variant="h3" align='center'>
                <Box m={2} fontWeight="fontWeightLight">
                    <BeachAccessIcon fontSize="large" />EZ Weather Tracker
                </Box>
            </Typography>
            <Search />
            <ZipCarousel allZipWeather={allZipWeather} />
        </div>
    );

}

export default Home
