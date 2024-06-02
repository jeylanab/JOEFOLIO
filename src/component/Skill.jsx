import React, { Component } from "react";
import Chart from "react-apexcharts";

class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'GraphQL']
        }
      },
      series: [
        {
          name: "series-1",
          data: [90, 85, 80, 95, 75, 70, 60, 50] // Example percentages, adjust as needed
        }
      ]
    };
  }

  render() {
    return (
      <div className="Skill">
        <div className="row">
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