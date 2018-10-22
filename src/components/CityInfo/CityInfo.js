import React from "react"

const CityInfo = props => (
<div>

{ props.city &&
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">{ props.city }, {props.state}</span>

         
    <div>
        { props.sunrise && <p>Sunrise: { props.sunrise }</p> }
        { props.sunset && <p>Sunset: { props.sunset }</p> }
    </div>

    </div>
</div> }


        </div>

)

export default CityInfo