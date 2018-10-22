import React from "react"

const Today = props => (
    <div>
        {props.todayHi &&
            
            <div className="card blue-grey darken-1">
                <div className='row valign-wrapper'>
                    <div className='col s4 m4 l4 center-align'>
                    {/* <div className="card-content"> */}
                        <img src={props.todayImage} alt='today-image' className='responsive-img'></img>
                        {/* </div> */}
                    </div>
                    <div className='col s8 m8 l8'>
                        <div className="card-content white-text">
                            <span className="card-title">Today</span>
                            <div>
                                {props.todayHi && <p>Hi Temp: {props.todayHi} F</p>}
                                {props.todayLo && <p>Lo Temp: {props.todayLo} F</p>}
                                {props.todaydHumidity && <p>Humidity: {props.todaydHumidity}%</p>}
                                {props.todayWind && <p>Wind: {props.todayWind} MPH</p>}
                                {props.todayCondition && <p>Conditions: {props.todayCondition}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
    </div>

)

export default Today