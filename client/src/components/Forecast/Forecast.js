import React from 'react'
import "./Forecast.css"
import { Box, Typography } from '@material-ui/core';
import stateLookup from "../../data/states";
import weatherIcon from "../../data/weatherIcon";

function Forecast({ toggleForecast, content, showFahrenheit }) {

    const handleBtn = (e) => {
        e.preventDefault();
        toggleForecast(false);
    }

    return (
        <div className="modal-overlay" onClick={() => { toggleForecast() }}>
            <div className="forecastmodal" onClick={e => e.stopPropagation()}>
                <button onClick={handleBtn} className="modal-close"> X </button>

                <Typography variant="h5" align='center' className="fonts">
                    <Box fontWeight="fontWeightLight" lineHeight={2}>
                        <div>3-day forecast for</div>
                        <div>{content.zipLocation.name}, {stateLookup[content.zipLocation.region]}</div>
                    </Box>
                </Typography>

                <hr />

                {content.forecast.forecastday.map(item =>
                    <Typography variant="subtitle1" align='center' className="fonts">
                        <Box fontWeight="fontWeightLight" lineHeight={2}>
                            <div className="forecastitem">
                                <div className="weatherBox">{item.date}</div>
                                <div className="weatherBox">
                                    <div><i className={weatherIcon[item.day.condition.text] + " icon"}></i></div>
                                    <div><Typography variant="body2" align='center' className="fonts">{item.day.condition.text}</Typography></div>
                                </div>

                                <div className="weatherBox">{showFahrenheit ? item.day.mintemp_f : item.day.mintemp_c}<span>&deg;</span> / {showFahrenheit ? item.day.maxtemp_f : item.day.mintemp_c}<span>&deg;</span></div>
                            </div>

                        </Box>
                    </Typography>
                )}
            </div>
        </div>
    );
}

export default Forecast
