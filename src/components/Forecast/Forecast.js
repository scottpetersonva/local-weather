import React from "react"

import Moment from 'react-moment';


class Forecast extends React.Component {
  render() {

    const dt = this.props.day1;
    return (


      <div>
        {/* <div className='card blue-grey darken-1'> */}



        {this.props.day1 &&


          <div className='row'>
            <div className='col l6 m12 s12'>

              {/* <span className="card-title white-text">Forecast</span> */}
              <div className="card blue-grey darken-1">

                <div className='row valign-wrapper'>
                  <div className='col s4 m4 l4 center-align'>
                    <img src={this.props.img1} alt='img1' className='responsive-img'></img>
                  </div>
                  <div className='col s8 m8 l8'>
                    <div className="card-content white-text">
                      <span className="card-title">{this.props.day1}</span>
                      <div>
                        {this.props.condition1 && <p>{this.props.condition1}</p>}
                        {this.props.day1Hi && <p>Hi Temp: {this.props.day1Hi}</p>}
                        {this.props.day1Lo && <p>Lo Temp: {this.props.day1Lo}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='col l6 m12 s12'>
              <div className="card blue-grey darken-1">
                <div className='row valign-wrapper'>
                  <div className='col s4 m4 l4 center-align'>
                    <img src={this.props.img2} alt='img2' className='responsive-img'></img>
                  </div>
                  <div className='col s8 m8 l8'>
                    <div className="card-content white-text">
                      <span className="card-title">{this.props.day2}</span>
                      <div>
                        {this.props.condition2 && <p>{this.props.condition2}</p>}
                        {this.props.day2Hi && <p>Hi Temp: {this.props.day2Hi}</p>}
                        {this.props.day2Lo && <p>Lo Temp: {this.props.day2Lo}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        }

        {this.props.day3 &&

          <div className='row'>
            <div className='col l6 m12 s12'>
              <div className="card blue-grey darken-1">
                <div className='row valign-wrapper'>
                  <div className='col s4 m4 l4 center-align'>
                    <img src={this.props.img3} alt='img3' className='responsive-img'></img>
                  </div>
                  <div className='col s8 m8 l8'>
                    <div className="card-content white-text">
                      <span className="card-title">{this.props.day3}</span>
                      <div>
                        {this.props.condition3 && <p>{this.props.condition3}</p>}
                        {this.props.day3Hi && <p>Hi Temp: {this.props.day3Hi}</p>}
                        {this.props.day3Lo && <p>Lo Temp: {this.props.day3Lo}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className='col l6 m12 s12'>
              <div className="card blue-grey darken-1">
                <div className='row valign-wrapper'>
                  <div className='col s4 m4 l4 center-align'>
                    <img src={this.props.img4} alt='img4' className='responsive-img'></img>
                  </div>
                  <div className='col s8 m8 l8'>
                    <div className="card-content white-text">
                      <span className="card-title">{this.props.day4}</span>
                      <div>
                        {this.props.condition4 && <p>{this.props.condition4}</p>}
                        {this.props.day4Hi && <p>Hi Temp: {this.props.day4Hi}</p>}
                        {this.props.day4Lo && <p>Lo Temp: {this.props.day4Lo}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        {this.props.day5 &&
          <div className='row'>

            <div className='col l6 m12 s12'>
              <div className="card blue-grey darken-1">
                <div className='row valign-wrapper'>
                  <div className='col s4 m4 l4 center-align'>
                    <img src={this.props.img5} alt='img5' className='responsive-img'></img>
                  </div>
                  <div className='col s8 m8 l8'>
                    <div className="card-content white-text">
                      <span className="card-title">{this.props.day5}</span>
                      <div>
                        {this.props.condition5 && <p>{this.props.condition5}</p>}
                        {this.props.day5Hi && <p>Hi Temp: {this.props.day5Hi}</p>}
                        {this.props.day5Lo && <p>Lo Temp: {this.props.day5Lo}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col l6 m12 s12'>
              <div className="card blue-grey darken-1">
                <div className='row valign-wrapper'>
                  <div className='col s4 m4 l4 center-align'>
                    <img src={this.props.img6} alt='img6' className='responsive-img'></img>
                  </div>
                  <div className='col s8 m8 l8'>
                    <div className="card-content white-text">
                      <span className="card-title">{this.props.day6}</span>
                      <div>
                        {this.props.condition6 && <p>{this.props.condition6}</p>}
                        {this.props.day6Hi && <p>Hi Temp: {this.props.day6Hi}</p>}
                        {this.props.day6Lo && <p>Lo Temp: {this.props.day6Lo}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        }
      </div>


      // </div>
    )
  }
}

export default Forecast


