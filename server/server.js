
const path = require('path')

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
}

const cors = require('cors')
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors())

const api = require('./api');
app.use('/weatherapi', api)

app.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});




app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})


