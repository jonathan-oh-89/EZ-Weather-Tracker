import { ADD_ZIP_WEATHER, RESET_WEATHER } from "../actions";

const initialState = {
    allZipWeather: [],
    showSearchError: false
}

export const zipcodeWeatherReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_ZIP_WEATHER: {
            const zipWeatherObject = {
                id: payload.zipcode,
                zipLocation: payload.location,
                zipWeather: payload.current,
                forecast: payload.forecast,
                errormessage: payload.errormessage
            }

            return {
                ...state,
                showSearchError: false,
                allZipWeather: [...state.allZipWeather, zipWeatherObject]
            }
        }
        case RESET_WEATHER: {
            return initialState
        }
        default:
            return state
    }
}
