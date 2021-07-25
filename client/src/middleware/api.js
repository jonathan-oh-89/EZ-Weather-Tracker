
export const fetchZipWeather = async (zipcode) => {
    try {
        const response = await fetch(`http://localhost:3002/weatherapi/getweatherbyzip`, {
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