import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Plot from 'react-plotly.js';
import Moment from 'react-moment';



import Title from "./components/Title/Title"
import Form from "./components/Form/Form"
import CurrentConditions from "./components/CurrentConditions/CurrentConditions"
import Forecast from "./components/Forecast/Forecast"
import Today from "./components/Today/Today"
import CityInfo from './components/CityInfo/CityInfo';
import Graph from './components/Graph/Graph';

import REACT_APP_API_K from './config_keys'
const API_KEY = API_K

class App extends Component {

  state = {
    city: undefined,
    zipCode: undefined,

    temperature: undefined,
    humidity: undefined,
    wind: undefined,
    windDirection: undefined,
    condition: undefined,
    currentImage: undefined,

    todayHi: undefined,
    todayLo: undefined,
    todaydHumidity: undefined,
    todayWind: undefined,
    todayForecast: undefined,
    todayCondition: undefined,
    todayImage: undefined,

    day0: undefined,
    day1: undefined,
    day2: undefined,
    day3: undefined,
    day4: undefined,
    day5: undefined,
    day6: undefined,

    img1: undefined,
    img2: undefined,
    img3: undefined,
    img4: undefined,
    img5: undefined,
    img6: undefined,

    day1Hi: undefined,
    day2Hi: undefined,
    day3Hi: undefined,
    day4Hi: undefined,
    day5Hi: undefined,
    day6Hi: undefined,

    day1Lo: undefined,
    day2Lo: undefined,
    day3Lo: undefined,
    day4Lo: undefined,
    day5Lo: undefined,
    day6Lo: undefined,

    condition0: undefined,
    condition1: undefined,
    condition2: undefined,
    condition3: undefined,
    condition4: undefined,
    condition5: undefined,
    condition6: undefined,

    error: undefined
  }


