
export const fetchZipWeather = async (zipcode) => {
    try {
        // const apiURL = "http://localhost:3002/weatherapi/getweatherbyzip"
        const apiURL = "/weatherapi/getweatherbyzip"
        const response = await fetch(apiURL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({ zip: zipcode })

        });

        const zipData = await response.json();

        return zipData;

    } catch (error) {
        console.log("Got error: ", error);
    }
};