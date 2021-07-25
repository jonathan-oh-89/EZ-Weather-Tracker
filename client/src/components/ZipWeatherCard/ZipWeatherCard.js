import React from 'react'
import "./css/ZipWeatherCard.css";
import "./css/weather-underground-icons/wu-icons-style.min.css";
import { Typography, Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import '@fontsource/roboto';
import stateLookup from "../../data/states";
import weatherIcon from "../../data/weatherIcon";

const ZipWeatherCard = ({ content, toggleForecast, showFahrenheit }) => {
    const handleBtn = (e) => {
        e.preventDefault();
        toggleForecast(true);
    }

    if (!content) {
        return (
            <div></div>
        )
    }

    return (
        <div className="zipweathercard">
            <Typography variant="h4" align='center' className="fonts">
                <Box fontWeight="fontWeightLight" lineHeight={2}>
                    {content.zipLocation.name}, {stateLookup[content.zipLocation.region]}
                </Box>
            </Typography>

            <Box lineHeight={2}>
                <i className={weatherIcon[content.zipWeather.condition.text]}></i>
            </Box>

            <Typography variant="h6" align='center' className="fonts" fontWeight="fontWeightLight">
                <Box fontWeight="fontWeightLight">
                    {content.zipWeather.condition.text}
                </Box>
            </Typography>

            <Typography variant="h2" align='center' className="fonts">
                <Box fontWeight="fontWeightLight" marginLeft={2.5}>
                    {showFahrenheit ? content.zipWeather.temp_f : content.zipWeather.temp_c}
                    <span>&deg;</span>
                </Box>
            </Typography>

            <hr />

            <div className="detailsection">
                <div className="subsection">
                    <Typography variant="h6" align='center' className="fonts">
                        <Box fontWeight="fontWeightLight" >
                            Feels like
                        </Box>
                    </Typography>
                    <Typography variant="subtitle1" align='center' className="fonts">
                        <Box fontWeight="fontWeightLight" >
                            {showFahrenheit ? content.zipWeather.feelslike_f : content.zipWeather.feelslike_c}<span>&deg;</span>
                        </Box>
                    </Typography>
                </div>
                <div className="subsection">
                    <Typography variant="h6" align='center' className="fonts">
                        <Box fontWeight="fontWeightLight" >
                            Wind (mph)
                        </Box>
                    </Typography>
                    <Typography variant="subtitle1" align='center' className="fonts">
                        <Box fontWeight="fontWeightLight" >
                            {content.zipWeather.wind_mph}
                        </Box>
                    </Typography>
                </div>
                <div className="subsection">
                    <Typography variant="h6" align='center' className="fonts">
                        <Box fontWeight="fontWeightLight" >
                            Humidity
                        </Box>
                    </Typography>
                    <Typography variant="subtitle1" align='center' className="fonts">
                        <Box fontWeight="fontWeightLight" >
                            {content.zipWeather.humidity}<span>%</span>
                        </Box>
                    </Typography>
                </div>
                <div className="subsection">
                    <Typography variant="h6" align='center' className="fonts">
                        <Box fontWeight="fontWeightLight" >
                            UV
                        </Box>
                    </Typography>
                    <Typography variant="subtitle1" align='center' className="fonts">
                        <Box fontWeight="fontWeightLight" >
                            {content.zipWeather.uv}
                        </Box>
                    </Typography>
                </div>
            </div>
            <Link onClick={handleBtn} className="fonts">
                <Typography variant="subtitle1" align='center' className="fonts forecastlink">
                    <Box fontWeight="fontWeightLight" >
                        3 Day Forecast
                    </Box>
                </Typography>
            </Link>
        </div>
    )
}

export default ZipWeatherCard

