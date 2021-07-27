const path = require('path');
const cors = require('cors');
const express = require('express');

const app = express();

const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://ez-weather-tracker.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}


app.use(express.json());
app.use(cors(corsOptions));


if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
}

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


const PORT = process.env.PORT || 8080;

const api = require('./api');
app.use('/weatherapi', api);

app.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});




app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
})


