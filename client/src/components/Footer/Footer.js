import React from 'react'
import { Box, Typography } from '@material-ui/core';
import "./Footer.css"

function Footer() {
    return (
        <>
            <div className="footerdivider"></div>
            <div className="footer">
                <Typography variant="subtitle2" align='left'>
                    <Box fontWeight="fontWeightLight">
                        Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
                    </Box>
                </Typography>
            </div>
        </>
    )
}

export default Footer
