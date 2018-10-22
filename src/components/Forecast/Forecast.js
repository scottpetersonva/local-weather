import React from "react"

const Forecast = props => (
  <div>
    <div className='card blue-grey darken-1'>

    
      
    {props.day1 &&


      <div className='row'>      
        <div className='col l6 m6 s12'>
        
        {/* <span className="card-title white-text">Forecast</span> */}
        <div className='row valign-wrapper'>
              <div className='col s4 m4 l4 center-align'>
                <img src={props.img1} alt='img1' className='responsive-img'></img>
              </div>
              <div className='col s8 m8 l8'>
                <div className="card-content white-text">
                  <span className="card-title">{props.day1}</span>
                  <div>
                    {props.condition1 && <p>{props.condition1}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        

        <div className='col l6 m6 s12'>
          {/* <div className="card blue-grey darken-1"> */}
            <div className='row valign-wrapper'>
              <div className='col s4 m4 l4 center-align'>
                <img src={props.img2} alt='img2' className='responsive-img'></img>
              </div>
              <div className='col s8 m8 l8'>
                <div className="card-content white-text">
                  <span className="card-title">{props.day2}</span>
                  <div>
                    {props.condition2 && <p>{props.condition2}</p>}
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
        </div>

      }

    {props.day3 &&
    
      <div className='row'>
        <div className='col l6 m6 s12'>
          {/* <div className="card blue-grey darken-1"> */}
            <div className='row valign-wrapper'>
              <div className='col s4 m4 l4 center-align'>
                <img src={props.img3} alt='img3' className='responsive-img'></img>
              </div>
              <div className='col s8 m8 l8'>
                <div className="card-content white-text">
                  <span className="card-title">{props.day3}</span>
                  <div>
                    {props.condition3 && <p>{props.condition3}</p>}
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>

           
    

        <div className='col l6 m6 s12'>
          {/* <div className="card blue-grey darken-1"> */}
            <div className='row valign-wrapper'>
              <div className='col s4 m4 l4 center-align'>
                <img src={props.img4} alt='img4' className='responsive-img'></img>
              </div>
              <div className='col s8 m8 l8'>
                <div className="card-content white-text">
                  <span className="card-title">{props.day4}</span>
                  <div>
                    {props.condition4 && <p>{props.condition4}</p>}
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
        </div>
}

{props.day5 &&
  <div className='row'>

        <div className='col l6 m6 s12'>
          {/* <div className="card blue-grey darken-1"> */}
            <div className='row valign-wrapper'>
              <div className='col s4 m4 l4 center-align'>
                <img src={props.img5} alt='img5' className='responsive-img'></img>
              </div>
              <div className='col s8 m8 l8'>
                <div className="card-content white-text">
                  <span className="card-title">{props.day5}</span>
                  <div>
                    {props.condition5 && <p>{props.condition5}</p>}
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>

        <div className='col l6 m6 s12'>
          {/* <div className="card blue-grey darken-1"> */}
            <div className='row valign-wrapper'>
              <div className='col s4 m4 l4 center-align'>
                <img src={props.img6} alt='img6' className='responsive-img'></img>
              </div>
              <div className='col s8 m8 l8'>
                <div className="card-content white-text">
                  <span className="card-title">{props.day6}</span>
                  <div>
                    {props.condition6 && <p>{props.condition6}</p>}
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>

        </div>

}
</div>
  </div>
)

export default Forecast


