import React from 'react'
import { Link } from "react-router-dom";
import { Typography, AppBar, Toolbar, Box } from '@material-ui/core'
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import './Navbar.css';


const Navbar = () => {
    return (
        <AppBar className="navbar" position="static">
            <Toolbar>
                <BeachAccessIcon />
                <Typography variant="h6" color="inherit" noWrap>
                    <Box fontWeight="fontWeightLight">
                        <Link to="/" >
                            EZ Weather Tracker
                        </Link>
                    </Box>
                </Typography>

                <div className="links">
                    <Typography variant="subtitle2" color="inherit" noWrap>
                        <Box fontWeight="fontWeightLight">
                            <Link to="/About" >
                                About
                            </Link>
                        </Box>
                    </Typography>
                </div>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
