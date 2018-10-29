
import React from 'react';
import Plot from 'react-plotly.js';
import './Graph.css';

const Graph = props => (


  <div className="card blue-grey darken-1">
    {props.day1Lo &&


      
        
          <div className="card-content white-text center-align">

            <Plot
              data={
                [

                  {
                    type: 'scatter',
                    x: [props.day1Lo, props.day2Lo, props.day3Lo, props.day4Lo, props.day5Lo, props.day6Lo],
                    y: [props.day1, props.day2, props.day3, props.day4, props.day5, props.day6],
                    mode: 'markers',
                    name: 'Temperature',
                    marker: {
                      color: 'rgba(156, 165, 196, 0.95)',
                      line: {
                        color: 'rgba(156, 165, 196, 1.0)',
                        width: 1,
                      },
                      symbol: 'circle',
                      size: 16
                    }
                  },
                  {
                    x: [props.day1Hi, props.day2Hi, props.day3Hi, props.day4Hi, props.day5Hi, props.day6Hi],
                    y: [props.day1, props.day2, props.day3, props.day4, props.day5, props.day6],
                    mode: 'markers',
                    name: 'Temperature',
                    marker: {
                      color: 'rgba(204, 204, 204, 0.95)',
                      line: {
                        color: 'rgba(217, 217, 217, 1.0)',
                        width: 1,
                      },
                      symbol: 'circle',
                      size: 16
                    }
                  },
                ]}
              layout={{
                
                title: '6 Day Forecast Chart',
                
                xaxis: {
                  showgrid: false,
                  showline: true,
                  linecolor: 'rgb(102, 102, 102)',
                  titlefont: {
                    font: {
                      color: 'rgb(204, 204, 204)'
                    }
                  },
                  tickfont: {
                    font: {
                      color: 'rgb(102, 102, 102)'
                    }
                  },
                  autotick: false,
                  dtick: 10,
                  ticks: 'outside',
                  tickcolor: 'rgb(102, 102, 102)'
                },
                margin: {
                  l: 40,
                  r: 40,
                  b: 40,
                  t: 40
                },
                legend: {
                  font: {
                    size: 10,
                  },
                  yanchor: 'middle',
                  xanchor: 'right'
                },
                width: 600,
                height: 600,
                paper_bgcolor: 'rgb(84,110,122)',
                plot_bgcolor: 'rgb(84,110,122)',
                hovermode: 'closest',
                responsive: true
              }}


            />
                          

          </div>
    }
  </div>
)

export default Graph


