import React from 'react'
import Chart from "react-apexcharts";
function CustomChart() {
  const series = [19, 1, 20, 60];

  // const series =
  //   [{
  //     data: [13, 12, 33, 53, 65],
  //     color: "#EE6D7A", // in case you want to apply series colour directly here
  //   }]

  const options = {
    chart: {
      width: 380,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },

    fill: {
      color: "#EE6D7A",
      // type: 'gradient',
    },
    // legend: {
    //   formatter: function (val, opts) {
    //     return val + " - " + opts.w.globals.series[opts.seriesIndex]
    //   }
    // },
    legend: {
      show: false // Set show property to false to hide the legend text
    },

    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div>
      <div id="chart">
        <Chart options={options} series={series} type="donut" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default CustomChart