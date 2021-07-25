import { fetchZipWeather } from "../middleware/api";


export const ADD_ZIP_WEATHER = 'ADD_ZIP_WEATHER';
export const RESET_WEATHER = 'RESET_WEATHER';


export const getZip = (zipcode) => async (dispatch) => {

    const data = await fetchZipWeather(zipcode);

    if (data.errormessage) {
        return Promise.reject(true);
    }

    dispatch({
        type: ADD_ZIP_WEATHER,
        payload: data
    })

}





