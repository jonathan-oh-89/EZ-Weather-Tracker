import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import ZipWeatherCard from "../ZipWeatherCard/ZipWeatherCard";
import { Switch, Typography, Box } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import "./ZipCarousel.css"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Forecast from "../Forecast/Forecast";


const ZipCarousel = ({ allZipWeather }) => {
    // console.log("*** ZipCarousel ***");

    const [showForecast, toggleForecast] = useState(false);
    const [showFahrenheit, toggleTempDisplay] = useState(true);
    const [slideInfo, setSlideInfo] = useState({
        index: 0,
        slideIn: true,
        slideDirection: 'left',
        length: allZipWeather.length
    });

    useEffect(() => {
        const slideIndex = Number(localStorage.getItem("slideIndex"))
        setSlideInfo({ ...slideInfo, index: slideIndex })
    }, [])

    useEffect(() => {
        localStorage.setItem("slideIndex", slideInfo.index)
    }, [slideInfo.index])

    let slides = allZipWeather;
    let content = slides[slideInfo.index];

    if (slideInfo.length !== allZipWeather.length) {
        if (allZipWeather.length > 1) {
            setSlideInfo({
                ...slideInfo,
                length: allZipWeather.length,
                index: allZipWeather.length - 1
            })
        } else {
            setSlideInfo({
                ...slideInfo,
                length: allZipWeather.length,
                index: 0
            })
        }
        content = slides[slideInfo.index]
    }

    const numSlides = slides.length;


    function Arrow(props) {
        const { direction, clickFunction } = props;
        const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

        if (allZipWeather.length > 1) {
            return <div onClick={clickFunction}>{icon}</div>;
        } else if (allZipWeather.length === 1) {
            return <div className="arrowDisabled">{icon}</div>;
        } else {
            return null;
        }
    }

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (slideInfo.index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';

        setSlideInfo({ ...slideInfo, slideIn: false, slideDirection: direction })

        setTimeout(() => {
            setSlideInfo({ ...slideInfo, index: newIndex, slideIn: true, slideDirection: oppDirection })
        }, 500);
    };

    return (
        <div>
            <div id="switch">
                <Typography variant="subtitle2" className={(showFahrenheit ? "fonts" : "graySwitchFont")}>
                    <Box fontWeight="fontWeightLight">
                        Fahrenheit
                    </Box>
                </Typography>
                <Switch
                    onChange={() => { toggleTempDisplay(!showFahrenheit) }}
                    name="checkedA" />
                <Typography variant="subtitle2" className={(showFahrenheit ? "graySwitchFont" : "fonts")}>
                    <Box fontWeight="fontWeightLight">
                        Celsius
                    </Box>
                </Typography>
            </div>

            <div className="carousel">
                {showForecast ? <Forecast toggleForecast={toggleForecast} content={content} showFahrenheit={showFahrenheit} /> : null}

                <Arrow direction='left' clickFunction={() => onArrowClick('left')} />

                <Slide in={slideInfo.slideIn} direction={slideInfo.slideDirection}>
                    <div className="weathercard">
                        <ZipWeatherCard content={content} toggleForecast={toggleForecast} showFahrenheit={showFahrenheit} />
                    </div>
                </Slide>

                <Arrow direction='right' clickFunction={() => onArrowClick('right')} />
            </div>

        </div>



    )
}

export default ZipCarousel;
