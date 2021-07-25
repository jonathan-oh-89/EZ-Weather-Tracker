import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Box, Button, FormControl, TextField, Typography } from '@material-ui/core';
import './Search.css';
import '@fontsource/roboto';
import { getZip } from "../../actions";

const Search = () => {
    const [showSearchError, setSearchError] = useState(false);
    const [zipcode, setZipcode] = useState("");
    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getZip(zipcode)).catch(err => {
            setSearchError(true)
        })
    }

    return (
        <>
            <Box m={3}>
                <form onSubmit={handleSubmit} className="form">
                    <FormControl className="textfield">
                        <TextField
                            label="Search By Zipcode"
                            variant="outlined"
                            margin="none"
                            align="center"
                            onChange={e => setZipcode(e.target.value)}
                        />

                        <div className="searcherror">
                            {showSearchError ?
                                <Typography variant="subtitle1" align='center'>
                                    There was an error with your request
                                </Typography>
                                :
                                null
                            }
                        </div>

                        <Box mt={2} display="flex" justifyContent="center">
                            <Button variant="contained" color="primary" type="submit">Get Weather!</Button>
                        </Box>
                    </FormControl>
                </form>
            </Box>
        </>
    )
}


// const mapStateToProps = state => ({
//     // articles: state.articlesState.articles
// });



// const mapDispatchToProps = (dispatch) => {
//     return {
//         zipcodeSearch: zipcode => dispatch(getZip)
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default Search;