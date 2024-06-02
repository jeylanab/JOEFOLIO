import React, { Component } from "react";
import Chart from "react-apexcharts";

class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false // Disable the toolbar to remove the download icon
          }
        },
        xaxis: {
          categories: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'GraphQL']
        }
      },
      series: [
        {
          name: "percentage",
          data: [90, 85, 80, 80, 75, 70, 60, 60] // Example percentages, adjust as needed
        }
      ]
    };
  }

  render() {
    return (
      <div className="Skill m-10 lg:m-10 ">
         <h2 className='whatDo font-semibold lg:text-4xl text-center text-3xl p-5'>Skills</h2>
        <div className="row  flex justify-center">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;