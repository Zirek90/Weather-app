import React from 'react'
import Form from "./components/form"
import WeatherConditions from "./components/weatherConditions"
import AppTwo from "./appTwo";
import Clock from "./components/clock";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "",
            country: "",
            temperature: "",
            pressure: "",
            humidity: "",
            description: "",
            wind: "",
            errors: "",
            long: "",
            lat: ""
        }
    }

    // getting api and putting data to states
    getWeather = async (e) => {
        e.preventDefault();

        const apiKey = "282e9ed46fc324d3723c7446a8268ff2";
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}&units=metric`);

        const data = await getData.json();
        console.log(data);

        if (city && country) {
            this.setState({
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                wind: data.wind.speed,
                errors: ""
            })
        }
        else {
            this.setState({
                errors: "Ops you miss something, please spell name of city and country correctly"

            })
        }

    }

    // downloading background images and putting them to table
    render() {
        const clearSky = [
            (require(`./img/clearSky.jpg`)),
            (require(`./img/cloudySky.jpg`)),
            (require(`./img/rainySky.jpg`)),
            (require(`./img/hazeSky.jpg`)),
            (require(`./img/stormySky.jpg`))
        ]

        const images = [
            {background: `url(" ${clearSky[0]}")center/cover no-repeat`},
            {background: `url(" ${clearSky[1]}")center/cover no-repeat`},
            {background: `url(" ${clearSky[2]}")center/cover no-repeat`},
            {background: `url(" ${clearSky[3]}")center/cover no-repeat`},
            {background: `url(" ${clearSky[4]}")center/cover no-repeat`}
        ]

    // setting if statements for all weather conditions
        if (this.state.description.includes("clear")) {
            return (
                <div>
                    <div className="container" style={images[0]}>
                        <div className="col-sm-4">
                            <div className="weatherInfo">
                                <div className="form">
                                    <Form getWeather={this.getWeather}/>
                                </div>
                                <WeatherConditions
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4 middleBar">
                            <Clock/>
                        </div>
                        <div className="col-sm-4 currentWeather">
                            <h1>Weather conditions in your area</h1>
                            <div className="weatherInfoTwo">
                                <AppTwo
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.description.includes("cloud")) {
            return (
                <div>
                    <div className="container"style={images[1]}>
                        <div className="col-sm-4">
                            <div className="weatherInfo">
                                <div className="form">
                                    <Form getWeather={this.getWeather}/>
                                </div>
                                <WeatherConditions
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4 middleBar">
                            <Clock/>
                        </div>
                        <div className="col-sm-4 currentWeather">
                            <h1>Weather conditions in your area</h1>
                            <div className="weatherInfoTwo">
                                <AppTwo
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.description.includes("rain")) {
            return (
                <div>
                    <div className="container" style={images[2]}>
                        <div className="col-sm-4">
                            <div className="weatherInfo">
                                <div className="form">
                                    <Form getWeather={this.getWeather}/>
                                </div>
                                <WeatherConditions
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4 middleBar">
                            <Clock/>
                        </div>
                        <div className="col-sm-4 currentWeather">
                            <h1>Weather conditions in your area</h1>
                            <div className="weatherInfoTwo">
                                <AppTwo
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.description.includes("haze")) {
            return (
                <div>
                    <div className="container" style={images[3]}>
                        <div className="col-sm-4">
                            <div className="weatherInfo">
                                <div className="form">
                                    <Form getWeather={this.getWeather}/>
                                </div>
                                <WeatherConditions
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4 middleBar">
                            <Clock/>
                        </div>
                        <div className="col-sm-4 currentWeather">
                            <h1>Weather conditions in your area</h1>
                            <div className="weatherInfoTwo">
                                <AppTwo
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.description.includes("thunderstorm")){
            return (
                <div>
                    <div className="container" style={images[4]}>
                        <div className="col-sm-4">
                            <div className="weatherInfo">
                                <div className="form">
                                    <Form getWeather={this.getWeather}/>
                                </div>
                                <WeatherConditions
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4 middleBar">
                            <Clock/>
                        </div>
                        <div className="col-sm-4 currentWeather">
                            <h1>Weather conditions in your area</h1>
                            <div className="weatherInfoTwo">
                                <AppTwo
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="container">
                        <div className="col-sm-4">
                            <div className="weatherInfo">
                                <div className="form">
                                    <Form getWeather={this.getWeather}/>
                                </div>
                                <WeatherConditions
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4 middleBar">
                            <Clock/>
                        </div>
                        <div className="col-sm-4 currentWeather">
                            <h1>Weather conditions in your area</h1>
                            <div className="weatherInfoTwo">
                                <AppTwo
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    pressure={this.state.pressure}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    wind={this.state.wind}
                                    errors={this.state.errors}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default App
