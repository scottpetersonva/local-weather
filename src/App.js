import React, { Component } from 'react';
import './App.css';

import Title from "./components/Title/Title"
import Form from "./components/Form/Form"
import CurrentConditions from "./components/CurrentConditions/CurrentConditions"
import CityInfo from './components/CityInfo/CityInfo';


// import key_one from './config'
const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {


  // setting state of all the the information that will be brought back from the api
  state = {
    city: undefined,
    zipCode: undefined,
    region: undefined,
    temperature: undefined,
    humidity: undefined,
    wind: undefined,
    windDirection: undefined,
    condition: undefined,
    currentImage: undefined,
    error: undefined
  }

  // api call
  getWeatherByZip = async (e) => {

    e.preventDefault()


    const zip = e.target.elements.zip.value

    const api_call = await fetch("http://api.weatherstack.com/current?access_key=" + API_KEY + "&query=" + zip)

    const data = await api_call.json()


    console.log('forecast:')
    console.log(data)
    console.log('--------------------------')


    // if user enters zip code then...
    if (zip) {

      // setting state of application after api call with all of the data from the api

      this.setState({
        city: data.location.name,
        state: data.location.region,
        zip: data.request.query,
        temperature: data.current.temperature,
        humidity: data.current.humidity,
        condition: data.current.weather_descriptions[0],
        wind: data.current.wind_speed,
        windDirection: data.current.wind_dir,
        currentImage: data.current.weather_icons[0],
        error: undefined
      })
      console.log("city: " + this.state.city)
      console.log("zip: " + zip)
      console.log("temperature: " + this.state.temperature)
      console.log("humidity: " + this.state.humidity + "%")
      console.log("condition: " + this.state.condition)
      console.log("wind: " + this.state.wind + " MPH")
      console.log("wind direction: " + this.state.windDirection)
      console.log("..........................")

    }
    // else, return original state
    else {
      this.setState({
        city: undefined,
        zipCode: undefined,
        region: undefined,
        temperature: undefined,
        humidity: undefined,
        wind: undefined,
        windDirection: undefined,
        condition: undefined,
        currentImage: undefined,
        error: "Please enter a zip code"
      })
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col l3 m4 s12'>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">

                <Form
                  getWeatherByZip={this.getWeatherByZip}
                  error={this.state.error}
                />

              </div>
            </div>
          </div>
          <div className='col l9 m8 s12'>

          <Title />
            <div className='row'>
              <div className='col l12'>

                <CityInfo
                  city={this.state.city}
                  state={this.state.state}
                  zip={this.state.zip}
                  error={this.state.error}
                />

              </div>
              <div className='col l12'>

                <CurrentConditions
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  condition={this.state.condition}
                  wind={this.state.wind}
                  windDirection={this.state.windDirection}
                  currentImage={this.state.currentImage}
                  error={this.state.error}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
