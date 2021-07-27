const express = require('express');
const router = express.Router();

const { currentWeather } = require('./weatherapi');


router.get('/test', async (req, res) => {
    const { zip } = req.query;
    let data = await currentWeather();
    res.send(data);
})

router.post('/getweatherbyzip', async (req, res) => {
    const { zip } = req.body;
    console.log("Got zip weather request for:", zip);
    let data = await currentWeather(zip);
    res.send(data);
})

router.get('*', (req, res) => {
    res.send('Did not reach any apis');
})

module.exports = router;