  getWeatherByZip = async (e) => {

    e.preventDefault()

    const zip = e.target.elements.zip.value

    const api_call = await fetch("https://api.apixu.com/v1/forecast.json?key=" + API_KEY + "&q=" + zip + "&days=7")


    const data = await api_call.json()

    console.log('forecast:')
    console.log(data)
    console.log('--------------------------')

    // const conversion = data.forecast.forecastday[1].date.substring(5)

    // console.log(conversion)



    if (zip) {

      // console.log(data)

      this.setState({
        city: data.location.name,
        state: data.location.region,
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,


        zip: zip,

        temperature: data.current.temp_f,
        humidity: data.current.humidity,
        condition: data.current.condition.text,
        wind: data.current.wind_mph,
        windDirection: data.current.wind_dir,
        currentImage: data.current.condition.icon,

        todayHi: data.forecast.forecastday[0].day.maxtemp_f,
        todayLo: data.forecast.forecastday[0].day.mintemp_f,
        todaydHumidity: data.forecast.forecastday[0].day.avghumidity,
        todayWind: data.forecast.forecastday[0].day.maxwind_mph,
        todayImage: data.forecast.forecastday[0].day.condition.icon,
        todayCondition: data.forecast.forecastday[0].day.condition.text,

        day1Hi: data.forecast.forecastday[1].day.maxtemp_f,
        day2Hi: data.forecast.forecastday[2].day.maxtemp_f,
        day3Hi: data.forecast.forecastday[3].day.maxtemp_f,
        day4Hi: data.forecast.forecastday[4].day.maxtemp_f,
        day5Hi: data.forecast.forecastday[5].day.maxtemp_f,
        day6Hi: data.forecast.forecastday[6].day.maxtemp_f,

        day1Lo: data.forecast.forecastday[1].day.mintemp_f,
        day2Lo: data.forecast.forecastday[2].day.mintemp_f,
        day3Lo: data.forecast.forecastday[3].day.mintemp_f,
        day4Lo: data.forecast.forecastday[4].day.mintemp_f,
        day5Lo: data.forecast.forecastday[5].day.mintemp_f,
        day6Lo: data.forecast.forecastday[6].day.mintemp_f,

        day1: data.forecast.forecastday[1].date.substring(5),
        day2: data.forecast.forecastday[2].date.substring(5),
        day3: data.forecast.forecastday[3].date.substring(5),
        day4: data.forecast.forecastday[4].date.substring(5),
        day5: data.forecast.forecastday[5].date.substring(5),
        day6: data.forecast.forecastday[6].date.substring(5),


        img1: data.forecast.forecastday[1].day.condition.icon,
        img2: data.forecast.forecastday[2].day.condition.icon,
        img3: data.forecast.forecastday[3].day.condition.icon,
        img4: data.forecast.forecastday[4].day.condition.icon,
        img5: data.forecast.forecastday[5].day.condition.icon,
        img6: data.forecast.forecastday[6].day.condition.icon,

        condition0: data.forecast.forecastday[0].day.condition.text,
        condition1: data.forecast.forecastday[1].day.condition.text,
        condition2: data.forecast.forecastday[2].day.condition.text,
        condition3: data.forecast.forecastday[3].day.condition.text,
        condition4: data.forecast.forecastday[4].day.condition.text,
        condition5: data.forecast.forecastday[5].day.condition.text,
        condition6: data.forecast.forecastday[6].day.condition.text,
        error: undefined
      })
      console.log("city: " + this.state.city)
      console.log("zip: " + zip)
      console.log("temperature: " + this.state.temperature)
      console.log("humidity: " + this.state.humidity + "%")
      console.log("condition: " + this.state.condition)
      console.log("wind: " + this.state.wind + " MPH")
      console.log("wind direction: " + this.state.windDirection)
      console.log("day1: " + this.state.day1)
      console.log("day1: " + this.state.condition1)
      console.log("..........................")

    } else {
      this.setState({
        city: undefined,
        zipCode: undefined,
        region: undefined,
        sunrise: undefined,
        sunset: undefined,

        temperature: undefined,
        humidity: undefined,
        wind: undefined,
        windDirection: undefined,
        condition: undefined,
        currentImage: undefined,

        todayHi: undefined,
        todayLo: undefined,
        todaydHumidity: undefined,
        todayWind: undefined,
        todayForecast: undefined,
        todayCondition: undefined,
        todayImage: undefined,

        day0: undefined,
        day1: undefined,
        day2: undefined,
        day3: undefined,
        day4: undefined,
        day5: undefined,
        day6: undefined,

        img1: undefined,
        img2: undefined,
        img3: undefined,
        img4: undefined,
        img5: undefined,
        img6: undefined,

        condition0: undefined,
        condition1: undefined,
        condition2: undefined,
        condition3: undefined,
        condition4: undefined,
        condition5: undefined,
        condition6: undefined,

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
              <div className='col l4 m12 s12'>

                <CityInfo
                  city={this.state.city}
                  state={this.state.state}
                  zip={this.state.zip}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />


              </div>
              <div className='col l4 m12 s12'>
                <Today
                  todayHi={this.state.todayHi}
                  todayLo={this.state.todayLo}
                  todaydHumidity={this.state.todaydHumidity}
                  todayHumidity={this.state.todayHumidity}
                  todayImage={this.state.todayImage}
                  todayCondition={this.state.todayCondition}
                  error={this.state.error}




                />
              </div>
              <div className='col l4 m12 s12'>
                

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

            <Forecast
              day1={this.state.day1}
              img1={this.state.img1}
              condition1={this.state.condition1}
              day1Hi={this.state.day1Hi}
              day1Lo={this.state.day1Lo}

              day2={this.state.day2}
              img2={this.state.img2}
              condition2={this.state.condition2}
              day2Hi={this.state.day2Hi}
              day2Lo={this.state.day2Lo}

              day3={this.state.day3}
              img3={this.state.img3}
              condition3={this.state.condition3}
              day3Hi={this.state.day3Hi}
              day3Lo={this.state.day3Lo}

              day4={this.state.day4}
              img4={this.state.img4}
              condition4={this.state.condition4}
              day4Hi={this.state.day4Hi}
              day4Lo={this.state.day4Lo}

              day5={this.state.day5}
              img5={this.state.img5}
              condition5={this.state.condition5}
              day5Hi={this.state.day5Hi}
              day5Lo={this.state.day5Lo}

              day6={this.state.day6}
              img6={this.state.img6}
              condition6={this.state.condition6}
              day6Hi={this.state.day6Hi}
              day6Lo={this.state.day6Lo}

              error={this.state.error}


            />




            {/* <Graph
            day1={this.state.day1}
            day2={this.state.day2}
            day3={this.state.day3}
            day4={this.state.day4}
            day5={this.state.day5}
            day6={this.state.day6}

            day1Hi={this.state.day1Hi}
            day2Hi={this.state.day2Hi}
            day3Hi={this.state.day3Hi}
            day4Hi={this.state.day4Hi}
            day5Hi={this.state.day5Hi}
            day6Hi={this.state.day6Hi}

            day1Lo={this.state.day1Lo}
            day2Lo={this.state.day2Lo}
            day3Lo={this.state.day3Lo}
            day4Lo={this.state.day4Lo}
            day5Lo={this.state.day5Lo}
            day6Lo={this.state.day6Lo}
          /> */}
          </div>

        </div>









      </div>
    );
  }
}




export default App;
