import React from 'react'
import { Box, Typography } from '@material-ui/core';
import "./About.css"

function About() {
    return (
        <div className="fonts">
            <div className="aboutheader">
                <Typography variant="h3" align='center'>
                    <Box fontWeight="fontWeightLight">
                        Powered by
                    </Box>
                </Typography>

            </div>



            <div className="logos">
                <img src={require("./imgs/express-logo.png").default} height={100} alt="expressjs logo" />
                <img src={require("./imgs/nodejs-logo.png").default} height={100} alt="nodejs logo" />
                <img src={require("./imgs/react-logo.png").default} height={100} alt="react logo" />
                <img src={require("./imgs/redux-logo.png").default} height={100} alt="redux logo" />
            </div>
        </div>
    );

}

export default About
