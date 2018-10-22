import React from "react"

const CurrentConditions = props => (
<div>

{ props.temperature &&
<div className="card blue-grey darken-1">
<div className='row valign-wrapper'>
    <div className='col s4 m4 l4 center-align'>
    {/* <div className="card-content"> */}
        <img src={props.currentImage} alt='today-image' className='responsive-img'></img>
        {/* </div> */}
    </div>
    <div className='col s8 m8 l8'>
        <div className="card-content white-text">
            <span className="card-title">Current Conditions</span>
    <div>
        { props.temperature && <p>Temperature: { props.temperature } F</p> }
        { props.humidity && <p>Humidity: { props.humidity }%</p> }
        { props.condition && <p>Conditions: { props.condition }</p> }
        { props.wind && <p>Wind: { props.wind } MPH, {props.windDirection}</p> }
    </div>

    </div>
    </div>
</div>
</div>
 }


        </div>

)

export default CurrentConditions