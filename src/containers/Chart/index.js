import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './style.scss';
import {connect} from "react-redux";


class Chart extends Component {
  render(){
    if (this.props.hours.length === 0 || this.props.temp120h.length === 0) {
      return null;
    }

    const data = {
      labels: this.props.hours.asMutable(),
      datasets: [
        {
          label: 'Temperature',
          response: false,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.temp120h.asMutable()
        }
      ],
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            ticks: {
              min: 40,
              max: 40,
              steps: 40,
              stepValue: 1,
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero:true,
            }
          }]
        }
      }
    };

    return(
    <div className="wrapper-chart">
      <h2 className="header-chart">Temperature for next 120 hours</h2>
      <Line data={data} />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hours: state.city.hours,
    temp120h: state.city.temp120h
  }
};

export default connect(mapStateToProps, null)(Chart);
