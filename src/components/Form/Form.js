import React from "react"

const Form = props => (
    <div>
        <form onSubmit={props.getWeatherByZip}>
            <input type="text" name="zip" placeholder="Zip Code..." />
            <button className='btn orange blue-grey-text text-darken-2'>Search</button>


        </form>
        <div>
            <p className='orange-text'><b> {props.error} </b></p>
        </div>
    </div>
)

export default Form